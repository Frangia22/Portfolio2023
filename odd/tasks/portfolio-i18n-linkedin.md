# Portfolio i18n + LinkedIn alignment

Objective: Align portfolio with LinkedIn rewrite (Senior Software Engineer, AI-native full-stack) in English (root) and Spanish (/es), then A11y + Mobbin UI. Palette unchanged.
Branch: `feat/i18n-linkedin-alignment`
Delivery: ask-on-risk (ask chain strategy before 2nd commit)
Test runner: `pnpm check` + `pnpm build` in `front/` (no unit runner; parity via `satisfies SiteContent`)

## Specs

- S1: "tanto el Linkedin como portfolio muestren la misma información, lo vamos a tener en español y english"
- S2: English is primary at `devfg.com.ar`; Spanish under `/es` (user decision)
- S3: Content source of truth is `front/linkedin_profile_rewrite.md`; never publish `[placeholder]` text
- S4: "Toma idea de Mobbin para plantear mejoras a nivel UI/UX/A11y" — LanguageSwitch, Toast, CopyEmail, CommandPalette, tabbed AboutTerminal, timeline fill; keep palette
- S5: Hero Option B for copy; meta Option A; metrics 60%/85%/99.9% in About; remove "20+ proyectos"
- S6: Experience mirrors LinkedIn roles/dates; stack LinkedIn-only categories; Services → What I bring pillars
- S7: A11y: contrast, skip link, reduced motion, form labels, mobile menu inert/Esc, focus-visible
- S8: SEO: hreflang, sitemap, og images per locale, JSON-LD Senior Software Engineer, updated llms.txt

## Tasks

| ID | Specs | Route | Status | Evidence |
|----|-------|-------|--------|----------|
| T0 | S2, S8 | inline | done | ec3d64e |
| T1 | S1, S3, S5, S6 | inline | done | SiteContent en/es |
| T2 | S1, S2, S8 | inline | done | Layout + /es pages |
| T3 | S1, S5, S6 | inline | done | Sections wired |
| T4 | S4, S7 | inline | done | A11y tokens + forms |
| T5 | S4 | inline | done | Palette UI patterns |
| T6 | S1–S8 | inline | done | check+build; browser EN/ES; verifier |

## Log

- L1: User asked for LinkedIn/portfolio alignment (ES+EN), Mobbin UI/UX/A11y ideas keeping palette, then implement plan with Grok 4.7; English primary chosen.
- L2: Phase 0 started — branch `feat/i18n-linkedin-alignment`, feature doc, deps, astro i18n+sitemap.
- L3: Phases 1–5 implemented inline (content model, i18n/SEO, sections, a11y, Mobbin UI). `pnpm check` and `pnpm build` green. Delivery: feature-branch-chain.
- L4: Audits: 14/14 pages with hreflang; no placeholders in dist; no cross-locale UI leaks on home pages.
- L5: Independent verifier: S1/S2/S5–S8 PASS; S3/S4 PARTIAL (metric echo in pillars fixed; Copy email waits on profile.email). Browser EN+ES hero verified.
