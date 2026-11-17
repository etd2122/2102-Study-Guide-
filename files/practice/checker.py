"""Runs a student's code and compares it with the reference solution.
Used by practice.html (in the browser, via Pyodide) and by the build script (to test every problem)."""
import ast, io, contextlib, math, traceback
import numpy as np
import pandas as pd

pd.set_option("display.width", 90)
pd.set_option("display.max_columns", 12)
pd.set_option("display.max_rows", 40)


def run_code(code, ns):
    """Run code like a notebook/REPL: print the value of a bare expression on its own line.
    Returns (output, error) as text."""
    buf = io.StringIO()
    err = ""
    try:
        tree = ast.parse(code or "")
    except SyntaxError as e:
        return "", f"SyntaxError on line {e.lineno}: {e.msg}\n  {(e.text or '').rstrip()}"
    with contextlib.redirect_stdout(buf):
        for st in tree.body:
            try:
                if isinstance(st, ast.Expr):
                    v = eval(compile(ast.Expression(st.value), "<your code>", "eval"), ns)
                    if v is not None:
                        print(repr(v))
                else:
                    exec(compile(ast.Module([st], []), "<your code>", "exec"), ns)
            except Exception as e:
                err = f"{type(e).__name__} on line {st.lineno}: {str(e).splitlines()[0] if str(e) else ''}"
                break
    return buf.getvalue(), err


ERROR_HINTS = [
    ("KeyError", "A KeyError means that column or label doesn't exist. Check the spelling, and remember: after index_col=..., the date is the INDEX, not a column."),
    ("Could not evaluate", "plotnine couldn't find that column. Column names go in quotes and must match exactly; a date INDEX is not a column: use df.reset_index() first."),
    ("NameError", "A NameError means a name isn't defined yet: a typo, a variable you haven't created, or (in plotnine) a column name without quotes: p9.aes(x=\"total_bill\")."),
    ("ambiguous", "'The truth value of a Series is ambiguous': use & and | (not and / or) and put each condition in parentheses."),
    ("AttributeError", "An AttributeError means that method doesn't exist for this object: check the spelling and whether you need a column (df['col']) first."),
    ("TypeError", "A TypeError means the types don't fit, e.g. adding text to a number, or calling something that isn't a function."),
    ("IndexError", "An IndexError means the position is past the end. Python counts from 0, so the last of n items is n - 1 (or -1)."),
    ("SyntaxError", "A SyntaxError means Python can't read the line: look for a missing bracket, quote, comma or colon."),
    ("IndentationError", "An IndentationError means a line starts with unexpected spaces: line everything up on the left."),
]


def error_hint(err):
    for key, msg in ERROR_HINTS:
        if key in err:
            return msg
    return ""


def _num(x):
    return isinstance(x, (int, float, np.integer, np.floating)) and not isinstance(x, (bool, np.bool_))


def _close(a, b):
    a, b = float(a), float(b)
    if math.isnan(a) and math.isnan(b):
        return True, ""
    if math.isclose(a, b, rel_tol=1e-6, abs_tol=1e-9):
        return True, ""
    if abs(a - b) <= 0.0051 and abs(b) >= 0.1:   # rounded to 2 decimals is fine
        return True, "(rounded: fine)"
    return False, ""


