// UAE guides — batch 2. Verified against official UAE government sources
// (u.ae, MOHRE, ICP, FTA, CBUAE, MoHESR) on 2026-10-13. Figures marked
// "varies" could not be confirmed on an official fee schedule; check the
// linked official portal.

import type { Guide } from './types';

export const guides: Guide[] = [
    {
        slug: 'how-to-renew-a-trade-licence-in-dubai',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Renew a Trade Licence in Dubai (DED/DET, Fees & Documents)',
        metaTitle: 'Renew a Trade Licence in Dubai: DED/DET Steps, Fees & Documents (2026)',
        description: 'Dubai mainland trade licence renewal: Ejari check, BR/1 form, DET e-services or Invest in Dubai, payment voucher, and late-renewal penalties.',
        category: 'business',
        audience: ['Business owner'],
        difficulty: 'Easy',
        totalTime: 'Same day once documents are in order',
        totalCost: 'Varies by licence type and activity — confirm on the DET portal',
        summary: 'A Dubai mainland trade licence must be renewed before it expires to keep the business legally active. Renewal runs through the Department of Economy and Tourism (DET, formerly DED) — online via DET e-services or the Invest in Dubai platform, via the DED Business app, or at an approved service centre. The core requirements are a valid Ejari-registered tenancy contract, the completed BR/1 renewal form, and payment of the renewal fees shown on the payment voucher. Fees and late-renewal penalties vary by licence type and activity and are confirmed on the DET portal at application time.',
        documents: [
            'Copy of the current trade licence',
            'Ejari-registered tenancy contract (valid for at least one month)',
            'BR/1 renewal form (completed)',
            'Passport copies of all partners/shareholders',
            'Emirates ID of the owner/partners',
            'Memorandum of Association (if changes are being made)',
            'Sector approvals (if your activity requires them)',
        ],
        steps: [
            {
                phase: 'before', title: 'Check your Ejari tenancy contract', detail: 'Confirm your Ejari-registered tenancy contract is current and has at least one month of validity remaining. An expired or soon-to-expire Ejari is the most common reason a renewal is held up.', duration: 'Self-check',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'fill', title: 'Complete the BR/1 renewal form', detail: 'Fill in the BR/1 renewal form with the current licence details. Update any changed information (partners, activities, address) before submission — changes may need supporting documents.', duration: '30 min',
            },
            {
                phase: 'submit', title: 'Submit the renewal application', detail: 'Submit via DET e-services, the Invest in Dubai platform, the DED Business app, or an approved service centre. DET reviews the application and issues a payment voucher. DET also offers an auto-renewal service: SMS your trade licence number to 6969 to receive a payment voucher, where eligible.', duration: 'Same day',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the renewal fees', detail: 'Pay the amount shown on the payment voucher through the available channels (card, E-Dirham, bank, or service centre). Fees vary by licence type, activity, and any approvals — confirm the exact amount on your voucher.', duration: 'At voucher issue', cost: 'Varies — confirm on the DET portal',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
            {
                phase: 'receive', title: 'Receive the renewed licence', detail: 'The renewed trade licence is issued once payment is received. Download or collect the digital copy and keep it with your company records.', duration: 'On payment',
            },
            {
                phase: 'followup', title: 'Renew linked registrations', detail: 'Check what else depends on the licence: establishment card, visas, corporate tax and VAT registrations, and bank records. An expired licence can block visa renewals and bank transactions.', duration: 'Same week',
                links: [
                    { label: 'Steps to start a business on the mainland (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland' },
                ],
            },
        ],
        faqs: [
            { q: 'When should I start the renewal?', a: 'Start well before the expiry date — at least 30 days ahead is the common advice — so an Ejari lapse or a missing approval does not push you past expiry.' },
            { q: 'What happens if I renew late?', a: 'Late renewal attracts fines and can block visa renewals and bank transactions. The exact penalty schedule varies by licence type — confirm current fines on the DET portal before relying on any figure.' },
            { q: 'Is Ejari required for renewal?', a: 'Yes — a valid Ejari-registered tenancy contract is required for mainland licence renewal in Dubai.' },
        ],
    },
    {
        slug: 'how-to-register-for-vat-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Register for VAT in the UAE (FTA EmaraTax)',
        metaTitle: 'Register for VAT in the UAE: Thresholds, Steps & TRN (2026)',
        description: '5% VAT: mandatory registration above AED 375,000, voluntary from AED 187,500 — EmaraTax application, documents, TRN, and filing periods.',
        category: 'taxes',
        audience: ['Business owner'],
        difficulty: 'Medium',
        totalTime: 'About 30 minutes to apply; approval varies',
        totalCost: 'Registration via EmaraTax (no fee stated by FTA)',
        summary: 'VAT at 5% applies to most goods and services in the UAE. A business must register when its taxable supplies and imports exceed AED 375,000 over the previous 12 months, or are expected to exceed AED 375,000 in the next 30 days. Voluntary registration is possible from AED 187,500. Registration is done on the FTA EmaraTax platform and results in a Tax Registration Number (TRN). Late registration attracts penalties — confirm the current penalty amounts on tax.gov.ae.',
        documents: [
            'Trade licence',
            'Passport and Emirates ID of owners / authorised signatory',
            'Memorandum of Association',
            'Bank account details',
            'Turnover declaration for the last 12 months',
            'Proof of business activities and invoices',
            'Note: EmaraTax shows the exact required uploads for your entity type.',
        ],
        steps: [
            {
                phase: 'before', title: 'Check whether you must register', detail: 'Mandatory: taxable supplies and imports exceed AED 375,000 in the previous 12 months, or are expected to exceed AED 375,000 in the next 30 days. Voluntary: from AED 187,500 of taxable supplies/imports or taxable expenses. Exempt supplies do not count toward the thresholds.', duration: 'Self-check',
                links: [
                    { label: 'VAT registration (FTA)', href: 'https://tax.gov.ae/en/taxes/Vat/vat.topics/registration.for.vat.aspx' },
                ],
            },
            {
                phase: 'go', title: 'Create or access EmaraTax', detail: 'Use the FTA e-Services portal with UAEPass login. Businesses already registered for another tax (e.g. Corporate Tax or Excise) add a VAT request to their existing account.', duration: '10 min',
                links: [
                    { label: 'EmaraTax portal', href: 'https://eservices.tax.gov.ae/' },
                ],
            },
            {
                phase: 'fill', title: 'Complete the VAT registration form', detail: 'Enter business details, activities, expected revenue, and supplier information. Upload the required documents. Double-check figures — errors can delay approval.', duration: '~30 minutes',
                links: [
                    { label: 'VAT registration (FTA)', href: 'https://tax.gov.ae/en/taxes/Vat/vat.topics/registration.for.vat.aspx' },
                ],
            },
            {
                phase: 'submit', title: 'Submit and wait for approval', detail: 'Submit the application in EmaraTax. The FTA reviews the application and may ask for additional documents.', duration: 'Approval varies',
                links: [
                    { label: 'EmaraTax portal', href: 'https://eservices.tax.gov.ae/' },
                ],
            },
            {
                phase: 'receive', title: 'Receive your Tax Registration Number (TRN)', detail: 'Once approved, you receive a TRN. The TRN must appear on tax invoices. Confirm the current TRN verification service on tax.gov.ae.', duration: 'On approval',
                links: [
                    { label: 'VAT registration (FTA)', href: 'https://tax.gov.ae/en/taxes/Vat/vat.topics/registration.for.vat.aspx' },
                ],
            },
            {
                phase: 'followup', title: 'File VAT returns on schedule', detail: 'File VAT returns for your assigned tax periods (typically quarterly — confirm your assigned period in EmaraTax) and pay any VAT due by the return deadline. Keep records of all supplies, purchases, and invoices.', duration: 'Per tax period',
                links: [
                    { label: 'VAT registration (FTA)', href: 'https://tax.gov.ae/en/taxes/Vat/vat.topics/registration.for.vat.aspx' },
                ],
            },
        ],
        faqs: [
            { q: 'What is the VAT rate in the UAE?', a: 'The standard rate is 5% on most goods and services. Some supplies are zero-rated or exempt — confirm the treatment of your supplies in the FTA VAT guidance.' },
            { q: 'Can I register below AED 187,500?', a: 'No — voluntary registration starts at AED 187,500 of taxable supplies/imports or taxable expenses. Below that, you cannot register.' },
            { q: 'What if I register late?', a: 'Late registration attracts administrative penalties plus retrospectively due output tax. Confirm the current penalty amounts on tax.gov.ae.' },
        ],
    },
    {
        slug: 'how-to-file-a-uae-corporate-tax-return',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to File a UAE Corporate Tax Return (EmaraTax)',
        metaTitle: 'File a UAE Corporate Tax Return: Deadline, Steps & Payment (2026)',
        description: 'Corporate Tax return via EmaraTax: due within 9 months of the financial-year end, financial statements, payment, and penalties for late filing.',
        category: 'taxes',
        audience: ['Business owner'],
        difficulty: 'Medium',
        totalTime: 'Hours to prepare; filing itself under an hour',
        totalCost: 'Filing via EmaraTax (no fee stated by FTA)',
        summary: 'Every taxable person must file a Corporate Tax return and pay any tax due within 9 months of the end of their financial year — for example, the FTA announced 30 September 2026 as the filing and payment deadline for the financial year ended 31 December 2025. Filing is done in EmaraTax. Small Business Relief taxpayers file simplified returns. Penalties apply for late filing and late payment — confirm the current amounts in the FTA penalty schedule on tax.gov.ae.',
        documents: [
            'Tax Registration Number (TRN) for Corporate Tax',
            'Financial statements for the tax period',
            'Supporting records (invoices, contracts, bank statements)',
            'Details of any exempt income, reliefs, or free-zone status',
            'Prior-period returns and adjustments (if amending)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm your tax period and deadline', detail: 'Your tax period is your financial year (or part thereof) for which a return is required. The return and payment are due within 9 months of the financial-year end. Check the FTA announcements for your year — e.g. 30 September 2026 for the year ended 31 December 2025.', duration: 'Self-check',
                links: [
                    { label: 'Corporate Tax news (FTA)', href: 'https://tax.gov.ae/en/taxes/corporate.tax/news.aspx' },
                ],
            },
            {
                phase: 'fill', title: 'Prepare your financial statements', detail: 'Close the books for the tax period and prepare financial statements. Taxable income is accounting income adjusted per the Corporate Tax Law. Qualifying Free Zone Persons have additional conditions to check — confirm the current requirements in EmaraTax guidance.', duration: 'Days to weeks',
                links: [
                    { label: 'Corporate tax (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/taxation/corporate-tax' },
                ],
            },
            {
                phase: 'fill', title: 'Compute taxable income and tax due', detail: 'Apply the 0% band up to AED 375,000 of taxable income and 9% on the excess. Small Business Relief taxpayers (revenue within the relief threshold) file simplified returns — confirm current eligibility in EmaraTax.', duration: 'Hours',
                links: [
                    { label: 'Corporate tax (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/taxation/corporate-tax' },
                ],
            },
            {
                phase: 'submit', title: 'File the return in EmaraTax', detail: 'Log in to EmaraTax with UAEPass, open the Corporate Tax return for the tax period, enter the figures, and submit. Review before submitting — corrections after the deadline can attract penalties.', duration: 'Under an hour',
                links: [
                    { label: 'EmaraTax portal', href: 'https://eservices.tax.gov.ae/' },
                ],
            },
            {
                phase: 'submit', title: 'Pay any tax due', detail: 'Pay the computed tax by the same 9-month deadline through the payment channels in EmaraTax. Late payment attracts penalties — confirm current amounts on tax.gov.ae.', duration: 'By deadline', cost: 'Tax due + penalties if late',
                links: [
                    { label: 'Corporate Tax news (FTA)', href: 'https://tax.gov.ae/en/taxes/corporate.tax/news.aspx' },
                ],
            },
            {
                phase: 'followup', title: 'Keep records', detail: 'Retain supporting records for your filings. Confirm the current retention period in the FTA guidance before disposing of anything.', duration: 'Ongoing',
                links: [
                    { label: 'Corporate Tax news (FTA)', href: 'https://tax.gov.ae/en/taxes/corporate.tax/news.aspx' },
                ],
            },
        ],
        faqs: [
            { q: 'When is the Corporate Tax return due?', a: 'Within 9 months of the end of your financial year. For the year ended 31 December 2025, the FTA set the deadline at 30 September 2026.' },
            { q: 'Do I file if I owe no tax?', a: 'Yes — registration and filing apply even when no tax is due, including for Small Business Relief taxpayers, who file simplified returns.' },
            { q: 'What are the penalties for filing late?', a: 'Penalties apply for late filing and late payment. Confirm the current amounts in the FTA administrative penalty schedule on tax.gov.ae before relying on any figure.' },
        ],
    },
    {
        slug: 'how-to-set-up-a-free-zone-company-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Set Up a Free Zone Company in the UAE (Licence, Office & Visas)',
        metaTitle: 'Set Up a Free Zone Company in UAE: Steps, Licence & Costs (2026)',
        description: 'Free-zone setup via the zone authority: choose sector and zone, legal form, trade name, licence in about 14 working days, office options, and visa quota.',
        category: 'business',
        audience: ['Business owner'],
        difficulty: 'Medium',
        totalTime: 'About 14 working days for licence issuance (after approval)',
        totalCost: 'Varies by zone, activity, legal form & office package — confirm with the zone authority',
        summary: 'A free-zone company is licensed by a free-zone authority (such as DMCC, JAFZA, or RAKEZ) rather than the emirate DED/DET. The process: pick a sector and zone, choose a legal form, reserve a trade name, and apply online to the zone authority. After review and approval, the licence is issued within about 14 working days. Costs vary by zone, activity, legal form, and office package — confirm the current fee schedule with the chosen authority before budgeting.',
        documents: [
            'Passport copies of shareholders / managers',
            'Passport-size photos',
            'Business plan or activity description (some zones)',
            'Application forms from the zone authority',
            'No Objection Certificate (if applicable)',
            'Proof of address (some zones)',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose your sector and free zone', detail: 'Start with the sector you will operate in, then pick a free zone that supports it. Free-zone comparison tools (e.g. the Free Zones Gateway for Dubai) show which zones allow which sectors and facilities such as warehousing and plots.', duration: 'Self-check',
                links: [
                    { label: 'Starting a business in a free zone (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/starting-a-business-in-a-free-zone' },
                ],
            },
            {
                phase: 'before', title: 'Determine the legal entity type', detail: 'Free-zone options include Private Limited Liability Company (LLC), Free Zone Company (FZ Co.), Free Zone Establishment (FZE), Public Limited Liability Company (PJSC), or a branch of a local or international company. Differences lie in the number of shareholders and whether the shareholder is a natural or legal person. Not every zone registers every type — check with the authority.', duration: 'Self-check',
                links: [
                    { label: 'Starting a business in a free zone (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/starting-a-business-in-a-free-zone' },
                ],
            },
            {
                phase: 'fill', title: 'Choose and reserve a trade name', detail: 'The trade name must not violate public morals or public order, must be followed by the legal form (LLC, FZE, etc.), must not already be registered, must match the activity and legal status, and must not contain religious or governing-authority names.', duration: 'Same day',
                links: [
                    { label: 'Starting a business in a free zone (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/starting-a-business-in-a-free-zone' },
                ],
            },
            {
                phase: 'submit', title: 'Apply for the business licence', detail: 'Apply online through the free-zone authority website. In most cases you provide basic company information and upload your documents. After review and approval, you will get a licence within 14 working days (u.ae).', duration: 'About 14 working days', cost: 'Varies by zone and package',
                links: [
                    { label: 'Starting a business in a free zone (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/starting-a-business-in-a-free-zone' },
                ],
            },
            {
                phase: 'go', title: 'Select an office solution', detail: 'Choose the office solution that fits — flexi-desk, shared office, or physical office — per the zone packages. Office options affect the visa quota the company can apply for; confirm both with the authority.', duration: 'Varies',
                links: [
                    { label: 'Starting a business in a free zone (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/starting-a-business-in-a-free-zone' },
                ],
            },
            {
                phase: 'followup', title: 'Check sector approvals', detail: 'Certain industries need approvals from additional government entities (e.g. media, food, health). Confirm whether your activity needs one before trading.', duration: 'Varies',
                links: [
                    { label: 'Starting a business in a free zone (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/starting-a-business-in-a-free-zone' },
                ],
            },
            {
                phase: 'followup', title: 'Apply for visas under the licence', detail: 'Once licensed, apply for residence visas for owners and employees under the company quota (work permit, medical, Emirates ID, residence issuance). Visa eligibility and quota depend on the zone package.', duration: '1–3 weeks per visa',
                links: [
                    { label: 'Starting a business in a free zone (u.ae)', href: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/starting-a-business-in-a-free-zone' },
                ],
            },
        ],
        faqs: [
            { q: 'How long does free-zone setup take?', a: 'After review and approval, the licence is issued within about 14 working days (u.ae). Document preparation and any sector approvals add time.' },
            { q: 'How much does it cost?', a: 'Costs vary by zone, activity, legal form, and office package. Use the zone authority setup wizard or cost tools (e.g. DMCC wizard, Invest in Dubai) to get a quote for your case.' },
            { q: 'Can a free-zone company trade on the mainland?', a: 'This is not covered on the u.ae pages reviewed. Check with the free-zone authority and the DED before assuming mainland trading rights.' },
        ],
    },
    {
        slug: 'how-to-file-a-labour-complaint-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to File a Labour Complaint in the UAE (MOHRE)',
        metaTitle: 'File a Labour Complaint in UAE: MOHRE Steps, Evidence & Court (2026)',
        description: 'Private-sector labour complaint via MOHRE: app, website, or 80084 — evidence, amicable settlement, AED 50,000 decision threshold, and court escalation.',
        category: 'benefits',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'About 14 working days for MOHRE handling',
        totalCost: 'No fee (MOHRE complaint service)',
        summary: 'If your employer breaches your contract or the Labour Law — unpaid wages, unpaid gratuity, unfair dismissal, excessive hours — you can file a labour complaint with the Ministry of Human Resources and Emiratisation (MOHRE) via its website, app, or the Labour Claims and Advisory Centre on 80084. MOHRE first tries an amicable settlement. If that fails, MOHRE may decide claims up to AED 50,000 itself, or refer larger disputes to the Labour Court. File promptly: MOHRE guidance says within 30 days of the breach.',
        documents: [
            'Emirates ID',
            'Employment contract (MOHRE-registered)',
            'Work permit / labour card details',
            'Payslips and salary records / bank statements',
            'Resignation or dismissal letter (if any)',
            'Messages or emails proving the breach',
            'Final settlement statement (if disputing it)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm the right authority', detail: 'Mainland private-sector employees complain to MOHRE. Free-zone employees generally go first to their free-zone authority mediation department. DIFC and ADGM have their own employment regimes and complaint routes.', duration: 'Self-check',
                links: [
                    { label: 'Register labour complaints (MOHRE)', href: 'https://mohre.gov.ae/en/services/register-labor-complaints-private-sector-employees-2022' },
                ],
            },
            {
                phase: 'fill', title: 'Gather your evidence', detail: 'Collect the contract, payslips, bank statements showing what was actually paid, and any written proof (messages, HR emails). Note the exact amounts owed and the dates of the breach.', duration: '30 min',
                links: [
                    { label: 'Register labour complaints (MOHRE)', href: 'https://mohre.gov.ae/en/services/register-labor-complaints-private-sector-employees-2022' },
                ],
            },
            {
                phase: 'submit', title: 'File the complaint', detail: 'File via the MOHRE website (Register Labour Complaints — Private Sector Employees service), the MOHRE app, or call the Labour Claims and Advisory Centre on 80084 for guidance. Verify your identity (OTP), select Employee, enter your employment details, choose the complaint category and claim amount, and submit. The service has no fee.', duration: 'Same day', cost: 'No fee',
                links: [
                    { label: 'Register labour complaints (MOHRE)', href: 'https://mohre.gov.ae/en/services/register-labor-complaints-private-sector-employees-2022' },
                ],
            },
            {
                phase: 'wait', title: 'MOHRE attempts an amicable settlement', detail: 'MOHRE reviews the complaint, contacts you to confirm details, then approaches the employer to settle amicably. The parties may be contacted more than once. MOHRE handling takes about 14 working days.', duration: 'About 14 working days',
                links: [
                    { label: 'Register labour complaints (MOHRE)', href: 'https://mohre.gov.ae/en/services/register-labor-complaints-private-sector-employees-2022' },
                ],
            },
            {
                phase: 'followup', title: 'MOHRE decision or court referral', detail: 'If no settlement is reached, MOHRE may issue a decision with the force of an executable instrument for claims up to AED 50,000, or refer larger disputes to the competent Labour Court. Either party may challenge a MOHRE decision before the court within 15 working days of notification.', duration: 'Varies',
                links: [
                    { label: 'Labour Law decree (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/11/2021/uae-president-issues-federal-decree-law-on-regulation-of-labour-relations-in-private-sector' },
                ],
            },
            {
                phase: 'followup', title: 'Escalate to court if needed', detail: 'If referred (or if you challenge a MOHRE decision), file with the competent Labour Court. Do not wait — court claims are time-limited; file promptly and keep your MOHRE reference number.', duration: 'Varies',
                links: [
                    { label: 'Register labour complaints (MOHRE)', href: 'https://mohre.gov.ae/en/services/register-labor-complaints-private-sector-employees-2022' },
                ],
            },
        ],
        faqs: [
            { q: 'How much does it cost to file a labour complaint?', a: 'Nothing — the MOHRE labour complaint service has no fee.' },
            { q: 'How long do I have to complain?', a: 'MOHRE guidance says to complain within 30 days of the employer breach. Court claims have their own longer limits, but do not wait.' },
            { q: 'Can my employer retaliate for complaining?', a: 'Retaliation for exercising labour rights is unlawful. Keep records of any adverse action after filing and report it to MOHRE.' },
        ],
    },
    {
        slug: 'how-to-claim-uae-unemployment-insurance-iloe',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Claim UAE Unemployment Insurance (ILOE)',
        metaTitle: 'Claim UAE Unemployment Insurance (ILOE): Eligibility, 60% Payout & Steps (2026)',
        description: 'ILOE scheme: mandatory AED 5/10 monthly subscription, 12 months cover, claim within 30 days of job loss, 60% of basic salary for up to 3 months.',
        category: 'benefits',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Claim processed within 2 weeks of submission',
        totalCost: 'Subscription AED 5 or AED 10 per month by salary band',
        summary: 'The Involuntary Loss of Employment (ILOE) scheme is mandatory unemployment insurance for federal government and private-sector employees. If you lose your job involuntarily after at least 12 consecutive months of subscription, you can claim 60% of your average basic salary for the last six months before unemployment, for up to 3 months per claim — capped at AED 10,000 or AED 20,000 per month depending on your salary band. Claims must be filed within 30 days of job loss.',
        documents: [
            'Emirates ID',
            'ILOE subscription / policy details',
            'Proof of job loss (termination letter)',
            'Bank account details (IBAN) for payout',
            'Employment contract (if requested)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you are covered', detail: 'You must have subscribed for at least 12 consecutive months and paid premiums on time. Exempt: investors/owners of the establishment, domestic workers, temporary-contract employees, juveniles under 18, and retirees with a pension who joined a new job. Penalties apply for not subscribing — confirm current amounts on MOHRE or iloe.ae.', duration: 'Self-check',
                links: [
                    { label: 'Unemployment Insurance Scheme (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/5/2023/four-easy-quick-steps-to-subscribe-to-unemployment-insurance-scheme' },
                ],
            },
            {
                phase: 'fill', title: 'Check your category and premium', detail: 'Category 1 (basic salary AED 16,000 or less): AED 5 per month (AED 60 annually), compensation capped at AED 10,000 per month. Category 2 (basic salary above AED 16,000): AED 10 per month (AED 120 annually), compensation capped at AED 20,000 per month.', duration: 'Self-check',
                links: [
                    { label: 'Unemployment Insurance Scheme (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/5/2023/four-easy-quick-steps-to-subscribe-to-unemployment-insurance-scheme' },
                ],
            },
            {
                phase: 'submit', title: 'Subscribe if you have not yet', detail: 'Subscribe via iloe.ae, the ILOE app, kiosks, business service centres, exchange houses, bank apps, or SMS. Choose monthly, quarterly, semi-annual, or annual payment. Subscribing is the employee duty — employers do not pay it.', duration: 'Minutes',
                links: [
                    { label: 'Unemployment Insurance Scheme (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/5/2023/four-easy-quick-steps-to-subscribe-to-unemployment-insurance-scheme' },
                ],
            },
            {
                phase: 'submit', title: 'File the claim within 30 days of job loss', detail: 'Submit the claim within 30 days of job loss through the ILOE channels (website/app/contact centre). Compensation is for involuntary loss only — resignation, disciplinary dismissal, and fraud do not qualify.', duration: 'Within 30 days of job loss',
                links: [
                    { label: 'Unemployment Insurance Scheme (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/5/2023/four-easy-quick-steps-to-subscribe-to-unemployment-insurance-scheme' },
                ],
            },
            {
                phase: 'wait', title: 'Claim is processed', detail: 'The claim is processed within two weeks of submission. Your right to compensation is forfeited if you cancel your residency and leave the country, or join a new job, within the processing period.', duration: 'Within 2 weeks',
                links: [
                    { label: 'Unemployment Insurance Scheme (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/5/2023/four-easy-quick-steps-to-subscribe-to-unemployment-insurance-scheme' },
                ],
            },
            {
                phase: 'receive', title: 'Receive monthly compensation', detail: 'Compensation is 60% of your average basic salary for the last six months before unemployment, capped by category, paid for a maximum of 3 months per claim. Payments stop if you find a new job or leave the UAE.', duration: 'Up to 3 months',
                links: [
                    { label: 'Unemployment Insurance Scheme (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/5/2023/four-easy-quick-steps-to-subscribe-to-unemployment-insurance-scheme' },
                ],
            },
        ],
        faqs: [
            { q: 'Does ILOE cover resignation?', a: 'No — ILOE covers involuntary job loss only. Resignation, disciplinary dismissal, absconding, and fraudulent claims do not qualify.' },
            { q: 'How much will I receive?', a: '60% of your average basic salary for the last six months before unemployment, capped at AED 10,000/month (Category 1) or AED 20,000/month (Category 2), for up to 3 months.' },
            { q: 'What if I find a new job during the claim?', a: 'Payments stop. Your right to compensation is also forfeited if you cancel your residency and leave the UAE during the processing period.' },
        ],
    },
    {
        slug: 'how-to-open-a-business-bank-account-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Open a Business Bank Account in the UAE (Corporate Account)',
        metaTitle: 'Open a Business Bank Account in UAE: Documents, Steps & Timeline (2026)',
        description: 'Corporate account for a UAE company: trade licence, MOA, shareholder and signatory documents, KYC, activation, and IBAN.',
        category: 'business',
        audience: ['Business owner'],
        difficulty: 'Medium',
        totalTime: 'Varies by bank — corporate KYC can take longer than personal accounts',
        totalCost: 'Varies by bank (minimum-balance fees may apply)',
        summary: 'A business (corporate) bank account is opened with a UAE bank once the company is licensed. The bank runs Know Your Customer (KYC) checks on the company, its shareholders, and its authorised signatories. Core documents are the trade licence, Memorandum of Association, shareholder and signatory identity documents, and proof of address. Each bank sets its own checklist, minimum-balance terms, and timelines — confirm them with the bank before applying.',
        documents: [
            'Trade licence',
            'Memorandum of Association (MOA)',
            'Shareholder identity documents (passport + Emirates ID / visa where applicable)',
            'Authorised signatory documents (passport + Emirates ID)',
            'Board resolution appointing signatories (if the bank requires it)',
            'Proof of business address / office lease',
            'Company profile / business activity description',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose a bank', detail: 'Compare local and international banks operating in the UAE. Many allow online or app applications. Check minimum-balance, fee, and onboarding terms before choosing — they vary by bank and account type.', duration: 'Self-check',
                links: [
                    { label: 'Banking in the UAE (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/banking-in-uae' },
                ],
            },
            {
                phase: 'fill', title: 'Prepare the company documents', detail: 'Trade licence, MOA, shareholder and signatory identity documents, and proof of address. Banks typically also ask about the company activity, expected transaction volumes, and source of funds as part of KYC. Confirm the bank exact checklist before submitting.', duration: 'Days',
                links: [
                    { label: 'Banking in the UAE (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/banking-in-uae' },
                ],
            },
            {
                phase: 'submit', title: 'Submit the application', detail: 'Apply in-branch, via the bank website, or via its app. Some banks offer digital onboarding with in-app identity verification.', duration: 'Same day',
                links: [
                    { label: 'Banking in the UAE (u.ae)', href: 'https://U.AE/en/information-and-services/finance-and-investment/banking-in-uae' },
                ],
            },
            {
                phase: 'wait', title: 'KYC and compliance checks', detail: 'The bank completes KYC / financial-crime checks on the company, shareholders, and signatories. Corporate onboarding takes longer than personal accounts; if delays arise, the bank must explain the delay and document the reason (CBUAE).', duration: 'Varies by bank',
                links: [
                    { label: 'CBUAE Rulebook — account opening', href: 'https://rulebook.centralbank.ae/en/entiresection/44' },
                ],
            },
            {
                phase: 'receive', title: 'Account activation', detail: 'Account activated, debit cards issued, online/mobile and corporate banking access enabled. Confirm the account operating rules (signatory mandates, transaction limits) at activation.', duration: 'On approval',
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
            { q: 'Can I open a business account before the trade licence is issued?', a: 'No — the trade licence is a core requirement. Banks need the licensed company documents to complete KYC.' },
            { q: 'How long does corporate onboarding take?', a: 'It varies by bank and company structure. Personal accounts are usually approved in hours to days (u.ae); corporate KYC takes longer. Confirm the expected timeline with the bank.' },
            { q: 'Is there a minimum balance?', a: 'Many banks require one and may charge a monthly fee if the balance falls below it (u.ae). The amount depends on the bank and account — check before you apply.' },
        ],
    },
    {
        slug: 'how-to-replace-a-lost-passport-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Replace a Lost Passport in the UAE (Expat Guide)',
        metaTitle: 'Replace a Lost Passport in UAE: Police Report, Embassy & Visa Transfer (2026)',
        description: 'Expat lost passport: police report, lost passport certificate, embassy replacement, and re-stamping your residence visa on the new passport.',
        category: 'ids',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: 'Days to weeks (embassy processing varies by country)',
        totalCost: 'Varies — confirm embassy fees and GDRFA fees',
        summary: 'If you lose your passport in the UAE: report the loss to the police, get a formal lost passport certificate, apply for a new passport at your country embassy/consulate in the UAE, then have your residence visa re-stamped on the new passport at GDRFA. In Dubai the police report must be endorsed by the court, Public Prosecution, and GDRFA before the formal certificate is issued. Embassy replacement fees and timelines vary by country.',
        documents: [
            'Police report / lost passport certificate',
            'Copy of the old passport (if available)',
            'Copy of the new passport',
            'Copy of the UAE residence visa',
            'Copy of the Emirates ID card',
            'Passport-size photo',
            'Sponsor letter (company letterhead for employer-sponsored residents)',
            'Sponsor passport copy (for family-sponsored residents)',
        ],
        steps: [
            {
                phase: 'go', title: 'Report the loss to the police', detail: 'Report the loss or theft at the police station nearest to where it happened. If the passport belongs to a minor, the sponsoring parent should be present to endorse the report.', duration: 'Same day',
                links: [
                    { label: 'Lost your passport with UAE residence visa on it (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/lost-your-passport-with-uae-residence-visa-on-it' },
                ],
            },
            {
                phase: 'fill', title: 'Submit the sponsor letter (if required)', detail: 'Employer-sponsored residents: submit a letter in Arabic about the loss on the sponsoring employer letterhead to the police department of the emirate where the residence visa was issued, plus a photocopy of the employer licence and establishment card. Family-sponsored residents: submit a letter signed by the sponsor plus a photocopy of the sponsor passport.', duration: 'Same day',
                links: [
                    { label: 'Lost your passport with UAE residence visa on it (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/lost-your-passport-with-uae-residence-visa-on-it' },
                ],
            },
            {
                phase: 'go', title: 'Get endorsements (Dubai procedure)', detail: 'In Dubai, after the police report, get it stamped by the relevant UAE court, Public Prosecution, and GDRFA in the emirate where the visa was issued. Then return the report to the police station, which issues a formal lost passport certificate in Arabic.', duration: 'Days',
                links: [
                    { label: 'Lost your passport with UAE residence visa on it (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/lost-your-passport-with-uae-residence-visa-on-it' },
                ],
            },
            {
                phase: 'submit', title: 'Apply for a new passport at your embassy', detail: 'With the formal lost passport certificate, apply for a new passport at your country embassy/consulate in the UAE. Check with your embassy for its requirements, fees, and processing time.', duration: 'Varies by embassy',
                links: [
                    { label: 'Lost your passport with UAE residence visa on it (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/lost-your-passport-with-uae-residence-visa-on-it' },
                ],
            },
            {
                phase: 'submit', title: 'Re-stamp the residence visa on the new passport', detail: 'Take the new passport back to GDRFA to stamp your residence visa. GDRFA issues a residence visa with the same validity as the old visa if still valid, or a new one if the visa expired while you were inside the UAE. Check with the relevant GDRFA about application and fees.', duration: 'Varies',
                links: [
                    { label: 'Lost your passport with UAE residence visa on it (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/lost-your-passport-with-uae-residence-visa-on-it' },
                ],
            },
            {
                phase: 'followup', title: 'Update your records', detail: 'Update the new passport details with your employer, bank, and any other place that holds your old passport number. Keep a copy of the lost passport certificate with your records.', duration: 'Same week',
                links: [
                    { label: 'Lost your passport with UAE residence visa on it (u.ae)', href: 'https://u.ae/en/information-and-services/visa-and-emirates-id/lost-your-passport-with-uae-residence-visa-on-it' },
                ],
            },
        ],
        faqs: [
            { q: 'What if I lose my passport outside the UAE?', a: 'Report the loss in that country and contact your country embassy/consulate there for a new passport. Residence-visa holders may need a new entry permit to re-enter — check with the UAE embassy in that country.' },
            { q: 'Does the new residence visa keep the old expiry date?', a: 'Yes — GDRFA issues a residence visa with the same validity as the old visa if still valid, or a new one if the visa expired while you were inside the UAE.' },
            { q: 'Are there fines for losing a passport?', a: 'u.ae does not list a fine for the loss itself. Check with the relevant GDRFA about application and fees for the re-stamping step.' },
        ],
    },
    {
        slug: 'how-to-cancel-your-uae-residence-visa',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Cancel Your UAE Residence Visa (Leaving the UAE)',
        metaTitle: 'Cancel Your UAE Residence Visa: Steps, Grace Periods & Checklist (2026)',
        description: 'Cancelling when leaving: sponsor cancels via ICP, dependants first, tiered grace periods (30–180 days), AED 50/day overstay fine, final settlement, and closure checklist.',
        category: 'immigration',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: 'Same day to a few days',
        totalCost: 'Varies — confirm fees in ICP Smart Services',
        summary: 'When you leave the UAE permanently, your residence visa must be cancelled officially — normally only the sponsor can cancel it. The employer first cancels the work permit with MOHRE, then applies to ICP for visa cancellation. After cancellation, a grace period applies before you must leave or change status: 180, 90, 60, or 30 days depending on your residence category. Overstaying past the grace period costs AED 50 per day.',
        documents: [
            'Passport of the visa holder',
            'Emirates ID',
            'Sponsor passport and Emirates ID (for employer/family-sponsored visas)',
            'Work permit cancellation confirmation (employment visas)',
            'Signed letter confirming receipt of wages and end-of-service benefits (employment visas)',
            'Trade licence cancellation certificate (investor visas linked to a business)',
        ],
        steps: [
            {
                phase: 'before', title: 'Cancel dependants visas first', detail: 'Family members permits under your sponsorship must be cancelled before your own residence is cancelled, or placed on hold for a limited period with applicable fees. Your own visa cannot be cancelled while active dependant visas remain under your sponsorship.', duration: 'Before your cancellation',
                links: [
                    { label: 'Cancellation of residency permits (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e68' },
                ],
            },
            {
                phase: 'submit', title: 'Employer cancels the work permit (employment visas)', detail: 'The company applies to MOHRE to cancel the labour contract and work permit. The employee signs the application. The company submits a letter signed by the employee confirming receipt of all wages and end-of-service benefits.', duration: 'Same day to days',
                links: [
                    { label: 'Cancellation of residency permits (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e68' },
                ],
            },
            {
                phase: 'submit', title: 'Sponsor applies for visa cancellation', detail: 'The sponsor applies via ICP Smart Services, the ICP Smart App, or a registered typing centre. Domestic worker residence cancellation goes via MOHRE or the Domestic Work Bundle, including fee settlement and linked Emirates ID cancellation. Confirm the current fees in ICP Smart Services at application time.', duration: 'Same day', cost: 'Varies — confirm in ICP Smart Services',
                links: [
                    { label: 'Cancellation of residency permits (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e68' },
                ],
            },
            {
                phase: 'receive', title: 'Collect the final settlement', detail: 'The employer must settle all wages and entitlements within 14 days of the contract end. Confirm gratuity, leave, and any other dues before signing any settlement paper.', duration: 'Within 14 days of contract end',
                links: [
                    { label: 'Labour Law decree (MOHRE)', href: 'https://mohre.gov.ae/en/media-center/news/15/11/2021/uae-president-issues-federal-decree-law-on-regulation-of-labour-relations-in-private-sector' },
                ],
            },
            {
                phase: 'followup', title: 'Use your grace period', detail: 'Grace periods after expiry or cancellation (ICP): 180 days for Golden, Green, and Blue Residence holders and their families, widows/divorced women of residents, students after completing studies, and foreign-passport relatives of UAE citizens; 90 days for skilled workers in levels 1–3 and property owners; 60 days for permits issued with a guarantor/host; 30 days for all other categories. Leave or change status before it ends — overstay costs AED 50 per day.', duration: '30–180 days by category', cost: 'Overstay AED 50/day',
                links: [
                    { label: 'Cancellation of residency permits (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e68' },
                ],
            },
            {
                phase: 'followup', title: 'Close out DEWA, bank, and tenancy', detail: 'Close or transfer DEWA (final bill, deposit refund), close bank accounts after final payments clear, cancel Ejari when the tenancy ends, and confirm Emirates ID cancellation is completed with the residence cancellation.', duration: 'Before departure',
                links: [
                    { label: 'Cancellation of residency permits (ICP)', href: 'https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e68' },
                ],
            },
        ],
        faqs: [
            { q: 'Can I cancel my own residence visa?', a: 'Normally no — only the sponsor can cancel it. You cannot process the application on your own.' },
            { q: 'How long can I stay after cancellation?', a: 'It depends on your category: 180, 90, 60, or 30 days per ICP. Check the exact deadline on your cancellation document or ICP record.' },
            { q: 'What if I find a new job during the grace period?', a: 'You can change status to the new employer sponsorship within the grace period instead of leaving. Start the new work permit process before the grace period ends.' },
        ],
    },
    {
        slug: 'how-to-get-a-degree-equivalency-certificate-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Get a Degree Equivalency Certificate in the UAE (MOE/MoHESR)',
        metaTitle: 'Degree Equivalency Certificate in UAE: MOE Steps, Documents & Fees (2026)',
        description: 'Recognition of a foreign degree: attestation chain, verification, MoHESR/MOE portal application, fees, and when employers require it.',
        category: 'students',
        audience: ['Expat', 'Student'],
        difficulty: 'Hard',
        totalTime: 'Varies — confirm processing time on the portal',
        totalCost: 'Varies — confirm fees on the portal',
        summary: 'A degree equivalency (recognition) certificate confirms that a qualification earned outside the UAE is valid and meets UAE standards. It is commonly required for government and semi-government jobs, regulated professions (education, engineering, healthcare licensing), higher studies in the UAE, and academic Golden Visa routes. University degrees go through the Ministry of Higher Education and Scientific Research (MoHESR) equivalency portal; school certificates go through the Ministry of Education (MOE). Fees and processing time vary — confirm them on the portal before applying.',
        documents: [
            'Attested degree / graduation certificate',
            'Attested academic transcripts (all years)',
            'Passport copy',
            'Emirates ID copy (if available)',
            'UAE visa copy',
            'Verification report from an approved provider (DataFlow or QuadraBay, if requested)',
            'ICA travel report / entry-exit record (if requested)',
            'Certified Arabic or English translation (if documents are in another language)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you need equivalency', detail: 'Equivalency is typically required for government/semi-government roles, regulated professions, higher studies, and academic Golden Visa routes. Private companies do not always ask for it — check what your employer or licensing body actually requires before starting.', duration: 'Self-check',
                links: [
                    { label: 'University certificate equivalency (MoHESR)', href: 'https://www.mohesr.gov.ae/En/EServices/ServiceCard/pages/universiycertificateequilization.aspx' },
                ],
            },
            {
                phase: 'fill', title: 'Complete the attestation chain', detail: 'Before applying, the degree typically needs attestation in the issuing country (notary / ministry), attestation by the UAE embassy in that country, and MOFA attestation in the UAE. Incomplete attestation is one of the most common reasons for rejection. Confirm the exact attestation requirements on the portal for your qualification.', duration: 'Weeks',
                links: [
                    { label: 'University certificate equivalency (MoHESR)', href: 'https://www.mohesr.gov.ae/En/EServices/ServiceCard/pages/universiycertificateequilization.aspx' },
                ],
            },
            {
                phase: 'fill', title: 'Arrange qualification verification', detail: 'The ministry may require Primary Source Verification — direct verification of the degree authenticity with the issuing university through an approved provider (DataFlow or QuadraBay). If verification is requested and not completed, the certificate will not be issued.', duration: 'Weeks',
                links: [
                    { label: 'University certificate equivalency (MoHESR)', href: 'https://www.mohesr.gov.ae/En/EServices/ServiceCard/pages/universiycertificateequilization.aspx' },
                ],
            },
            {
                phase: 'submit', title: 'Submit the application online', detail: 'Apply via the MoHESR equivalency portal for university degrees (UAE Pass login) or the MOE portal for school certificates. Upload clear scanned documents, enter university details and academic records, and pay the application fee. The portal shows the exact document list and fee for your qualification.', duration: 'Same day', cost: 'Varies — confirm on the portal',
                links: [
                    { label: 'University certificate equivalency (MoHESR)', href: 'https://www.mohesr.gov.ae/En/EServices/ServiceCard/pages/universiycertificateequilization.aspx' },
                ],
            },
            {
                phase: 'wait', title: 'Application review', detail: 'The ministry reviews the application and may contact your university to verify authenticity, accreditation, study duration, and mode. Respond quickly to any request for clarifications or additional evidence. Processing time varies — confirm the current timeline on the portal.', duration: 'Varies — confirm on the portal',
                links: [
                    { label: 'University certificate equivalency (MoHESR)', href: 'https://www.mohesr.gov.ae/En/EServices/ServiceCard/pages/universiycertificateequilization.aspx' },
                ],
            },
            {
                phase: 'receive', title: 'Receive the equivalency certificate', detail: 'On approval, the certificate is issued digitally. Download it and keep it with your degree for job, licensing, and visa applications.', duration: 'On approval',
                links: [
                    { label: 'University certificate equivalency (MoHESR)', href: 'https://www.mohesr.gov.ae/En/EServices/ServiceCard/pages/universiycertificateequilization.aspx' },
                ],
            },
        ],
        faqs: [
            { q: 'Can I work in the UAE without equivalency?', a: 'In many private-sector roles, yes — employers do not always require it. Government, semi-government, and regulated professions usually do.' },
            { q: 'Are online / distance-learning degrees recognised?', a: 'They may be, subject to review — confirm whether your mode of study and institution are recognised on the portal before applying.' },
            { q: 'What if my application is rejected?', a: 'Check the rejection reason on the portal, fix the gap (usually attestation, verification, or a document mismatch), and reapply. Responding fast to clarification requests avoids longer delays.' },
        ],
    },
];
