# Phase 0 — Audit and Plan

Source of truth: [docs/site-brief.md](site-brief.md). This document does not repeat facts, voice rules, or the phase plan from the brief — it audits the current site against it and proposes how to close the gap. No site code has been changed. Working on branch `site-revision`.

---

## 1. Audit

### Stack
- Plain static HTML/CSS/vanilla JS. One page (`index.html`), one stylesheet (`styles.css`), no build step, no package manager, no JS framework. A single inline `<script>` sets the footer year.
- Fonts loaded from Google Fonts CDN (Inter + Source Serif 4), not self-hosted.
- Deployed via GitHub Pages with a custom domain (`CNAME` → `abhinav-sharma.com`). Deploy is "push to `main`" — I will not touch this.
- `assets/Abhinav_Sharma_Resume.pdf` already exists and is linked. `images/` (untracked, not yet committed) holds all seven files the brief's Part 5 mapping expects — see §2 below. Nothing in `docs/` besides the brief; no `docs/publications.md` or `.bib`.
- Local preview: `python -m http.server 8123` via `.claude/launch.json` (already configured, works as-is).

### Page inventory
One page, six anchor-linked sections: Hero (`#top`) → About → Experience (3 entries) → Education (3 entries) → More → Contact. This is structurally a resume rendered as a single scroll, not the multi-page IA (Home / 4 project pages / Research / About) Part 4 calls for. Every phase after this one involves building new pages, not just restyling this one.

### What's already strong (keep/reuse)
- CSS custom-property theming with a `prefers-color-scheme` dark mode — the mechanism is sound, only the token *values* need to change.
- Sticky, blurred header nav; clean button and section-title patterns; reasonable heading hierarchy.
- Content is already organized in clear chronological blocks that map cleanly onto the About-page trajectory in Part 4.
- The resume PDF and portrait photo are already in the repo — two of Part 7's open items (resume, headshot) are already resolved and need no follow-up.

### What's generic, redundant, off-brand, too personal, or factually risky

**Off-brand / doesn't match positioning**
- Hero subhead never mentions defense or dual-use at all — the single most important omission relative to Part 2's directive to state it "plainly and early."
- Meta description is recruiting/AAM-flavored ("R&D/business development leader in advanced air mobility") with no defense/dual-use framing — needs to change for Part 6 too.
- Contact copy ("Open to conversations on aerospace, advanced air mobility, and MBA internship opportunities") reads recruiting-oriented, which Part 2 explicitly says not to optimize for, and doesn't mention defense/dual-use builders, investors, or technology transition.
- The just-shipped navy/gold "Michigan/Cal" palette (see the last commit) is a school-spirit choice, not the "technical drawing" paper/ink/restrained-accent direction Part 5 asks for. It's a strong, deliberate, *recent* identity — but it's a personal-affiliation palette, not a professional-technical one, and I don't think it's worth reconciling. Proposing a full replacement in §4, flagged here since it's a visible, opinionated call.

**Too personal (violates "Professional scope," Part 2)**
- "Amateur Muay Thai competitor (3 sanctioned bouts)" — a hobby. Remove.
- "Languages: French, Hindi, Spanish (Intermediate), Korean (Beginner)" — explicitly banned category. Remove.

**Factually risky or overclaiming relative to Part 3's approved phrasing**
- "achieving software adoption for advanced morphing aircraft research" (CDI/ARL bullet) overclaims relative to Part 3's own framing: "delivered to ARL for its morphing-aircraft research" is the sanctioned phrase; "adoption" implies something broader. Will fix to match Part 3 exactly.
- "...framework that served as technical blueprint for all future design analyses" (ASX bullet) is a stronger, inferred outcome claim than Part 3's own softer version ("structured so another engineer could execute and extend it"). Part 3 outranks the resume when they conflict; will use Part 3's wording.
- "$1.44M" appears twice; Part 3's total is $1,447,199.80 → use "~$1.45M" consistently (and note my LinkedIn currently also says $1.44M and will be updated separately, per the brief).
- PhD dates on the current site ("Dec 2016 – Sep 2019," bundled with the M.S.E.) don't match Part 3 ("Jan 2017 – Oct 2019" for the PhD; the M.S.E./master's research is its own Jul 2015–Aug 2016 stint). I pulled the resume PDF for cross-reference — it has the *same* internal inconsistency (a header line says "Sep 2019 | Dec 2016" but the itemized entry says "Jan 2017 – Oct 2019"). Per the brief's source priority, Part 3 wins: I'll split this into two education/experience entries with Part 3's dates.
- The resume's "ADDITIONAL" bullet — "informing pre-MBA venture opportunity assessment (Feb 2026 – Aug 2026)" — reads like it's naming a specific dated venture project. That risks the disclosure boundary. Part 3's sanctioned framing (50+ interviews generally; NSF I-Corps as a team, 22 interviews, no team/venture name) will replace it.
- A handful of specific resume-sourced details not mentioned in Part 3 at all — "Fortran-based" (PhD sim), "6-DOF" (ASX), "5+ EV component suppliers" (ASX). These aren't contradicted by anything and the resume is an approved source (priority 2), so I'm not treating them as invented — just flagging them in the fact-check list (§6) in case you'd rather I drop the specific numbers/tech details for the softer Part-3-style phrasing.

