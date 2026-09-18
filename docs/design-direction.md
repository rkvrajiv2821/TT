# TOUCHTiER Design Direction

Version 0.1 — Foundation. This document defines the visual and experiential philosophy for the new TOUCHTiER website. Paired with `design-system.md` (tokens/components). No pages or components are built yet — this is the reasoning behind the tokens.

---

## 1. Context

**TOUCHTiER** currently has no live website (the domain is unregistered/parked) — this is a from-scratch brand and site.

**RedeemX** was reviewed as a *business/product reference only*: it operates a Customer Experience Management (CXM) ecosystem for hospitality/gaming venues, spanning customer-facing software (Patron App, Member Portal, Marketing automation, Kiosk), host-facing software (Venue App, Host App, compliance tooling, merchant partnerships), hardware (payment terminals, kiosks, staff tools, reward hardware), and tiered service packages (Marketing → Membership → Gaming → Experience → Enterprise). Its actual site design is light, white-background, minimal, with an oversized colourful chevron logomark used as a background watermark and short, wordplay-driven headlines ("Customer eXperience").

**TOUCHTiER's job is to occupy the same ecosystem-platform category with a distinct visual identity**: darker, denser, more technical and enterprise-confident — not a re-skin of RedeemX's light minimalism.

---

## 2. Core Visual Concept — "The Connected Core"

The single idea every page should trace back to: **a central intelligence core, connected to everything a venue/business runs on.**

Concretely, this means the platform is visualised as one luminous core with lines of connection radiating to distinct nodes:

`Customer · Venue · Membership · Loyalty · Marketing · Payments · Mobile · Cloud · Data · Integrations`

