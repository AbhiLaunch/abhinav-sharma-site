// Home-page project cards. Copy follows docs/site-brief.md Part 3 (facts) and
// Part 4 (cards). Long-form project pages were removed in the single-page
// trim; see git history (commit fd1a03f and earlier) if they're ever needed.
//
// Every image here is an AI-generated illustration, and every caption says so
// (CLAUDE.md non-negotiable).

module.exports = [
  {
    order: 1,
    title: 'Designing Aircraft That Change Shape in Flight',
    contextLine: 'U.S. Army STTR small-business research award · Phase I to Phase II · 2022–2025',
    summary:
      'A morphing UAV reshapes its wings in flight, and every change alters airflow, structural loads, and the best flight path, each feeding back on the others. I identified the opportunity, led the proposals end to end, and assembled and led a six-person industry&ndash;academic team with Prof. Joaquim Martins of the University of Michigan. Working with researchers at the Army Research Laboratory (ARL), I guided the technical work and developed the Python framework that optimizes all three together. Prof. Martins&rsquo;s group built separate software, and both were delivered to ARL. The program advanced from a ~$173K Phase I to a ~$1.15M Phase II.',
    image: {
      base: 'morphing-aircraft',
      alt: 'AI-generated illustration of a morphing UAV with faint outlines of alternative wing configurations along a dashed orange flight path.',
    },
    caption: 'AI-generated illustration of a morphing-wing UAV, not a specific aircraft.',
    links: [
      { label: 'Phase I award', href: 'https://www.sbir.gov/awards/198170' },
      { label: 'Phase II award', href: 'https://www.sbir.gov/awards/209552' },
      { label: 'AIAA Aviation 2025 paper', href: 'https://doi.org/10.2514/6.2025-3626' },
    ],
  },
  {
    order: 4,
    title: 'Simulating Helicopter Operations at Sea',
    contextLine: 'University of Michigan · PhD · Office of Naval Research–supported · 2017–2019',
    summary:
      'A helicopter landing on a ship must contend with a moving deck and the turbulent airwake the ship generates. I developed a simulation that couples both with the helicopter&rsquo;s flight dynamics and controls, and applied it to UH-60A shipboard operations. I published the work in the <em>Journal of Aircraft</em> with Ashwani Padthe and Peretz Friedmann.',
    image: {
      base: 'uh60-ship-landing',
      alt: 'AI-generated illustration of a UH-60 helicopter hovering above the stern flight deck of a moving ship, seen from the hangar.',
    },
    caption: 'AI-generated illustration of a UH-60 over a moving flight deck. The UH-60A is the aircraft I modeled.',
    links: [{ label: 'Journal of Aircraft paper', href: 'https://doi.org/10.2514/1.C035973' }],
  },
  {
    order: 2,
    title: 'Designing the Aircraft and Its Flight Controls Together',
    contextLine: 'NASA SBIR small-business research award · Phase I · 2021',
    summary:
      'Flight controls are conventionally designed after an aircraft&rsquo;s body and wings are fixed. We optimized them together with the airframe from the start, on an aircraft with distributed electric propulsion, a layout that spreads electric propellers along the wing. As principal investigator, I led the technical proposal that won a competitive ~$125K NASA SBIR Phase I award, then carried out the technical work and published the results as first author with Prof. Joaquim Martins and Jeffrey Keller.',
    image: {
      base: 'dep-aircraft',
      alt: 'AI-generated illustration of an aircraft on approach, with eight electric propellers along the leading edge of the wing and white lines tracing the airflow over it.',
    },
    caption: 'AI-generated illustration of a distributed electric propulsion concept, not a specific aircraft.',
    links: [
      { label: 'NASA SBIR award', href: 'https://www.sbir.gov/awards/189431' },
      { label: 'AIAA SciTech 2023 paper', href: 'https://doi.org/10.2514/6.2023-1364' },
    ],
  },
  {
    order: 3,
    title: 'Advanced Air Mobility Modeling and Simulation',
    contextLine: 'Commercial and research work',
    summary:
      'I delivered aircraft design and performance analyses for multiple clients. Through my own networking and cold outreach, I also won two new, unnamed clients in advanced air mobility, the emerging market for electric and vertical-takeoff aircraft, adding ~$100K in new revenue.',
    image: {
      base: 'aam-tiltwing',
      alt: 'AI-generated illustration of a six-propeller aircraft whose wing tilts as it transitions from hover to forward flight, with lines tracing the airflow over the wing.',
    },
    caption: 'AI-generated illustration of a tiltwing concept, not a specific aircraft. The wing rotates between hovering and forward flight.',
    links: [],
  },
];
