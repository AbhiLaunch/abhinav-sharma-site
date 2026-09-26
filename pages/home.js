const site = require('../data/site');
const projects = require('../data/projects');
const research = require('../data/research');
const { layout } = require('../templates/layout');
const { sectionHead, projectCard, researchItem, EXTERNAL_ARROW, NEW_TAB_NOTE } = require('../templates/components');

function hero() {
  return `
<section class="hero">
  <div class="hero-inner">
    <div class="hero-grid">
      <div class="hero-copy">
        <h1 class="hero-title">Engineering what’s next.<span class="hero-title-focus">For defense and beyond.</span></h1>
        <p class="hero-intro">I’m Abhinav Sharma, a founder focused on unmanned and autonomous systems and dual-use innovation. My experience spans aircraft design, government R&D, engineering software, and commercial customer development.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects">Explore my work${EXTERNAL_ARROW}</a>
          <a class="btn btn-secondary" href="#contact">Get in touch</a>
        </div>
      </div>
      <figure class="hero-portrait">
        <img src="/img/portrait.webp" srcset="/img/portrait-sm.webp 400w, /img/portrait.webp 624w" sizes="(min-width: 861px) 320px, 152px" alt="Abhinav Sharma" width="624" height="780" fetchpriority="high">
      </figure>
    </div>
    <ul class="hero-credibility">
      ${site.credibilityItems.map((item) => `<li>${item}</li>`).join('\n      ')}
    </ul>
  </div>
</section>`;
}

function proofStrip() {
  return `
<section class="proof" aria-label="Track record">
  <div class="section-inner">
    <div class="proof-row">
      <p class="proof-headline">${site.proofHeadline}</p>
      <p class="proof-expand">${site.proofExpand}</p>
    </div>
    <p class="proof-note">${site.proofNote}</p>
  </div>
</section>`;
}

function selectedProjects() {
  const ordered = [...projects].sort((a, b) => a.order - b.order);
  return `
<section class="section" id="projects">
  <div class="section-inner">
    ${sectionHead({
      kicker: 'Selected work',
      title: 'Government, commercial, and doctoral work',
    })}
    <div class="project-grid">
      ${ordered.map(projectCard).join('\n      ')}
    </div>
  </div>
</section>`;
}

function currentDirection() {
  return `
<section class="section section-alt background-copy" id="direction">
  <div class="section-inner">
    ${sectionHead({ kicker: 'Current focus', title: 'Understanding the need is part of the engineering.' })}
    <p>I’m focused on unmanned and autonomous systems for defense and commercial use, and the practical questions that shape their adoption: what users need, how a system fits into existing workflows, and who makes the decision to acquire it.</p>
    <p>My engineering experience taught me to work across disciplines. Customer conversations showed me when to revisit the problem itself. At Haas, I’m studying how technology is funded, acquired, and put to use.</p>
  </div>
</section>`;
}

function selectedResearch() {
  return `
<section class="section" id="research">
  <div class="section-inner">
    ${sectionHead({ kicker: 'Research', title: 'Selected papers' })}
    <ul class="research-list">
      ${research.map(researchItem).join('\n      ')}
    </ul>
    <p class="research-links">
      <a class="trajectory-link" href="${site.scholarUrl}" target="_blank" rel="noopener">All publications on Google Scholar${EXTERNAL_ARROW}${NEW_TAB_NOTE}</a>
    </p>
  </div>
</section>`;
}

function render() {
  const body = [hero(), proofStrip(), selectedProjects(), currentDirection(), selectedResearch()].join('\n');
  return layout({
    path: '/',
    bodyHtml: body,
  });
}

module.exports = { render };
