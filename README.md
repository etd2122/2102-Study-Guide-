# STAT 2102 Study Guide

Your study guide as a regular website: homework, recitation and lecture entries, each with PDFs, R code chunks, your comments, notes and "Remember for the test" points.

## What's in this folder

```
index.html        the website
data/entries.js   all your entries (titles, code, comments, notes)
files/            the PDFs and images the entries point to
```

Keep these three together. If you move `index.html` away from `data` and `files`, the page can't find your content.

## Open it on your own computer

Double-click `index.html`. It opens in your browser and works offline (fonts and code colors need internet, everything else doesn't).

## Put it online for free (GitHub Pages)

1. Make a free account at github.com if you don't have one.
2. Click **+** (top right) → **New repository**. Name it `stat2102-study-guide`, set it to **Public**, and create it.
3. On the new repository page, click **uploading an existing file**. Drag in `index.html`, `README.md`, and the `data` and `files` folders. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch," pick `main` and `/ (root)`, then **Save**.
5. After a minute or two your site is live at `https://YOUR-USERNAME.github.io/stat2102-study-guide/`.

A public repository means anyone with the link can see the site, including the solution PDFs. Check your course's policy on sharing solutions before you publish. If you'd rather keep it private, skip GitHub and just open `index.html` from your computer or from a synced folder like Google Drive or Dropbox.

## Adding and editing your own stuff

On the site:

- **+ New entry** adds a homework, recitation, lecture or exam practice set.
- **Edit** on any entry lets you change the title, tag it for Midterm 1, Midterm 2 or the Final, paste R code chunks (or **Import .R / .Rmd** to split a file into chunks automatically), write a comment next to each chunk, and list points under "Remember for the test."
- **Attach PDF or image** adds a file to the entry.
- **Study guide** collects every point and every chunk marked "Exam material," filtered by exam.

Your changes save in your browser right away. A yellow box in the sidebar then shows how to make them permanent:

1. Click **Download entries.js**.
2. Replace `data/entries.js` with the downloaded file.
3. Copy any new PDFs or images into `files/` (the box lists their names).

On GitHub, do steps 2–3 by opening the `data` or `files` folder in your repository, clicking **Add file → Upload files**, and committing. The website updates within a minute or two.

Changes you haven't downloaded only exist in that one browser. Download `entries.js` after each study session so nothing gets lost.

## Offline backup

If the exam Wi-Fi is slow or blocked: on the repository page click **Code → Download ZIP**, unzip it, and double-click `index.html`. Search, the code & error checker, Self-test and all notes and plots work without internet (only code colors need it). Download a fresh copy after each update.

## Tools on the site

- **Find code for a question**: paste an exam question; it lists the steps it needs and the most similar code on the site.
- **Check code / error**: paste your R code and it points out common mistakes by line (missing brackets or commas, `replace = TRUE`, `==` vs `=`, `if` on a vector, loops that overwrite or never stop, functions that return nothing, capitalized levels…) with the fix. Or paste an R error / warning (or describe a strange result like "answer is NA") and it explains the cause and the fix. It does not run the code.
- **Self-test**: random practice questions with the code hidden; mark each one "I got it" or "Need practice" and review the missed ones.
