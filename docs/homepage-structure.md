# TOUCHTiER Homepage Structure

Version 0.1 — Foundation. Defines the homepage as a sequence of sections, each specified before any implementation. Built on `design-system.md` and `design-direction.md`. No components exist yet — this is the structural + content plan for Step 2 approval.

---

## Why this sequence (Taste Skills reasoning)

The brief offered a 9-part candidate list (Hero → Ecosystem → Platform → Customer → Venue → Solutions → Industries → Technology → CTA). Built as-is, that's five different "here's a category of stuff" sections in a row — Customer, Venue, Solutions, and Industries all describe facets of the same underlying platform, and stacking them separately dilutes the one message the homepage needs to land: **one core, many connected systems.**

Instead, this structure **collapses the ten ecosystem nodes into three pillars once** (Experience & Loyalty / Venue & Operations / Technology & Data) and reuses that same grouping as the spine of the page — introduced in the ecosystem section, detailed in the platform section, and given technical depth in the technology section. Nothing is explained twice under a different name.

| Node | Pillar |
|---|---|
| Customer, Membership, Loyalty, Marketing | **Experience & Loyalty** |
| Venue, Payments, Mobile | **Venue & Operations** |
| Cloud, Data, Integrations | **Technology & Data** |

Six sections total (Hero + 5). Every one of the ten nodes is accounted for exactly once. This is deliberately leaner than the candidate list — enterprise buyers scan; a homepage that ends before it overstays its welcome reads as more confident than one that tries to say everything.

---

## Section 1 — Hero: The Connected Core

**Purpose:** Establish the core concept and value proposition in one viewport, with zero scrolling required to understand what TOUCHTiER is.

**Headline direction:** See `hero-concept.md` for full development. Direction: short, declarative, centred on "connection" as the product itself, not a feature of it.

**Supporting copy direction:** One sentence, ~18–22 words, naming the breadth (customer, venue, enterprise technology) without listing features. No adjectives that need proof ("best," "leading," "world-class").

**Visual concept:** The Connected Core — luminous layered core with ten orbiting nodes (see `hero-concept.md` §3D Direction). This is the only 3D moment on the page introduced at full fidelity; everything downstream references it rather than repeating it.

**CTA:** Primary — "Book a demo" (signature gradient CTA, the only one on the page). Secondary — "Explore the platform" (ghost button, anchors to Section 3).

**Interaction:** Mouse-move parallax on the core (desktop only, ±4–6°). Hovering a node tile brightens its connection line and reveals its label.

**Animation:** Staggered entrance (eyebrow → headline → subhead → CTAs → core), core assembles after copy settles (see `hero-concept.md` §Motion for exact sequencing).

**Desktop layout:** Two-column, asymmetric. Left ~45% (copy, left-aligned, vertically centred), right ~55% (core visualisation, allowed to bleed toward the viewport edge for scale). Nav sits transparent above.

**Mobile layout:** Single column, core visual first collapses to a simplified static/CSS rendering positioned above the headline (small, ~140px, as a "signature mark" rather than a full scene), then eyebrow, headline, subhead, both CTAs stacked full-width.

---

## Section 2 — Connected Ecosystem (the premise)

**Purpose:** State the problem TOUCHTiER exists to solve — disconnected systems — and immediately resolve it into the three-pillar structure that the rest of the page uses. This is the "connections resolve into platform capabilities" beat.

**Headline direction:** Names the fragmentation-to-connection shift plainly, e.g. "Every system, working as one" (working title — final copy at build stage). Avoid naming RedeemX-style stats; this section is conceptual, not proof-driven.

**Supporting copy direction:** Two short sentences: first names the fragmentation reality (customer, venue, and back-office systems typically run separately), second states TOUCHTiER's resolution (one connected platform underneath all of it).

**Visual concept:** The hero's core visual "compresses" — shown smaller, off to one side or centred and reduced — with its ten node tiles animating into three grouped clusters labelled Experience & Loyalty / Venue & Operations / Technology & Data. This is the literal moment nodes become pillars.

**CTA:** None — this section is transitional, not a decision point.

**Interaction:** Scroll-linked: as the section enters, the ten nodes visibly regroup into three clusters (a lightweight, non-WebGL version of this can be built with CSS/SVG position transitions — no new 3D asset required).

**Animation:** Scroll-reveal, "confident settle" easing; the regrouping animation runs once per page load (not re-triggered on scroll-back).

**Desktop layout:** Centred single column for headline/subhead (max-width ~720px), full-width regrouping visual beneath, generous vertical padding (`--space-40`).

**Mobile layout:** Same order, regrouping visual simplifies to a static three-cluster diagram (no live animation) per the responsive 3D degradation rule.

---

## Section 3 — Platform: Three Pillars

**Purpose:** Give the three pillars real substance — this is where "nodes become product modules." The only section that goes two levels deep (pillar → the nodes within it).

**Headline direction:** Direct and structural, e.g. "One platform, three layers" or "Everything runs on one core" — names the three-pillar architecture as the product's actual shape, not marketing packaging.

**Supporting copy direction:** One short intro line, then each pillar gets its own card with a 1-sentence description and its constituent nodes listed as small tags (not full sub-features — depth is reserved for future dedicated pages).

**Visual concept:** Three large module cards side by side, each themed to one assigned accent (Experience & Loyalty → berry, Venue & Operations → sky, Technology & Data → helio), each card's icon rendered in the same gradient-stroke node style as the hero core — visually confirming "this card is that node, up close."

