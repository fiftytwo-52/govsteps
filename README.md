<div align="center">

<img src="public/favicon.svg" width="72" alt="GovSteps logo" />

# GovSteps

**Clear, step-by-step guides for government processes in the United States, United Kingdom, and Canada.**

[Live Site](https://govsteps.com) · [Sitemap](https://govsteps.com/sitemap.xml)

Taxes · Immigration · Passports · Insurance · Loans · Benefits · Business · More

</div>

---

## About

GovSteps helps natives, immigrants, and expats navigate government paperwork without the confusion. Every guide breaks a bureaucratic process into numbered, actionable steps — with required documents, costs, timelines, official links, and plain-English explanations of jargon.

- **118 in-depth guides** across 3 countries (US · UK · Canada)
- **1,000+ individual steps** with time estimates and cost breakdowns
- **Auto-linked glossary** — complex terms are explained inline
- **Document checklists, FAQs, and info boxes** on every guide
- **Dark mode** support and a clean, fast, static-first design

## Guide Coverage

| Country | Path | Topics |
| :------ | :--- | :----- |
| 🇺🇸 United States | `/guides/…` | Taxes (W-9, 1099, Schedule C), immigration (green card, citizenship), Social Security, Medicare/Medicaid, passports, insurance, loans (FHA, VA, student), business (LLC, EIN), benefits (SNAP, WIC), courts |
| 🇬🇧 United Kingdom | `/uk/guides/…` | Self Assessment, NI number, passports, visas, British citizenship, EU Settlement, Universal Credit, NHS, tax refunds (P50, P55, R40), insurance, loans |
| 🇨🇦 Canada | `/can/guides/…` | SIN, PR card, Express Entry, citizenship, CRA My Account, taxes (T1, T2200, T5), provincial health insurance, passports, benefits, loans |

## Tech Stack

- [Astro](https://astro.build) — static site generator (126 pages, zero JS by default)
- [Tailwind CSS v4](https://tailwindcss.com) — styling via the Vite plugin
- TypeScript — all guide content lives in typed data files
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting and global CDN

## Project Structure

```text
govsteps/
├── public/                  # Static assets copied as-is
│   ├── favicon.svg/.ico     # Staircase logo mark
│   ├── og-image.svg         # Social sharing image
│   ├── robots.txt
│   └── sitemap.xml          # Generated (see scripts below)
├── scripts/
│   ├── generate-sitemap.mjs # Regenerates public/sitemap.xml from guide data
│   └── generate-all-steps.mjs
├── src/
│   ├── components/          # GuidePage, StepTimeline, Faq, DocumentChecklist, …
│   ├── data/
│   │   ├── guides-us.ts     # US guide content
│   │   ├── guides-uk.ts     # UK guide content
│   │   ├── guides-ca.ts     # Canada guide content
│   │   ├── guides.ts        # Combined registry + helpers
│   │   ├── glossary.ts      # Auto-linked term definitions
│   │   └── types.ts         # Guide / Step / Country interfaces
│   ├── layouts/Layout.astro # Head, header, footer, dark mode
│   ├── pages/               # File-based routes (/, /uk/, /can/, /guides/[slug], …)
│   └── styles/global.css    # Geist-inspired design tokens
└── astro.config.mjs         # site: https://govsteps.com
```

## Commands

All commands run from the project root:

| Command           | Action                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Install dependencies                                |
| `npm run dev`     | Start local dev server at `localhost:4321`          |
| `npm run build`   | Build the production site to `./dist/`              |
| `npm run preview` | Preview the production build locally                |
| `npm run sitemap` | Regenerate `public/sitemap.xml` from guide data     |
| `npm run deploy`  | Build and deploy to Cloudflare Pages                |

## Deployment

The site deploys to **Cloudflare Pages** (project: `govsteps`):

```sh
npm run deploy
```

This runs the build, then uploads `dist/` via Wrangler. The production
branch is `main`. Custom domain: **govsteps.com** (configured in the
Cloudflare dashboard under Workers & Pages → govsteps → Custom domains).

## Content Workflow

Guides are plain TypeScript objects in [`src/data/`](src/data/). To add a guide:

1. Add a `Guide` object to the relevant country file (`guides-us.ts`, `guides-uk.ts`, or `guides-ca.ts`)
2. Run `npm run sitemap` to include it in `public/sitemap.xml`
3. Run `npm run build` to verify, then `npm run deploy`

Each guide defines its own steps, documents, FAQs, and related guides — pages, metadata, canonical URLs, and structured data are all generated automatically.

## License

All rights reserved.
