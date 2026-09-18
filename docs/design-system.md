# TOUCHTiER Design System

Version 0.1 — Foundation. Defines the design tokens and component language for the new TOUCHTiER website. This is a documentation-only artifact: no components exist yet.

---

## 1. Colour Tokens

### 1.1 Foundation (neutral, dark-first)

The UI is built on a near-black, warm-neutral foundation — not pure black, not corporate slate blue. Neutral does the load-bearing work; colour is reserved for meaning.

| Token | Value | Usage |
|---|---|---|
| `--bg-canvas` | `#0A0B0E` | Page background (default theme) |
| `--bg-surface` | `#111318` | Section/panel background, subtly lifted off canvas |
| `--bg-surface-raised` | `#15171D` | Cards, dropdowns, modals |
| `--bg-surface-overlay` | `#1B1E26` | Popovers, tooltips, top-most layers |
| `--bg-inverse` | `#F5F6F8` | Inverse sections / light "paper" mode for dense content pages |
| `--border-hairline` | `rgba(255,255,255,0.08)` | Default card/divider borders |
| `--border-hairline-strong` | `rgba(255,255,255,0.16)` | Hover / focus-adjacent borders |
| `--border-on-inverse` | `rgba(10,11,14,0.10)` | Borders on light surfaces |

### 1.2 Text

| Token | Value | Usage |
|---|---|---|
| `--text-primary` | `#F5F6F8` | Headlines, primary copy (off-white, never pure `#FFFFFF`) |
| `--text-secondary` | `#A6ACB8` | Supporting copy, descriptions |
| `--text-tertiary` | `#6B7280` | Captions, metadata, disabled text |
| `--text-inverse` | `#0A0B0E` | Text on light/inverse surfaces or on solid accent fills |
| `--text-link` | `#9EE4FA` (tint of RXSKY) | Inline links on dark surfaces |

### 1.3 Neutral inherited from RedeemX DNA

| Token | Value | Usage |
|---|---|---|
| `--rx-grey` | `#333333` | Used only as a *mid-tone neutral* — dividers on inverse/light sections, secondary chip backgrounds. Not a primary brand colour. |

### 1.4 Accent DNA — RedeemX palette, used as "signal" not decoration

