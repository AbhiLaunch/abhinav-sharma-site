function sectionHead({ kicker, title, dek }) {
  return `
<div class="section-head">
  ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
  <h2 class="section-title">${title}</h2>
  ${dek ? `<p class="section-dek">${dek}</p>` : ''}
</div>`;
}

function projectCard(project) {
  const href = `/projects/${project.slug}/`;
  return `
<a class="project-card" href="${href}">
  <div class="project-card-media">
    <img src="/img/${project.image.base}-card.webp" alt="${project.image.alt}" width="1200" height="675" loading="lazy">
  </div>
  <div class="project-card-body">
    <p class="project-card-context">${project.contextLine}</p>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <span class="project-card-link">View project &rarr;</span>
  </div>
</a>`;
}

function specBlock(items) {
  return `
<dl class="spec-block">
  ${items
    .map(
      ([term, def]) => `<div class="spec-item"><dt>${term}</dt><dd>${def}</dd></div>`
    )
    .join('\n  ')}
</dl>`;
}

function figure({ src, alt, caption, width, height }) {
  return `
<figure>
  <img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy">
  <figcaption>${caption}</figcaption>
</figure>`;
}

function projectHero({ kicker, title, summary, image, caption }) {
  return `
<section class="project-hero">
  <div class="project-hero-inner">
    ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
    <h1>${title}</h1>
    <p class="project-hero-summary">${summary}</p>
    <figure class="project-hero-figure">
      <img src="/img/${image.base}-hero.webp" alt="${image.alt}" width="1920" height="1080" fetchpriority="high">
      <figcaption>${caption}</figcaption>
    </figure>
  </div>
</section>`;
}

function relatedResearchList(entries) {
  if (!entries.length) return '';
  return `
<ul class="research-list">
  ${entries
    .map((r) => {
      if (r.collaboratorProgram) {
        return `<li class="research-item">
      <p class="kicker">From my program</p>
      <h3>${r.title}</h3>
      <p class="research-meta">${r.authors} &middot; ${r.venue}${r.year ? ` &middot; ${r.year}` : ''}</p>
      <p class="research-note">${r.note}</p>
    </li>`;
      }
      if (!r.title) {
        return `<li class="research-item">
      <p class="research-meta"><span class="placeholder-note">Publication details pending confirmation</span></p>
      <p class="research-note">${r.note}</p>
    </li>`;
      }
      return `<li class="research-item">
      <h3>${r.title}</h3>
      <p class="research-meta">${r.venue}${r.year ? ` &middot; ${r.year}` : ' &middot; <span class="placeholder-note">year &amp; DOI pending confirmation</span>'}</p>
      <p class="research-note">${r.note}</p>
    </li>`;
    })
    .join('\n  ')}
</ul>`;
}

function programDetailsTable(items) {
  return `
<dl class="spec-block program-details">
  ${items
    .map(
      ([term, def]) => `<div class="spec-item"><dt>${term}</dt><dd>${def}</dd></div>`
    )
    .join('\n  ')}
</dl>`;
}

function nextProjectLink(project) {
  return `
<a class="next-project" href="/projects/${project.slug}/">
  <span>
    <span class="kicker">Next project</span>
    <h3>${project.title}</h3>
  </span>
  <span class="next-project-arrow">&rarr;</span>
</a>`;
}

module.exports = {
  sectionHead,
  projectCard,
  specBlock,
  figure,
  projectHero,
  relatedResearchList,
  programDetailsTable,
  nextProjectLink,
};
