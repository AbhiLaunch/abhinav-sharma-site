const site = require('../data/site');
const { layout } = require('../templates/layout');
const { sectionHead } = require('../templates/components');

function render() {
  const body = `
<section class="section">
  <div class="section-inner background-copy">
    ${sectionHead({ kicker: '404', title: 'That page doesn&rsquo;t exist' })}
    <p>It may have moved, or it may never have existed. <a href="/">Go to the home page</a> or write to <a href="mailto:${site.email}">${site.email}</a>.</p>
  </div>
</section>`;
  return layout({
    path: '/404.html',
    title: 'Page not found',
    description: 'This page does not exist. Go to the home page of Abhinav Sharma.',
    bodyHtml: body,
    noindex: true,
  });
}

module.exports = { render };