**Missing entirely (not "wrong," just not built yet)**
- No images anywhere on the current site (brief: "should not be text-only").
- No self-hosted fonts, no real favicon (currently `data:,` empty), no OpenGraph/Twitter tags, no JSON-LD, no sitemap, no canonical URLs.
- No mobile nav collapse strategy beyond shrinking font/gaps — five links plus a future "Resume" link will be tight at 375px.
- No project pages, no Research page, no About page, no `content/`/`data/` files — everything is hard-coded into one `index.html`, which conflicts with the ground rule to keep content editable outside components.

---

## 2. Image check (`images/` vs. Part 5's mapping)

All seven expected files are present (none missing). I opened each one. Six of seven match their description well; two have minor gaps worth a decision before Phase 3.

| File | Expected (Part 5) | What I see | Verdict |
|---|---|---|---|
| `morphing_aircraft_gemini.jfif` | Twin-boom UAV, orange dashed trajectory, ghost aircraft with varied (one swept) wings, wing cutaway w/ stress gradient, streamlines | Matches closely: orange dashed path, three ghost airframes with different wing sweep along it, orange gradient on the wing leading edge, streamlines | **Good match** |
| `DEP_aircraft.png` (note: filename uses an underscore, not the space shown in the brief's table — same file, just flagging the naming difference) | Polished-silver blown-lift STOL, black windows, 8 leading-edge props on a high wing, T-tail, orange-outlined flaps, white slipstream lines, on approach | Matches: 8 props (4/side), high wing, T-tail, orange-outlined flap sections, white prop-wash lines, runway visible on approach | **Good match** |
| `uh60_shiplanding_chatgpt.png` | UH-60 over a destroyer's stern deck, viewed from the hangar roof | Matches. Tail rotor sits on the frame-right side as generated — confirms the brief's note that it's mirrored; **will flip horizontally** per instruction | **Good match (flip required, as expected)** |
| `uh60_shiplanding_gemini.jfif` | Backup only | Present, plausible backup, not used unless requested | **No action** |
| `AAM_aircraft.png` | Six-prop tiltwing in transition; slipstream lines; **left-wing structural cutaway (spar/ribs/tilt actuator)**; **highlighted flaperons**; **horizontal pitch fan in the tail cone** | Six props, transition attitude, and slipstream lines are all there. I do **not** see a wing cutaway, orange-highlighted flaperons, or a visible tail pitch-fan in the render — it reads as a clean, fully-skinned realistic render rather than the semi-technical/cutaway treatment described | **Partial match — flagged in §6** |
| `quadrotor_gemini.jfif` | Single-passenger quadrotor, rear rotors mounted higher than front, downwash lines, **boom structural cutaway**, **orange yaw-control arrows** | Pod + 4 rotors with rear rotors visibly higher than front, and downwash lines are present. I don't see a boom cutaway or orange yaw arrows | **Partial match — flagged in §6** |
| `portrait.png` | Real photo of me | Yes, a real portrait photo (crop only, no edits, per the brief) | **Good match** |

For the two partial matches, I'd rather use the images as they actually are — with captions that only describe what's visible — than invent visual details in the copy that aren't on the page. Open question for you in §6.

---

## 3. Proposed information architecture

```
/                    Home
/projects/adaptive-aircraft-design/         (Project 1)
/projects/designing-aircraft-and-controller/ (Project 2)
/projects/helicopter-ship-landing/          (Project 3)
/projects/aam-modeling-and-simulation/      (Project 4)
/research/
/about/
/resume.pdf          (utility link, header nav, visually secondary)
```
Nav: **Abhinav Sharma** (wordmark, → home) · Projects · Research · About · Contact (scrolls to the footer contact block, present on every page) · Resume (secondary style). No standalone contact page, no Writing/Blog section — matches Part 4 exactly.

### Homepage section outline (Part 4, six sections)
1. **Hero** — name, headline, 1–2 sentences, primary CTA "View Projects," secondary "Get in touch," credibility line beneath.
2. **Selected Projects** — all 4 cards, Project 1 and Project 3 given the most visual weight (per the brief's steer toward the two DoD-sponsored efforts).
3. **Current direction** — heading TBD (see below), three themes: *Defense & dual-use technology*, *Autonomous and complex physical systems*, *Technology transition and adoption*. I-Corps mentioned here as evidence only, no team/venture detail.
4. **Professional trajectory** — 3–5 sentences, link to About.
5. **Selected Research** — 3 items max, links to Research page + Google Scholar.
6. **Contact** — folded into the global footer contact block rather than a separate mid-page section, per Part 4's "appears in the footer on every page."

Heading options for §3 (replacing "What I'm Exploring"): **"What happens after the technology works"** (my pick — directly usable, matches the brief's own suggested framing, and doubles as a possible homepage sub-thesis) vs. "Where I'm focused now" (safer, more generic) vs. "Current direction" (plain, functional). I'll use the first unless you'd rather keep it plainer.

---

## 4. Hero headline and subhead options

1. **Headline:** "I've spent my career on complex aerospace systems, much of it for the Navy and Army."
   **Subhead:** "Now at Berkeley Haas, I'm focused on what it takes to move advanced defense and dual-use technology from R&D into real-world use."
   *(A sharpened version of the brief's own first starting point.)*

2. **Headline:** "Aerospace engineer focused on defense and dual-use technology."
   **Subhead:** "PhD in aerospace engineering, six years of Navy- and Army-sponsored aircraft R&D, and an Army program I took from Phase I to Phase II. Now at Berkeley Haas, studying how technology like that moves from R&D into real use."

3. **Headline:** "Aerospace PhD. Navy- and Army-sponsored R&D. Now: Berkeley Haas."
   **Subhead:** "I lead technical proposals, take programs from Phase I to Phase II, and I'm now focused on defense and dual-use technology — and how promising technology actually gets funded, adopted, and fielded."

4. **Headline:** "Aerospace engineering, applied for the Navy and Army — now aimed at defense and dual-use technology."
   **Subhead:** "Six years of government-funded aircraft R&D, an Army program taken from Phase I to Phase II, and an MBA at Berkeley Haas to round out how I think about getting technology into use."

5. **Headline:** "Aerospace engineer and Berkeley Haas MBA candidate, focused on defense and dual-use technology."
   **Subhead:** "My work has spanned Navy- and Army-sponsored aircraft R&D, including taking an Army STTR from Phase I to Phase II. I'm now studying how technology like that gets adopted and fielded."

**My pick: Option 1.** It leads with evidence (Navy/Army work) before stating the direction, which is exactly what Part 2 asks for ("the strongest way to show defense relevance is evidence, not declaration"), reads like a person talking rather than a resume summary, and has no banned words or hedging.

Credibility line beneath (using the brief's own example, which already fits): *PhD, Aerospace Engineering · ONR- & Army-sponsored R&D · ~$1.45M in NASA & DoD programs won · Berkeley Haas MBA '28*

---

## 5. Design direction

### Reconciling the current identity
I'm recommending a full palette replacement rather than trying to adapt the navy/gold theme — it's a school-colors choice (Michigan blue + Cal gold), which is a personal-affiliation signal, not the restrained "technical drawing" credibility signal Part 5 is asking for with a defense/dual-use audience. The typographic pairing (Inter + Source Serif) and the CSS-variable/dark-mode mechanism are worth keeping; only the token values and the serif change.

### Tokens (CSS custom properties)
```
--paper:       #FAF7F1   /* warm off-white background */
--paper-alt:   #F1ECE1   /* section-alt background */
--ink:         #1B1C1E   /* primary text, near-charcoal black */
--ink-soft:    #52585F   /* secondary text, slate */
--ink-faint:   #868D93   /* tertiary/meta text */
--line:        #DDD6C7   /* hairline rules */
--accent:      #E14D1F   /* international orange — sparing use: links, CTAs, dashed trajectory motifs */
--accent-text: #B23D16   /* darkened accent for small text/links, to clear AA contrast on --paper */
```
Dark mode (`prefers-color-scheme: dark`): `--paper: #14171A`, `--paper-alt: #1B1F23`, `--ink: #F1EDE4`, `--ink-soft: #C7CCD1`, `--ink-faint: #8B9298`, `--line: #2C333A`, `--accent: #FF7A45` (lightened for dark-bg contrast), `--accent-text: #FF8F5C`.

International orange over the deep-cobalt alternative: it has direct aerospace/flight-test heritage (the brief's own suggestion), and it's already the accent color baked into three of the seven supplied illustrations (the morphing UAV's trajectory, the DEP aircraft's flap outlines, the quadrotor's yaw cues) — matching it makes the illustrations and the UI read as one system instead of two accent colors competing. All body-sized accent text uses `--accent-text`, not `--accent`, to hold WCAG AA; `--accent` itself is reserved for larger fills, underlines, and graphic elements where contrast math is easier to satisfy.

### Typography
- Drop the serif. Two families, self-hosted: **Inter** (headings + body, replacing the Google Fonts CDN link) and **IBM Plex Mono** (figure captions, spec-block labels, dates, nav "Resume" utility link). Body ≥17px, measure ~68ch.
- The current gold rectangle under the H1 gets replaced with a thin orange dashed underline (echoing the trajectory motif in the supplied art) rather than a solid block — ties the "technical drawing" concept into the one piece of chrome the hero already has.

### Engineering motifs (Part 5, "texture only")
- A sparse, very-low-opacity coordinate-grid or trajectory-line texture behind the hero (original SVG, `aria-hidden`, respects `prefers-reduced-motion` if it ever animates).
- `FIG. NN — caption` mono convention under every figure, per Part 5.
- A reusable "spec block" component (bordered box, mono uppercase labels: SPONSOR / PHASE / DATES / ROLE / OUTCOME) for each project's "At a glance" section.
- Two XDSM-style MDO architecture diagrams (Projects 1–2) and one helicopter/ship dynamic-interface schematic (Project 3), all original SVG line drawings in restrained accent color — see §7 in the brief and the visual plan below.

---

## 6. Visual plan

| # | Visual | Placement | Type | Notes |
|---|---|---|---|---|
| 1 | Hero background texture (sparse grid/trajectory) | Homepage hero | Original SVG, decorative | `aria-hidden`, no motion by default |
| 2 | Morphing UAV illustration | Project 1 card + page hero | Supplied asset (`morphing_aircraft_gemini.jfif`) | Optimize to WebP, 16:9 card crop |
| 3 | DEP aircraft illustration | Project 2 card + page hero | Supplied asset (`DEP_aircraft.png`) | Optimize to WebP; caption must not imply X-57 involvement |
| 4 | UH-60 ship-landing illustration | Project 3 card + page hero | Supplied asset (`uh60_shiplanding_chatgpt.png`) | **Flip horizontally**; this is the strongest candidate for the site's signature image |
| 5 | Tiltwing illustration | Project 4 card + page hero | Supplied asset (`AAM_aircraft.png`) | Caption only what's visible (see §2/§7 open item) |
| 6 | Quadrotor illustration | Project 4, second in-page figure | Supplied asset (`quadrotor_gemini.jfif`) | Caption only what's visible; credit NASA UAM concept inspiration, no logo/endorsement implication |
| 7 | Portrait | About page (and optionally a small crop in the homepage trajectory section) | Supplied asset (`portrait.png`), real photo | Crop only, no edits; alt text "Abhinav Sharma" |
| 8 | XDSM-style MDO architecture diagram | Project 1 "Technical approach" | Original SVG | Standard XDSM notation, aero/structures/controls coupling |
| 9 | XDSM-style MDO architecture diagram (DEP/controls variant) | Project 2 "Technical approach" | Original SVG | Shares visual language with #8 |
| 10 | Helicopter/ship dynamic-interface schematic | Project 3 "Technical approach" | Original SVG | Approach path, deck motion, airwake region |
| 11 | Design-space contour + optimizer path | Optional section texture (Research page or a project page) | Original SVG | Lowest priority; only if it earns its place |
| 12 | Social-card image (1200×630) | OpenGraph/Twitter meta | Original composed graphic | Name, one-line positioning, a motif from #1 or #8 |
| 13 | Favicon | Every page | Original SVG mark | Replaces the current empty `data:,` icon |

That's 6 substantial visuals (2–7) plus original schematic/texture work, in line with Part 5's "3–6 substantial visuals" guidance.

---

## 7. Fact-check list

Carried forward from the brief's Part 7, plus what the audit turned up. Nothing below will be published until you confirm it; placeholders with `<!-- VERIFY: ... -->` will hold these spots starting in Phase 2.

**From Part 7 (open items) — status after this audit:**
1. Exact wording of the 17% main-rotor-power finding vs. the *Journal of Aircraft* paper ("up to" vs. average, conditions) — **still open**, need the paper or your confirmation.
2. Whether I'm a co-author on the AIAA Aviation 2025 morphing-UAV paper, or it should run as collaborator work — **still open**.
3. Exact name of the I-Corps program for the site, and whether to include it at all — **still open**.
4. How the 22 I-Corps interviews relate to the 50+ total (subset or additional) — **still open**.
5. Exact publication details (titles, authors, venues, years, DOIs) for the *Journal of Aircraft* paper and the AIAA DEP paper — **still open**; no `docs/publications.md`/`.bib` exists yet, so the Research page will ship with clearly marked placeholders until you provide one.
6. More detail for Project 4 (AAM): specific technical work and what the two client engagements delivered — **still open**.
7. Resume PDF and headshot — **resolved**: `assets/Abhinav_Sharma_Resume.pdf` and `images/portrait.png` are already in the repo.
8. Whether any real figures/photos exist for the projects beyond the AI-generated illustrations in `images/` — **still open**; if you have any real dissertation/ARL-framework figures, they'd outrank redraws per Part 5's source priority.
9. Confirm the tiltwing/quadrotor wording (which programs/clients, what you specifically did) so Project 4's text matches its two figures — **still open**.

**New, from this audit:**
10. `AAM_aircraft.png` doesn't show the described structural cutaway, highlighted flaperons, or tail pitch-fan; `quadrotor_gemini.jfif` doesn't show the described boom cutaway or orange yaw arrows. OK to caption these two images only for what's actually visible, rather than the fuller technical treatment Part 5 describes?
11. OK to drop the specific resume-only technical details not mentioned in Part 3 — "Fortran-based" (PhD simulation), "6-DOF" and "5+ EV component suppliers" (ASX) — in favor of Part 3's plainer phrasing? Or keep them since they're resume-sourced (priority 2) and not contradicted by anything?
12. Confirming (not really a question, more a heads-up): the resume's "ADDITIONAL" line about a "pre-MBA venture opportunity assessment (Feb 2026 – Aug 2026)" will **not** appear on the site in that form — it reads too close to naming a dated venture project for the disclosure boundary. I'll use Part 3's sanctioned framing instead (50+ interviews; NSF I-Corps as a team, 22 interviews, no team/venture name), pending items 3–4 above.
13. Confirming Muay Thai and language proficiencies will be dropped from the site entirely (professional-scope exclusion) — flagging only because they're visibly present on the live site today.

---

## What I need from you to proceed past this checkpoint
- A decision on the homepage §3 heading ("What happens after the technology works" vs. an alternative).
- A decision on hero option 1 (or another pick from the five).
- Answers to fact-check items 1–13 above, at whatever pace works — items 5 (publications) and 3–4 (I-Corps) block the Research page and the "Current direction" section content respectively, so those two are the highest-priority.
- Sign-off on the tooling approach for Phase 1: since Part 4 needs 7 pages with shared header/nav/footer and content kept in editable files (not hard-coded in HTML), I'm planning a small **dependency-free Node build script** — no framework, no npm packages — that assembles static HTML from simple templates plus `content/` and `data/` files, and outputs plain `.html`/`.css` for GitHub Pages exactly as today. This satisfies the ground rule against adding heavy dependencies while avoiding seven hand-duplicated copies of the header and footer. Flagging it here since it's a structural decision, even though it doesn't change what ships to visitors.
