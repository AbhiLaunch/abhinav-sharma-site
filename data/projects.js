// Homepage card copy is drawn near-verbatim from docs/site-brief.md Part 4.
// Project-page copy (the `page` field) follows the Part 4 template and only
// states what Part 3 supports; anything uncertain is called out in a
// comment here rather than printed as fact — see docs/audit-and-plan.md §7.

module.exports = [
  {
    slug: 'adaptive-aircraft-design',
    order: 1,
    title: 'Adaptive Aircraft Design &amp; Optimization',
    contextLine: 'U.S. Army / DoD STTR · Phase I → Phase II · 2022–2025',
    summary:
      'MDO capabilities for adaptive and morphing UAVs. I led technical proposal development and a six-person industry-academic team with the University of Michigan, taking the program from a ~$173K Phase I to a ~$1.15M Phase II. I developed a Python design framework with Army Research Laboratory researchers and delivered it to ARL for its morphing-aircraft research.',
    image: {
      base: 'morphing-aircraft',
      alt: 'Illustration of a twin-boom morphing UAV in flight, with an orange dashed optimized trajectory, ghost aircraft showing different wing configurations along the path, and airflow streamlines over the wing.',
    },
    page: {
      heroSummary:
        'An MDO framework that rapidly explores aero-structural trade-offs for adaptive, morphing-wing UAVs, developed with the Army Research Laboratory and taken from a Phase I feasibility study to a Phase II delivered tool.',
      metaDescription:
        'An Army STTR MDO framework for adaptive, morphing-wing UAVs, taken from a Phase I feasibility study to a Phase II tool delivered to the Army Research Laboratory.',
      heroCaption:
        'FIG. 01 — Illustration: coupled trajectory and aerostructural optimization of a morphing-wing UAV.',
      specItems: [
        ['Sponsor', 'U.S. Army / DoD (STTR)'],
        ['Phase', 'Phase I → Phase II'],
        ['Dates', 'Sep 2022 – Oct 2025'],
        ['My role', 'Technical proposal lead; program lead'],
        ['Partner', 'University of Michigan (Prof. Joaquim R. R. A. Martins)'],
        ['Outcome', 'Framework delivered to the Army Research Laboratory'],
      ],
      problem:
        "Adaptive and morphing aircraft — wings that change shape in flight — can be more efficient across a wider range of conditions than a fixed wing, but figuring out which shape changes are actually worth making means searching a much larger design space than a conventional aircraft, one where aerodynamics and structures are tightly coupled: change the shape and you change both the airflow and the loads the structure has to carry.",
      whyDifficult:
        "Aerodynamics and structures interact strongly for a morphing wing, so evaluating one discipline in isolation gives misleading answers — the analysis has to iterate the two together, which is expensive to do for every candidate design. The program itself added a second layer of difficulty: I led a six-person team split across Continuum Dynamics and the University of Michigan, which meant navigating IP and workshare boundaries while keeping the research aligned with what the Army customer needed.",
      myRole:
        "I led technical proposal development for both the Phase I and Phase II awards, and led the six-person industry-academic team through execution. I developed the Python-based optimization framework itself through direct, iterative engagement with Army Research Laboratory researchers, and delivered it to ARL for its own morphing-aircraft research.",
      technicalApproachIntro:
        "The framework couples an optimizer with aerodynamic and structural analyses in a single automated loop, so a candidate wing shape is evaluated for both its aerodynamic performance and its structural feasibility before the optimizer proposes the next design. The diagram below shows that coupling in simplified XDSM-style notation: the optimizer proposes a design, each discipline analyzes it, and aerodynamic loads and structural deformation are exchanged between disciplines as the design converges.",
      diagram: 'xdsm-1',
      diagramCaption: 'FIG. 02 — Simplified XDSM-style view of the aero-structural optimization loop.',
      outcome:
        "The program advanced from a ~$173K Phase I feasibility study to a ~$1.15M Phase II. The result is a working Python MDO framework, delivered to the Army Research Laboratory for its morphing-aircraft research — this shows a technology transitioning through increasingly substantial government R&amp;D, not a fielded or operationally deployed system.",
      recurringThread:
        'This work continues a thread that runs back to my master’s research on a morphing-UAV trailing-edge concept (2015–2016) — more on that on the <a href="/about/">About page</a>.',
      relatedResearchIds: ['aiaa-aviation-2025-morphing-uav'],
      programDetails: [
        {
          label: 'DoD (Army) FY2022 STTR Phase I',
          contract: 'W911NF-22-P-0083',
          award: '$172,730',
          dates: 'Sep 2022 – Mar 2023',
          link: 'https://www.sbir.gov/node/2319853',
        },
        {
          label: 'DoD (Army) FY2022 STTR Phase II',
          contract: 'W911NF24C0003',
          award: '~$1.15M ($1,149,485.80)',
          dates: 'Oct 2023 – Oct 2025',
          link: 'https://www.sbir.gov/awards/209552',
        },
      ],
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
    page: {
      heroSummary:
        'A comprehensive simulation of a helicopter approaching and landing on a moving ship deck, integrating flight dynamics, ship airwake, deck motion, and landing-gear dynamics, applied to UH-60A shipboard operations.',
      metaDescription:
        'A PhD simulation of helicopter approach and landing on moving ship decks — flight dynamics, ship airwake, and deck motion — applied to UH-60A shipboard operations.',
      heroCaption:
        'FIG. — UH-60 over a moving flight deck (illustration). The UH-60A was the aircraft modeled in my research.',
      specItems: [
        ['Sponsor', 'Office of Naval Research'],
        ['Context', 'PhD research, University of Michigan'],
        ['Dates', 'Jan 2017 – Oct 2019'],
        ['My role', 'Sole developer and researcher'],
        ['Department', 'Aerospace Engineering, University of Michigan'],
        ['Outcome', 'Published in the Journal of Aircraft'],
      ],
      problem:
        "Landing a helicopter on a small ship deck is one of the more demanding things a helicopter and its pilot do: the deck is moving under the aircraft, the ship’s hangar and superstructure churn the air behind it into a turbulent airwake, and the helicopter is close enough to the deck for ground effect to change its handling. Studying all of that with live sea trials is expensive and limited in what conditions it can safely cover, which is why a validated simulation matters.",
      whyDifficult:
        "The difficulty isn’t any one piece — it’s that ship airwake, deck motion, flight dynamics and controls, ground effect, and landing-gear dynamics all interact, and a simulation that leaves one of them out, or models it too simply, gives an answer that doesn’t hold up. Building one consistent framework that models all of them together, and validating that it behaves like the real approach-to-landing task, was the core of the dissertation.",
      myRole:
        "I developed the full simulation framework myself as my PhD research, integrating ship airwake, deck motion, flight controls, landing-gear dynamics, and ground effect into a single tool, and applied it to UH-60A shipboard operations.",
      technicalApproachIntro:
        "The framework models the ship’s airwake and deck motion, the helicopter’s flight dynamics and control system, its landing gear, and ground effect near the deck, then runs approach-and-landing trajectories through all of them together. The schematic below shows the geometry of the problem: the approach path into the turbulent airwake region behind the hangar, and the deck moving under the aircraft as it lands.",
      diagram: 'ship-schematic',
      diagramCaption: 'FIG. — Schematic of the helicopter/ship dynamic interface (illustration, not to scale).',
      // VERIFY (site-brief.md Part 7, item 1): confirm exact wording, conditions, and
      // "up to" vs. average against the Journal of Aircraft paper before publishing.
      outcome:
        "Applied to UH-60A shipboard operations, the simulation showed main-rotor power required dropped by up to 17% near a moving deck — a finding about the aerodynamic environment near the ship, not a change I engineered into the aircraft.",
      relatedResearchIds: ['jofaircraft-ship-landing'],
      programNote:
        "Office of Naval Research–supported PhD research conducted at the University of Michigan. This was university research, not a contracted program, so there’s no separate contract number or award amount to publish here.",
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
    page: {
      heroSummary:
        'A NASA-funded look at incorporating flight-control requirements directly into multidisciplinary aircraft design optimization for a distributed electric propulsion (DEP) aircraft, instead of designing the controller after the airframe is already fixed.',
      metaDescription:
        'A NASA SBIR study on incorporating flight-control requirements directly into multidisciplinary aircraft design optimization for a DEP aircraft.',
      heroCaption:
        'FIG. — Illustrative DEP concept: a blown-lift STOL aircraft with leading-edge propellers. Not a real or flown aircraft, and not related to NASA’s X-57.',
      specItems: [
        ['Sponsor', 'NASA (SBIR)'],
        ['Phase', 'Phase I'],
        ['Dates', 'May 2021 – Nov 2021'],
        ['My role', 'Technical proposal lead'],
        ['Outcome', 'Phase I feasibility study completed'],
      ],
      problem:
        "Aircraft design conventionally happens in sequence: size and shape the airframe first, then design a flight-control system to make it fly well. For a distributed electric propulsion aircraft, where many small motors add extra control authority (differential thrust, for instance), that sequence can leave real performance on the table — the airframe gets fixed before the design process ever asks what a good controller could have done with a slightly different configuration.",
      whyDifficult:
        "Folding flight-control requirements into the optimization loop from the start means adding flight-dynamics and control models to an already multidisciplinary aero-structural optimization — more disciplines, more coupling, and a larger, harder optimization problem to solve reliably.",
      myRole:
        "I led technical proposal development for this NASA SBIR Phase I award, one of the programs that made up the ~$1.45M in NASA and DoD funding I helped win at Continuum Dynamics.",
      technicalApproachIntro:
        "The approach adds a flight-controls discipline into the same coupled optimization loop as the aerodynamic and structural analyses, so the optimizer can trade airframe and control-system design against each other rather than treating the controller as an afterthought. The diagram below shows the same coupled-disciplines pattern as Project 1, with flight controls added as its own discipline.",
      diagram: 'xdsm-2',
      diagramCaption: 'FIG. — Simplified XDSM-style view with flight controls coupled into the design loop.',
      outcome:
        "The Phase I effort ran from May to November 2021 and completed as a feasibility study demonstrating the coupled aircraft-and-controller design approach.",
      relatedResearchIds: ['aiaa-dep-controls'],
      programDetails: [
        {
          label: 'NASA FY2021 SBIR Phase I',
          contract: '80NSSC21C0396',
          award: '$124,984',
          dates: 'May 2021 – Nov 2021',
          link: null,
        },
      ],
    },
  },
  {
    slug: 'aam-modeling-and-simulation',
    order: 4,
    title: 'Advanced Air Mobility Modeling &amp; Simulation',
    contextLine: 'Continuum Dynamics · Research + Commercial',
    summary:
      'AAM aircraft work across flight mechanics, interactional aerodynamics, controls, performance, ride quality, and simulation, including two new commercial clients won through cold outreach (~$100K, unnamed).',
    image: {
      base: 'aam-tiltwing',
      alt: 'Illustration of a six-propeller tiltwing aircraft in transition flight, with airflow streamlines over the wing.',
    },
    page: {
      heroSummary:
        'AAM aircraft work across flight mechanics, interactional aerodynamics, controls, performance, and simulation at Continuum Dynamics, including two new commercial clients I won through cold outreach.',
      metaDescription:
        'AAM aircraft work at Continuum Dynamics across flight mechanics, aerodynamics, controls, and simulation, including two new commercial clients won through cold outreach.',
      heroCaption:
        'FIG. — Illustrative tiltwing concept in transition flight. Not a specific aircraft I designed.',
      // This project has the thinnest source material of the four (see
      // docs/audit-and-plan.md §7, items 6 and 9) — kept proportionally
      // shorter rather than padded.
      specItems: [
        ['Context', 'Continuum Dynamics — research + commercial'],
        ['Dates', 'Feb 2020 – Feb 2026'],
        ['My role', 'R&amp;D engineer; business development'],
        ['Clients', 'Two AAM startups (unnamed)'],
        ['Outcome', '~$100K in new commercial revenue'],
      ],
      problem:
        "Early-stage advanced air mobility companies are often moving fast on a new aircraft configuration — a tiltwing, a quadrotor, a lift-plus-cruise design — without the in-house flight-mechanics and simulation depth to fully evaluate it, which is where an outside R&amp;D partner like Continuum Dynamics comes in.",
      whyDifficult:
        "AAM configurations spend real time transitioning between hover and forward flight, where rotor and wing aerodynamics interact in ways that are harder to model than either regime alone. Winning the work was its own challenge, too: prospecting and closing new clients in a competitive, capital-constrained startup market through cold outreach, without an existing relationship to build on.",
      myRole:
        "I generated ~$100K in new revenue by prospecting and closing two AAM startup clients for aircraft design and performance-analysis engagements, and contributed to Continuum Dynamics’ broader AAM research portfolio across flight mechanics, interactional aerodynamics, controls, performance, ride quality, and simulation. Earlier, at the eVTOL startup Airspace Experience Technologies, I built that company’s flight-dynamics and controls simulation strategy from the ground up and supported conceptual sizing of its full-scale demonstrator.",
      technicalApproachIntro:
        "This page covers two configurations I’ve worked across: a six-propeller tiltwing in transition flight, and a single-passenger quadrotor air taxi — illustrating the range of AAM configurations this work has spanned, rather than one specific program.",
      secondFigure: {
        base: 'quadrotor-figure',
        alt: 'Illustration of a single-passenger quadrotor air taxi, with rotor downwash lines visible below each rotor.',
        caption:
          'FIG. — Illustration of a single-passenger quadrotor, based on NASA’s quadrotor urban-air-mobility concept vehicle. No NASA logo or endorsement implied.',
      },
      outcome:
        "Two new commercial engagements for aircraft design and performance analysis (~$100K, clients unnamed), plus ongoing contributions to Continuum Dynamics’ AAM research programs. This is the least-documented of my four projects — more specifics on the client engagements would strengthen it.",
      relatedResearchIds: [],
      programNote: "Commercial client engagements; client names and contract terms aren’t mine to publish.",
    },
  },
];
