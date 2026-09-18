// Original schematic SVGs for project pages. Simplified, XDSM-inspired MDO
// diagrams (diagonal = component, off-diagonal elbow = data exchange) rather
// than pixel-exact XDSM notation — restrained line art per docs/site-brief.md
// Part 5, not a redraw of any publisher figure.

const LINE = 'var(--line)';
const INK = 'var(--ink-soft)';
const ACCENT = 'var(--accent-text)';

function xdsmDiagram({ nodes, edges, caption }) {
  const cell = 170;
  const margin = 50;
  const boxW = 128;
  const boxH = 64;
  const size = margin * 2 + cell * nodes.length;
  const centerOf = (i) => margin + cell * i + cell / 2;
  const centers = nodes.map((_, i) => centerOf(i));

  const boxes = nodes
    .map((node, i) => {
      const cx = centers[i];
      const cy = centers[i];
      const x = cx - boxW / 2;
      const y = cy - boxH / 2;
      if (node.optimizer) {
        const skew = 16;
        const points = [
          [x + skew, y],
          [x + boxW, y],
          [x + boxW - skew, y + boxH],
          [x, y + boxH],
        ]
          .map((p) => p.join(','))
          .join(' ');
        return `<polygon points="${points}" fill="var(--paper)" stroke="${INK}" stroke-width="1.5"/>
        <text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="var(--mono)" font-size="14" fill="var(--ink)">${node.label}</text>`;
      }
      return `<rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" fill="var(--paper)" stroke="${INK}" stroke-width="1.5"/>
      <text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="var(--mono)" font-size="14" fill="var(--ink)">${node.label}</text>`;
    })
    .join('\n');

  const edgePaths = edges
    .map((edge, i) => {
      const srcI = nodes.findIndex((n) => n.id === edge.from);
      const dstI = nodes.findIndex((n) => n.id === edge.to);
      const lane = 10 + (i % 4) * 7;
      const colX = centers[srcI] + (srcI < dstI ? lane : -lane);
      const rowY = centers[dstI] + (dstI < srcI ? lane : -lane);
      const srcEdgeY = centers[srcI] + (dstI > srcI ? boxH / 2 : -boxH / 2);
      const dstEdgeX = centers[dstI] + (srcI > dstI ? boxW / 2 : -boxW / 2);
      const arrowRight = dstI > srcI;
      const arrow = arrowRight
        ? `M ${dstEdgeX - 8} ${rowY - 5} L ${dstEdgeX} ${rowY} L ${dstEdgeX - 8} ${rowY + 5}`
        : `M ${dstEdgeX + 8} ${rowY - 5} L ${dstEdgeX} ${rowY} L ${dstEdgeX + 8} ${rowY + 5}`;
      return `
      <path d="M ${colX} ${srcEdgeY} L ${colX} ${rowY} L ${dstEdgeX} ${rowY}" fill="none" stroke="${ACCENT}" stroke-width="1.4" opacity="0.75"/>
      <path d="${arrow}" fill="none" stroke="${ACCENT}" stroke-width="1.4" opacity="0.9"/>`;
    })
    .join('\n');

  return `
<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${caption}" style="width:100%;height:auto;max-width:560px;">
  ${edgePaths}
  ${boxes}
</svg>`;
}

function shipLandingSchematic() {
  return `
<svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic of a helicopter approach to a moving ship deck, showing the approach path, deck motion, and airwake region behind the hangar" style="width:100%;height:auto;">
  <line x1="0" y1="360" x2="900" y2="360" stroke="${LINE}" stroke-width="1"/>
  ${Array.from({ length: 8 })
    .map((_, i) => `<line x1="${i * 40}" y1="355" x2="${i * 40 - 14}" y2="368" stroke="${LINE}" stroke-width="1"/>`)
    .join('')}

  <!-- ship hull + hangar -->
  <path d="M 560 360 L 600 300 L 860 300 L 860 360 Z" fill="none" stroke="${INK}" stroke-width="1.6"/>
  <rect x="640" y="230" width="140" height="70" fill="none" stroke="${INK}" stroke-width="1.6"/>
  <text x="710" y="270" text-anchor="middle" font-family="var(--mono)" font-size="13" fill="${INK}">HANGAR</text>
  <line x1="560" y1="300" x2="600" y2="300" stroke="${INK}" stroke-width="1.6"/>
  <rect x="560" y="296" width="40" height="4" fill="${INK}"/>
  <text x="500" y="320" text-anchor="middle" font-family="var(--mono)" font-size="12" fill="${INK}">FLIGHT DECK</text>

  <!-- airwake region -->
  <g opacity="0.55">
    <path d="M 610 240 C 560 250, 520 275, 490 300" fill="none" stroke="${ACCENT}" stroke-width="1.2" stroke-dasharray="1 6"/>
    <path d="M 630 220 C 570 235, 510 265, 465 300" fill="none" stroke="${ACCENT}" stroke-width="1.2" stroke-dasharray="1 6"/>
    <path d="M 650 200 C 580 220, 505 255, 445 298" fill="none" stroke="${ACCENT}" stroke-width="1.2" stroke-dasharray="1 6"/>
  </g>
  <text x="520" y="185" text-anchor="middle" font-family="var(--mono)" font-size="12" fill="${ACCENT}">AIRWAKE REGION</text>

  <!-- deck motion indicator -->
  <path d="M 460 300 C 480 292, 520 292, 540 300 C 520 308, 480 308, 460 300 Z" fill="none" stroke="${INK}" stroke-width="1"/>
  <text x="500" y="345" text-anchor="middle" font-family="var(--mono)" font-size="11" fill="${INK}">DECK MOTION (PITCH / ROLL / HEAVE)</text>

  <!-- approach path -->
  <path d="M 60 100 C 200 130, 320 220, 460 290" fill="none" stroke="${INK}" stroke-width="1.4" stroke-dasharray="2 8"/>

  <!-- helicopter -->
  <g transform="translate(60,100)">
    <line x1="-38" y1="0" x2="38" y2="0" stroke="${INK}" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="6" ry="3" fill="${INK}"/>
    <path d="M 0 3 L -4 22 L 14 22 L 8 3 Z" fill="none" stroke="${INK}" stroke-width="1.6"/>
    <line x1="14" y1="14" x2="30" y2="10" stroke="${INK}" stroke-width="1.4"/>
  </g>
  <text x="60" y="70" text-anchor="middle" font-family="var(--mono)" font-size="12" fill="${INK}">APPROACH</text>
</svg>`;
}

module.exports = { xdsmDiagram, shipLandingSchematic };
