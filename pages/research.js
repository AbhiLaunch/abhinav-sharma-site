const site = require('../data/site');
const research = require('../data/research');
const { layout } = require('../templates/layout');
const { sectionHead } = require('../templates/components');

function entryMarkup(r) {
  if (!r.title) {
    return `<li class="research-item">
      <p class="research-meta"><span class="placeholder-note">Publication details pending confirmation</span></p>
      <p class="research-note">${r.note}</p>
    </li>`;
  }
  return `<li class="research-item">
      <h3>${r.title}</h3>
      <p class="research-meta"><strong>${r.authors}</strong> &middot; ${r.venue}${
        r.year ? ` &middot; ${r.year}` : ' &middot; <span class="placeholder-note">year &amp; DOI pending confirmation</span>'
      }${r.doi ? ` &middot; <a href="${r.doi}" target="_blank" rel="noopener">DOI &rarr;</a>` : ''}</p>
      <p class="research-note">${r.note}</p>
    </li>`;
}

function render() {
  const own = research.filter((r) => r.mine);

  const body = `
<section class="project-hero">
  <div class="project-hero-inner">
    <p class="kicker">Research</p>
    <h1>Research</h1>
    <p class="project-hero-summary">Representative publications from my graduate research and government-funded programs, spanning helicopter shipboard operations, distributed electric propulsion aircraft design, and adaptive/morphing aircraft. For the complete record, see my <a href="${site.scholarUrl}" target="_blank" rel="noopener">Google Scholar profile</a>.</p>
  </div>
</section>

<section class="section">
  <div class="section-inner">
    ${sectionHead({ kicker: 'Publications', title: 'Selected work' })}
    <ul class="research-list">
      ${own.map(entryMarkup).join('\n      ')}
      <li class="research-item">
        <p class="research-meta"><span class="placeholder-note">More publications pending a complete list</span></p>
        <p class="research-note">Additional representative work &mdash; spanning ship airwake/rotorcraft interaction, advanced air mobility, and adaptive/morphing aircraft design &mdash; will be added here once I have a confirmed publication list to draw from, rather than guessed at. See <a href="${site.scholarUrl}" target="_blank" rel="noopener">Google Scholar</a> in the meantime.</p>
      </li>
    </ul>
    <p class="research-note research-footnote">Publications by my program collaborators &mdash; such as the AIAA Aviation 2025 paper from my Army STTR program's university partners &mdash; are noted on the relevant <a href="/projects/adaptive-aircraft-design/">project page</a> rather than listed here, since they aren't my own authored work.</p>
  </div>
</section>
`;

  return layout({
    path: '/research/',
    title: 'Research',
    description:
      'Selected publications by Abhinav Sharma spanning helicopter shipboard operations, distributed electric propulsion aircraft design, and adaptive/morphing aircraft research.',
    bodyHtml: body,
  });
}

module.exports = { render };
