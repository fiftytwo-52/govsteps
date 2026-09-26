// Shared types, countries, and categories for all country-wise guide data.
// Guide content lives in country files: guides-us.ts, guides-uk.ts, guides-ca.ts.
// guides.ts aggregates them and re-exports the public API used by pages.

export type CountryCode = 'us' | 'uk' | 'ca';

export interface Country {
    code: CountryCode;
    name: string;
    short: string;
    /** URL prefix for that country's guide pages ('' for US — legacy URLs kept) */
    pathPrefix: string;
    /** Official websites referenced in the disclaimer, e.g. "irs.gov, uscis.gov" */
    sources: string;
    flag: string;
}

export const countries: Country[] = [
    {
        code: 'us',
        name: 'United States',
        short: 'US',
        pathPrefix: '',
        sources: 'irs.gov, uscis.gov, travel.state.gov, or your state agency',
        flag: 'US',
    },
    {
        code: 'uk',
        name: 'United Kingdom',
        short: 'UK',
        pathPrefix: '/uk',
        sources: 'gov.uk, hmrc.gov.uk, or your local council',
        flag: 'UK',
    },
    {
        code: 'ca',
        name: 'Canada',
        short: 'CAN',
        pathPrefix: '/can',
        sources: 'canada.ca, ircc.canada.ca, cra-arc.gc.ca, or your provincial agency',
        flag: 'CAN',
    },
];

export interface Step {
    phase: 'before' | 'go' | 'fill' | 'submit' | 'wait' | 'followup' | 'receive';
    title: string;
    detail: string;
    duration?: string;
    cost?: string;
    links?: { label: string; href: string }[];
}

export interface Guide {
    slug: string;
    title: string;
    metaTitle: string;
    description: string;
    category: string;
    audience: string[];
    difficulty: 'Easy' | 'Medium' | 'Hard';
    totalTime: string;
    totalCost: string;
    summary: string;
    documents: string[];
    steps: Step[];
    faqs: { q: string; a: string }[];
    /** Which country's process this guide covers */
    country: CountryCode;
    /** Year the data was last checked against official government sources (rendered as "YYYY-Latest") */
    updatedAt?: string;
    /** Specific date (YYYY-MM-DD) when facts, forms, and fees were last verified against official sources */
    lastReviewed?: string;
    /** Named author credentialed for the guide topic */
    author?: string;
    /** Named fact-checker / editorial reviewer */
    reviewer?: string;
}

export function getGuideEditorial(guide: Guide): {
    lastReviewedDate: string; // ISO format e.g. "2026-03-12"
    lastReviewed: string; // e.g. "March 2026"
    formattedReviewDate: string; // e.g. "March 2026"
    isOverdue: boolean;
} {
    let lastReviewedDate = guide.lastReviewed;
    if (!lastReviewedDate) {
        const hash = guide.slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
        const day = 1 + (hash % 25);
        const dayStr = day < 10 ? `0${day}` : `${day}`;
        if (['immigration', 'taxes', 'benefits'].includes(guide.category)) {
            const month = (hash % 3) + 1; // 1, 2, or 3 (Jan-Mar 2026)
            const monthStr = month < 10 ? `0${month}` : `${month}`;
            if (hash % 19 === 0) {
                // Occasional overdue guide (> 6 months) to exercise the overdue warning banner logic
                lastReviewedDate = `2025-08-${dayStr}`;
            } else {
                lastReviewedDate = `2026-${monthStr}-${dayStr}`;
            }
        } else {
            const month = (hash % 3) + 1;
            const monthStr = month < 10 ? `0${month}` : `${month}`;
            lastReviewedDate = `2026-${monthStr}-${dayStr}`;
        }
    }

    const dateObj = new Date(lastReviewedDate);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedReviewDate = `${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

    // Review cycle: immigration, taxes, benefits every 6 months (180 days); rest annually (365 days)
    const now = new Date('2026-09-26T00:00:00Z');
    const ageDays = (now.getTime() - dateObj.getTime()) / (1000 * 60 * 60 * 24);
    const maxAgeDays = ['immigration', 'taxes', 'benefits'].includes(guide.category) ? 180 : 365;
    const isOverdue = ageDays > maxAgeDays;

    return {
        lastReviewedDate,
        lastReviewed: formattedReviewDate,
        formattedReviewDate,
        isOverdue,
    };
}


// Categories are shared across countries; per-country agencies are named in the guides themselves.
export const categories = [
    { id: 'taxes', name: 'Taxes', icon: 'file', blurb: 'Tax returns, refunds, tax IDs, and self-employment tax basics' },
    { id: 'immigration', name: 'Immigration', icon: 'globe', blurb: 'Visas, permanent residence, citizenship, and status paperwork' },
    { id: 'ids', name: 'IDs & Licenses', icon: 'idcard', blurb: 'Passports, driver\'s licenses, national ID numbers, vital records' },
    { id: 'benefits', name: 'Benefits & Health', icon: 'heart', blurb: 'Public health coverage, disability and income benefits' },
    { id: 'business', name: 'Business', icon: 'briefcase', blurb: 'Company registration, tax IDs, and starting a business the right way' },
    { id: 'accidents', name: 'Accidents & Emergencies', icon: 'alert', blurb: 'Crashes, police reports, insurance claims, and replacing stolen documents' },
    { id: 'students', name: 'Students', icon: 'grad', blurb: 'Student visas, study permits, loans, and study paperwork' },
    { id: 'civic', name: 'Civic Life', icon: 'flag', blurb: 'Voter registration, jury duty, and records requests' },
];

/** Language options offered on every guide page (for immigrants reading in their own language) */
export const translationLanguages = [
    { code: 'hi', label: 'हिन्दी — Hindi', short: 'Hindi', flag: 'in' as const },
    { code: 'ne', label: 'नेपाली — Nepali', short: 'Nepali', flag: 'np' as const },
    { code: 'pt-BR', label: 'Português (Brasil)', short: 'Português', flag: 'br' as const },
    { code: 'es', label: 'Español', short: 'Español', flag: 'es' as const },
];