**CTA:** Each card ends with a quiet text link ("See how it works →") — no button-weight CTA here; the section's job is comprehension, not conversion.

**Interaction:** Card hover — gradient-border reveal + lift (per `design-system.md` §6.2), glow tinted to the card's assigned accent.

**Animation:** Staggered scroll-reveal, 80ms stagger across the three cards.

**Desktop layout:** 3-column grid, equal width, `--space-8` gutters, cards vertically equal height.

**Mobile layout:** Single column, stacked, full-width cards, tags wrap naturally.

---

## Section 4 — Built for Scale

**Purpose:** Establish credibility for enterprise and multi-venue operators without fabricated proof points — positions TOUCHTiER's operational range (single venue → multi-venue group → enterprise) as a capability statement, not a claims list.

**Headline direction:** Frames scale as architecture, e.g. "Built for one venue. Ready for a hundred." Communicates range without asserting unverified customer counts.

**Supporting copy direction:** Describe the platform's ability to run consistently across a single site or a multi-venue group under one connected core — capability language ("designed to," "built to"), never invented metrics ("50+ venues," "1M+ profiles" — those are RedeemX's numbers, not TOUCHTiER's, and must not be reused or implied).

**Visual concept:** A simplified repetition of the core motif — one core, shown connected to multiple smaller instances of itself (venue A, venue B, venue C), implying group-wide consistency. Reinforces the metaphor rather than introducing a new visual system (e.g. a map or photo grid).

**CTA:** None, or a quiet secondary link ("Talk to us about your venues →") — this section builds trust, Section 6 converts.

**Interaction:** Minimal — this section should feel calm and declarative after the denser Platform section. At most a subtle hover state on the repeated-core icons.

**Animation:** Simple fade/rise entrance only — no scroll-linked choreography. Deliberate pacing contrast after Section 3.

**Desktop layout:** Asymmetric — headline/copy on one side, repeated-core diagram on the other (mirrors the hero's asymmetry, creating bookend symmetry across the page).

**Mobile layout:** Stacked, diagram simplifies to a small static icon row.

---

## Section 5 — Technology & Integrations

**Purpose:** Give the Technology & Data pillar its technical-credibility moment — "connections become integrations." This is where the intelligent/technical brand personality gets its most literal expression.

**Headline direction:** Infrastructure-forward, e.g. "Built to connect, not to replace" — signals API-first, integrates-with-existing-systems positioning (a credible, common enterprise concern) rather than a rip-and-replace pitch.

**Supporting copy direction:** Name the technical foundation in plain terms — cloud-based, API-first, built for real-time data flow across connected systems. Capability statements only; no uptime/SLA numbers unless they exist and are confirmed.

**Visual concept:** Connection lines from the hero/ecosystem visual reappear here as literal "integration" lines — animated thin gradient lines flowing between a TOUCHTiER core icon and a row of generic system-type icons (payments, cloud, mobile, data) rather than specific named third-party logos (none are confirmed yet — avoid implying unverified partnerships).

**CTA:** Text link ("View technical overview →") — can point to a future dedicated technology page.

**Interaction:** Hover a system icon to brighten its connection line, echoing the hero's node interaction — the last callback to the core metaphor before the closing section.

**Animation:** Scroll-reveal with a slow ambient line-pulse loop, matching the hero's ambient cadence (visual rhyme, not a new motion language).

**Desktop layout:** Centred content, connection diagram as a full-width band beneath the headline.

**Mobile layout:** Diagram simplifies to a vertical stacked list with static connector ticks instead of animated lines.

---

## Section 6 — Closing CTA: The Network Converges

**Purpose:** Close the page by returning explicitly to the core — the "network converges back toward the TOUCHTiER core" beat — and give a final, single decision point.

**Headline direction:** Short and confident, mirrors the hero headline direction to bookend the page (e.g. if the hero is "Every experience, connected," the closer can be "Let's connect yours").

**Supporting copy direction:** One line, direct invitation to talk — no repeated feature summary.

**Visual concept:** The full ten-node core reassembles one final time, smaller and centred, all connection lines animating inward toward the nucleus simultaneously — the visual opposite of the hero's outward "assembly," giving the page a clear beginning and end.

**CTA:** Primary — "Book a demo" (same signature CTA as the hero, reinforcing it as the one meaningful action on the page). Secondary — "Contact sales" (ghost button/text link).

**Interaction:** None beyond standard button states — this section should feel settled, not busy.

**Animation:** Slow, single convergence animation on scroll-into-view (2–3s), then the core rests in a gentle idle glow (same breathing-glow behaviour as the hero nucleus).

**Desktop layout:** Centred, single column, generous top/bottom padding (`--space-40`+), core visual behind/above the CTA at reduced opacity so text stays legible.

**Mobile layout:** Centred, core simplifies to the same static mark used in the mobile hero — full narrative circle without a second live 3D scene.

---

## Section count check

Hero + 5 sections = 6 total. All ten ecosystem nodes appear exactly once at full detail (Section 3) and are referenced, never re-explained, everywhere else they recur (Sections 1, 2, 4, 5, 6). No industry-specific vertical pages, no logo wall, no numbered-stats band — those require real data TOUCHTiER doesn't have yet and would otherwise pull directly from RedeemX's own claims, which the brief explicitly rules out.
