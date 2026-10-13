// SEO + health audit for the built GovSteps site (dist/).
// Run: node scripts/seo-audit.mjs
// Checks: titles/descriptions/canonical/h1/OG/JSON-LD uniqueness + presence,
// internal-link resolution, sitemap coverage, robots.txt, img alt, TranslateGuide.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const SITE = 'https://govsteps.com';

function walk(dir, out = []) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p, out);
        else if (e.name.endsWith('.html')) out.push(p);
    }
    return out;
}

const pages = walk(DIST);
const rel = (p) => '/' + path.relative(DIST, p).replace(/\\/g, '/').replace(/index\.html$/, '');
const pageSet = new Set(pages.map(rel));
const pageIds = new Map(); // url -> Set of ids
const issues = [];
const warn = (msg) => issues.push(msg);

const titles = new Map();
const descs = new Map();
let guidePages = 0, translatePages = 0, jsonLdPages = 0, reviewedPages = 0;
let imgNoAlt = 0, imgTotal = 0;

const tag = (html, name) => {
    const m = html.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'));
    return m ? m[1].trim() : null;
};
const meta = (html, attr, val) => {
    const m = html.match(new RegExp(`<meta\\s+[^>]*${attr}=["']${val}["'][^>]*>`, 'i'));
    if (!m) return null;
    const c = m[0].match(/content="([^"]*)"/i);
    return c ? c[1] : '';
};

for (const file of pages) {
    const url = rel(file);
    const html = fs.readFileSync(file, 'utf8');
    const isGuide = /^\/(guides|uk\/guides|can\/guides|uae\/guides)\//.test(url);

    // ids for anchor checks
    const ids = new Set([...html.matchAll(/id=["']([^"']+)["']/g)].map((m) => m[1]));
    pageIds.set(url, ids);

    // title
    const title = tag(html, 'title');
    if (!title) warn(`${url}: missing <title>`);
    else {
        if (title.length < 10 || title.length > 75) warn(`${url}: title length ${title.length}: "${title}"`);
        if (titles.has(title)) warn(`${url}: duplicate title with ${titles.get(title)}`);
        titles.set(title, url);
    }
    // description
    const desc = meta(html, 'name', 'description');
    if (desc === null) warn(`${url}: missing meta description`);
    else {
        if (desc.length < 50 || desc.length > 175) warn(`${url}: description length ${desc.length}`);
        if (descs.has(desc)) warn(`${url}: duplicate description with ${descs.get(desc)}`);
        descs.set(desc, url);
    }
    // canonical (rel() already ends with '/' for index pages)
    const canon = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    if (!canon) warn(`${url}: missing canonical`);
    else {
        const expected = SITE + url;
        if (canon[1] !== expected) warn(`${url}: canonical ${canon[1]} != ${expected}`);
    }
    // h1
    const h1s = [...html.matchAll(/<h1[\s>]/gi)];
    if (h1s.length !== 1) warn(`${url}: ${h1s.length} <h1> tags`);
    // OG
    for (const prop of ['og:title', 'og:description', 'og:image', 'og:type']) {
        if (meta(html, 'property', prop) === null) warn(`${url}: missing ${prop}`);
    }
    // JSON-LD on guides
    if (isGuide) {
        guidePages++;
        if (html.includes('application/ld+json')) jsonLdPages++;
        else warn(`${url}: guide missing JSON-LD`);
        if (html.includes('data-translate-guide')) translatePages++;
        else warn(`${url}: guide missing TranslateGuide`);
        if (/Reviewed/i.test(html)) reviewedPages++;
        else warn(`${url}: guide missing Reviewed text`);
    }
    // img alt
    for (const img of html.matchAll(/<img[^>]*>/gi)) {
        imgTotal++;
        if (!/alt=["'][^"']*["']/.test(img[0])) imgNoAlt++;
    }
}

// internal links
let linkCount = 0, brokenLinks = 0;
for (const file of pages) {
    const url = rel(file);
    const html = fs.readFileSync(file, 'utf8');
    for (const m of html.matchAll(/href=["']([^"']+)["']/gi)) {
        const href = m[1];
        if (!href.startsWith('/') || href.startsWith('//')) continue;
        // Skip asset + feed URLs — only page links are checked here.
        if (/\.(css|js|svg|png|jpg|jpeg|webp|ico|xml|json|txt|pdf|mp3|mp4)$/i.test(href.split('#')[0])) continue;
        linkCount++;
        const [p, frag] = href.split('#');
        const target = p === '' ? url : p.replace(/\/$/, '') || '/';
        const normTarget = target.length > 1 ? target.replace(/\/$/, '') : target;
        const normPagesEarly = new Set([...pageSet].map((u) => (u.length > 1 ? u.replace(/\/$/, '') : u)));
        if (p !== '' && !normPagesEarly.has(normTarget)) {
            warn(`${url}: broken link -> ${href}`);
            brokenLinks++;
            continue;
        }
        if (frag) {
            const ids = pageIds.get(p === '' ? url : target) ?? pageIds.get(target + '/');
            if (ids && !ids.has(frag)) warn(`${url}: broken anchor #${frag} -> ${href}`);
        }
    }
}

// sitemap (normalize: strip trailing slash except root, both sides)
const norm = (u) => (u.length > 1 ? u.replace(/\/$/, '') : u);
const sm = fs.readFileSync('public/sitemap.xml', 'utf8');
const smUrls = new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => norm(m[1].replace(SITE, '')) || '/'));
const normPages = new Set([...pageSet].map(norm));
let smMissing = 0, smExtra = 0;
for (const u of normPages) {
    if (!smUrls.has(u)) { warn(`sitemap missing page: ${u}`); smMissing++; }
}
for (const u of smUrls) {
    if (!normPages.has(u)) { warn(`sitemap has stale URL: ${u}`); smExtra++; }
}

// robots
const robots = fs.existsSync('public/robots.txt') ? fs.readFileSync('public/robots.txt', 'utf8') : '';
if (!robots.includes('Sitemap:')) warn('robots.txt missing Sitemap line');

console.log(`Pages: ${pages.length} | Guides: ${guidePages} (JSON-LD: ${jsonLdPages}, Translate: ${translatePages}, Reviewed: ${reviewedPages})`);
console.log(`Internal links checked: ${linkCount} (broken: ${brokenLinks})`);
console.log(`Sitemap: ${smUrls.size} URLs (missing: ${smMissing}, stale: ${smExtra})`);
console.log(`Images: ${imgTotal} (missing alt: ${imgNoAlt})`);
console.log(`Issues: ${issues.length}`);
for (const i of issues.slice(0, 60)) console.log(' -', i);
if (issues.length > 60) console.log(` ... and ${issues.length - 60} more`);
process.exit(issues.length ? 1 : 0);
