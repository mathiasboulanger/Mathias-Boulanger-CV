# DESIGN.md

The visual system for the `/lab` redesign. Written before the build, per the
design-director pipeline. The incumbent design (dark + amber + Geist +
Instrument Serif) is evidence and anti-reference, not a starting point.

## Why the incumbent is being replaced

Objective findings, not taste:

- `law-check` returns 7 findings on `src/`, one per section: every section
  opens with an uppercase tracked eyebrow (`IMPACT`, `SELECTED PROJECTS`,
  `WHAT I DO`). Banned by default in aesthetic-law §2, and the single most
  recognisable machine-written tell.
- Instrument Serif is named in aesthetic-law §6 as a banned default face.
- The impeccable detector flags Geist as an overused face.
- Seven sections share one shape: eyebrow, large heading, grid of equal
  cards. Zero structural variance is what makes a page read as assembled
  rather than composed.

## The concept

The background is the timeline. This is a scroll-led narrative, not a
stack of sections. The visitor descends through six stages of a story, and
the page's tone travels with them: near-black at the opening, opening up as
the story earns light. The scroll transition between stages is the one
authored motion moment (aesthetic-law §5), so motion has a structural job
instead of decorating every block with the same entrance.

### The six stages

| # | Stage | What it carries |
|---|---|---|
| 1 | Opening | Who he is and the two modes: leading the build, doing the build |
| 2 | The shift | What changed in how he works: directing AI as the implementation layer |
| 3 | Inside a company | Scale and adoption: the store, the program, the measured hours |
| 4 | The things themselves | The projects, with the captures doing the work |
| 5 | How it is built | The technical layer: evals, retrieval thresholds, MCP, CI |
| 6 | What is next | What he is looking for, and how to reach him |

Stage 5 is the one the incumbent buries in a chip list, and it is the stage
that answers the question a technical reader actually has.

## Palette

A single hue family travelling from cold to warm across the descent, so the
tone change reads as narrative rather than as theming.

| Token | Value | Use |
|---|---|---|
| `--ink-900` | `#07070A` | Stage 1 ground, deepest |
| `--ink-800` | `#0C0D12` | Stage 2 to 3 ground |
| `--ink-700` | `#12141C` | Stage 4 to 5 ground |
| `--ink-600` | `#1A1D28` | Stage 6 ground, the page has warmed |
| `--paper` | `#F2F1EE` | Primary text on dark, slightly off-white |
| `--paper-dim` | `#9A9AA6` | Secondary text |
| `--line` | `#23262F` | Hairlines and borders |
| `--signal` | `#4ADE80` | The one accent. Live states, active data, links |
| `--signal-dim` | `#2E9E5B` | Accent at rest. Passes 4.5:1 on every ground, so it can carry small text |

One accent only. Green reads as signal and live state in a technical
context, and it deliberately breaks from the incumbent amber so the two
designs cannot be confused while both are deployed. Not the AI-purple
gradient family (§8), not beige and brass (§4).

## Typography

| Role | Face | Why |
|---|---|---|
| Display | **Bricolage Grotesque** | Variable, optically sized, genuinely opinionated. Not a default reach for a model, which is the failure mode being corrected. |
| Body | **Public Sans** | Neutral, wide language coverage, reads long at small sizes. |
| Data | **JetBrains Mono** | Numbers, labels, stack names, anything that should read as a readout. |

All three on Google Fonts, so no second CDN. Geist and Instrument Serif are
retired from this surface. Display is never Inter or system-ui (§7).

## Structure rules

- No eyebrows anywhere. Headings carry their own weight (§2), and section
  identity comes from the stage's tone and rhythm instead of a label above
  the title.
- The opening is asymmetric. This brief has high design variance, so the
  centered hero is off the table (§3).
- No repeated card grid. Each stage uses a different structure: prose, a
  data strip, an interrogable table, full-bleed captures. Variance is the
  point.
- Projects are a filterable table rather than eight identical cards. It
  shows product-UI competence and it scales past eight rows.

## Motion budget

One authored moment: the stage-to-stage tone transition, driven by scroll
position and orchestrated across background, type and the active stage
marker. Everything else follows the animate gate: under 300ms, ease-out on
entry, interruptible, and `prefers-reduced-motion` collapses the whole
system to instant tone changes with no transforms.

No parallax layer stacks, no scattered identical section entrances.

## Sourcing

shadcn as the primary registry for utility components (table, toggle group,
dialog), restyled to these tokens. Nothing is adopted with its default
theme. 21st.dev is a reference for composition ideas, not a paste target.

## Exit gates

`law-check` at zero, impeccable audit and critique, web-design-guidelines
pass, review-animations on the motion diff, then lint and build green.
