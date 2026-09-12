// Glossary of government terms, agency acronyms, and form numbers.
// linkTerms() auto-attaches hover/focus tooltips anywhere these terms
// appear in guide content (step details, document checklists, FAQ answers).

export interface GlossaryEntry {
    full: string;
    def: string;
    /** Optional official page — clicking the term opens it in a new tab. */
    href?: string;
}

export const glossary: Record<string, GlossaryEntry> = {
    'USCIS': { full: 'US Citizenship and Immigration Services', def: 'The federal agency that processes green cards, work permits, naturalization, and most immigration benefits. Part of the Department of Homeland Security.', href: 'https://www.uscis.gov/' },
    'DHS': { full: 'Department of Homeland Security', def: 'The cabinet department overseeing USCIS, CBP, and ICE — immigration enforcement and benefits all sit under it.', href: 'https://www.dhs.gov/' },
    'CBP': { full: 'US Customs and Border Protection', def: 'The agency that inspects you when you enter the US at an airport or land border crossing.', href: 'https://www.cbp.gov/' },
    'IRS': { full: 'Internal Revenue Service', def: 'The US federal tax agency. It collects federal income taxes, issues refunds, and administers ITINs.', href: 'https://www.irs.gov/' },
    'ITIN': { full: 'Individual Taxpayer Identification Number', def: 'A tax processing number for people who are not eligible for a Social Security number but must file US taxes.', href: 'https://www.irs.gov/individuals/individual-taxpayer-identification-number' },
    'SSN': { full: 'Social Security Number', def: 'A 9-digit number issued by the Social Security Administration. It is the main US identity number for work, taxes, and credit.', href: 'https://www.ssa.gov/ssnumber/' },
    'SSA': { full: 'Social Security Administration', def: 'The agency that issues Social Security numbers/cards and pays retirement, disability (SSDI), and SSI benefits.', href: 'https://www.ssa.gov/' },
    'DMV': { full: 'Department of Motor Vehicles', def: 'Your state agency for driver\'s licenses, state IDs, and vehicle registration. Some states call it the BMV, DPS, MVD, or DDS.', href: 'https://www.usa.gov/motor-vehicle-services' },
    'EAD': { full: 'Employment Authorization Document', def: 'The "work permit" card (Form I-766) that shows you are allowed to work in the US while waiting for a green card.', href: 'https://www.uscis.gov/working-in-the-united-states' },
    'ACA': { full: 'Affordable Care Act', def: 'The 2010 health insurance law that created the Marketplace where you can buy subsidized coverage.', href: 'https://www.healthcare.gov/' },
    'USC': { full: 'US citizen', def: 'A person who holds US citizenship by birth or naturalization.' },
    'LPR': { full: 'Lawful Permanent Resident', def: 'The official status of a green card holder — allowed to live and work in the US permanently.' },
    'DV': { full: 'Diversity Visa Program', def: 'The annual "green card lottery" for people from countries with low US immigration rates.', href: 'https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry.html' },
    'EIN': { full: 'Employer Identification Number', def: 'A federal tax ID number for a business, like an SSN for the company. Issued free by the IRS.', href: 'https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number' },
    'LLC': { full: 'Limited Liability Company', def: 'A business structure that protects your personal assets from business debts and lawsuits.', href: 'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure' },
    'FAFSA': { full: 'Free Application for Federal Student Aid', def: 'The form that unlocks federal grants, loans, and work-study — and most state and school aid too.', href: 'https://studentaid.gov/fafsa' },
    'FSA ID': { full: 'Federal Student Aid ID', def: 'The username/password used to sign the FAFSA and access studentaid.gov. Students and parents each need their own.', href: 'https://studentaid.gov/fsa-id/' },
    'SSDI': { full: 'Social Security Disability Insurance', def: 'Monthly benefits for people who cannot work due to disability, based on their work history.', href: 'https://www.ssa.gov/benefits/disability/' },
    'SSI': { full: 'Supplemental Security Income', def: 'Monthly benefits for low-income people who are aged, blind, or disabled — not based on work history.', href: 'https://www.ssa.gov/ssi/' },
    'PSLF': { full: 'Public Service Loan Forgiveness', def: 'A program that forgives remaining federal student loans after 120 payments while working for government or nonprofit employers.', href: 'https://studentaid.gov/pslf/' },
    'SEVIS': { full: 'Student and Exchange Visitor Information System', def: 'The DHS database tracking F and M students. You pay a SEVIS fee before your visa interview.', href: 'https://www.ice.gov/sevis' },
    'I-20': { full: 'Certificate of Eligibility for Nonimmigrant Student Status', def: 'The form a US school issues to admit you as an F-1 or M-1 student. You need it for your visa and at the border.', href: 'https://studyinthestates.dhs.gov/students' },
    'DS-160': { full: 'Online Nonimmigrant Visa Application', def: 'The online visa application form for temporary (nonimmigrant) visas like the F-1 or B-2.', href: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/forms/ds-160-online-nonimmigrant-visa-application.html' },
    'DS-82': { full: 'US Passport Renewal Application', def: 'The form for renewing a passport by mail. Only for adults whose current passport is undamaged and issued within the last 15 years.', href: 'https://travel.state.gov/content/travel/en/passports/have-passport/renew.html' },
    'DS-11': { full: 'US Passport Application', def: 'The form for first-time passports, minors, and anyone not eligible to renew by mail. Filed in person.', href: 'https://travel.state.gov/content/travel/en/passports/how-apply/forms.html' },
    'I-94': { full: 'Arrival/Departure Record', def: 'The electronic record of your legal entry — your admission class and the date your authorized stay expires.', href: 'https://i94.cbp.dhs.gov/' },
    'I-90': { full: 'Application to Replace Permanent Resident Card', def: 'The form used to renew or replace a green card.', href: 'https://www.uscis.gov/i-90' },
    'I-485': { full: 'Application to Register Permanent Residence or Adjust Status', def: 'The main green card application filed from inside the US.', href: 'https://www.uscis.gov/i-485' },
    'I-130': { full: 'Petition for Alien Relative', def: 'The form a US citizen or green card holder files to sponsor a spouse, child, parent, or sibling.', href: 'https://www.uscis.gov/i-130' },
    'I-765': { full: 'Application for Employment Authorization', def: 'The form used to request a work permit (EAD).', href: 'https://www.uscis.gov/i-765' },
    'I-864': { full: 'Affidavit of Support', def: 'The form a sponsor signs promising to financially support an immigrant relative so they do not become a "public charge." Required for most family green cards.', href: 'https://www.uscis.gov/i-864' },
    'N-400': { full: 'Application for Naturalization', def: 'The form green card holders file to become US citizens.', href: 'https://www.uscis.gov/n-400' },
    'W-2': { full: 'Wage and Tax Statement', def: 'The form your employer sends each January showing your wages and withheld taxes. You need it to file taxes and the FAFSA.', href: 'https://www.irs.gov/forms-pubs/about-form-w-2' },
    '1040': { full: 'US Individual Income Tax Return', def: 'The standard federal income tax form. Variants like 1040-SR (seniors) and schedules attach to it.', href: 'https://www.irs.gov/forms-pubs/about-form-1040' },
    '1099': { full: 'Information Return series', def: 'Forms reporting income that is not wages — freelance pay (1099-NEC), interest (1099-INT), dividends (1099-DIV).', href: 'https://www.irs.gov/forms-pubs/about-form-1099' },
    'REAL ID': { full: 'REAL ID-compliant license', def: 'A state driver\'s license or ID that meets federal security standards — required for domestic flights and federal buildings.', href: 'https://www.dhs.gov/real-id' },
    'Medicare': { full: 'Federal health insurance for 65+', def: 'The federal health insurance program mainly for people 65 and older, plus some younger people with disabilities.', href: 'https://www.medicare.gov/' },
    'Medicaid': { full: 'State + federal health coverage for low income', def: 'Free or very low-cost health coverage run by states with federal money. Eligibility varies by state.', href: 'https://www.medicaid.gov/' },
    'green card': { full: 'Permanent Resident Card', def: 'The ID card proving lawful permanent resident status — live and work in the US permanently.', href: 'https://www.uscis.gov/green-card' },
    'Green Card': { full: 'Permanent Resident Card', def: 'The ID card proving lawful permanent resident status — live and work in the US permanently.', href: 'https://www.uscis.gov/green-card' },
    'naturalization': { full: 'Becoming a US citizen by application', def: 'The process a green card holder goes through to become a US citizen — application, interview, test, and oath.', href: 'https://www.uscis.gov/citizenship' },

    // ---- United Kingdom ----
    'HMRC': { full: 'HM Revenue & Customs', def: 'The UK tax authority. It collects income tax, issues National Insurance numbers, and runs Self Assessment.', href: 'https://www.gov.uk/government/organisations/hm-revenue-customs' },
    'Home Office': { full: 'UK Home Office', def: 'The government department responsible for visas, immigration, and citizenship in the UK.', href: 'https://www.gov.uk/government/organisations/home-office' },
    'HMPO': { full: 'His Majesty\'s Passport Office', def: 'The agency that issues and renews UK passports.', href: 'https://www.gov.uk/government/organisations/hm-passport-office' },
    'DWP': { full: 'Department for Work and Pensions', def: 'The UK department for benefits and pensions, including Universal Credit and State Pension.', href: 'https://www.gov.uk/government/organisations/department-for-work-pensions' },
    'National Insurance number': { full: 'NINO', def: 'Your UK tax and social security number. You need it to work, pay tax, and claim benefits.', href: 'https://www.gov.uk/apply-national-insurance-number' },
    'NI number': { full: 'National Insurance number', def: 'Your UK tax and social security number. You need it to work, pay tax, and claim benefits.', href: 'https://www.gov.uk/apply-national-insurance-number' },
    'UTR': { full: 'Unique Taxpayer Reference', def: 'The 10-digit number HMRC assigns for Self Assessment. You need it to file a UK tax return.', href: 'https://www.gov.uk/log-in-file-self-assessment-tax-return' },
    'Self Assessment': { full: 'UK Self Assessment tax return', def: 'The system for reporting income that is not taxed at source — self-employment, rent, foreign income — to HMRC by 31 January each year.', href: 'https://www.gov.uk/self-assessment-tax-returns' },
    'BRP': { full: 'Biometric Residence Permit', def: 'The card proving your UK immigration status, permission length, and right to work. Being replaced by eVisas.', href: 'https://www.gov.uk/biometric-residence-permits' },
    'eVisa': { full: 'UK eVisa', def: 'The digital record of UK immigration status, accessed through a UKVI account. Replaces BRPs.', href: 'https://www.gov.uk/evisa' },
    'share code': { full: 'UK immigration share code', def: 'A 9-character code that proves your UK immigration status to an employer or landlord. Generated online, valid 90 days.', href: 'https://www.gov.uk/view-prove-immigration-status' },
    'Share code': { full: 'UK immigration share code', def: 'A 9-character code that proves your UK immigration status to an employer or landlord. Generated online, valid 90 days.', href: 'https://www.gov.uk/view-prove-immigration-status' },
    'EUSS': { full: 'EU Settlement Scheme', def: 'The scheme that granted settled or pre-settled status to EU, EEA, and Swiss citizens living in the UK before 31 December 2020.', href: 'https://www.gov.uk/settled-status-eu-citizens-families' },
    'Life in the UK test': { full: 'Life in the UK Test', def: 'The 24-question computer test on British history, traditions, and government required for most citizenship and settlement applications.', href: 'https://www.gov.uk/life-in-the-uk-test' },
    'Companies House': { full: 'UK Companies House', def: 'The official register of UK companies. You incorporate a limited company and file annual accounts through it.', href: 'https://www.gov.uk/government/organisations/companies-house' },
    'Universal Credit': { full: 'UC', def: 'A monthly UK benefit that replaces six older benefits, for people on low income or out of work. Claimed through your online journal.', href: 'https://www.gov.uk/universal-credit' },
    'NHS': { full: 'National Health Service', def: 'The UK\'s publicly funded healthcare system. Most services are free at the point of use; access depends on immigration status and the immigration health surcharge.', href: 'https://www.nhs.uk/' },
    'GP': { full: 'General Practitioner', def: 'Your local NHS family doctor — the first point of contact for healthcare in the UK. Register with a GP surgery to access care.', href: 'https://www.nhs.uk/nhs-services/gps/' },
    'Jobcentre Plus': { full: 'Jobcentre Plus', def: 'The DWP office network for benefit claims (including National Insurance number interviews) and job-search support.', href: 'https://www.gov.uk/contact-jobcentre-plus' },
    'CAS': { full: 'Confirmation of Acceptance for Studies', def: 'The electronic number a UK licensed sponsor (university) issues so you can apply for a Student visa.', href: 'https://www.gov.uk/student-visa' },
    'Skilled Worker visa': { full: 'UK Skilled Worker visa', def: 'The main UK work visa. You need a job offer from a licensed sponsor at the required skill and salary level.', href: 'https://www.gov.uk/skilled-worker-visa' },
    'immigration health surcharge': { full: 'IHS', def: 'The fee most UK visa applicants pay upfront to use the NHS — £1,035 per year for most adults (2025 rate).', href: 'https://www.gov.uk/healthcare-immigration-application' },
    'Immigration health surcharge': { full: 'IHS', def: 'The fee most UK visa applicants pay upfront to use the NHS — £1,035 per year for most adults (2025 rate).', href: 'https://www.gov.uk/healthcare-immigration-application' },

    // ---- Canada ----
    'IRCC': { full: 'Immigration, Refugees and Citizenship Canada', def: 'The Canadian government department that runs Express Entry, work and study permits, PR cards, and citizenship.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship.html' },
    'CRA': { full: 'Canada Revenue Agency', def: 'Canada\'s tax agency. It administers income tax, benefits like the GST/HST credit, and CRA My Account.', href: 'https://www.canada.ca/en/revenue-agency.html' },
    'Service Canada': { full: 'Service Canada', def: 'The government service counter network for SIN applications, passports, EI, and other federal programs.', href: 'https://www.servicecanada.gc.ca/' },
    'SIN': { full: 'Social Insurance Number', def: 'Your 9-digit Canadian work and tax number. You need it to work, open accounts, and receive benefits.', href: 'https://www.canada.ca/en/employment-social-development/services/sin.html' },
    'PR card': { full: 'Permanent Resident Card', def: 'The official proof of Canadian permanent resident status, needed for travel back to Canada on commercial vehicles.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card.html' },
    'PR Card': { full: 'Permanent Resident Card', def: 'The official proof of Canadian permanent resident status, needed for travel back to Canada on commercial vehicles.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card.html' },
    'permanent resident': { full: 'Canadian permanent resident', def: 'Someone granted the right to live and work anywhere in Canada permanently, without being a citizen.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card.html' },
    'COPR': { full: 'Confirmation of Permanent Residence', def: 'The document (now usually electronic, eCOPR) proving you were approved for Canadian permanent residence.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/confirm-pr-status.html' },
    'Express Entry': { full: 'Express Entry', def: 'Canada\'s online system for managing skilled-worker PR applications — Federal Skilled Worker, Canadian Experience Class, and Federal Skilled Trades.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html' },
    'CRS': { full: 'Comprehensive Ranking System', def: 'The points grid ranking Express Entry candidates — age, education, language, and work experience. Higher CRS = better draw chances.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html' },
    'ECA': { full: 'Educational Credential Assessment', def: 'The report proving your foreign degree equals a Canadian one. Required for Express Entry if you studied outside Canada.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/education-assessed.html' },
    'NOC': { full: 'National Occupational Classification', def: 'Canada\'s system for categorizing jobs. Your work experience must map to a TEER 0–3 NOC for Express Entry.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/find-noc-code.html' },
    'TEER': { full: 'Training, Education, Experience and Responsibilities', def: 'The 0–5 skill level within the NOC system. TEER 0–3 jobs qualify for Express Entry.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/find-noc-code.html' },
    'LMIA': { full: 'Labour Market Impact Assessment', def: 'The document showing a Canadian employer could not find a citizen/PR for a job, needed for many employer-specific work permits.', href: 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/lmia.html' },
    'DLI': { full: 'Designated Learning Institution', def: 'A school approved by a province to host international students. Your study permit needs a DLI acceptance letter.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html' },
    'PGWP': { full: 'Post-Graduation Work Permit', def: 'The open work permit letting international graduates of eligible Canadian programs work for any employer.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/post-graduation-work-permit.html' },
    'PAL': { full: 'Provincial Attestation Letter', def: 'A letter from a province or territory confirming your study permit application spot within its allocation. Required for most study permits since 2024.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html' },
    'T4': { full: 'Statement of Remuneration Paid', def: 'The slip your Canadian employer issues each February showing your wages and deductions. You need it to file taxes.', href: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/employment-income-slips-t4.html' },
    'NETFILE': { full: 'NETFILE', def: 'CRA\'s service for filing your own tax return online using certified software.', href: 'https://www.canada.ca/en/revenue-agency/services/e-services/netfile-overview.html' },
    'OHIP': { full: 'Ontario Health Insurance Plan', def: 'Ontario\'s provincial health insurance. Most newcomers must wait about 3 months after establishing residence before coverage starts.', href: 'https://www.ontario.ca/page/apply-ohip-and-get-health-card' },
    'MSP': { full: 'Medical Services Plan', def: 'British Columbia\'s provincial health insurance plan.', href: 'https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp' },
    'AHCIP': { full: 'Alberta Health Care Insurance Plan', def: 'Alberta\'s provincial health insurance plan.', href: 'https://www.alberta.ca/ahcip.aspx' },
    'RCIC': { full: 'Regulated Canadian Immigration Consultant', def: 'A licensed immigration consultant authorized to charge fees for Canadian immigration advice. Verify one on the CICC register.', href: 'https://college-ic.ca/' },
    'Discover Canada': { full: 'Discover Canada study guide', def: 'The official IRCC booklet for the Canadian citizenship test — available in English, French, and many other languages.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada.html' },
    'citizenship test': { full: 'Canadian citizenship test', def: 'The 20-question multiple-choice test on Canada\'s history, values, and institutions, for applicants aged 18–54.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/citizenship-test.html' },
};

const escapeRegExp = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Tooltip styling (Geist tokens). Named group "term" avoids clashing with
// any parent `group` classes (e.g. FAQ <details> chevrons).
// `notranslate` keeps acronyms and form numbers (USCIS, I-485, DS-160…)
// intact when the page is machine-translated — Google Translate otherwise
// garbles them in Nepali/Hindi/etc.
const TERM_CLASS =
    'group/term notranslate relative inline cursor-help rounded-sm underline decoration-mute decoration-dotted underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-link dark:decoration-mute-dark';
const TIP_CLASS =
    'pointer-events-none fixed left-0 top-0 z-[60] w-60 max-w-[90vw] rounded-md border border-hairline bg-canvas-elevated p-3 text-left text-xs font-normal leading-relaxed text-body opacity-0 shadow-[0px_12px_40px_rgba(0,0,0,0.18)] transition-opacity duration-150 group-hover/term:opacity-100 group-focus/term:opacity-100 dark:border-hairline-dark dark:bg-canvas-elevated-dark dark:text-body-dark';

// Longest-first alternation so "USCIS" wins over "USC", etc.
const pattern = new RegExp(
    `\\b(${Object.keys(glossary)
        .sort((a, b) => b.length - a.length)
        .map(escapeRegExp)
        .join('|')})\\b`,
    'g',
);

/**
 * Wraps known glossary terms in a string with hover/focus tooltip markup.
 * Input must be plain text (no HTML) — output is HTML, use with set:html.
 */
export function linkTerms(text: string): string {
    const linked = text.replace(pattern, (match) => {
        const entry = glossary[match];
        if (!entry) return match;
        return (
            `<span class="${TERM_CLASS}" tabindex="0" data-term` +
            (entry.href ? ` data-href="${entry.href}"` : '') +
            ` onclick="event.preventDefault();event.stopPropagation();var d=this.closest('details');if(d)d.open=true;document.querySelectorAll('details[data-doc-details][open]').forEach(function(o){if(o!==d)o.removeAttribute('open')});if(this.dataset.href)window.open(this.dataset.href,'_blank','noopener')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();event.stopPropagation();if(this.dataset.href)window.open(this.dataset.href,'_blank','noopener')}">` +
            match +
            `<span role="tooltip" class="${TIP_CLASS}">` +
            `<strong class="font-semibold text-ink dark:text-ink-dark">${entry.full}</strong>` +
            ` — ${entry.def}` +
            (entry.href ? `<span class="mt-1.5 block font-mono text-[10px] font-medium uppercase tracking-wide text-link dark:text-link-dark">Click for official info ↗</span>` : '') +
            `</span></span>`
        );
    });
    // Second pass: keep code-like tokens out of machine translation. Google
    // Translate garbles currency amounts, form codes, and URLs in Nepali,
    // Hindi, etc. — wrapping them in notranslate spans preserves them.
    // Skips anything already inside a tag (glossary spans from pass one).
    return linked.replace(
        /(?:^|>)([^<]*)/g,
        (chunk: string) =>
            chunk.replace(
                /\b(?:Form\s+)?(?:[A-Z]{1,3}-?\d{2,4}(?:-[A-Z]\d?)?|\d{3,4}-?(?:SR|EZ|NR|NEC|INT|DIV)?|£\d[\d,.]*|\$\d[\d,.]*|https?:\/\/\S+)\b/g,
                (m: string) => `<span class="notranslate">${m}</span>`,
            ),
    );
}
