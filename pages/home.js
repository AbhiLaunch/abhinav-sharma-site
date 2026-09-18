const site = require('../data/site');
const projects = require('../data/projects');
const { layout, heroMotifSvg } = require('../templates/layout');
const { sectionHead, projectCard } = require('../templates/components');

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
      title: 'Aerospace R&amp;D, from concept to government and commercial customers',
      dek: 'Four programs spanning Army- and NASA-sponsored R&amp;D, Navy-supported PhD research, and commercial advanced air mobility work.',
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
      body: 'My background is Navy- and Army-sponsored aircraft R&amp;D. I&rsquo;m now looking at where complex physical systems, autonomy, and software meet real-world deployment.',
    },
    {
      title: 'Autonomous &amp; complex physical systems',
      body: 'I&rsquo;m increasingly interested in autonomous platforms &mdash; extending the modeling, simulation, and optimization work I&rsquo;ve done on rotorcraft and morphing aircraft in that direction.',
    },
    {
      title: 'Technology transition &amp; adoption',
      body: 'At Berkeley, I&rsquo;ve done structured customer discovery through NSF I-Corps &mdash; testing assumptions against real customers before deciding what to build, the same habit I carried from years of proposal work.',
    },
  ];
  return `
<section class="section section-alt">
  <div class="section-inner">
    ${sectionHead({
      kicker: 'Current direction',
      title: 'What happens after the technology works',
      dek: 'After years developing technology, I got curious about the questions around it &mdash; who owns the problem, who pays for it, and why good technology stalls after R&amp;D.',
    })}
    <div class="theme-grid">
      ${themes
        .map(
          (t) => `<div class="theme-card"><h3>${t.title}</h3><p>${t.body}</p></div>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>`;
}

function trajectory() {
  return `
<section class="section">
  <div class="section-inner trajectory-copy">
    ${sectionHead({ kicker: 'Background', title: 'Professional trajectory' })}
    <p>My path started in aerospace engineering: a PhD and master&rsquo;s at the University of Michigan, including Office of Naval Research&ndash;supported research on helicopter shipboard landings, and a short stint at an eVTOL startup building its flight-simulation strategy from the ground up. For the last six years, I&rsquo;ve led government-funded R&amp;D and business development at Continuum Dynamics &mdash; winning ~$1.45M in NASA and Army funding, taking an Army STTR from Phase I to Phase II, and opening new commercial clients in advanced air mobility. I&rsquo;m now at Berkeley Haas, building out the rest of the toolkit: strategy, commercialization, and how organizations adopt new technology.</p>
    <p><a class="trajectory-link" href="/about/">More about my background &rarr;</a></p>
  </div>
</section>`;
}

function selectedResearch() {
  return `
<section class="section section-alt">
  <div class="section-inner">
    ${sectionHead({
      kicker: 'Selected Research',
      title: 'Published and ongoing work',
    })}
    <ul class="research-list">
      <li class="research-item">
        <h3>Development and Application of a Comprehensive Simulation for Modeling Helicopter Ship Landing</h3>
        <p class="research-meta">Journal of Aircraft &middot; <span class="placeholder-note"><!-- VERIFY: confirm exact publication year and DOI against the paper -->year &amp; DOI pending confirmation</span></p>
        <p class="research-note">My PhD dissertation: a simulation of helicopter approach and landing on moving ship decks, applied to UH-60A shipboard operations.</p>
      </li>
    </ul>
    <p style="margin-top: 24px;">
      <a class="trajectory-link" href="/research/">Full publication list &rarr;</a>
      &nbsp;&middot;&nbsp;
      <a class="trajectory-link" href="${site.scholarUrl}" target="_blank" rel="noopener">Google Scholar &rarr;</a>
    </p>
  </div>
</section>`;
}

function render() {
  const body = [hero(), selectedProjects(), currentDirection(), trajectory(), selectedResearch()].join('\n');
  return layout({
    path: '/',
    bodyHtml: body,
  });
}

module.exports = { render };
