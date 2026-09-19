# abhinav-sharma.com

Personal website for Abhinav Sharma — a static site generated from plain content/data files and deployed with GitHub Pages. See [docs/site-brief.md](docs/site-brief.md) for voice, facts, and design direction, and [docs/audit-and-plan.md](docs/audit-and-plan.md) for the current revision plan.

## How it's built

There's no framework — `build.js` is a small, dependency-free Node script that assembles static HTML from the files below and writes plain `.html`/`.css`/image files to the repo root, exactly what GitHub Pages already serves. `sharp` and the `@fontsource` packages are **devDependencies only**, used at build time to optimize images and self-host fonts; nothing from `node_modules` ships to visitors.

- `data/` — site-wide facts and content (nav, contact info, project cards and their links, publications). Edit these to change what the site says.
- `templates/` — the page shell (header/nav/footer) and reusable components (section heading, project card, research item).
- `pages/` — `home.js` composes `templates/` + `data/` into the single-page site.
- `images/` — original supplied photos/illustrations (untouched source; not served directly).
- `img/`, `fonts/`, `og-image-v2.jpg`, `404.html`, `apple-touch-icon.png`, `index.html`, `sitemap.xml` — **generated output**. Don't hand-edit these; run the build instead.

## Local development

```bash
npm install
npm run build   # regenerates index.html, img/, fonts/, sitemap.xml, og-image-v2.jpg, 404.html
npm run serve   # serves the built site at http://localhost:8123
```

Re-run `npm run build` after any change under `data/`, `templates/`, `pages/`, or `images/`.

## Deploy

Pushing to `main` deploys automatically via GitHub Pages. Generated output is committed to the repo (this is a plain static site with no CI build step), so run `npm run build` and commit the results before merging.
