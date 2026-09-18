const site = require('../data/site');
const { layout } = require('../templates/layout');
const { sectionHead } = require('../templates/components');

function render() {
  const body = `
<section class="project-hero">
  <div class="project-hero-inner">
    <p class="kicker">About</p>
    <h1>About</h1>
  </div>
</section>

<section class="section about-section">
  <div class="section-inner about-grid">
    <figure class="about-portrait">
      <img src="/img/portrait.webp" srcset="/img/portrait-sm.webp 480w, /img/portrait.webp 960w" sizes="(min-width: 721px) 280px, 100vw" alt="Abhinav Sharma" width="960" height="1200">
    </figure>
    <div class="prose about-copy">
      <p>My path started at the University of Iowa, where &mdash; alongside a mechanical engineering degree &mdash; I contributed to the Virtual Soldier Research program's warfighter simulation work; from there I moved to aerospace engineering at the University of Michigan.</p>
      <p>My master's research turned to a morphing-UAV trailing-edge concept &mdash; numerical and experimental work, including wind-tunnel testing and an automated calibration and control setup with MATLAB/Simulink and dSPACE hardware. That thread, adaptive shape-changing aircraft, is one I'd return to years later.</p>
      <p>My PhD, also at Michigan, was Office of Naval Research&ndash;supported work on a different problem: simulating helicopter approach and landing on moving ship decks. I developed a comprehensive simulation framework integrating ship airwake, deck motion, flight controls, landing-gear dynamics, and ground effect, and applied it to UH-60A shipboard operations. The dissertation was published in the <em>Journal of Aircraft</em>.</p>
      <p>After Michigan, I spent a few months at Airspace Experience Technologies, an eVTOL startup in Detroit, building its flight-dynamics and controls simulation strategy from the ground up &mdash; my first look at early-stage advanced air mobility development.</p>
      <p>Then six years at Continuum Dynamics, an aerospace R&amp;D firm, doing the full lifecycle of government-funded research: identifying opportunities, shaping technical concepts, writing proposals, executing programs, and working directly with government customers. I led technical proposal development on NASA and DoD programs that won ~$1.45M in competitive funding, and I took an Army STTR program &mdash; on adaptive, morphing aircraft design, picking up the thread from my master's research &mdash; from a Phase I feasibility study to a Phase II framework delivered to the Army Research Laboratory. I also opened new commercial revenue by prospecting and closing AAM startup clients.</p>
      <p>Somewhere in those six years, I got more interested in the questions around the technology than the technology itself: who owns the problem, who pays to solve it, why promising research stalls before it reaches a real customer. That's what brought me to Berkeley Haas, where I'm building out the rest of the toolkit &mdash; strategy, commercialization, and how organizations adopt new technology &mdash; for a career now focused on defense and dual-use technology.</p>
      <p>At Berkeley, I've done structured customer discovery through NSF I-Corps as part of a team, testing assumptions against real customers before deciding what to build. I'm also an elected member of the Vertical Flight Society's Modeling &amp; Simulation Technical Committee.</p>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="section-inner">
    ${sectionHead({ kicker: 'For introductions', title: 'Formal bio' })}
    <div class="bio-block">
      <p>Abhinav Sharma is an aerospace engineer and MBA candidate at UC Berkeley's Haas School of Business, focused on defense and dual-use technology. He holds a PhD and M.S.E. in Aerospace Engineering from the University of Michigan and a B.S.E. in Mechanical Engineering from the University of Iowa. His Office of Naval Research&ndash;supported doctoral research on helicopter shipboard operations was published in the <em>Journal of Aircraft</em>. At Continuum Dynamics, he led technical proposal development on NASA and Army programs that won approximately $1.45 million in competitive funding, including an Army STTR program he took from Phase I to Phase II. He is an elected member of the Vertical Flight Society's Modeling &amp; Simulation Technical Committee.</p>
    </div>
  </div>
</section>
`;

  return layout({
    path: '/about/',
    title: 'About',
    description:
      'About Abhinav Sharma: aerospace engineer and Berkeley Haas MBA candidate, from PhD-level aerospace R&D to defense and dual-use technology.',
    bodyHtml: body,
  });
}

module.exports = { render };
