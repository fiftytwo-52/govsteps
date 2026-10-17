// UAE guides — batch 2. Verified against official UAE government sources
// (u.ae, ICP, MOHRE) on 2026-10-13. Figures marked "confirm" could not be
// confirmed on an official fee schedule; check the linked official portal.

import type { Guide } from './types';

export const guides: Guide[] = [
    {
        slug: 'how-to-apply-for-a-uae-green-visa',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-17',
        title: 'How to Apply for a UAE Green Visa (5-Year Self-Sponsored Residence)',
        metaTitle: 'UAE Green Visa: Who Qualifies, How to Apply, Fees (2026)',
        description: 'The 5-year self-sponsored Green Visa for skilled workers, freelancers/self-employed, and investors: eligibility thresholds, MOHRE permits, documents, fees, and application steps.',
        category: 'immigration',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: '1–3 weeks (end to end)',
        totalCost: 'Varies — confirm on ICP (residence issuance per ICP fee list: AED 100 application + AED 100/year + AED 100 smart services)',
        summary: 'The Green Visa is a renewable 5-year residence visa that needs no sponsor and lets holders sponsor family members, including spouses and children. Three categories qualify: skilled workers, freelancers and self-employed people, and investors and business partners. Each category has its own permit and income or investment test, and all applicants complete the usual medical test, Emirates ID, and residence issuance steps.',
        documents: [
            'Passport (at least 6 months remaining)',
            'Passport-size photo (white background)',
            'MOHRE skilled-worker or freelancing/self-employment permit (skilled and freelancer routes)',
            'Bachelor degree or specialised diploma (skilled and freelancer routes)',
            'Salary certificate (skilled route)',
            'Income proof or proof of financial solvency (freelancer route)',
            'Investment or partnership proof + trade licence (investor route)',
            'Health insurance (mandatory)',
            'Medical fitness certificate',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm your category and threshold', detail: 'Skilled workers: MOHRE skilled-worker permit, Skill Levels 1–3, bachelor degree or equivalent, and a minimum monthly salary of AED 15,000 (per Cabinet Resolution No. 65 of 2022). Freelancers/self-employed: MOHRE freelancing or self-employment permit, degree or specialised diploma, and annual self-employment income of at least AED 360,000 over the previous two years, or proof of financial solvency. Investors/partners: contribution to a UAE company of at least AED 1,000,000 (per ICP residence rules), or proof of partnership plus licences and approvals.', duration: 'Self-check',
                links: [
                    { label: 'Green visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Investor-visa/Green-visa' },
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'fill', title: 'Get your MOHRE permit (skilled and freelancer routes)', detail: 'Apply for the skilled-worker permit or the freelancing/self-employment permit through MOHRE. Investors arrange their company approvals and licences instead.', duration: 'Varies',
                links: [
                    { label: 'Green visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Investor-visa/Green-visa' },
                ],
            },
            {
                phase: 'submit', title: 'Apply through ICP (or GDRFA in Dubai)', detail: 'Apply via the ICP Smart Services website/app, or GDRFA Dubai if you will live in Dubai. If you are outside the UAE, an entry permit is issued first; if you are already inside, apply for a status change instead (AED 500).', duration: 'Varies', cost: 'AED 500 status adjustment (if already in UAE)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'go', title: 'Pass the medical fitness test', detail: 'Blood test plus chest X-ray at an approved medical fitness centre. Required for applicants aged 18 and over. The fee varies by emirate and centre.', duration: 'Result typically same/next day', cost: 'Varies by emirate/centre',
                links: [
                    { label: 'Green visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Investor-visa/Green-visa' },
                ],
            },
            {
                phase: 'go', title: 'Complete Emirates ID biometrics', detail: 'Fingerprints and photo at an ICP service centre or authorised centre. Emirates ID issuance runs alongside the residence process.', duration: 'Same-day appointment',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'submit', title: 'Green Residence permit is issued', detail: 'The 5-year Green Residence permit is issued once the medical is cleared. Per ICP\'s published fee list: AED 100 application + AED 100 per year issuance (AED 500 for 5 years) + AED 100 smart services, plus AED 500 status adjustment if you applied from inside the UAE.', duration: 'Varies', cost: 'From ~AED 700 (plus AED 500 status adjustment if in-country)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'followup', title: 'Sponsor family and renew', detail: 'Green Visa holders can sponsor family members, including spouses, children, and first-degree relatives, under the family sponsorship rules. Renew before expiry by showing you still meet your category\'s conditions.', duration: 'With residence renewal',
                links: [
                    { label: 'Residence visa for family members (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members' },
                ],
            },
        ],
        faqs: [
            { q: 'Do I need a sponsor for a Green Visa?', a: 'No — the Green Visa is self-sponsored; no employer or Emirati sponsor is required.' },
            { q: 'Can I sponsor my family on a Green Visa?', a: 'Yes — holders can sponsor spouses, children, and first-degree relatives under the family sponsorship rules.' },
            { q: 'How long is the Green Visa valid?', a: '5 years, renewable for a similar period if you still meet your category\'s conditions.' },
        ],
    },
    {
        slug: 'how-to-apply-for-a-uae-remote-work-visa',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-17',
        title: 'How to Apply for a UAE Remote Work Visa (Virtual Working Programme)',
        metaTitle: 'UAE Remote Work Visa (Virtual Working Programme): Requirements & Steps (2026)',
        description: 'Live in the UAE while working remotely for a company outside the UAE: USD 3,500/month income proof, employer letter, health insurance, entry permit, and residence steps.',
        category: 'immigration',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: '1–3 weeks (end to end)',
        totalCost: 'Varies — confirm on ICP/GDRFA (plus medical, Emirates ID, and insurance)',
        summary: 'Under the virtual work visa, a foreigner may live in the UAE while working for a company outside the UAE. The core conditions per u.ae: proof of work outside the UAE and a salary certificate showing at least USD 3,500 per month (or equivalent in foreign currency), plus health insurance and a medical fitness test. The visa is valid 1 year and renewable. Apply to ICP, or to GDRFA Dubai if you will live in Dubai.',
        documents: [
            'Passport (at least 6 months remaining)',
            'Passport-size photo (white background)',
            'Employment contract or employer letter confirming remote work for a company outside the UAE',
            'Salary certificate showing at least USD 3,500/month (or equivalent)',
            'Bank statements showing income (as requested in-portal)',
            'Proof of work outside the UAE',
            'Health insurance valid in the UAE',
            'Medical fitness certificate',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you qualify', detail: 'You must be employed by, or contracted to, a company or organisation based outside the UAE, and your work must be performed remotely. Your income must be at least USD 3,500 per month or equivalent in foreign currency. The federal rule (Cabinet Resolution 65/2022, Art. 50) sets one income test — USD 3,500/month — for all applicants; confirm whether GDRFA Dubai applies any different test before applying. You may not work for a UAE-based employer on this visa.', duration: 'Self-check',
                links: [
                    { label: 'Residence visa for working outside the UAE (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-working-outside-the-uae' },
                ],
            },
            {
                phase: 'fill', title: 'Gather your proof', detail: 'Employer letter or contract showing the foreign employer and remote arrangement, salary certificate (USD 3,500+/month), bank statements, and health insurance. Make sure the income evidence is verifiable — a bare declaration is not enough.', duration: 'Varies',
                links: [
                    { label: 'Residence visa for working outside the UAE (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-working-outside-the-uae' },
                ],
            },
            {
                phase: 'submit', title: 'Apply to ICP or GDRFA Dubai', detail: 'Apply via ICP Smart Services (other emirates) or GDRFA Dubai (Dubai) — Dubai\'s programme is branded the Virtual Working Programme. If you are outside the UAE, an entry permit is issued first.', duration: 'Varies',
                links: [
                    { label: 'Residence visa for working outside the UAE (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-working-outside-the-uae' },
                ],
            },
            {
                phase: 'go', title: 'Enter the UAE on the entry permit', detail: 'Enter within the entry permit\'s validity window. If you are already inside the UAE, apply for a status change instead (AED 500).', duration: 'Entry permit validity per issuance', cost: 'AED 500 status adjustment (if already in UAE)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'go', title: 'Pass the medical fitness test', detail: 'Blood test plus chest X-ray at an approved medical fitness centre. The fee varies by emirate and centre.', duration: 'Result typically same/next day', cost: 'Varies by emirate/centre',
                links: [
                    { label: 'Residence visa for working outside the UAE (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-working-outside-the-uae' },
                ],
            },
            {
                phase: 'go', title: 'Complete Emirates ID biometrics', detail: 'Fingerprints and photo at an ICP service centre or authorised centre, alongside the residence process.', duration: 'Same-day appointment',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'submit', title: 'Residence permit is issued', detail: 'The virtual work residence permit is issued for 1 year and renewable if you still meet the conditions. Confirm the current residence issuance fees in the ICP/GDRFA portal at application time.', duration: 'Varies',
                links: [
                    { label: 'Residence visa for working outside the UAE (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-working-outside-the-uae' },
                ],
            },
        ],
        faqs: [
            { q: 'Can I work for a UAE company on this visa?', a: 'No — the visa covers work for a company outside the UAE only. UAE-based employment needs a different visa (e.g. an employment or freelance permit route).' },
            { q: 'Can my family join me?', a: 'You may sponsor family members under the usual family sponsorship rules — confirm the current salary and document requirements with ICP/GDRFA.' },
            { q: 'How long is the visa valid?', a: '1 year, renewable if you still meet the income and remote-work conditions.' },
        ],
    },
    {
        slug: 'how-to-apply-for-a-uae-student-visa',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-17',
        title: 'How to Apply for a UAE Student Visa (University-Sponsored Residence)',
        metaTitle: 'UAE Student Visa: Requirements, Sponsor, Fees & Renewal (2026)',
        description: 'Study in the UAE on a residence visa sponsored by your accredited university or a resident parent: admission letter, study-duration certificate, medical, Emirates ID, and renewal.',
        category: 'students',
        audience: ['Student'],
        difficulty: 'Medium',
        totalTime: '2–4 weeks (end to end)',
        totalCost: 'Varies — confirm on ICP (residence issuance per ICP fee list + medical + Emirates ID + insurance)',
        summary: 'A student can stay in the UAE for studying either under the sponsorship of a resident parent or under the sponsorship of the accredited university or college they study at — universities facilitate the process. The student residence permit is issued for the duration of the study programme, and you may remain in the UAE for 180 days after completing the study period. Renew/extend in line with continued enrolment. You will need an admission letter, a university certificate stating the duration of study, a medical fitness test, an Emirates ID, and health insurance.',
        documents: [
            'Passport (at least 6 months remaining)',
            'Passport-size photo (white background)',
            'Admission letter / enrolment certificate from an accredited UAE university or college',
            'University certificate specifying the duration of study',
            'Medical fitness certificate',
            'Emirates ID application receipt',
            'Health insurance certificate',
            'Parent\'s passport + residence permit (if parent-sponsored)',
        ],
        steps: [
            {
                phase: 'before', title: 'Get admitted to an accredited institution', detail: 'Secure admission to an accredited UAE university, college, or research institute. The institution (or a resident parent) will be your sponsor — confirm which sponsorship route your university uses before you apply.', duration: 'Varies by institution',
                links: [
                    { label: 'Residence visa for studying in the UAE (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/residence-visa-for-studying-in-the-uae' },
                ],
            },
            {
                phase: 'fill', title: 'Gather your documents', detail: 'Admission letter, university certificate stating the duration of study, passport copy, photo, and (if parent-sponsored) the parent\'s passport and residence details. The university\'s visa office usually tells you its exact checklist.', duration: 'Varies',
                links: [
                    { label: 'Residence visa for studying in the UAE (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/residence-visa-for-studying-in-the-uae' },
                ],
            },
            {
                phase: 'submit', title: 'Apply through the university / ICP', detail: 'The university facilitates the application via ICP (or GDRFA Dubai for Dubai-based institutions). If you are outside the UAE, an entry permit is issued first; if already inside, apply for a status change (AED 500).', duration: 'Varies', cost: 'AED 500 status adjustment (if already in UAE)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'go', title: 'Pass the medical fitness test', detail: 'Blood test plus chest X-ray at an approved medical fitness centre, required for applicants aged 18 and over. The fee varies by emirate and centre.', duration: 'Result typically same/next day', cost: 'Varies by emirate/centre',
                links: [
                    { label: 'Residence visa for studying in the UAE (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/residence-visa-for-studying-in-the-uae' },
                ],
            },
            {
                phase: 'go', title: 'Complete Emirates ID biometrics', detail: 'Fingerprints and photo at an ICP service centre or authorised centre, alongside the residence process.', duration: 'Same-day appointment',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'submit', title: 'Residence permit is issued', detail: 'The student residence permit is issued for the duration of the study programme (per ICP), and you may remain in the UAE for 180 days after completing the study period. Per ICP\'s published fee list, residence issuance is AED 100 application + AED 100 per year + AED 100 smart services; confirm the total in-portal, plus medical, Emirates ID, and insurance costs.', duration: 'Varies', cost: 'From ~AED 300 (residence issuance)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'followup', title: 'Renew/extend with continued enrolment', detail: 'Extend in line with continued enrolment (a fresh university certificate of study duration). Male students over 25 on a parent\'s sponsorship need evidence of attending a higher educational institute to stay on the parent\'s sponsorship.', duration: 'Before expiry',
                links: [
                    { label: 'Residence visa for studying in the UAE (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/residence-visa-for-studying-in-the-uae' },
                ],
            },
        ],
        faqs: [
            { q: 'Who sponsors a student visa — the university or a parent?', a: 'Either. You can be sponsored by the accredited university/college you study at, or by a resident parent. Universities usually facilitate the process for their students.' },
            { q: 'How long is a student visa valid?', a: 'For the duration of the study programme, extendable with proof of continued enrolment — plus 180 days after completing the study period.' },
            { q: 'Can I work while studying on a student visa?', a: 'Part-time work may be possible with your university\'s permission and the relevant permit — confirm the current rules with your university and MOHRE before taking any job.' },
        ],
    },
    {
        slug: 'how-to-extend-a-uae-visit-visa',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Extend a UAE Visit Visa From Inside the UAE',
        metaTitle: 'Extend UAE Visit Visa Without Exit: Fees, Rules & Steps (2026)',
        description: 'Extend a tourist or visit visa without leaving the UAE: sponsor applies via ICP or GDRFA, 30-day extensions, fees, and what happens if the visa expires.',
        category: 'immigration',
        audience: ['Visitor'],
        difficulty: 'Easy',
        totalTime: 'Varies (typically days)',
        totalCost: 'ICP: AED 100 application + AED 500 extension per 30-day extension; GDRFA Dubai: AED 600 + 5% VAT (+ inside-country charges where applicable) — confirm in portal',
        summary: 'Most visit and tourist visas can be extended from inside the UAE without exiting, in 30-day blocks. The extension must be applied for by the visa\'s sponsor — the travel agency or airline for a tourist visa, or the family member for a family visit visa. Apply through ICP (visas issued outside Dubai) or GDRFA Dubai (Dubai-issued visas), and always apply before the current visa expires: overstay fines of AED 50/day apply after expiry.',
        documents: [
            'Passport copy (valid at least 6 months)',
            'Copy of the current visit/tourist visa',
            'Recent personal photo (white background)',
            'Documents submitted with the original visa application (if requested)',
            'Sponsor details (travel agency, airline, or family sponsor)',
        ],
        steps: [
            {
                phase: 'before', title: 'Check who issued your visa and when it expires', detail: 'Dubai-issued visas go through GDRFA Dubai; visas issued in other emirates (or via ICP) go through ICP. Note your exact expiry date — apply before it, not after.', duration: 'Self-check',
                links: [
                    { label: 'Tourist visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa' },
                ],
            },
            {
                phase: 'before', title: 'Confirm your visa can be extended', detail: 'Per ICP, visit and tourist entry permits can be extended for 30 days, twice only, regardless of the original visa term. Some categories are excluded (e.g. GCC-companion permits, 96-hour mission permits). A cumulative-stay cap applies by visa type — confirm your cap in the portal before applying.', duration: 'Self-check',
                links: [
                    { label: 'ICP extension rules (ICP)', href: 'https://icp.gov.ae/en/media-center/ica-extends-residency-for-widows-and-divorcees-graduate-sponsorship-and-extends-visit-and-wednesday-17-october-2018/' },
                ],
            },
            {
                phase: 'submit', title: 'Your sponsor applies', detail: 'The sponsor submits the extension: the travel agency or tourism company for a tourist visa, or the family sponsor for a family visit visa. Apply via ICP Smart Services (non-Dubai visas) or GDRFA Dubai (Dubai visas), or via a typing/Amer centre.', duration: 'Varies',
                links: [
                    { label: 'Tourist visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the extension fees', detail: 'ICP: AED 100 application + AED 500 extension per 30-day extension. GDRFA Dubai: AED 600 extension fee + 5% VAT, plus inside-country charges where applicable (Knowledge Dirham, Innovation Dirham, inside-country fee) — confirm the exact total in the portal before paying.', duration: 'At application', cost: 'From ~AED 600 per extension (varies by authority)',
                links: [
                    { label: 'ICP extension rules (ICP)', href: 'https://icp.gov.ae/en/media-center/ica-extends-residency-for-widows-and-divorcees-graduate-sponsorship-and-extends-visit-and-wednesday-17-october-2018/' },
                ],
            },
            {
                phase: 'wait', title: 'Wait for approval', detail: 'Processing time varies by authority and case. Keep your application reference number and do not travel until the extension is confirmed.', duration: 'Varies',
                links: [
                    { label: 'Tourist visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa' },
                ],
            },
            {
                phase: 'receive', title: 'Get the extended entry permit', detail: 'Check the new expiry date on the extended permit. Once the maximum extensions are used, you must exit the UAE before applying for a new visa.', duration: 'On approval',
                links: [
                    { label: 'Tourist visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa' },
                ],
            },
        ],
        faqs: [
            { q: 'Who applies for the extension — me or my sponsor?', a: 'Your sponsor. For a tourist visa, the travel agency or airline that issued it applies; for a family visit visa, the family sponsor applies.' },
            { q: 'How many times can I extend a visit visa?', a: 'Per ICP, visit and tourist entry permits can be extended for 30 days, twice only. Some categories are excluded entirely.' },
            { q: 'What if my visa already expired?', a: 'Overstay fines of AED 50/day apply (u.ae). Settle the fines and speak to the issuing authority — an expired visa may no longer be extendable, and you may have to exit.' },
        ],
    },
    {
        slug: 'how-to-check-uae-visa-status-online',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Check Your UAE Visa Status Online (ICP & GDRFA)',
        metaTitle: 'Check UAE Visa Status Online: ICP & GDRFA Enquiry (2026)',
        description: 'Check any UAE visa or file status online: ICP smart services for non-Dubai visas, GDRFA for Dubai visas — by passport or file number, and what each status means.',
        category: 'immigration',
        audience: ['Expat', 'Visitor'],
        difficulty: 'Easy',
        totalTime: 'Minutes',
        totalCost: 'Free (online status enquiry)',
        summary: 'You can check the status of a UAE visa, entry permit, or residence file online in minutes. Use ICP Smart Services (website or app) for visas issued outside Dubai, and GDRFA Dubai for Dubai-issued visas. You will need your passport number, and ideally the file (unified) number or Emirates ID. The result shows the visa type, sponsor, issue and expiry dates, and whether the file is valid, expired, cancelled, or still under process.',
        documents: [
            'Passport number (as on the visa)',
            'File (unified) number, if available',
            'Emirates ID number (for residence files)',
            'Nationality and date of birth (as requested in-portal)',
            'Copy of the visa or entry permit being checked (if available)',
        ],
        steps: [
            {
                phase: 'before', title: 'Find your identifier', detail: 'Locate your passport number, and ideally the file (unified) number printed on your visa/entry permit, or your Emirates ID number for residence files. Use the exact spelling and numbers from the visa document.', duration: 'Minutes',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
            {
                phase: 'go', title: 'Open the right portal', detail: 'Visas issued outside Dubai: ICP Smart Services website or the UAEICP app. Dubai-issued visas: GDRFA Dubai smart services. Using the wrong authority is the most common reason an enquiry returns no result.', duration: 'Minutes',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'fill', title: 'Enter your details', detail: 'Choose the visa/file validity enquiry and enter your passport number (and file number, Emirates ID, nationality, or date of birth as requested). Double-check each digit before submitting.', duration: 'Minutes',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'receive', title: 'Read the result', detail: 'The result shows the visa type, sponsor, issue and expiry dates, and the file status. Valid/active means the visa is in force. Under process means the application is still being decided. Expired or cancelled means it is no longer valid — act on it immediately (renew, extend, or exit as applicable).', duration: 'Immediate',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
            {
                phase: 'followup', title: 'Act on what you find', detail: 'If the visa is expiring soon, renew or extend before the expiry date. If it shows an overstay or fines, settle them via ICP/GDRFA before travelling or changing status. If the enquiry returns no result, re-check the authority (ICP vs GDRFA) and your identifiers.', duration: 'Before expiry',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
        ],
        faqs: [
            { q: 'Why does my enquiry return no result?', a: 'Usually the wrong authority (ICP vs GDRFA Dubai) or a mistyped identifier. Check which emirate issued the visa and re-enter the passport/file number exactly as printed.' },
            { q: 'Can someone else check my visa status?', a: 'Yes — a sponsor, typing centre, or Amer centre can enquire with your passport/file details.' },
            { q: 'What does "under process" mean?', a: 'The application has been received and is still being decided. Wait for the decision before travelling or assuming the visa is valid.' },
        ],
    },
    {
        slug: 'how-to-pay-uae-overstay-fines',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Pay UAE Overstay Fines (AED 50/Day) & Clear Your File',
        metaTitle: 'Pay UAE Overstay Fines: AED 50/Day, How to Check & Pay (2026)',
        description: 'Overstayed a visit, tourist, or residence visa? Check your fines on ICP/GDRFA, pay online, at a centre, or at the airport — then exit or change status.',
        category: 'immigration',
        audience: ['Visitor', 'Expat'],
        difficulty: 'Easy',
        totalTime: 'Same day',
        totalCost: 'AED 50/day overstay fine (u.ae) + any status-change or exit fees',
        summary: 'The UAE has standardised overstay fines at AED 50 per day for visit, tourist, and residence visas (u.ae). Do not assume a grace period — fines run from the day after expiry. Check the amount on ICP or GDRFA, pay online, at a typing/Amer centre, or at the airport, and keep the receipt. Paying the fine alone does not extend your stay: you must then exit the UAE or change status.',
        documents: [
            'Passport',
            'Visa / file (unified) number',
            'Emirates ID (for residence overstays)',
            'Payment card (for online payment)',
            'Fine payment receipt (keep after paying)',
        ],
        steps: [
            {
                phase: 'before', title: 'Check your status and fine total', detail: 'Use the ICP (non-Dubai visas) or GDRFA Dubai (Dubai visas) status enquiry with your passport/file number to confirm the overstay days and the fine total. The fine is AED 50 per day per u.ae.', duration: 'Minutes', cost: 'AED 50/day',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the fine', detail: 'Pay online via ICP Smart Services or the GDRFA portal, at a typing/Amer centre, or at the airport on departure. Pay online before travelling where possible — an unpaid fine can delay or block departure.', duration: 'Same day', cost: 'AED 50/day',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
            {
                phase: 'receive', title: 'Keep the payment receipt', detail: 'Save the payment receipt or clearance confirmation. You may need it at the airport, at a typing centre, or for a later status-change application.', duration: 'Immediate',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
            {
                phase: 'followup', title: 'Exit or change status', detail: 'After paying, either leave the UAE or apply for a status change (AED 500) if you have a new visa to move to. Paying the fine does not itself extend your stay.', duration: 'Immediately after payment', cost: 'AED 500 status adjustment (if changing status)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'followup', title: 'Long overstays: contact the authority', detail: 'For long overstays, additional steps or consequences may apply. Contact ICP or GDRFA (or visit a centre) before booking travel, so your file is fully cleared.', duration: 'Varies',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
        ],
        faqs: [
            { q: 'How much is the overstay fine?', a: 'AED 50 per day for visit, tourist, and residence visa overstays, standardised per u.ae.' },
            { q: 'Can I pay the fine at the airport?', a: 'Yes — fines can be settled at the airport on departure. Pay online first where possible to avoid delays or a missed flight.' },
            { q: 'Does paying the fine extend my stay?', a: 'No. After paying, you must exit the UAE or change status to a new visa. The fine only clears what you owe.' },
        ],
    },
    {
        slug: 'how-to-apply-for-a-uae-retirement-visa',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Apply for a UAE Retirement Visa (5-Year Residence for Retirees)',
        metaTitle: 'UAE Retirement Visa: Age, Income, Property & Savings Rules (2026)',
        description: 'Retire in the UAE on a 5-year residence visa: age 55+, 15 years of work, and property + savings or income thresholds — including Dubai\'s higher income test.',
        category: 'immigration',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: '1–3 weeks (end to end)',
        totalCost: 'Varies — confirm on ICP (residence issuance per ICP fee list + medical + Emirates ID + insurance)',
        summary: 'Retired foreigners can apply for a 5-year residence visa. Per u.ae, you must have worked at least 15 years (inside or outside the UAE) and be at least 55 at retirement, plus meet one of two financial conditions: own property worth at least AED 1 million AND have savings of at least AED 1 million, OR have annual income of at least AED 180,000. To apply from Dubai, the annual fixed income must be at least AED 240,000.',
        documents: [
            'Passport (at least 6 months remaining)',
            'Passport-size photo (white background)',
            'Proof of age (55+)',
            'Proof of at least 15 years of work history',
            'Property title deed (if using the property route)',
            'Bank statements for the last 6 months (savings/income proof)',
            'Income proof / letter (if using the income route)',
            'Medical fitness certificate',
            'Health insurance (mandatory)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you meet the conditions', detail: 'Age 55+ AND at least 15 years of work (inside or outside the UAE), plus ONE financial condition: (1) property worth at least AED 1 million AND savings of at least AED 1 million, or (2) annual income of at least AED 180,000 (or equivalent in foreign currency). Dubai applications: annual fixed income must be at least AED 240,000. Meeting only one side of the property-plus-savings pair is not enough.', duration: 'Self-check',
                links: [
                    { label: 'Residence visa for the retired (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-the-retired' },
                ],
            },
            {
                phase: 'fill', title: 'Gather your financial proof', detail: 'Property route: title deed plus bank statements showing savings of at least AED 1 million. Income route: income proof plus 6-month bank statements showing the annual income. Confirm the exact document list in the ICP/GDRFA portal before applying.', duration: 'Varies',
                links: [
                    { label: 'Residence visa for the retired (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-the-retired' },
                ],
            },
            {
                phase: 'submit', title: 'Apply via ICP (or GDRFA in Dubai)', detail: 'Apply through the ICP Smart Services website/app, or GDRFA Dubai if you will live in Dubai. If you are already inside the UAE on another visa, a status change (AED 500) may apply.', duration: 'Varies', cost: 'AED 500 status adjustment (if already in UAE)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'go', title: 'Pass the medical fitness test', detail: 'Blood test plus chest X-ray at an approved medical fitness centre. The fee varies by emirate and centre.', duration: 'Result typically same/next day', cost: 'Varies by emirate/centre',
                links: [
                    { label: 'Residence visa for the retired (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-the-retired' },
                ],
            },
            {
                phase: 'go', title: 'Complete Emirates ID biometrics', detail: 'Fingerprints and photo at an ICP service centre or authorised centre, alongside the residence process.', duration: 'Same-day appointment',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'submit', title: 'Residence permit is issued', detail: 'The retirement residence permit is issued for 5 years. Confirm the current residence issuance fees in the ICP/GDRFA portal at application time (ICP\'s published fee list: AED 100 application + AED 100 per year + AED 100 smart services).', duration: 'Varies', cost: 'From ~AED 700 (5-year residence issuance)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'followup', title: 'Renew and sponsor family', detail: 'Renew on continued eligibility. You may sponsor family members under the usual family sponsorship rules — confirm the current requirements with ICP/GDRFA.', duration: 'Before expiry',
                links: [
                    { label: 'Residence visa for family members (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members' },
                ],
            },
        ],
        faqs: [
            { q: 'Is the Dubai income threshold different?', a: 'Yes — to apply from Dubai, the annual fixed income must be at least AED 240,000, versus AED 180,000 elsewhere (u.ae).' },
            { q: 'Do I need BOTH property and savings, or either?', a: 'For the asset route, u.ae requires both: property worth at least AED 1 million AND savings of at least AED 1 million. The alternative is the income route.' },
            { q: 'Can I work on a retirement visa?', a: 'The retirement visa is a residence route, not a work permit. Confirm the current work rules with MOHRE/ICP if you plan to work.' },
        ],
    },
    {
        slug: 'how-to-sponsor-parents-residence-visa-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Sponsor Your Parents\' Residence Visa in the UAE',
        metaTitle: 'Sponsor Parents Residence Visa UAE: Salary, Deposit & Steps (2026)',
        description: 'Bring your parents to live in the UAE: salary and housing requirements, refundable deposit, medical insurance, documents, and the 1-year renewable residence process.',
        category: 'immigration',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: '1–3 weeks per parent',
        totalCost: 'Varies — confirm on ICP/GDRFA (+ refundable security deposit per parent — commonly reported AED 5,000)',
        summary: 'A UAE resident can sponsor both parents for a 1-year renewable residence visa. You must hold a valid residence visa, meet a minimum salary set by the issuing authority, and provide suitable housing, medical insurance for each parent, and proof of the relationship. A refundable security deposit per parent applies. Note: the salary threshold differs by issuing authority — Dubai applications commonly cite AED 10,000/month, while federal guidance has cited higher figures, so confirm the current threshold with ICP/GDRFA before applying.',
        documents: [
            'Sponsor passport + valid residence permit',
            'Sponsor Emirates ID',
            'Salary certificate / job contract',
            'Tenancy contract (Ejari) showing suitable housing',
            'Parents\' passports (at least 6 months remaining)',
            'Recent photos of each parent (white background)',
            'Attested birth certificate / consanguinity proof',
            'Consulate affidavit confirming you are the parents\' sole support',
            'Medical insurance for each parent',
            'Medical fitness certificates (parents aged 18+)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm your eligibility', detail: 'You must hold a valid residence visa, meet the minimum salary set by the issuing authority, and have suitable housing (a two-bedroom home is commonly required). The salary threshold differs by authority — Dubai applications commonly cite AED 10,000/month; confirm the current figure with ICP/GDRFA before applying.', duration: 'Self-check',
                links: [
                    { label: 'Residence visa for family members (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members' },
                ],
            },
            {
                phase: 'submit', title: 'Apply for each parent\'s entry permit', detail: 'Apply via ICP (or GDRFA in Dubai). Both parents are normally sponsored together; if one parent is deceased or the parents are divorced, provide the death certificate or divorce proof. If a parent is already in the UAE, apply for a status change instead (AED 500).', duration: 'Varies', cost: 'AED 500 status adjustment (if already in UAE)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'go', title: 'Parents enter the UAE', detail: 'Parents enter on the entry permit within its validity window, or complete the status change if already inside.', duration: 'Entry permit validity per issuance',
                links: [
                    { label: 'Residence visa for family members (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members' },
                ],
            },
            {
                phase: 'go', title: 'Medical fitness tests', detail: 'Each parent must undergo and pass the medical fitness test at an approved health centre. The fee varies by emirate and centre.', duration: 'Result typically same/next day', cost: 'Varies by emirate/centre',
                links: [
                    { label: 'Residence visa for family members (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members' },
                ],
            },
            {
                phase: 'go', title: 'Emirates ID for each parent', detail: 'Apply for each parent\'s Emirates ID (biometrics for ages 15+). Cost per ICP: AED 100 per year plus AED 100 smart fee.', duration: 'Same-day appointment', cost: 'From AED 200 (1-year card)',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'submit', title: 'Residence permits are issued', detail: 'Submit the residence application with all documents. The parent visa is valid 1 year and renewable. A refundable security deposit per parent is commonly reported at AED 5,000 — confirm the current amount with ICP/GDRFA before paying. Confirm residence issuance fees in-portal (ICP\'s published fee list: AED 100 application + AED 100 per year + AED 100 smart services).', duration: 'Varies', cost: 'From ~AED 300 per parent (residence issuance) + refundable deposit',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'followup', title: 'Renew annually and keep insurance active', detail: 'Renew each parent\'s residence and Emirates ID annually, and keep medical insurance active — it must be renewed every year.', duration: 'Before expiry',
                links: [
                    { label: 'Residence visa for family members (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members' },
                ],
            },
        ],
        faqs: [
            { q: 'What salary do I need to sponsor my parents?', a: 'The threshold differs by issuing authority. Dubai applications commonly cite AED 10,000/month, while federal guidance has cited higher figures — confirm the current threshold with ICP/GDRFA before applying.' },
            { q: 'Must I sponsor both parents together?', a: 'Normally yes — both parents are sponsored together. If one parent is deceased or the parents are divorced, provide the death certificate or divorce proof.' },
            { q: 'How long is a parent residence visa valid?', a: '1 year, renewable annually if you still meet the salary, housing, insurance, and deposit conditions.' },
        ],
    },
    {
        slug: 'how-to-get-a-residence-visa-for-a-newborn-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Get a Residence Visa for a Newborn in the UAE (120-Day Deadline)',
        metaTitle: 'Newborn Residence Visa UAE: Birth Certificate, Passport & 120-Day Rule (2026)',
        description: 'Your baby is born in the UAE: hospital birth notification, birth certificate, embassy passport, Emirates ID, and residence visa — all within 120 days of birth.',
        category: 'immigration',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: 'Within 120 days of birth',
        totalCost: 'Varies by emirate/authority — confirm (birth certificate + passport + residence + Emirates ID fees)',
        summary: 'Expatriate parents must complete their newborn\'s paperwork within 120 days of birth: register the birth and get a birth certificate, obtain the baby\'s passport from the parents\' embassy or consulate, apply for an Emirates ID, and secure the residence visa sponsored by a resident parent. Start with the hospital birth notification. Missing the 120-day deadline triggers daily fines — confirm the current fine rate with ICP/GDRFA.',
        documents: [
            'Hospital birth notification (Qaid number)',
            'Parents\' passports + Emirates IDs + residence visas',
            'Attested marriage certificate',
            'Birth certificate',
            'Baby\'s passport (from the parents\' embassy/consulate)',
            'Baby\'s passport-size photo',
            'Health insurance for the baby (for residence)',
        ],
        steps: [
            {
                phase: 'before', title: 'Get the hospital birth notification', detail: 'The hospital issues a birth notification (with a Qaid number) at delivery. Keep it safe — it is the starting document for the birth certificate.', duration: 'At delivery',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
            {
                phase: 'submit', title: 'Register the birth and get the birth certificate', detail: 'Apply through your emirate\'s health authority — DHA in Dubai, Department of Health in Abu Dhabi, or Emirates Health Services (EHS) in the northern emirates. MOHAP no longer issues birth certificates. Register the birth within 30 days. The certificate fee varies by authority — confirm in-portal.', duration: 'Within 30 days of birth', cost: 'Varies by authority',
                links: [
                    { label: 'Birth and death registration (MOHAP)', href: 'https://mohap.gov.ae/en/w/mohap-enhances-public-awareness-about-its-electronic-birth-and-death-registration-system' },
                ],
            },
            {
                phase: 'submit', title: 'Apply for the baby\'s passport', detail: 'Apply at the embassy or consulate of the parents\' home country in the UAE. Processing time and fees vary by embassy — apply as soon as the birth certificate is ready, since the passport is needed for the residence visa.', duration: 'Varies by embassy', cost: 'Varies by embassy',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
            {
                phase: 'go', title: 'Apply for the baby\'s Emirates ID', detail: 'Apply for the Emirates ID alongside the residence process. Young children are exempt from fingerprint biometrics (biometrics apply from age 15).', duration: 'Same-day application',
                links: [
                    { label: 'New Identity Card issuance (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e5a' },
                ],
            },
            {
                phase: 'submit', title: 'Secure the residence visa within 120 days', detail: 'The sponsoring parent (who must hold a valid residence visa and meet the family sponsorship rules) applies for the baby\'s residence visa via ICP or GDRFA. Complete everything within 120 days of birth — daily fines apply after the deadline (confirm the current rate with ICP/GDRFA).', duration: 'Within 120 days of birth', cost: 'Residence issuance per ICP fee list (confirm in-portal)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'followup', title: 'Arrange health insurance and keep documents', detail: 'Arrange health insurance for the baby and keep the birth certificate, passport, Emirates ID, and residence documents together — you will need them for school, travel, and future renewals.', duration: 'Ongoing',
                links: [
                    { label: 'Residence visa for family members (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Residence-visa/residence-visa-for-family-members' },
                ],
            },
        ],
        faqs: [
            { q: 'What is the deadline for a newborn\'s residence visa?', a: '120 days from birth. Complete the birth certificate, passport, Emirates ID, and residence visa within that window — daily fines apply after it (confirm the current rate with ICP/GDRFA).' },
            { q: 'Who sponsors the newborn\'s visa?', a: 'A resident parent who holds a valid residence visa and meets the family sponsorship rules. Either parent may sponsor, depending on whose status and income meet the requirements.' },
            { q: 'What if the baby was born outside the UAE?', a: 'The baby needs a passport and an entry permit to enter the UAE legally. Once in the country, complete the Emirates ID and residence steps the same way.' },
        ],
    },
    {
        slug: 'how-to-change-visa-status-without-leaving-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Change Visa Status Without Leaving the UAE (Status Change)',
        metaTitle: 'Change Visa Status Without Leaving UAE: AED 500 Status Change (2026)',
        description: 'Move from a visit visa to a residence visa (or between residence types) without exiting: status change via ICP/GDRFA, AED 500 fee, and when an exit is still required.',
        category: 'immigration',
        audience: ['Expat', 'Visitor'],
        difficulty: 'Easy',
        totalTime: 'Varies — often within days',
        totalCost: 'AED 500 status adjustment (ICP) + new visa/residence fees',
        summary: 'If you are already inside the UAE and get a new visa — for example, moving from a visit visa to an employment, Green, student, or family residence visa — you usually do not need to exit. Instead, you submit a Change of Status request within the country: AED 500 via ICP (GDRFA Dubai lists AED 500 plus Knowledge/Innovation dirham charges — confirm in-portal). The new visa must be secured first, and any previous residence permit cancelled where required.',
        documents: [
            'Passport (at least 6 months remaining)',
            'New entry permit / new visa approval',
            'Cancelled previous entry or residence permit (where applicable)',
            'Sponsor passport + residence details (where applicable)',
            'Emirates ID (if currently a resident)',
        ],
        steps: [
            {
                phase: 'before', title: 'Secure the new visa first', detail: 'The status change follows the new visa — get the new entry permit or visa approval (work permit, Green Visa, student, family, or other) before filing the status change. GDRFA Dubai requires applicants to hold the new visa before filing a status amendment.', duration: 'Varies by new visa type',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'before', title: 'Cancel the previous residence and settle fines', detail: 'Where required, cancel the previous residence permit first. Per ICP, a Change of Status request is submitted after cancelling the previous residence permit and upon the issuance of a new visa, or when violations need settling. Settle any fines on the old file before applying.', duration: 'Varies',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'submit', title: 'Apply for the status change', detail: 'Apply via ICP Smart Services (or GDRFA Dubai / Amer centre for Dubai files). ICP\'s published fee list shows Status Adjustment at AED 500. GDRFA Dubai lists AED 500 plus Knowledge/Innovation dirham charges — confirm the exact total in-portal.', duration: 'At application', cost: 'AED 500 (ICP)',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'wait', title: 'Wait for approval', detail: 'Processing time varies by authority and case. Do not travel until the status change is confirmed — leaving mid-process can break the transition.', duration: 'Varies',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'go', title: 'Complete the new residence steps', detail: 'After the status change, complete the remaining steps for the new residence type: medical fitness test, Emirates ID biometrics, and residence permit issuance.', duration: 'Varies',
                links: [
                    { label: 'Issuing Residency Permit (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64' },
                ],
            },
            {
                phase: 'receive', title: 'New residence issued — no exit needed', detail: 'The new residence permit is issued with you still inside the UAE. Keep the status-change receipt with your new residence documents.', duration: 'On issuance',
                links: [
                    { label: 'General provisions for the residence visa (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa' },
                ],
            },
        ],
        faqs: [
            { q: 'Can I always change status without leaving?', a: 'No — it depends on the visa types involved. Most visit-to-residence transitions allow it, but some cases still require an exit. Confirm with ICP/GDRFA for your specific switch.' },
            { q: 'How much does a status change cost?', a: 'AED 500 status adjustment per ICP\'s published fee list. GDRFA Dubai lists AED 500 plus Knowledge/Innovation dirham charges — confirm the exact total in-portal.' },
            { q: 'What is the difference between ICP and GDRFA status change?', a: 'ICP handles visas issued outside Dubai; GDRFA Dubai handles Dubai-issued visas. The core sequence is the same: new visa first, cancel old residence where required, then status change.' },
        ],
    },
];
