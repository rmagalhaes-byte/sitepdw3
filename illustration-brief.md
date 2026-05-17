# PDW · Illustration & icon brief

A short, declared scope for commissioning a custom icon / illustration set to replace the emoji currently used as use-case category glyphs (🎓 🪪 📜 🏥 🌱 🏠) and the marketing imagery placeholders.

> **Status today:** the site uses six Unicode emoji as category icons and three marketing PNGs (`Imagem-home.png`, `Imagem-isometrica.png`, `wallet-mockup.png`) as hero imagery. This works for the MVP but does not scale to a production institutional brand. The aim is to replace both with a coherent, commissioned visual system.

---

## 1 · Scope

### A. Category icon set — **6 icons**

To replace, in this order:

| Slot | Replaces | Notes |
|---|---|---|
| Diplomas Universitários | 🎓 | Currently the most-used. Anchor of the diploma case. |
| Identidade Estudantil | 🪪 | Multi-service student credential. |
| Microcredenciais Profissionais | 📜 | Lifelong-learning credentials. |
| Saúde Descentralizada | 🏥 | Cross-border health data sharing. |
| Rastreabilidade Alimentar | 🌱 | Agri-food supply chain. |
| Ativos Digitais e Imobiliário | 🏠 | Real-estate + digital assets. |

### B. Pillar icon set — **3 icons**

For the *Privacidade / Conformidade Europeia / Educação* value pillars (`ValuePillars.tsx`). Same visual system as the category set.

### C. Hero / spot illustrations — **3 scenes**

To replace `Imagem-home.png`, `Imagem-isometrica.png` and `Como-funciona.png`. Used on the home hero, the *Solução* page, and the *Como funciona* explainer.

---

## 2 · Visual direction

- **Geometric, flat-vector, line + soft fill.** Not 3D-render, not isometric, not photographic. Read at 28 px (cards) and 200 px (hero) without redrawing.
- **Two-tone palette anchored to PDW green `#006c4b`** with a single accent from the existing palette (navy `#1a3b5d`, or one of the status tints). Backgrounds stay neutral.
- **Optical weight 2 px stroke** on the smallest size, scaling. Consistent corner radius (2 px) matching the Lucide-style icons already in the codebase.
- **Friendly, sober, infrastructural** — closer to *gov.uk* / *EU Digital Identity* than to a fintech app. No mascots, no character illustration of citizens unless explicitly approved.
- **EU-credible.** The work has to sit comfortably next to the EBSI mark, the PRR badge, and the República Portuguesa lockup without visual clash.

## 3 · Technical specs

| Asset | Format | Sizes | Notes |
|---|---|---|---|
| Category icons | **SVG**, one per file | Designed at 24 × 24 with optional 32 / 48 sizes | Single `currentColor` stroke so they pick up CSS color. Optimised, no inline metadata. |
| Pillar icons | **SVG** | Same | Same. |
| Hero scenes | **SVG** + **WebP/PNG @1×/@2×** | Designed at 1280 × 960 max | SVG preferred for crisp scaling; PNG fallback for raster contexts (decks). |
| Source files | **Figma** library | One frame per asset, named in `kebab-case` matching the slot above | Hand off as a published Figma file + zipped SVG export. |

## 4 · Deliverables

1. A published **Figma library** with one component per icon + each hero scene.
2. **Two-page guidelines doc** (PDF) showing: 24 px / 48 px versions, stroke and fill rules, do/don't, color palette restriction.
3. **All assets exported** as optimised SVG (icons) and SVG + PNG @1×/@2× (hero scenes).
4. **Two rounds of revisions** included.

## 5 · Out of scope

- Animation (we will animate ourselves where useful — see *Animation system* in `README.md`).
- Custom brand wordmark / new logo work — the PDW wordmark stays as-is.
- Photography or product UI mockups — those come from inside the team.

## 6 · Success criteria

- All six category icons render legibly at 24 px against a `#ffffff` card background.
- The set sits next to the EBSI, TecMinho and PRR marks without colour clash.
- A new use-case added in 2027 can be drawn by an in-house designer following the published guidelines, without further commissioning.

## 7 · Budget & timeline (placeholder)

To be confirmed with TecMinho design lead. Suggested allocation: **6 weeks**, **2 review milestones** (week 2 — direction confirmed; week 4 — full set in review).

---

*Owner: TecMinho design coordination. Last updated: 14 May 2026.*
