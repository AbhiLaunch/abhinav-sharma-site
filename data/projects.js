// Home-page project cards. Copy follows docs/site-brief.md Part 3 (facts) and
// Part 4 (cards). Long-form project pages were removed in the single-page
// trim; see git history (commit fd1a03f and earlier) if they're ever needed.
//
// Every image here is an AI-generated illustration, and every caption says so
// (CLAUDE.md non-negotiable).

module.exports = [
  {
    order: 1,
    title: 'Adaptive Aircraft Design &amp; Optimization',
    contextLine: 'U.S. Army / DoD STTR · Phase I → Phase II · 2022–2025',
    summary:
      'Took an optimization program for adaptive, morphing UAVs from a ~$173K Phase I to a ~$1.15M Phase II, leading the proposals and a six-person team with the University of Michigan. Built the Python design framework with Army Research Laboratory researchers and delivered it to ARL for its morphing-aircraft research.',
    image: {
      base: 'morphing-aircraft',
      alt: 'Illustration of a twin-boom morphing UAV in flight, with an orange dashed optimized trajectory, ghost aircraft showing different wing configurations along the path, and airflow streamlines over the wing.',
    },
    caption: 'Illustration — coupled trajectory and aerostructural optimization of a morphing-wing UAV.',
    links: [
      { label: 'Phase I award', href: 'https://www.sbir.gov/awards/198170' },
      { label: 'Phase II award', href: 'https://www.sbir.gov/awards/209552' },
      // Neutral label: Crossref lists me as the 4th author, but that hasn't been
      // confirmed for the site (brief Part 7, item 2).
      { label: 'AIAA Aviation 2025 paper', href: 'https://doi.org/10.2514/6.2025-3626' },
    ],
  },
  {
    order: 2,
    title: 'Simulating Helicopter Operations at Sea',
    contextLine: 'University of Michigan · PhD · Office of Naval Research–supported',
    summary:
      'A simulation of helicopter approach and landing on moving ships, integrating flight dynamics, controls, ship airwake, deck motion, and ground effect. Applied to UH-60A shipboard operations and published in the Journal of Aircraft.',
    image: {
      base: 'uh60-ship-landing',
      alt: 'Illustration of a UH-60 helicopter hovering over a moving ship’s stern flight deck, viewed from the hangar.',
    },
    caption: 'Illustration — UH-60 over a moving flight deck. The UH-60A was the aircraft modeled in my research.',
    links: [{ label: 'Journal of Aircraft paper', href: 'https://doi.org/10.2514/1.C035973' }],
  },
  {
    order: 3,
    title: 'Designing the Aircraft and the Controller Together',
    contextLine: 'NASA SBIR Phase I · 2021',
    summary:
      'Built flight-control requirements directly into multidisciplinary design optimization for a distributed electric propulsion aircraft, instead of adding them after the airframe is largely fixed. I led the technical proposal.',
    image: {
      base: 'dep-aircraft',
      alt: 'Illustration of a distributed electric propulsion aircraft on approach, with eight leading-edge propellers, orange-outlined flaps, and white slipstream lines over the wing.',
    },
    caption: 'Illustrative DEP concept — not a real or flown aircraft, and not related to NASA’s X-57.',
    links: [
      // VERIFY: sbir.gov returns 403 to automated checks, so this link (supplied
      // by me) hasn't been confirmed to resolve to contract 80NSSC21C0396.
      { label: 'NASA award', href: 'https://www.sbir.gov/node/2116627' },
      { label: 'AIAA SciTech 2023 paper', href: 'https://arc.aiaa.org/doi/10.2514/6.2023-1364' },
    ],
  },
  {
    order: 4,
    title: 'Advanced Air Mobility Modeling &amp; Simulation',
    contextLine: 'Continuum Dynamics · Research + Commercial',
    summary:
      'Flight mechanics, interactional aerodynamics, controls, and performance analysis for AAM aircraft, including two new commercial clients won through cold outreach (~$100K, unnamed).',
    image: {
      base: 'aam-tiltwing',
      alt: 'Illustration of a six-propeller tiltwing aircraft in transition flight, with airflow streamlines over the wing.',
    },
    caption: 'Illustrative tiltwing concept — not a specific aircraft I designed.',
    links: [],
  },
];
