# abhinav-sharma.com

Personal website for Abhinav Sharma — built as a static site and deployed with GitHub Pages.

## Structure

- `index.html` — page content
- `styles.css` — styling (light/dark mode via `prefers-color-scheme`)
- `assets/` — resume PDF and other static assets
- `CNAME` — custom domain for GitHub Pages

## Local preview

```bash
python -m http.server 8000
```

Then open http://localhost:8000

## Deploy

Pushing to `main` deploys automatically via GitHub Pages.
