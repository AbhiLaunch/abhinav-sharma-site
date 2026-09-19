const site = require('../data/site');
const projects = require('../data/projects');
const research = require('../data/research');
const { layout, heroMotifSvg } = require('../templates/layout');
const { sectionHead, projectCard, researchItem, EXTERNAL_ARROW, NEW_TAB_NOTE } = require('../templates/components');

function hero() {
  return `
<section class="hero">
  <div class="hero-motif" aria-hidden="true">${heroMotifSvg}</div>
  <div class="hero-inner">
    <div class="hero-grid">
      <div class="hero-copy">
        <p class="hero-name">Abhinav Sharma</p>
        <h1>I&rsquo;ve built simulation and optimization tools for helicopters, advanced air mobility (AAM) aircraft, and morphing UAVs.</h1>
        <p class="hero-sub">Now at Berkeley Haas, I&rsquo;m focused on what it takes to move defense and dual-use technology from R&amp;D into real-world use.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects">View projects</a>
          <a class="btn btn-secondary" href="#contact">Get in touch</a>
        </div>
      </div>
      <figure class="hero-portrait">
        <img src="/img/portrait.webp" srcset="/img/portrait-sm.webp 400w, /img/portrait.webp 624w" sizes="(min-width: 861px) 340px, 176px" alt="Abhinav Sharma" width="624" height="780" fetchpriority="high">
      </figure>
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
      kicker: 'Selected projects',
      title: 'What I&rsquo;ve built and led',
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
      title: 'Defense and dual-use technology',
      body: 'My starting point is R&amp;D funded by the Navy and Army. I&rsquo;m learning how defense capabilities are developed, bought, integrated, and fielded.',
    },
    {
      title: 'Autonomous and complex physical systems',
      body: 'I&rsquo;ve worked on flight dynamics, controls, and design optimization for adaptive aircraft. I&rsquo;m interested in where those meet autonomy, software, and real-world deployment.',
    },
    {
      title: 'Technology transition and adoption',
      body: 'I completed NSF I-Corps customer discovery with a team at Berkeley, interviewing customers to test assumptions.',
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
  <div class="section-inner background-copy">
    ${sectionHead({ kicker: 'Background', title: 'From aerospace engineering to Haas' })}
    <p>I did my PhD at the University of Michigan on shipboard helicopter operations, supported by the Office of Naval Research. I then spent six years at Continuum Dynamics, an applied aerospace R&amp;D firm.</p>
    <p>Engineering gave me depth on the technical side. Haas is helping with the rest: customer need, product, organization, and adoption.</p>
    <p class="background-affiliation">Elected member, Vertical Flight Society Modeling &amp; Simulation Technical Committee</p>
  </div>
</section>`;
}

function selectedResearch() {
  return `
<section class="section section-alt" id="research">
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
  const body = [hero(), selectedProjects(), currentDirection(), background(), selectedResearch()].join('\n');
  return layout({
    path: '/',
    bodyHtml: body,
  });
}

module.exports = { render };
