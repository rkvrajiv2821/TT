# TOUCHTiER Hero Concept

Version 0.1 — Foundation. Full development of Section 1 (Hero) from `homepage-structure.md`. Copy, composition, 3D direction, and motion are specified here in enough detail to build directly from once approved. No components or assets are created at this stage.

---

## 1. Composition

**Recommendation: keep the suggested left-copy / right-core layout.** Taste Skills check against alternatives:

- **Centred stack (copy above, core below/behind):** feels more like a marketing splash page than an enterprise platform; also fights with the core's need for horizontal room to show ten orbiting nodes without cramping.
- **Full-bleed core as background wash behind centred copy:** risks the core becoming decoration rather than the subject — the brief is explicit that colour/visual must always mean something, and a background-wash treatment reads as atmosphere, not "the product."
- **Left copy / right core (asymmetric, ~45/55):** copy gets a clean, legible column at full reading width; the core gets genuine room to breathe and can bleed toward the right viewport edge for scale, making it feel like real infrastructure rather than a small icon. This also matches the asymmetric-hero / symmetric-body layout rule already set in `design-direction.md` §5.

Left/right asymmetric stands. Full spec:

- Left column (~45% width, left-aligned, vertically centred in viewport): eyebrow label → headline → supporting paragraph → CTA row (primary + secondary, inline on desktop).
- Right column (~55% width): the Connected Core visualisation, vertically centred, allowed to extend past the column's nominal edge toward the viewport's right margin for scale.
- Nav is transparent/overlaid at the top, per `design-system.md` §6.3 — it does not compress the hero's vertical space.
- Hero occupies a full viewport height on first load (`100vh`, min-height fallback for very short viewports), so the core is seen in full before any scrolling.

---

## 2. Hero Copy — Three Directions

All directions avoid exclamation marks, avoid unproven superlatives ("leading," "best-in-class," "world's"), and avoid RedeemX's wordplay-capitalisation device (no "eXperience"-style tricks — TOUCHTiER's confidence comes from restraint).

### Direction A — "One core. Every connection."
- **Eyebrow:** The Connected Core
- **Headline:** One core. Every connection.
- **Supporting paragraph:** TOUCHTiER connects customer experience, venue operations, and enterprise technology into a single intelligent platform.
- **Tone:** Brand-forward, short, literal to the visual metaphor. Reads almost like a product name in its own right.
- **Risk:** Slightly abstract on first read for a visitor who hasn't yet seen the visual — "core" and "connection" as nouns require a half-second of decoding before the value lands.

### Direction B — "Every experience, connected."
- **Eyebrow:** Connected Technology
- **Headline:** Every experience, connected.
- **Supporting paragraph:** From customer engagement to venue operations, payments to data — TOUCHTiER brings every system into one connected platform.
- **Tone:** Benefit-forward and immediately legible. Mirrors the brief's own north-star line ("TOUCHTiER connects digital experiences, people, systems and technology into one connected ecosystem") almost exactly, in eight words.
- **Risk:** Slightly less ownable/distinctive as a standalone line than Direction A — "connected experience" is a category phrase, not a coined one.

### Direction C — "The technology behind every connection."
- **Eyebrow:** Enterprise Platform
- **Headline:** The technology behind every connection.
- **Supporting paragraph:** TOUCHTiER unifies customer, venue, and enterprise systems into a single connected core — built for how modern experiences actually run.
- **Tone:** Infrastructure-forward, positions TOUCHTiER as the underlying enabler rather than a customer-facing product. Most "enterprise IT buyer" of the three.
- **Risk:** Longest headline of the three; slightly more corporate register, closer to the "generic enterprise platform" tone the brief asks to avoid.

---

## 3. Recommended Direction

**Primary recommendation: Direction B, "Every experience, connected," used as the headline — paired with Direction A's line as the eyebrow above it.**

