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
        <h1 class="hero-line">I&rsquo;m a Berkeley Haas MBA candidate working to move defense and dual-use technology from R&amp;D into adoption and scale.</h1>
        <p class="hero-line">Before Haas, I was an aerospace engineer who developed engineering software and analyses for government and commercial customers. Beyond that work, I identified government research and development opportunities and led technical proposals that won $1.45M in Defense Department and NASA contracts.</p>
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
      body: 'My work has centered on the early stages of government R&amp;D: finding opportunities, shaping the technical concept, and leading proposals. At Haas I&rsquo;m studying the stages that follow: how new technology is acquired, integrated into existing systems, and fielded.',
    },
    {
      title: 'Customer discovery and adoption',
      body: 'With my team at Berkeley, I completed customer discovery through the National Science Foundation&rsquo;s I-Corps program, interviewing customers to test our assumptions under the guidance of program mentors. It taught me how much separates a working technology from its adoption.',
    },
    {
      title: 'Autonomy and integrated design',
      body: 'The NASA and Army projects shared one idea: design the parts of an aircraft that interact together simultaneously, not one at a time. I want to bring that approach to autonomous systems, where software and hardware are inseparable.',
    },
  ];
  return `
<section class="section section-alt" id="direction">
  <div class="section-inner">
    ${sectionHead({
      kicker: 'Current direction',
      title: 'What happens after the technology works',
      dek: 'The questions I keep returning to: who owns the problem, who pays to solve it, and what stands between a prototype and a purchase order.',
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
