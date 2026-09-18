const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'fonts');

// Self-hosted, per docs/site-brief.md Part 5. Files ship from the
// @fontsource packages (devDependencies, build-time only) rather than being
// fetched from Google Fonts at request time.
const files = [
  { pkg: '@fontsource/inter', file: 'files/inter-latin-400-normal.woff2', out: 'inter-400.woff2' },
  { pkg: '@fontsource/inter', file: 'files/inter-latin-500-normal.woff2', out: 'inter-500.woff2' },
  { pkg: '@fontsource/inter', file: 'files/inter-latin-600-normal.woff2', out: 'inter-600.woff2' },
  { pkg: '@fontsource/inter', file: 'files/inter-latin-700-normal.woff2', out: 'inter-700.woff2' },
  {
    pkg: '@fontsource/ibm-plex-mono',
    file: 'files/ibm-plex-mono-latin-400-normal.woff2',
    out: 'ibm-plex-mono-400.woff2',
  },
  {
    pkg: '@fontsource/ibm-plex-mono',
    file: 'files/ibm-plex-mono-latin-500-normal.woff2',
    out: 'ibm-plex-mono-500.woff2',
  },
];

function buildFonts() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const f of files) {
    const srcPath = require.resolve(`${f.pkg}/package.json`);
    const pkgDir = path.dirname(srcPath);
    const full = path.join(pkgDir, f.file);
    fs.copyFileSync(full, path.join(OUT_DIR, f.out));
    console.log(`  ✓ fonts/${f.out}`);
  }
}

module.exports = { buildFonts };
