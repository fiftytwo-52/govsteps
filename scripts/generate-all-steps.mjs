// Generates ../ALL_STEPS.md directly from the country-wise guide data files
// (guides-us.ts, guides-uk.ts, guides-ca.ts, aggregated by guides.ts) —
// guarantees the research markdown is always in perfect sync with the published guides.
// Run: node --experimental-strip-types scripts/generate-all-steps.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { registerHooks } from 'node:module';

// The data files use extensionless relative imports (Astro/Vite resolves them,
// plain Node ESM does not). Retry failed relative specifiers with a .ts extension.
registerHooks({
    resolve(specifier, context, nextResolve) {
        try {
            return nextResolve(specifier, context);
        } catch (err) {
            if (specifier.startsWith('.') && !specifier.endsWith('.ts')) {
                return nextResolve(`${specifier}.ts`, context);
            }
            throw err;
        }
    },
});

// Dynamic import so it runs AFTER the resolve hooks above are registered.
const { guides, countries, getCountry } = await import('../src/data/guides.ts');

const categoryTitles = {
    taxes: 'Taxes',
    immigration: 'Immigration',
    ids: 'IDs & Licenses',
    benefits: 'Benefits & Health',
    business: 'Business',
    accidents: 'Accidents & Emergencies',
    students: 'Students',
    civic: 'Civic Life',
};

const phaseLabels = {
    before: 'Before You Go',
    go: 'Go',
    fill: 'Fill / Prepare',
    submit: 'Submit & Pay',
    wait: 'Wait',
    followup: 'Follow Up',
    receive: 'Receive',
};

const totalSteps = guides.reduce((sum, g) => sum + g.steps.length, 0);

// Group by country first, then category — mirrors the country-wise data files.
const byCountry = {};
for (const g of guides) (byCountry[g.country] ??= {}), (byCountry[g.country][g.category] ??= []).push(g);

const countGuides = (countryCode) =>
    Object.values(byCountry[countryCode] ?? {}).reduce((sum, list) => sum + list.length, 0);

let out = `# ALL STEPS — GovSteps Master Research File

> **Source of truth:** \`govsteps/src/data/guides-us.ts\` (US), \`guides-uk.ts\` (UK), and \`guides-ca.ts\` (Canada) — aggregated by \`guides.ts\`. This file mirrors every guide and every step exactly as published on the site.
>
> **${guides.length} guides · ${totalSteps} steps** across ${countries.length} countries — US (${countGuides('us')} guides), UK (${countGuides('uk')} guides), Canada (${countGuides('ca')} guides).
>
> **How to keep this file in sync:** whenever a step is added, removed, or edited in a country data file, regenerate this file with:
> \`cd govsteps && node --experimental-strip-types scripts/generate-all-steps.mjs\`

**Phase legend:** ${Object.entries(phaseLabels).map(([k, v]) => `\`${k}\` = ${v}`).join(' · ')}

---

## Table of Contents

`;

for (const country of countries) {
    const catMap = byCountry[country.code] ?? {};
    out += `\n### ${country.name} (${countGuides(country.code)} guides)\n`;
    for (const [cat, catGuides] of Object.entries(catMap)) {
        out += `- [${country.short} — ${categoryTitles[cat] ?? cat} (${catGuides.length} guides)](#${(country.name + '-' + (categoryTitles[cat] ?? cat)).toLowerCase().replace(/[^a-z0-9]+/g, '-')})\n`;
    }
}

out += '\n---\n\n';

for (const country of countries) {
    const catMap = byCountry[country.code] ?? {};
    if (!Object.keys(catMap).length) continue;
    out += `# ${country.name}\n\n`;
    for (const [cat, catGuides] of Object.entries(catMap)) {
        out += `## ${country.short} — ${categoryTitles[cat] ?? cat}\n\n`;
        for (const g of catGuides) {
            const freshness = g.updatedAt ? `${g.updatedAt}-Latest` : '2024-Latest';
            out += `### ${g.title}\n`;
            out += `**Slug:** \`${g.slug}\` · **Country:** ${country.short} · **URL:** \`/guides/${g.slug}\` (US) or \`/guides/${g.slug}\` under the country prefix (\`${country.pathPrefix || '/'}\`) · **Freshness:** ${freshness}\n`;
            out += `**Difficulty:** ${g.difficulty} · **Time:** ${g.totalTime} · **Cost:** ${g.totalCost}\n\n`;
            g.steps.forEach((s, i) => {
                const meta = [s.phase, s.duration ?? '—', s.cost ? `cost: ${s.cost}` : null]
                    .filter(Boolean)
                    .join(' · ');
                out += `${i + 1}. **${s.title}** — ${meta}\n`;
            });
            if (g.documents.length) {
                out += `\n**Documents:** ${g.documents.join(' · ')}\n`;
            }
            out += `\n`;
        }
        out += '---\n\n';
    }
}

out += `## Sync Checklist (for future edits)

When adding or editing guides in \`govsteps/src/data/\`:

- [ ] Add/update the guide's data in the right country file: \`guides-us.ts\`, \`guides-uk.ts\`, or \`guides-ca.ts\`
- [ ] Set the guide's \`country\` code and \`updatedAt\` (rendered as "YYYY-Latest" freshness labels on the site)
- [ ] Regenerate this file: \`cd govsteps && node --experimental-strip-types scripts/generate-all-steps.mjs\`
- [ ] Run \`npm run build\` in \`govsteps/\` to verify nothing broke
`;

mkdirSync(new URL('../', import.meta.url), { recursive: true });
writeFileSync(new URL('../../ALL_STEPS.md', import.meta.url), out);
console.log(`Wrote ALL_STEPS.md — ${guides.length} guides, ${totalSteps} steps (US ${countGuides('us')}, UK ${countGuides('uk')}, CA ${countGuides('ca')}).`);
