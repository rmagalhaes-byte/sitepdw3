# Handoff Package · PR3 · Home editorial enhancements

> **Repositório destino:** `https://github.com/rshermans/pdw-site-v2`
> **Origem deste pacote:** `ui_kits/website/` (secções `PullQuote` + `StatsBanner` da Fase 2) + wiring do `VideoModal` no Hero.
> **Pré-requisitos:** PR1 e PR2 já aplicados (handoff_pdw_site_v2).
> **Princípio:** UM componente por PR; **não tocar** no formulário de contacto, no `/api/contact` (Resend), nem em `LeadFormSection`.

A página `/` em produção (`src/app/[lang]/page.tsx`) já estava alinhada com o UI kit no momento dos handoffs anteriores — por isso o ficheiro foi explicitamente excluído da lista («NÃO mexer»). Este pacote traz apenas o **delta da Fase 2 editorial** que ficou no design system e que ainda não foi publicado:

1. **`PullQuote`** — banda escura full-bleed entre `TrustBar` e `ValuePillars`. Citação institucional sobre os **10% do PIB global em blockchain até 2027** (Fórum Económico Mundial, citado em `docs/Bussines.md`).
2. **`StatsBanner`** — banda clara full-bleed entre `ValuePillars` e `DiplomaCaseSection`. Quatro números da Agenda Blockchain.PT (validados em `.vide/01_BUSINESS_RULES.md`):
    - **72,9 M€** — Investimento total do consórcio
    - **26** — Produtos inovadores na Agenda
    - **378** — Profissionais mobilizados
    - **44** — Entidades (24 PME · 15 RTOs · 5 Estado)
3. **`HomeHero`** — wrapper Client Component que liga o `onPlayDemo` do `HeroInstitutional` ao `VideoModal` existente. Mantém o `page.tsx` como Server Component (para `generateMetadata` e SEO).

## Conteúdo

```
handoff_pdw_site_v2_home/
├── README.md                              ← este ficheiro
├── i18n-additions.json                    ← copy novo (merge em pt.json/en.json)
├── globals.append.pr3.css                 ← CSS novo (concat ao globals.css)
└── src/
    ├── app/[lang]/
    │   └── page.tsx                       ← SUBSTITUI o existente
    └── components/sections/
        ├── HomeHero.tsx                   ← NOVO · client wrapper Hero+VideoModal
        ├── PullQuote.tsx                  ← NOVO · server component
        └── StatsBanner.tsx                ← NOVO · server component
```

## Ordem recomendada de port (PRs separados)

1. **Copy + CSS** (PR pequeno, invisível) — merge `i18n-additions.json` em `src/i18n/locales/pt.json` + `en.json`, append `globals.append.pr3.css` em `src/app/globals.css`.
2. **`PullQuote` + `StatsBanner`** (PR de componentes — não muda nada visualmente porque ainda não estão ligados à Home).
3. **`HomeHero` + nova `page.tsx`** (PR final que liga tudo, com screenshot antes/depois).

## Convenções respeitadas

- **Server Components por defeito.** Apenas `HomeHero.tsx` usa `"use client"` (precisa de `useState` para o modal de vídeo).
- **Path aliases `@/...`** — todos os imports usam o alias do `tsconfig.json`.
- **Tokens CSS** — usa `var(--color-primary)`, `var(--color-secondary)`, `var(--color-text)`, `var(--color-muted)`, `var(--color-border)` (já em `globals.css`). **Nada de `--pdw-*`**.
- **Componentes existentes reutilizados:** `HeroInstitutional`, `TrustBar`, `ValuePillars`, `DiplomaCaseSection`, `ContactCTA`, `VideoModal`. Não os toques.
- **i18n** — todos os textos sob a chave `home.pullquote` e `home.statsBanner` (sem colisões com `hero`, `trustBar`, `pillars`, etc.).

## NÃO mexer

- `src/app/api/contact/route.ts`
- `src/components/sections/LeadFormSection.tsx`, `HeroInstitutional.tsx`, `TrustBar.tsx`, `ValuePillars.tsx`, `DiplomaCaseSection.tsx`, `ContactCTA.tsx`
- `src/components/ui/VideoModal.tsx`
- `package.json` (zero dependências novas)

## Como testar localmente antes do PR

```bash
git checkout main && git pull
git checkout -b design/home-editorial-pr3

# Copia os ficheiros (mantém a mesma estrutura de pastas)
# Faz merge do i18n e append do CSS

pnpm dev                       # → http://localhost:3000/pt
pnpm build                     # tem de passar antes do PR
pnpm lint
```

## Critério de aceitação

- [ ] `/pt` e `/en` renderizam sem console errors.
- [ ] `Ver vídeo conceito` no hero abre o `VideoModal` com `concept_video.mp4` (já em `/public`).
- [ ] `PullQuote` aparece entre `TrustBar` e `ValuePillars`, full-bleed, fundo escuro.
- [ ] `StatsBanner` aparece entre `ValuePillars` e `DiplomaCaseSection`, full-bleed, fundo claro.
- [ ] Layout responsivo a < 900px (grids colapsam para 1 e 2 colunas).
- [ ] `pnpm build` passa, Lighthouse mantém ou melhora.
- [ ] Footer e Header (do layout) continuam intactos.

## Fonte dos números (auditoria)

| Valor | Fonte no repositório |
|---|---|
| 72,9 M€ investimento total | `pdw-site-v2/.vide/01_BUSINESS_RULES.md` linha 73; `pdw-site-v2/docs/Bussines.md` linha 8 |
| 26 produtos inovadores | `pdw-site-v2/docs/Bussines.md` linha 3 |
| 378 profissionais mobilizados | `pdw-site-v2/docs/Bussines.md` linha 27 |
| 44 entidades (24+15+5) | `pdw-site-v2/.vide/01_BUSINESS_RULES.md` linhas 82–84 |
| 10% PIB global blockchain até 2027 | `pdw-site-v2/docs/Bussines.md` linha 3 (Fórum Económico Mundial) |
