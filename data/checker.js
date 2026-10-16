// R code checker: scans pasted R code for the mistakes that cause most errors in STAT 2102.
// It does NOT run the code. Each finding: {sev:'error'|'bug'|'check', line, title, why, fix, see:[entryId, chunkLabel]}
(function(){
'use strict';

// Split code into lines, and build a "masked" copy where string contents and comments are blanked out,
// so structural checks (brackets, operators) don't trip over text inside quotes.
function scan(code){
  const out=[]; let inStr=null, esc=false, inCom=false;
  const strings=[]; let cur=null, curLine=1, line=1;
  for(let i=0;i<code.length;i++){
    const ch=code[i];
    if(ch==='\n'){ line++; inCom=false; if(inStr){ out.push('\n'); continue; } out.push('\n'); continue; }
    if(inCom){ out.push(' '); continue; }
    if(inStr){
      if(esc){ esc=false; out.push(' '); cur.text+=ch; continue; }
      if(ch==='\\'){ esc=true; out.push(' '); cur.text+=ch; continue; }
      if(ch===inStr){ inStr=null; out.push(ch); strings.push(cur); continue; }
      out.push(' '); cur.text+=ch; continue;
    }
    if(ch==='#'){ inCom=true; out.push(' '); continue; }
    if(ch==='"'||ch==="'"||ch==='`'){ inStr=ch; cur={q:ch,text:'',line}; out.push(ch); continue; }
    out.push(ch);
  }
  return {masked:out.join(''), strings, unclosed: inStr?cur:null};
}

function lineOf(text, idx){ return text.slice(0, idx).split('\n').length; }
function snippet(lines, n){ return (lines[n-1]||'').trim().slice(0, 90); }

function checkRCode(code){
  const F=[]; const add=(sev,line,title,why,fix,see)=>F.push({sev,line,title,why,fix,see});
  const lines=code.split('\n');
  const {masked, strings, unclosed}=scan(code);
  const mlines=masked.split('\n');

  // 1. Unclosed quote
  if(unclosed) add('error', unclosed.line, 'A quote is never closed',
    `The ${unclosed.q==='"'?'double':'single'} quote on this line has no partner, so R reads the rest of the code as text. RStudio will wait with "+".`,
    'Add the closing quote. Press Esc in the Console if it is stuck on "+".', ['core-05','A missing ) on a long line']);

  // 2. Curly quotes outside strings (pasted from Word / PDF)
  mlines.forEach((l,i)=>{ if(/[“”‘’]/.test(l)) add('error', i+1, 'Curly quotes used as quote marks',
    `R only understands straight quotes " and '. Curly ones (“ ” ‘ ’) usually come from copying out of a PDF or Word and cause "unexpected input".`,
    'Retype the quotes on this line in RStudio.', null); });

  // 3. Bracket balance (ignores strings and comments)
  const pairs={')':'(',']':'[','}':'{'}, opens='([{'; const stack=[];
  let reported=false;
  for(let i=0;i<masked.length && !reported;i++){
    const ch=masked[i];
    if(opens.includes(ch)) stack.push({ch,i});
    else if(pairs[ch]){
      if(!stack.length){ const ln=lineOf(masked,i);
        add('error', ln, `Extra closing ${ch}`, `There is a ${ch} on this line with no matching ${pairs[ch]} before it. R stops with "unexpected '${ch}'".`, `Delete one ${ch} (or add the missing ${pairs[ch]}). In RStudio, click next to a bracket to see its partner.`, ['core-05','A missing ) on a long line']); reported=true; }
      else if(stack[stack.length-1].ch!==pairs[ch]){ const ln=lineOf(masked,i); const o=stack[stack.length-1];
        add('error', ln, `Brackets are crossed: ${o.ch} closed by ${ch}`, `A ${o.ch} opened on line ${lineOf(masked,o.i)} is closed with ${ch}. One bracket is missing or in the wrong place.`, `Check the brackets between line ${lineOf(masked,o.i)} and line ${ln}.`, null); reported=true; }
      else stack.pop();
    }
  }
  if(!reported && stack.length){
    const o=stack[stack.length-1]; const close={'(':')','[':']','{':'}'}[o.ch];
    add('error', lineOf(masked,o.i), `Missing closing ${close}`, `The ${o.ch} on this line is never closed${stack.length>1?` (${stack.length} brackets are still open at the end)`:''}. R keeps waiting with "+" in the Console.`, `Add ${close}. Count every ( against every ) on long lines like print(c(mean(x), mean(y))).`, ['core-05','A missing ) on a long line']);
  }

  // Track which names are data frames, multi-element vectors, lists (from assignments in the pasted code)
  const dfNames=new Set(), vecNames=new Set(), listNames=new Set(), libs=/library\(\s*["']?(dplyr|tidyverse|tidyr|magrittr)/.test(masked);
  mlines.forEach(l=>{
    let m=l.match(/^\s*([A-Za-z.][\w.]*)\s*(<-|=)\s*(.*)$/); if(!m) return; const [ ,nm, ,rhs]=m;
    if(/^(data\.frame|read\.csv|read\.table|read_csv|as_tibble|tibble|merge|subset)\s*\(/.test(rhs) || /\b(inner_join|left_join|right_join|full_join)\s*\(/.test(rhs) || /%>%/.test(rhs)) dfNames.add(nm);
    else if(/^c\s*\(.*,/.test(rhs) || /^\d+\s*:\s*\d+/.test(rhs) || /^(seq|rep)\s*\(/.test(rhs)) vecNames.add(nm);
    else if(/^(rnorm|runif|rbinom|rgeom)\s*\(\s*(n\s*=\s*)?([^,)]+)/.test(rhs)){ const k=rhs.match(/^\w+\s*\(\s*(?:n\s*=\s*)?([^,)]+)/)[1].trim(); if(k!=='1') vecNames.add(nm); }
    else if(/^sample\s*\(/.test(rhs) && !/[+\-*\/]\s*sample\s*\(/.test(rhs)){ const a=rhs.match(/^sample\s*\(\s*(?:c\([^()]*\)|[^,()]+(?:\([^()]*\))?)\s*,\s*(?:size\s*=\s*)?([^,)]+)/); if(!a||a[1].trim()!=='1') vecNames.add(nm); }
    else if(/^list\s*\(/.test(rhs)) listNames.add(nm);
  });
  // also: df names from carseats/employees style usage df$col
  (masked.match(/\b([A-Za-z.][\w.]*)\$[A-Za-z.]/g)||[]).forEach(s=>dfNames.add(s.split('$')[0]));

  mlines.forEach((l,i)=>{
    const n=i+1, raw=lines[i]||'';
    // 4. if ( x = 5 )
    if(/\bif\s*\(/.test(l)) {
      const m=l.match(/\bif\s*\(((?:[^()]|\([^()]*\))*)\)/);
      if(m && /(^|[^=!<>])=($|[^=])/.test(m[1].replace(/\w+\s*=\s*(TRUE|FALSE|T|F|\d+)\s*[,)]/g,''))) add('error', n, 'Single = inside if()', '`=` assigns a value; to compare you need `==`. R gives a syntax error here.', 'Use == (for example if (x == 5)).', ['core-05',"= vs == and & vs | (read the question's \"and\" / \"or\")"]);
    }
    // 5. == NA
    if(/[!=]=\s*NA\b/.test(l)) add('bug', n, 'Comparing with NA using == or !=', 'Anything compared with NA gives NA, so this test never works.', 'Use is.na(x) (or !is.na(x)).', ['core-05','NA spreads: use na.rm = TRUE']);
    // 6. data frame filter without comma: df[df$x > 5]
    const fm=l.match(/\b([A-Za-z.][\w.]*)\[\s*\1\$[^\]\[]*?(==|!=|>=|<=|>|<|%in%)[^\]\[,]*\]/);
    if(fm && !/\[\s*\1\$[^\]]*,/.test(l)) add('error', n, 'Filtering rows without the comma', `${fm[1]}[condition] treats the condition as COLUMNS, giving "undefined columns selected".`, `Put the condition before a comma: ${fm[1]}[condition, ]`, ['core-05','Forgetting the comma when filtering rows']);
    // 7. length(df)
    const lm=l.match(/\blength\s*\(\s*([A-Za-z.][\w.]*)\s*\)/);
    if(lm && dfNames.has(lm[1])) add('bug', n, `length(${lm[1]}) counts COLUMNS`, `${lm[1]} looks like a data frame, and length() of a data frame is its number of columns.`, `For rows (observations) use nrow(${lm[1]}).`, ['core-05','length() counts columns, nrow() counts rows']);
    // 8. mean/sum/median of a whole data frame
    const mm=l.match(/\b(mean|median|sd|sum|var)\s*\(\s*([A-Za-z.][\w.]*)\s*[,)]/);
    if(mm && dfNames.has(mm[2]) && !vecNames.has(mm[2])) add('bug', n, `${mm[1]}() of a whole data frame`, `${mm[1]}(${mm[2]}) uses the whole data frame, not one column (mean returns NA with a warning).`, `Pick a column: ${mm[1]}(${mm[2]}$column).`, null);
    // 9. sample without replace when drawing more than the options
    const sm=l.match(/\bsample\s*\(\s*(\d+)\s*:\s*(\d+)\s*,\s*(?:size\s*=\s*)?(\d+)/);
    if(sm && !/replace\s*=\s*(TRUE|T)\b/.test(l)){ const k=+sm[2]-+sm[1]+1, s=+sm[3]; if(s>k) add('error', n, 'Drawing more than there are, without replace = TRUE', `You draw ${s} from only ${k} values. R stops: "cannot take a sample larger than the population".`, 'Add replace = TRUE (dice, coins and anything you "do again").', ['core-05','Dice and coins need replace = TRUE']); }
    const sc=l.match(/\bsample\s*\(\s*c\(([^()]*)\)\s*,\s*(?:size\s*=\s*)?(\d+)/);
    if(sc && !/replace\s*=\s*(TRUE|T)\b/.test(l)){ const k=sc[1].split(',').length, s=+sc[2]; if(s>k) add('error', n, 'Drawing more than there are, without replace = TRUE', `You draw ${s} from only ${k} options. R stops: "cannot take a sample larger than the population".`, 'Add replace = TRUE.', ['core-05','Dice and coins need replace = TRUE']); }
    const sv=l.match(/\bsample\s*\(\s*(1\s*:\s*\d+|c\([^()]*\))\s*,\s*(?:size\s*=\s*)?([A-Za-z.][\w.]*)\s*[,)]/);
    if(sv && !/replace\s*=/.test(l) && !/^(1|k)$/.test(sv[2])) add('check', n, 'sample() without replace', `Without replace = TRUE nothing can repeat, so this fails if ${sv[2]} is bigger than the number of options (and it isn't really "rolling" or "flipping").`, 'For dice / coins / repeated trials add replace = TRUE. Leave it out only for cards or people.', ['core-01','sample() and set.seed(): the basics']);
    // 10. prob length vs options
    const pm=l.match(/\bsample\s*\(\s*(\d+)\s*:\s*(\d+)[^]*?prob\s*=\s*c\(([^()]*)\)/);
    if(pm){ const k=+pm[2]-+pm[1]+1, np=pm[3].split(',').length; if(k!==np) add('error', n, 'Wrong number of probabilities', `${k} options but ${np} probabilities: "incorrect number of probabilities".`, 'Give one probability per option, in the same order.', ['core-01','Unfair (weighted) dice and coins with prob =']);
      const tot=pm[3].split(',').map(Number).reduce((a,b)=>a+b,0); if(isFinite(tot)&&Math.abs(tot-1)>1e-6) add('check', n, `Probabilities add up to ${+tot.toFixed(4)}, not 1`, 'R rescales them silently, so the probabilities you get are not the ones you typed. Usually a typo.', 'Check each value against the question.', null); }
    // 11. else at the start of a line at top level
    if(/^\s*else\b/.test(l)){ const before=masked.split('\n').slice(0,i).join('\n'); let d=0; for(const ch of before){ if(ch==='{')d++; else if(ch==='}')d--; }
      if(d===0) add('error', n, '"else" starts a new line', 'Outside a function or { }, R finishes the if at the end of the previous line, so this else is "unexpected".', 'Write } else { on one line.', null); }
    // 12. Python / other-language habits
    if(/\b(elif|elseif)\b/.test(l)) add('error', n, `"${l.match(/\b(elif|elseif)\b/)[1]}" isn't R`, 'R uses else if (two words).', 'Write } else if (condition) {', null);
    if(/(^|[^\w.$])(True|False|null|None)\b/.test(l)) add('error', n, `"${l.match(/(^|[^\w.$])(True|False|null|None)\b/)[2]}" isn't R`, 'R spells them TRUE, FALSE and NULL (all capitals).', 'Use TRUE / FALSE / NULL.', null);
    if(/===|!==|&&\s*&|\|\|\s*\|/.test(l)) add('error', n, 'Operator from another language', '=== and !== do not exist in R.', 'Use == and !=.', null);
    if(/(^|[^\w.$])return\s+[A-Za-z0-9_."'](?!\s*=)/.test(l) && !/(^|[^\w.$])return\s*=/.test(l)) add('error', n, 'return without parentheses', 'In R, return is a function: return(value).', 'Write return(x).', null);
    if(/=</.test(l)||/(^|[^<>=!%])=>(?!>)/.test(l)) add('error', n, 'Operator written backwards', '"=<" and "=>" are not R operators.', 'Use <= or >=.', null);
    // 13. two numbers with no comma between: c(1 2)
    if(/\(\s*[^()]*\d\s+\d/.test(l) && !/["'`]/.test(raw.replace(/#.*/,''))) add('error', n, 'Missing comma between values', 'Two values next to each other without a comma: "unexpected numeric constant".', 'Separate values with commas: c(1, 2).', null);
    // 14. x[0]
    if(/\b[A-Za-z.][\w.]*\[\s*0\s*\]/.test(l)) add('bug', n, 'Index 0', 'R counts from 1. x[0] returns an empty vector, not the first element.', 'Use x[1] for the first element.', null);
    // 15. if() on a multi-value vector
    const im=l.match(/\bif\s*\(\s*([A-Za-z.][\w.]*)\s*(==|!=|>=|<=|>|<|%%)/);
    if(im && vecNames.has(im[1]) && !/\b(all|any)\s*\(/.test(l)) add('error', n, `if() on the whole vector ${im[1]}`, `${im[1]} holds several values, but if() checks only ONE: "the condition has length > 1".`, `For a label per value use ifelse(${im[1]} ... , "yes", "no"); for one answer use all() / any(); or loop and test ${im[1]}[i].`, ['core-05','if() on a whole vector → use ifelse()']);
    // 16. apply on a vector / list
    const am=l.match(/\bapply\s*\(\s*([A-Za-z.][\w.]*)\s*,/);
    if(am && (vecNames.has(am[1])||listNames.has(am[1]))) add('error', n, `apply() on a ${listNames.has(am[1])?'list':'vector'}`, 'apply() needs a matrix or data frame (rows and columns): "dim(X) must have a positive length".', `Use sapply(${am[1]}, f) (or lapply).`, ['core-06','Which apply? apply vs sapply vs lapply vs tapply vs mapply']);
    // 17. barplot of a raw column
    const bm=l.match(/\bbarplot\s*\(\s*([A-Za-z.][\w.]*\$[\w.]+)\s*[,)]/);
    if(bm) add('bug', n, 'barplot() of a raw column', 'barplot() draws one bar per VALUE you give it, so a raw column gives one bar per row instead of one per category.', `Give it counts: barplot(table(${bm[1]}))`, ['core-04','Barplot: counts of a categorical variable (die rolls)']);
    // 18. hist() of a categorical column: can't know type; skip
    // 19. Windows backslashes / lowercase downloads
    // (string-based checks are below)
    // 20. rnorm with var=
    if(/\b[rdpq]norm\s*\([^)]*\bvar(iance)?\s*=/.test(l)) add('error', n, 'norm functions take sd, not variance', 'There is no var argument ("unused argument").', 'Use sd = sqrt(variance).', ['core-05','rnorm takes the standard deviation, not the variance']);
    // 21. View / install.packages in a homework file
    if(/\bView\s*\(/.test(l)) add('check', n, 'View() in a homework file', 'View() opens a tab in RStudio but fails or is skipped when rendering a .qmd.', 'Use head(df) to show the data instead.', null);
    if(/\binstall\.packages\s*\(/.test(l)) add('check', n, 'install.packages() in the file', 'It reinstalls every time you render, and can fail.', 'Run it once in the Console; keep only library() in the file.', null);
    // 22. numeric factor conversion
    if(/as\.numeric\s*\(\s*[A-Za-z.][\w.]*\$[\w.]+\s*\)/.test(l) && /factor|stringsAsFactors\s*=\s*(TRUE|T)/.test(masked)) add('check', n, 'as.numeric() on a factor?', 'If that column is a factor, as.numeric() returns the level codes (1, 2, 3), not the numbers shown.', 'Use as.numeric(as.character(x)) for factors of numbers.', ['kit-01','Check and convert types']);
    // 23. sd/var call misuse: sd(x, y)
    // 24. & / | inside if with single values is fine; skip
  });

  // 25. dplyr functions without library()
  const dp=masked.match(/%>%|\b(filter|mutate|select|arrange|summari[sz]e|group_by|left_join|inner_join|right_join|full_join|anti_join|semi_join|pivot_longer|pivot_wider|separate)\s*\(/);
  if(dp && !libs){ const idx=masked.search(/%>%|\b(filter|mutate|select|arrange|summari[sz]e|group_by|left_join|inner_join|right_join|full_join|anti_join|semi_join|pivot_longer|pivot_wider|separate)\s*\(/);
    add('check', lineOf(masked, idx), `${dp[0].replace(/\s*\($/,'')}${dp[0]==='%>%'?'':'()'} needs a package`, 'This comes from dplyr / tidyr. Without library(dplyr) you get "could not find function" (or base R\'s different filter()).', 'Add library(dplyr) (or library(tidyverse)) at the top.', null); }

  // 26. functions whose last line is an assignment (returns invisibly)
  const fre=/function\s*\([^)]*\)\s*\{/g; let fmx;
  while((fmx=fre.exec(masked))){
    let d=0, j=fmx.index+fmx[0].length-1, endIdx=-1;
    for(;j<masked.length;j++){ if(masked[j]==='{')d++; else if(masked[j]==='}'){ d--; if(d===0){endIdx=j;break;} } }
    if(endIdx<0) continue;
    const btxt=masked.slice(fmx.index+fmx[0].length, endIdx); const stmts=[]; let buf='', dd=0;
    for(const ch of btxt){ if('([{'.includes(ch))dd++; else if(')]}'.includes(ch))dd--; if((ch==='\n'||ch===';')&&dd===0){ if(buf.trim())stmts.push(buf.trim()); buf=''; } else buf+=ch; }
    if(buf.trim())stmts.push(buf.trim());
    const last=stmts[stmts.length-1]||'';
    if(/^[A-Za-z.][\w.]*(\[[^\]]*\])?\s*(<-|=)\s*[^=]/.test(last) && !/^return\b/.test(last)) add('bug', lineOf(masked,endIdx), 'Function ends with an assignment', `The last line inside the function ("${last.slice(0,40)}") stores a value but doesn't return it visibly, so calling the function prints nothing.`, `Add the variable's name (or return(...)) as the last line before }.`, ['core-05','A function that returns nothing (ends with an assignment)']);
    // loops inside? handled below
  }

  // 27. for loop that overwrites a pre-made result vector instead of filling [i]
  const pre=new Set(); mlines.forEach(l=>{ const m=l.match(/^\s*([A-Za-z.][\w.]*)\s*<-\s*(numeric|character|logical|vector|integer)\s*\(|^\s*([A-Za-z.][\w.]*)\s*<-\s*(c\(\s*\)|list\(\s*\))\s*$/); if(m) pre.add(m[1]||m[3]); });
  const fl=/for\s*\(\s*([A-Za-z.][\w.]*)\s+in\s+[^)]*\)\s*\{/g; let flm;
  while((flm=fl.exec(masked))){
    const iv=flm[1]; let d=0, j=flm.index+flm[0].length-1, endIdx=-1;
    for(;j<masked.length;j++){ if(masked[j]==='{')d++; else if(masked[j]==='}'){ d--; if(d===0){endIdx=j;break;} } }
    if(endIdx<0) continue;
    const body=masked.slice(flm.index+flm[0].length, endIdx);
    body.split('\n').forEach((bl,k)=>{
      const m=bl.match(/^\s*([A-Za-z.][\w.]*)\s*<-\s*(.*)$/); if(!m) return;
      const [ ,v,rhs]=m; if(!pre.has(v)) return;
      if(new RegExp('\\b'+v.replace('.','\\.')+'\\b').test(rhs)) return;   // running total / append: fine
      if(!new RegExp('\\b'+iv+'\\b').test(rhs)) return;
      add('bug', lineOf(masked, flm.index+flm[0].length)+k, `${v} is overwritten every pass`, `${v} was created empty to collect results, but "${v} <- ..." replaces the WHOLE thing each time, so only the last value survives.`, `Save into slot ${iv}: ${v}[${iv}] <- ...  (or ${v}[[${iv}]] for a list).`, ['core-05','Loops: forgetting [i] overwrites the result each time']);
    });
  }

  // 28. while loop that never changes its condition variable
  const wl=/while\s*\(\s*([^)]*)\)\s*\{/g; let wlm;
  while((wlm=wl.exec(masked))){
    const cond=wlm[1]; const vars=(cond.match(/\b[A-Za-z.][\w.]*\b/g)||[]).filter(v=>!/^(TRUE|FALSE|T|F|NA|sum|length|any|all|abs|is|na|mean|nrow)$/.test(v));
    let d=0, j=wlm.index+wlm[0].length-1, endIdx=-1;
    for(;j<masked.length;j++){ if(masked[j]==='{')d++; else if(masked[j]==='}'){ d--; if(d===0){endIdx=j;break;} } }
    if(endIdx<0||!vars.length) continue;
    const body=masked.slice(wlm.index+wlm[0].length, endIdx);
    const changed=vars.some(v=>new RegExp('(^|[^\\w.])'+v.replace('.','\\.')+'(\\[[^\\]]*\\])?\\s*(<-|=[^=]|<<-)').test(body) || /\bbreak\b/.test(body));
    if(!changed) add('bug', lineOf(masked,wlm.index), 'while loop never changes its condition', `Nothing inside the loop updates ${vars.join(', ')}, so the condition stays TRUE forever (infinite loop).`, 'Update the variable inside the loop (e.g. i <- i + 1), or add a break.', ['core-02','Roll until something happens (while loop)']);
    // next before the update
    const nxt=body.search(/\bnext\b/); if(nxt>=0){ const upd=vars.map(v=>body.search(new RegExp('(^|[^\\w.])'+v+'\\s*<-'))).filter(x=>x>=0);
      if(upd.length && Math.min(...upd)>nxt) add('bug', lineOf(masked, wlm.index+wlm[0].length+nxt), 'next before the counter update', 'When next runs, it skips the rest of the loop, including the update, so the loop can get stuck (Lecture 5, Versions 2 and 3).', 'Update the counter before any next.', null); }
  }

  // String-content checks
  strings.forEach(s=>{
    if(/^[A-Za-z]:\\/.test(s.text)) add('error', s.line, 'Backslashes in a file path', 'In R strings a backslash starts an escape (\\U, \\n …), so "C:\\Users\\..." fails.', 'Use forward slashes: "C:/Users/..." (or double backslashes).', null);
    if(/^~\/(downloads|desktop|documents)\b/.test(s.text)) add('check', s.line, 'Lowercase folder name in the path', `Mac folders are "${s.text.split('/')[1].replace(/^./,c=>c.toUpperCase())}" with a capital letter.`, 'Match the capitalization exactly, e.g. "~/Downloads/file.csv".', ['kit-01','Read a file straight from Downloads (full path)']);
    if(/[’‘“”]/.test(s.text)) add('check', s.line, 'Curly apostrophe/quote inside text', `"${s.text.slice(0,30)}" contains a curly ’ or “. If the data uses a straight ' (or the other way round), == will match nothing.`, 'Copy the value from levels(df$col), or use grepl("part of the word", x).', ['core-05',"Curly vs straight apostrophe (Master’s vs Master's)"]);
  });
  // ALL-CAPS level comparisons
  mlines.forEach((l,i)=>{ const raw=lines[i]||''; const m=raw.match(/[!=]=\s*["']([A-Z]{2,})["']/); if(m && !/^(NA|HR|IT|US|USA|UK|NY|CA|TX|FL|ID|NYC|LA)$/.test(m[1])) add('check', i+1, `Comparing to "${m[1]}" in capitals`, `R is case-sensitive: "${m[1]}" won't match "${m[1][0]+m[1].slice(1).toLowerCase()}". Make sure the data really uses capitals.`, 'Check the exact spelling with levels(df$col) or unique(df$col).', ['core-05','Capital letters: "YES" is not "Yes"']); });

  // de-duplicate (same line + title)
  const seen=new Set(); const order={error:0,bug:1,check:2};
  return F.filter(f=>{const k=f.line+'|'+f.title; if(seen.has(k))return false; seen.add(k); return true;})
          .sort((a,b)=>order[a.sev]-order[b.sev]||a.line-b.line)
          .map(f=>({...f, code:snippet(lines,f.line)}));
}
function looksLikeCode(t){
  const s=t.trim(); if(!s) return false;
  if(/^(Error|Warning|In addition)/m.test(s) && !/<-/.test(s)) return false;
  return /<-|\bfunction\s*\(|\b(for|while|if)\s*\(|^\s*[\w.]+\s*\(.*\)\s*$|[\w.]+\$[\w.]+|\bc\(/m.test(s);
}
window.checkRCode=checkRCode; window.looksLikeRCode=looksLikeCode;
})();
