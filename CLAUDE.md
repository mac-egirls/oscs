# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

McMaster University open-source cheat sheets. LaTeX source files live in per-course directories (e.g. `COMPSCI-2C03/`). A static Astro site (`site/`) renders the compiled PDFs in a modal viewer and is deployed to GitHub Pages.

## Local development

```bash
./dev.sh       # build PDFs via Docker, copy to site/public/pdfs/, start Astro dev server
```

This requires Docker. The first run builds a local image (`oscs-latex`) from `.devcontainer/Dockerfile` — subsequent runs use the cached image unless `tl_packages` changes.

Site-only changes (no LaTeX):
```bash
cd site && npm run dev
```

Build the site for production:
```bash
cd site && npm run build
```

## Architecture

**Two independent build outputs:**

1. **PDFs** — each `<COURSE-DIR>/*.tex` is compiled with `latexmk -pdf`. CI uses `zauguin/install-texlive@v4` with `tl_packages` to install TeX Live packages, then releases all PDFs to the `latest` GitHub Release and passes them as an artifact to the site build.

2. **Astro site** — static, deployed to GitHub Pages at `https://mac-egirls.github.io/oscs`. The `base: "/oscs"` in `astro.config.mjs` means all asset and page URLs are prefixed; always use `import.meta.env.BASE_URL` when constructing paths.

**PDF URL convention:**
PDFs are served at `/pdfs/<course-dir>/<pdf-name>.pdf`. The `dir` field on a `Course` maps directly to the course directory name and the PDF subdirectory path.

**Adding a new course or sheet:**
1. Create a directory at the repo root (e.g. `COMPSCI-3DB3/`) with a `.tex` file
2. Register it in `site/src/data/courses.ts` — add to `courses` array (and `departments` if new department). The `dir` field must match the directory name; `pdf` is the filename without `.pdf`.

**Modal viewer** (`site/src/layouts/Layout.astro`):
A single `<dialog id="pdf-modal">` handles all sheets. Buttons with `data-pdf-url` trigger it. When open, `overflow: hidden` is set on `<body>` and restored via the dialog's `close` event (fires for button, backdrop click, and Escape).

## Key files

| Path | Purpose |
|------|---------|
| `tl_packages` | TeX Live packages installed in both Docker image and CI |
| `.devcontainer/Dockerfile` | Builds from `qmcgaw/latexdevcontainer:latest` + `tl_packages` |
| `template/template.tex` | Reference template for new cheat sheets |
| `site/src/data/courses.ts` | Single source of truth for all courses and sheets |
| `.github/workflows/build.yml` | CI: compile LaTeX → release PDFs → build & deploy site |
