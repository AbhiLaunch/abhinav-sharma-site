const fs = require('fs');
const path = require('path');

const site = require('./data/site');
const projectsData = require('./data/projects');
const { buildImages } = require('./lib/build-images');
const { buildFonts } = require('./lib/build-fonts');
const { buildOgImage } = require('./lib/build-og-image');
const { buildFaviconPng } = require('./lib/build-favicon-png');

const ROOT = __dirname;

// path (used for sitemap + canonical URLs) -> output file, relative to repo root
const pages = [
  { outFile: 'index.html', urlPath: '/', render: () => require('./pages/home').render() },
  ...projectsData.map((project) => ({
    outFile: path.join('projects', project.slug, 'index.html'),
    urlPath: `/projects/${project.slug}/`,
    render: () => require('./pages/projects/project-page').render(project),
  })),
];

function writePage(page) {
  const outPath = path.join(ROOT, page.outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, page.render());
  console.log(`  ✓ ${page.outFile}`);
}

function writeSitemap() {
  const urls = pages
    .map((p) => `  <url><loc>${site.siteUrl}${p.urlPath}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
  console.log('  ✓ sitemap.xml');
}

function copyResume() {
  const src = path.join(ROOT, 'assets', 'Abhinav_Sharma_Resume.pdf');
  const dest = path.join(ROOT, 'resume.pdf');
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('  ✓ resume.pdf');
  } else {
    console.warn('  ! assets/Abhinav_Sharma_Resume.pdf not found — resume.pdf not written');
  }
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
  console.log('Resume:');
  copyResume();
  console.log('Pages:');
  pages.forEach(writePage);
  writeSitemap();
  console.log('\nBuild complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
