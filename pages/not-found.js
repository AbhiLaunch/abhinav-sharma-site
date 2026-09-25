const { layout } = require('../templates/layout');

function render() {
  const body = `
<section class="section">
  <div class="section-inner background-copy">
    <div class="section-head"><p class="kicker">404</p><h1 class="section-title">That page doesn&rsquo;t exist</h1></div>
    <p>The link may be outdated, or the address mistyped. <a href="/">Go to the home page</a>.</p>
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