These four hues are the only colour allowed to carry meaning in the system. Each is assigned a semantic role so their use stays consistent and restrained (target: **under 10% of any viewport's surface area**).

| Token | Value | Assigned meaning | Primary usage |
|---|---|---|---|
| `--rx-sky` | `#61D3FA` | Data / cloud / connectivity | Data visualisation, network lines, cloud/integration iconography, info states |
| `--rx-berry` | `#9361FA` | Core brand / primary action | Primary interactive colour — links, focus states, the single "brand" accent |
| `--rx-helio` | `#DE61FA` | Premium / highlight | Gradient midpoint, premium feature emphasis, glow accents |
| `--rx-strawberry` | `#FA617C` | Energy / momentum / alert | Sparingly — CTA emphasis points, live/active indicators, notification dots |

**Rule:** no more than two accent hues active in a single viewport at once, outside of the full three-stop gradient itself. Never use all four as flat fills side by side (that reads as "RedeemX").

### 1.5 Gradients

| Token | Definition | Usage |
|---|---|---|
| `--gradient-signal` | `linear-gradient(135deg, #61D3FA 0%, #9361FA 50%, #DE61FA 100%)` | The primary brand gradient. Thin lines, icon strokes, one hero headline word, active nav indicator, chart strokes. Never a large flat fill. |
| `--gradient-pulse` | `linear-gradient(135deg, #9361FA 0%, #DE61FA 50%, #FA617C 100%)` | Reserved for the single highest-priority CTA per page (hover/glow state) |
| `--gradient-mesh` | Radial blurred blobs of sky/berry/helio at 4–8% opacity over `--bg-canvas` | Ambient background texture behind hero/core visual only — max one zone per page |
| `--gradient-border` | 1px conic/linear gradient (sky→berry→helio) at 30–50% opacity, masked to a border | Card hover state, "featured" card treatment |

### 1.6 Glow (replaces drop-shadow as the primary elevation language on dark surfaces)

| Token | Definition | Usage |
|---|---|---|
| `--glow-berry` | `0 0 40px rgba(147,97,250,0.25)` | Primary button hover, focal 3D core |
| `--glow-helio` | `0 0 40px rgba(222,97,250,0.20)` | Premium badges, featured cards |
| `--glow-sky` | `0 0 32px rgba(97,211,250,0.18)` | Data/connection nodes, active states |
| `--glow-strawberry` | `0 0 32px rgba(250,97,124,0.18)` | Live indicators, momentum stats |

### 1.7 Shadows (structural elevation, used sparingly — glow does most of the work)

| Token | Definition |
|---|---|
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.24)` |
| `--shadow-md` | `0 8px 24px rgba(0,0,0,0.40)` |
| `--shadow-lg` | `0 24px 64px rgba(0,0,0,0.48)` |

---

## 2. Typography

### 2.1 Type families

| Role | Family | Rationale |
|---|---|---|
| Display / Headings | **General Sans** (Fontshare, weights 500–700) | Geometric, confident, slightly technical grotesk — reads premium without being a default SaaS font (Inter/Helvetica) |
| Body / UI | **Inter** (variable, weights 400–500) | Best-in-class small-size legibility, neutral, enterprise-trusted, easy to pair |
| Data / Technical accents | **JetBrains Mono** (weights 400–500) | Stats, nav micro-labels, tags, timestamps, code-like values — reinforces "technical/intelligent" personality |

Two type families + one mono accent, maximum. Do not introduce a third display face.

### 2.2 Scale (desktop baseline, fluid via `clamp()` down to mobile in §7)

| Token | Size | Line-height | Tracking | Weight |
|---|---|---|---|---|
| `--text-display` | 96px | 1.0 | -0.03em | 600 (General Sans) |
| `--text-h1` | 64px | 1.05 | -0.02em | 600 |
| `--text-h2` | 48px | 1.1 | -0.02em | 600 |
| `--text-h3` | 32px | 1.2 | -0.01em | 500 |
| `--text-h4` | 24px | 1.3 | -0.01em | 500 |
| `--text-body-lg` | 18px | 1.6 | 0 | 400 (Inter) |
| `--text-body` | 16px | 1.6 | 0 | 400 |
| `--text-small` | 14px | 1.5 | 0 | 400 |
| `--text-micro` | 12px | 1.4 | 0.08em (uppercase) | 500 (JetBrains Mono) |

Headlines are always set tight (negative tracking); body copy is never tracked tighter than 0 — this contrast is intentional and reads as "considered," not accidental.

---

## 3. Spacing Scale

Base unit: 4px.

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160 · 200`

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | 4px | Icon-to-label gaps |
| `--space-2` | 8px | Tight inline spacing |
| `--space-3` | 12px | Form field internal padding |
| `--space-4` | 16px | Default component padding |
| `--space-6` | 24px | Card padding, small gaps between related items |
| `--space-8` | 32px | Card padding (large), gap between grid items |
| `--space-12` | 48px | Gap between sub-sections |
| `--space-16` | 64px | Gap between distinct content blocks |
| `--space-24` | 96px | Section-to-section spacing (tablet) |
| `--space-32` | 128px | Section-to-section spacing (desktop) |
| `--space-40` | 160px | Hero vertical padding, major section breaks |
| `--space-50` | 200px | Rare — top-of-page hero breathing room on large screens |

---

## 4. Border Radius

Kept modest and precise — never bubbly. Precision reads as technical/enterprise; heavy rounding reads as consumer/friendly SaaS, which we're avoiding.

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 6px | Inputs, small chips, tags |
| `--radius-md` | 10px | Buttons |
| `--radius-lg` | 16px | Cards |
| `--radius-xl` | 24px | Large panels, hero containers, modals |
| `--radius-full` | 9999px | Pills, badges, avatar/icon circles |

---

## 5. Borders

