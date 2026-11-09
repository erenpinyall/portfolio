# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, deliberately balanced:

1. **Hiring managers and recruiters** evaluating Eren Pinyal for full-stack / new-graduate software roles. They arrive from a CV, LinkedIn, or a referral, scan for 2–5 minutes on desktop or phone, and want fast evidence of real, shippable work.
2. **Freelance and consulting clients** checking whether he can build their product end to end. They care about live demos, range of stack, and an easy way to start a conversation.

Both need the same thing first: understand who he is and what he can build, see proof, then contact him, open the CV, or visit GitHub.

## Product Purpose

A personal portfolio for Eren Pinyal, computer engineering graduate and full-stack developer. It presents skills, projects, and experience so a visitor can judge technical breadth quickly and take one of three actions: contact, download the CV, or open a project live demo / GitHub repo.

Success means a first-time visitor understands the profile, sees at least one credible live artifact, and leaves through contact, CV, or GitHub.

## Positioning

Full-stack breadth backed by working, deployed software: embedded C and hardware diagnostics at one end, Java/Spring and .NET backends in the middle, React/TypeScript frontends and Python ML/NLP at the other — with multiple live demos a visitor can open immediately, shown through real product screenshots.

## Operating Context

- Evaluated in short sessions, often on mobile, from a CV, LinkedIn, or GitHub link.
- Primary public surfaces: `erenpinyal.com` (Vercel), `github.com/erenpinyall`, LinkedIn (`/in/eren-pinyal`), email `erenpinyal122@gmail.com`, CV at `/cv.pdf`.
- Content is authored in `src/content.js` as static data; no CMS or backend.
- Existing light/dark theme toggle and smooth-scroll navigation are established behavior.
- Bilingual English/Turkish presentation is a confirmed requirement; all copy lives in `src/content.js` and switches together.

## Capabilities and Constraints

- React 19 + Vite single-page app, Framer Motion animations, react-icons brand icons, CSS custom properties; deployed on Vercel.
- No backend, no analytics, no contact form service — contact is mailto/LinkedIn/GitHub.
- Must stay fast and responsive; current assets include the CV PDF, favicon, seven product screenshots in `public/previews`, and the OG image.
- Live URL and stack mapping now lives in `src/content.js`; Portfolio, Mecrenas, Seçmece, Reno Bayi, and Nabız are represented there. Do not add stacks that are not recorded.

## Brand Commitments

- Name: Eren Pinyal; the name is the `h1`, and the header wordmark keeps the same identity.
- Domain `erenpinyal.com`; existing GitHub, LinkedIn, email, and CV links must remain reachable.
- Turkish/English toggle confirmed by the user for this redesign.

## Evidence on Hand

- `src/content.js` contains the nine current works: Freshy, GitStats, Nabız, Seçmece, Mecrenas, Reno Bayi, Portfolio, rag-pdf, and Finance Tracker.
- Seven live projects have URLs and real screenshots: Nabız, Seçmece — Takım Savaşı, Freshy, GitStats, Mecrenas, Reno Bayi, and Portfolio. Portfolio is this site and uses a self-portrait screenshot. GitStats is live at `yzname.vercel.app`; Reno Bayi's repository is private.
- The wall opens with the first six live works; Portfolio and the two repository-only works sit behind See more.
- Two real internships: demiraysoft (web developer, Aug–Sep 2025) and enel enerji (IT support, Aug–Sep 2024).
- CV PDF at `public/cv.pdf`, sourced from `ErenPinyalCV.pdf`.
- Must not fabricate testimonials, benchmarks, client names, or metrics beyond what the repo states (e.g., 85.39% cyberbullying model accuracy is recorded; 33 tests for finance tracker is recorded).

## Product Principles

1. **Proof over claims.** Lead with things a visitor can open and verify, never adjectives about skill.
2. **Breadth made legible.** Show the full stack range without turning it into a wall of logos; group and rank so the story reads in seconds.
3. **Fast first judgment.** Identity, capability, and next action must land in the first viewport on any device.
4. **Bilingual parity.** English and Turkish are equal citizens; switching languages never breaks layout or loses content.
5. **Quietly technical.** The craft of the site itself is evidence; motion and detail should feel engineered, not decorative.

## Accessibility & Inclusion

Keyboard-navigable, visible focus states, sufficient contrast in both themes, and respect for `prefers-reduced-motion`. Language toggle must expose its state to assistive technology.
