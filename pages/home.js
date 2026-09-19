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
        <h1>
          <span class="hero-line">I&rsquo;m a Berkeley Haas MBA candidate working to move defense and dual-use (military and civilian) technology out of research labs and into wide use.</span>
          <span class="hero-line">Before Haas, I was an aerospace engineer. I identified government research and development (R&amp;D) opportunities and led the technical proposals that won $1.45M in Defense Department and NASA contracts. I also developed engineering software and analyses for government and commercial customers.</span>
        </h1>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact">Get in touch</a>
        </div>
      </div>
      <figure class="hero-portrait">
        <img src="/img/portrait.webp" srcset="/img/portrait-sm.webp 400w, /img/portrait.webp 624w" sizes="(min-width: 861px) 320px, 176px" alt="Abhinav Sharma" width="624" height="780" fetchpriority="high">
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
      title: 'Government, commercial, and doctoral work',
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
      body: 'I&rsquo;ve worked on the early stages of government R&amp;D: finding opportunities, shaping the technical idea, and leading proposals. At Haas I&rsquo;m learning the other half: how new technology is bought, built into existing systems, and put into service.',
    },
    {
      title: 'Autonomous and complex physical systems',
      body: 'I&rsquo;ve worked on how aircraft move and are controlled, and on optimizing the designs of aircraft that change shape. I want to work where that meets autonomy, software, and real-world use.',
    },
    {
      title: 'Technology transition and adoption',
      body: 'With my team at Berkeley, I completed National Science Foundation I-Corps customer discovery: interviewing customers, guided by program mentors, to test our assumptions. That work showed me how much stands between a working technology and adoption.',
    },
  ];
  return `
<section class="section section-alt" id="direction">
  <div class="section-inner">
    ${sectionHead({
      kicker: 'Current direction',
      title: 'What happens after the technology works',
      dek: 'The questions I keep returning to: who is responsible for the problem, who pays to solve it, and what practical barriers remain.',
    })}
    <div class="theme-grid">
      ${themes
        .map((t) => `<div class="theme-card"><h3>${t.title}</h3><p>${t.body}</p></div>`)
        .join('\n      ')}
    </div>
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
  const body = [hero(), selectedProjects(), currentDirection(), selectedResearch()].join('\n');
  return layout({
    path: '/',
    bodyHtml: body,
  });
}

module.exports = { render };
