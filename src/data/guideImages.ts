// Mapping tables for guide hero illustrations, alt text, and OG cards.
// Authoritative source: govsteps-images/IMAGE-PLACEMENT-GUIDE.md

import type { Guide } from './types';

export interface GuideHero {
  src: string;
  webpSrc: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

// 12 dedicated OG cards mapped to guide slugs
export const dedicatedOgCards: Record<string, string> = {
  'how-to-apply-for-itin': '/images/og/og-itin-guide.png',
  'how-to-get-green-card-through-marriage': '/images/og/og-green-card-marriage.png',
  'how-to-apply-for-citizenship': '/images/og/og-citizenship.png',
  'how-to-get-a-passport': '/images/og/og-us-passport.png',
  'how-to-file-taxes-first-time': '/images/og/og-file-taxes.png',
  'how-to-start-an-llc': '/images/og/og-start-llc.png',
  'how-to-get-drivers-license-new-immigrant': '/images/og/og-drivers-license.png',
  'how-to-replace-social-security-card': '/images/og/og-replace-ssn-card.png',
  'how-to-apply-for-aca-health-insurance': '/images/og/og-aca-insurance.png',
  'how-to-register-to-vote': '/images/og/og-register-vote.png',
  'how-to-file-the-fafsa': '/images/og/og-fafsa.png',
  'how-to-get-a-copy-of-birth-certificate': '/images/og/og-birth-certificate.png',
};

// Fallback OG cards by category
export const categoryFallbackOgCards: Record<string, string> = {
  taxes: '/images/og/og-file-taxes.png',
  immigration: '/images/og/og-citizenship.png',
  ids: '/images/og/og-drivers-license.png',
  benefits: '/images/og/og-aca-insurance.png',
  business: '/images/og/og-start-llc.png',
  accidents: '/images/og/og-drivers-license.png',
  students: '/images/og/og-fafsa.png',
  civic: '/images/og/og-register-vote.png',
};

export function getGuideOgImage(guide: Guide, siteOrigin: string = 'https://govsteps.com'): string {
  const cardPath = dedicatedOgCards[guide.slug] || categoryFallbackOgCards[guide.category] || '/images/og/og-itin-guide.png';
  return `${siteOrigin.replace(/\/$/, '')}${cardPath}`;
}

interface HeroMapping {
  file: string;
  alt: string;
  caption: string;
  slugPatterns: string[];
  categories?: string[];
}

const heroMappings: HeroMapping[] = [
  {
    file: 'illustration-passport',
    alt: 'Passport booklet with official application documents',
    caption: 'Official passport application, renewal, and identity documents.',
    slugPatterns: ['passport'],
  },
  {
    file: 'illustration-citizenship',
    alt: 'Citizenship oath ceremony and naturalization paperwork',
    caption: 'Naturalization eligibility, test preparation, and citizenship oath ceremony.',
    slugPatterns: ['citizenship', 'naturalization'],
  },
  {
    file: 'illustration-green-card',
    alt: 'Permanent resident green card and immigration paperwork',
    caption: 'Permanent resident card, adjustment of status, and immigration paperwork.',
    slugPatterns: ['green-card', 'pr-card', 'permanent-resident', 'settled-status', 'euss', 'skilled-worker', 'share-code'],
  },
  {
    file: 'illustration-itin-document',
    alt: 'ITIN tax approval document and IRS Form W-7',
    caption: 'IRS Individual Taxpayer Identification Number application and supporting documents.',
    slugPatterns: ['how-to-apply-for-itin'],
  },
  {
    file: 'illustration-tax-form',
    alt: 'Official tax return form with calculator and receipts',
    caption: 'Tax return forms, schedules, deductions, and refund status tracking.',
    slugPatterns: ['tax', 'refund', '1040', '1099', 'w9', 'w-9', 'schedule-c', 'self-assessment', 'crypto-tax'],
    categories: ['taxes'],
  },
  {
    file: 'illustration-drivers-license',
    alt: "Driver's license identification card with vehicle",
    caption: 'Driver\'s license testing, residency verification, and road exam requirements.',
    slugPatterns: ['driver', 'driving-licence', 'driving-license'],
  },
  {
    file: 'illustration-social-security-card',
    alt: 'Official Social Security card with registration documents',
    caption: 'National identity and tax number verification paperwork.',
    slugPatterns: ['social-security-card', 'social-security-number', 'national-insurance-number', 'sin-canada'],
  },
  {
    file: 'illustration-birth-certificate',
    alt: 'Certified birth certificate with official raised seal',
    caption: 'Vital records office certified copies and civil registry records.',
    slugPatterns: ['birth-certificate', 'register-a-birth', 'register-birth'],
  },
  {
    file: 'illustration-ein-document',
    alt: 'Employer Identification Number and business tax filing document',
    caption: 'Employer Identification Number and business tax registration records.',
    slugPatterns: ['ein', 'corporation-tax', 'business-number'],
  },
  {
    file: 'illustration-llc-business',
    alt: 'Small business storefront and company registration documents',
    caption: 'Business structure, legal formation, and company filing requirements.',
    slugPatterns: ['llc', 'limited-company', 'business-loan', 'start-a-business'],
    categories: ['business'],
  },
  {
    file: 'illustration-medicare-card',
    alt: 'Medicare health insurance card with medical documents',
    caption: 'Public health insurance and retirement healthcare coverage.',
    slugPatterns: ['medicare', 'pension', 'oas-canada', 'cpp-canada'],
  },
  {
    file: 'illustration-health-insurance',
    alt: 'Health insurance coverage shield and medical policy',
    caption: 'Health coverage plans, subsidies, and official clinic registration.',
    slugPatterns: ['aca', 'health-insurance', 'medicaid', 'nhs', 'ghic', 'ohip', 'msp'],
    categories: ['benefits'],
  },
  {
    file: 'illustration-unemployment',
    alt: 'Unemployment benefits support and income assistance paperwork',
    caption: 'Income support, disability assistance, and public benefit claims.',
    slugPatterns: ['unemployment', 'universal-credit', 'ssdi', 'ssi', 'food-stamps', 'snap', 'wic', 'ei-canada'],
  },
  {
    file: 'illustration-vote',
    alt: 'Official voter registration ballot box and ballot form',
    caption: 'Voter registration deadlines, polling rules, and civic record updates.',
    slugPatterns: ['vote', 'jury-duty'],
    categories: ['civic'],
  },
  {
    file: 'illustration-car-accident',
    alt: 'Incident documentation and police report paperwork',
    caption: 'Accident reporting, insurance documentation, and official incident records.',
    slugPatterns: ['accident', 'police-report', 'car-insurance', 'crime'],
    categories: ['accidents'],
  },
  {
    file: 'illustration-student-aid',
    alt: 'Student financial aid application and graduation cap',
    caption: 'Student aid applications, study permits, and university documentation.',
    slugPatterns: ['fafsa', 'student', 'study-permit', 'loan-forgiveness'],
    categories: ['students'],
  },
  {
    file: 'illustration-real-id',
    alt: 'REAL ID driver credential with security star emblem',
    caption: 'Federal security compliant identification and travel credentials.',
    slugPatterns: ['real-id', 'stolen-documents', 'change-your-address', 'address-change'],
  },
  {
    file: 'illustration-marriage-license',
    alt: 'Certified marriage license certificate with legal seal',
    caption: 'Marriage license application, legal officiants, and certified certificates.',
    slugPatterns: ['marriage', 'legal-name', 'name-change'],
  },
];

export function getGuideHero(guide: Guide): GuideHero {
  // First match wins
  for (const m of heroMappings) {
    const slugMatch = m.slugPatterns.some((pattern) => guide.slug.includes(pattern));
    if (slugMatch) {
      return {
        src: `/images/guides/${m.file}.png`,
        webpSrc: `/images/guides/${m.file}.webp`,
        alt: m.alt,
        caption: m.caption,
        width: 800,
        height: 500,
      };
    }
  }

  // Category fallback
  for (const m of heroMappings) {
    if (m.categories && m.categories.includes(guide.category)) {
      return {
        src: `/images/guides/${m.file}.png`,
        webpSrc: `/images/guides/${m.file}.webp`,
        alt: m.alt,
        caption: m.caption,
        width: 800,
        height: 500,
      };
    }
  }

  // Default fallback
  return {
    src: '/images/guides/illustration-passport.png',
    webpSrc: '/images/guides/illustration-passport.webp',
    alt: 'Official government paperwork and application documents',
    caption: 'Step-by-step government paperwork requirements and verified instructions.',
    width: 800,
    height: 500,
  };
}