- Default: 1px solid `--border-hairline`
- Hover / focus-adjacent: 1px solid `--border-hairline-strong`
- Featured/premium card: 1px `--gradient-border`
- Never use borders heavier than 1px. Weight is communicated through glow and elevation, not thick strokes.

---

## 6. Components

### 6.1 Buttons

| Variant | Default | Hover | Usage |
|---|---|---|---|
| **Primary** | Fill `--bg-inverse` (off-white), text `--text-inverse`, radius `--radius-md` | Scale 1.02, `--shadow-md` + faint `--glow-berry` beneath | Default primary action — high contrast, confident, not colour-dependent |
| **Signature CTA** | Fill `--gradient-pulse`, text `#FFFFFF` | `--glow-helio` intensifies, 1px lighten | The *one* highest-priority CTA per page (e.g. hero "Book a Demo") — never more than one per viewport |
| **Ghost / Outline** | Transparent, 1px `--border-hairline`, text `--text-primary` | Border → `--border-hairline-strong`, text unchanged | Secondary actions |
| **Text link** | `--text-secondary`, no decoration | Colour → `--rx-sky` tint, underline fades in | Tertiary/inline actions |

All buttons: 150–200ms ease transitions, `--radius-md`, horizontal padding `--space-6`–`--space-8`.

### 6.2 Cards

- Background `--bg-surface-raised`, border `--border-hairline`, radius `--radius-lg`, padding `--space-8`.
- Hover: border → `--gradient-border`, `translateY(-2px)`, soft glow matched to the card's assigned accent (sky/berry/helio per content type).
- **Ecosystem/module card** (for Customer, Venue, Membership, Loyalty, etc.): icon in a `--radius-md` tile with a gradient-stroke icon (1.5px, `--gradient-signal`), `--text-h4` label, one line of `--text-body` description. Designed to sit within a connected-node layout (see design-direction.md), not as an isolated feature grid.

### 6.3 Navigation

- Sticky top nav. Transparent over hero; on scroll, transitions to `background: rgba(10,11,14,0.72)` with `backdrop-filter: blur(12px)` and a `--border-hairline` bottom edge fades in.
- Logo left; primary links inline (not centered — left-weighted, enterprise convention); one CTA button right.
- Active/hover link: text → `--text-primary`, with a 2px `--gradient-signal` underline sliding indicator (shared-element transition between items).
- Mobile (< 1024px): collapses to a hamburger → full-height dark overlay panel, links reveal staggered (60ms stagger), CTA pinned to bottom.

### 6.4 Badges / Tags

- Pill, `--radius-full`, `--text-micro` (uppercase, mono, 0.08em tracking).
- Background: assigned accent at 10% opacity; text: assigned accent at full value; border: assigned accent at 20% opacity.
- Examples: `ENTERPRISE` (berry), `NEW` (sky), `LIVE` (strawberry, paired with a 6px pulsing dot).

### 6.5 Interaction States

| State | Treatment |
|---|---|
| Default | As specified per component |
| Hover | 150–200ms ease-out; colour/border/glow shift only — no large movement |
| Active/Pressed | Scale 0.98, glow tightens |
| Focus (keyboard) | 2px outline `--rx-sky` at 60% opacity, 2px offset — always visible, never suppressed |
| Disabled | 40% opacity, no pointer events, no hover transition |
| Loading | Skeleton surfaces use `--bg-surface-raised` with a slow (1.6s) opacity pulse between 100%–60% |

---

## 7. Responsive Token Adjustments

See `design-direction.md` §"Responsive Philosophy" for full breakpoint behaviour. Token-level adjustments:

- Below 1024px: `--text-display` clamps to 56px, `--text-h1` to 40px, section spacing (`--space-32`/`--space-40`) compresses to `--space-16`/`--space-24`.
- Below 768px: grid gutters reduce from 32px to 16px; card padding reduces from `--space-8` to `--space-6`.
- Below 480px: `--text-display` clamps to 40px, `--text-h1` to 32px; all gradient-border hover treatments become static (no hover states on touch).
