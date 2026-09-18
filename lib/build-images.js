const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'images');
const OUT_DIR = path.join(__dirname, '..', 'img');

// Each job reads one file from images/ (left untouched) and writes optimized,
// web-safe copies into img/ at two widths per usage (a small and a full size)
// so pages can ship a `srcset`/`sizes` pair instead of one fixed-resolution
// file to every device. `flip` corrects the UH-60 image, whose tail rotor the
// generator placed on the wrong side (see docs/site-brief.md).
const jobs = [
  {
    src: 'morphing_aircraft_gemini.jfif',
    flip: false,
    base: 'morphing-aircraft',
  },
  {
    src: 'DEP_aircraft.png',
    flip: false,
    base: 'dep-aircraft',
  },
  {
    src: 'uh60_shiplanding_chatgpt.png',
    flip: true,
    base: 'uh60-ship-landing',
  },
  {
    src: 'AAM_aircraft.png',
    flip: false,
    base: 'aam-tiltwing',
  },
];

const CARD_SIZES = [
  { suffix: 'sm', width: 640, height: 360, quality: 78 },
  { suffix: '', width: 1200, height: 675, quality: 82 },
];
const HERO_SIZES = [
  { suffix: 'sm', width: 960, height: 540, quality: 80 },
  { suffix: '', width: 1920, height: 1080, quality: 85 },
];

const singleFigureJobs = [
  {
    src: 'quadrotor_gemini.jfif',
    flip: false,
    base: 'quadrotor-figure',
    sizes: [
      { suffix: 'sm', width: 700, height: 525, quality: 80 },
      { suffix: '', width: 1400, height: 1050, quality: 85 },
    ],
  },
  {
    src: 'portrait.png',
    flip: false,
    base: 'portrait',
    sizes: [
      { suffix: 'sm', width: 480, height: 600, quality: 80 },
      { suffix: '', width: 960, height: 1200, quality: 85 },
    ],
  },
];

async function renderVariants(oriented, base, sizes) {
  for (const size of sizes) {
    const name = size.suffix ? `${base}-${size.suffix}.webp` : `${base}.webp`;
    await oriented
      .clone()
      .resize({ width: size.width, height: size.height, fit: 'cover', position: sharp.strategy.attention })
      .webp({ quality: size.quality })
      .toFile(path.join(OUT_DIR, name));
    console.log(`  ✓ img/${name}`);
  }
}

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
    await renderVariants(oriented, `${job.base}-card`, CARD_SIZES);
    await renderVariants(oriented, `${job.base}-hero`, HERO_SIZES);
  }

  for (const job of singleFigureJobs) {
    const srcPath = path.join(SRC_DIR, job.src);
    if (!fs.existsSync(srcPath)) {
      console.warn(`  ! missing source image: ${job.src} (skipped)`);
      continue;
    }
    const base = sharp(srcPath).rotate();
    const oriented = job.flip ? base.flop() : base;
    await renderVariants(oriented, job.base, job.sizes);
  }
}

module.exports = { buildImages };