This is not a decorative hero graphic — it's the organising metaphor for:
- The hero visual (core + radiating nodes)
- Section transitions (a connection "resolves" into the next section's content)
- Iconography (every module icon reads as a node — same stroke weight, same tile shape)
- Data visualisation (stats/metrics rendered as pulses travelling along connection lines, not generic bar charts)
- Motion (things "connect," "activate," and "flow" — never bounce or spin arbitrarily)

If a visual element doesn't describe a connection, a flow, or a node in the system, it doesn't belong on this site.

---

## 3. Brand Personality

**Is:** Premium, Global, Technical, Intelligent, Modern, Futuristic (grounded — infrastructure, not sci-fi), Enterprise, Minimal, Confident.

**Is not:** Generic corporate, generic SaaS-template, WordPress-default, glassmorphism-heavy, neon/crypto-cyberpunk, decorated-for-its-own-sake 3D, gradient-soup, stock-photo-heavy.

**Voice:** Precise and declarative. Short, authoritative statements. No exclamation marks, no forced wordplay on the brand name (avoid RedeemX's "eXperience" capitalisation trick — TOUCHTiER's confidence should come from restraint, not typographic puns).

---

## 4. Homepage Visual Philosophy

- Dark, expansive canvas as the default state — the near-black foundation makes the accent gradient read as *signal* (something live, active, connected) rather than *decoration*.
- One dominant idea per viewport. Enterprise buyers scan; density is the enemy of premium.
- The hero is built around the connected-core visualisation itself, not a product screenshot, not a stock photo of people in a venue, not an abstract "team high-fiving" image.
- Colour is earned, not applied. A gradient or glow should always correspond to something conceptually "on" — an active connection, a live metric, a selected state. Never colour a static block purely for visual interest.

---

## 5. Layout Philosophy

- 12-column grid at desktop widths, max content width 1280–1440px, generous outer gutters that grow with viewport (not fixed).
- Vertical rhythm is generous: 128–160px between major sections at desktop (`--space-32`/`--space-40`). Enterprise/premium sites earn trust partly through *not* being crowded.
- Hero composition may be asymmetric (copy left, connected-core visual right, or vice versa) — this is where personality lives.
- Below the hero, list/grid sections (ecosystem modules, pricing tiers, logos) stay symmetric and evenly spaced. Order and predictability signal enterprise trust; save asymmetry for moments that deserve attention.
- Content sections alternate `--bg-canvas` and `--bg-surface` at low contrast to create depth without hard section dividers.

---

## 6. Typography Direction

- General Sans for display/headings (geometric, technical, confident) + Inter for body/UI (best-in-class legibility) + JetBrains Mono for data/technical accents (stats, tags, timestamps). Full rationale and scale in `design-system.md` §2.
- Headlines set tight and large — the display size (96px) is reserved for a single hero statement per page, never for two-line paragraphs.
- Numbers and technical labels (stats, version tags, integration counts) always render in mono — this is a deliberate, consistent tell that "this number is real data," reinforcing the intelligent/technical personality.

---

## 7. Colour Usage

- Target: **under 10% coloured surface area per viewport.** The rest is neutral dark, off-white text, and hairline borders.
- Each accent hue carries an assigned meaning (data, primary action, premium, momentum — see `design-system.md` §1.4) and should stay consistent to that meaning site-wide, not be chosen decoratively per-section.
- The three/four-stop gradient (`--gradient-signal`) is reserved for thin strokes, glows, one hero headline word, and the connection-lines in the core visualisation — never a large flat fill, never a full-bleed background.
- Never place all four accent hues as adjacent flat blocks — that specific pattern is what would make TOUCHTiER read as "a RedeemX reskin." Gradients and single-hue accents only.

---

## 8. Image Direction

- No generic stock photography (people in blazers shaking hands, laptop-in-cafe shots).
- Product UI, when shown, sits inside a clean, minimal dark device/browser frame — never a raw screenshot floating on the page.
- Any real venue/hardware photography must be authentic to the product (actual kiosks, actual venue environments) — not stock. If none exists yet, prefer the abstract core/node visualisation over a placeholder photo.
- Icons are custom-drawn, thin-line (1.5px), with an optional gradient-stroke variant for "active" states — one consistent icon system, not mixed styles.

---

## 9. 3D Direction

*(Visual language only — no assets built at this stage.)*

- Central form: an abstracted luminous core (sphere, icosahedron, or particle cluster) — matte dark material with emissive gradient edges, not glossy/chrome. Think Stripe/Linear/Vercel-style abstract product 3D, not gaming-engine realism.
- Surrounding nodes: small geometric modules (rounded cubes/tiles), each representing one ecosystem function (Customer, Venue, Payments, etc.), connected to the core by thin animated gradient lines — never floating randomly or unconnected.
- Depth via subtle parallax (multiple layers moving at slightly different scroll speeds), not literal camera movement.
- Particle density stays restrained — a handful of visible connections and pulses, not a dense particle storm. Precision over spectacle.
- Every 3D element must be traceable to a real part of the product story (a node = a real product surface). No decorative shapes with no referent.

---

## 10. Animation & Motion Direction

Motion should communicate **precision, connection, technology, intelligence** — never playfulness or bounce.

**Shared easing:** a single custom "confident settle" curve, `cubic-bezier(0.16, 1, 0.3, 1)`, used for all entrance/reveal motion. Hover/interaction states use a faster linear-ish ease (150–200ms).

| Moment | Behaviour |
|---|---|
| **Page entrance** | Hero elements fade + rise 8–16px, staggered 60–80ms per element, "confident settle" easing. No slide-in from off-screen edges. |
| **Scroll reveal** | Elements animate in once, on ~20% viewport intersection. No re-triggering, no bounce/overshoot. |
| **Hover (buttons/links)** | 150–200ms colour/border/glow transition. Scale changes, if any, stay within 1.01–1.03. |
| **Button interaction** | 120ms colour + shadow transition; signature CTA gets a subtle 1px gradient-border "sweep" on hover. |
| **Card interaction** | Border reveals `--gradient-border`, card lifts `translateY(-2px)`, matched glow fades in — 200ms. |
| **Network/core animation** | Continuous ambient loop (20–40s cycle) of light pulses travelling along connection lines — slow enough to read as "alive," never distracting or looping visibly fast. |
| **Parallax** | Restrained: max 10–20px translate across a scroll section. Disabled entirely on mobile/touch. |
| **Number/stat animation** | Count-up on scroll-into-view, 800–1200ms ease-out, rendered in mono type. |

**Reduced motion:** Respect `prefers-reduced-motion` globally. Replace count-ups, parallax, and ambient core loops with static end-states and simple opacity fades only. No functionality should depend on motion completing.

---

## 11. Interaction Principles

- Every interactive element responds immediately (within one frame) and subtly — feedback should never feel delayed or absent.
- Motion always has semantic direction tied to the core concept: things *connect*, *activate*, *flow* — not spin, bounce, or shake.
- One easing system, one motion vocabulary, applied consistently — a user should never see two different "styles" of animation on the same page.
- Focus states are always visible (see `design-system.md` §6.5) — accessibility is not sacrificed for aesthetic minimalism.

---

## 12. Responsive Philosophy

| Breakpoint | Grid | Typography | Navigation | Cards | 3D / Core visual | Spacing |
|---|---|---|---|---|---|---|
| **1440px** | 12-col, max-width 1440px | Full scale (`--text-display` 96px) | Full inline nav | 4-up grid | Full core visualisation, full particle/node count | Full scale (`--space-32`/`40`) |
| **1280px** | 12-col, max-width 1280px | Full scale | Full inline nav | 4-up grid | Full core visualisation | Full scale |
| **1024px** | 8-col | `--text-display` clamps to 56px, `--text-h1` to 40px | Nav collapses to hamburger | 3-up grid | Core visual simplifies (fewer nodes rendered) | Compresses to `--space-16`/`24` |
| **768px** | 8-col, tighter gutters (16px) | Same clamp as 1024 | Hamburger, full-height overlay menu | 2-up grid | Core visual further simplified or swapped for a lightweight static rendering | `--space-16`/`24`, card padding to `--space-6` |
| **390px** | 4-col | `--text-display` clamps to 40px, `--text-h1` to 32px | Hamburger | 1-up stacked | Static core illustration (no live particle animation) — preserves battery/perf | Compact (`--space-8`/`12` between blocks) |
| **375px** | 4-col | Same as 390 | Hamburger | 1-up stacked | Static core illustration | Compact |

General rules:
- Below 1024px, all hover-only states (gradient-border reveal, lift-on-hover) become static/always-on where they convey information (e.g. featured card border), and are simply omitted where purely decorative.
- The 3D/core visual degrades gracefully in three steps: full animated (desktop) → simplified animated (tablet) → static image (mobile) — never removed entirely, since it's the core brand device, but never at the cost of mobile performance.
- Touch targets are minimum 44×44px at all breakpoints below 1024px.

---

## 13. Taste Skills Design Review

Self-review against the brief before this foundation is considered complete:

- **Premium & cohesive:** One neutral-dark foundation, one gradient family, one type pairing, one easing curve, one 3D metaphor — every token traces back to "The Connected Core." Nothing is arbitrary.
- **RedeemX colours integrated without looking like RedeemX:** The four RX hues are preserved exactly, but RedeemX's actual design (white background, oversized flat chevron watermark, wordplay headlines) is entirely absent. TOUCHTiER inverts the foundation (dark vs. light), restricts colour to <10% of any viewport, and replaces the static logomark-as-hero-graphic with an animated, conceptual core/node system. Shared DNA, distinct expression.
- **Supports a highly visual homepage later:** The hero is explicitly reserved for the core visualisation; sections have a defined alternating background rhythm, card and module systems are specified for the ecosystem grid, and stat/number treatments are defined for social proof — the homepage can be built directly from these tokens without new design decisions.
- **Avoids the explicit "avoid" list:** No glassmorphism beyond a single functional nav blur; no neon (glow opacity capped at 18–25%); no crypto/cyberpunk framing (matte, restrained 3D, not glossy/chrome); no decorative 3D without a referent; no stock photography direction.

**Open decisions deferred to the next step (homepage build):** exact hero copy, final logo treatment/lockup, whether a light "paper" mode is needed for a blog/docs section, and the specific node icon set for the ten ecosystem functions.
