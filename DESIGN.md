# Design — Selected Works

Eren Pinyal's portfolio is a small exhibition, not a landing-page template. The page is the catalog: eight works hung at varied scale, each with a wall label, a materials index, a chronology, and a visit panel. English and Turkish are equal views; light is the gallery, dark is after hours.

- Live: https://erenpinyal.com
- Source of truth for copy and project facts: `src/content.js`
- Direction contract: `.impeccable/surface-brief-body.md` (seed `b9b7652a9cda289e`)
- Product brief: `PRODUCT.md`

## World

Warm gallery wall, black ink, one vermilion accent, hairline rules, generous margins. Frames are paper mats with a flat offset shadow — the brief's chosen material, not a neobrutalist costume. Depth comes from overlapping flat colour, not gradients or blur. The catalog voice is Spectral; the wall voice is Archivo.

Plates are hand-authored flat SVG **interface studies**, disclosed in the interface as "Görseller birer arayüz etüdü" / "Images are interface studies". They are not screenshots and never claim to be. The one shipped raster is `public/og.png`, a 1200×630 crop of the live page captured on 2026-11-09 from `.impeccable/review/desktop.png` for link previews.

## Tokens

Defined in `src/index.css` as CSS custom properties. Dark mode swaps the same names on `.dark`; it is not a filter.

| Token | Light | Dark |
| --- | --- | --- |
| `--wall` | `#F4F1EA` | `#12100E` |
| `--wall-raised` | `#FBF9F5` | `#1B1815` |
| `--ink` | `#191714` | `#F2EDE3` |
| `--ink-soft` | `#403B34` | `#D3CAB9` |
| `--muted` | `#6B6356` | `#9B9183` |
| `--line` | `#D8D1C3` | `#2C2821` |
| `--line-strong` | `#BCB2A1` | `#413A30` |
| `--accent` | `#C8321E` | `#E4634C` |
| `--focus` | `#C8321E` | `#E4634C` |
| `--plate-paper` | `#ECE6DA` | `#1E1B17` |
| `--plate-ink` | `#1C1A17` | `#F3EEE4` |
| `--plate-grey` | `#C9C1B2` | `#3A342C` |
| `--plate-soft` | `#DDD5C6` | `#2B261F` |
| `--chip-bg` | `#FBF9F5` | `#F1ECE2` |

Measured contrast on the wall: body `--ink-soft` 9.83:1, muted 5.25:1, accent links 4.74:1 (AA normal text). In dark: body 11.68:1, muted 6.12:1, accent 5.59:1. Focus is a 2px accent outline with a 3px offset.

Spacing: `--gutter` clamps 20–56px; `--width` 1320px; sections use 108px vertical padding (72px ≤980, 56px ≤620). Heading spacing is larger above than below. Radii are 0; borders are 1px; the only shadow is the frame's offset block.

## Type

- **Archivo** (variable width 62–125, weight 100–900) — h1, navigation, labels, buttons, numbers. Wide cut at 104–112% for display.
- **Spectral** (400/500, italic 400) — intro, project medium and description, chronology copy, visit lede, footer colophon.
- Display ceiling: 96px. H1 `clamp(54px, 6.5vw, 94px)`; 980–620px `clamp(64px, 10.5vw, 96px)`; ≤620px `clamp(48px, 16vw, 72px)`. Tracking never tighter than `-0.04em`; line-height 0.84 on the h1.
- Section titles `clamp(30px, 3.6vw, 52px)`. Wall titles 16–20px sentence case so brands keep their spelling. Card labels and metadata are 9–13.5px, uppercase only for structural labels. Headings use `text-wrap: balance`; paragraphs use `pretty`.
- No eyebrow above the h1. The title is the title; the floor plan carries the room metadata.

## Layout

Twelve-column wall (`--span` per work): Freshy 7 / GitStats 5, Nabız 4 / Seçmece 4 / Mecrenas 4, Reno 5 / rag-pdf 3 / Finance 4. Selected works drop by 34px to break the grid. At 980px the wall becomes two columns and Freshy spans both; at 760px it becomes one column. The hero is 5/7 above 980px and stacks below it.