def same(got, exp):
    """Return (ok, why) comparing the student's value with the expected one."""
    try:
        if isinstance(exp, pd.DataFrame):
            if not isinstance(got, pd.DataFrame):
                return False, f"expected a DataFrame, got a {type(got).__name__}"
            if got.shape != exp.shape:
                return False, f"shape is {got.shape} but should be {exp.shape}"
            if sorted(map(str, got.columns)) != sorted(map(str, exp.columns)):
                return False, f"columns are {list(got.columns)} but should be {list(exp.columns)}"
            for c in exp.columns:
                ok, why = same(got[c], exp[c])
                if not ok:
                    return False, f"column '{c}': {why}"
            return True, ""
        if isinstance(exp, pd.Series):
            if isinstance(got, pd.DataFrame) and got.shape[1] == 1:
                got = got.iloc[:, 0]
            if not isinstance(got, pd.Series):
                return False, f"expected a Series (one column of values with labels), got a {type(got).__name__}"
            if len(got) != len(exp):
                return False, f"it has {len(got)} values but should have {len(exp)}"
            if exp.index.is_unique and got.index.is_unique:
                g = {str(k): v for k, v in got.items()}
                for k, v in exp.items():
                    if str(k) not in g:
                        return False, f"label '{k}' is missing (labels: {list(got.index)[:6]}...)"
                    ok, _ = same(g[str(k)], v)
                    if not ok:
                        return False, f"the value for '{k}' is {g[str(k)]!r} but should be {v!r}"
                return True, ""
            return same(list(got.values), list(exp.values))
        if isinstance(exp, np.ndarray):
            got = np.asarray(got)
            if got.shape != exp.shape:
                return False, f"shape is {got.shape} but should be {exp.shape}"
            if exp.dtype.kind in "fiu" and got.dtype.kind in "fiub":
                if np.allclose(got.astype(float), exp.astype(float), equal_nan=True, rtol=1e-6, atol=1e-9):
                    return True, ""
                return False, "the numbers don't match"
            return (bool((got == exp).all()), "" if (got == exp).all() else "the values don't match")
        if isinstance(exp, (pd.Timestamp,)):
            try:
                g = pd.Timestamp(got)
            except Exception:
                return False, f"expected a date, got {got!r}"
            return (g == exp, "" if g == exp else f"got {g.date()} but should be {exp.date()}")
        if isinstance(exp, np.dtype):
            return (str(got) == str(exp), "" if str(got) == str(exp) else f"got {got} but should be {exp}")
        if isinstance(exp, (bool, np.bool_)):
            return (bool(got) == bool(exp) and isinstance(got, (bool, np.bool_)), "" if bool(got) == bool(exp) else f"got {got!r} but should be {exp!r}")
        if _num(exp):
            if not _num(got):
                if isinstance(got, (pd.Series, np.ndarray, list)) and len(got) == 1:
                    got = list(got)[0]
                else:
                    return False, f"expected one number, got a {type(got).__name__}: {str(got)[:80]}"
            ok, note = _close(got, exp)
            return (ok, note if ok else f"got {got} but should be {exp}")
        if isinstance(exp, str):
            g = str(got).strip()
            return (g == exp, "" if g == exp else f"got {got!r} but should be {exp!r}")
        if isinstance(exp, (list, tuple)):
            if isinstance(got, (np.ndarray, pd.Series, pd.Index)):
                got = list(got)
            if not isinstance(got, (list, tuple)):
                return False, f"expected a list, got a {type(got).__name__}"
            if len(got) != len(exp):
                return False, f"it has {len(got)} items but should have {len(exp)}"
            for i, (g, e) in enumerate(zip(got, exp)):
                ok, why = same(g, e)
                if not ok:
                    return False, f"item {i}: {why}"
            return True, ""
        if isinstance(exp, dict):
            if not isinstance(got, dict):
                return False, f"expected a dict, got a {type(got).__name__}"
            if set(got) != set(exp):
                miss, extra = set(exp) - set(got), set(got) - set(exp)
                return False, ("missing keys " + str(sorted(miss)) if miss else "") + (" extra keys " + str(sorted(extra)) if extra else "")
            for k in exp:
                ok, why = same(got[k], exp[k])
                if not ok:
                    return False, f"key {k!r}: {why}"
            return True, ""
        return (got == exp, "" if got == exp else f"got {got!r} but should be {exp!r}")
    except Exception as e:
        return False, f"couldn't compare ({type(e).__name__})"


def _eval(expr, ns):
    return eval(expr, ns)


# ---------------- plots: describe a plotnine ggplot or a matplotlib Axes so it can be compared
def _is_gg(p):
    return type(p).__name__ == "ggplot"


def _need_gg(p):
    if not _is_gg(p):
        raise TypeError(f"`p` should be a plotnine ggplot (p9.ggplot(...) + p9.geom_...), not a {type(p).__name__}")


def geoms(p):
    """Sorted geom names, e.g. ['geom_point', 'geom_smooth']."""
    _need_gg(p)
    return sorted(type(l.geom).__name__ for l in p.layers)


def aes(p):
    """All mapped aesthetics (plot-level + layer-level): {'x': 'total_bill', 'y': 'tip', 'color': 'time'}."""
    _need_gg(p)
    m = {k: str(v) for k, v in dict(p.mapping).items()}
    for l in p.layers:
        m.update({k: str(v) for k, v in dict(l.mapping).items()})
    m.pop("group", None)
    return {("color" if k == "colour" else k): v for k, v in m.items()}


def facet(p):
    _need_gg(p)
    f = p.facet
    name = type(f).__name__
    if name == "facet_null":
        return "none"
    vars_ = list(getattr(f, "vars", ()) or ())
    if not vars_:
        vars_ = [v for v in list(getattr(f, "rows", ()) or ()) + list(getattr(f, "cols", ()) or ())]
    return f"{name}: " + ", ".join(map(str, vars_))


def layer_param(p, geom, name):
    _need_gg(p)
    for l in p.layers:
        if type(l.geom).__name__ == geom:
            for src in (l.stat.params, l.geom.params):
                if name in src:
                    return src[name]
    return None


def drawable(p):
    """True if the plot draws; otherwise raises the plotting error."""
    _need_gg(p)
    import matplotlib.pyplot as plt
    p.draw()
    plt.close("all")
    return True


def nrows(p):
    _need_gg(p)
    return len(p.data)


def _fig(p):
    import matplotlib.pyplot as plt
    if _is_gg(p):
        return p.draw()
    return p.figure


