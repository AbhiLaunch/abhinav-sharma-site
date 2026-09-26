const site = require('../data/site');
const { NEW_TAB_NOTE } = require('./components');

function header() {
  return `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="nav-inner">
    <a class="nav-brand" href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="nav-monogram" aria-hidden="true" focusable="false"><g fill="currentColor"><path d="M3 51 17 13h6l14 38h-6l-4-11H13L9 51zm12-16h10l-5-15z"/><path fill="#FDB515" d="M58 15v6c-3-2-6-3-10-3-5 0-8 2-8 5 0 3 3 5 9 7 8 3 12 6 12 12 0 7-5 11-14 11-5 0-10-1-13-4v-6c4 3 8 5 13 5 5 0 8-2 8-6 0-3-3-5-9-7-8-3-12-6-12-12 0-7 6-11 14-11 4 0 7 1 10 3z"/></g></svg><span>${site.name}</span></a>
    <nav class="nav-links" id="primary-nav" aria-label="Primary">
      ${site.nav.map((item) => `<a href="${item.href}"${item.cta ? ' class="nav-cta"' : ''}>${item.label}</a>`).join('\n      ')}
    </nav>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="site-footer" id="contact">
  <div class="footer-inner">
    <div class="footer-contact">
      <h2 class="section-title">${site.contactTitle}</h2>
      <p>${site.contactIntro}</p>
      <div class="footer-links">
        <a class="btn btn-primary" href="${site.linkedinUrl}" target="_blank" rel="noopener">Connect on LinkedIn <span aria-hidden="true">↗</span>${NEW_TAB_NOTE}</a>
      </div>    </div>
    <div class="footer-meta">
      <span>&copy; <span id="year">${new Date().getFullYear()}</span> ${site.name}</span>
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
    '@id': `${site.siteUrl}/#person`,
    image: `${site.siteUrl}/img/portrait.webp`,
    jobTitle: 'Defense-tech founder',
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of Michigan', url: 'https://umich.edu' },
      { '@type': 'CollegeOrUniversity', name: 'University of Iowa', url: 'https://uiowa.edu' },
    ],
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'UC Berkeley Haas School of Business',
      url: 'https://haas.berkeley.edu',
    },
    knowsAbout: [
      'Rotorcraft flight dynamics',
      'Multidisciplinary design optimization',
      'Modeling and simulation',
      'Flight controls',
      'Advanced air mobility',
    ],
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
  ogImage = '/og-image-v7.jpg',
  bodyHtml,
  bodyClass = '',
  noindex = false,
}) {
  const fullTitle = title ? `${title} — ${site.name}` : site.defaultTitle;
  const canonical = `${site.siteUrl}${path}`;
  const safeDescription = escapeHtml(description);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#00274c">
<title>${fullTitle}</title>
<meta name="description" content="${safeDescription}">${noindex ? '\n<meta name="robots" content="noindex">' : ''}
${noindex ? '' : `<link rel="canonical" href="${canonical}">`}
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=as1">
<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=as1">
<link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-600.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css?v=20260926b">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${fullTitle}">
<meta property="og:description" content="${safeDescription}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.siteUrl}${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${escapeHtml(site.ogImageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${fullTitle}">
<meta name="twitter:description" content="${safeDescription}">
<meta name="twitter:image" content="${site.siteUrl}${ogImage}">
<meta name="twitter:image:alt" content="${escapeHtml(site.ogImageAlt)}">

${noindex ? '' : `<script type="application/ld+json">${JSON.stringify(personJsonLd())}</script>`}
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

module.exports = { layout };
