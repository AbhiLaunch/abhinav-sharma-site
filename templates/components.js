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

module.exports = { sectionHead, projectCard, specBlock, figure };
