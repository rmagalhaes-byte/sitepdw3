---
name: pdw-design
description: Use this skill to generate well-branded interfaces and assets for the Portuguese Digital Wallet (PDW), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. PDW is Portugal's sovereign digital identity wallet, built by TecMinho (Univ. of Minho) inside the Agenda Blockchain.PT consortium; tone is institutional, EU-credible, calm-tech.
user-invocable: true
---

# PDW Design Skill

Read `README.md` first — it covers brand context, content fundamentals (voice/tone, PT + EN microcopy patterns), visual foundations (palette, type, radii, shadows, motion), and iconography rules. Then explore the other files:

- `colors_and_type.css` — every design token as a CSS custom property. Import this in any new HTML artifact (`<link rel="stylesheet" href="colors_and_type.css">`) and you get the full palette, type, spacing, radii, shadows and motion curves out of the box, plus a `.pdw-typography` helper class.
- `assets/` — all official logos (PDW, TecMinho, U.Minho, Blockchain.PT, VOID, EBSI), funder marks (PRR, RP, FEU), and brand imagery (hero illustration, wallet mockup, flow diagrams). **Always copy these out** when building artifacts; never reference cross-project paths or invent your own logos.
- `preview/` — atomic HTML cards (one concept per file) showing each token in use. Useful when you need to remember exactly how a shadow / button / status pill looks.
- `ui_kits/website/` — high-fidelity React (Babel-inline JSX) recreation of the marketing site. Lift `components.jsx` wholesale, or copy a single component (e.g. `<TrustBar />`, `<DiplomaCaseSection />`) when you need that pattern. Components export to `window` and depend on `styles.css` + `../../colors_and_type.css`.

## When invoked

If creating **visual artifacts** (slides, mocks, throwaway prototypes, etc.), copy the assets out and write static HTML files for the user to view. Match the institutional voice — short declarative sentences, no emoji in prose, primary green `#006c4b` for CTAs, gradient green→navy for hero headlines.

If working on **production code** (the Next.js site at `pdw-site-v2/`), use this skill as reference rather than copying — the tokens in `globals.css` are the source of truth there. Lift only the conceptual rules from `README.md`.

If invoked without other guidance, ask what the user wants to build (new page? slide deck? mockup? component variation?), confirm whether output should be PT or EN (or both), then act as an expert PDW designer producing HTML artifacts or production-ready code as appropriate.

## Core do-nots

- ❌ Don't add emoji to body copy, buttons, or microcopy. Emoji is only used as **category icons** (🎓 🪪 📜 🏥 🌱 🏠) for use-case cards.
- ❌ Don't invent new colors — use the green/navy palette + neutral scale defined in `colors_and_type.css`.
- ❌ Don't use Inter, Roboto, Arial, or system fonts — the brand face is **Public Sans** (loaded from Google Fonts).
- ❌ Don't draw partner logos as SVG — always use the PNG assets in `assets/`, rendered grayscale-by-default per `README.md`.
- ❌ Don't use marketing superlatives ("incredible", "amazing"). The strongest word the brand uses is "de vanguarda" / "world-class".
- ❌ Don't recreate the UI from screenshots — the real components are in `ui_kits/website/components.jsx`; copy from there.
