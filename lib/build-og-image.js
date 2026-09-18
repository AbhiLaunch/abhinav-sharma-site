const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT_PATH = path.join(__dirname, '..', 'og-image.jpg');

const PAPER = '#0a1626';
const INK = '#ffffff';
const INK_SOFT = '#c3cedd';
const ACCENT = '#ffcb05';
const LINE = '#22344c';

function svg() {
  const gridLines = Array.from({ length: 10 })
    .map((_, i) => `<line x1="0" y1="${i * 70}" x2="1200" y2="${i * 70}" stroke="${LINE}" stroke-width="1"/>`)
    .join('');

  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <g opacity="0.5">${gridLines}</g>
  <path d="M60 500 C 320 500, 420 260, 700 220 C 900 194, 1020 250, 1140 170" fill="none" stroke="${ACCENT}" stroke-width="3" stroke-dasharray="3 14" stroke-linecap="round"/>
  <text x="80" y="300" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="700" fill="${INK}">Abhinav Sharma</text>
  <text x="80" y="350" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="${INK_SOFT}">Aerospace engineer &amp; Berkeley Haas MBA candidate</text>
  <text x="80" y="390" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="${INK_SOFT}">Focused on defense and dual-use technology</text>
  <rect x="80" y="440" width="46" height="4" fill="${ACCENT}"/>
</svg>`;
}

async function buildOgImage() {
  await sharp(Buffer.from(svg())).jpeg({ quality: 88 }).toFile(OUT_PATH);
  console.log('  ✓ og-image.jpg');
}

module.exports = { buildOgImage };
