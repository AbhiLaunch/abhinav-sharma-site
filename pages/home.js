const site = require('../data/site');
const projects = require('../data/projects');
const research = require('../data/research');
const { layout, heroMotifSvg } = require('../templates/layout');
const { sectionHead, projectCard, researchItem } = require('../templates/components');

function hero() {
  return `
<section class="hero">
  <div class="hero-motif" aria-hidden="true">${heroMotifSvg}</div>
  <div class="hero-inner">
    <p class="hero-name">Abhinav Sharma</p>
    <h1>I&rsquo;ve spent my career on complex aerospace systems, much of it for the Navy and Army.</h1>
    <p class="hero-sub">Now at Berkeley Haas, I&rsquo;m focused on what it takes to move advanced defense and dual-use technology from R&amp;D into real-world use.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="#projects">View Projects</a>
      <a class="btn btn-secondary" href="#contact">Get in touch</a>
    </div>
    <ul class="hero-credibility">
      ${site.credibilityItems.map((item) => `<li>${item}</li>`).join('\n      ')}
    </ul>
  </div>
</section>`;
}

function selectedProjects() {
  const ordered = [...projects].sort((a, b) => a.order - b.order);
  return `
<section class="section" id="projects">
  <div class="section-inner">
    ${sectionHead({
      kicker: 'Selected Projects',
      title: 'Aerospace R&amp;D, from concept to customer',
    })}
    <div class="project-grid">
      ${ordered.map(projectCard).join('\n      ')}
    </div>
  </div>
</section>`;
}

function currentDirection() {
  const themes = [
    {
      title: 'Defense &amp; dual-use technology',
      body: 'Navy- and Army-sponsored R&amp;D is my starting point. I&rsquo;m learning how defense capabilities are developed, bought, integrated, and fielded.',
    },
    {
      title: 'Autonomous &amp; complex physical systems',
      body: 'Where complex physical systems, autonomy, and software meet real-world deployment.',
    },
    {
      title: 'Technology transition &amp; adoption',
      body: 'I completed NSF I-Corps customer discovery with a team at Berkeley, testing assumptions against real customers before deciding what to build.',
    },
  ];
  return `
<section class="section section-alt">
  <div class="section-inner">
    ${sectionHead({
      kicker: 'Current direction',
      title: 'What happens after the technology works',
      dek: 'After years developing technology, I got curious about who owns the problem, who pays for it, and why good technology stalls after R&amp;D.',
    })}
    <div class="theme-grid">
      ${themes
        .map((t) => `<div class="theme-card"><h3>${t.title}</h3><p>${t.body}</p></div>`)
        .join('\n      ')}
    </div>
  </div>
</section>`;
}

function background() {
  return `
<section class="section">
  <div class="section-inner background-grid">
    <figure class="background-portrait">
      <img src="/img/portrait.webp" alt="Abhinav Sharma" width="480" height="600" loading="lazy">
    </figure>
    <div class="background-copy">
      ${sectionHead({ kicker: 'Background', title: 'From aerospace R&amp;D to Haas' })}
      <p>I have a PhD in aerospace engineering from the University of Michigan, then spent six years at Continuum Dynamics leading government-funded R&amp;D, including an Army STTR I took from Phase I to Phase II. Now at Berkeley Haas, I&rsquo;m building out the rest of the toolkit: strategy, commercialization, and how organizations adopt new technology.</p>
      <p class="background-affiliation">Elected member, Vertical Flight Society Modeling &amp; Simulation Technical Committee</p>
    </div>
  </div>
</section>`;
}

function selectedResearch() {
  return `
<section class="section section-alt" id="research">
  <div class="section-inner">
    ${sectionHead({ kicker: 'Selected Research', title: 'Publications' })}
    <ul class="research-list">
      ${research.map(researchItem).join('\n      ')}
    </ul>
    <p class="research-links">
      <a class="trajectory-link" href="${site.scholarUrl}" target="_blank" rel="noopener">All publications on Google Scholar &nearr;</a>
    </p>
  </div>
</section>`;
}

function render() {
  const body = [hero(), selectedProjects(), currentDirection(), background(), selectedResearch()].join('\n');
  return layout({
    path: '/',
    bodyHtml: body,
  });
}

module.exports = { render };
