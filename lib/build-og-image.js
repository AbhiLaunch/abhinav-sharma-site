const path = require('path');
const sharp = require('sharp');

// Versioned filename: LinkedIn, Slack, and X cache preview images by URL, so a
// redesigned card needs a new one.
const OUT_PATH = path.join(__dirname, '..', 'og-image-v3.jpg');

const NAVY = '#00274c';
const WHITE = '#ffffff';
const SOFT = '#c6d2e4';
const FAINT = '#a3b4cc';
const GOLD = '#fdb515';
const GRID = 'rgba(255,255,255,0.07)';

// Text is sized to stay legible at feed-thumbnail width (~300px), and the
// trajectory motif sits in the upper right, clear of every line of text.
function svg() {
  const gridLines = Array.from({ length: 10 })
    .map((_, i) => `<line x1="0" y1="${i * 70}" x2="1200" y2="${i * 70}" stroke="${GRID}" stroke-width="1"/>`)
    .join('');

  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${NAVY}"/>
  ${gridLines}
  <path d="M700 150 C 820 40, 960 210, 1150 70" fill="none" stroke="${GOLD}" stroke-width="4" stroke-dasharray="3 16" stroke-linecap="round" opacity="0.7"/>
  <text x="80" y="285" font-family="Arial, Helvetica, sans-serif" font-size="96" font-weight="700" fill="${WHITE}">Abhinav Sharma</text>
  <text x="80" y="365" font-family="Arial, Helvetica, sans-serif" font-size="40" fill="${SOFT}">Aerospace PhD · Berkeley Haas MBA ’28</text>
  <text x="80" y="425" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700" fill="${GOLD}">Defense and dual-use technology</text>
  <rect x="80" y="480" width="96" height="6" fill="${GOLD}"/>
  <text x="80" y="570" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="${FAINT}">abhinav-sharma.com</text>
</svg>`;
}

async function buildOgImage() {
  await sharp(Buffer.from(svg())).jpeg({ quality: 90 }).toFile(OUT_PATH);
  console.log('  ✓ og-image-v3.jpg');
}

module.exports = { buildOgImage };
