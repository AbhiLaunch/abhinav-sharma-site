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
      'I led the technical proposals and a six-person team across Continuum Dynamics and the University of Michigan that took an Army STTR from a ~$173K Phase I to a ~$1.15M Phase II. The program produced optimization tools for morphing UAVs, whose wings change shape in flight. I developed the Python framework with Army Research Laboratory researchers and delivered it to ARL for its morphing-aircraft research.',
    image: {
      base: 'morphing-aircraft',
      alt: 'AI-generated illustration of a twin-boom morphing UAV in flight, with an orange dashed optimized trajectory, ghost aircraft showing different wing configurations along the path, and airflow streamlines over the wing.',
    },
    caption: 'AI-generated illustration — coupled trajectory and aerostructural optimization of a morphing-wing UAV.',
    links: [
      { label: 'Phase I award', href: 'https://www.sbir.gov/awards/198170' },
      { label: 'Phase II award', href: 'https://www.sbir.gov/awards/209552' },
      { label: 'AIAA Aviation 2025 paper', href: 'https://doi.org/10.2514/6.2025-3626' },
    ],
  },
  {
    order: 2,
    title: 'Simulating Helicopter Operations at Sea',
    contextLine: 'University of Michigan · PhD · Office of Naval Research–supported',
    summary:
      'Landing a helicopter on a moving ship means contending with deck motion and turbulent airwake. I developed a simulation that couples both with flight dynamics, controls, landing-gear dynamics, and ground effect, applied it to UH-60A shipboard operations, and published the work in the Journal of Aircraft.',
    image: {
      base: 'uh60-ship-landing',
      alt: 'AI-generated illustration of a UH-60 helicopter hovering over a moving ship’s stern flight deck, viewed from the hangar.',
    },
    caption: 'AI-generated illustration — UH-60 over a moving flight deck. The UH-60A was the aircraft modeled in my research.',
    links: [{ label: 'Journal of Aircraft paper', href: 'https://doi.org/10.2514/1.C035973' }],
  },
  {
    order: 3,
    title: 'Designing the Aircraft and the Controller Together',
    contextLine: 'NASA SBIR Phase I · 2021',
    summary:
      'Flight-control requirements are often handled after the airframe is largely fixed. This NASA SBIR Phase I brought them into multidisciplinary design optimization from the start, for a distributed electric propulsion aircraft. I led the technical proposal.',
    image: {
      base: 'dep-aircraft',
      alt: 'AI-generated illustration of a distributed electric propulsion aircraft on approach, with eight leading-edge propellers, orange-outlined flaps, and white slipstream lines over the wing.',
    },
    caption: 'AI-generated illustration of a distributed-electric-propulsion concept, not a specific or flown aircraft.',
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
    contextLine: 'Continuum Dynamics · Research and commercial',
    summary:
      'I prospected advanced air mobility startups through networking and cold outreach and closed two clients for aircraft design and performance analyses, about $100K in new revenue for Continuum Dynamics (clients unnamed). The technical work spans flight mechanics, interactional aerodynamics, controls, and performance.',
    image: {
      base: 'aam-tiltwing',
      alt: 'AI-generated illustration of a six-propeller tiltwing aircraft in transition flight, with airflow streamlines over the wing.',
    },
    caption: 'AI-generated illustration of a tiltwing concept, not a specific aircraft I designed.',
    links: [],
  },
];
