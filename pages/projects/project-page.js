const projects = require('../../data/projects');
const research = require('../../data/research');
const { layout } = require('../../templates/layout');
const {
  sectionHead,
  specBlock,
  figure,
  projectHero,
  relatedResearchList,
  programDetailsTable,
  nextProjectLink,
} = require('../../templates/components');
const { xdsmDiagram, shipLandingSchematic } = require('../../templates/diagrams');

const XDSM_CONFIGS = {
  'xdsm-1': {
    nodes: [
      { id: 'opt', label: 'OPTIMIZER', optimizer: true },
      { id: 'aero', label: 'AERODYNAMICS' },
      { id: 'struct', label: 'STRUCTURES' },
    ],
    edges: [
      { from: 'opt', to: 'aero' },
      { from: 'aero', to: 'opt' },
      { from: 'opt', to: 'struct' },
      { from: 'struct', to: 'opt' },
      { from: 'aero', to: 'struct' },
      { from: 'struct', to: 'aero' },
    ],
  },
  'xdsm-2': {
    nodes: [
      { id: 'opt', label: 'OPTIMIZER', optimizer: true },
      { id: 'ctrl', label: 'FLIGHT CONTROLS' },
      { id: 'aero', label: 'AERODYNAMICS' },
      { id: 'struct', label: 'STRUCTURES' },
    ],
    edges: [
      { from: 'opt', to: 'ctrl' },
      { from: 'ctrl', to: 'opt' },
      { from: 'opt', to: 'aero' },
      { from: 'aero', to: 'opt' },
      { from: 'opt', to: 'struct' },
      { from: 'struct', to: 'opt' },
      { from: 'aero', to: 'struct' },
      { from: 'struct', to: 'aero' },
      { from: 'ctrl', to: 'aero' },
      { from: 'aero', to: 'ctrl' },
    ],
  },
};

function renderDiagram(key, caption) {
  if (key === 'ship-schematic') return shipLandingSchematic();
  const config = XDSM_CONFIGS[key];
  return xdsmDiagram({ ...config, caption });
}

function proseSection(heading, bodyHtml, alt) {
  return `
<section class="section${alt ? ' section-alt' : ''}">
  <div class="section-inner prose">
    <h2>${heading}</h2>
    <p>${bodyHtml}</p>
  </div>
</section>`;
}

function render(project) {
  const { page } = project;
  const relatedEntries = page.relatedResearchIds.map((id) => research.find((r) => r.id === id));

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(idx + 1) % projects.length];

  const body = [
    projectHero({
      kicker: project.contextLine,
      title: project.title,
      summary: page.heroSummary,
      image: project.image,
      caption: page.heroCaption,
    }),

    `<section class="section">
      <div class="section-inner">
        ${sectionHead({ kicker: 'At a glance', title: 'Program summary' })}
        ${specBlock(page.specItems)}
      </div>
    </section>`,

    proseSection('The problem', page.problem),
    proseSection('Why it was difficult', page.whyDifficult, true),
    proseSection('My role', page.myRole),

    `<section class="section section-alt">
      <div class="section-inner prose">
        <h2>Technical approach</h2>
        <p>${page.technicalApproachIntro}</p>
        ${
          page.diagram
            ? `<figure class="diagram-figure">
          ${renderDiagram(page.diagram, page.diagramCaption)}
          <figcaption>${page.diagramCaption}</figcaption>
        </figure>`
            : ''
        }
        ${
          page.secondFigure
            ? figure({
                src: `/img/${page.secondFigure.base}.webp`,
                alt: page.secondFigure.alt,
                caption: page.secondFigure.caption,
                width: 1400,
                height: 1050,
              })
            : ''
        }
      </div>
    </section>`,

    proseSection(
      'What came out of it',
      page.outcome + (page.recurringThread ? `</p><p>${page.recurringThread}` : '')
    ),

    relatedEntries.length
      ? `<section class="section section-alt">
      <div class="section-inner">
        ${sectionHead({ kicker: 'Related research', title: 'Further reading' })}
        ${relatedResearchList(relatedEntries)}
      </div>
    </section>`
      : '',

    `<section class="section">
      <div class="section-inner">
        ${sectionHead({ kicker: 'Program details', title: 'Contracts &amp; awards' })}
        ${
          page.programDetails
            ? page.programDetails
                .map((d) =>
                  programDetailsTable([
                    ['Program', d.label],
                    ['Contract', d.contract],
                    ['Award', d.award],
                    ['Dates', d.dates],
                    ...(d.link ? [['Listing', `<a href="${d.link}" target="_blank" rel="noopener">sbir.gov &rarr;</a>`]] : []),
                  ])
                )
                .join('<div class="program-details-gap"></div>')
            : `<p class="research-note">${page.programNote}</p>`
        }
      </div>
    </section>`,

    `<div class="wrap">${nextProjectLink(nextProject)}</div>`,
  ].join('\n');

  return layout({
    path: `/projects/${project.slug}/`,
    title: project.title,
    description: page.heroSummary,
    bodyHtml: body,
  });
}

module.exports = { render };
