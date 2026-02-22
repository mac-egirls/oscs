#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"
SITE_PUBLIC_PDFS="$REPO_ROOT/site/public/pdfs"

echo "==> Building latex image..."
docker build -t oscs-latex -f "$REPO_ROOT/.devcontainer/Dockerfile" "$REPO_ROOT"

echo "==> Building PDFs with Docker..."
docker run --rm \
  --entrypoint bash \
  -v "$REPO_ROOT:/workspace" \
  -w /workspace \
  oscs-latex \
  -c '
    find . -name "*.tex" -not -path "./template/*" -not -path "./site/*" | while read -r tex; do
      dir=$(dirname "$tex")
      file=$(basename "$tex")
      echo "Compiling $tex..."
      (cd "$dir" && latexmk -pdf -interaction=nonstopmode -halt-on-error "$file") \
        || { echo "FAILED: $tex"; exit 1; }
    done
  '

echo "==> Copying PDFs to site/public/pdfs/..."
rm -rf "$SITE_PUBLIC_PDFS"
mkdir -p "$SITE_PUBLIC_PDFS"
find "$REPO_ROOT" -name "*.pdf" \
  -not -path "$REPO_ROOT/site/*" \
  -not -path "$REPO_ROOT/template/*" | while read -r pdf; do
  rel_dir=$(dirname "$pdf" | sed "s|^$REPO_ROOT/||")
  mkdir -p "$SITE_PUBLIC_PDFS/$rel_dir"
  cp "$pdf" "$SITE_PUBLIC_PDFS/$rel_dir/"
done

echo "==> Starting Astro dev server..."
cd "$REPO_ROOT/site" && npm run dev
