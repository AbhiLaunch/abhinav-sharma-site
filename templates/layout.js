const site = require('../data/site');

const heroMotifSvg = `
<svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="currentColor" stop-opacity="0"/>
      <stop offset="50%" stop-color="currentColor" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="currentColor" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g stroke="var(--band-line)" stroke-width="1">
    ${Array.from({ length: 9 })
      .map((_, i) => `<line x1="0" y1="${i * 60}" x2="1200" y2="${i * 60}"/>`)
      .join('')}
  </g>
  <path d="M-20 420 C 260 420, 340 120, 640 90 C 860 68, 980 140, 1220 60" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="2 10" stroke-linecap="round" opacity="0.55"/>
</svg>`;

function header() {
  return `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="nav-inner">
    <a class="nav-brand" href="/">${site.name}</a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <nav class="nav-links" id="primary-nav" aria-label="Primary">
      ${site.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join('\n      ')}
    </nav>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="site-footer" id="contact">
  <div class="footer-inner">
    <div class="footer-contact">
      <h2 class="section-title">Get in touch</h2>
      <p>${site.contactIntro}</p>
      <div class="footer-links">
        <a href="mailto:${site.email}">${site.email}</a>
        <a href="${site.linkedinUrl}" target="_blank" rel="noopener">${site.linkedinLabel}</a>
      </div>
    </div>
    <div class="footer-meta">
      <span>&copy; <span id="year"></span> ${site.name}</span>
    </div>
  </div>
</footer>`;
}

function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    description: site.defaultDescription,
    url: site.siteUrl,
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of Michigan' },
      { '@type': 'CollegeOrUniversity', name: 'University of Iowa' },
    ],
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'UC Berkeley Haas School of Business',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Vertical Flight Society',
    },
    sameAs: [site.linkedinUrl, site.scholarUrl],
  };
}

// Plain-text fields (site.defaultDescription is also embedded raw in the
// JSON-LD block below, which must NOT be HTML-escaped) get escaped only at
// the point they're placed into an HTML attribute or text node.
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function layout({
  path = '/',
  title,
  description = site.defaultDescription,
  ogImage = '/og-image.jpg',
  bodyHtml,
  bodyClass = '',
}) {
  const fullTitle = title ? `${title} — ${site.name}` : site.defaultTitle;
  const canonical = `${site.siteUrl}${path}`;
  const safeDescription = escapeHtml(description);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${fullTitle}</title>
<meta name="description" content="${safeDescription}">
<link rel="canonical" href="${canonical}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">

<meta property="og:type" content="website">
<meta property="og:title" content="${fullTitle}">
<meta property="og:description" content="${safeDescription}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.siteUrl}${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${fullTitle}">
<meta name="twitter:description" content="${safeDescription}">
<meta name="twitter:image" content="${site.siteUrl}${ogImage}">

<script type="application/ld+json">${JSON.stringify(personJsonLd())}</script>
</head>
<body class="${bodyClass}">
${header()}
<main id="main">
${bodyHtml}
</main>
${footer()}
<script src="/main.js" defer></script>
</body>
</html>
`;
}

module.exports = { layout, heroMotifSvg };
