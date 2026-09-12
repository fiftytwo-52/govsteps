// Canada guide data. Step phases follow the format in step_format_and_example_guides.md:
// BEFORE YOU GO → GO → FILL → SUBMIT+PAY → WAIT → FOLLOW-UP → RECEIVE
// Data below was checked against official sources (canada.ca, IRCC, CRA)
// in 2025 — the "Data from" badge on each page shows the year it was fetched.

import type { Guide } from './types';

export const guides: Guide[] = [
    {
        slug: 'how-to-apply-for-a-sin-number',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for a SIN (Social Insurance Number)',
        metaTitle: 'How to Apply for a Social Insurance Number (SIN): Step-by-Step Guide',
        description: 'Get a Canadian Social Insurance Number step by step: who needs one, where to apply, the documents newcomers need, and how long it takes to arrive.',
        category: 'ids',
        audience: ['Immigrant'],
        difficulty: 'Easy',
        totalTime: 'Same day (in person) to 10+ business days (by mail)',
        totalCost: 'Free (Service Canada never charges)',
        summary: 'A SIN is your 9-digit Canadian work and tax ID. You apply at a Service Canada office (same-day in most cases) or by mail if you cannot visit. Newcomers need a primary ID like a passport plus proof of immigration status, and the number arrives on a paper confirmation.',
        documents: [
            'Primary identity document (passport from your country of citizenship)',
            'Proof of immigration status (PR card, study or work permit, or visitor record with work authorization)',
            'Secondary document if your name differs (marriage certificate, legal change of name certificate)',
            'Mailing address (for mailed applications)',
        ],
        steps: [
            {
                phase: 'before', title: 'Check whether you need one', detail: 'You need a SIN to work in Canada, file taxes, or receive benefits (like the Canada Child Benefit or GST/HST credit). If you had a SIN before and forgot it, check old tax returns (Notice of Assessment) or your T4 slips before applying for a confirmation letter. You cannot start work without either the number or proof you have applied in some cases — employers must record it within 3 days of your start date.', duration: '10 min',
                links: [
                    { label: 'SIN overview (canada.ca)', href: 'https://www.canada.ca/en/employment-social-development/services/sin.html' },
                ],
            },
            {
                phase: 'go', title: 'Gather your documents', detail: 'Newcomers need ONE primary document (passport or PR card) and, for temporary residents, ONE status document (work permit, study permit with work condition, or visitor record). All documents must be originals — photocopies are refused. If your permit says "does not permit employment" you need an amended permit before applying.', duration: '30 min',
                links: [
                    { label: 'Accepted documents list (canada.ca)', href: 'https://www.canada.ca/en/employment-social-development/services/sin/required-documents.html' },
                ],
            },
            {
                phase: 'go', title: 'Apply in person at a Service Canada office', detail: 'Walk in with your originals to any Service Canada Centre (find your nearest at servicecanada.gc.ca). Staff verify your documents and issue a paper SIN confirmation on the spot — most visits take under an hour. Bring your documents even if you book an appointment online.', duration: '1 hour + travel',
                links: [
                    { label: 'Find a Service Canada office', href: 'https://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp?lang=eng' },
                ],
            },
            {
                phase: 'fill', title: 'Or apply by mail if you cannot visit', detail: 'If you live more than 100 km from a Service Canada office or there are barriers to visiting, download the SIN application form, attach ORIGINAL documents and a clear photocopy of each (the photocopy is returned; originals are kept on file), and mail to Service Canada in Ottawa. Allow 10+ business days plus mail time.', duration: '30 min + mail time',
                links: [
                    { label: 'Apply by mail (canada.ca)', href: 'https://www.canada.ca/en/employment-social-development/services/sin/apply.html' },
                ],
            },
            { phase: 'wait', title: 'Wait for your confirmation (mail only)', detail: 'In-person applicants get the SIN immediately. Mailed applications are returned by post — do not book a job start date before the number arrives if you applied by mail. Service Canada does not issue SINs by email or phone.', duration: '0 to 10+ business days' },
            { phase: 'followup', title: 'Expiry dates for temporary residents', detail: 'SINs starting with 9 are temporary and expire on the same date as your work or study permit. When you renew your permit, you must also renew your SIN. Your number itself stays the same for life — only the expiry changes.', duration: '10 min' },
            { phase: 'receive', title: 'Store it securely', detail: 'Your SIN is confidential — give it ONLY to employers, banks (for interest-bearing accounts), CRA, and benefit programs. Never carry the card in your wallet, never email it, and never put it on a résumé or rental application. Identity theft with a SIN can take months to untangle.', duration: '—' },
        ],
        faqs: [
            { q: 'Does a SIN cost anything?', a: 'No. Service Canada issues SINs free. Any private site charging a "processing fee" is a middleman — the official application is only through Service Canada in person or by mail.' },
            { q: 'My study permit says I can work 20 hours a week. Do I still need a SIN?', a: 'Yes. Any paid work in Canada requires a SIN, and your study permit with an off-campus work condition is an accepted status document. The SIN expires with the permit.' },
            { q: 'I lost my SIN confirmation. How do I get it again?', a: 'Visit a Service Canada office with your original documents — they print a new confirmation letter. Check old tax documents first (T4, Notice of Assessment) as the number may be printed there.' },
        ],
    },
    {
        slug: 'how-to-apply-for-a-canadian-passport',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for a Canadian Passport',
        metaTitle: 'How to Apply for a Canadian Passport: Step-by-Step Guide (2025 Fees)',
        description: 'First Canadian passport or renewal: the application form, photo rules, guarantors, fees, and current processing times.',
        category: 'ids',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Medium',
        totalTime: '2–8 weeks (service varies by season)',
        totalCost: 'From $130 adult 10-year passport (2025 fees)',
        summary: 'Apply online (renewals), by mail, or in person at a passport office or Service Canada point. Adults pay $130 (5-year) or $160 (10-year) plus fees in 2025. First-time applicants and new citizens need a guarantor and proof of citizenship; renewals are simpler.',
        documents: [
            'Completed application form (adult general PPTC 153, or renewal PPTC 054)',
            'Two identical passport photos (50 mm × 70 mm) taken within 12 months',
            'Proof of Canadian citizenship (birth certificate or citizenship certificate) — first passports only',
            'Any previous Canadian passport (renewals)',
            'One valid ID with photo (driver\'s licence, PR card, health card with photo)',
            'A guarantor (any Canadian citizen 18+ holding a valid 5-year or 10-year passport who has known you 2+ years)',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose your application type', detail: 'Renewals (adult passport issued within 15 years, or expired less than a year) use the simplified renewal form: no citizenship documents, no guarantor references, just photos, old passport, and the form. First passports and adult applications after a long lapse use the general form with full documents. Most adult renewals can now be done online at canada.ca/passport-online.', duration: '15 min',
                links: [
                    { label: 'Apply online (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/apply-adult-passport.html' },
                ],
            },
            {
                phase: 'fill', title: 'Get compliant photos', detail: 'Photos must be 50 mm × 70 mm, taken within the last 12 months, with a plain white or light background, neutral face, and head between 31–36 mm from chin to crown. The photographer stamps the back of one photo with their name, address, and the date. Most pharmacies and photo studios do passport photos for around $15.', duration: '30 min',
                links: [
                    { label: 'Photo specifications (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/photo-requirements.html' },
                ],
            },
            {
                phase: 'fill', title: 'Complete the form and references', detail: 'The general application requires two references who have known you at least 2 years (anyone except your guarantor), your personal history, and your guarantor\'s signature on the back of one photo and the declaration. Renewals skip most of this. Do not sign the form before a passport agent can witness it if applying in person.', duration: '45 min'
            },
            {
                phase: 'submit', title: 'Submit online, by mail, or in person', detail: 'Online renewals upload digital photos and payment. Paper applications go to a passport office (10-day service), a Service Canada receiving agent (20 business days), or by mail (20 business days plus transit). Urgent pickup (next business day) is available at passport offices for emergencies with proof of travel.', duration: '1–2 hours',
                links: [
                    { label: 'Where to submit (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/submit-application.html' },
                ],
            },
            {
                phase: 'wait', title: 'Track processing', detail: 'Standard service fluctuates with demand — check the current times on the IRCC processing page before booking travel. You can check your status online with your file number after about 10 business days. Peak season (spring to summer) adds weeks.', duration: '2–8 weeks',
                links: [
                    { label: 'Check processing times (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html' },
                ],
            },
            { phase: 'receive', title: 'Receive and sign your passport', detail: 'Passports arrive by courier (signature required) or mail. Sign in ink and check the details immediately — errors go back for correction free within 6 months. Your citizenship certificate or birth certificate is returned separately from the passport.', duration: '—' },
        ],
        faqs: [
            { q: 'How do I get a passport urgently?', a: 'Passport offices offer urgent (next business day) and express (2–9 business days) services for pick-up, but you must show proof of travel within the window and pay extra fees. Book the appointment and bring everything — incomplete files are refused.' },
            { q: 'I just became a citizen. When can I apply?', a: 'As soon as you have your citizenship certificate you can apply for a first passport. Note your PR card becomes invalid the day you take the oath, so apply promptly if you need to travel — many new citizens apply same-week with urgent service.' },
            { q: 'Can my guarantor be a relative?', a: 'Yes — since the rules were relaxed, a guarantor can be a family member or anyone living at your address, as long as they are a Canadian citizen 18+, have known you 2+ years, and hold a valid adult passport. Professionals (like doctors) are no longer required.' },
        ],
    },
    {
        slug: 'how-to-apply-for-a-pr-card',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for a PR Card (Permanent Resident Card)',
        metaTitle: 'How to Get or Renew a PR Card: Step-by-Step Guide (2025)',
        description: 'First permanent resident card, renewal, or replacement: the application, photos, fees, and processing times.',
        category: 'immigration',
        audience: ['Immigrant'],
        difficulty: 'Medium',
        totalTime: '8–12 weeks (first cards) / 10–14 weeks (renewals)',
        totalCost: '$50 (2025 fee)',
        summary: 'New permanent residents get their first PR card automatically after landing — no application needed. Renewals and replacements use paper form IMM 5444, cost $50, and take about 3 months. You must be in Canada to apply and to collect the card.',
        documents: [
            'Completed form IMM 5444 (Permanent Resident Card Application)',
            'Primary ID: valid passport or travel document',
            'Two photos meeting PR card specifications (photographer stamp on back)',
            'Proof of address (if asked)',
            'The fee payment receipt ($50) from the IRCC online payment tool',
        ],
        steps: [
            {
                phase: 'before', title: 'Know when you do and do not apply', detail: 'You do NOT apply for your first card — IRCC mails it automatically after you land as a PR (allow up to 180 days; update your address within 180 days of landing via the IRCC web form if you move). You DO apply for renewals (cards expire every 5 years) and replacements (lost, stolen, damaged, or legal name change). You must be physically in Canada when you apply and when the card is delivered.', duration: '10 min',
                links: [
                    { label: 'PR card overview (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card.html' },
                ],
            },
            {
                phase: 'go', title: 'Meet the residency obligation', detail: 'To renew, you must have been physically in Canada at least 730 days in the last 5 years (or be within 5 years of landing and on track). Days can also count if working abroad for a Canadian company or accompanying a Canadian citizen. IRCC checks this — keep travel records, boarding passes, and employment letters.', duration: '30 min to gather records'
            },
            {
                phase: 'fill', title: 'Complete form IMM 5444', detail: 'The form covers your personal history, addresses for 5 years, employment, and travel history. List every absence from Canada with dates. Do not sign the form until instructed — it must be signed in front of the process (or as directed by the instruction guide) and any sections for a representative completed.', duration: '1–2 hours',
                links: [
                    { label: 'Download IMM 5444 (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/im5444.html' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the $50 fee and mail the package', detail: 'Pay online via the IRCC payment tool, print the receipt, and include it with your form, photos, and copy of your passport bio page. Mail to the PR Card Processing Centre in Sydney, Nova Scotia. Keep tracking numbers — lost files mean starting over.', duration: '1 day + mail time',
                links: [
                    { label: 'Pay fees online (IRCC)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/pay-fees.html' },
                ],
            },
            {
                phase: 'wait', title: 'Wait and watch for the decision letter', detail: 'Renewals take about 10–14 weeks; new cards after landing take up to 6 months. IRCC may ask for extra documents (a "document request letter") — respond by the deadline or the application closes. Check status online with your UCI/application number.', duration: '10–14 weeks',
                links: [
                    { label: 'Check application status (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html' },
                ],
            },
            { phase: 'followup', title: 'If your card expires while abroad', detail: 'A PR card is only a travel document for returning to Canada commercially. If it expired while you are outside Canada, apply for a Permanent Resident Travel Document (PRTD) at the nearest visa office — you must still meet the 730-day rule. Do not board a flight to Canada without a valid PR card or PRTD.', duration: 'Varies' },
            { phase: 'receive', title: 'Activate your card', detail: 'Your new PR card arrives by mail at your Canadian address and works immediately — no activation needed. Check the name and expiry date. Keep your landing paper (Confirmation of Permanent Residence / COPR) forever: it is your legal proof of status even if the card is lost.', duration: '—' },
        ],
        faqs: [
            { q: 'Can I travel with an expired PR card?', a: 'Not back to Canada on a commercial carrier — airlines require a valid PR card or PRTD before boarding. Inside Canada and for exiting by land to the US, your expired card plus other ID is usually fine for carriers, but you will need a PRTD or valid card to return.' },
            { q: 'I did not get my first card after landing. What do I do?', a: 'If 180 days have passed since landing and no card arrived, submit the IRCC web form with your landing details. The most common cause is an old address — cards are not forwarded by Canada Post.' },
            { q: 'My card was lost or stolen. Is the replacement process the same?', a: 'Yes, but you must also report the loss. Use the same IMM 5444 form, tick "replacement", include the fee, and if it was stolen attach the police report number if you have one.' },
        ],
    },
    {
        slug: 'how-to-apply-for-canada-express-entry',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for Permanent Residence via Express Entry (Canada)',
        metaTitle: 'How to Apply for Express Entry: Step-by-Step Guide (2025 Draw Trends)',
        description: 'Canadian Express Entry guide: CRS scores, language tests, ECA, profiles, category-based draws, and the ITA-to-PR process.',
        category: 'immigration',
        audience: ['Immigrant'],
        difficulty: 'Hard',
        totalTime: '6 months to 1+ years from profile to PR',
        totalCost: 'CAD ~$2,700 for one adult (tests, ECA, fees, medical, biometrics)',
        summary: 'Express Entry manages three PR programs (Federal Skilled Worker, Canadian Experience Class, Federal Skilled Trades). You build a profile with language tests and an education assessment, receive a Comprehensive Ranking System (CRS) score, and wait for a draw invitation. Category-based draws (French, healthcare, STEM, trades) can pull candidates below the general cutoff.',
        documents: [
            'Language test results (IELTS General, CELPIP, or TEF/TCF for French) — under 2 years old',
            'Educational Credential Assessment (ECA) for foreign degrees (WES, IQAS, etc.)',
            'Passport bio page for you and your family',
            'Proof of funds (bank statements showing the required settlement amount) unless you have a valid job offer or CEC eligibility',
            'Reference letters from past employers (with duties, hours, dates — not just titles)',
            'Police certificates and upfront medical exam AFTER receiving an invitation',
        ],
        steps: [
            {
                phase: 'before', title: 'Pick your program and check eligibility', detail: 'Federal Skilled Worker (FSW) needs 1 year of skilled work abroad plus a points pass on the six selection factors. Canadian Experience Class (CEC) needs 1 year of skilled work inside Canada. Federal Skilled Trades targets trade certifications. Use the official Come to Canada tool — it tells you which program you qualify for and whether you can enter the pool.', duration: '30 min',
            },
            {
                phase: 'before', title: 'Plan translations for non-English/French documents', detail: 'IRCC requires certified translations for any document not in English or French — birth certificates, marriage certificates, police clearances, and education records from your home country. The translator must be a certified member in good standing of a Canadian provincial or territorial association (or sworn/official translator in your country), and you submit BOTH the translation and the original. Budget $25–$60 per page and 1–2 weeks. Read this guide in Hindi, Nepali, Português (Brasil), or Español with the language dropdown at the top of the page.', duration: '1–2 weeks',
                links: [
                    { label: 'Find out if you qualify (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility.html' },
                ],
            },
            {
                phase: 'go', title: 'Take a language test', detail: 'Book IELTS General (worldwide) or CELPIP (Canada). For FSW you need minimum CLB 7 (IELTS 6.0 in each band). Higher scores raise your CRS dramatically — going from CLB 7 to CLB 9 adds ~50+ points, and French at NCLC 7 alongside English makes you eligible for category-based French draws which often have lower cutoffs. Results are valid 2 years.', duration: 'Test prep 1–3 months',
                links: [
                    { label: 'Language testing explained (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/language-requirements.html' },
                ],
            },
            {
                phase: 'go', title: 'Get your foreign education assessed', detail: 'If your degree is from outside Canada, order an Educational Credential Assessment from an approved agency (WES is fastest, ~$300, 6–8 weeks). The ECA must show your degree equals a completed Canadian credential. Canadian degrees need no ECA. The assessment is valid 5 years.', duration: '6–8 weeks',
                links: [
                    { label: 'ECA requirements (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/education-assessed.html' },
                ],
            },
            {
                phase: 'fill', title: 'Submit your Express Entry profile', detail: 'The profile is free and done in your IRCC secure account. Enter your language scores, ECA number, work history (using the correct NOC/TEER codes from the ESDC list), and family details. The system calculates your CRS score. You have 60 days to complete it once started; incomplete profiles expire after 12 months.', duration: '3–5 hours',
                links: [
                    { label: 'Create a profile (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile.html' },
                ],
            },
            {
                phase: 'wait', title: 'Wait for a draw (invitation to apply)', detail: 'IRCC runs draws roughly every two weeks. General draws and category-based draws (French speakers, healthcare, STEM, trades, transport, agriculture) each have their own cutoff. Check the published CRS cutoffs to see where you stand — if you are close, a new job offer, a Canadian sibling, a spouse\'s language scores, or a provincial nomination (PNP — worth 600 points) can push you over.', duration: 'Weeks to months',
                links: [
                    { label: 'Latest draw results (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-of-invitations.html' },
                ],
            },
            {
                phase: 'submit', title: 'Submit the full PR application after the ITA', detail: 'Once invited you have 60 days to upload the full package: police certificates from every country you lived in 6+ months, an upfront medical exam from a panel physician, proof of funds, reference letters, and fees ($1,525 adult PR fee + $525 right of PR fee, partial refund if refused). Accuracy matters — misrepresentation is a 5-year ban.', duration: '2–4 weeks of gathering',
                links: [
                    { label: 'After the invitation (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/invitation-to-apply.html' },
                ],
            },
            { phase: 'wait', title: 'Wait for the PR decision', detail: 'Most complete applications are processed within the 6-month service standard for Express Entry. You may receive a request for additional documents or biometrics (biometrics now often reused). The portal will eventually show "Approval" and ask you to confirm your photo and address for the COPR and PR card.', duration: '~6 months' },
            { phase: 'followup', title: 'Land and complete the process', detail: 'If abroad, your COPR arrives with instructions to confirm your PR visa before expiry (usually within a year of your medical). You must land in Canada before that deadline. In-Canada applicants get a virtual or in-person landing. Then wait for your PR card by mail (up to 180 days) and apply for a SIN.', duration: '1 day + card wait' },
            { phase: 'receive', title: 'Your PR status — keep proof forever', detail: 'The Confirmation of Permanent Residence (COPR) plus your PR card prove status. You must live in Canada 730 days per rolling 5 years to keep it, and can apply for citizenship after 3 years (1,095 days) of physical presence. File taxes every year you have PR status even with no income.', duration: '—' },
        ],
        faqs: [
            { q: 'What is a good CRS score in 2025?', a: 'It moves year to year. General draws have trended in the 500s, while category-based draws (healthcare, trades, French) often cut in the 400s or lower. If you are under 500, focus on levers: French, a Canadian job offer (with LMIA), a provincial nomination, or a spouse\'s language scores.' },
            { q: 'Do I need a job offer for Express Entry?', a: 'No. Most invitations go to candidates without offers. A valid arranged employment (LMIA-backed) adds 50–200 CRS points but is not required — proof of funds substitutes by showing you can settle without a job.' },
            { q: 'Can I apply without a consultant?', a: 'Yes. IRCC says the process is designed for self-representation and the official guides cover everything. If you do hire help, use a licensed RCIC (check the CICC register) or lawyer — ghost consultants are illegal and unaccountable.' },
        ],
    },
    {
        slug: 'how-to-apply-for-canadian-citizenship',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for Canadian Citizenship',
        metaTitle: 'How to Apply for Canadian Citizenship: Step-by-Step Guide (2025 Fees)',
        description: 'Canadian citizenship application: the 1,095-day rule, tax filing requirement, citizenship test, ceremony, and the 2025 fee.',
        category: 'immigration',
        audience: ['Immigrant'],
        difficulty: 'Hard',
        totalTime: 'About 1 year from application to ceremony',
        totalCost: '$630 adult / $100 minor (2025 fees)',
        summary: 'After 3 years (1,095 days) of physical presence as a PR in the last 5 years — plus tax filings for 3 of those years — you can apply for citizenship. The process includes an online or in-person test for adults 18–54, an interview, and a ceremony where you take the oath and receive your citizenship certificate.',
        documents: [
            'Completed form CIT 0002 (adult) or CIT 0003 (minor)',
            'PR card (valid at application) plus the COPR/landing record',
            'Passports (current and expired) covering your 5-year window',
            'Notice of Assessments or tax summaries for 3 tax years',
            'Two citizenship photos (adults applying on paper)',
            'Language proof (IELTS/CELPIP results, or evidence of education in English/French) — ages 18–54',
        ],
        steps: [
            {
                phase: 'before', title: 'Count your days precisely', detail: 'Use the IRCC Physical Presence Calculator. You need 1,095 days within the 5 years before signing the application. Time as a temporary resident (worker/student) before PR counts as half-days up to a 365-day credit. Sign and date the calculator printout — the date used must match your signature date. Apply the day AFTER you cross 1,095.', duration: '45 min',
            },
            {
                phase: 'before', title: 'Translate documents and study the test in your language', detail: 'Any document not in English or French — passports from non-bilingual countries, birth or marriage certificates, legal name-change records — needs a certified translation (translator must be certified by a Canadian provincial/territorial association or sworn in your country; include the original alongside). For the citizenship test: IRCC offers the test in English and French only, but the free "Discover Canada" study guide and practice tests are available in many languages through community settlement agencies (Hindi, Nepali, Portuguese, Spanish and more) — study in your language first, then drill the English or French questions. This guide itself is available in Hindi, Nepali, Português (Brasil), and Español via the dropdown above.', duration: '1–2 weeks + study time',
                links: [
                    { label: 'Physical presence calculator (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/physical-presence-calculator.html' },
                ],
            },
            {
                phase: 'before', title: 'Check the tax and language requirements', detail: 'You must have filed income taxes for at least 3 years within the 5-year window (even with zero income) — CRA checks this automatically. Adults 18–54 also need proof of English or French at CLB 4+: accepted evidence includes IELTS General or CELPIP results from any time, or a transcript showing secondary/post-secondary education in English or French.', duration: '30 min',
                links: [
                    { label: 'Citizenship eligibility (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility.html' },
                ],
            },
            {
                phase: 'fill', title: 'Complete the application package', detail: 'Forms CIT 0002 plus the physical presence calculator printout, plus CIT 0171 consent/disclosure. Answer the residence questions carefully — every absence matters. Minors apply separately (CIT 0003) and can often apply with a parent or, if the parent is applying at the same time, credit the parent\'s presence.', duration: '2–4 hours',
                links: [
                    { label: 'Application package (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/cit0002.html' },
                ],
            },
            {
                phase: 'submit', title: 'Pay fees and submit online', detail: 'Adult fee is $630 ($100 processing is non-refundable; the $530 right-of-citizenship portion is refunded only for refused applications). Minors pay $100. Most applicants submit through the IRCC portal. Keep every receipt and your file number for status checks.', duration: '1 hour',
                links: [
                    { label: 'Pay and submit (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/pay-fees/pay-fees-citizenship.html' },
                ],
            },
            {
                phase: 'wait', title: 'Wait for the test invitation', detail: 'Processing time runs about 8 months before the test stage, fluctuating by office and season. When invited, adults 18–54 take a 20-question multiple-choice test (pass mark 15) on rights, history, government, and law — study the official "Discover Canada" guide and take the free practice tests. Ages 55+ skip the test but may have an interview.', duration: '6–10 months',
                links: [
                    { label: 'Study: Discover Canada (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/citizenship/citizenship-test.html' },
                ],
            },
            { phase: 'followup', title: 'Attend the interview and ceremony', detail: 'Same-day or soon after the test, an official verifies your originals and asks questions about your application. Approved applicants then receive a ceremony invitation (often weeks later). At the ceremony you take the Oath of Citizenship and receive your certificate — your PR card becomes invalid at that moment, so apply for a passport and a new SIN right away.', duration: 'Same day to a few weeks' },
            { phase: 'receive', title: 'Your citizenship certificate', detail: 'The citizenship certificate (a paper with your photo and a certificate number, not an ID card) is your legal proof of citizenship for life. Order your Canadian passport with it, update your SIN record, and update your provincial health card if it shows your PR status.', duration: '—' },
        ],
        faqs: [
            { q: 'Do days before becoming a PR count?', a: 'Yes, as half-days — each day as a temporary resident counts as 0.5, capped at a 365-day total credit. So two years on a work permit ≈ one year of presence.' },
            { q: 'Can I apply if I was outside Canada a lot?', a: 'Only presence days inside Canada count for the 1,095 (temporary-resident credit aside). Absences also get scrutinized at the interview — have your stamps and flight records ready. IRCC can also check whether you met your PR residency obligation during those years.' },
            { q: 'What happens if I fail the test?', a: 'You get a second attempt on a later date. Failing twice sends you to an interview with a citizenship official who assesses your knowledge verbally. Only after that can the application be refused — and you can reapply.' },
        ],
    },
    {
        slug: 'how-to-file-taxes-in-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to File Your Taxes in Canada (CRA Return)',
        metaTitle: 'How to File Taxes in Canada: Step-by-Step Guide (CRA, 2025 Season)',
        description: 'First-time or annual Canadian tax return: who must file, SLips, NETFILE software, refunds, and benefits unlocked by filing.',
        category: 'taxes',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Medium',
        totalTime: '1–3 hours with software',
        totalCost: 'Free (CRA-certified software) or $0–$40 for paid tiers',
        summary: 'Most residents file a T1 income tax return each spring (deadline April 30; self-employed June 15). Even with no income you should file — the GST/HST credit, Canada Child Benefit, and other payments only flow once you file. NETFILE-certified software walks you through it and sends directly to the CRA.',
        documents: [
            'SIN (Social Insurance Number)',
            'All T4 slips (employment), T4A (contract/scholarships), T5 (investment income)',
            'RRSP and other deduction receipts (donations, medical, transit where eligible)',
            'Rent or property tax receipts (for provincial credits like Ontario Trillium)',
            'Childcare expense receipts',
            'CRA My Account access (recommended — auto-fills your slips)',
        ],
        steps: [
            {
                phase: 'before', title: 'Know whether you must (or should) file', detail: 'You MUST file if you owe tax, are self-employed, or received capital gains. You SHOULD file anyway if you had no income: benefits like the GST/HST credit, Canada Child Benefit, and climate action incentive payments require a return, and newcomers create a "staircase" of residency-part-year filings. The filing deadline is April 30 (June 15 for self-employed, but interest on balances still starts May 1).', duration: '15 min',
                links: [
                    { label: 'Who must file (canada.ca)', href: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/filing-return.html' },
                ],
            },
            {
                phase: 'go', title: 'Register for CRA My Account', detail: 'My Account lets you use Auto-fill My Return — the software pulls every slip the CRA already has (T4s, T5s, RRSP data). Register with your SIN and a CRA-accepted ID, or wait 1–2 weeks for the mailed security code that unlocks full access. Do this in January–February so the account is ready for filing season.', duration: '20 min + 1–2 week code by mail',
                links: [
                    { label: 'CRA My Account registration', href: 'https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html' },
                ],
            },
            {
                phase: 'fill', title: 'Collect slips and choose NETFILE software', detail: 'Employers send T4s by the end of February. Pick any CRA-certified software (Wealthsimple Tax, TurboTax, H&R Block, GenuTax, StudioTax) — most have a free tier for simple returns. NETFILE transmits your return straight to the CRA; you need the access code from your previous Notice of Assessment only if you did not use My Account.', duration: '30 min',
                links: [
                    { label: 'Certified NETFILE software list (canada.ca)', href: 'https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/netfile-overview/certified-software-netfile-program.html' },
                ],
            },
            {
                phase: 'fill', title: 'Complete the return', detail: 'Enter your slips (or Auto-fill), then claim deductions: RRSP contributions, union/professional dues, childcare, medical, donations, and home-office expenses where eligible. First-year residents file a part-year return and report world income only for the residency period — report the date you established residential ties. Watch for provincial credits (Ontario Trillium, BC climate credits) driven by your rent or property tax.', duration: '1–3 hours'
            },
            {
                phase: 'submit', title: 'NETFILE the return', detail: 'Transmit electronically. Keep the confirmation number. You get an immediate Notice of Assessment in My Account (usually within 2 weeks) showing your refund or balance. If you owe, pay online via My Account, online banking, or at the bank — payments after April 30 accrue interest daily.', duration: '10 min'
            },
            {
                phase: 'wait', title: 'Get your refund (if any)', detail: 'Direct-deposit refunds arrive in about 2 weeks; cheques take about 8. The CRA pays interest on late refunds. If the CRA adjusts your return or asks for receipts (a "request for information"), respond by the deadline to keep credits.', duration: '2 weeks'
            },
            { phase: 'followup', title: 'Keep records for 6 years', detail: 'Keep returns, slips, and receipts for 6 years — the CRA can audit any return in that window. Your Notice of Assessment is also what you need for citizenship applications (3 years of filings), so download each year\'s PDF and store it with your immigration papers.', duration: '—' },
        ],
        faqs: [
            { q: 'I arrived mid-year. Do I report foreign income?', a: 'Only income received AFTER you became a tax resident (established residential ties — a home, spouse, or dependants in Canada). Earlier foreign income is excluded but still disclosed on the "world income" line for benefit calculations. Report foreign-source income after arrival even if not remitted to Canada.' },
            { q: 'I have no income. Do I still file?', a: 'Yes — filing unlocks the GST/HST credit, Canada Child Benefit, and other refundable credits. Around 40% of returns are filed for benefits rather than tax owed.' },
            { q: 'What about free clinics?', a: 'Community Volunteer Income Tax Program (CVITP) clinics file simple returns free for people with modest income and a simple situation (no rental, no capital gains). Find one near you through the CRA website or 211.' },
        ],
    },
    {
        slug: 'how-to-get-a-canadian-drivers-licence',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Get a Driver\'s Licence in Canada (Newcomers)',
        metaTitle: 'How to Get a Driver\'s Licence in Canada: Step-by-Step Guide (2025)',
        description: 'Canadian driver\'s licence for newcomers and new drivers: graduated licensing, foreign licence exchange rules, vision/knowledge/road tests.',
        category: 'ids',
        audience: ['Immigrant', 'Native'],
        difficulty: 'Hard',
        totalTime: '8–12 months (new drivers) / days (recognized exchange countries)',
        totalCost: '$100–$200 total (varies by province)',
        summary: 'Licensing is provincial: Ontario, BC, Alberta, and others each run their own system. New drivers pass a graduated program (G1/G2/G in Ontario, for example), while newcomers from exchange countries can swap directly. Some countries only get credit for prior experience, reducing the waiting periods.',
        documents: [
            'Current foreign driver\'s licence (original)',
            'Official driving record/abstract from your home country (for experience credit)',
            'Passport and immigration documents (PR card, permit)',
            'Proof of provincial address',
            'Glasses/contacts if you need them for driving',
        ],
        steps: [
            {
                phase: 'before', title: 'Check your province\'s rules', detail: 'Each province differs. Ontario uses a three-stage system (G1 knowledge test → G2 road test → full G). Some countries (US, UK, Australia, Japan, South Korea, Switzerland, Germany, France and more) have full licence-exchange agreements. Others (e.g., India, Nepal, Brazil for some provinces) allow only experience credit. Look up your specific case on your province\'s driver licensing site.', duration: '30 min',
                links: [
                    { label: 'Driving in Ontario (ontario.ca)', href: 'https://www.ontario.ca/page/get-g-drivers-licence-new-drivers' },
                    { label: 'ICBC (BC) licensing', href: 'https://www.icbc.com/driver-licensing' },
                ],
            },
            {
                phase: 'go', title: 'Gather proof of driving experience', detail: 'If you are not from an exchange country but drove at home, an official driving record (from your home licensing authority, on letterhead or stamped) can grant credit — in Ontario, 12+ months of verified experience lets you book the G2 road test immediately, and 24+ months can let you go straight to the full G after G2. Without a record you start as a new driver.', duration: '1–4 weeks to obtain by mail'
            },
            {
                phase: 'go', title: 'Take the vision and knowledge tests', detail: 'Visit a DriveTest centre (Ontario), ICBC office (BC), or registry agent (Alberta). Pass the vision screening (bring glasses) and the written/signal knowledge test on rules and signs — typically 20–40 multiple-choice questions, available in multiple languages in some provinces. Passing gives you a learner licence (e.g., G1) with restrictions: zero alcohol, and a supervising fully-licensed driver beside you.', duration: '1–2 hours + study time',
                links: [
                    { label: 'Ontario official driver handbook', href: 'https://www.ontario.ca/document/official-mto-drivers-handbook' },
                ],
            },
            {
                phase: 'wait', title: 'Complete the graduated stages (new drivers)', detail: 'With G1 you must hold it 12 months (8 months with an approved driving course) before the first road test. Passing the G2 test lets you drive alone (still zero alcohol for under-21s in most provinces). The full G test (highway driving) follows after 12 months at G2. Experience credit shortens each stage — the agent tells you your exact timeline when you apply.', duration: '8–12 months (or shorter with credit)'
            },
            {
                phase: 'submit', title: 'Pay fees as you go', detail: 'Ontario: ~$160 covers the knowledge test and 5-year licence; each road test is ~$55 ($90 for the G test). BC and Alberta structures differ. Fees are per attempt — failing means rebooking and repaying, so take a few practice lessons if it has been years since you drove.', duration: '—'
            },
            { phase: 'followup', title: 'Consider driving school', detail: 'An approved beginner driver education course (Ontario) shortens the G1 wait by 4 months and often lowers insurance. Shop around — $500–$800 is typical, and insurers like Desjardins/Intact recognize certificate discounts for 1–3 years.', duration: '4 weeks' },
            { phase: 'receive', title: 'Full licence', detail: 'Your full provincial licence (the plastic card with the class, e.g., G) arrives by mail after passing the final test — a temporary paper licence covers you meanwhile. It doubles as photo ID everywhere in Canada, so keep it current and update your address with the licensing office within days of any move.', duration: '—' },
        ],
        faqs: [
            { q: 'I have a US licence. Can I just swap it?', a: 'Yes — all provinces exchange valid US (and many other countries\') licences for the equivalent class without tests, as long as the licence is valid or expired less than a set period (often 12 months). You surrender the foreign licence in exchange in most provinces.' },
            { q: 'How long can I drive on my foreign licence after arriving?', a: 'Usually 60–90 days after taking up residence, depending on the province. After that you need the provincial licence. Insurance is a separate matter — driving without a provincial licence can void coverage in a crash, so convert early.' },
            { q: 'Why is my insurance so high as a newcomer?', a: 'Insurers credit verifiable history. Get your official abstract (letter of experience) from your previous insurer abroad — some Canadian insurers credit up to 10+ years of foreign experience, cutting premiums by half or more. Shop brokers; the first quote is never the best.' },
        ],
    },
    {
        slug: 'how-to-apply-for-provincial-health-insurance',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for Provincial Health Insurance (OHIP and Equivalents)',
        metaTitle: 'How to Apply for Provincial Health Insurance in Canada: Step-by-Step (2025)',
        description: 'Register for Canadian public health coverage: OHIP in Ontario, MSP in BC, AHCIP in Alberta — waiting periods, documents, and what is covered.',
        category: 'benefits',
        audience: ['Immigrant', 'Native'],
        difficulty: 'Easy',
        totalTime: 'Same-day application; coverage after waiting period',
        totalCost: 'Free in most provinces (BC scrapped MSP premiums in 2020)',
        summary: 'Canada\'s health coverage is run by provinces. Apply as soon as you arrive (or move) — most provinces had waiting periods eliminated or reduced (Ontario no longer has one for newcomers; coverage starts your landing day). You need documents proving residence and status, then a health card arrives by mail.',
        documents: [
            'Passport and immigration document (PR card, work/study permit with 12+ months validity where required)',
            'Proof of provincial residence (lease agreement, bank statement, or utility bill with your address)',
            'One additional ID (SIN confirmation, foreign driver\'s licence, credit card with name)',
        ],
        steps: [
            {
                phase: 'before', title: 'Learn your province\'s rules', detail: 'Ontario\'s OHIP, BC\'s MSP (via Health Insurance BC), and Alberta\'s AHCIP are the big three. Ontario removed the 3-month wait in 2024 — coverage can start the day you establish residence. BC and Alberta also effectively removed waits for most new residents. Workers on permits usually need one valid 12+ months; some categories (visitor visas) are never eligible.', duration: '20 min',
                links: [
                    { label: 'OHIP eligibility (ontario.ca)', href: 'https://www.ontario.ca/page/apply-ohip-and-get-health-card' },
                    { label: 'MSP enrolment (BC)', href: 'https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp/bc-residents/eligibility-and-enrolment' },
                ],
            },
            {
                phase: 'go', title: 'Gather residence and status documents', detail: 'Provinces want ORIGINALS showing three things: identity (passport), legal status (PR card or qualifying permit), and residence in the province (lease, bank statement, employer letter). Download and complete the province\'s registration form (e.g., Ontario form 0266-82) before visiting an office to save time.', duration: '30–60 min'
            },
            {
                phase: 'go', title: 'Apply in person or by mail', detail: 'Ontario: ServiceOntario centre, walk-in with originals. Alberta: registry agent office. BC: mail-in application for most applicants. Staff verify documents, take your photo (Ontario and Alberta print photo cards), and give you a confirmation of registration. List every family member — each person gets a card with their own health number.', duration: '1 hour + travel'
            },
            {
                phase: 'wait', title: 'Wait for the health card by mail', duration: '2–6 weeks',
                detail: 'Cards arrive within weeks. Until the physical card arrives you may show the registration confirmation for covered services. If you moved and the card never arrives, contact the ministry — unclaimed cards are returned and cancelled after a period.',
            },
            {
                phase: 'followup', title: 'Know what is (and is not) covered', detail: 'Provincial plans cover doctor visits, hospital care, and diagnostics — NOT prescriptions (outside hospital), dental, or glasses for adults. Many employers offer supplemental benefits for those, and low-income residents get help like Ontario\'s Trillium Drug Program. Newcomers should also check whether home-country prescriptions need a Canadian doctor\'s renewal — book an early clinic visit to transfer care.', duration: 'Ongoing',
                links: [
                    { label: 'Find a family doctor or clinic (Ontario)', href: 'https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner' },
                ],
            },
            { phase: 'receive', title: 'Keep your card and update moves', detail: 'Your health number stays the same for life within the province. Update your address with the health ministry within 30 days of moving, and re-register when you move between provinces (coverage transfers after a short wait in the new province — carry private or travel coverage for the gap if you have one).', duration: '—' },
        ],
        faqs: [
            { q: 'I am an international student. Am I covered?', a: 'Depends. BC and Alberta cover students on study permits valid 6+ months (BC requires 6-month permit plus enrolment). Ontario OHIP does NOT cover international students — your school enrols you in a mandatory private plan (e.g., UHIP). Check with your institution before arriving.' },
            { q: 'Can I see a doctor before the card arrives?', a: 'Yes, once your coverage start date has passed — clinics can verify coverage with your registration confirmation, or you pay and claim reimbursement. Walk-in clinics are plentiful and do not require a family doctor.' },
            { q: 'Does OHIP cover me outside Canada?', a: 'Barely — only limited amounts (e.g., emergency care at rates far below costs, for limited travel outside the country). Buy travel medical insurance for any trip; US hospital bills alone can exceed coverage by tens of thousands.' },
        ],
    },
    {
        slug: 'how-to-register-a-business-in-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Register a Business in Canada (Federal or Provincial)',
        metaTitle: 'How to Register a Business in Canada: Step-by-Step Guide (2025 Fees)',
        description: 'Start a business in Canada: choosing sole proprietorship vs incorporation, name search, federal vs provincial registration, business number, and CRA accounts.',
        category: 'business',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Medium',
        totalTime: '1–5 business days for registration',
        totalCost: '$60–$300 registration; $200 federal incorporation (2025 fees)',
        summary: 'Registering in Canada is fast: choose sole proprietorship, partnership, or corporation; pick federal (Canada-wide name protection) or provincial (cheaper, faster); reserve a name; and file online. The CRA then issues a business number you extend into GST/HST and payroll accounts.',
        documents: [
            'Proposed business name (and a backup — name conflicts are the top rejection cause)',
            'A NUANS name search report (for incorporations)',
            'Registered office address in the jurisdiction of registration',
            'Director details (name, address, and for incorporation: residency status)',
            'Government-issued ID for online filing',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose the business structure', detail: 'Sole proprietorship: cheapest, income taxed on your personal return, unlimited personal liability. Partnership: shared liability. Corporation: separate legal entity, limited liability, and often lower tax on profits kept in the company (small-business rate ~9–13% federally+provincially in 2025). Most consultants start sole proprietor then incorporate once profits justify ~$1,500/year in accounting costs.', duration: '1–2 hours of research',
                links: [
                    { label: 'Choose a structure (canada.ca)', href: 'https://www.canada.ca/en/services/business/start.html' },
                ],
            },
            {
                phase: 'before', title: 'Choose federal or provincial', detail: 'Federal incorporation ($200 online, Corporations Canada) protects your name Canada-wide and lets you operate anywhere, but requires extra provincial registration where you operate. Provincial incorporation (e.g., Ontario ~$300 online, BC ~$350) is simpler and fine if you stay in one province. Registering a sole proprietorship is trivial — often online the same day, under $100.', duration: '30 min'
            },
            {
                phase: 'go', title: 'Run a name search (NUANS)', detail: 'Incorporations need a NUANS report ($13.75 federal / ~$8–20 provincial) showing conflicts with existing names and trademarks. Pick 2–3 backups. Sole proprietorships operating under a personal name (Jane Doe Consulting) need nothing; a separate trade name just needs a provincial name registration. Avoid names implying government ties or restricted words (Royal, Bank) — these trigger manual review.', duration: '1 hour',
                links: [
                    { label: 'NUANS name search', href: 'https://ised-isde.canada.ca/ccolg-cCont/entreprises-entreprises/new-nouveau/nuans-cpnus' },
                ],
            },
            {
                phase: 'fill', title: 'File the incorporation or registration', detail: 'Federal: file through Corporations Canada online with your articles, director list, and registered office. Ontario/BC/Alberta: provincial registries or a service provider (e.g., OnCorp, registries). You get a certificate of incorporation (or master business licence for sole proprietors) usually within 1–5 business days. Foreign-owned companies can incorporate federally — non-resident directors are allowed federally (some provinces require a resident director).', duration: '1–2 hours'
            },
            {
                phase: 'submit', title: 'Get your CRA business number and accounts', detail: 'Within days the CRA auto-issues a 9-digit business number (BN). Register for the accounts you need: GST/HST (required over $30,000 worldwide revenue in 4 quarters — voluntary earlier lets you claim input credits), payroll (before your first employee), and import/export. All free via the CRA Business Registration Online portal.', duration: '1 hour',
                links: [
                    { label: 'CRA business registration (canada.ca)', href: 'https://www.canada.ca/en/services/taxes/business-number.html' },
                ],
            },
            { phase: 'followup', title: 'Open a business bank account', detail: 'Corporations MUST keep finances separate (courts pierce the veil when personal and corporate money mix). Most banks offer low-fee small-business accounts ($10–$30/month); bring your certificate, article of incorporation, and ID. Also confirm whether your industry needs a municipal business licence (restaurants, trades, home businesses in many cities).', duration: '2–3 hours' },
            { phase: 'receive', title: 'Stay compliant', detail: 'Corporations file an annual return with the registry (federal: $12/year) plus a T2 corporate tax return within 6 months of fiscal year-end, and keep a minute book of shareholder resolutions. Sole proprietors just file their personal return with Form T2125. Set calendar reminders — the registry can dissolve corporations for missed annual filings.', duration: '—' },
        ],
        faqs: [
            { q: 'Can I start a business in Canada as a non-resident?', a: 'Yes, you can incorporate and own shares in a Canadian company from abroad — federal incorporation allows non-resident directors. But owning a company does NOT grant you any work or residency status: to actively run it inside Canada you need a work permit or PR.' },
            { q: 'When must I register for GST/HST?', a: 'Once your worldwide taxable revenue exceeds $30,000 in a single calendar quarter or over four consecutive quarters. Registering earlier can be smart — you recover GST/HST paid on startup costs but must charge tax on sales from day one.' },
            { q: 'Sole proprietorship or corporation for consulting?', a: 'Start sole proprietor while validating: it is free–cheap, income is reported on your T1, and losses offset other income. Incorporate when profits exceed your salary needs (~$80–120k) so surplus is taxed at the small-business rate instead of your top marginal rate.' },
        ],
    },
    {
        slug: 'how-to-apply-for-a-canadian-work-permit',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for a Canadian Work Permit',
        metaTitle: 'How to Apply for a Work Permit in Canada: Step-by-Step Guide (2025)',
        description: 'Canadian work permit routes: employer-specific permits with an LMIA, open work permits (PGWP, IEC, spousal), the portal, and processing times.',
        category: 'immigration',
        audience: ['Immigrant'],
        difficulty: 'Hard',
        totalTime: '3 weeks (employer-specific online goal) to 6+ months',
        totalCost: '$155 permit + $100 open work permit holder fee + $85 biometrics',
        summary: 'Canadian work permits are employer-specific (tied to one employer and LMIA) or open (any employer — post-graduation, spousal, IEC working holiday). The online application through the IRCC portal needs the employer\'s offer details (LMIA number or LMIA-exempt category), biometrics, and proof you will leave at the end.',
        documents: [
            'Valid passport',
            'Job offer letter with NOC/TEER code, wage, duties, and duration',
            'LMIA number (employer-specific) or proof of LMIA-exempt category (PGWP letter, spousal status, IEC pool invite)',
            'Proof of qualifications (education credential assessment, trade certification if the offer requires it)',
            'Police certificates (some streams) and medical exam (certain occupations/countries)',
            'Proof of funds for yourself and family for open permits',
        ],
        steps: [
            {
                phase: 'before', title: 'Identify your permit route', detail: 'Four broad routes: (1) LMIA-backed employer-specific — employer proves no Canadian is available; (2) LMIA-exempt — international agreements (USMCA for Americans/Mexicans, CETA transfers), intra-company transfers, or "significant benefit"; (3) Open permits — post-graduation (PGWP), spouse of a student/worker, IEC working holiday; (4) Provincial nomination with a job offer. Each has its own document set, so lock the route first.', duration: '1–2 hours',
            },
            {
                phase: 'before', title: 'Get documents translated (non-English/French)', detail: 'Reference letters, diplomas, trade certificates, or police clearances not in English or French must arrive as certified translations alongside the originals — the translator must be certified by a Canadian provincial/territorial translators association or officially sworn in the issuing country. Job offer letters themselves are usually in English already, but supporting credentials often are not. Certified services charge $25–$60 per page. This guide is also available in Hindi, Nepali, Português (Brasil), and Español — use the language dropdown at the top of the page.', duration: '1–2 weeks',
                links: [
                    { label: 'Work permit routes (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html' },
                ],
            },
            {
                phase: 'go', title: 'Secure the offer and LMIA (or exemption code)', detail: 'For LMIA-backed permits, your employer files with Employment and Social Development Canada ($1,000 fee they pay), advertising the role first and showing wage above the median for the NOC. Positive LMIAs are job-offer-specific and named to you. LMIA-exempt offers carry an exemption code the employer states in the offer letter and portal.', duration: 'Weeks to months (employer-driven)',
                links: [
                    { label: 'LMIA explained (canada.ca)', href: 'https://www.canada.ca/en/employment-social-development/services/foreign-workers.html' },
                ],
            },
            {
                phase: 'fill', title: 'Submit the online application', detail: 'Apply through the IRCC portal: answer eligibility questions, upload the offer letter (with LMIA number or exemption code), passport, photos, and supporting proof. Employer-specific permits now target a 3-week online processing goal; paper and complex cases run longer. Fees: $155 + $100 (open permit holder fee) + $85 biometrics.', duration: '2–4 hours',
                links: [
                    { label: 'Apply online (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit-application.html' },
                ],
            },
            {
                phase: 'submit', title: 'Give biometrics', detail: 'After applying, you get a biometrics instruction letter within 24–72 hours — book at a VAC (Visa Application Centre) within 30 days. Fingerprints/photo take 15 minutes; fee is $85 (or $170 family). Biometrics are reused for 10 years across IRCC applications.', duration: '15 min + booking'
            },
            {
                phase: 'wait', title: 'Wait for the decision and passport request', detail: 'IRCC may ask for extra documents or an upfront medical (healthcare, food handling, or certain-country applicants). Once approved you receive either a port-of-entry letter of introduction (apply from abroad — show it at the border where the officer issues the actual permit) or, if applying from inside Canada, the permit by mail.', duration: '3 weeks to 6+ months by route'
            },
            { phase: 'followup', title: 'Land and start work correctly', detail: 'At the border the officer prints your work permit — check the employer name, NOC, location, and expiry date BEFORE leaving the counter; errors are fixable on the spot but painful later. Then apply for your SIN (the permit is your status document) and register for provincial health coverage if the permit is 12+ months (province-dependent).', duration: '1–2 hours' },
            { phase: 'receive', title: 'Know your permit conditions', detail: 'Employer-specific permits tie you to one employer, one location, one role — changing jobs means a NEW permit before starting. Open permits let you work for anyone in Canada. Both stop the day they expire; apply for extensions at least 30 days before expiry to get maintained status.', duration: '—' },
        ],
        faqs: [
            { q: 'Can my spouse work while I am on a work permit?', a: 'Often yes — spouses/common-law partners of workers in TEER 0–3 jobs (and some TEER 4–5 with 6+ months remaining) can get open work permits. The rules changed in 2025 (spousal open permits were narrowed), so verify the current policy for your NOC before your partner relies on it.' },
            { q: 'What is maintained (implied) status?', a: 'If you apply to extend before your permit expires, you keep working under the same conditions until a decision. It does not apply if the permit already expired — then you must stop work and may need restoration (extra $229 fee, 90-day window).' },
            { q: 'Do US citizens need an LMIA?', a: 'Not for USMCA (former NAFTA) professional occupations — Americans and Mexicans in listed professions with a job offer and qualifications get LMIA-exempt employer-specific permits, usually processed in weeks.' },
        ],
    },
    {
        slug: 'how-to-apply-for-a-canadian-study-permit',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for a Canadian Study Permit',
        metaTitle: 'How to Apply for a Study Permit in Canada: Step-by-Step Guide (2025 Rules)',
        description: 'Canadian study permit: getting a PAL from a designated school, the IRCC portal, SDS closures, proof of funds, and work rules for students.',
        category: 'students',
        audience: ['Immigrant'],
        difficulty: 'Medium',
        totalTime: '4–12 weeks (varies by country)',
        totalCost: '$150 permit + $85 biometrics; $20,635 proof of funds (2025)',
        summary: 'You need an acceptance letter from a Designated Learning Institution, a provincial Attestation Letter (PAL/TAL — required since 2024), and proof of $20,635 plus first-year tuition for yourself. Apply online through the IRCC portal; approved applicants abroad get a letter of introduction and, if needed, a visa to travel.',
        documents: [
            'Letter of acceptance from a Designated Learning Institution (DLI)',
            'Provincial Attestation Letter (PAL or TAL — the school arranges this after you accept)',
            'Proof of funds: $20,635 living cost + first-year tuition + travel (2025 threshold)',
            'Financial instruments: GIC, bank statements, education loan sanction letter, or sponsor documents',
            'Passport and photos',
            'Statement of purpose / letter of explanation',
            'Upfront medical exam (required for many countries)',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose a Designated Learning Institution', detail: 'Only DLIs can host international students — check the official list and confirm the school\'s PGWP eligibility before paying anything, since not all programs qualify for the post-graduation work permit (a huge factor in your long-term plan). Also check the DLI\'s compliance track record; attending a suspended DLI strands your application.', duration: '2–5 hours of research',
                links: [
                    { label: 'Search DLIs (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/choose-designated-learning-institution/list.html' },
                ],
            },
            {
                phase: 'go', title: 'Get accepted and secure your PAL', detail: 'Apply to the program, pay the tuition deposit, and the school issues the acceptance letter and then requests a provincial attestation letter (PAL) on your behalf — most provinces turn these around in days to weeks. Your study permit application cannot proceed without a PAL unless you are exempt (master\'s/doctoral, K–12, and a few other categories).', duration: '2–6 weeks'
            },
            {
                phase: 'fill', title: 'Prepare the financial proof', detail: 'As of 2025 you must show $20,635 for living costs (single applicant) PLUS first-year tuition and travel money. Acceptable evidence: GIC (Guaranteed Investment Certificate) from a Canadian bank, 4–6 months of bank statements with a credible history, approved education loan, or a combination. Large unexplained recent deposits trigger refusal.', duration: '1–2 weeks'
            },
            {
                phase: 'submit', title: 'Apply online through the IRCC portal', detail: 'Complete the eligibility questionnaire, upload acceptance letter, PAL, financial proof, statement of purpose, passport, and medical exam (upfront required for many countries). Fee: $150 + $85 biometrics. The letter of explanation matters — weak study-plan narratives are a leading refusal reason for certain regions.', duration: '2–4 hours',
                links: [
                    { label: 'Apply for a study permit (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html' },
                ],
            },
            { phase: 'wait', title: 'Biometrics and processing', detail: 'Give biometrics within 30 days of the instruction letter. Processing runs roughly 4–12 weeks depending on country and volume; check current times online. IRCC may request an interview or extra documents — respond through the portal by the stated deadline.', duration: '4–12 weeks' },
            { phase: 'followup', title: 'Arrive and validate your permit', detail: 'Approved? You receive a letter of introduction (not the permit itself) plus a visitor visa or eTA to board your flight. The border officer issues the actual study permit on arrival — verify the permit conditions immediately, especially whether you may work. Then register for classes (your DLI reports enrolment to IRCC) and apply for your SIN.', duration: '1 day at the border' },
            { phase: 'receive', title: 'Know your work rights', detail: 'Study permit holders in eligible programs can work 24 hours/week off campus during sessions (raised from 20 in late 2024) and full-time during scheduled breaks. Spouses of master\'s/doctoral students may qualify for open work permits — the rules were narrowed in 2025, so verify current policy before planning family finances around it.', duration: '—' },
        ],
        faqs: [
            { q: 'Is the SDS (Student Direct Stream) still available?', a: 'No — IRCC ended SDS in November 2024. All study permit applications now go through the regular stream, so the old GIC-fast-track route is gone; GICs remain valid financial proof but no longer speed processing.' },
            { q: 'What is a PAL and do I need one?', a: 'A Provincial Attestation Letter — a cap-allocation document provinces issue to your school confirming your seat counts against the federal study permit cap. You need one for most college and bachelor applications. Master\'s, doctoral, and K–12 applicants are exempt.' },
            { q: 'Can my spouse come with me?', a: 'Spouses of university master\'s/doctoral students and some professional programs can still get open work permits, but the eligibility list was tightened in 2025. Spouses of college and bachelor students generally no longer qualify — plan finances on a single income.' },
        ],
    },
    {
        slug: 'how-to-apply-for-cra-my-account',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Register for CRA My Account',
        metaTitle: 'How to Register for CRA My Account: Step-by-Step Guide (2025)',
        description: 'Set up CRA My Account online: registration options, the mailed security code, auto-fill returns, and tracking benefits and refunds.',
        category: 'taxes',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Easy',
        totalTime: '20 minutes + up to 2 weeks for the mailed security code',
        totalCost: 'Free',
        summary: 'CRA My Account lets you see your Notice of Assessment, RRSP and TFSA contribution room, benefit payments, and — critically — Auto-fill My Return, which imports every slip the CRA already holds. Register with your SIN and one of three identification routes; full access needs a one-time code mailed to your address.',
        documents: [
            'SIN (Social Insurance Number)',
            'A recent tax return filed (you need specific line amounts from it) OR a CRA-accepted digital ID (Interac document verification)',
            'Current mailing address on file with the CRA (the security code goes there)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you have filed at least one return', detail: 'The classic registration asks for line amounts from your most recent Notice of Assessment (e.g., line 15000 income) to verify identity. If you have never filed a Canadian return, you must file one first — even a nil return for newcomers — before the identity check can pass.', duration: '10 min',
                links: [
                    { label: 'CRA My Account sign-in', href: 'https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals.html' },
                ],
            },
            {
                phase: 'go', title: 'Choose a registration route', detail: 'Three options: (1) CRA sign-in with your SIN + date of birth + tax-return line amounts — fastest; (2) Interac document verification (newer, verifies your ID with your bank app in minutes); (3) a provincial digital ID where available. You also need a personal access code if the system cannot verify you fully — it then mails one.', duration: '15 min'
            },
            {
                phase: 'fill', title: 'Create the credential (username and password)', detail: 'Set up your CRA user ID and password directly, or use a Sign-in Partner (your bank\'s login — then no separate CRA credential). Write answers to the security questions where none of the answers can be guessed from your social media (first pet, first school are risky).', duration: '10 min'
            },
            {
                phase: 'wait', title: 'Wait for the security code by mail', duration: '5–10 business days',
                detail: 'After the initial registration you have partial access immediately (view basic info). Full access — auto-fill, notices, changes to returns — needs the one-time security code the CRA mails to your address on file. If it does not arrive in 2 weeks, call the CRA individual enquiries line and they can verify by phone.',
            },
            {
                phase: 'submit', title: 'Enter the code and unlock full access', detail: 'Sign back in, enter the code, and the account unlocks permanently. Enable multi-factor authentication (passcode to your phone) — the CRA added this after a spate of phishing-related account takeovers, and it now prompts on new devices.', duration: '5 min'
            },
            { phase: 'followup', title: 'Use it: auto-fill, track, and fix', detail: 'At tax time, use Auto-fill My Return in your NETFILE software to import every T4/T5/T2202. Year-round: track benefit payments (CCB, GST/HST credit), check RRSP/TFSA room before contributing, view your Notice of Assessment for citizenship applications, and correct returns with ReFILE or a T1 adjustment.', duration: 'Ongoing' },
            { phase: 'receive', title: 'Stay secure', detail: 'The CRA NEVER texts links or asks for prepaid cards. Phishing texts about "CRA refunds" surge every tax season — report them (30-40 fraud reporting) and never enter your credentials from an emailed link. Sign in only by typing canada.ca yourself or using a bookmark.', duration: '—' },
        ],
        faqs: [
            { q: 'I am a brand-new resident with no tax history. How do I register?', a: 'You generally need one filed return first. Newcomers can file a part-year or nil return for the arrival year — even with zero income — which creates the CRA record needed to pass identity verification, and unlocks benefit applications.' },
            { q: 'Can I use my bank login (Sign-in Partner)?', a: 'Yes — most major banks participate, letting you sign into CRA My Account with your online banking credentials and skip the separate CRA user ID. The bank never sees your tax data; it only confirms your identity.' },
            { q: 'What if the security code never arrives?', a: 'Call CRA individual enquiries (1-800-959-8281) after 10 business days. They verify your identity by phone and can re-issue. Make sure the CRA has your current address — update it first if you moved, since undeliverable codes are the top registration blocker.' },
        ],
    },
    {
        slug: 'how-to-register-to-vote-in-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Register to Vote in Canada',
        metaTitle: 'How to Register to Vote in Canada: Step-by-Step Guide',
        description: 'Register to vote in Canadian federal elections: who can vote, the online registration process, voting on election day, and what ID to bring to the polling station.',
        category: 'civic',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Easy',
        totalTime: '10 minutes online',
        totalCost: 'Free',
        summary: 'Canadian citizens 18+ can register online with Elections Canada in about 10 minutes, or simply show up at a polling station with proof of address and register on the spot. Permanent residents and temporary residents cannot vote in federal elections.',
        documents: [
            'Canadian citizenship (citizens can vote; PRs cannot)',
            'Driver\'s licence or other ID with address',
            'Proof of address if registering at the polls (utility bill, lease, bank statement)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you are eligible', detail: 'You can vote in federal elections if you are a Canadian citizen, at least 18 years old on election day, and registered to vote at your current address. Permanent residents, work/study permit holders, and visitors cannot vote — even long-term residents.', duration: '5 min',
                links: [
                    { label: 'Register to vote (Elections Canada)', href: 'https://www.elections.ca/registration' },
                ],
            },
            {
                phase: 'fill', title: 'Register or update your address online', detail: 'Use the Elections Canada Online Voter Registration Service with your driver\'s licence number. You can check whether you are already registered, update your address after a move, or register for the first time. Changes made after an election is called may not take effect for that election.', duration: '10 min',
                links: [
                    { label: 'Online Voter Registration Service', href: 'https://www.elections.ca/registration' },
                ],
            },
            { phase: 'submit', title: 'Watch for your voter information card', detail: 'Once an election is called, registered voters receive a voter information card by mail within about a week. It tells you where and when to vote. Check the name and address on it — if anything is wrong, call Elections Canada at 1-800-463-6868 before election day.' },
            { phase: 'go', title: 'Vote with the right ID', detail: 'At the polling station you need one piece of government ID with your photo, name, and address (driver\'s licence is ideal), OR two other pieces where at least one shows your address, OR you can swear an oath while someone from your polling division vouches for you.' },
            { phase: 'receive', title: 'Vote early if it suits you', detail: 'Besides election day (always a Monday), you can vote at any advance poll (the Friday to Monday a week before), at an Elections Canada office any time after the writ drops, or by mail — apply for a special ballot kit by the Tuesday before election day and return it on time.' },
        ],
        faqs: [
            { q: 'I just became a Canadian citizen. Can I vote?', a: 'Yes, from the moment you take the oath. Register online or at the polls with your citizenship certificate plus proof of address. New citizens are one of the groups most likely to be missing from the voters list, so registering ahead saves time on election day.' },
            { q: 'I moved and did not update my registration. Can I still vote?', a: 'Yes. Go to the polling station for your NEW address and register there with proof of address. You vote where you live on election day, not where you were registered — but updating online beforehand is faster.' },
            { q: 'Can I vote if I am abroad?', a: 'Yes — Canadian citizens living abroad can vote by special ballot in the riding where they last lived. Apply to Elections Canada for a mail-in kit as soon as an election is called; ballots must arrive back by election day, not just be postmarked.' },
        ],
    },
    {
        slug: 'how-to-get-a-canadian-birth-certificate',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Get a Copy of a Canadian Birth Certificate',
        metaTitle: 'How to Get a Canadian Birth Certificate: Order by Province',
        description: 'Order a Canadian birth certificate or certified copy: provincial vital statistics offices, fees, processing times, and how new parents register a birth.',
        category: 'ids',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Easy',
        totalTime: '2–8 weeks depending on province',
        totalCost: '$25–$50 per certificate',
        summary: 'Birth certificates are issued by provincial and territorial vital statistics offices, not the federal government. You order online or by mail from the province where the birth was registered, pay $25–$50, and receive the certificate in 2–8 weeks. New parents register the birth first — the hospital does not do it for you.',
        documents: [
            'Government-issued photo ID of the applicant',
            'Information about the birth: full name, date and place of birth, parents\' names',
            'Proof of relationship or entitlement (for someone else\'s certificate)',
        ],
        steps: [
            {
                phase: 'before', title: 'Know which province holds the record', detail: 'Birth records live with the vital statistics office of the province or territory where the birth was registered — not where you live now. Ontario: Service Ontario; BC: Vital Statistics Agency; Quebec: Directeur de l\'état civil (Quebec issues "certificats" in French or English).', duration: '10 min',
                links: [
                    { label: 'Provincial vital statistics offices', href: 'https://www.canada.ca/en/government/services/birth-certificates.html' },
                ],
            },
            {
                phase: 'fill', title: 'Order online or by mail', detail: 'Most provinces take online orders with credit card payment; mail applications need a form, photocopy of ID, and a cheque. First certificates (new births) are issued after the parents register the birth with the province — usually within 30 days of delivery via the hospital paperwork plus a provincial registration form.', duration: '20 min',
                links: [
                    { label: 'Order certificates (Service Ontario example)', href: 'https://www.ontario.ca/page/get-or-replace-ontario-birth-certificate' },
                ],
            },
            { phase: 'submit', title: 'Pay the fee', detail: 'Fees run about $25–$50 per certificate depending on province, with express options costing more (Ontario premium service: 5 business days). Order 2–3 copies — passport applications, SIN registration, and school enrolment each take one, and replacements cost the same again.' },
            { phase: 'wait', title: 'Wait for delivery', detail: 'Standard processing: 2–8 weeks by province (Ontario ~15 business days, BC ~4 weeks, Quebec ~3 weeks for a certificate). Rush services cut this to days for a premium. Certificates arrive by mail to the address on the application.', duration: '2–8 weeks' },
            { phase: 'followup', title: 'Fix errors promptly', detail: 'Check the certificate the day it arrives. Name spellings and parent details are the common errors — corrections require a statutory declaration and supporting documents, and the process is slower than the original order if you delay.' },
            { phase: 'receive', title: 'Use it for the document chain', detail: 'The birth certificate is the foundation document: SIN application for a child, passport application, provincial health card, and school registration all require it. Store it safely — it is a primary identity document and a target for identity fraud.' },
        ],
        faqs: [
            { q: 'I was born abroad to Canadian parents. Can I get a Canadian birth certificate?', a: 'No — a birth certificate only exists for births registered in a Canadian province or territory. Born-abroad children of Canadian citizens get a proof of citizenship certificate from IRCC instead, which serves the same purpose for passports and SIN.' },
            { q: 'Can I order someone else\'s birth certificate?', a: 'Only if you are the person named, a parent (for a child), or otherwise entitled (executor, legal guardian) — provinces restrict access to protect against fraud. You must state your relationship and show your own ID; ordering records you are not entitled to is an offence.' },
            { q: 'My newborn\'s birth was never registered. What do we do?', a: 'Contact your provincial vital statistics office for a late registration. You will need proof of the birth (hospital records), both parents\' ID, and possibly a statutory declaration. Late registrations beyond a year can involve extra verification — start as soon as you notice.' },
        ],
    },
    {
        slug: 'how-to-apply-for-canada-child-benefit',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for the Canada Child Benefit (CCB)',
        metaTitle: 'How to Apply for the Canada Child Benefit: Step-by-Step (2025)',
        description: 'Apply for the Canada Child Benefit: current maximum payments, eligibility for newcomers, applying through CRA My Account or Form RC66, and the income-based calculation.',
        category: 'benefits',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Medium',
        totalTime: '20 min application; payments start in 8–11 weeks',
        totalCost: 'Free',
        summary: 'The CCB is a tax-free monthly payment to families with children under 18 — up to about $648 per child per year for the 2025 base period (indexed yearly), reduced as family income rises. Newcomers apply with Form RC66 plus the RC66SCH supplement after 18 months of residency; everyone else applies through CRA My Account.',
        documents: [
            'SIN for yourself and your children',
            'CRA My Account access (or Form RC66)',
            'Proof of immigration status (newcomers: PR card, COPR, or study/work permit)',
            'Children\'s birth certificates',
        ],
        steps: [
            {
                phase: 'before', title: 'Check eligibility', detail: 'You must live with the child, be a Canadian citizen, PR, protected person, or a temporary resident who has lived in Canada for 18+ months with a valid permit in the 19th month. The benefit is income-tested — your family net income from the previous tax year sets the payment amount.', duration: '10 min',
                links: [
                    { label: 'CCB overview (canada.ca)', href: 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html' },
                ],
            },
            {
                phase: 'fill', title: 'Apply through CRA My Account', detail: 'Fastest route: sign in to CRA My Account and apply under "Child and family benefits". Otherwise, send Form RC66 (Canada Child Benefits Application) to the CRA tax centre serving your province. Newcomers must also complete schedule RC66SCH with immigration details.', duration: '20 min',
                links: [
                    { label: 'Apply for the CCB (canada.ca)', href: 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/apply-child-family-benefits.html' },
                ],
            },
            { phase: 'submit', title: 'File your taxes every year', detail: 'The CCB is recalculated each July from your previous year\'s tax return — both spouses must file, even with zero income, or payments stop automatically. This catches many newcomers by surprise: no return, no benefit.' },
            { phase: 'wait', title: 'Wait for the first payment', detail: 'First payments usually arrive 8–11 weeks after a complete application. Payments are monthly (around the 20th), tax-free, and include provincial child benefits (e.g. Ontario child benefit, Alberta family and employment tax credit) automatically once you are in the system.', duration: '8–11 weeks' },
            { phase: 'followup', title: 'Keep the CRA updated', detail: 'Report changes promptly: address moves (payments follow you), marital status changes (affects the calculation significantly), and a child leaving your care. Overpayments are clawed back from future payments.' },
            { phase: 'receive', title: 'Check related benefits', detail: 'Approval for the CCB also opens the door to the GST/HST credit for your children, child disability benefit (if eligible), and provincial benefits. Use the CRA\'s Child and Family Benefits Calculator to estimate your exact payment.' },
        ],
        faqs: [
            { q: 'I arrived in Canada 6 months ago on a work permit. Can I get the CCB?', a: 'Not yet — temporary residents qualify after 18 months of residency with a valid permit in month 19. Permanent residents and protected persons qualify from the month they arrive, but must file an income tax return for the base year even with no Canadian income.' },
            { q: 'How much will I actually get?', a: 'It depends on family net income and the number/ages of children. Maximum for a child under 6 is about $6,997/year and 6–17 about $5,903/year (2025 amounts, indexed), reduced by a percentage once income exceeds about $36,500. The CRA calculator gives exact figures.' },
            { q: 'My application was denied because of a missing tax return. What now?', a: 'File the outstanding return, wait for the Notice of Assessment, then call the CRA benefits line (1-800-387-1193) and ask them to reassess the CCB application. This is the single most common reason newcomer applications stall.' },
        ],
    },
    {
        slug: 'how-to-open-a-canadian-bank-account-newcomer',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Open a Canadian Bank Account as a Newcomer',
        metaTitle: 'How to Open a Canadian Bank Account as a Newcomer (2025)',
        description: 'Open a Canadian bank account as an immigrant or student: newcomer packages, documents to bring, SIN requirements, and how to avoid monthly fees.',
        category: 'ids',
        audience: ['Immigrant'],
        difficulty: 'Easy',
        totalTime: '1–2 hours (same-day account)',
        totalCost: 'Free (newcomer packages waive fees for 1 year)',
        summary: 'The big five banks (RBC, TD, Scotiabank, BMO, CIBC) all offer newcomer packages with fee waivers and even credit cards without Canadian credit history. You can open an account before you have a job or credit history — you need your passport, immigration document, and eventually your SIN for interest reporting.',
        documents: [
            'Passport',
            'PR card, COPR, study or work permit',
            'Proof of address (lease, hotel booking accepted by some banks at first)',
            'SIN if you have one (not required to open, required for interest-bearing accounts)',
        ],
        steps: [
            {
                phase: 'before', title: 'Compare newcomer packages', detail: 'All five major banks plus many credit unions run newcomer programs: typically 12 months of waived monthly fees, a free safety deposit box year, and unsecured credit cards with no Canadian credit history. Compare the credit card limits and international transfer fees — those differ most.', duration: '30 min',
                links: [
                    { label: 'Opening an account (canada.ca)', href: 'https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html' },
                ],
            },
            {
                phase: 'go', title: 'Book an appointment or walk in', detail: 'Book online for a branch appointment (many banks let newcomers book before landing). Bring your passport and immigration document. You can open the account the same day and get a debit card on the spot or within a week.', duration: '1–2 hours',
            },
            { phase: 'fill', title: 'Choose your account type', detail: 'Take the chequing account (day-to-day spending, debit, e-Transfer) as the core; add a savings account later. Ask specifically for the newcomer chequing plan — staff may not offer it unprompted. Confirm the fee waiver is applied at opening.' },
            { phase: 'submit', title: 'Add your SIN when it arrives', detail: 'You can open without a SIN, but accounts earning interest require it for tax reporting. Once your SIN arrives, update it in branch or through online banking. If you have no SIN (some temporary residents), the bank opens a non-interest account instead.' },
            { phase: 'followup', title: 'Build Canadian credit early', detail: 'Accept the newcomer credit card even if you do not need it — Canadian credit history starts the day the card reports, and you will need it for a phone plan, car loan, or mortgage. Put one small recurring charge on it and pay it in full monthly.' },
            { phase: 'receive', title: 'Set up the essentials', detail: 'Register for online banking, enable Interac e-Transfer (how Canadians pay each other), set up direct deposit with your employer, and download the bank app for depositing cheques by photo. Keep a small buffer — overdraft fees are steep.' },
        ],
        faqs: [
            { q: 'Can I open an account before I arrive in Canada?', a: 'Some banks (RBC, Scotiabank, TD) let you start a newcomer application from abroad and finish it in a branch after landing. You cannot get the debit card until you are in Canada and show your documents in person.' },
            { q: 'The bank refused to open an account. Can they do that?', a: 'Banks can refuse only for specific legal reasons (suspected fraud, refusing to provide required ID). They cannot refuse you for having no job, no credit history, or being a newcomer. If wrongly refused, complain to the bank\'s ombudsman or the Financial Consumer Agency of Canada.' },
            { q: 'Should I use a bank or a credit union?', a: 'Both are CDIC/insured deposit-takers. Credit unions often have lower fees and more flexible lending to newcomers, but the big banks have better international transfer networks and more branches — useful when your family sends money from abroad.' },
        ],
    },
    {
        slug: 'how-to-get-a-canadian-sin-for-newcomers',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Get a Canadian SIN as a Newcomer (Social Insurance Number)',
        metaTitle: 'How to Get a Canadian SIN: Newcomer Guide (2025)',
        description: 'Get your Social Insurance Number as a newcomer: Service Canada offices, documents for PRs and temporary residents, the 900-series SIN, and expiry rules.',
        category: 'ids',
        audience: ['Immigrant'],
        difficulty: 'Easy',
        totalTime: 'Same day if documents are in order',
        totalCost: 'Free',
        summary: 'Your SIN is a nine-digit number you need to work in Canada or access benefits and tax records. Apply in person at a Service Canada office with your passport and immigration document — it is free, usually issued the same day, and temporary residents get a 900-series SIN that expires with their permit.',
        documents: [
            'Passport',
            'PR card or Confirmation of Permanent Residence (PRs)',
            'Work or study permit (temporary residents)',
            'A secondary ID document if requested',
        ],
        steps: [
            {
                phase: 'before', title: 'Gather the primary document', detail: 'Your primary document proves your immigration status: PR card or COPR for permanent residents; work permit, study permit with work conditions, or visitor record for temporary residents. The document must be original — photocopies are not accepted.', duration: '10 min',
                links: [
                    { label: 'SIN documents (canada.ca)', href: 'https://www.canada.ca/en/employment-social-development/services/sin/required-documents.html' },
                ],
            },
            {
                phase: 'go', title: 'Visit a Service Canada office', detail: 'Walk in or book online. Bring your passport and primary immigration document. Staff verify the documents and issue the SIN on the spot in most cases — you leave with a printed confirmation letter containing the number; no plastic card is issued anymore.', duration: '30–60 min',
                links: [
                    { label: 'Find a Service Canada office', href: 'https://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp?lang=eng' },
                ],
            },
            { phase: 'submit', title: 'Apply by mail only if you cannot attend in person', detail: 'If no office is reachable, mail the application form with certified true copies of your documents (Service Canada returns originals by mail). Processing takes about 3 weeks — most newcomers should use the in-person route.' },
            { phase: 'followup', title: 'Understand the 900-series rules', detail: 'Temporary residents receive a SIN starting with 900 that expires on the permit\'s expiry date. It is valid only while you hold that status — renewing your permit means updating your SIN record. Employers see the expiry and must stop payroll if it lapses.' },
            { phase: 'receive', title: 'Protect the number', detail: 'Your SIN is the key to your tax and benefit records — give it only to employers, banks (for interest accounts), and CRA. Never carry the confirmation letter daily or put the number on résumés or rental applications. SIN fraud is a common newcomer scam target.' },
        ],
        faqs: [
            { q: 'Do I need a job offer to get a SIN?', a: 'No — any valid work-eligible immigration document is enough. Study permit holders whose permit allows work (the standard 20h/week condition) also qualify. Visitor-record holders without work conditions cannot get a SIN.' },
            { q: 'My permit was renewed. Do I need a new SIN?', a: 'No — the number stays the same for life, but you must update the expiry date on your SIN record with Service Canada (bring the new permit). Otherwise employers and CRA systems treat your SIN as expired and payroll/benefits break.' },
            { q: 'Someone asked me to pay for a SIN application. Is that normal?', a: 'No — the SIN is always free from Service Canada. Websites charging fees just forward the same application. Report them to Service Canada and apply directly; in-person applications are same-day anyway.' },
        ],
    },
    {
        slug: 'how-to-apply-for-canadian-passport-renewal',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Renew a Canadian Passport',
        metaTitle: 'How to Renew a Canadian Passport: Step-by-Step (2025 Fees)',
        description: 'Renew a Canadian passport: the simplified renewal process, photo rules, fees for 5- and 10-year passports, urgent processing options, and current wait times.',
        category: 'ids',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Easy',
        totalTime: '2–8 weeks (service level dependent)',
        totalCost: '$120 (5-year) / $160 (10-year) adult',
        summary: 'Renewals use a simplified application: no guarantor or citizenship documents, just your old passport, a new photo, two references, and the fee. Apply by mail or at a Service Canada passport office; standard service runs about 2–8 weeks, with urgent and express options at passport offices.',
        documents: [
            'Your current (or expired less than a year ago) adult passport',
            'Two identical passport photos taken within 12 months',
            'Two references who have known you 2+ years (not family)',
            'Payment (online or at the office)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you qualify for simplified renewal', detail: 'You can renew if your current passport was issued with a validity of 5+ years, is expired less than one year ago (or still valid), was issued at age 16+, and you are not changing your name. Otherwise you file a general application with proof of citizenship.', duration: '10 min',
                links: [
                    { label: 'Renew a passport (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/renew-adult-passport.html' },
                ],
            },
            {
                phase: 'fill', title: 'Get compliant photos and fill the form', detail: 'Photos must be taken within the last 12 months by a commercial photographer (50mm x 70mm, plain background, photographer\'s name and address on the back — one signed). The renewal form is short: personal details, two references, and your old passport number.', duration: '30 min',
                links: [
                    { label: 'Photo requirements (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/photos.html' },
                ],
            },
            {
                phase: 'submit', title: 'Submit by mail or in person', detail: 'Mail: send the form, photos, old passport, and fee receipt to the address for your region. In person: book a Service Canada passport office appointment (faster, and required for urgent service). Pay online in advance or at the office.', duration: '20 min',
                links: [
                    { label: 'Submit an application (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/submit-adult-passport.html' },
                ],
            },
            { phase: 'wait', title: 'Track processing', detail: 'Standard service: about 10 business days plus mailing time from submission at a passport office; mailed applications take longer (up to 8 weeks total in busy periods). Express (2–9 business days) and urgent (end of next business day) options exist at passport offices with proof of travel.', duration: '2–8 weeks' },
            { phase: 'receive', title: 'Sign and check the new passport', detail: 'The new passport arrives by courier; your old passport is returned separately (cancelled). Sign in ink matching your application. Choose the 10-year validity ($160) unless you expect name or citizenship changes — it is better value per year.' },
        ],
        faqs: [
            { q: 'My passport expired 2 years ago. Can I still use the renewal process?', a: 'No — simplified renewal only covers passports expired less than one year. Beyond that, you file a general adult application with proof of citizenship (birth certificate or citizenship certificate) and a guarantor.' },
            { q: 'I changed my name since my last passport.', a: 'Name changes take you out of the renewal stream: file a general application with the legal change document (marriage certificate, legal change of name certificate) and supporting ID in the new name.' },
            { q: 'I have a trip in 3 weeks. Which service should I use?', a: 'Book an in-person appointment at a passport office (not a Service Canada receiving point) and request express service (2–9 business days) with proof of travel. Urgent (next business day) is for emergencies within 48 hours of travel. Bring your itinerary.' },
        ],
    },
    {
        slug: 'how-to-file-a-canadian-tax-return-as-a-newcomer',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to File Your First Canadian Tax Return as a Newcomer',
        metaTitle: 'How to File Your First Tax Return in Canada: Newcomer Guide',
        description: 'File your first Canadian tax return: who must file, the newcomer (part-year resident) return, free filing software, GST/HST credit claims, and deadlines.',
        category: 'taxes',
        audience: ['Immigrant'],
        difficulty: 'Medium',
        totalTime: '1–2 hours with software',
        totalCost: 'Free (NETFILE software)',
        summary: 'You become a tax resident of Canada from your landing date, and you must file a return for your first (part) year even with little or no income — it unlocks the GST/HST credit, Canada Child Benefit, and creates your CRA record. Free certified software walks you through it; the deadline is April 30.',
        documents: [
            'SIN (required to file)',
            'T4 slips from Canadian employers (if you worked)',
            'Entry date and immigration documents',
            'Records of any world income before landing (for the newcomer return)',
        ],
        steps: [
            {
                phase: 'before', title: 'Know if you must file', detail: 'You file a return if you owe tax, received benefits (to keep them coming), want the GST/HST credit, or are claiming a refund of tax withheld. Newcomers with no income should still file — the GST/HST credit and CCB depend on a filed return, and it creates your CRA history.', duration: '10 min',
                links: [
                    { label: 'Newcomers to Canada (canada.ca)', href: 'https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-5-international-residency/folio-5-f1-residency-status.html' },
                ],
            },
            {
                phase: 'fill', title: 'Pick free NETFILE software', detail: 'Certified software like Wealthsimple Tax, TurboTax Free, or StudioTax files online (NETFILE) for free for most simple returns. Answer the "Did you become a resident of Canada this year?" question — this sets your part-year status and start date.', duration: '15 min',
                links: [
                    { label: 'NETFILE-certified software list', href: 'https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/netfile-overview/certified-software-netfile-program.html' },
                ],
            },
            { phase: 'fill', title: 'Report the right income', detail: 'Report Canadian-source income from your landing date, plus world income only where the form asks (it affects certain credits). Enter T4 slips exactly as printed. Foreign income before landing is generally not taxed by Canada, but must be disclosed where the software asks for it.' },
            { phase: 'submit', title: 'File before April 30', detail: 'NETFILE returns get a Notice of Assessment in about 2 weeks. Owing tax? Payment is due April 30 — file even if you cannot pay, because late-filing penalties are separate from interest. Self-employed filers have a June 15 filing deadline but still April 30 for payment.' },
            { phase: 'wait', title: 'Claim your credits and watch for payments', detail: 'Ensure the software claims the GST/HST credit (automatic once you file and indicate residency) and registers you for CCB if you have children. First GST/HST payments start the quarter after your return is assessed.' },
            { phase: 'followup', title: 'Set up CRA My Account for next year', detail: 'Register for CRA My Account after your first assessment — it enables Auto-fill My Return for future years, tracks benefit payments, and lets you correct mistakes with a T1 adjustment instead of an amended return.' },
        ],
        faqs: [
            { q: 'I landed in November and had no Canadian income. Do I still file?', a: 'Yes — file a "nil" return for the part year. It starts your CRA record, is required for the GST/HST credit, and is the basis for CCB if you have children. There is no penalty for filing with zero income, and it takes 20 minutes.' },
            { q: 'Do I report income I earned abroad before landing?', a: 'Not for Canadian tax on employment income earned before you became a tax resident — but the return asks for world income for the year to calculate certain credits correctly. Answer the newcomer questions in the software honestly; it handles the split.' },
            { q: 'What if I miss the April 30 deadline?', a: 'The penalty is 5% of the balance owing plus 1% per full month late (doubling for repeat late filers), plus interest. File as soon as you notice — the penalty clock stops when you file, even if you pay later. Zero-balance returns carry no penalty but delay your credits.' },
        ],
    },
    {
        slug: 'how-to-replace-a-lost-or-stolen-canadian-passport',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Replace a Lost or Stolen Canadian Passport',
        metaTitle: 'How to Replace a Lost or Stolen Canadian Passport (2025)',
        description: 'Replace a lost or stolen Canadian passport: reporting the loss, the replacement application, guarantor requirements, fees, and processing times.',
        category: 'ids',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Medium',
        totalTime: '2–8 weeks (urgent options available)',
        totalCost: '$120 (5-year) / $160 (10-year) replacement fee',
        summary: 'Report the loss to Passport Program authorities, then apply for a replacement with a general application (not simplified renewal) — you need proof of citizenship, a new photo, and a guarantor. Lost or stolen passports are cancelled immediately once reported and can never be reused.',
        documents: [
            'Proof of Canadian citizenship (birth certificate or citizenship certificate)',
            'One piece of valid government photo ID',
            'Two identical passport photos, one guarantor-signed',
            'A guarantor who has known you 2+ years and holds a valid Canadian passport',
        ],
        steps: [
            {
                phase: 'before', title: 'Report the loss or theft', detail: 'Inside Canada: call 1-800-567-6868 or report at a passport office. Abroad: contact the nearest Canadian embassy or consulate. Reporting cancels the passport immediately in the system, protecting you from identity misuse — do this before applying for the replacement.', duration: '15 min',
                links: [
                    { label: 'Lost or stolen passport (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/lost-stolen-damaged.html' },
                ],
            },
            {
                phase: 'fill', title: 'Complete a general adult application', detail: 'Replacements use the full PPTC 153 application (not the simplified renewal): personal history for the past 5 years, references, and the declaration about the lost passport (number, when, where, circumstances).', duration: '45 min',
                links: [
                    { label: 'Adult general application (canada.ca)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/new-adult-passport.html' },
                ],
            },
            { phase: 'fill', title: 'Arrange your guarantor', detail: 'Your guarantor must be a Canadian citizen 18+ who has known you personally for 2+ years, currently holds a valid 5- or 10-year Canadian passport, and was 16 when their passport was issued. They sign your photos and the application. No eligible guarantor? A PPTC 132 "declaration in lieu of guarantor" works but adds processing time.' },
            { phase: 'submit', title: 'Submit with citizenship proof', detail: 'Unlike renewals, replacements require your proof of citizenship (original birth certificate or citizenship certificate — it is returned). Submit at a passport office or by mail. Fees: $120 for 5-year, $160 for 10-year, same as new passports.' },
            { phase: 'wait', title: 'Wait for processing', detail: 'Standard service is about 10 business days plus mail at passport offices (longer by mail, up to 8 weeks in peak season). Express (2–9 business days) and urgent (next business day) services require an in-person appointment and proof of travel.', duration: '2–8 weeks' },
            { phase: 'receive', title: 'Record the new details', detail: 'When the new passport arrives, store the number and expiry somewhere safe (a password manager note) so you can report a future loss instantly. If your PR card or other documents were lost with the passport, replace them in parallel — they are separate processes.' },
        ],
        faqs: [
            { q: 'My passport was stolen with my PR card. What order should I replace things?', a: 'Report both losses first (passport to Passport Program, PR card through the IRCC webform). Replace the passport first — it is faster and is the travel document you need; the PR card replacement can take months, and you can travel with your COPR plus passport in the meantime.' },
            { q: 'I found my passport after reporting it lost. Can I use it again?', a: 'No — a reported passport is cancelled permanently and will be flagged at every border. Return it to a passport office or destroy it. Using a cancelled passport is an offence, even innocently.' },
            { q: 'Does a lost passport affect my replacement application?', a: 'One loss is routine. Multiple losses within a short period can trigger additional security review and longer processing. Keep a photo of your passport\'s data page in encrypted storage so reporting is quick if it happens again.' },
        ],
    },
    {
        slug: 'how-to-get-a-police-record-check-in-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Get a Police Record Check in Canada',
        metaTitle: 'How to Get a Police Record Check in Canada: Types and Steps',
        description: 'Get a Canadian police record check: criminal record checks vs vulnerable sector checks, where to apply, fees, processing times, and what employers can request.',
        category: 'civic',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Easy',
        totalTime: '1–3 weeks (same day in some detachments)',
        totalCost: '$25–$75 depending on type and police service',
        summary: 'Police record checks are run by local police services, not the RCMP directly. Most jobs need a basic criminal record check ($25–$50, often same day); working with children or vulnerable adults requires a vulnerable sector check, which includes a deeper search and takes longer.',
        documents: [
            'Two pieces of government ID (one photo)',
            'The requesting organization\'s letter or form (for vulnerable sector checks)',
            'Current address and 5-year address history',
        ],
        steps: [
            {
                phase: 'before', title: 'Know which check you need', detail: 'Three levels: (1) criminal record check — basic name-and-birthdate search, for most jobs and volunteering; (2) criminal record and judicial matters check — adds outstanding charges and warrants; (3) vulnerable sector check — for working with children, elderly, or disabled people, includes pardoned sex offence records. Ask the employer which one.', duration: '10 min',
                links: [
                    { label: 'Record checks overview (RCMP)', href: 'https://www.rcmp-grc.gc.ca/en/criminal-record-checks' },
                ],
            },
            {
                phase: 'go', title: 'Apply at your local police service', detail: 'Apply to the police service for the municipality where you live (city police or provincial police detachment). Many services now take online applications; others require in-person attendance with ID. If you live in an area without municipal police, the provincial police or RCMP detachment handles it.', duration: '30 min',
                links: [
                    { label: 'Find your police service', href: 'https://www.cpkn.ca/en/find_police_service' },
                ],
            },
            { phase: 'submit', title: 'Pay the fee and consent', detail: 'Fees: roughly $25–$50 for a basic check, $50–$75 for vulnerable sector (varies by service). You sign a consent form authorizing the search — record checks cannot be run on you without consent. Some employers reimburse the fee; keep the receipt.' },
            { phase: 'wait', title: 'Wait for results', detail: 'Basic checks: often same day to 1 week. Vulnerable sector checks: 1–3 weeks because they may require fingerprinting (if your birthdate and gender match a pardoned record) to confirm identity. Fingerprints are taken at the detachment or an accredited company.', duration: '1–3 weeks' },
            { phase: 'receive', title: 'Use and store the certificate', detail: 'The result is a certificate stating "no record found" or listing disclosed findings. It is valid for the requesting organization — most treat checks as current for 6–12 months. Store it; some volunteer roles accept a recent check for multiple organizations.' },
        ],
        faqs: [
            { q: 'I am a newcomer with no Canadian record. Do I still need a check?', a: 'For Canadian jobs, yes if the employer requests one — it will simply return "no record found." Roles may also ask for a police certificate from your home country (for IRCC or certain employers), which is a separate process through that country\'s police or embassy.' },
            { q: 'Can I request my own record check without an employer?', a: 'Yes — you can request a criminal record check on yourself at any time, useful before applying for jobs or immigration to other countries. You cannot run a vulnerable sector check on yourself without an eligible organization\'s request.' },
            { q: 'The check shows an old charge that was withdrawn. Can it be removed?', a: 'Withdrawn, dismissed, and stayed charges can appear on some checks. You can apply to have non-conviction records purged/sealed through the police service\'s destruction request process, or apply for a record suspension (pardon) through the Parole Board of Canada for convictions after the waiting period.' },
        ],
    },
    {
        slug: 'how-to-apply-for-osap-and-student-aid-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Apply for Student Financial Aid in Canada (OSAP and Provincial Aid)',
        metaTitle: 'How to Apply for Student Aid in Canada: OSAP and Provincial Loans',
        description: 'Apply for Canadian student financial aid: provincial programs like OSAP, federal and provincial loan portions, eligibility for permanent residents, and how repayment works.',
        category: 'students',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Medium',
        totalTime: '1 hour application; 4–6 weeks processing',
        totalCost: 'Free to apply',
        summary: 'Student aid is provincial: Ontario runs OSAP, other provinces run their own programs, and all combine federal loans and grants with provincial portions. Apply as soon as applications open (spring for fall study) — funding is income-tested on your (and parents\') tax returns, so file taxes first.',
        documents: [
            'SIN',
            'Your and your parents\'/partner\'s tax return information (CRA auto-fills most of it)',
            'Study program details (school, program, study period)',
            'Banking info for deposit',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm your province and eligibility', detail: 'You apply through the province where you live (not where you study). Citizens, permanent residents, and protected persons qualify; some provinces extend aid to temporary residents with protected-person-like status. Ontario residents apply through the OSAP portal.', duration: '15 min',
                links: [
                    { label: 'Student aid by province (canada.ca)', href: 'https://www.canada.ca/en/services/benefits/education/student-aid.html' },
                ],
            },
            {
                phase: 'fill', title: 'Complete the online application', detail: 'The application pulls your tax data from CRA automatically after you consent. You enter your study period, program, costs, and (for dependent students) parental information. Ontario students: create an OSAP account at ontario.ca/page/osap-ontario-student-assistance-program.', duration: '1 hour',
                links: [
                    { label: 'OSAP application (Ontario)', href: 'https://www.ontario.ca/page/osap-ontario-student-assistance-program' },
                ],
            },
            { phase: 'submit', title: 'Submit and watch for the assessment', detail: 'You get an estimate immediately and a final Notice of Assessment by mail/portal within 2–4 weeks. It lists the loan and grant split — grants (Canada Student Grant, provincial grants) are money you keep; loans accrue no interest while you study.' },
            { phase: 'wait', title: 'Confirm enrolment and funding release', detail: 'Your school confirms your enrolment electronically at the start of term, which triggers the release of funds to the school (tuition first) and the remainder to your bank account. Apply at least 6–8 weeks before classes to have money by week one.', duration: '4–6 weeks' },
            { phase: 'followup', title: 'Reapply every year and report changes', detail: 'Aid is per study year — reapply each spring. Report income changes mid-year (a summer job that pays more than estimated reduces next term\'s funding; reporting it yourself avoids overpayment clawbacks).' },
            { phase: 'receive', title: 'Know the repayment terms', detail: 'Federal and provincial loans are interest-free while you study; repayment starts 6 months after you finish school. You can opt for interest-free status while in further studies, and repayment assistance (RAF/RAF-PD) reduces payments if income is low. The NSLSC portal manages everything.' },
        ],
        faqs: [
            { q: 'I am a permanent resident. Do I qualify for OSAP?', a: 'Yes — PRs and protected persons are eligible for provincial aid and the federal loan/grant portions on the same terms as citizens. Temporary residents (study/work permit holders) are not eligible for most provincial aid and rely on private lines or home-country loans.' },
            { q: 'Do my parents\' income really matter?', a: 'For dependent students (out of high school under 4 years, or under 22 and not working full-time), parental income is a major factor. Independent students (married, 22+, or 4+ years out of high school) are assessed on their own income alone.' },
            { q: 'How much debt is typical?', a: 'Grants cover a large share for low- and middle-income students — many graduate with $15,000–$30,000 in loans for a 4-year degree. There is a lifetime cap on loan funding (about 340 weeks of study), and no interest accrues until you leave school.' },
        ],
    },
    {
        slug: 'how-to-file-t1-tax-return-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to File a T1 Tax Return in Canada (Step by Step)',
        metaTitle: 'How to File a T1 Tax Return: Canada Income Tax Guide',
        description: 'T1 income tax return guide: who must file, what slips you need (T4, T4A, T5), free filing software (NETFILE), deductions and credits, and how to track your refund.',
        category: 'taxes',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Medium',
        totalTime: '1–3 hours',
        totalCost: 'Free (NETFILE software) to $100+ (accountant)',
        summary: 'The T1 is Canada\'s personal income tax return — due April 30 each year (June 15 for self-employed, but taxes still due April 30). Free CRA-certified software files it electronically in about an hour.',
        documents: [
            'All income slips: T4 (employment), T4A (pensions/contracts), T5 (investment), T3 (trust), T2202 (tuition)',
            'RRSP and charitable donation receipts',
            'Medical and childcare expense receipts',
            'CRA My Account login (auto-fills your slips)',
            'Direct deposit bank details',
        ],
        steps: [
            { phase: 'before', title: 'Confirm you need to file', detail: 'You must file if you owe tax, have capital gains, or want to trigger benefits — the GST/HST credit, Canada Child Benefit, and GST/HST refund all require a filed return even with zero income. Newcomers file for the part-year they were resident; the CRA applies prorated benefit amounts.', duration: '15 min' },
            { phase: 'before', title: 'Gather every slip (they arrive Feb–March)', detail: 'Employers send T4s by end of February; banks and brokers send T5s and T3s by then too. Log into CRA My Account and use Auto-fill my return — it downloads every slip the CRA already has, eliminating the most common error (missed slips). Slips you get that CRA does not have (self-employment income) you enter manually.', duration: '30 min' },
            { phase: 'fill', title: 'Pick CRA-certified software', detail: 'Only certified software can NETFILE. Free options for simple returns: Wealthsimple Tax (pay-what-you-want), GenuTax, StudioTax. Paid tiers (TurboTax, H&R Block) add self-employment, rental, and investment schedules. All do the math and check for errors before filing.', duration: '15 min', links: [{ label: 'NETFILE-certified software list (CRA)', href: 'https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/netfile-overview/certified-software-netfile-program.html' }] },
            { phase: 'fill', title: 'Enter income and claim deductions', detail: 'Income: employment, self-employment (Form T2125), investment, rental, foreign income. Deductions reduce taxable income: RRSP contributions (until March 1 for the prior year), childcare, moving expenses, union dues. Credits reduce tax owing: basic personal amount (~$15,705), tuition (T2202), medical over 3% of net income, donations, Canada Workers Benefit.', duration: '1–2 hours' },
            { phase: 'fill', title: 'Newcomers: complete Form T4145 or answer residency questions', detail: 'Your software asks your date of arrival — this prorates the basic personal amount and benefits. Report foreign income from before arrival? Generally not taxable in Canada, but world income after arrival is. Claiming the GST/HST credit and CCB requires filing even with partial-year income.', duration: '20 min' },
            { phase: 'submit', title: 'NETFILE and keep the confirmation', detail: 'Submit electronically — you get an immediate confirmation number and typically a Notice of Assessment within 2 weeks. Refunds with direct deposit arrive in about 8 business days. Keep the confirmation and a PDF of the return for 6 years (CRA record-keeping rule).', duration: '15 min' },
            { phase: 'followup', title: 'Check your Notice of Assessment', detail: 'The NOA confirms your assessment and shows your RRSP contribution room for next year — the number to plan around. If the CRA adjusts anything (common with carry-forwards), the NOA explains why. Disagree? File a Notice of Objection within 90 days.', duration: '10 min' },
        ],
        faqs: [
            { q: 'What happens if I file late?', a: 'A 5% penalty on the balance owing plus 1% per full month late (max 12 months), and interest compounds daily on unpaid amounts. If you cannot pay, file anyway — the penalty for late filing is much worse than the interest on late payment, and payment plans are available.' },
            { q: 'Can I file without CRA My Account?', a: 'Yes — you can enter slips manually from paper copies. But My Account is worth setting up: Auto-fill my return, express NOA, online change requests, and benefit letters all live there, and registration takes one session with your SIN and documents.' },
            { q: 'I had no income. Do I still file a T1?', a: 'Yes, if you want benefits — the GST/HST credit and Canada Child Benefit are only paid to people who file. Students should also file to bank tuition credits for future years even with no tax owing.' },
        ],
    },
    {
        slug: 'how-to-claim-home-office-expenses-t2200',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Claim Home Office Expenses (Form T2200)',
        metaTitle: 'How to Claim Home Office Expenses: T2200 and Temporary Flat Rate',
        description: 'Home office tax deduction guide: Form T2200 requirements, the detailed vs temporary flat rate methods, what counts as a qualifying workspace, and what you can deduct.',
        category: 'taxes',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Medium',
        totalTime: '1–2 hours',
        totalCost: 'Free',
        summary: 'Employees who work from home can deduct home office expenses — but only with a signed T2200 from their employer. The detailed method claims a share of rent, utilities, and more; the temporary flat rate was $2/day (ended 2022, but the detailed method remains).',
        documents: [
            'Form T2200 (Declaration of Conditions of Employment) signed by your employer',
            'Form T777 (Statement of Employment Expenses) — filled with your return',
            'Rent receipts or mortgage interest, property tax, insurance, utility bills',
            'Home floor area measurements (workspace and total)',
            'Receipts for supplies and phone/internet costs',
        ],
        steps: [
            { phase: 'before', title: 'Check you meet the workspace rules', detail: 'The space must be either (a) your principal place of work (no other regular office), or (b) used exclusively for work on a regular, continuous basis (a dedicated room, not the kitchen table), or (c) used to meet clients regularly. Commissioned employees have extra limits (no mortgage principal, capped at income).', duration: '15 min' },
            { phase: 'before', title: 'Get Form T2200 from your employer', detail: 'The T2200 is a form YOUR EMPLOYER fills in and signs — it confirms your contract requires you to work from home and pay your own expenses. Without it, the CRA disallows the deduction. Ask HR; since 2020 most employers have a standard process. You do not submit the T2200 with your return — keep it in case the CRA asks.', duration: '20 min' },
            { phase: 'fill', title: 'Calculate your workspace share', detail: 'Measure the workspace area and divide by total home area (e.g. a 10 m² bedroom in a 100 m² apartment = 10%). Apply that percentage to eligible costs: rent (or mortgage interest + property tax for commission employees), utilities, home insurance, maintenance. Only employment-use share counts — a home used 40% for work means 10% × 40% of costs.', duration: '30 min' },
            { phase: 'fill', title: 'Complete Form T777 with your return', detail: 'The T777 totals your employment expenses and flows onto your T1 as a deduction. Your tax software has an employment expenses section that generates it. Enter the workspace details, expense categories, and employer info exactly as on the T2200 — mismatches trigger reviews.', duration: '30 min' },
            { phase: 'fill', title: 'Add supplies and phone/internet', detail: 'Office supplies (paper, ink, stationery) are 100% deductible with receipts. Phone: the employment-use portion of the monthly fee plus long-distance work calls — the CRA accepts a reasonable percentage; home internet likewise (typically 25–50% for full-time remote). Personal devices and furniture are not deductible for employees.', duration: '15 min' },
            { phase: 'submit', title: 'File and keep everything for 6 years', detail: 'File your T1 with the T777 attached (NETFILE software handles this). Keep the signed T2200, receipts, and floor calculations for 6 years — home office claims are among the most-reviewed deductions, and the CRA request letter asks for exactly these documents.', duration: '10 min' },
            { phase: 'followup', title: 'If the CRA reviews your claim', detail: 'A review letter is not an audit accusation — respond within the deadline (usually 30 days) with the T2200 copy and receipts. Responding on time usually closes it with no change. If disallowed for a missing T2200, you can ask your employer to issue one retroactively or object to the assessment.', duration: '—' },
        ],
        faqs: [
            { q: 'Can I still use the $2/day flat rate method?', a: 'No — the temporary flat rate method ($2/day, max $400) applied only to 2020, 2021, and 2022 tax years due to COVID. From 2023 onward, only the detailed method with a T2200 is available.' },
            { q: 'I work from a desk in my living room. Can I claim?', a: 'Only if the desk area is used exclusively and regularly for work — a corner of a multi-purpose room fails the "exclusive use" test unless you can show the space itself is dedicated. The principal-place-of-work test (no other office provided) is the easier route for most remote employees.' },
            { q: 'Self-employed? Do I need a T2200?', a: 'No — the T2200 is only for employees. Self-employed people claim home office expenses directly on Form T2125 (business income statement) using the same workspace-share math, with more generous rules (a reasonable share of rent, utilities, insurance, property tax, and CCA if you own).' },
        ],
    },
    {
        slug: 'how-to-report-t5-investment-income-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Report T5 Investment Income on Your Tax Return',
        metaTitle: 'How to Report a T5 Slip: Interest, Dividends & Capital Gains',
        description: 'T5 slip guide: where interest, dividends, and capital gains go on your T1, the dividend tax credit, foreign withholding tax, and what to do if a slip is missing or wrong.',
        category: 'taxes',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Easy',
        totalTime: '30–60 minutes',
        totalCost: 'Free',
        summary: 'A T5 reports investment income over $50: bank interest, dividends, and capital gains distributions. Each box maps to a specific line of your T1 — and the dividend tax credit means eligible dividends are taxed at a lower effective rate.',
        documents: [
            'All T5 slips (banks, brokerages, credit unions — issued by end of February)',
            'T3 slips if you hold mutual funds or trusts (different form, similar purpose)',
            'T5008 or brokerage summaries for capital gains',
            'CRA My Account (Auto-fill pulls all slips the CRA has)',
        ],
        steps: [
            { phase: 'before', title: 'Collect every T5 — including small ones', detail: 'Every financial institution that paid you $50+ in investment income issues a T5, and the CRA receives a copy. Missing slips generate automated letters months later. Log into each bank and brokerage and download tax slips from the documents section; CRA My Account\'s Auto-fill my return catches them all.', duration: '20 min' },
            { phase: 'before', title: 'Read the boxes correctly', detail: 'Box 10: interest from Canadian sources (fully taxable at your marginal rate). Box 11: eligible dividends (enhanced gross-up + credit). Box 12: non-eligible dividends (smaller gross-up). Box 15: foreign dividends (with foreign tax paid in box 16 — claimable as Foreign Tax Credit). Boxes 18/21: capital gains. Each maps to a specific T1 line; software does the routing.', duration: '15 min' },
            { phase: 'fill', title: 'Enter interest income (Box 10)', detail: 'Interest is taxed at your full marginal rate — no preferential treatment. It goes on line 12100 (was line 121). If you have interest under $50 without a T5, report it anyway; the obligation follows the income, not the slip.', duration: '10 min' },
            { phase: 'fill', title: 'Enter dividends and claim the tax credit', detail: 'Eligible dividends (Box 11) are grossed up 38% then offset by the federal dividend tax credit (15.0198% of the grossed-up amount) plus provincial credits — the net effect is a lower rate than salary. Your software calculates Schedule 4 and the credit automatically; just enter the box amounts exactly as printed.', duration: '15 min' },
            { phase: 'fill', title: 'Handle foreign dividends and withholding tax', detail: 'US stocks in a non-registered account lose 15% to US withholding (claim it back via the Foreign Tax Credit on line 40500). Inside a TFSA the withholding is unrecoverable; inside an RRSP it does not apply to US dividends. This is why US stocks belong in RRSPs first for many investors.', duration: '15 min' },
            { phase: 'submit', title: 'File and reconcile with your assessments', detail: 'NETFILE your return; the CRA computer-matches every T5 within weeks. If a slip is wrong, ask the issuer for an amended T5 before filing — do not adjust it yourself. Keep slips and brokerage summaries 6 years.', duration: '10 min' },
            { phase: 'followup', title: 'Plan next year: use TFSA and RRSP room', detail: 'Interest and dividends inside a TFSA are tax-free (no T5 issued); inside an RRSP they are tax-deferred. If your T5s are growing, check your TFSA and RRSP contribution room on your Notice of Assessment and shelter the highest-taxed income first (interest, then foreign dividends, then eligible dividends).', duration: '20 min' },
        ],
        faqs: [
            { q: 'I did not get a T5 but I earned bank interest. Do I report it?', a: 'Yes. Banks only issue T5s for $50+ per account, but all interest is taxable regardless. Add it up from your statements and report it on line 12100. The CRA can assess unreported income years later with penalties.' },
            { q: 'What is the difference between a T5 and a T3?', a: 'T5 covers interest and dividends paid directly to you. T3 covers income flowing through trusts and mutual funds — capital gains distributions, return of capital, foreign income. Both go on your T1; Auto-fill my return captures both.' },
            { q: 'Do I pay tax on T5 income inside my TFSA?', a: 'No — TFSA investment income is tax-free and generates no T5 to you. The exception is US withholding tax on US dividends inside a TFSA, which the US takes and Canada cannot credit back. US stocks are more tax-efficient inside an RRSP.' },
        ],
    },
    {
        slug: 'how-to-get-a-home-equity-loan-or-heloc-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Get a Home Equity Loan or HELOC in Canada',
        metaTitle: 'How to Get a Home Equity Loan or HELOC in Canada: Steps (2025)',
        description: 'Borrow against your Canadian home: how a HELOC works, the 65% HELOC cap and 80% total borrowing limit, qualifying at the stress-test rate, readvanceable mortgages, and the risks of secured debt.',
        category: 'business',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Hard',
        totalTime: '2–4 weeks from application to funds',
        totalCost: 'HELOC rates are typically prime + 0.5–2%; setup and appraisal fees apply',
        summary: 'In Canada the standard home equity product is the HELOC — a revolving line of credit secured by your home, repayable and re-drawable like a credit card. Federal rules cap the HELOC itself at 65% of your home\'s value, with total mortgage-plus-HELOC borrowing capped at 80%.',
        documents: [
            'Current mortgage statement (balance and terms)',
            'Proof of income — pay stubs, T4s, or 2–3 years of notices of assessment if self-employed',
            'Government-issued photo ID',
            'Property tax statement and home insurance details',
            'Recent appraisal evidence (your lender orders the official one)',
        ],
        steps: [
            { phase: 'before', title: 'Calculate your available equity against the caps', detail: 'Canadian rules set two limits: the HELOC alone can be no more than 65% of your home\'s appraised value, and your total mortgage + HELOC borrowing can reach at most 80% of value. A $600,000 home with a $300,000 mortgage: total borrowing caps at $480,000 (80%), so up to $180,000 of new borrowing is possible — but the HELOC portion cannot exceed $390,000 (65%), which this clears easily. Check both numbers before shopping.', duration: '20 min' },
            { phase: 'before', title: 'Choose the structure: HELOC, readvanceable, or lump sum', detail: 'A standalone HELOC is a separate line of credit. Most Canadians combine: a readvanceable mortgage pairs your regular mortgage with a HELOC limit that grows automatically as you pay the mortgage down. For one-time known costs, some lenders offer a fixed-rate home equity loan (lump sum, fixed payments) — less common in Canada than the US, but worth asking about when you want payment certainty.', duration: '30 min' },
            { phase: 'before', title: 'Check that you pass the stress test', detail: 'Since 2018, HELOCs and refinance lending are stress-tested at the greater of the contract rate + 2% or the Bank of Canada benchmark qualifying rate — the same test as a mortgage. Your credit score (typically 680+ wanted by big banks), debt-service ratios, and provable income all count. Self-employed borrowers should expect to show 2–3 years of notices of assessment and possibly stated-income options at credit unions.', duration: '20 min' },
            { phase: 'go', title: 'Compare banks and credit unions', detail: 'Big banks (RBC, TD, Scotiabank, BMO, CIBC) offer HELOCs at prime + 0.5–1%; credit unions and trust companies can be more flexible on qualifying and lend behind larger mortgages. Compare: rate margin over prime, setup and appraisal fees, whether interest-only payments are allowed during the draw period, and the minimum amount you must draw. Your existing mortgage holder is often fastest since they already hold the charge.', duration: '1–2 days' },
            { phase: 'fill', title: 'Apply, get appraised, and complete legal work', detail: 'The lender orders an appraisal and runs the full underwrite — income, credit, property title. A lawyer or notary (Quebec) registers the charge and handles discharge of any existing registrations if you are refinancing. Expect total setup costs of roughly $300–$1,500 including appraisal, title search, and legal.', duration: '2–4 weeks' },
            { phase: 'followup', title: 'Use the line with discipline', detail: 'A HELOC is secured by your home: missed payments can lead to power of sale — the Canadian foreclosure process. Interest-only minimum payments are a feature and a trap; the balance never shrinks by itself. Common smart uses: renovations that build value, consolidating high-rate debt with a written plan to retire the balance, or an emergency reserve you hope never to draw. Avoid using home equity to fund lifestyle spending.' },
        ],
        faqs: [
            { q: 'What is the difference between a HELOC and a home equity loan in Canada?', a: 'A HELOC is revolving credit — you draw and repay as needed, at a variable rate tied to prime, with the option of interest-only payments. A home equity loan (less common in Canada) is a fixed lump sum with fixed payments. Canadians often get HELOC-equivalent borrowing through a readvanceable mortgage, which raises your available credit as you pay down the principal.' },
            { q: 'How much can I borrow against my home in Canada?', a: 'The HELOC portion is capped at 65% of your home\'s appraised value, and total registered debt (mortgage + HELOC) at 80%. So a fully paid-off $500,000 home supports a $325,000 HELOC; a home with a large mortgage has less room. Your income, credit, and the stress test set the final approved amount below those ceilings.' },
            { q: 'Is HELOC interest tax-deductible in Canada?', a: 'Only if the borrowed money is used to earn investment or business income — the CRA\'s direct-use test. Money used for renovations, a car, or debt consolidation produces non-deductible interest. Some Canadians use the "Smith Maneuver" (reborrowing paid-down mortgage equity to invest) to create deductible interest; that is an advanced strategy with real risk — get professional advice before attempting it.' },
            { q: 'What happens if I cannot pay my HELOC?', a: 'The lender can call the loan and begin power of sale — a process that in Ontario and most provinces lets the lender sell the home without court involvement. Because the debt is registered against title, even unsecured-looking financial trouble can end in losing the house. If payments become difficult, contact the lender about a payment plan before missing instalments, and consider credit counselling (non-profit, e.g. Credit Counselling Society).' },
        ],
    },
    {
        slug: 'how-to-get-a-personal-loan-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Get a Personal Loan in Canada',
        metaTitle: 'How to Get a Personal Loan in Canada: Banks, Rates, Steps (2025)',
        description: 'Get a personal loan in Canada: check your credit and pre-qualify, compare banks, credit unions and online lenders, understand APR and loan insurance, and sign with a payment plan you can keep.',
        category: 'business',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Easy',
        totalTime: 'Same-day to one week from application to deposit',
        totalCost: 'Rates commonly range from ~7% to ~47% APR depending on credit',
        summary: 'A personal loan in Canada is usually unsecured with a fixed rate, fixed payment, and a term of 1–5 years (up to 7). Banks and credit unions serve strong credit; online lenders approve wider ranges at higher rates. Newcomers can qualify by building Canadian credit history first — or through newcomer banking programs that lend on foreign credit references.',
        documents: [
            'Government-issued photo ID',
            'Proof of income — pay stubs, T4, or notices of assessment if self-employed',
            'Proof of address — utility bill or lease',
            'Void cheque or pre-authorized debit form for payments',
            'Employer details',
        ],
        steps: [
            { phase: 'before', title: 'Check your credit score and history', detail: 'Free through Equifax and TransUnion (the official sources) or your bank\'s app. Big banks generally want 660+ for their best unsecured rates; 620–660 moves you toward credit unions and mid-tier online lenders; below 600 narrows to alternative lenders and secured or co-signed options. If your score is borderline, paying card balances below 30% of limits for a month or two helps before you apply.', duration: '15 min' },
            { phase: 'go', title: 'Pre-qualify with several lenders', detail: 'Many Canadian lenders and brokers (Loans Canada, LoanConnect, and several banks) offer soft-pull pre-qualification showing your rate without affecting your score. Compare banks (RBC, TD, Scotiabank, BMO, CIBC, National Bank), your local credit union, and one or two online lenders. Credit unions are frequently the most flexible for newcomers and average credit.', duration: '1 hour' },
            { phase: 'fill', title: 'Compare APR, term, and — in Quebec — the cap', detail: 'Judge offers by APR and total cost of borrowing, which lenders must disclose. Rates commonly run from around 7% for strong credit to above 40% from alternative lenders; Quebec caps most consumer loans at 35% APR, making it stricter than other provinces. Choose the shortest term whose payment fits your budget, and confirm there are no prepayment penalties so you can pay extra freely.', duration: '20 min' },
            { phase: 'fill', title: 'Decline loan insurance unless you have shopped it', detail: 'Canadian lenders commonly offer creditor life/disability insurance on personal loans — often priced into the payment at a cost well above term life insurance you could buy separately. It is optional and can be refused at signing. If you want coverage, compare a personal term policy first; it is usually much cheaper for the same protection.', duration: '10 min' },
            { phase: 'submit', title: 'Sign and receive funds', detail: 'Approval can be same-day at online lenders and within a few days at banks; funds arrive by direct deposit, often within 24–48 hours of signing. Set the payment date for the day after payday, and set up automatic payments — one missed payment hits your credit file and your renewal rates for years.', duration: '1–7 days' },
            { phase: 'followup', title: 'Watch for the fee-advance scam pattern', detail: 'The classic Canadian loan scam: an "approved" lender demands an insurance fee, deposit, or "first payment" by e-Transfer or crypto before releasing funds. Legitimate Canadian lenders never require money upfront to issue a loan. Verify any lender with your provincial consumer affairs office or the FCAC, and report fraud to the Canadian Anti-Fraud Centre.', duration: '10 min', links: [{ label: 'Canadian Anti-Fraud Centre', href: 'https://www.antifraudcentre-centreantifraude.ca' }] },
        ],
        faqs: [
            { q: 'Can newcomers to Canada get a personal loan?', a: 'Yes, though thin Canadian credit history is the hurdle. Practical routes: newcomer mortgage and banking programs at the big banks (some lend against foreign credit references and employment letters), credit unions (more manual underwriting), a secured credit card or credit-builder loan first (6–12 months of history makes a real difference), or a co-signer already established in Canada.' },
            { q: 'Secured or unsecured loan — which should I pick?', a: 'Unsecured loans need no collateral and are the standard choice; rates are higher because the lender carries all the risk. Secured loans (against a car, savings, or home equity) approve more easily and cost less, but the asset is at stake if you default. If you qualify for an unsecured loan at a workable rate, keep your assets unencumbered.' },
            { q: 'What rate should I expect?', a: 'Rough guide for 2025: excellent credit (720+) can find roughly 7–13% at banks and credit unions; good credit (660–719) around 13–20%; fair credit (600–659) 20–30%+ at online lenders; below that, alternative lenders 30–46.96% — approaching territory where a secured or co-signed route usually beats the unsecured offer.' },
            { q: 'Is a line of credit better than a personal loan?', a: 'A personal line of credit offers flexibility (draw as needed, pay interest only on what you use) at a variable rate; a personal loan is a fixed lump sum with a fixed end date. For a one-time known expense and payment discipline, the loan\'s fixed payoff date wins. For ongoing or unpredictable needs with disciplined repayment, a LOC costs less in total interest.' },
        ],
    },
    {
        slug: 'how-to-get-a-business-loan-canada',
        country: 'ca',
        updatedAt: '2025',
        title: 'How to Get a Business Loan in Canada (CSBFP, BDC, and Banks)',
        metaTitle: 'How to Get a Business Loan in Canada: CSBFP, BDC, Banks (2025)',
        description: 'Get a business loan in Canada: the government-guaranteed Canada Small Business Financing Program, BDC financing, bank term loans and credit lines, the documents lenders require, and newcomer-friendly routes.',
        category: 'business',
        audience: ['Native', 'Immigrant'],
        difficulty: 'Hard',
        totalTime: '2–6 weeks for most business loans',
        totalCost: 'CSBFP registration fee ~2% of the loan; interest at prime + 1–3%',
        summary: 'Canada\'s flagship small-business loan is the CSBFP: the federal government guarantees up to 85% of a bank-made loan (up to $500,000 for most uses; $1M for real estate), letting banks finance startups and small businesses they would otherwise decline. Established businesses add BDC and bank term financing.',
        documents: [
            'Business plan with use of funds',
            'Cash-flow projections (typically 12–24 months)',
            'Personal and business credit consent',
            'Financial statements or, for startups, personal net-worth statement',
            'Business registration or incorporation documents',
            'Personal guarantees from owners (usually required for 25%+ shareholders)',
        ],
        steps: [
            { phase: 'before', title: 'Match the lender to your stage', detail: 'Startup or under 2 years: the Canada Small Business Financing Program (CSBFP) through your bank — the government guarantee means the bank lends where it otherwise would not. Established businesses: bank term loans, operating lines of credit, and BDC (Business Development Bank of Canada, a federal Crown corporation lending on slightly more flexible terms than chartered banks). Very early or credit-damaged businesses: community futures organizations and provincial programs in rural areas.', duration: '1 hour', links: [{ label: 'CSBFP — official page', href: 'https://ised-isde.canada.ca/site/canada-small-business-financing-program' }] },
            { phase: 'before', title: 'Understand what a CSBFP loan is (and is not)', detail: 'It is a bank loan — you apply at your bank (RBC, TD, Scotiabank, BMO, CIBC all deliver it), and the bank decides. The government guarantees most of it, which is why startups with limited collateral qualify. Limits: up to $500,000 for most uses, up to $1,000,000 total with no more than $500,000 for equipment/leaseholds — real estate can use the full $1M. You pay a registration fee of about 2% of the amount financed (financeable) plus a yearly administration fee, and owners with 25%+ shares personally guarantee typically 25% of the loan.', duration: '30 min' },
            { phase: 'go', title: 'Prepare the plan, projections, and personal picture', detail: 'For CSBFP: business plan, 2-year earnings projections, personal net-worth statement, and (for purchases) quotes or the purchase agreement. Lenders decline on vague numbers, not weak businesses — a projection you can defend line by line is the strongest single document you bring. If writing a plan is the obstacle, use the free templates from your provincial small-business centre or Futurpreneur Canada.', duration: '2–5 days' },
            { phase: 'fill', title: 'Assemble the full application pack', detail: 'Incorporation or registration documents, business plan, projections, personal net-worth statement, credit consents, and (for existing businesses) 2–3 years of financial statements and tax filings, plus account statements. Have your accountant review the projections before submission — banks weight an accountant-reviewed forecast far higher than a hand-built spreadsheet.', duration: '1–2 days' },
            { phase: 'submit', title: 'Apply at your bank and manage underwriting', detail: 'Book an appointment with a small-business account manager; the CSBFP decision usually lands within 2–4 weeks, conventional term loans in a similar window. Underwriters ask follow-up questions — fast, complete answers move files. On approval, review the fee schedule, guarantee percentage (25% for major shareholders is standard), and any collateral registration before signing.', duration: '2–6 weeks' },
            { phase: 'followup', title: 'Repay cleanly and build your banking record', detail: 'A well-serviced first loan is the cheapest path to bigger credit later — banks reward history with higher limits and faster approvals. Keep business banking separate from personal, and use the relationship: small-business account managers also unlock credit lines, merchant services, and payroll products you will need as you grow. If cash-flow trouble hits, call the lender before missing a payment; BDC and banks both have hardship options negotiated far more cheaply than defaults.', duration: 'ongoing' },
        ],
        faqs: [
            { q: 'Can a startup get a CSBFP loan with no business history?', a: 'Yes — that is the program\'s core purpose. Because the government guarantees up to 85%, banks can approve startups where collateral and history are thin. What still matters: a credible plan, projections you can defend, reasonable personal credit, and your own cash in the deal — most banks still expect the owner to contribute equity (often 10–20% of project cost) and to guarantee 25% of the loan personally.' },
            { q: 'What is BDC and how is it different from a bank?', a: 'The Business Development Bank of Canada is a federal Crown corporation that lends where chartered banks hesitate: startups, knowledge-based businesses, turnaround situations, and longer-term asset financing. Rates and fees run slightly higher than banks (it prices for the extra risk), but terms are more flexible and it actively partners with your bank rather than replacing it. Entrepreneurs commonly stack: bank loan + BDC subordinated financing.' },
            { q: 'I am a newcomer to Canada. Can I get a business loan?', a: 'Yes, with preparation. CSBFP applications weigh the plan and projections, not just history — but your personal Canadian credit matters, so start building it immediately (secured card, newcomer program). Business Development Bank programs, Futurpreneur Canada (financing plus mentorship for entrepreneurs 18–39), and community futures organizations in smaller centres are all newcomer-friendly channels. Expect personal guarantees tied to your stake.' },
            { q: 'What about grants instead of loans?', a: 'Canada has real grant money but it is narrower than the hype: federal programs via ISED, regional development agencies (FedDev Ontario, WD, ACOA, CED-Q), SR&ED tax credits for R&D (cash refundable for small firms), and provincial digital-adoption and hiring subsidies. Search the official Business Benefits Finder rather than paid grant-directory sites. The realistic stack for most small businesses is a grant for eligible costs plus a CSBFP loan for the rest.' },
        ],
    },
];
