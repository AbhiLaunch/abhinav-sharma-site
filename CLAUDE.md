# CLAUDE.md

This site is being revised against a single source of truth: **[docs/site-brief.md](docs/site-brief.md)**. Read it in full before making any content, design, or structural change here. It covers voice, facts, information architecture, visual design, and the phase plan. This file is just a set of non-negotiables to keep in view while working — it does not replace the brief.

## Structure decision (supersedes brief Part 4)

The owner trimmed the site to a **single scannable page** (`/` only), modeled on arevalostrategies.com: hero, four short project cards, current direction, a short background with portrait, two publications, and the contact footer. The project pages, Research page, and About page were deleted; they live in git history (commit `fd1a03f` and earlier). Don't rebuild them without being asked. Each project card is a 1–2 sentence blurb with outbound links (sbir.gov award pages, publisher DOIs) instead of an internal page. Everything else in the brief (voice, facts, disclosure boundary, visual system) still applies.

## Non-negotiables

- **Disclosure boundary.** Never name the I-Corps team/venture or describe its problem space, product, customers, or thesis, even anonymously. It's fine to say I completed NSF I-Corps customer discovery as part of a team — nothing more. Never call him a "founder" or imply he's building a specific defense product.
- **First-person voice** for public-facing copy. Third person only for metadata, the short formal bio, and structured publication info.
- **Banned words:** visionary, thought leader, world-class, revolutionary/revolutionizing, trailblazer, serial entrepreneur, defense-tech founder, innovation leader, passionate innovator, mission-driven leader, transforming the battlespace, future of warfare, warfighter-first, "at the intersection of."
- **Fact discipline.** Don't invent or infer outcomes, funding, customer names, publication details, operational military use, performance improvements, PI status, patents, awards, or military impact. Anything not explicitly supported by the brief goes on the fact-check list, not the page — use an obvious placeholder and a `<!-- VERIFY: ... -->` comment (or the stack's equivalent) instead of guessing.
- **No copied publisher figures.** Authoring a paper doesn't grant rights to republish its figures. Redraw the concept as an original diagram instead.
- **No generated/altered photos of him.** The portrait must be his real photo (`images/portrait.*`), cropped only — no retouching, filters, or AI edits.
- **Aircraft images are illustrations.** Every aircraft image (morphing UAV, DEP aircraft, UH-60, tiltwing) is an AI-generated illustration, not a photo of real work. Every caption must say so, and none may imply he designed a specific real aircraft or that NASA/Army/etc. endorsed anything.