def labels(p):
    """x label, y label and title as they appear on the drawn plot."""
    if _is_gg(p):
        import matplotlib.pyplot as plt
        p.draw()
        plt.close("all")
        L = p.labels
        return {"x": str(L.x or ""), "y": str(L.y or ""), "title": str(L.title or "")}
    ax = p if hasattr(p, "get_xlabel") else p.figure.axes[0]
    return {"x": ax.get_xlabel(), "y": ax.get_ylabel(), "title": ax.get_title()}


def ax_info(ax):
    """For seaborn / pandas plots (a matplotlib Axes)."""
    if type(ax).__name__ not in ("Axes", "AxesSubplot"):
        raise TypeError(f"`ax` should be the plot (a matplotlib Axes, what sns.histplot(...) returns), not a {type(ax).__name__}")
    leg = ax.get_legend()
    return {"xlabel": ax.get_xlabel(), "ylabel": ax.get_ylabel(),
            "legend": leg.get_title().get_text() if leg else "", "lines": len(ax.get_lines()),
            "has_bars": len(ax.patches) > 0}


def picture(ns):
    """PNG (base64) of the student's plot: `p` if it is a ggplot, else the current matplotlib figure."""
    import base64
    try:
        import matplotlib.pyplot as plt
    except Exception:
        return ""
    fig = None
    try:
        if _is_gg(ns.get("p")):
            fig = ns["p"].draw()
        elif plt.get_fignums():
            fig = plt.gcf()
        if fig is None or not fig.axes:
            return ""
        buf = io.BytesIO()
        fig.savefig(buf, format="png", dpi=80, bbox_inches="tight")
        return base64.b64encode(buf.getvalue()).decode()
    except Exception:
        return ""
    finally:
        plt.close("all")


PLOT_NS = {}


def plot_ns():
    """p9, sns, plt and the plot helpers, loaded only for plot problems."""
    if not PLOT_NS:
        import matplotlib
        matplotlib.use("Agg")
        import matplotlib.pyplot as plt
        import plotnine as p9
        import seaborn as sns
        PLOT_NS.update(p9=p9, sns=sns, plt=plt, geoms=geoms, aes=aes, facet=facet, layer_param=layer_param,
                       nrows=nrows, drawable=drawable, labels=labels, ax_info=ax_info)
    return PLOT_NS


def check(problem, user_code, base_ns=None):
    """problem: dict with setup, solution, targets [{expr,label}], mistakes [{when,msg}]."""
    is_plot = bool(problem.get("plot"))
    def fresh():
        ns = {"np": np, "pd": pd}
        if is_plot:
            ns.update(plot_ns())
            ns["plt"].close("all")
        if base_ns:
            ns.update(base_ns)
        return ns
    R, U = fresh(), fresh()
    setup = problem.get("setup", "")
    run_code(setup, R)
    _, rerr = run_code(problem["solution"], R)
    if rerr:
        return dict(ok=False, output="", error="(reference solution failed: " + rerr + ")", hint="", results=[], mistakes=[])
    if is_plot:
        plot_ns()["plt"].close("all")
    run_code(setup, U)
    out, err = run_code(user_code, U)
    image = picture(U) if is_plot and not err else ""
    results, all_ok = [], True
    for t in problem["targets"]:
        exp = _eval(t["expr"], R)
        try:
            got = _eval(t["expr"], U)
        except NameError as e:
            name = str(e).split("'")[1] if "'" in str(e) else t["expr"]
            results.append(dict(label=t["label"], ok=False, why=f"`{name}` doesn't exist yet: assign your answer to `{name}`"))
            all_ok = False
            continue
        except Exception as e:
            results.append(dict(label=t["label"], ok=False, why=f"{type(e).__name__}: {str(e).splitlines()[0][:120] if str(e) else ''}"))
            all_ok = False
            continue
        ok, why = same(got, exp)
        results.append(dict(label=t["label"], ok=bool(ok), why=why))
        all_ok = all_ok and bool(ok)
    mistakes = []
    if not all_ok:
        for m in problem.get("mistakes", []):
            try:
                if eval(m["when"], {**U, "__code__": user_code}):
                    mistakes.append(m["msg"])
            except Exception:
                pass
    return dict(ok=all_ok and not err, output=out, error=err, hint=error_hint(err) if err else "",
                results=results, mistakes=mistakes, image=image)


def run_only(problem, user_code):
    """The Run button: run setup + code, return output, error and the plot picture."""
    is_plot = bool(problem.get("plot"))
    ns = {"np": np, "pd": pd}
    if is_plot:
        ns.update(plot_ns())
        ns["plt"].close("all")
    run_code(problem.get("setup", ""), ns)
    out, err = run_code(user_code, ns)
    return dict(output=out, error=err, hint=error_hint(err) if err else "",
                image=picture(ns) if is_plot and not err else "")
