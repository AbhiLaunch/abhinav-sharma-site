// The arrow is decorative; screen readers get the words instead.
const EXTERNAL_ARROW = '<span aria-hidden="true"> &nearr;</span>';
const NEW_TAB_NOTE = '<span class="visually-hidden"> (opens in a new tab)</span>';

function sectionHead({ kicker, title, dek }) {
  return `
<div class="section-head">
  ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
  <h2 class="section-title">${title.replace(/ (\S+)$/, "&nbsp;$1")}</h2>
${dek ? `  <p class="section-dek">${dek}</p>` : ''}
</div>`;
}

function projectCard(project) {
  const links = project.links.length
    ? `<div class="project-evidence"><span class="project-evidence-label">Supporting evidence</span><p class="project-card-links">${project.links
        .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}${EXTERNAL_ARROW}${NEW_TAB_NOTE}</a>`)
        .join('')}</p></div>`
    : '';
  return `
<article class="project-card">
  <div class="project-card-body">
    <p class="project-card-context">${project.contextLine}</p>
    <h3>${project.title}</h3>
    <p class="project-contribution">${project.contribution}</p>
    ${project.paragraphs.map((paragraph, index) => `<p>${project.paragraphLabels ? `<strong class="project-paragraph-label">${project.paragraphLabels[index]}</strong>` : ''}${paragraph}</p>`).join('\n    ')}
    ${project.details ? `<details class="project-details"><summary>Read the project details</summary><div>${project.details.map(paragraph => `<p>${paragraph}</p>`).join('')}</div></details>` : ''}
    ${links}
  </div>
  <figure class="project-card-media">
    <img src="/img/${project.image.base}-card.webp" srcset="/img/${project.image.base}-card-sm.webp 640w, /img/${project.image.base}-card.webp 1200w" sizes="${project.order === 1 ? '(min-width: 1200px) 490px, (min-width: 1001px) 42vw, 100vw' : '(min-width: 1200px) 324px, (min-width: 861px) 42vw, 100vw'}" alt="${project.image.alt}" width="1200" height="675" loading="lazy">
    <figcaption>${project.caption}</figcaption>
  </figure>
</article>`;
}

function researchItem(item) {
  return `
<li class="research-item">
  <h3><a href="${item.href}" target="_blank" rel="noopener">${item.title}${NEW_TAB_NOTE}</a></h3>
  <p class="research-meta">${item.authors} &middot; ${item.venue} &middot; ${item.year}</p>
  <p class="research-note">${item.note}</p>
</li>`;
}

module.exports = { sectionHead, projectCard, researchItem, EXTERNAL_ARROW, NEW_TAB_NOTE };
