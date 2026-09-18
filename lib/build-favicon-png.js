const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.join(__dirname, '..', 'favicon.svg');
const OUT = path.join(__dirname, '..', 'apple-touch-icon.png');

async function buildFaviconPng() {
  await sharp(SRC)
    .resize(180, 180)
    .flatten({ background: '#faf7f1' })
    .png()
    .toFile(OUT);
  console.log('  ✓ apple-touch-icon.png');
}

module.exports = { buildFaviconPng };