Reasoning:
- **Clarity wins on a homepage.** A first-time visitor needs to understand what TOUCHTiER is within seconds, before the visual has fully registered. B communicates the value proposition in eight plain words with zero decoding required, and it's the closest single line to the brief's own stated goal for the page.
- **A isn't wasted — it becomes reinforcement, not competition.** "One core. Every connection." works better as the small eyebrow label that sits above the headline: it names the visual metaphor directly (useful, since the visitor is about to look at exactly that on the right), while the headline underneath carries the actual value statement. This two-layer read — abstract concept label, then plain-language payoff — mirrors the "tiered/layered" idea in the brand name itself.
- **C is held in reserve**, not discarded — its infrastructure-forward register is the right voice for a future dedicated Technology/Platform page (or Section 5's "Built to connect, not to replace" framing already uses a similar register), just not the front door.

**Final hero copy block:**
- Eyebrow: `One core. Every connection.`
- Headline: `Every experience, connected.`
- Supporting paragraph: `From customer engagement to venue operations, payments to data — TOUCHTiER brings every system into one connected platform.`
- Primary CTA: `Book a demo`
- Secondary CTA: `Explore the platform`

---

## 4. Hero Visual — The Connected Core

### 4.1 Direction comparison

| Option | Read | Verdict |
|---|---|---|
| A. Luminous sphere | Clean, minimal, instantly legible as "a core." Proven pattern (Stripe/Linear/OpenAI-style glowing orb). | Safe but generic — this exact device is now common shorthand for "AI/tech company" and risks TOUCHTiER blending into that crowd rather than standing apart. |
| B. Abstract icosahedron | Geometric, faceted, "engineered" feel. Distinctive but colder — reads more like a crystal/blueprint than something alive or intelligent. | Good technical tone, weaker on "premium and intelligent" warmth. |
| C. Particle core | Data-driven, alive, but particle systems read busy at any real density and drift toward the crypto/sci-fi territory the brief explicitly rules out if overdone. | Highest risk of violating the "not gaming/crypto/cyberpunk" constraint. |
| D. Layered geometric core | Concentric rotating shells/rings around a small nucleus. Technical, precise, mechanism-like rather than decorative. | Strong fit — and it's the only option with a direct, non-literal tie to the brand name: **tiers, made visual, without ever writing the word "tier."** |
| E. Hybrid (D as primary form + A's emissive warmth + C's restraint) | Layered shells (structure) + a soft luminous nucleus (warmth/premium) + light travelling only along connection lines, never as ambient particles (data/signal, without particle-storm risk). | Best of the set — avoids the generic-orb trap of A, avoids the coldness of B alone, and avoids C's density risk, while still being able to borrow each option's best quality in a controlled way. |

**Recommended direction: E — Hybrid, built on a Layered Geometric Core.**

**Why it fits TOUCHTiER specifically:** the layered/tiered rings give the piece a rationale beyond "looks cool" — it is a literal, structural echo of the brand name ("TOUCH-TIER") that a plain sphere or icosahedron can't offer, while the single emissive nucleus and restrained line-travel keep it feeling premium and calm rather than mechanical or busy. It reads as **precise and intelligent** (the brief's target) rather than **decorative and futuristic-for-its-own-sake** (the brief's explicit warning).

### 4.2 Full Specification

**Core shape:** 3–4 concentric geometric shells (faceted rings, not solid spheres — more armillary-sphere than glass-ball), each shell slightly different in scale and rotated on a distinct axis, nested around a small central nucleus. The gaps between shells are deliberate negative space, not filled — this is what reads as "layered/tiered" rather than "solid orb."

**Material:** Matte dark surface (tonally close to `--bg-surface-raised`), no gloss, no reflections, no chrome. Shell edges carry a thin (1–1.5px) emissive line rendered in `--gradient-signal`. The nucleus is the only fully "lit" element — a small, soft, glowing sphere at the centre.

**Lighting:** No external studio lighting setup. The object is self-illuminating: the nucleus and shell-edge lines are the only light sources, at low-to-moderate intensity. A faint ambient fill keeps the matte shell surfaces from going fully black, but there is no key/rim light rig — this is deliberate: it makes the object feel like it generates its own signal rather than being photographed as a product render.

**Node design:** Ten small rounded-square tiles (per `design-system.md` §6.2 icon-tile spec), positioned in a sparse ring outside the outermost shell, at slightly varied depth (not perfectly flat) for parallax. Each tile shows a thin-line icon for its function (Customer, Venue, Membership, Loyalty, Marketing, Payments, Mobile, Cloud, Data, Integrations) and is joined to the nucleus by a single thin connection line passing through/between the shells.

**Connection lines:** 1px, `--gradient-signal`, resting at 18–24% opacity. Each line periodically carries a brief travelling pulse of full-brightness light from nucleus to node (or node to nucleus), staggered per line on a randomised 4–8s interval so the whole object never pulses in unison — this asynchrony is what makes it read as "a live system" rather than "an animation playing."

**Particle density:** None as ambient particles. The only "particles" in the scene are the travelling pulses on the connection lines themselves. This is the key constraint that keeps the piece in "technical/precise" territory rather than drifting toward the particle-storm look the brief warns against.

**Animation (ambient/idle state):** Shells rotate continuously and independently, very slowly (full rotation on the order of minutes, not seconds) and on different axes — barely perceptible on a glance, confirmed only on sustained viewing, like watching a mechanism rather than a decoration. Nucleus has a slow breathing glow (opacity cycling ~90%→100%→90% over ~4s).

**Interaction (desktop):** Mouse-move parallax — the whole assembly tilts subtly toward the cursor (max ±4–6°, eased, never snapping). Hovering a node tile: its connection line jumps to full brightness, the tile itself lifts slightly and shows its label (e.g. "Payments"); other lines dim slightly to focus attention. No click interaction is required in the hero itself (nodes are labels, not navigation, at this stage — see `homepage-structure.md` for how the same node set becomes real navigation in Section 3).

**Mobile fallback (< 768px):** No live WebGL/3D scene. Replace with a lightweight static or CSS/SVG rendering of the same motif at small scale (~140px) positioned above the headline as a signature mark — shells and nucleus rendered as flat vector shapes, at most 2–3 node connection lines shown with a simple CSS-animated dash-offset pulse (no per-node hover interaction, since there's no cursor). This follows the three-step degradation rule already set in `design-direction.md` §12 (full animated → simplified animated → static).

---

## 5. Motion Sequencing

Single load-in sequence, using the shared "confident settle" easing (`cubic-bezier(0.16, 1, 0.3, 1)`) from `design-system.md`, run once on first paint (not repeated on scroll-back into view).

| Step | Timing (approx., from page-ready) | Behaviour |
|---|---|---|
| **1. Initial load** | 0ms | Page background and nav fade in first (150ms), establishing the dark canvas before anything else appears. |
| **2. Copy entrance** | 100–500ms | Eyebrow, headline, supporting paragraph, and CTA row fade + rise 8–16px, staggered ~70ms apart, left column only. |
| **3. Core appearance** | 400–900ms (overlaps tail of copy entrance) | The core's shells fade/scale in from ~92% to 100% scale, outermost shell first, innermost + nucleus last — reads as the object "condensing" into place rather than popping in. |
| **4. Node appearance** | 800–1400ms | The ten node tiles fade in around the assembled shells, staggered ~40ms each, in a consistent clockwise order. |
| **5. Connection formation** | 1200–1800ms | Connection lines draw on from nucleus to each node (stroke-dashoffset style reveal, not an instant appearance), completing the assembly. This is the visual "everything is now connected" beat. |
| **6. Ambient movement begins** | 1800ms onward | Once fully assembled, the idle state takes over: slow shell rotation, nucleus breathing glow, staggered line pulses — continues indefinitely. |
| **7. Mouse interaction** | Available once idle state is active | Parallax tilt and node-hover highlighting respond immediately (no further entrance delay). |
| **8. Scroll interaction** | On scroll past hero | The core does not simply disappear — it transitions into Section 2's "regrouping" animation (nodes clustering into three pillars), per `homepage-structure.md` Section 2. This is a crossfade/handoff between hero and next-section visuals, not a literal shared DOM element in v1. |

**Reduced motion:** All of the above collapses to a single opacity fade-in (300ms) for the fully-assembled, static core (no shell rotation, no line pulses, no parallax, no scroll handoff animation) — per the global `prefers-reduced-motion` rule in `design-direction.md` §10.

**What this sequence deliberately avoids:** no spinning-in from off-axis, no bounce/overshoot on any element, no simultaneous "everything pops in at once" reveal, no looping attention-seeking motion (e.g. a shell that never stops visibly spinning fast) — every motion beat corresponds to something *becoming connected*, matching the brief's instruction that nothing should move for decoration alone.
