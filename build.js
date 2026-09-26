const fs = require('fs');
const path = require('path');

const site = require('./data/site');
const { buildImages } = require('./lib/build-images');
const { buildFonts } = require('./lib/build-fonts');
const { buildOgImage } = require('./lib/build-og-image');
const { buildFaviconPng } = require('./lib/build-favicon-png');

const ROOT = __dirname;

// path (used for sitemap + canonical URLs) -> output file, relative to repo root
const pages = [
  { outFile: 'index.html', urlPath: '/', render: () => require('./pages/home').render() },
  { outFile: '404.html', urlPath: '/404.html', sitemap: false, render: () => require('./pages/not-found').render() },
];

function writePage(page) {
  const outPath = path.join(ROOT, page.outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, page.render().replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, ''));
  console.log(`  ✓ ${page.outFile}`);
}

function writeSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .filter((p) => p.sitemap !== false)
    .map((p) => `  <url><loc>${site.siteUrl}${p.urlPath}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
  console.log('  ✓ sitemap.xml');
}

async function main() {
  console.log('Images:');
  await buildImages();
  console.log('Fonts:');
  buildFonts();
  console.log('Favicon:');
  await buildFaviconPng();
  console.log('OG image:');
  await buildOgImage();
  console.log('Pages:');
  pages.forEach(writePage);
  writeSitemap();
  console.log('\nBuild complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
