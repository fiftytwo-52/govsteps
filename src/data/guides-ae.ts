// UAE guides — verified against official UAE government sources (u.ae, MOHRE,
// ICP, FTA, RTA, DLD, DEWA) on 2026-10-13. Fees marked "varies" could not be
// confirmed on an official fee schedule; check the linked official portal.

import type { Guide } from './types';

export const guides: Guide[] = [
    {
        slug: 'how-to-apply-for-a-uae-residence-visa',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-14',
        title: 'How to Apply for a UAE Residence Visa (Employment-Based)',
        metaTitle: 'How to Get a UAE Employment Residence Visa: Steps, Fees & Timeline (2026)',
        description: 'Employer-sponsored residence visa: MOHRE work permit, entry permit, medical test, Emirates ID biometrics, and residence issuance — fees, documents, and timelines.',
        category: 'immigration',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: '1–3 weeks (end to end)',
        totalCost: 'Employer-paid; ICP residence fees AED 420 (2-year visa)',
        summary: 'An employment residence visa is employer-sponsored and follows a fixed sequence: job offer, MOHRE work permit, entry permit, medical fitness test, Emirates ID biometrics, then residence permit issuance. The standard visa is valid 2 years and renewable. The employer drives most steps — the employee cannot self-sponsor this route.',
        documents: [
            'Valid passport (at least 6 months remaining)',
            'Signed job offer / employment contract',
            'Passport-size photos',
            'Entry permit',
            'Medical fitness certificate',
            'Emirates ID application / biometrics',
            'Health insurance (mandatory)',
        ],
        steps: [
            {
                phase: 'before', title: 'Get a job offer and sign the contract', detail: 'A UAE employer issues a job offer; the contract is approved via MOHRE (mainland) or the free-zone authority. No employer, no employment visa — this route cannot be self-sponsored.', duration: 'Varies',
                links: [
                    { label: 'Residence visa for work (dubai.ae)', href: 'https://www.dubai.ae/living/residency/residence-visa-for-work' },
                ],
            },
            {
                phase: 'go', title: 'Employer applies for the work permit', detail: 'Your employer applies to MOHRE for a 2-year work permit, or via the unified Work Bundle platform covering permit, residency, Emirates ID, medical, and contract in one application. The employer pays: AED 50 federal fee plus issuance of AED 250 / 1,200 / 3,450 depending on establishment category.', duration: '2 working days', cost: 'Employer-paid (from AED 300)',
                links: [
                    { label: 'Recruiting a worker from overseas (MOHRE)', href: 'https://www.mohre.gov.ae/en/services/recruiting-a-worker-from-overseas-2022' },
                ],
            },
            {
                phase: 'submit', title: 'Entry permit is issued', detail: 'Once the work permit is approved, an entry permit is issued. Enter the UAE within 60 days of issuance — the standard entry-permit validity; some categories differ (e.g. transit permits and GCC residents’ e-visas have shorter windows), so check the validity printed on your permit. If you are already inside the UAE, apply for a status change instead (AED 500 status-adjustment fee).', duration: 'Entry permit valid 60 days', cost: 'AED 500 status adjustment (if already in UAE)',
                links: [
                    { label: 'Recruiting on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/recruiting-on-the-mainland-' },
                ],
            },
            {
                phase: 'go', title: 'Pass the medical fitness test', detail: 'Blood test plus chest X-ray at an approved medical fitness centre. Required for all applicants aged 18 and over. Results typically arrive the same or next day. The fee varies by emirate and urgency — confirm at the centre.', duration: 'Result typically same/next day', cost: 'Varies by emirate/centre',
                links: [
                    { label: 'Residence visa for work (dubai.ae)', href: 'https://www.dubai.ae/living/residency/residence-visa-for-work' },
                ],
            },
            {
                phase: 'go', title: 'Complete Emirates ID biometrics', detail: 'Fingerprints and photo at an ICP service centre or authorised centre. This runs alongside the residence process — see the Emirates ID guide for the full breakdown (AED 100 per year plus AED 100 smart services fee).', duration: 'Same-day appointment', cost: 'From AED 300 (2-year card)',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'submit', title: 'Residence permit is issued', detail: 'Your employer applies online once the medical is cleared. The permit is issued within about 48 hours. ICP fees: AED 100 application + AED 100 per year issuance + AED 100 smart services + AED 20 financial security deposit — for the standard 2-year visa that totals AED 420 (100 + 2×100 + 100 + 20).', duration: '~48 hours after medical clearance', cost: 'AED 420 (2-year visa)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'followup', title: 'Arrange mandatory health insurance', detail: 'Health insurance coverage is mandatory. Your employer typically arranges it; confirm the policy is active before you rely on it for medical visits.', duration: 'Varies by policy',
                links: [
                    { label: 'Residence visa for work (dubai.ae)', href: 'https://www.dubai.ae/living/residency/residence-visa-for-work' },
                ],
            },
        ],
        faqs: [
            { q: 'Can I apply for an employment visa myself?', a: 'No — the employer is the sponsor and must secure the MOHRE work permit first. Foreign nationals cannot obtain a work permit independently.' },
            { q: 'I am already in the UAE on a visit visa. Do I need to leave?', a: 'No — apply for a status change instead of a new entry permit, plus the AED 500 status-adjustment fee per ICP.' },
            { q: 'How long is the visa valid?', a: 'The standard employment residence visa is valid 2 years and renewable for similar periods.' },
        ],
    },
    {
        slug: 'how-to-apply-for-an-emirates-id',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-14',
        title: 'How to Apply for an Emirates ID (New Application & Renewal)',
        metaTitle: 'Emirates ID: How to Apply, Renew & Replace It — Fees & Steps (2026)',
        description: 'The mandatory UAE identity card: unified application with your residence permit, biometrics, fees, delivery, renewal, and replacement for a lost card.',
        category: 'ids',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: 'Same-day application; delivery varies',
        totalCost: 'From AED 300 (2-year card)',
        summary: 'The Emirates ID is the mandatory identity card for everyone living in the UAE, issued by ICP. For expatriate residents it is applied for together with the residence permit through a unified form (except in Dubai, which uses GDRFA). The card validity matches the residence visa, and the same 15-digit ID number is kept for life across renewals.',
        documents: [
            'Passport (valid at least 3 months)',
            'Personal photo meeting ICAO standards',
            'Valid residence permit (or residence under issuance/renewal)',
            'Proof of residence category where applicable (employment contract, trade licence, property proof, study certificate)',
            'Birth certificate + parent passport/ID for under-15s',
            'Power of attorney if applying via a representative',
        ],
        steps: [
            {
                phase: 'fill', title: 'Submit the application', detail: 'Apply via the ICP Smart Services website/app, an ICP Customer Happiness Centre, or an authorised typing centre — usually together with the residence permit application on the unified form (except Dubai).', duration: 'Same day',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'go', title: 'Complete fingerprints and signature', detail: 'Applicants aged 15 and over must complete fingerprint and signature capture at an ICP service centre. Children under 15 are exempt from biometrics.', duration: 'Same-day appointment',
                links: [
                    { label: 'Identity Card renewal (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5d' },
                ],
            },
            {
                phase: 'wait', title: 'Pass the medical fitness test', detail: 'Issuance requires a "Fit" medical result, which is part of the residence process.', duration: 'Result typically same/next day',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the fees', detail: 'Pay online or at the centre. Residents pay AED 100 per year of residence validity plus a AED 100 smart services fee (about AED 300 for a 2-year visa). Urgent Fawri service (in-person only) adds AED 150. Lost/damaged replacement costs AED 300 plus AED 100 smart fee.', duration: 'At application', cost: 'From AED 300 (2-year card)',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'receive', title: 'Receive the card', detail: 'The card is delivered to the specified address or collection point. Replacement cards take about 5 days per ICP.', duration: 'Replacement: 5 days',
                links: [
                    { label: 'Replacement ID card (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5b' },
                ],
            },
            {
                phase: 'followup', title: 'Renew with your residence visa', detail: 'Renewal is filed together with the residence renewal on the unified form (except Dubai). Same fees as new issuance. Report any data changes promptly — unreported changes carry a fine of AED 20 per day, up to AED 1,000.', duration: 'With residence renewal', cost: 'Same as new issuance',
                links: [
                    { label: 'Identity Card renewal (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5d' },
                    { label: 'Emirates ID (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/emirates-id' },
                    { label: 'ID number lasts a lifetime (Gulf News)', href: 'http://gulfnews.com/uae/government/uae-national-id-card-number-lasts-a-lifetime-1.1065088' },
                ],
            },
        ],
        faqs: [
            { q: 'Is the Emirates ID the same as my residence visa?', a: 'No, but they are linked: since 2022 the Emirates ID card serves as proof of residence (replacing the passport visa sticker), and the ID expires when the visa expires.' },
            { q: 'Do I keep the same ID number when I renew?', a: 'Yes — your 15-digit ID number stays with you for life (u.ae: the identity number “sticks with its holder forever”). It is not cancelled if you leave the UAE; a returning resident is issued a new card under the same number (Emirates Identity Authority, reported by Gulf News).' },
            { q: 'What if I lose my card?', a: 'Apply for a replacement via ICP (AED 300 plus AED 100 smart fee). Urgent in-person service adds AED 150.' },
        ],
    },
    {
        slug: 'how-to-apply-for-a-uae-golden-visa',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-15',
        title: 'How to Apply for a UAE Golden Visa (10-Year Long-Term Residency)',
        metaTitle: 'UAE Golden Visa: Who Qualifies, How to Apply, Fees (2026)',
        description: 'Long-term residency without a sponsor: investor, entrepreneur, talent, professional, and student routes — eligibility thresholds, documents, fees, and the application steps.',
        category: 'immigration',
        audience: ['Expat', 'Investor'],
        difficulty: 'Hard',
        totalTime: 'Varies by category — confirm current processing times with ICP/GDRFA',
        totalCost: 'From ~AED 1,200 (10-year residence issuance) + category fees',
        summary: 'The Golden Visa is a long-term, renewable residence visa (10 years per ICP\'s Golden Residency guide) that needs no sponsor, lets holders stay outside the UAE for more than 6 months without losing residency, and allows family sponsorship. Main routes: investors (AED 2M+), entrepreneurs, exceptional talent / specialised professionals, outstanding students, and humanitarian pioneers / frontline heroes.',
        documents: [
            'Passport (at least 6 months remaining)',
            'Personal photo',
            'Valid UAE health insurance',
            'Category proof: property ownership letter (AED 2M+) from the land department, or auditor letter confirming project value of AED 500,000+ (entrepreneurs)',
            'Professionals: valid UAE work permit, bachelor degree, salary certificate, 6-month bank statement',
            'Students: certificates of excellence + school/university recommendation letters',
            'Talent: recommendation/approval from the competent authority',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm your category', detail: 'Match yourself to a Golden Visa category on u.ae / ICP: investor, entrepreneur, exceptional talent, specialised professional, outstanding student, humanitarian / frontline hero.', duration: 'Self-check',
                links: [
                    { label: 'Golden visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/golden-visa' },
                ],
            },
            {
                phase: 'fill', title: 'Gather your eligibility proof', detail: 'Collect category proof. Key thresholds: investors — minimum AED 2M capital (property or qualifying investment); specialised professionals — valid UAE work permit, bachelor degree or equivalent, monthly salary of at least AED 30,000, plus comprehensive health insurance for applicant and family; entrepreneurs — auditor letter confirming project value of at least AED 500,000.', duration: 'Varies',
                links: [
                    { label: 'UAE Golden Residency guide (ICP)', href: 'https://icp.gov.ae/en/services/uae-golden-residency/' },
                ],
            },
            {
                phase: 'submit', title: 'Apply through ICP', detail: 'Apply via the ICP Smart Services website/app (UAE Pass login), a Customer Happiness Centre, or an Amer centre — search for the category-specific Golden Residency service. Category entry services cost AED 100 application + AED 100 issuance + AED 100 smart services, varying by category.', duration: 'Varies — confirm with ICP', cost: 'From ~AED 300 (category service)',
                links: [
                    { label: 'Golden investor — public investments (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=68e34ed35ae59b00117383d1' },
                ],
            },
            {
                phase: 'go', title: 'Pass the medical fitness test', detail: 'A "Fit" medical result is required for residence issuance. The fee varies by emirate and centre.', duration: 'Result typically same/next day', cost: 'Varies',
                links: [
                    { label: 'Golden specialised talents (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=68e34f2a5ae59b00117383dc' },
                ],
            },
            {
                phase: 'go', title: 'Complete Emirates ID issuance', detail: 'Emirates ID issuance and biometrics are part of the residence process (AED 100 per year plus AED 100 smart fee — about AED 1,100 for a 10-year card).', duration: 'Same-day appointment', cost: 'About AED 1,100 (10-year card)',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'receive', title: 'Golden Residence permit is issued', detail: 'The Golden Residence permit is issued for 10 years for the main categories (investors, entrepreneurs, talent, professionals, students, real-estate) per ICP\'s Golden Residency guide. Note: the u.ae overview table still lists 5 years for some categories — ICP is the issuing authority, so its 10-year figure is followed here. Residence issuance costs AED 100 per year + AED 100 application + AED 100 smart fee (about AED 1,200 for 10 years). Confirm your category duration with ICP at application time. Processing time varies by category — confirm with ICP/GDRFA.', duration: 'Varies — confirm with ICP', cost: '~AED 1,200 (10-year issuance)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
        ],
        faqs: [
            { q: 'Do I need a sponsor for a Golden Visa?', a: 'No — a key benefit is that no sponsor is required.' },
            { q: 'Can I stay outside the UAE for more than 6 months?', a: 'Yes — Golden Visa holders are exempt from the usual 6-month rule; the visa stays valid while the residency is valid.' },
            { q: 'Can I sponsor my family?', a: 'Yes — Golden Visa holders can sponsor family members, including spouse and children.' },
        ],
    },
    {
        slug: 'how-to-sponsor-family-residence-visa-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-15',
        title: 'How to Sponsor Your Family\'s Residence Visa in the UAE',
        metaTitle: 'Sponsor Family Residence Visa in UAE: Salary, Fees & Steps (2026)',
        description: 'Sponsor your spouse, children, and dependents: salary thresholds, documents per dependent, entry permit, medical, Emirates ID, and residence issuance.',
        category: 'immigration',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: '1–3 weeks per dependent',
        totalCost: 'From ~AED 320 per dependent (ICP) + Emirates ID + medical',
        summary: 'A UAE expatriate resident can sponsor their spouse, unmarried daughters, sons under 25, and children with special needs. The sponsor needs a minimum salary of AED 4,000 per month, or AED 3,000 plus accommodation. Each dependent needs an entry permit, a medical fitness test (if 18+), an Emirates ID, and a residence permit tied to the sponsor\'s visa validity.',
        documents: [
            'Dependent passport copy',
            'Recent coloured personal photo (white background)',
            'Emirates ID application receipt',
            'Certified housing lease contract or proof of owning a residence',
            'Sponsor passport copy with valid residence permit',
            'Sponsor job contract',
            'Medical fitness certificate (dependents 18+)',
            'Entry permit',
            'Attested birth certificate (children) / attested marriage certificate (spouse)',
            'Medical insurance / health card',
            'University/institute certificate stating study duration (student dependents)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm your eligibility', detail: 'The sponsor must hold a valid residence visa and earn at least AED 4,000 per month, or at least AED 3,000 per month plus accommodation.', duration: 'Self-check',
                links: [
                    { label: 'Residence visa for family members (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members' },
                ],
            },
            {
                phase: 'submit', title: 'Apply for each dependent\'s entry permit', detail: 'Apply via ICP (or GDRFA in Dubai). If the dependent is already in the UAE, apply for a status change instead. Confirm the current entry-permit fee in the ICP portal at application time.', duration: 'Varies — confirm with ICP',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'go', title: 'Dependent enters the UAE', detail: 'The dependent enters on the entry permit, or completes the status change if already inside (AED 500 status-adjustment fee).', duration: 'Entry permit validity per issuance', cost: 'AED 500 status adjustment (if already in UAE)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'go', title: 'Medical fitness test', detail: 'Dependents aged 18 and over must undergo and pass the medical fitness test at an approved health centre. Children under 18 are exempt. The fee varies by emirate and centre.', duration: 'Result typically same/next day', cost: 'Varies',
                links: [
                    { label: 'Residence visa for family members (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members' },
                ],
            },
            {
                phase: 'go', title: 'Emirates ID for each dependent', detail: 'Apply for each dependent\'s Emirates ID (biometrics included). Cost: AED 100 per year plus AED 100 smart fee per dependent.', duration: 'Same-day appointment', cost: 'From AED 300 (2-year card)',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'submit', title: 'Residence permit is issued', detail: 'Submit the residence application with all documents. The dependent\'s visa validity will not exceed the sponsor\'s. ICP fees per dependent: AED 100 application + AED 100 per year issuance + AED 100 smart services.', duration: 'Varies — confirm with ICP', cost: 'From ~AED 320',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'followup', title: 'Arrange health insurance', detail: 'Valid health insurance is required for each dependent. Confirm coverage is active before relying on it.', duration: 'Varies by policy',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
        ],
        faqs: [
            { q: 'What is the minimum salary to sponsor my family?', a: 'AED 4,000 per month, or AED 3,000 per month plus accommodation (u.ae / ICP).' },
            { q: 'Do my children need a medical test?', a: 'Only dependents aged 18 and over need the medical fitness test; children under 18 are exempt.' },
            { q: 'What happens to my family\'s visas if my visa is cancelled?', a: 'Their permits are linked to yours and must be cancelled too. Dependents get a 6-month grace period to obtain a new residence permit.' },
        ],
    },
    {
        slug: 'how-to-calculate-uae-gratuity-end-of-service',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-15',
        title: 'How to Calculate Your UAE Gratuity (End-of-Service Benefit)',
        metaTitle: 'UAE Gratuity Calculator Guide: Formula, Rules & Payout (2026)',
        description: 'Private-sector gratuity under Federal Decree-Law 33/2021: 21 days for the first five years, 30 days after, on your last basic salary — eligibility, formula, cap, and disputes.',
        category: 'benefits',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: '15 minutes to calculate',
        totalCost: 'Free (employer pays)',
        summary: 'Private-sector expat employees who complete at least one year of continuous service are entitled to a gratuity calculated on their last basic salary: 21 days of basic wage for each of the first five years, 30 days per year after that, pro-rated for partial years. Since February 2022 all private-sector contracts are fixed-term, so the old limited/unlimited distinction — under which resigning under an unlimited contract reduced gratuity — no longer applies to new accruals.',
        documents: [
            'Employment contract showing basic salary (via MOHRE app / UAE Pass)',
            'Emirates ID',
            'End-of-service settlement statement from employer',
            'Record of service dates',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you are eligible', detail: 'You need 1+ year of continuous service (excluding unpaid-leave days) under the federal private-sector Labour Law. It applies whether the contract ends by expiry, resignation, or dismissal. It does not cover workers with under 1 year of service, UAE nationals (pension/GPSSA regime), government-sector expats, domestic workers, or DIFC/ADGM employees, who have separate regimes.', duration: 'Self-check',
                links: [
                    { label: 'Labour Law decree (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/11/2021/uae-president-issues-federal-decree-law-on-regulation-of-labour-relations-in-private-sector' },
                ],
            },
            {
                phase: 'fill', title: 'Find your basic wage', detail: 'Use the basic salary in your MOHRE-registered contract — your LAST basic salary. Allowances (housing, transport, etc.) are excluded from the calculation.', duration: '10 min',
                links: [
                    { label: 'Pension schemes for expatriate workers (u.ae)', href: 'https://u.ae/en/information-and-services/moving-to-the-uae/expatriates-working-in-the-uae/pension-schemes-for-expatriate-workers' },
                ],
            },
            {
                phase: 'fill', title: 'Count your service time', detail: 'Count full years plus a pro-rated partial year after the first year, and subtract unpaid-leave days, which do not count toward service time.', duration: '10 min',
                links: [
                    { label: 'Labour Law decree (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/11/2021/uae-president-issues-federal-decree-law-on-regulation-of-labour-relations-in-private-sector' },
                ],
            },
            {
                phase: 'fill', title: 'Apply the formula', detail: 'Daily basic wage = last monthly basic wage divided by 30. Gratuity = (21/30 × basic × first 5 years) + (30/30 × basic × years beyond 5), pro-rated for partial years. The total may not exceed 2 years of total wage (Federal Decree-Law 33/2021, Art. 51). Use the calculator below to run your numbers.', duration: '5 min',
                links: [
                    { label: 'Labour Law decree (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/11/2021/uae-president-issues-federal-decree-law-on-regulation-of-labour-relations-in-private-sector' },
                ],
            },
            {
                phase: 'followup', title: 'Check the employer settlement', detail: 'Compare your calculation with the employer end-of-service statement. Flag any use of gross salary instead of basic salary, or a missing pro-rata partial year.', duration: '15 min',
            },
            {
                phase: 'receive', title: 'Collect payment', detail: 'The employer must settle all wages and entitlements within 14 days of the contract end (Art. 53).', duration: 'Within 14 days of contract end',
            },
            {
                phase: 'followup', title: 'Dispute if short-paid', detail: 'File a labour complaint with MOHRE; if unresolved, it goes to court. Note that arbitrary-dismissal compensation (up to 3 months wage) is separate from gratuity and court-awarded.', duration: 'Varies',
                links: [
                    { label: 'Terminating employment contracts (u.ae)', href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/terminating-employment-contracts' },
                ],
            },
        ],
        faqs: [
            { q: 'Does resigning reduce my gratuity?', a: 'No — under current law all private-sector contracts are fixed-term and resignation does not reduce gratuity. The old limited/unlimited reduction rules are historical only (pre-February 2022).' },
            { q: 'Is gratuity based on basic or gross salary?', a: 'Basic salary only, per MOHRE and u.ae. Allowances are excluded; the 2-year cap, by contrast, is measured against total wage.' },
            { q: 'What if my employer does not pay?', a: 'File a complaint with MOHRE; unresolved disputes go to court.' },
        
        {
          q: 'How do I calculate UAE gratuity?',
          a: 'Divide your last monthly basic salary by 30 to get your daily wage. Multiply by 21 days for each of the first 5 years of service and 30 days for each year after that, pro-rated for partial years. The total is capped at two years\' total Wage (basic + allowances) under Art. 51(6). Example: AED 10,000 basic salary and 7 years gives about AED 55,000. Use the gratuity calculator on this page to run your exact numbers.',
        },
        {
          q: 'Do unpaid leave days count toward UAE gratuity?',
          a: 'No. Days of unpaid leave do not count toward your period of service. The calculator subtracts your unpaid-leave days (converted to years) from your total service before applying the formula.',
        },
        {
          q: 'Is there a maximum gratuity in the UAE?',
          a: 'Yes. Total end-of-service gratuity cannot exceed two years\' Wage — the decree\'s defined term for total wage (basic + allowances), distinct from "Basic Wage" used elsewhere in Art. 51. Note: the calculator on this page caps against basic wage because it only takes basic salary as an input; if you receive allowances, your true legal cap is higher.',
        },
      ],
        calculator: 'ae-gratuity',
    },
    {
        slug: 'how-to-register-for-uae-corporate-tax',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Register for UAE Corporate Tax (FTA EmaraTax)',
        metaTitle: 'UAE Corporate Tax Registration: Deadlines, Steps & 9% Rate (2026)',
        description: '0% up to AED 375,000, 9% above: who must register, EmaraTax deadlines by incorporation date, the registration steps, and filing rules.',
        category: 'taxes',
        audience: ['Business owner'],
        difficulty: 'Medium',
        totalTime: 'About 30 minutes to register',
        totalCost: 'Registration via EmaraTax (no fee stated by FTA)',
        summary: 'UAE Corporate Tax applies from the first financial year starting on or after 1 June 2023: 0% on taxable income up to AED 375,000, 9% on the amount above. Every taxable person — including companies that expect to owe no tax — must register with the Federal Tax Authority via EmaraTax and obtain a Tax Registration Number. Registration is done online in about 30 minutes; deadlines depend on when the business was incorporated or licensed.',
        documents: [
            'Trade licence',
            'Emirates ID / passport of authorised signatory',
            'Memorandum of association',
            'Contact details',
            'Financial-year details',
            'Note: the FTA does not publish a definitive checklist — EmaraTax shows the required uploads in-portal.',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you are a taxable person', detail: 'Check scope and exemptions against Federal Decree-Law No. 47 of 2022. In scope: businesses and individuals conducting business under a commercial licence, free-zone businesses, foreign entities conducting trade in the UAE on an ongoing basis, banking operations, and real-estate businesses. Some government entities, extractive businesses, and qualifying public-benefit entities are exempt.', duration: 'Self-check',
                links: [
                    { label: 'Corporate tax (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/taxation/corporate-tax' },
                ],
            },
            {
                phase: 'fill', title: 'Determine your registration deadline', detail: 'Incorporated/established on or after 1 March 2024: within 3 months of incorporation. Pre-1 March 2024 juridical persons: by the licence-issue-month table (Jan/Feb → 31 May 2024 … Dec → 31 Dec 2024). Foreign effectively managed/controlled in the UAE: within 3 months of financial-year end. Non-resident with a permanent establishment: 9 months (pre-1 Mar 2024) or 6 months (on/after) from PE existence; nexus: 31 May 2024 or 3 months.', duration: 'Self-check',
                links: [
                    { label: 'FTA Decision No. 3 of 2024 (registration timeframes)', href: 'https://tax.gov.ae/en/media.centre/news/federal.tax.authority.issues.new.decision.on.specified.timeframes.for.corporate.tax.registration.aspx?ref=focus.hidubai.com' },
                ],
            },
            {
                phase: 'go', title: 'Create or access EmaraTax', detail: 'Use the FTA e-Services portal with UAEPass login. VAT-registered taxpayers add a Corporate Tax request to their existing account.', duration: '10 min',
                links: [
                    { label: 'EmaraTax portal', href: 'https://eservices.tax.gov.ae/' },
                ],
            },
            {
                phase: 'submit', title: 'Submit the registration request', detail: 'About 30 minutes, four steps per the FTA. The portal shows the required uploads for your entity type.', duration: '~30 minutes',
                links: [
                    { label: 'EmaraTax portal', href: 'https://eservices.tax.gov.ae/' },
                ],
            },
            {
                phase: 'wait', title: 'Receive your Tax Registration Number (TRN)', detail: 'The TRN is issued once the request is approved. Keep it for all filings and correspondence.', duration: 'Approval varies',
            },
            {
                phase: 'followup', title: 'File and pay on time', detail: 'The return is due within 9 months of the financial-year end. For example, the FTA announced 30 September 2026 as the filing/payment deadline for the financial year ended 31 December 2025. Confirm current penalty amounts on tax.gov.ae before relying on them.', duration: 'Within 9 months of FY end',
                links: [
                    { label: 'Corporate tax news (FTA)', href: 'https://tax.gov.ae/en/taxes/corporate.tax/news.aspx' },
                ],
            },
            {
                phase: 'followup', title: 'Keep records', detail: 'Retain supporting records for your filings. Confirm the current retention period in the FTA guidance before disposing of anything.', duration: 'Ongoing',
                links: [
                    { label: 'Corporate tax news (FTA)', href: 'https://tax.gov.ae/en/taxes/corporate.tax/news.aspx' },
                ],
            },
        ],
        faqs: [
            { q: 'I expect to owe no tax — do I still register?', a: 'Yes. Registration applies regardless of expected liability; the 0% band up to AED 375,000 is a rate, not a registration exemption.' },
            { q: 'What is taxed — revenue or profit?', a: 'Taxable income (profit): accounting income adjusted per the law — 0% up to AED 375,000, 9% on the excess.' },
            { q: 'Do free-zone companies register?', a: 'Yes — free-zone businesses are in scope. Qualifying Free Zone Persons may get 0% on qualifying income if conditions are met; confirm the current conditions on tax.gov.ae.' },
        
        {
          q: 'How much corporate tax do I pay on AED 1 million profit?',
          a: 'Taxable income up to AED 375,000 is taxed at 0%, and only the excess is taxed at 9%. On AED 1,000,000 of taxable income, the tax is (1,000,000 - 375,000) x 9% = AED 56,250. Enter your profit in the calculator above for your exact figure.',
        },
        {
          q: 'What is Small Business Relief in UAE corporate tax?',
          a: 'Businesses with revenue of AED 3 million or less can elect for Small Business Relief, under which they are treated as having no taxable income. Tick the Small Business Relief box in the calculator to see the zero-tax result.',
        },
        {
          q: 'When is UAE corporate tax due?',
          a: 'The corporate tax return and payment are due within 9 months of the end of your financial year. For example, the FTA announced 30 September 2026 as the filing and payment deadline for the financial year ended 31 December 2025. Confirm the current deadline on tax.gov.ae.',
        },
      ],
        calculator: 'ae-corporate-tax',
    },
    {
        slug: 'how-to-set-up-a-business-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Set Up a Business in the UAE: Mainland vs Free Zone',
        metaTitle: 'Start a Business in UAE: Mainland vs Free Zone Steps & Costs (2026)',
        description: 'Mainland via the emirate DED/DET or free zone via the zone authority: legal forms, trade name, approvals, MoA, premises, and fees — with the free-zone route compared.',
        category: 'business',
        audience: ['Business owner'],
        difficulty: 'Hard',
        totalTime: '15 minutes (Basher) to 14 working days (free zone); mainland varies',
        totalCost: 'Varies by emirate, activity & legal form (no fixed official schedule)',
        summary: 'Choose between a mainland company (licensed by the emirate Department of Economic Development, e.g. Dubai DET) and a free-zone company (licensed by a free-zone authority such as DMCC). Mainland follows a 9-step conventional process; free-zone setup runs through the chosen authority, which issues a licence within 14 working days (u.ae). Costs vary by emirate, activity, and legal form — u.ae publishes no fixed fee schedule.',
        documents: [
            'Initial-approval receipt + all previously submitted documents',
            'Attested lease contract (RERA-attested in Dubai)',
            'Duly attested Memorandum of Association',
            'Approvals from other government entities if required',
            'Duly attested service-agent contract (civil establishments and companies wholly owned by non-GCC nationals, where required)',
        ],
        steps: [
            {
                phase: 'before', title: 'Identify the business activity', detail: 'The activity is the basis for your legal form and licence type. There are 2,000+ activities, and a business may hold more than one.', duration: 'Self-check',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'before', title: 'Select a legal form', detail: 'Options include general partnership, limited partnership, LLC, PJSC, or private joint stock company (PrJSC). The form must match the activity.', duration: 'Self-check',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'go', title: 'Apply for a trade licence', detail: 'Apply through the emirate DED/DET, or the Basher platform, which u.ae says can establish a business in 15 minutes.', duration: 'From 15 minutes (Basher)',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'fill', title: 'Register the trade name', detail: 'Register via the emirate economic department. The name must include the legal-form acronym (LLC, EST…), must not violate public morals or order, must not contain religious or governing-authority names, and must not already be registered.', duration: 'Same day',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'submit', title: 'Apply for initial approval', detail: 'Initial approval is the government no-objection to establish — it does NOT authorise trading. Foreign investors need GDRFA approval before initial approval. Some activities need sector approvals first.', duration: 'Varies',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'fill', title: 'Draft the MoA / service-agent agreement', detail: 'A Memorandum of Association is required for limited partnership, LLC, PJSC, and PrJSC — prepared and attested by law firms, courts, or notary public.', duration: 'Days',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'go', title: 'Select a location', detail: 'A physical address is required, and premises must meet DED and municipal planning rules. Dubai leases must be registered with Ejari.', duration: 'Varies',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'followup', title: 'Get additional government approvals', detail: 'Sector regulators as applicable — e.g. TDRA for telecoms, CBUAE for financial institutions, MOHRE for recruitment, SCA for financial advisory.', duration: 'Varies',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'submit', title: 'Submit documents and pay fees', detail: 'Collect the licence from the economic department service centres or website. Pay within 30 days of the payment voucher, or the application is cancelled. Fees vary by emirate, activity, and legal form — confirm the current schedule with the DED/DET before budgeting.', duration: 'Pay within 30 days of voucher', cost: 'Varies by emirate/activity/form',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
        ],
        faqs: [
            { q: 'Mainland or free zone — which should I choose?', a: 'Mainland licences are issued by the emirate DED/DET; free-zone licences by the zone authority. Per u.ae, the deciding factors are sector, where your customers are, and licence/office requirements. The free-zone route runs through the chosen authority and the licence is issued within 14 working days (u.ae).' },
            { q: 'Can a foreigner own 100% of a mainland company?', a: 'Ownership rules depend on the activity and legal form, and u.ae notes local-service-agent requirements for certain wholly non-GCC-owned forms. Confirm the current position for your activity with DET / the DED before relying on it.' },
            { q: 'Can a free-zone company trade on the mainland?', a: 'This is not covered on the u.ae pages reviewed. Check with the free-zone authority and the DED before assuming mainland trading rights.' },
        ],
    },
    {
        slug: 'how-to-open-a-bank-account-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Open a Bank Account in the UAE (Personal Account for New Residents)',
        metaTitle: 'Open a Bank Account in UAE: Documents, Steps & Timeline (2026)',
        description: 'Personal account for a new resident: Emirates ID + residence visa, salary certificate, bank checks, activation, and IBAN — with the Central Bank 2-day rule.',
        category: 'business',
        audience: ['Expat', 'Newcomer'],
        difficulty: 'Easy',
        totalTime: 'A few hours to a few days',
        totalCost: 'Varies by bank (minimum-balance fees may apply)',
        summary: 'Opening a personal account is straightforward once you hold a residence visa and Emirates ID: choose a bank, prepare your documents, and apply in-branch or via the bank app. Approval usually takes a few hours to a few days, and Central Bank rules require accounts to be opened within 2 complete business days of application (except for financial-crime compliance delays). Many banks require a minimum monthly balance, with a monthly fee if you fall below it.',
        documents: [
            'Emirates ID',
            'Valid UAE residence visa',
            'Passport',
            'Salary certificate or employment letter',
            'Proof of address (in some cases)',
            'Self-employed: trade licence + company documents',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose a bank', detail: 'Compare local and international banks operating in the UAE. Many allow online or app applications; check minimum-balance and fee terms before choosing, as they vary by bank and account type.', duration: 'Self-check',
                links: [
                    { label: 'Banking in the UAE (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/banking-in-uae' },
                ],
            },
            {
                phase: 'fill', title: 'Prepare your documents', detail: 'Emirates ID, valid residence visa, passport, and salary certificate or employment letter. Self-employed applicants add trade licence and company documents. Proof of address is requested in some cases.', duration: '30 min',
                links: [
                    { label: 'Banking in the UAE (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/banking-in-uae' },
                ],
            },
            {
                phase: 'submit', title: 'Submit the application', detail: 'Apply in-branch, via the bank website, or via its mobile app. Some banks offer digital onboarding with in-app identity verification.', duration: '30 min',
                links: [
                    { label: 'Banking in the UAE (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/banking-in-uae' },
                ],
            },
            {
                phase: 'wait', title: 'Verification and compliance checks', detail: 'The bank completes KYC / financial-crime checks. If delays arise, the bank must explain the delay and document the reason (CBUAE). Banks may refuse an account on reasonable grounds, including suspected suspicious transactions.', duration: 'Hours to days',
                links: [
                    { label: 'CBUAE Rulebook — account opening', href: 'https://rulebook.centralbank.ae/en/entiresection/44' },
                ],
            },
            {
                phase: 'receive', title: 'Account activation', detail: 'Account activated, debit card issued, online/mobile banking access enabled. Approval usually takes a few hours to a few days (u.ae). Personal-account timing varies by bank and compliance checks — confirm with the bank; there is no fixed regulatory timeline for personal accounts.', duration: 'A few hours to a few days',
                links: [
                    { label: 'Banking in the UAE (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/banking-in-uae' },
                ],
            },
            {
                phase: 'receive', title: 'Get your IBAN', detail: 'The IBAN is mandatory for electronic payments and receipts. The bank must inform you of your IBAN.', duration: 'At activation',
                links: [
                    { label: 'Banking in the UAE (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/banking-in-uae' },
                ],
            },
        ],
        faqs: [
            { q: 'Can I open an account before I get my Emirates ID?', a: 'u.ae lists Emirates ID among the most commonly required documents — expect to need it before the bank can open the account.' },
            { q: 'How long does it take?', a: 'Usually a few hours to a few days (u.ae). CBUAE requires opening within 2 complete business days unless financial-crime compliance requires longer.' },
            { q: 'Is there a minimum balance?', a: 'Many banks require one and may charge a monthly fee if the balance falls below it (u.ae). The amount depends on the bank and account — check before you apply.' },
        ],
    },
    {
        slug: 'how-to-get-a-uae-driving-licence',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Get a UAE Driving Licence in Dubai (RTA Process, Tests & Exchange)',
        metaTitle: 'UAE Driving Licence: RTA Steps, Tests, Exchange & Fees (2026)',
        description: 'Dubai route: traffic file, eye test, theory + Knowledge test, practical training, Yard test, road test — or direct exchange for recognised countries.',
        category: 'ids',
        audience: ['Expat'],
        difficulty: 'Hard',
        totalTime: 'Weeks to months (training route); 1–3 days (exchange)',
        totalCost: 'Varies by institute package (check rta.ae for current fees)',
        summary: 'Dubai residents must open a traffic file with an RTA-approved driving institute, pass an eye test, complete theory classes and a Knowledge test, complete practical training, then pass a Yard (parking) test and a final Road test. Residents holding a licence from an RTA-recognised country can usually exchange it directly without tests. A new licence is valid 2 years (age 21+) or 1 year (under 21).',
        documents: [
            'Copy of passport',
            'Copy + original Emirates ID',
            '2 photographs',
            'Eye-test report',
            'No Objection letter from sponsor (only if the traffic department requires it)',
            'For exchange: original foreign licence + legal translation if not in English/Arabic',
        ],
        steps: [
            {
                phase: 'before', title: 'Check eligibility and your route', detail: 'Minimum age 18 for cars (17 motorcycles, 20 heavy vehicles, 21 buses). Decide: full training route, or direct exchange if your licence is from an RTA-recognised country. The exchange list changes by ministerial decision — always verify your country on the RTA portal before applying.', duration: 'Self-check',
                links: [
                    { label: 'Get a driving licence (u.ae)', href: 'https://u.ae/en/information-and-services/transportation/Driving-and-licensing/get-a-driving-licence' },
                ],
            },
            {
                phase: 'go', title: 'Open a traffic file', detail: 'Apply via rta.ae (login with Emirates ID / passport / UAE Pass), select a driving institute, and submit the application. The institute calls within about 3 working days to agree the training package.', duration: '1–3 days',
                links: [
                    { label: 'RTA driving licence service', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'go', title: 'Pass the eye test', detail: 'Take the eye test at an RTA-accredited eye-test centre. Same-day result.', duration: 'Same day', cost: 'Varies by centre (confirm on rta.ae)',
                links: [
                    { label: 'Get a driving licence (u.ae)', href: 'https://u.ae/en/information-and-services/transportation/Driving-and-licensing/get-a-driving-licence' },
                ],
            },
            {
                phase: 'fill', title: 'Theory classes + Knowledge test', detail: 'Complete the theory lectures, then book and pass the RTA Knowledge (theory) test.', duration: 'Days to weeks', cost: 'Included in institute package',
                links: [
                    { label: 'RTA driving licence service', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'fill', title: 'Practical training', detail: 'Complete the required practical lessons at the institute. Required hours vary by experience — confirm your package with the institute. Total package prices vary by institute; confirm the full price, including retake fees, before signing up.', duration: 'Weeks to months', cost: 'Varies by institute',
                links: [
                    { label: 'RTA driving licence service', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'go', title: 'Pass the Yard (parking) test', detail: 'Automated Smart Yard assessment: slope, emergency brake, angle / garage / parallel parking.', duration: 'Same day',
                links: [
                    { label: 'Get a driving licence (u.ae)', href: 'https://u.ae/en/information-and-services/transportation/Driving-and-licensing/get-a-driving-licence' },
                ],
            },
            {
                phase: 'go', title: 'Pass the Road test', detail: 'Final RTA road test in live traffic. On passing, you get an SMS to pay licence issuance fees on rta.ae and choose delivery. If you fail a test, you rebook and retake that stage; extra practical lessons are usually required before a road-test retake.', duration: 'Same day', cost: 'Issuance fees on rta.ae',
                links: [
                    { label: 'RTA driving licence service', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'submit', title: 'Alternative route: direct licence exchange', detail: 'If eligible: apply on rta.ae, upload your licence copy, do the eye test, verify the original licence at a Customer Happiness Centre, pay, and collect. No theory or practical tests. Reported processing: 1–3 working days; confirm current fees on rta.ae.', duration: '1–3 working days', cost: 'Confirm current fees on rta.ae',
                links: [
                    { label: 'Get a driving licence (u.ae)', href: 'https://u.ae/en/information-and-services/transportation/Driving-and-licensing/get-a-driving-licence' },
                ],
            },
        ],
        faqs: [
            { q: 'Can I drive in Dubai on my foreign licence while I wait?', a: 'Visitors may drive on a valid foreign licence / International Driving Permit during their visit. Once you become a resident you need a UAE licence (or an exchange).' },
            { q: 'How long is a new UAE licence valid?', a: 'A first licence is valid 1 year (under 21) or 2 years (21+). On renewal: 10 years for UAE/GCC citizens, 5 years for expatriate residents over 21 (u.ae).' },
            { q: 'Does Abu Dhabi work the same way?', a: 'Broadly parallel, but Abu Dhabi uses TAMM / Abu Dhabi Police licensing with its own institutes and booking systems. Apply in the emirate where your residence visa is issued.' },
        ],
    },
    {
        slug: 'how-to-register-ejari-tenancy-contract-dubai',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Register an Ejari Tenancy Contract in Dubai (DLD, Fees & Documents)',
        metaTitle: 'Ejari Registration Dubai: Fees, Steps & Documents (2026)',
        description: 'DLD tenancy registration: AED 177.75 online or AED 220 at a Trustee Centre — documents, certificate, renewal, and cancellation.',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: '~25 minutes (trustee centre) / minutes online',
        totalCost: 'AED 177.75 online / AED 220 trustee centre',
        summary: 'Ejari is the Dubai Land Department official register of tenancy contracts. Every Dubai tenancy must be registered; the registered e-Contract Registration Certificate is required to connect DEWA, sponsor family visas, and use the Rental Disputes Centre. Register online via the Dubai REST app / DLD website, or in person at a Real Estate Services Trustee Centre.',
        documents: [
            'Unified Tenancy Contract (copy for online; original for trustee centre)',
            'Emirates ID of the applicant',
            'Official Power of Attorney if a representative applies',
        ],
        steps: [
            {
                phase: 'before', title: 'Sign the Unified Tenancy Contract', detail: 'Landlord and tenant sign the standard contract. Confirm in writing who files the Ejari and who pays — DLD places responsibility on the landlord, but in practice the tenant usually handles filing and payment.', duration: 'At signing',
                links: [
                    { label: 'Registration and renewal of lease (DLD)', href: 'https://dubailand.gov.ae/en/eservices/registration-and-renewal-of-lease-application/' },
                ],
            },
            {
                phase: 'submit', title: 'Register online via Dubai REST / DLD website', detail: 'Log in (UAE Pass), select the Ejari service, fill in details, and upload the contract copy. Total fee AED 177.75 (AED 100 registration + AED 10 knowledge + AED 10 innovation + AED 55 service-partner fee + AED 2.75 VAT). The app route requires tenant and landlord to be individuals with up-to-date owner data.', duration: 'Minutes', cost: 'AED 177.75',
                links: [
                    { label: 'Registration and renewal of lease (DLD)', href: 'https://dubailand.gov.ae/en/eservices/registration-and-renewal-of-lease-application/' },
                ],
            },
            {
                phase: 'submit', title: 'Or register in person at a Trustee Centre', detail: 'Alternative route: bring the original contract plus Emirates ID (plus POA if a representative applies). Staff review and approve in the system. Total fee AED 220. The property must not be managed by a real-estate company or an owner with Ejari system access for this route.', duration: '25 min (excl. waiting)', cost: 'AED 220',
                links: [
                    { label: 'Registration and renewal of lease (DLD)', href: 'https://dubailand.gov.ae/en/eservices/registration-and-renewal-of-lease-application/' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the registration fees', detail: 'Card, cash, or Noqodi wallet — included in the totals above.', duration: 'At registration', cost: 'AED 177.75 online / AED 220 trustee centre',
                links: [
                    { label: 'Registration and renewal of lease (DLD)', href: 'https://dubailand.gov.ae/en/eservices/registration-and-renewal-of-lease-application/' },
                ],
            },
            {
                phase: 'receive', title: 'Get the e-Contract Registration Certificate', detail: 'Delivered by email (online) or at the counter (trustee centre), immediately on approval.', duration: 'Immediate on approval',
            },
            {
                phase: 'followup', title: 'Renew annually or on change', detail: 'Renew whenever the contract renews, or when rent, tenant name, or property details change — same service, same fee.', duration: 'Same as registration', cost: 'AED 177.75 / 220',
                links: [
                    { label: 'Registration and renewal of lease (DLD)', href: 'https://dubailand.gov.ae/en/eservices/registration-and-renewal-of-lease-application/' },
                ],
            },
            {
                phase: 'followup', title: 'Cancel when the tenancy ends', detail: 'Cancel via the same channels once the tenancy ends. Cancellation is free online.', duration: 'Minutes',
                links: [
                    { label: 'Registration and renewal of lease (DLD)', href: 'https://dubailand.gov.ae/en/eservices/registration-and-renewal-of-lease-application/' },
                ],
            },
        ],
        faqs: [
            { q: 'Who pays the Ejari fee — landlord or tenant?', a: 'DLD places responsibility for registration on the landlord, but in practice the tenant usually handles the filing and pays. Whatever you agree in the tenancy contract takes priority.' },
            { q: 'Do I need Ejari to connect DEWA?', a: 'Yes — DEWA requires the Ejari certificate/number before activating electricity and water.' },
            { q: 'What if my landlord refuses to register Ejari?', a: 'An unregistered contract cannot be used at the Rental Disputes Centre and blocks DEWA/visa processes. Raise it with the landlord in writing; the tenancy law (Law No. 26 of 2007, as amended) underpins the registration duty.' },
        ],
    },
    {
        slug: 'how-to-set-up-dewa-electricity-water-dubai',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Set Up DEWA Electricity and Water in Dubai (Move-In, Deposit & Fees)',
        metaTitle: 'DEWA Move-In: Ejari, Deposit, Activation Fees & Steps (2026)',
        description: 'Activate electricity and water with DEWA: Ejari first, move-in request, refundable deposit, activation charges, and 24-hour connection.',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Minutes to apply; supply within 24 hours of payment',
        totalCost: 'Deposit AED 2,000 (flat) / 4,000 (villa) + activation AED 130/330',
        summary: 'Tenants activate electricity and water through DEWA "Activation of Electricity/Water (Move-in)" service on dewa.gov.ae or the DEWA Smart App. You need a registered Ejari — entering a valid Ejari number pre-fills the application and no documents are required. Pay the refundable security deposit plus activation charges; DEWA connects supply within 24 hours of payment.',
        documents: [
            'Ejari number (no documents needed with a valid Ejari)',
            'Without Ejari linkage: tenancy contract, Emirates ID, passport copy',
            'Owners: title deed',
            '9-digit DEWA premise number (on the property gate/meter)',
        ],
        steps: [
            {
                phase: 'before', title: 'Register Ejari first', detail: 'Complete Ejari registration (see the Ejari guide). Note your Ejari number and the 9-digit DEWA premise number found on the property gate or meter.', duration: 'See Ejari guide',
                links: [
                    { label: 'Ejari FAQ (DEWA)', href: 'https://www.dewa.gov.ae/en/consumer/miscellanies/ejari-faq' },
                ],
            },
            {
                phase: 'submit', title: 'Submit the Move-in request', detail: 'On dewa.gov.ae or the DEWA Smart App, choose Activation of Electricity/Water (Move-in), enter the Ejari and premise numbers, move-in date, and contact details. Alternatively apply at a DEWA Customer Happiness Centre.', duration: 'Minutes',
                links: [
                    { label: 'Activation of Electricity/Water — Move-in (DEWA)', href: 'https://dewa.gov.ae/en/consumer/supply-management/pre-login-activation-of-electricity-water-move-in' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the deposit and activation fees', detail: 'Pay online (card / smart payment channels) or at a centre. Refundable security deposit: AED 2,000 (flat/apartment) or AED 4,000 (villa). Activation: AED 100 connection (small meters) or AED 300 (large meters) + AED 10 registration + AED 10 knowledge + AED 10 innovation = AED 130 / 330 total. Thukher (senior Emiratis) and Sanad (people of determination) cardholders get 50% off activation charges.', duration: 'Immediate', cost: 'Deposit AED 2,000/4,000 + activation AED 130/330',
                links: [
                    { label: 'Activation of Electricity/Water — Move-in (DEWA)', href: 'https://dewa.gov.ae/en/consumer/supply-management/pre-login-activation-of-electricity-water-move-in' },
                ],
            },
            {
                phase: 'wait', title: 'Supply is connected', detail: 'DEWA activates electricity and water after payment; you receive SMS/email confirmation.', duration: 'Within 24 hours of payment',
                links: [
                    { label: 'Activation of Electricity/Water — Move-in (DEWA)', href: 'https://dewa.gov.ae/en/consumer/supply-management/pre-login-activation-of-electricity-water-move-in' },
                ],
            },
            {
                phase: 'followup', title: 'Bills and account', detail: 'Bills arrive monthly by email/SMS; manage via the DEWA Smart App or website. A previous final bill on the premise must be settled before a new activation.', duration: 'Ongoing',
                links: [
                    { label: 'Ejari FAQ (DEWA)', href: 'https://www.dewa.gov.ae/en/consumer/miscellanies/ejari-faq' },
                ],
            },
        ],
        faqs: [
            { q: 'Can I activate DEWA without Ejari?', a: 'For online/smart-app move-in, DEWA requires the Ejari number (per its official FAQ). Without it, apply at a Customer Happiness Centre with your tenancy documents.' },
            { q: 'Do I get the security deposit back?', a: 'Yes — it is refundable and adjusted against your final bill when you close the account (move-out), with any balance refunded.' },
            { q: 'I moved within Dubai — do I open a new account?', a: 'Use DEWA "Move To" transfer service instead of a fresh activation; the deposit transfers with you (top up only if moving flat to villa).' },
        ],
    },
    {
        slug: 'how-to-apply-for-a-uae-tourist-visa',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-14',
        title: 'How to Apply for a UAE Tourist Visa (Types, Fees & Overstay Fines)',
        metaTitle: 'UAE Tourist Visa: Types, Fees, Extension & Overstay Fines (2026)',
        description: '30/60/90-day tourist visas and the self-sponsored 5-year multiple-entry visa: channels, documents, fees, extensions, and the AED 50/day overstay fine.',
        category: 'immigration',
        audience: ['Visitor'],
        difficulty: 'Easy',
        totalTime: '~2–5 working days',
        totalCost: 'Varies by type & channel (confirm current fee in portal)',
        summary: 'Most visitors need a tourist visa unless their nationality qualifies for visa on arrival. Apply online through the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) or Dubai GDRFA, or through a UAE-based airline, licensed travel agency, or hotel. Standard options include 30, 60, and 90-day stays, single or multiple entry, plus a self-sponsored 5-year multiple-entry visa. UAE embassies do not issue tourist visas.',
        documents: [
            'Passport copy (valid 6+ months)',
            'Passport-size colour photo',
            'Travel/health insurance valid in the UAE (required for the 5-year visa)',
            'Return/onward ticket (required for the 5-year visa)',
            'For the 5-year visa: 6-month bank statements showing a USD 4,000+ balance',
            'Airline/hotel/agency applications may ask for hotel booking and ticket proof',
        ],
        steps: [
            {
                phase: 'before', title: 'Check if you need a visa', detail: 'Many nationalities (e.g. UK, US, EU, Australia, Japan) get visa on arrival instead — check your nationality status on u.ae / ICP before applying.', duration: 'Self-check',
                links: [
                    { label: 'Tourist visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa' },
                ],
            },
            {
                phase: 'before', title: 'Pick your visa type and channel', detail: 'Choose 30/60/90-day single or multiple entry, or the 5-year multi-entry visa. Apply via ICP smart services, GDRFA Dubai, a UAE airline (Emirates, Etihad, flydubai — condition: flying with them), a licensed travel agency, or a hotel (condition: ticket + hotel booking with them).', duration: 'Self-check',
                links: [
                    { label: 'Tourist visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa' },
                ],
            },
            {
                phase: 'submit', title: 'Submit the application', detail: 'Enter passport details, upload photo/passport/insurance, and (for the 5-year visa) bank statements. The sponsor (airline/agency/hotel) or you submit to ICP/GDRFA.', duration: 'Minutes',
                links: [
                    { label: 'Tourist visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the government fees', detail: 'Pay online by card. Agency/airline/hotel prices include their service charges on top of government fees. One verified ICP category — a 60-day visa for nationals of certain countries (India, Kenya, Indonesia, Vietnam, Thailand, Philippines, South Africa) holding a US/EU/UK visa or specified residence permit: AED 250 issuance + AED 100 smart services, and this category is non-extendable. Confirm the current fee for your exact visa type in the portal before paying.', duration: 'At application', cost: 'Varies by type (one ICP 60-day category: AED 350)',
                links: [
                    { label: 'ICP visa service', href: 'https://icp.gov.ae/en/services-details/?serviceid=68f5bcdb8c587a0011cb16d5' },
                ],
            },
            {
                phase: 'receive', title: 'Get your entry permit', detail: 'Issued as an e-visa/entry permit by email. Most entry permits give 60 days from issuance to enter the UAE; check the validity printed on your permit — exceptions apply, e.g. GCC residents’ e-visas give 30 days from issue (u.ae).', duration: 'Varies — confirm in the portal',
                links: [
                    { label: 'Tourist visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa' },
                ],
            },
            {
                phase: 'followup', title: 'Extend before expiry if needed', detail: 'Most standard tourist/visit visas can be extended from inside the UAE — but the 60-day ICP category above is non-extendable, so check your visa type first. Apply via ICP/GDRFA or your issuing sponsor, and confirm the current extension fee in the portal.', duration: 'Before expiry',
                links: [
                    { label: 'Tourist visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa' },
                ],
            },
            {
                phase: 'receive', title: 'Leave on time', detail: 'Leave by the last day of permitted stay. Overstay fine: AED 50 per day (ICP). Settle fines before departure or a status change.', duration: 'By last permitted day', cost: 'Overstay AED 50/day',
                links: [
                    { label: 'ICP visa service', href: 'https://icp.gov.ae/en/services-details/?serviceid=68f5bcdb8c587a0011cb16d5' },
                ],
            },
        ],
        faqs: [
            { q: 'Can a UAE embassy issue my tourist visa?', a: 'No — UAE embassies do not issue tourist visas. Apply through ICP/GDRFA online, or a UAE airline, licensed travel agency, or hotel (u.ae).' },
            { q: 'Do I need a sponsor for a tourist visa?', a: 'The airline, hotel, or travel agency acts as the facilitator/sponsor for standard tourist visas. The 5-year multiple-entry visa is self-sponsored — no host needed (u.ae).' },
            { q: 'What happens if I overstay?', a: 'A fine of AED 50 per day applies (ICP official service page). Settle fines before departure or a status change.' },
        ],
    },
];
