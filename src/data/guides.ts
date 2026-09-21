// Aggregated guide data across all countries.
// Country-specific content lives in guides-us.ts, guides-uk.ts, guides-ca.ts
// (see the Country Wise/ folder for each country's how-to master list).
// Pages import from this module only — never from the country files directly.

import type { Guide, CountryCode, Country } from './types';
import { countries, categories } from './types';
import { guides as usGuides } from './guides-us';
import { guides as ukGuides } from './guides-uk';
import { guides as caGuides } from './guides-ca';

export type { Step, Guide, CountryCode, Country } from './types';
export { countries, categories } from './types';

/** All guides, every country, in a stable order (US first to preserve legacy listing order). */
export const guides: Guide[] = [...usGuides, ...ukGuides, ...caGuides];

/** Total step count across all guides — used by hero/stats copy. */
export const totalSteps = guides.reduce((n, g) => n + g.steps.length, 0);

/** Guides for one country. */
export function guidesForCountry(code: CountryCode): Guide[] {
    return guides.filter((g) => g.country === code);
}

/** Country record lookup by code. */
export function getCountry(code: CountryCode): Country {
    const c = countries.find((x) => x.code === code);
    if (!c) throw new Error(`Unknown country code: ${code}`);
    return c;
}

/** URL path helper: guides live at [prefix]/guides/[slug]/. US has no prefix (legacy URLs). */
export function guidePath(g: Guide): string {
    return `${getCountry(g.country).pathPrefix}/guides/${g.slug}/`;
}
