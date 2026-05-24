# NextStep Website — Design Spec

**Date:** 2026-05-24
**Owner:** Zeynal
**Status:** Approved

## Goal

Rebuild nextstep.az from a single static HTML page into a premium, SEO-optimized 5-page Next.js site that positions NextStep as Azerbaijan's first specialized hospitality internship and talent supply company — credible to international hotels as a B2B partner, attractive to students as a career launchpad.

## Tech stack

- Next.js 15, App Router, TypeScript (strict)
- Tailwind CSS v4 (`@theme` tokens)
- Fonts via `next/font/google`: Playfair Display (700) for headings, Inter (400/500/600) for body
- No client-side router libraries, no animation libraries. Subtle scroll-reveal via a small intersection-observer hook.
- Static assets in `public/` (logo migrated from repo root)

## Project structure

```
src/
  app/
    layout.tsx               # root metadata, OG/Twitter, JSON-LD, fonts
    page.tsx                 # Home
    for-hotels/page.tsx
    for-students/page.tsx
    about/page.tsx
    contact/page.tsx
    sitemap.ts
    robots.ts
    globals.css
  components/
    Header.tsx
    Footer.tsx
    Button.tsx
    SectionHeading.tsx
    HeroSection.tsx
    FeatureCard.tsx
    ProcessStep.tsx
    DepartmentCard.tsx
    CTASection.tsx
    ContactForm.tsx
    Reveal.tsx               # IntersectionObserver wrapper
    icons/                   # inline SVG icon set
  lib/
    site.ts                  # brand constants (name, url, email, phone)
    nav.ts                   # navigation items
    content/
      en.ts                  # all page copy (typed)
    departments.ts           # shared operational departments list
public/
  NextStepLogo.svg
docs/superpowers/specs/      # this doc lives here
```

The `src/lib/content/en.ts` pattern is forward-compatible with `[locale]` segments. Adding RU/AZ later means creating sibling files and wrapping pages in a locale segment — no copy changes elsewhere.

## Design tokens (Tailwind `@theme`)

```
--color-navy-900: #0A1F33  /* primary dark */
--color-navy-800: #11304D
--color-navy-700: #1A4368
--color-gold-500: #C9A961  /* primary CTA / accent */
--color-gold-400: #D9BE7E  /* hover */
--color-gold-300: #E5D4A6  /* on-dark surface accents */
--color-gray-50:  #F7F8FA
--color-gray-100: #EEF0F3
--color-gray-200: #DDE2E8
--color-gray-500: #6B7785
--color-gray-700: #3A4453
--color-gray-900: #0F1620
--font-display: var(--font-playfair)
--font-sans:    var(--font-inter)
```

## Page inventory

1. **Home (`/`)** — Hero · What is NextStep · Problem We Solve · Why NextStep · How It Works · Candidate Profiles · Operational Departments · University Pipeline · 2026 Partner Network · Final CTA
2. **For Hotels (`/for-hotels`)** — Hero · Staffing Problems · Our Solution · Why Hotels Choose NextStep · Operational Departments · Simple Process · Final CTA
3. **For Students (`/for-students`)** — Hero · Who Can Apply · Internship Departments · Benefits · Application Steps · CTA
4. **About (`/about`)** — Who We Are · Our Mission · Our Vision · Why Azerbaijan · University Pipeline · Long-term goal
5. **Contact (`/contact`)** — Form + contact info + dual CTAs (hotels / students)

Exact copy from brief is used verbatim where provided.

## Components

| Component | Purpose |
|-----------|---------|
| `Header` | Sticky transparent-on-hero / solid-on-scroll header with nav + mobile menu |
| `Footer` | Brand + nav + contact + copyright + legal stub |
| `Button` | `variant: primary \| secondary \| ghost`, `as: button \| a` — gold primary, navy secondary |
| `SectionHeading` | Eyebrow (gold uppercase) + H2 (Playfair) + optional intro paragraph |
| `HeroSection` | Dark navy bg, gold accent rule, H1, sub, supporting line, CTA group, trust pills |
| `FeatureCard` | Icon + title + body, hover lift |
| `ProcessStep` | Numbered step (gold circle) + title + body, connector line on desktop |
| `DepartmentCard` | Icon + department name + short blurb |
| `CTASection` | Full-bleed navy section with headline + CTA buttons |
| `ContactForm` | Client component; validation; mailto fallback |
| `Reveal` | IntersectionObserver-based scroll-in (opacity+translateY only) |

## SEO

- Per-page `metadata` exports with the exact titles/descriptions from the brief
- Root layout: `metadataBase`, OG image (uses logo for v1), Twitter `summary_large_image`
- JSON-LD `Organization` in root layout — name, url, logo, contactPoint (email, phone, areaServed)
- `app/sitemap.ts` and `app/robots.ts` (App Router conventions)
- Semantic landmarks; H1 once per page; canonical via metadata

## Accessibility

- Focus rings: `outline outline-2 outline-offset-2 outline-gold-500`
- All interactive elements keyboard-reachable
- Form: associated labels, `aria-invalid` and `aria-describedby` for errors
- Decorative SVG `aria-hidden`; meaningful images have alt
- Color contrast checked: navy/white ≥ 14:1, gold-500/navy-900 ≥ 5:1, gray-700/white ≥ 9:1

## Animation policy

- Scroll-reveal: opacity 0 → 1, translateY 8px → 0, duration 500ms, once
- Hover: 150ms ease, subtle (translateY -2px for cards, color shift for buttons)
- No sliders, parallax, autoplaying media, or attention-grabbing motion

## Contact form behavior (v1)

Client-side validated form; on submit, opens `mailto:office@nextstep.az` with prefilled subject and body containing the form fields. Documented clearly so a future API route can swap in without changing the component contract. No backend required for launch.

## Deployment

Built deployment-agnostic. No `output: 'export'` set — that's a one-line addition if static hosting on GitHub Pages is chosen later. Vercel deploy works out of the box.

## Out of scope (v1)

- RU/AZ translations (structure ready, copy not yet provided)
- Real backend for contact form
- Blog / news section
- CMS integration
- Authentication / intern application portal
