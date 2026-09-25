module.exports = {
  name: 'Abhinav Sharma',
  email: 'absharma@berkeley.edu',
  linkedinUrl: 'https://www.linkedin.com/in/ab-sharma/',
  linkedinLabel: 'LinkedIn',
  scholarUrl: 'https://scholar.google.com/citations?user=qXDfIR0AAAAJ&hl=en',
  siteUrl: 'https://abhinav-sharma.com',

  defaultTitle: 'Abhinav Sharma | Berkeley Haas MBA ’28, Aerospace PhD',
  defaultDescription:
    'Berkeley Haas MBA candidate and aerospace PhD moving defense and dual-use technology into adoption. Led proposals that won $1.45M in DoD and NASA contracts.',
  ogImageAlt: 'Abhinav Sharma. Berkeley Haas MBA ’28, Aerospace PhD. Defense and dual-use technology.',

  credibilityItems: [
    'Aerospace PhD, University of Michigan',
    'Helicopters, fixed-wing aircraft, UAVs, and advanced air mobility',
    'Simulation, flight control, and multidisciplinary design optimization',
  ],

  // Absolute anchors so the links also work from the 404 page.
  nav: [
    { label: 'Projects', href: '/#projects' },
    { label: 'Direction', href: '/#direction' },
    { label: 'Research', href: '/#research' },
    { label: 'Contact', href: '/#contact', cta: true },
  ],

  // Every figure here already appears on a project card. The award figures
  // link to public SBIR.gov records there. $1.45M is federal contract award
  // value from proposals led (not personal earnings); the ~$100K in the
  // expansion text is separate, unverified client revenue, so the two are
  // never combined into one number.
  proofHeadline: { value: '$1.45M', label: 'in DoD and NASA contracts won on proposals I led' },
  proofExpand:
    'Three competitive awards, including an Army STTR I led from a ~$173K Phase I to a ~$1.15M Phase II, with a six-person team including University of Michigan researchers. I&rsquo;ve also won ~$100K in new client revenue on my own.',
  proofNote: 'Award figures link to public SBIR.gov records in the project cards below.',

  contactIntro:
    'I’d like to hear from founders in defense and dual-use, the investors who back them, and anyone moving technology into government use. A short note on what you’re working on is enough to start.',};
