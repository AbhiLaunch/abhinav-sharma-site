const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'images');
const OUT_DIR = path.join(__dirname, '..', 'img');

// Each job reads one file from images/ (left untouched) and writes one or
// more optimized, web-safe copies into img/. `flip` corrects the UH-60 image,
// whose tail rotor the generator placed on the wrong side (see docs/site-brief.md).
const jobs = [
  {
    src: 'morphing_aircraft_gemini.jfif',
    flip: false,
    outputs: [
      { name: 'morphing-aircraft-card.webp', width: 1200, height: 675, quality: 82 },
      { name: 'morphing-aircraft-hero.webp', width: 1920, height: 1080, quality: 85 },
    ],
  },
  {
    src: 'DEP_aircraft.png',
    flip: false,
    outputs: [
      { name: 'dep-aircraft-card.webp', width: 1200, height: 675, quality: 82 },
      { name: 'dep-aircraft-hero.webp', width: 1920, height: 1080, quality: 85 },
    ],
  },
  {
    src: 'uh60_shiplanding_chatgpt.png',
    flip: true,
    outputs: [
      { name: 'uh60-ship-landing-card.webp', width: 1200, height: 675, quality: 82 },
      { name: 'uh60-ship-landing-hero.webp', width: 1920, height: 1080, quality: 85 },
    ],
  },
  {
    src: 'AAM_aircraft.png',
    flip: false,
    outputs: [
      { name: 'aam-tiltwing-card.webp', width: 1200, height: 675, quality: 82 },
      { name: 'aam-tiltwing-hero.webp', width: 1920, height: 1080, quality: 85 },
    ],
  },
  {
    src: 'quadrotor_gemini.jfif',
    flip: false,
    outputs: [{ name: 'quadrotor-figure.webp', width: 1400, height: 1050, quality: 85 }],
  },
  {
    src: 'portrait.png',
    flip: false,
    outputs: [{ name: 'portrait.webp', width: 960, height: 1200, quality: 85 }],
  },
];

async function buildImages() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const job of jobs) {
    const srcPath = path.join(SRC_DIR, job.src);
    if (!fs.existsSync(srcPath)) {
      console.warn(`  ! missing source image: ${job.src} (skipped)`);
      continue;
    }
    const base = sharp(srcPath).rotate();
    const oriented = job.flip ? base.flop() : base;

    for (const out of job.outputs) {
      await oriented
        .clone()
        .resize({ width: out.width, height: out.height, fit: 'cover', position: sharp.strategy.attention })
        .webp({ quality: out.quality })
        .toFile(path.join(OUT_DIR, out.name));
      console.log(`  ✓ img/${out.name}`);
    }
  }
}

module.exports = { buildImages };
