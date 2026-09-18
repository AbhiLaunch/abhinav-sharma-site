// Homepage card copy is drawn near-verbatim from docs/site-brief.md Part 4 —
// wording there is already fact-checked. Full project-page content (problem,
// approach, spec block, related research) lands in Phase 3; `href` already
// points at where those pages will live.

module.exports = [
  {
    slug: 'adaptive-aircraft-design',
    order: 1,
    title: 'Adaptive Aircraft Design & Optimization',
    contextLine: 'U.S. Army / DoD STTR · Phase I → Phase II · 2022–2025',
    summary:
      'MDO capabilities for adaptive and morphing UAVs. I led technical proposal development and a six-person industry-academic team with the University of Michigan, taking the program from a ~$173K Phase I to a ~$1.15M Phase II. I developed a Python design framework with Army Research Laboratory researchers and delivered it to ARL for its morphing-aircraft research.',
    image: {
      base: 'morphing-aircraft',
      alt: 'Illustration of a twin-boom morphing UAV in flight, with an orange dashed optimized trajectory, ghost aircraft showing different wing configurations along the path, and airflow streamlines over the wing.',
    },
  },
  {
    slug: 'helicopter-ship-landing',
    order: 2,
    title: 'Simulating Helicopter Operations at Sea',
    contextLine: 'University of Michigan · PhD · Office of Naval Research–supported',
    summary:
      'A comprehensive simulation of helicopter approach and landing on moving ships, integrating flight dynamics, controls, ship motion, airwake, ground effect, and landing-gear/deck interaction. Applied to UH-60A shipboard operations and published in the Journal of Aircraft.',
    image: {
      base: 'uh60-ship-landing',
      alt: 'Illustration of a UH-60 helicopter hovering over a moving ship’s stern flight deck, viewed from the hangar.',
    },
  },
  {
    slug: 'designing-aircraft-and-controller',
    order: 3,
    title: 'Designing the Aircraft and the Controller Together',
    contextLine: 'NASA SBIR Phase I · 2021',
    summary:
      'Incorporating flight-control requirements directly into multidisciplinary aircraft design optimization, rather than addressing them after the vehicle design is largely fixed.',
    image: {
      base: 'dep-aircraft',
      alt: 'Illustration of a distributed electric propulsion aircraft on approach, with eight leading-edge propellers, orange-outlined flaps, and white slipstream lines over the wing.',
    },
  },
  {
    slug: 'aam-modeling-and-simulation',
    order: 4,
    title: 'Advanced Air Mobility Modeling & Simulation',
    contextLine: 'Continuum Dynamics · Research + Commercial',
    summary:
      'AAM aircraft work across flight mechanics, interactional aerodynamics, controls, performance, ride quality, and simulation, including two new commercial clients won through cold outreach (~$100K, unnamed).',
    image: {
      base: 'aam-tiltwing',
      alt: 'Illustration of a six-propeller tiltwing aircraft in transition flight, with airflow streamlines over the wing.',
    },
  },
];
