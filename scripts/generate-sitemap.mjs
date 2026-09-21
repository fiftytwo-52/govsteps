// Generates public/sitemap.xml directly from the country-wise guide data files
// (guides-us.ts, guides-uk.ts, guides-ca.ts, aggregated by guides.ts) —
// keeps the sitemap in perfect sync with the published guides.
// Run: node --experimental-strip-types scripts/generate-sitemap.mjs
import { writeFileSync } from 'node:fs';
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
const { guides, guidePath } = await import('../src/data/guides.ts');

const SITE = 'https://govsteps.com';

// Static pages (404 is excluded — never indexed).
const staticPaths = ['/', '/uk/', '/can/', '/about/', '/contact/', '/privacy/', '/terms/'];

const entries = [
    ...staticPaths.map((loc) => ({ loc, lastmod: undefined })),
    // One entry per guide; lastmod from the guide's updatedAt year.
    ...guides.map((g) => ({ loc: guidePath(g), lastmod: `${g.updatedAt}-01-01` })),
];

const urls = entries
    .map(
        (e) =>
            `  <url>\n    <loc>${SITE}${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''
            }\n  </url>`
    )
    .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml written: ${entries.length} URLs (${guides.length} guides + ${staticPaths.length} static pages)`);
