// Home-page project cards. Copy follows docs/site-brief.md Part 3 (facts) and
// Part 4 (cards). Long-form project pages were removed in the single-page
// trim; see git history (commit fd1a03f and earlier) if they're ever needed.
//
// Every image here is an AI-generated illustration, and every caption says so
// (CLAUDE.md non-negotiable).

module.exports = [
  {
    order: 1,
    title: 'Adaptive Aircraft Design and Optimization',
    contextLine: 'U.S. Army STTR · Phase I to Phase II · 2022–2025',
    summary:
      'I found the opportunity, assembled a six-person team across Continuum Dynamics and the University of Michigan, and led the proposals from start to finish. I also did the technical work: I developed a Python optimization framework for morphing UAVs, aircraft whose wings change shape in flight, with Army Research Laboratory researchers and delivered it to ARL for its morphing-aircraft research. The program grew from a ~$173K Phase I to a ~$1.15M Phase II.',
    image: {
      base: 'morphing-aircraft',
      alt: 'AI-generated illustration of a twin-boom morphing UAV with ghost images of alternate wing shapes along a dashed orange trajectory.',
    },
    caption: 'AI-generated illustration of a morphing-wing UAV whose trajectory and structure are optimized together. Not a specific aircraft.',
    links: [
      { label: 'Phase I award', href: 'https://www.sbir.gov/awards/198170' },
      { label: 'Phase II award', href: 'https://www.sbir.gov/awards/209552' },
      { label: 'AIAA Aviation 2025 paper', href: 'https://doi.org/10.2514/6.2025-3626' },
    ],
  },
  {
    order: 2,
    title: 'Simulating Helicopter Operations at Sea',
    contextLine: 'University of Michigan · PhD · Office of Naval Research–supported · 2017–2019',
    summary:
      'Landing a helicopter on a moving ship means contending with deck motion and the ship’s turbulent airwake. I developed a simulation that couples both with flight dynamics, controls, landing-gear dynamics, and ground effect. I applied it to UH-60A shipboard operations and published it in the <em>Journal of Aircraft</em>.',
    image: {
      base: 'uh60-ship-landing',
      alt: 'AI-generated illustration of a UH-60 helicopter hovering over a moving ship’s stern flight deck, viewed from the hangar.',
    },
    caption: 'AI-generated illustration of a UH-60 over a moving flight deck. The UH-60A is the aircraft I modeled in my research.',
    links: [{ label: 'Journal of Aircraft paper', href: 'https://doi.org/10.2514/1.C035973' }],
  },
  {
    order: 3,
    title: 'Designing the Aircraft and the Controller Together',
    contextLine: 'NASA SBIR Phase I · 2021',
    summary:
      'Designers often address flight-control requirements after the airframe is largely fixed. I led the proposal that won this NASA SBIR Phase I, then did the technical work: treating flight controls as part of the design from the start, using multidisciplinary design optimization (MDO) for an aircraft with distributed electric propulsion (DEP).',
    image: {
      base: 'dep-aircraft',
      alt: 'AI-generated illustration of a distributed electric propulsion aircraft on approach, with eight leading-edge propellers and white slipstream lines over the wing.',
    },
    caption: 'AI-generated illustration of a distributed electric propulsion concept, not a specific aircraft.',
    links: [
      // VERIFY: sbir.gov returns 403 to automated checks, so this link (supplied
      // by me) hasn't been confirmed to resolve to contract 80NSSC21C0396.
      { label: 'NASA SBIR award', href: 'https://www.sbir.gov/node/2116627' },
      { label: 'AIAA SciTech 2023 paper', href: 'https://doi.org/10.2514/6.2023-1364' },
    ],
  },
  {
    order: 4,
    title: 'Advanced Air Mobility Modeling and Simulation',
    contextLine: 'Continuum Dynamics · Research and commercial',
    summary:
      'I found the business: through networking and cold outreach, I won two advanced air mobility startups as clients, ~$100K in new revenue for Continuum Dynamics (clients unnamed). I then did the aircraft design and performance analyses, spanning flight mechanics, interactional aerodynamics, controls, and performance.',
    image: {
      base: 'aam-tiltwing',
      alt: 'AI-generated illustration of a six-propeller tiltwing aircraft in transition flight, with airflow streamlines over the wing.',
    },
    caption: 'AI-generated illustration of a tiltwing concept, not a specific aircraft.',
    links: [],
  },
];