The floor plan is one rule with `Entrance · 01 Works · 02 Skills · 03 Experience · 04 Contact · Exit`, marker under the active room. At ≤620px it becomes a 3×2 grid so nothing is hidden. The mobile header wraps the nav under the wordmark at ≤760px; at ≤380px the nav gap tightens to keep all four links visible at 320px.

## Components

- `Header` — sticky 72px (two rows on mobile), wordmark, four room links, lights toggle, EN/TR switch. Active room has a 2px accent underline.
- `ExhibitFrame` — matte, hairline, flat offset shadow, 16:10 plate (4:3 for the hero), hover lift, "Live demo / Repository" corner tag on hover/focus, wall label with number, year, title, medium, description, links. Hero previews use a `p` title; wall works use `h3` after the section `h2`.
- `Plate` — eight unique SVG interface studies using the `--plate-*` tokens so they invert with the theme.
- `FloorPlan` — room index and current-location marker; `aria-current="location"` plus an `sr-only` "You are here".
- `SectionHead` — inline index, `h2`, rule, note. Indices are wayfinding, not decoration.
- `SkillIndex` — five labelled groups of brand icons and names; icons desaturate until hover.
- `Chronology` — two internship entries with large Spectral years and a ruled list.
- Visit doors — email, LinkedIn, GitHub, CV are full-row links with a label, value, and arrow. The CV points at `/cv.pdf`.
- Footer — 96px signature mark, place/date, colophon, back to top.

## Interaction

- **Spotlight.** Hovering the wall dims every other frame to 0.52; the hovered frame lifts 3px and darkens its shadow. Focus-within keeps a frame lit. It is a pointer enhancement; touch sees the whole wall.
- **Lights.** The toggle inverts the wall (not a tint), persists in `localStorage`, updates `color-scheme`, and changes `meta[theme-color]` between `#F4F1EA` and `#12100E`.
- **Language.** EN/TR swaps every string from `src/content.js`, updates `document.documentElement.lang`, the document title, and persists. Project names keep their original spelling.
- **Reveals.** Framer Motion fades and lifts sections once, with a short exponential ease-out. Hero copy and frames enter on load. The observer updates the active room with a `-18% / -55%` root margin.
- **Reduced motion.** `useReducedMotion` removes reveals; CSS disables smooth scroll and transitions. The spotlight and theme change remain instant and useful.

## Accessibility

- One `h1`, section `h2`s, work/entry `h3`s. The hero's two previews are labels, not headings, so order stays valid.
- Skip link to `#works`; visible focus ring; 44px+ practical link rows on touch; the wall frame itself is a large link.
- `aria-pressed` on Lights; `aria-current="location"` on the floor plan; labelled language group; `aria-label`s on project links include the project name; decorative arrows are `aria-hidden`.
- Axe (WCAG 2.1 A/AA + best practice) reports 0 violations at 1440×900, 390×844, dark, and Turkish mobile. The only incomplete check is colour contrast on the active floor-plan pseudo-element and decorative arrow glyphs, resolved manually from computed styles.
- No horizontal overflow at 1440, 1280, 1024, 768, 390, 360, or 320px. The h1 fits its column at every breakpoint.

## Content rules

- Eight works: six live (Freshy, GitStats, Nabız, Seçmece, Mecrenas, Reno Bayi) and two repositories (rag-pdf, Finance Tracker). Reno's repo is private, so it has no GitHub link.
- GitStats keeps that name; its live URL is `yzname.vercel.app`. Nabız is the project-management system; its demo uses sample data.
- No invented metrics, testimonials, or client names. Freshy's 66 products, Finance Tracker's 33 tests, and the recorded model accuracy are the only counts used elsewhere in the product brief.
- Demo data is labelled; the interface studies are labelled; the OG image is a real capture.

## Build

`npm install`, `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`. Production: Vercel from `master`. Current bundle: 398 kB JS (133 kB gzip), 15.8 kB CSS (3.9 kB gzip), plus Google Fonts and the CV.
