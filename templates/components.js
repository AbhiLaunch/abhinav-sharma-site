function sectionHead({ kicker, title, dek }) {
  return `
<div class="section-head">
  ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
  <h2 class="section-title">${title}</h2>
  ${dek ? `<p class="section-dek">${dek}</p>` : ''}
</div>`;
}

function projectCard(project) {
  const links = project.links.length
    ? `<p class="project-card-links">${project.links
        .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.label} &nearr;</a>`)
        .join('')}</p>`
    : '';
  return `
<article class="project-card">
  <div class="project-card-body">
    <p class="project-card-context">${project.contextLine}</p>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    ${links}
  </div>
  <figure class="project-card-media">
    <img src="/img/${project.image.base}-card.webp" srcset="/img/${project.image.base}-card-sm.webp 640w, /img/${project.image.base}-card.webp 1200w" sizes="(min-width: 861px) 50vw, 100vw" alt="${project.image.alt}" width="1200" height="675" loading="lazy">
    <figcaption>${project.caption}</figcaption>
  </figure>
</article>`;
}

function researchItem(item) {
  return `
<li class="research-item">
  <h3><a href="${item.href}" target="_blank" rel="noopener">${item.title}</a></h3>
  <p class="research-meta">${item.authors} &middot; ${item.venue} &middot; ${item.year}</p>
  <p class="research-note">${item.note}</p>
</li>`;
}

module.exports = { sectionHead, projectCard, researchItem };
