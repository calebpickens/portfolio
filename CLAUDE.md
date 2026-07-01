# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Caleb Pickens (Software Engineering student at UT Austin). Currently a placeholder — `index.html`, `style.css`, and `script.js` are the only source files. No build system, no framework, no package manager.

## Development

**Previewing the site:** Open `index.html` directly in a browser, or serve it locally:

```sh
npx serve .
# or
python -m http.server 8080
```

No build, compile, or install step is required.

## Structure

- [index.html](index.html) — single-page entry point; link `style.css` and `script.js` here when content is added
- [style.css](style.css) — global styles (currently empty)
- [script.js](script.js) — client-side JS (currently empty)

## Git Automation

When I say the phrase "sync changes", "push changes", or "auto-push":

1. Run `git add .` to stage all modifications.
2. Run `git diff --staged` to analyze exactly what was changed.
3. Generate a concise, professional commit message summarizing the diff.
4. Execute `git commit -m "<your_generated_message>"`.
5. Execute `git push` to upload to the remote repository.
