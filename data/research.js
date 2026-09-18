// Full publication list lives here so the Research page (Phase 4) and
// project pages (Phase 3) share one source. Anything not explicitly in
// docs/site-brief.md Part 3 is left null and rendered as a marked
// placeholder rather than guessed — see the fact-check list in
// docs/audit-and-plan.md.

module.exports = [
  {
    id: 'jofaircraft-ship-landing',
    title:
      'Development and Application of a Comprehensive Simulation for Modeling Helicopter Ship Landing',
    authors: 'Abhinav Sharma',
    mine: true,
    venue: 'Journal of Aircraft',
    // VERIFY (site-brief.md Part 7, item 5): confirm exact year and DOI against the paper.
    year: null,
    doi: null,
    note: 'My PhD dissertation: a simulation of helicopter approach and landing on moving ship decks, applied to UH-60A shipboard operations.',
  },
  {
    id: 'aiaa-dep-controls',
    // VERIFY (site-brief.md Part 7, item 5): exact title/authors/venue/year/DOI not given in the brief.
    title: null,
    mine: true,
    venue: null,
    year: null,
    doi: null,
    note: 'Related AIAA publication from the NASA DEP aircraft design optimization program (Project 2).',
  },
  {
    id: 'aiaa-aviation-2025-morphing-uav',
    title: 'Coupled Trajectory and Aerostructural Optimization of a UAV with Modular Morphing Wings',
    authors: 'Safa Bakhshi, Shugo Kaneko, Joaquim R. R. A. Martins',
    mine: false,
    collaboratorProgram: true,
    venue: 'AIAA Aviation 2025',
    year: 2025,
    doi: null,
    note:
      'From the Army STTR program (Project 1) by my university collaborators — shortlisted as one of five finalists for the AIAA MDO Technical Committee’s best student paper award.',
    // VERIFY (site-brief.md Part 7, item 2): confirm whether I'm a co-author; presented here as collaborator work only.
  },
];
