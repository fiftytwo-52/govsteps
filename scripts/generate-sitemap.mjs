// Generates public/sitemap.xml directly from the country-wise guide data files
// (guides-us.ts, guides-uk.ts, guides-ca.ts, aggregated by guides.ts) —
// with precise lastmod dates, Google Image Sitemap extensions, and topic category routes.
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

// Dynamic imports so they run AFTER the resolve hooks above are registered.
const { guides, guidePath, categories } = await import('../src/data/guides.ts');
const { getGuideEditorial } = await import('../src/data/types.ts');
const { getGuideHero } = await import('../src/data/guideImages.ts');

const SITE = 'https://govsteps.com';

// Static core pages (404 is excluded — never indexed).
const staticPaths = ['/', '/uk/', '/can/', '/uae/', '/about/', '/contact/', '/privacy/', '/terms/', '/calculators/gcc-gratuity/', '/calculators/uk-ir35/'];

// Topic Category Pages (all categories x 4 countries).
// lastmod = the most recent recorded review date among that topic's guides
// in that country. Topics with no recorded review date get NO lastmod —
// never a fabricated one. (An earlier version hardcoded '2026-03-01',
// which predates the govsteps.com domain itself, 2026-09-12.)
const topicLastmod = (countryCode, categoryId) => {
  const dates = guides
    .filter((g) => g.country === countryCode && g.category === categoryId)
    .map((g) => getGuideEditorial(g).lastReviewedDate)
    .filter((d) => d !== null);
  if (dates.length === 0) return undefined;
  return dates.sort().at(-1);
};

const topicPaths = [
  ...categories.map((c) => ({ loc: `/topics/${c.id}/`, lastmod: topicLastmod('us', c.id) })),
  ...categories.map((c) => ({ loc: `/uk/topics/${c.id}/`, lastmod: topicLastmod('uk', c.id) })),
  ...categories.map((c) => ({ loc: `/can/topics/${c.id}/`, lastmod: topicLastmod('ca', c.id) })),
  ...categories.map((c) => ({ loc: `/uae/topics/${c.id}/`, lastmod: topicLastmod('ae', c.id) })),
];

const entries = [
  ...staticPaths.map((loc) => ({ loc })),
  ...topicPaths.map((t) => ({ loc: t.loc, lastmod: t.lastmod })),
  ...guides.map((g) => {
    const editorial = getGuideEditorial(g);
    const hero = getGuideHero(g);
    return {
      loc: guidePath(g),
      lastmod: editorial.lastReviewedDate,
      image: hero
        ? {
            loc: `${SITE}${hero.src}`,
            title: g.title,
            caption: hero.alt,
          }
        : undefined,
    };
  }),
];

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

const urlNodes = entries
  .map((e) => {
    let node = `  <url>\n    <loc>${SITE}${e.loc}</loc>`;
    if (e.lastmod) {
      node += `\n    <lastmod>${e.lastmod}</lastmod>`;
    }
    if (e.image) {
      node += `\n    <image:image>\n      <image:loc>${escapeXml(e.image.loc)}</image:loc>\n      <image:title>${escapeXml(e.image.title)}</image:title>\n      <image:caption>${escapeXml(e.image.caption)}</image:caption>\n    </image:image>`;
    }
    node += `\n  </url>`;
    return node;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlNodes}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml written: ${entries.length} URLs (${guides.length} guides, ${topicPaths.length} topic pages, ${staticPaths.length} static pages)`);
