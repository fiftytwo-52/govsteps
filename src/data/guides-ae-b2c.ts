// UAE guides — batch 2 (civic life, school, insurance, leave, crime, pets).
// Verified against official UAE government sources (u.ae, DLD/RDC, DEWA,
// KHDA, MOHRE, DHA, MOJ, ADJD, DIFC Courts, MOCCAE) on 2026-10-13.
// Figures that could not be confirmed on an official page are marked
// "Varies — confirm on [portal]" and no number is stated for them.

import type { Guide } from './types';

export const guides: Guide[] = [
    {
        slug: 'how-to-file-a-tenancy-dispute-in-dubai',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to File a Tenancy Dispute in Dubai (Rental Disputes Centre)',
        metaTitle: 'File a Tenancy Dispute in Dubai: RDC Fees, Steps & Appeal (2026)',
        description: 'Rental Disputes Centre: filing a case, 3.5% fee, evidence, hearings, judgments, appeal, and execution.',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Hard',
        totalTime: 'First session at least 7 days after payment; full timeline varies',
        totalCost: 'From AED 500 (3.5% of annual rent / claim, capped)',
        summary: 'Dubai tenancy disputes go to the Rental Disputes Centre (RDC) under the Dubai Land Department. You file online, pay a fee of 3.5% of the annual rent or claimed amount (with minimums and caps), and the system auto-books your first session at least 7 days after payment. Judgments arrive by email; you can appeal within 15 days if the claim exceeds AED 100,000, and enforce via an execution file.',
        documents: [
            'Latest lease contract (Ejari)',
            'Emirates ID (individuals) or company manager\'s Emirates ID + latest trade licence (companies)',
            'Property owner\'s valid passport with residence permit + Emirates ID',
            'Valid management contract (if a manager acts for the owner)',
            'Bank letter / statement stating the claimant\'s IBAN',
            'Forensic / notary warning + proof of notification (if the request is eviction)',
            'Evidence: messages, emails, photos, receipts, cheques, bills',
        ],
        steps: [
            {
                phase: 'before', title: 'Try conciliation first', detail: 'Register a dispute case for conciliation via Notary Public offices under Dubai Courts or the RDC Conciliation Department. If conciliation is sought and a settlement is reached, half of the court fee paid for basic claims is refunded.', duration: 'Varies',
                links: [
                    { label: 'DLD frequently asked questions', href: 'https://dubailand.gov.ae/en/frequently-asked-questions' },
                ],
            },
            {
                phase: 'submit', title: 'File the case online', detail: 'Create an account on the RDC dispute-resolution system, log in, add the lease-contract information, add the parties, add the lawsuit requests, then the lawsuit documents, and save and submit the electronic list.', duration: 'Same day',
                links: [
                    { label: 'Rental Disputes Centre (RDC)', href: 'https://rdc.gov.ae/' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the filing fees', detail: 'Lease claims (eviction, renewal, rent claim, termination, return to premises): 3.5% of annual rent / lease value, minimum AED 500, maximum AED 20,000. Monetary claims: 3.5% of the claimed amount, minimum AED 500, maximum AED 15,000. Add process service AED 100, Power of Attorney registration AED 25 (if applicable), Knowledge fee AED 10, Innovation fee AED 10. Filing via a Real Estate Services Trustee Centre adds a partners\' service fee of AED 130 + VAT.', duration: 'At filing', cost: 'From AED 500',
                links: [
                    { label: 'DLD frequently asked questions', href: 'https://dubailand.gov.ae/en/frequently-asked-questions' },
                ],
            },
            {
                phase: 'wait', title: 'First session is auto-booked', detail: 'The first session is automatically booked by the system after payment — at least 7 days from the date of payment, at the earliest available session date. Attend via the session link sent by RDC (also shown in the Case Summary).', duration: 'At least 7 days after payment',
                links: [
                    { label: 'DLD frequently asked questions', href: 'https://dubailand.gov.ae/en/frequently-asked-questions' },
                ],
            },
            {
                phase: 'go', title: 'Present your evidence', detail: 'WhatsApp messages and email are admissible and relied upon in rental-dispute verdicts, provided the parties are questioned about them and acknowledge them in the case record. Bring the originals of everything you filed.', duration: 'Per hearing schedule',
                links: [
                    { label: 'DLD frequently asked questions', href: 'https://dubailand.gov.ae/en/frequently-asked-questions' },
                ],
            },
            {
                phase: 'receive', title: 'Get the judgment', detail: 'Once issued, the system automatically sends a copy to the parties via registered email; a copy is also available via the RDC website.', duration: 'After hearings conclude',
                links: [
                    { label: 'Rental Disputes Centre (RDC)', href: 'https://rdc.gov.ae/' },
                ],
            },
            {
                phase: 'followup', title: 'Appeal or enforce', detail: 'Appeal final judgments within 15 days if the claimed amount exceeds AED 100,000; eviction judgments can be challenged irrespective of contract value. The appellant must deposit 50% of the amount awarded (refundable). To enforce, open an execution file after 15 days from the day following issuance (in presentia) or 15 days from notification (in absentia). No fee for executing financial claims; AED 20 per electronic request during execution.', duration: 'Appeal within 15 days',
                links: [
                    { label: 'DLD frequently asked questions', href: 'https://dubailand.gov.ae/en/frequently-asked-questions' },
                ],
            },
        ],
        faqs: [
            { q: 'How much does it cost to file?', a: '3.5% of the annual rent (lease claims, min AED 500, max AED 20,000) or 3.5% of the claimed amount (monetary claims, min AED 500, max AED 15,000), plus AED 100 process service, AED 10 Knowledge and AED 10 Innovation fees.' },
            { q: 'Can my landlord disconnect electricity or water during a dispute?', a: 'No — per DLD, the owner is not entitled to disconnect electricity, water, or facilities from the tenant.' },
            { q: 'What if my landlord refuses to accept my rent?', a: 'Use the "Offer and Deposit" motion: deposit the rent into the RDC treasury under RDC procedures. The landlord is notified, and you are deemed to have paid rent from the date of the judge\'s acceptance.' },
        ],
    },
    {
        slug: 'how-to-disconnect-dewa-and-get-your-deposit-back',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Disconnect DEWA and Get Your Deposit Back (Move-Out)',
        metaTitle: 'DEWA Move-Out: Disconnect, Final Bill & Deposit Refund (2026)',
        description: 'DEWA disconnection: request, final bill within 36 hours, deposit refund via IBAN/cheque, and the Move-To transfer option.',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Final bill within 36 hours; disconnection per your move-out date',
        totalCost: 'AED 100 (small meters) / AED 300 (large meters) + AED 10 knowledge + AED 10 innovation',
        summary: 'When you leave a Dubai property, submit a DEWA Move-Out (deactivation) request via the website, Smart App, a Customer Happiness Centre, or your real-estate management company. You get a reference number, the supply is disconnected, the final bill arrives within 36 hours, and after you settle it you may request your security deposit back via IBAN transfer or cheque. Moving within Dubai? Use Move-To instead — your deposit transfers with you.',
        documents: [
            'Emirates ID',
            'Move-out date + mobile number',
            'Authorisation letter if a representative requests the final bill (residential)',
            'Signed / sealed official letter (commercial / industrial / government)',
            'IBAN for the deposit refund',
            'Ejari or title deed (for the Move-To transfer option)',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose Move-Out or Move-To', detail: 'Move-Out disconnects supply at the premises you are leaving. Move-To transfers electricity/water from one Dubai premises to another and moves your security deposit to the new premises — use it if you are moving within Dubai. Settle any outstanding dues on the existing premises before applying for Move-To.', duration: 'Self-check',
                links: [
                    { label: 'DEWA move-out / deactivation', href: 'https://www.dewa.gov.ae/en/consumer/supply-management/deactivation-of-electricity-water-move-out-demolish' },
                ],
            },
            {
                phase: 'submit', title: 'Submit the Move-Out request', detail: 'Apply via a DEWA Customer Happiness Centre, the DEWA website, the DEWA Smart App, or a real-estate management company (via the DEWA–Land Department integration). You receive a reference number to track the request.', duration: 'Minutes',
                links: [
                    { label: 'DEWA move-out / deactivation', href: 'https://www.dewa.gov.ae/en/consumer/supply-management/deactivation-of-electricity-water-move-out-demolish' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the disconnection fees', detail: 'Per DEWA\'s published service guide: AED 100 for disconnecting electricity + water (small meters) or AED 300 (large meters), plus AED 10 knowledge fee and AED 10 innovation fee. Thukher and Sanad cardholders get 50% off deactivation charges. Confirm the current charges on dewa.gov.ae before paying.', duration: 'At request', cost: 'AED 100 / 300 + AED 10 + AED 10',
                links: [
                    { label: 'DEWA move-out / deactivation', href: 'https://www.dewa.gov.ae/en/consumer/supply-management/deactivation-of-electricity-water-move-out-demolish' },
                ],
            },
            {
                phase: 'wait', title: 'Disconnection + final bill', detail: 'Supply is disconnected per your move-out date. The final bill is sent via email and SMS within 36 hours of the request (per DEWA\'s published guide).', duration: 'Final bill within 36 hours',
                links: [
                    { label: 'DEWA move-out / deactivation', href: 'https://www.dewa.gov.ae/en/consumer/supply-management/deactivation-of-electricity-water-move-out-demolish' },
                ],
            },
            {
                phase: 'submit', title: 'Settle the final bill', detail: 'Pay the final bill if an amount is due. A Final Bill Clearance is sent after settlement.', duration: 'After final bill arrives',
                links: [
                    { label: 'DEWA move-out / deactivation', href: 'https://www.dewa.gov.ae/en/consumer/supply-management/deactivation-of-electricity-water-move-out-demolish' },
                ],
            },
            {
                phase: 'receive', title: 'Request your deposit refund', detail: 'After settlement of the final bill, request a refund of your security deposit (AED 2,000 for a flat, AED 4,000 for a villa). Refunds are paid via IBAN transfer or cheque. The exact refund calculation and payout timing are not published on DEWA\'s pages — confirm them with DEWA when you apply.', duration: 'After final bill settlement',
                links: [
                    { label: 'DEWA move-out / deactivation', href: 'https://www.dewa.gov.ae/en/consumer/supply-management/deactivation-of-electricity-water-move-out-demolish' },
                ],
            },
            {
                phase: 'followup', title: 'Move-To transfer (if moving within Dubai)', detail: 'Move-To updates your data to the new premises and transfers the security deposit. Fees per DEWA\'s published guide: AED 200 connecting + disconnecting (small meters) or AED 600 (large meters), plus AED 10 registration, AED 20 knowledge, AED 20 innovation. Move-in at the new premises happens within 24 hours of the time provided, subject to the deposit payment/transfer.', duration: 'Within 24 hours of the time provided', cost: 'AED 200 / 600 + fees',
                links: [
                    { label: 'DEWA move-out / deactivation', href: 'https://www.dewa.gov.ae/en/consumer/supply-management/deactivation-of-electricity-water-move-out-demolish' },
                ],
            },
        ],
        faqs: [
            { q: 'How much is the DEWA security deposit?', a: 'AED 2,000 for a flat (residential) and AED 4,000 for a villa, per DEWA\'s published service guide. Non-residential deposits are calculated on consumption.' },
            { q: 'How fast is the deposit refund?', a: 'DEWA\'s pages do not publish a refund payout time. Request the refund after the final bill is settled and confirm the timing with DEWA.' },
            { q: 'I am moving to another flat in Dubai — do I close and reopen?', a: 'No — use DEWA Move-To. Your deposit transfers to the new premises and you avoid a fresh deposit.' },
        ],
    },
    {
        slug: 'how-to-set-up-home-internet-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Set Up Home Internet in the UAE (e& / du)',
        metaTitle: 'Home Internet in UAE: e& and du Plans, Setup & Documents (2026)',
        description: 'e& Neo and du home internet + TV: plans, documents, application, and technician installation.',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Application in minutes; technician visit on your selected date/time (e&)',
        totalCost: 'From AED 399/month (e& Neo 1 Gbps); du prices vary — confirm on du.ae',
        summary: 'Home internet in the UAE comes from two providers: e& (Etisalat) and du. e& publishes its Neo fibre plans from AED 399/month for 1 Gbps; du\'s current home-internet prices were not published on the official du pages reviewed — confirm them on du.ae. Apply via the provider\'s app, website, or store, then a technician installs the connection.',
        documents: [
            'Emirates ID',
            'Tenancy contract / Ejari (address proof — confirm the exact list at application)',
            'For du (per du\'s application form): any two of — valid ID (Emirates ID or passport + visa), current tenancy/ownership contract, payslip (signed/stamped, within last 30 days), utility bill (within last 3 months), UAE-issued valid credit card, salary certificate (min AED 2,500)',
            'Existing Etisalat customers switching to du: copy of last Etisalat bill',
        
            'Contact details (mobile number, email for appointment updates)',
            'Preferred installation date/time (confirm availability when booking)',],
        steps: [
            {
                phase: 'before', title: 'Check coverage at your address', detail: 'Confirm the provider serves your building and which speeds are available. Per du\'s application form, the broadband speed requested may not be available at the premises — the order is changed to the closest available speed/tariff.', duration: 'Self-check',
                links: [
                    { label: 'e& home internet (Neo)', href: 'https://www.eand.com/en/news/7-june-2025-eand-uae-launched-neo-home-internet-plans-with-speeds-of-1gbps.html' },
                ],
            },
            {
                phase: 'before', title: 'Compare plans', detail: 'e& Neo: 1 Gbps from AED 399/month, includes Amazon Prime + TV by e& app access; paid add-ons include Starzplay Sports, OSN TV Home, or Starzplay & OSN+. Neo Fusion: AED 799/month with full-home Wi-Fi, all major TV channels, Prime + Starzplay + Sports + CricLife + GolfLife + OSN TV Home Premium, and an Alexa-supported smart 4K set-top box. eLife Entertainment: AED 569/month (5% VAT excluded) with 150+ TV channels including STARZPLAY + OSN. du prices: confirm current plans on du.ae.', duration: 'Self-check',
                links: [
                    { label: 'e& Neo plans (press release)', href: 'https://www.eand.com/en/news/7-june-2025-eand-uae-launched-neo-home-internet-plans-with-speeds-of-1gbps.html' },
                    { label: 'du home internet', href: 'https://www.du.ae/personal' },
                ],
            },
            {
                phase: 'submit', title: 'Apply', detail: 'Apply via the provider\'s app, website, or store. e& confirms the application documents at sign-up — the official e& pages reviewed do not publish a document list, so confirm it when applying.', duration: 'Minutes',
                links: [
                    { label: 'e& Neo Fusion terms', href: 'https://www.etisalat.ae/en/c/home/plans/details/elife-neo/neo-fusion.html' },
                    { label: 'du home internet', href: 'https://www.du.ae/personal' },
                ],
            },
            {
                phase: 'fill', title: 'Provide documents', detail: 'Have your Emirates ID and tenancy contract ready. du\'s application form asks for any two of the documents listed above. Confirm the exact list with your provider at application time.', duration: 'Minutes',
                links: [
                    { label: 'du home internet', href: 'https://www.du.ae/personal' },
                ],
            },
            {
                phase: 'go', title: 'Technician visit', detail: 'e& sends a technician on your selected date/time to install and demonstrate the services. Installation / activation times are not published on the official pages reviewed — confirm your appointment window when booking.', duration: 'Per appointment',
                links: [
                    { label: 'e& Neo Fusion terms', href: 'https://www.etisalat.ae/en/c/home/plans/details/elife-neo/neo-fusion.html' },
                ],
            },
            {
                phase: 'receive', title: 'Activation', detail: 'Service activates after installation. Check the connection, TV app, and home phone (if included) before the technician leaves.', duration: 'Same visit',
                links: [
                    { label: 'e& Neo Fusion terms', href: 'https://www.etisalat.ae/en/c/home/plans/details/elife-neo/neo-fusion.html' },
                ],
            },
            {
                phase: 'followup', title: 'Know your contract terms', detail: 'Neo Fusion requires a 24-month commitment. Exit charge: the lower of one Monthly Recurring Charge or AED 1,000, plus prorated device charges (4K TV Box AED 480/720, router AED 540, home telephone AED 120). du: minimum term 24 months for bundles with a device, 3 months standalone; an early exit fee applies.', duration: 'Contract length',
                links: [
                    { label: 'e& Neo Fusion terms', href: 'https://www.etisalat.ae/en/c/home/plans/details/elife-neo/neo-fusion.html' },
                ],
            },
        ],
        faqs: [
            { q: 'Which providers offer home internet in the UAE?', a: 'Two: e& (Etisalat) and du. Both offer fibre, TV bundles, and wireless options.' },
            { q: 'What documents do I need?', a: 'Have your Emirates ID and tenancy contract ready. du\'s application form asks for any two of: ID, tenancy/ownership contract, payslip, utility bill, UAE credit card, or salary certificate. Confirm the exact list with your provider when applying.' },
            { q: 'Can I use my own router?', a: 'With e&, your own router and phone are allowed if compatible (RJ11 to ONT for the phone). Devices supplied by e& are at extra cost on Neo and included on Neo Fusion.' },
        ],
    },
    {
        slug: 'how-to-buy-property-in-dubai',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Buy Property in Dubai (DLD Transfer, Fees & Oqood)',
        metaTitle: 'Buy Property in Dubai: DLD Steps, Transfer Fees & Oqood (2026)',
        description: 'Ready-property transfer at DLD: 2% + 2% sale fee, title deed, trustee fees — plus Oqood for off-plan.',
        category: 'civic',
        audience: ['Expat', 'Investor'],
        difficulty: 'Hard',
        totalTime: '15–30 minutes at a trustee centre (ready sale); 1 business day (Oqood initial sale)',
        totalCost: 'Sale fee 2% seller + 2% purchaser + title deed AED 250 + trustee fee',
        summary: 'Foreigners may buy freehold property in Dubai\'s designated freehold areas, and title deeds are issued by the Dubai Land Department (DLD). A ready-property sale completes at a Real Estate Registration Trustee centre in about 25–30 minutes; a mortgaged sale adds bank steps; off-plan purchases are registered in the provisional register via Oqood.',
        documents: [
            'UAE ID of seller + purchaser (or valid passport for non-resident foreigners)',
            'Liability letter from the bank / developer letter for the remaining amount (mortgaged property)',
            'Three manager cheques (mortgaged sale): (1) to the bank/developer for the debt amount, (2) to the seller for the remainder if any, (3) to the Department for the 4% fees',
            'Legal Power of Attorney if a representative acts',
            'Copy of the sale and purchase contract (Oqood initial sale)',
            'Copy of valid UAE ID (Oqood); copy of valid passport for non-residents',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm freehold eligibility and ownership type', detail: 'In Dubai, foreigners (non-residents) and expatriate residents may acquire freehold ownership rights in designated freehold areas, usufruct rights, or leasehold rights for up to 99 years. There is no age limit to own property in Dubai.', duration: 'Self-check',
                links: [
                    { label: 'Expatriates buying property (u.ae)', href: 'https://U.AE/en/information-and-services/moving-to-the-uae/expatriates-buying-a-property-in-the-uae' },
                ],
            },
            {
                phase: 'before', title: 'Agree the sale', detail: 'Buyer and seller agree price and terms. The sale agreement and any deposit are a private agreement between the parties — DLD\'s published pages do not specify a standard deposit percentage, so confirm the current DLD procedure and requirements at the trustee centre before signing.', duration: 'Varies',
                links: [
                    { label: 'DLD sale services', href: 'https://dubailand.gov.ae/en/eservices/sale-procedure-heirs/' },
                ],
            },
            {
                phase: 'go', title: 'Attend a Real Estate Registration Trustee centre', detail: 'Both parties (or their representatives under POA) go to a trustee centre, submit documents, and the registrar enters and audits the transaction.', duration: '25–30 minutes (ready sale)',
                links: [
                    { label: 'DLD sale services', href: 'https://dubailand.gov.ae/en/eservices/sale-procedure-heirs/' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the transfer fees', detail: 'DLD states the sale fee as seller 2% + purchaser 2% of the sale value (4% total). Title deed issuance: AED 250. Maps: AED 100 (land plot outside Dubai Municipality jurisdiction), AED 225 (unified land plot map with Dubai Municipality), AED 250 (building/apartment map). Knowledge fee AED 10 + Innovation fee AED 10 per drawing. Trustee / service-partner fee: under AED 500,000 — AED 2,000 + VAT (AED 2,100 VAT-inclusive); AED 500,000 and above — AED 4,000 + VAT (AED 4,200 VAT-inclusive).', duration: 'At the trustee centre', cost: '4% of sale value + AED 250 + trustee fee',
                links: [
                    { label: 'DLD sale services', href: 'https://dubailand.gov.ae/en/eservices/sale-procedure-heirs/' },
                ],
            },
            {
                phase: 'receive', title: 'Transfer completes + title deed', detail: 'DLD audits the transaction and sends the registration certificate link by email. Outputs: Certificate of Title / Title deed + Map + Payment Receipts.', duration: '25–30 minutes (ready sale)',
                links: [
                    { label: 'DLD sale services', href: 'https://dubailand.gov.ae/en/eservices/sale-procedure-heirs/' },
                ],
            },
            {
                phase: 'followup', title: 'Mortgaged property: extra bank steps', detail: 'If the property is mortgaged: the bank indebtedness cheque is delivered to the seller; after the mortgage-release letter is submitted, the sale + mortgage-release (+ new mortgage if any) are completed. Extra fees: mortgage-release procedure AED 1,290; registrar to release mortgage AED 315; mortgage fee (if any) 0.25% of the mortgage value. Service time: 15–20 minutes.', duration: '15–20 minutes', cost: 'Mortgage-release AED 1,290 + registrar AED 315',
                links: [
                    { label: 'Registering the sale of a mortgaged property (DLD)', href: 'https://Dubailand.gov.ae:443/en/eservices/registering-the-sale-of-a-mortgaged-property/' },
                ],
            },
            {
                phase: 'followup', title: 'Off-plan: Oqood provisional registration', detail: 'The developer registers units sold off-plan (or land plots not fully paid) in the provisional register via the Oqood portal: log in, select provisional sale registration, select the property, fill details, attach documents, select payment, submit online. Fees: seller 2% + purchaser 2% + Knowledge AED 10 + Innovation AED 10 + developer self-registration AED 1,000. The SPA must be signed by developer + purchaser and registered within 90 days of signing. Output: Provisional registration e-certificate. Service time: 1 business day.', duration: '1 business day', cost: '4% + AED 1,020',
                links: [
                    { label: 'Request to register the initial sale (Oqood)', href: 'https://dubailand.gov.ae/en/eservices/request-to-register-the-initial-sale/' },
                ],
            },
        ],
        faqs: [
            { q: 'Can a foreigner buy property in Dubai?', a: 'Yes — foreigners and expatriate residents may acquire freehold ownership in designated freehold areas, usufruct rights, or leasehold rights for up to 99 years. Title deeds are issued by the Land Department.' },
            { q: 'Who pays the 4% sale fee?', a: 'DLD states it as a split: seller 2% + purchaser 2% of the sale value.' },
            { q: 'How is an off-plan purchase registered?', a: 'Through Oqood: the developer registers the sale in the provisional register and you receive a Provisional registration e-certificate. The SPA must be registered within 90 days of signing.' },
        ],
    },
    {
        slug: 'how-to-get-married-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Get Married in the UAE (Sharia, Civil & Abu Dhabi Civil Marriage)',
        metaTitle: 'Get Married in UAE: Sharia, Civil & Abu Dhabi Civil Marriage (2026)',
        description: 'MOJ marriage contract (AED 50), Sharia court marriage, and Abu Dhabi civil marriage (AED 300 standard / AED 2,500 express).',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: 'MOJ contract: 1 day; ADJD civil: up to 10 working days standard, 1 working day express',
        totalCost: 'MOJ: AED 50; ADJD civil: AED 300 standard / AED 2,500 express',
        summary: 'The UAE has three main marriage routes: a Sharia marriage, a marriage contract via the Ministry of Justice (eMarriage), and — for non-Muslims and non-UAE Muslim citizens — a civil marriage at the Abu Dhabi Civil Family Court. Non-Muslims can also conclude marriage formalities at their embassy/consulate or place of worship. Fees start at AED 50 (MOJ) or AED 300 (ADJD civil, standard).',
        documents: [
            'Emirates ID',
            'For Muslims (MOJ): identification of the applicant, identification of witnesses, any case-related documents',
            'For non-Muslims (MOJ): proof of the couple\'s personality, No Objection from the Embassy, medical examination certificate including genetic testing',
            'Premarital screening at federal health centres (MOJ)',
            'For ADJD civil marriage: UAE ID of each party, passport of each party',
            'Evidence of divorce where applicable; death certificate of a former spouse where applicable (ADJD)',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose your route', detail: 'Sharia marriage, MOJ marriage contract via the eMarriage service, Abu Dhabi civil marriage, or a ceremonial marriage at your embassy/consulate or place of worship (non-Muslims). Abu Dhabi civil marriage is a lawful union of a man and a woman as a civil contract under secular rules, regardless of faith or nationality — except Muslim citizens of the UAE.', duration: 'Self-check',
                links: [
                    { label: 'Ceremonial marriage of non-Muslims (u.ae)', href: 'https://U.AE/en/information-and-services/social-affairs/marriages/ceremonial-marriage-of-non-muslims' },
                    { label: 'Abu Dhabi civil marriage (ADJD)', href: 'https://www.adjd.gov.ae/EN/Pages/CivilMarriage.aspx' },
                ],
            },
            {
                phase: 'go', title: 'Premarital screening', detail: 'For the MOJ route, complete premarital screening at federal health centres, including the medical examination certificate with genetic testing for non-Muslims.', duration: 'Varies by centre',
                links: [
                    { label: 'Request for Marriage Contract (MOJ)', href: 'https://www.moj.gov.ae/en/services/services-categories/marriage-and-personal-status/request-for-marriage-contract.aspx' },
                ],
            },
            {
                phase: 'submit', title: 'Apply', detail: 'MOJ: apply under the eMarriage service. ADJD civil: submit the application + documents via the ADJD portal. ADJD conditions: consent; both parties at least 18; no 1st/2nd-degree kinship; neither party married to another person. Non-Muslim UAE nationals are exempt from the non-national restriction; Muslims who are not UAE citizens may use the civil service.', duration: 'Same day',
                links: [
                    { label: 'Abu Dhabi civil marriage (ADJD)', href: 'https://www.adjd.gov.ae/EN/Pages/CivilMarriage.aspx' },
                    { label: 'Request for Marriage Contract (MOJ)', href: 'https://www.moj.gov.ae/en/services/services-categories/marriage-and-personal-status/request-for-marriage-contract.aspx' },
                ],
            },
            {
                phase: 'wait', title: 'Review + pay', detail: 'ADJD reviews the application (approve or reject with reasons); pay the fee on approval. Standard AED 300 — up to 10 working days; urgent/express AED 2,500 — within 1 working day. MOJ marriage contract: service duration 1 day, fee AED 50. Prenuptial agreement authentication (ADJD, optional): AED 950; a court template is available.', duration: 'MOJ 1 day; ADJD up to 10 working days', cost: 'MOJ AED 50; ADJD AED 300 / 2,500',
                links: [
                    { label: 'Abu Dhabi civil marriage (ADJD)', href: 'https://www.adjd.gov.ae/EN/Pages/CivilMarriage.aspx' },
                    { label: 'Request for Marriage Contract (MOJ)', href: 'https://www.moj.gov.ae/en/services/services-categories/marriage-and-personal-status/request-for-marriage-contract.aspx' },
                ],
            },
            {
                phase: 'go', title: 'Attend the ceremony', detail: 'ADJD: after approval + payment you receive an email with the ceremony date/time. Attend in person at the Civil Family Court, ADJD main building (next to Zayed Sports City) — video-conference marriage is only available where all parties are UAE residents. The court aims to complete ceremonies within 15 minutes. No witness is required; family and friends may attend. Bring your passport (+ Emirates ID if resident).', duration: '~15 minutes',
                links: [
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                ],
            },
            {
                phase: 'receive', title: 'Get the certificate', detail: 'The marriage certificate is issued immediately after the ADJD ceremony, with digital authentication. MOJ marriage contracts are completed in 1 day.', duration: 'Same day',
                links: [
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                ],
            },
            {
                phase: 'followup', title: 'Attest + register', detail: 'ADJD recommends getting the certificate attested/notarised by the Ministry of Foreign Affairs; for home-country validity, contact your home embassy. Non-Muslim ceremonial marriages must also be registered in the embassies of both partners in the UAE. To reschedule an ADJD ceremony, notify the court at least 24 hours in advance; refunds are only available in very limited circumstances.', duration: 'Varies',
                links: [
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                    { label: 'Ceremonial marriage of non-Muslims (u.ae)', href: 'https://U.AE/en/information-and-services/social-affairs/marriages/ceremonial-marriage-of-non-muslims' },
                ],
            },
        ],
        faqs: [
            { q: 'Do I need witnesses for a civil marriage in Abu Dhabi?', a: 'No — ADJD states there is no requirement to bring a witness to a civil marriage ceremony; you may bring family and friends. For the MOJ route, witness identification is required — confirm the details with the court.' },
            { q: 'Can tourists get married in Abu Dhabi?', a: 'Yes — tourists are encouraged to apply from anywhere via the ADJD portal, but must travel to Abu Dhabi for the ceremony. Video-conference marriage is only for parties who are all UAE residents.' },
            { q: 'Can we sign a prenuptial agreement?', a: 'Yes — ADJD offers prenuptial agreement authentication for AED 950. It is not mandatory, and a court template is available.' },
        ],
    },
    {
        slug: 'how-to-register-a-will-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Register a Will in the UAE (DIFC & Abu Dhabi Civil Wills)',
        metaTitle: 'Register a Will in UAE: DIFC & ADJD Fees, Types & Steps (2026)',
        description: 'DIFC Wills Service (Full, Guardianship, Property, Business, Financial, Digital) and ADJD civil wills: fees, registration, and intestacy rules.',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Hard',
        totalTime: 'Varies — confirm on difccourts.ae / adjd.gov.ae',
        totalCost: 'DIFC Full Will from AED 10,000 (single); ADJD regular will registration AED 950',
        summary: 'Non-Muslims living or investing in the UAE can register a will with the DIFC Courts Wills Service or the Abu Dhabi Civil Wills Office — registration is what makes the will legally valid. Without a registered will, Abu Dhabi civil intestacy rules apply: the surviving spouse receives half, and the other half is shared equally between the children.',
        documents: [
            'Draft will (ADJD standardised template in English + Arabic, or drafted via a wills lawyer)',
            'Valid ID documents (confirm the current checklist on difccourts.ae / adjd.gov.ae — no full document list was published on the official pages reviewed)',
            'Details of the assets covered: properties, bank accounts, companies, digital assets',
            'Guardianship wishes for minor children (if applicable)',
        
            'Marriage certificate (for mirror wills — married couples registering together)',
            'Details of appointed guardians (for minors) and executors',],
        steps: [
            {
                phase: 'before', title: 'Choose DIFC or ADJD', detail: 'DIFC Wills Service: a joint initiative of the Government of Dubai + DIFC Courts for non-Muslims investing and living in the UAE, governed by Dubai Law No. 15 of 2017. ADJD civil wills: any non-UAE citizen, regardless of religion, may register a will with the Abu Dhabi Civil Wills Office.', duration: 'Self-check',
                links: [
                    { label: 'DIFC Courts Wills Service', href: 'https://www.difccourts.ae/difc-courts-wills/services' },
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                ],
            },
            {
                phase: 'before', title: 'Choose the will type', detail: 'DIFC forms: Full Will (Form 1, all movable + immovable assets); Guardianship Will (Form 2, minors below 18); Property Will (Form 3, shares in up to 5 UAE real-estate properties); Business Owners Will (Form 4, shares in up to 5 UAE companies); Financial Assets Will (Form 5, shares in up to 10 UAE bank accounts); Digital Assets Will (Form 6, all digital assets). ADJD lists regular and special will registration — what counts as "special" is not defined on the ADJD page, so confirm with ADJD.', duration: 'Self-check',
                links: [
                    { label: 'DIFC Courts Wills Service', href: 'https://www.difccourts.ae/difc-courts-wills/services' },
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                ],
            },
            {
                phase: 'fill', title: 'Draft the will', detail: 'ADJD provides a standardised will template in English + Arabic, or instruct a specialist wills lawyer. A civil will can bequeath funds and property located outside the country.', duration: 'Varies',
                links: [
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                ],
            },
            {
                phase: 'submit', title: 'Submit for registration', detail: 'ADJD: submit via the ADJD website, by the testator personally or by a representative under a legal Power of Attorney. A competent employee reviews the application. DIFC: register via the DIFC Courts Wills Service.', duration: 'Varies',
                links: [
                    { label: 'DIFC Courts Wills Service', href: 'https://www.difccourts.ae/difc-courts-wills/services' },
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the fees', detail: 'DIFC (VAT-exempt): Full Will — Single AED 10,000 / Mirror AED 15,000 (booking AED 1,000 / 2,000); Guardianship — Single AED 5,000 / Mirror AED 7,500 (booking AED 500 / 750); Property — Single AED 7,500 / Mirror AED 10,000 (booking AED 750 / 1,000); Business Owners, Financial Assets, Digital Assets — Single AED 5,000 / Mirror AED 7,500 (booking AED 500 / 750). Mirror = a married couple registering at the same time. Booking fees are deductible from the service fee and non-refundable if the appointment is cancelled, rescheduled more than 3 times, or rescheduled more than 90 days out. Other DIFC fees: will modification AED 550, inspection AED 375, withdrawal AED 0. ADJD: regular will registration AED 950; special will registration AED 2,500.', duration: 'At registration', cost: 'DIFC from AED 5,000; ADJD AED 950 / 2,500',
                links: [
                    { label: 'DIFC Courts fees', href: 'https://www.difccourts.ae/about/fees' },
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                ],
            },
            {
                phase: 'receive', title: 'Probate / certify the will', detail: 'ADJD: book an appointment to probate the will via video conferencing; if approved, the will is officially certified/notarised at the Judicial Department. For a civil will to be legally valid it must be registered — submitting a draft alone is not enough.', duration: 'Varies',
                links: [
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                ],
            },
            {
                phase: 'followup', title: 'Know what happens without a will', detail: 'Under Abu Dhabi civil intestacy (Law No. 14 of 2021, Art. 11(2)): the surviving spouse receives half the inheritance; the other half is distributed equally between the children, with no difference between male and female. If there are no children, the remaining inheritance is shared equally between the deceased\'s parents; if one parent is deceased, the surviving parent keeps their half share and the other half is shared equally between siblings; if both parents are deceased, it is shared equally between siblings. For Muslims, Sharia inheritance rules apply — confirm the position with a lawyer or the court.', duration: 'At death',
                links: [
                    { label: 'Abu Dhabi Civil Family Court (ADJD)', href: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx' },
                ],
            },
        ],
        faqs: [
            { q: 'Who can register a will in the UAE?', a: 'DIFC Wills Service is for non-Muslims investing and living in the UAE. ADJD civil wills are open to any non-UAE citizen, regardless of religion.' },
            { q: 'What is a mirror will?', a: 'A mirror will is where a married couple register wills at the same time. DIFC charges a combined mirror fee (e.g. Full Will mirror AED 15,000 vs single AED 10,000).' },
            { q: 'Does my will cover assets outside the UAE?', a: 'ADJD states it is possible to bequeath funds and property located outside the country. Confirm the treatment of foreign assets with your wills lawyer.' },
        ],
    },
    {
        slug: 'how-to-enrol-your-child-in-a-uae-school',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Enrol Your Child in a UAE School (KHDA Admission)',
        metaTitle: 'Enrol Your Child in a UAE School: KHDA Steps, Documents & Fees (2026)',
        description: 'KHDA registration: documents, parent-school contract, transfer certificates, age cut-offs, and application/enrolment fees.',
        category: 'students',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: 'KHDA registration: 3 days; KHDA enrolment decision within 1 working day',
        totalCost: 'Application fee AED 500; enrolment fee up to 10% of tuition',
        summary: 'To enrol a child in a Dubai private school: choose a school, pass its admission assessment, let the school register the student with KHDA, then sign the unified Parent–School Contract via the KHDA Parent Portal. KHDA registration itself is free and takes 3 days; the school charges an application fee (AED 500) and an enrolment fee of up to 10% of tuition.',
        documents: [
            'Valid original Emirates ID of the student and parents/guardians',
            'Attested school certificate / transfer letter (students joining Grade 2 or higher)',
            'If the student is not eligible for Emirates ID: valid passport copy (plus diplomat card for diplomatic missions only, or UAE Courts statement if a trial is ongoing)',
            'Birth certificate and vaccination records (commonly requested by schools — confirm with your school)',
            'Any other documents the school requests',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose a school', detail: 'Compare schools on the KHDA website, including each school\'s KHDA Fact Sheet for tuition and fees. Check the age cut-off for the year group (see FAQ) before applying.', duration: 'Self-check',
                links: [
                    { label: 'KHDA (Knowledge and Human Development Authority)', href: 'https://www.khda.gov.ae/' },
                ],
            },
            {
                phase: 'submit', title: 'Apply + admission assessment', detail: 'Approach the school of choice and complete its admission assessment, per the school\'s own policy.', duration: 'Per school policy',
                links: [
                    { label: 'KHDA (Knowledge and Human Development Authority)', href: 'https://www.khda.gov.ae/' },
                ],
            },
            {
                phase: 'submit', title: 'School registers the student with KHDA', detail: 'The school registers the student with KHDA via KHDA Smart Services. No student may be admitted without KHDA enrolment approval.', duration: 'KHDA decision within 1 working day',
                links: [
                    { label: 'KHDA Parents Services Manual (PDF)', href: 'https://www.khda.gov.ae/CMS/WebParts/TextEditor/Documents/ParentsServicesManual.pdf' },
                ],
            },
            {
                phase: 'fill', title: 'Parent Portal + Parent–School Contract', detail: 'Create a KHDA Parents Portal account, then review and sign the unified Parent–School Contract via the Parent Portal or smart-device app. This is a required step of registration.', duration: 'Same day',
                links: [
                    { label: 'KHDA Parents Services Manual (PDF)', href: 'https://www.khda.gov.ae/CMS/WebParts/TextEditor/Documents/ParentsServicesManual.pdf' },
                ],
            },
            {
                phase: 'wait', title: 'KHDA reviews and processes', detail: 'KHDA reviews and processes the registration. Registration is free of charge and the required time is 3 days. KHDA may request additional documents.', duration: '3 days', cost: 'Free (KHDA registration)',
                links: [
                    { label: 'KHDA Parents Services Manual (PDF)', href: 'https://www.khda.gov.ae/CMS/WebParts/TextEditor/Documents/ParentsServicesManual.pdf' },
                ],
            },
            {
                phase: 'submit', title: 'Pay school fees', detail: 'New students: application fee AED 500 (assessment fees included); enrolment fee up to 10% of tuition fees, non-refundable, deductible from 1st-term fees. Existing students re-enrolling: re-enrolment fee up to 5% of tuition fees or AED 500 (whichever is higher), non-refundable, deductible from 1st-term fees. Tuition itself varies by school/grade — check the individual school\'s KHDA Fact Sheet.', duration: 'At enrolment', cost: 'Application AED 500 + enrolment up to 10% of tuition',
                links: [
                    { label: 'KHDA (Knowledge and Human Development Authority)', href: 'https://www.khda.gov.ae/' },
                ],
            },
            {
                phase: 'followup', title: 'Transfer certificate (if moving schools)', detail: 'A transfer / leaving certificate is required if the student was enrolled in a private school in the UAE at any stage, and for Grade 2+ transfers from outside the UAE. Fee: AED 120, required time 1 day, available only if all fees are settled with the current school. Transfers from outside the UAE need attestation: GCC — Ministry of Education of the GCC country; rest of world — (1) MoE/similar authority in origin country, (2) MoFA/similar authority in origin country, (3) UAE embassy/consulate in origin country, (4) UAE MoFAIC. The student\'s personal info (full name, nationality, religion) must match the identity card.', duration: '1 day', cost: 'AED 120',
                links: [
                    { label: 'KHDA Parents Services Manual (PDF)', href: 'https://www.khda.gov.ae/CMS/WebParts/TextEditor/Documents/ParentsServicesManual.pdf' },
                ],
            },
        ],
        faqs: [
            { q: 'What is the age cut-off for school admission?', a: 'Per KHDA\'s ECC guide, age is measured as of 31 August with no exceptions: Pre-KG/FS 1 minimum 3, maximum 4; KG 1/FS 2 minimum 4, maximum 5; KG 2/Year 1 minimum 5, maximum 6. A move to a 31 December cut-off from 2026–27 is widely reported but was not confirmed on an official KHDA page — confirm with the school/KHDA before applying.' },
            { q: 'Do I need a transfer certificate from my child\'s old school abroad?', a: 'Yes for Grade 2+ transfers from outside the UAE — an attested school certificate / transfer letter is required, with the 4-step attestation chain (origin MoE, origin MoFA, UAE embassy/consulate in origin, UAE MoFAIC).' },
            { q: 'What is the Parent–School Contract?', a: 'The unified Parent–School Contract is the standard agreement between parents and the school, reviewed and signed by the parent via the KHDA Parent Portal / app as part of registration.' },
        ],
    },
    {
        slug: 'how-to-get-health-insurance-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Get Health Insurance in the UAE (Mandatory Cover)',
        metaTitle: 'Health Insurance in UAE: Mandatory Cover, Basic Scheme & EBP (2026)',
        description: 'Mandatory health insurance: federal Basic Scheme (AED 320/year), employer vs individual cover, Dubai EBP, and renewal.',
        category: 'insurance',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: 'Varies — confirm with employer/insurer; Basic Scheme tied to residency permit issuance/renewal',
        totalCost: 'Federal Basic Scheme: AED 320/year; other plans vary — confirm with insurer',
        summary: 'Health insurance is mandatory in the UAE. From 1 January 2025, the federal Basic Health Insurance Scheme covers private-sector employees and domestic workers in all emirates, and employers must purchase it as a prerequisite for issuing or renewing residency permits. The Basic Scheme costs AED 320/year. Dubai has its own Essential Benefits Plan (EBP) — confirm its current terms on dha.gov.ae.',
        documents: [
            'Emirates ID and employment details (confirm the exact document list with your employer/insurer — no document list was published on the official pages reviewed)',
            'Residency permit details (insurance is tied to permit issuance/renewal)',
            'Dependent details if covering family members',
        
            'Salary / employment contract details',
            'Passport copy',
            'Previous policy details (if switching or renewing)'],
        steps: [
            {
                phase: 'before', title: 'Confirm who covers you', detail: 'Under the federal Basic Scheme, employers bear the financial obligations for private-sector employees and domestic-worker employers on issuance/renewal of any residence permit from 1 January 2025. If you are self-employed, a dependent, or a visitor, arrange cover individually via an approved supplier.', duration: 'Self-check',
                links: [
                    { label: 'Basic Health Insurance Scheme (MOHRE)', href: 'https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/the-basic-health-insurance-scheme' },
                ],
            },
            {
                phase: 'before', title: 'Know the Basic Scheme terms', detail: 'Price: AED 320 per year. Policy valid 2 years; the second-year premium is refundable if the visa is cancelled. Coverage: inpatient — 20% co-payment, up to AED 500/visit and AED 1,000/year, amounts above covered 100% by the insurer; outpatient — 25% co-payment, max AED 100/visit, no co-payment if follow-up is within 7 days of the initial appointment; medications — 30% co-payment, capped at AED 1,500/year. Chronic diseases / pre-existing conditions are covered without a waiting period. Exclusions: pregnancy, childbirth, and dental care are NOT covered. Telehealth consultations carry no co-payment (except pharmacy services). Inquiries: 800382467.', duration: 'Self-check', cost: 'AED 320/year',
                links: [
                    { label: 'Basic Health Insurance Scheme (MOHRE)', href: 'https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/the-basic-health-insurance-scheme' },
                ],
            },
            {
                phase: 'before', title: 'Dubai: check the Essential Benefits Plan', detail: 'Dubai has its own Essential Benefits Plan (EBP) under DHA. No DHA page confirming current EBP terms (premium, salary threshold, annual limit, waiting periods) was retrievable — confirm the current EBP terms on dha.gov.ae before relying on them.', duration: 'Self-check',
                links: [
                    { label: 'Dubai Health Authority (DHA)', href: 'https://www.dha.gov.ae/' },
                ],
            },
            {
                phase: 'fill', title: 'Compare coverage', detail: 'Compare network, co-payments, and exclusions. The Basic Scheme network is 7 hospitals, 47 clinics/medical centres, and 44 pharmacies. Dependents can get the same benefits and prices per policy terms. If you need pregnancy, childbirth, or dental cover, the Basic Scheme excludes them — compare enhanced plans.', duration: 'Self-check',
                links: [
                    { label: 'Basic Health Insurance Scheme (MOHRE)', href: 'https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/the-basic-health-insurance-scheme' },
                ],
            },
            {
                phase: 'submit', title: 'Buy the policy', detail: 'Employers purchase the Basic Scheme policy via DubaiCare Network or other approved suppliers. Individuals buy via an approved supplier / insurer. Exception: valid work permits dated before 1 January 2025 — insurance is then required upon residency-permit renewal.', duration: 'Varies', cost: 'Basic Scheme AED 320/year',
                links: [
                    { label: 'Basic Health Insurance Scheme (MOHRE)', href: 'https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/the-basic-health-insurance-scheme' },
                ],
            },
            {
                phase: 'followup', title: 'Renew with your residency permit', detail: 'Insurance is a prerequisite for issuing or renewing residency permits, so renewal tracks your permit cycle. The Basic Scheme policy is valid 2 years; the second-year premium is refundable if the visa is cancelled.', duration: 'With residency renewal',
                links: [
                    { label: 'Basic Health Insurance Scheme (MOHRE)', href: 'https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/the-basic-health-insurance-scheme' },
                ],
            },
        ],
        faqs: [
            { q: 'Who pays for health insurance?', a: 'Under the federal Basic Scheme, employers bear the financial obligations for private-sector employees and domestic-worker employers. Confirm the position for dependents and for Dubai/Abu Dhabi-specific schemes with your employer or insurer.' },
            { q: 'Does the Basic Scheme cover pregnancy and dental?', a: 'No — pregnancy, childbirth, and dental care are NOT covered under the Basic package (MOHRE FAQ). Compare enhanced plans if you need them.' },
            { q: 'Can my dependents get the same cover?', a: 'Dependents can get the same benefits and prices per policy terms under the Basic Scheme. Confirm dependent eligibility with the supplier.' },
        ],
    },
    {
        slug: 'how-to-take-maternity-and-parental-leave-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Take Maternity and Parental Leave in the UAE (Labour Law)',
        metaTitle: 'Maternity & Parental Leave UAE: 60 Days, Pay & Rules (2026)',
        description: 'Private-sector leave: 60 days maternity (45 full + 15 half pay), 5 days parental leave, nursing breaks, and extensions.',
        category: 'benefits',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Maternity: 60 days; parental: 5 working days',
        totalCost: 'Free (paid leave entitlements)',
        summary: 'Private-sector maternity leave in the UAE is 60 days: 45 days fully paid + 15 days half-paid. You may apply up to 30 days before the expected delivery date. Extra unpaid leave applies if illness results from pregnancy or childbirth, and extra paid leave if the baby is sick or has a disability. Parental leave is 5 paid working days for both parents. These figures are for the private sector under Federal Decree-Law 33/2021 — government-sector rules differ.',
        documents: [
            'Medical certificate (for illness extensions and baby illness/disability extensions)',
            'Leave application to your employer (confirm your employer\'s notice procedure)',
            'Expected delivery date / birth certificate',
        
            'Employment contract',
            'Emirates ID',
            'Expected delivery date confirmation from your doctor'],
        steps: [
            {
                phase: 'before', title: 'Confirm your entitlement', detail: 'These rules cover private-sector employees under Federal Decree-Law 33/2021 (u.ae, Art. 30 / Art. 32). The u.ae leaves page does not state a minimum service period — confirm eligibility with your employer. Federal-government and Dubai Government maternity rules are separate regimes; do not mix them into a private-sector claim.', duration: 'Self-check',
                links: [
                    { label: 'Types of leaves — private sector (u.ae)', href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/Types-of-leaves' },
                ],
            },
            {
                phase: 'submit', title: 'Apply', detail: 'You may apply for maternity leave up to 30 days prior to the expected date of delivery. Confirm your employer\'s notice procedure (written notice, medical certificate) in your contract or HR policy — the u.ae page does not publish further notice rules.', duration: 'Up to 30 days before delivery',
                links: [
                    { label: 'Types of leaves — private sector (u.ae)', href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/Types-of-leaves' },
                ],
            },
            {
                phase: 'wait', title: 'Take maternity leave', detail: '60 days total: 45 days fully paid + 15 days half-paid.', duration: '60 days',
                links: [
                    { label: 'Types of leaves — private sector (u.ae)', href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/Types-of-leaves' },
                ],
            },
            {
                phase: 'followup', title: 'Illness extension', detail: 'Extra 45 days unpaid if illness results from pregnancy/childbirth and you cannot resume work. The illness must be proved via a medical certificate from the respective medical authority. The days can be consecutive or intermittent.', duration: 'Up to 45 extra days (unpaid)',
                links: [
                    { label: 'Types of leaves — private sector (u.ae)', href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/Types-of-leaves' },
                ],
            },
            {
                phase: 'followup', title: 'Baby illness / disability extension', detail: 'If the baby is sick or has a disability: an additional 30 days fully paid, extendable by a further 30 days unpaid. The illness/disability must be proved via a medical certificate from the respective medical authority.', duration: 'Up to 30 + 30 extra days',
                links: [
                    { label: 'Types of leaves — private sector (u.ae)', href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/Types-of-leaves' },
                ],
            },
            {
                phase: 'followup', title: 'Nursing breaks', detail: 'After resuming work, one or two additional breaks per day, totalling not more than 1 hour, for 6 months following delivery, fully paid.', duration: '6 months after delivery',
                links: [
                    { label: 'Types of leaves — private sector (u.ae)', href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/Types-of-leaves' },
                ],
            },
            {
                phase: 'receive', title: 'Parental leave', detail: '5 working days, paid, from the day of the child\'s birth to 6 months after. It can be taken by both mother and father.', duration: '5 working days',
                links: [
                    { label: 'Types of leaves — private sector (u.ae)', href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/Types-of-leaves' },
                ],
            },
        ],
        faqs: [
            { q: 'Who pays maternity and parental leave?', a: 'The u.ae leaves page does not state who funds the leave. Confirm the payroll treatment with your employer.' },
            { q: 'What about stillbirth or miscarriage?', a: 'Stillbirth / miscarriage provisions are not stated on the u.ae private-sector leaves page. Confirm the position with your employer or the official text of Federal Decree-Law 33/2021, Art. 30.' },
            { q: 'Does maternity leave apply during probation?', a: 'Probation / minimum-service eligibility is not stated on the u.ae page. Do not assume a minimum service period — confirm with your employer.' },
        ],
    },
    {
        slug: 'how-to-report-a-crime-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Report a Crime in the UAE (Police, eCrime & Tip-Offs)',
        metaTitle: 'Report a Crime in UAE: 999, eCrime, Aman & Police Steps (2026)',
        description: 'Emergency 999, cybercrime via eCrime/Aman/My Safe Society, economic crimes via ESCD, and confidential tip-offs.',
        category: 'accidents',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Emergency: immediate; other reports vary — confirm at the station',
        totalCost: 'Varies — confirm at the station (official pages do not publish a filing fee)',
        summary: 'Emergencies go to 999. Cybercrime is reported via the eCrimes platform (Ministry of Interior app), the Dubai Police eCrime website, Abu Dhabi Police\'s Aman service, or the Federal Public Prosecution\'s My Safe Society app — or at your nearest police station. Economic crimes go to Dubai\'s Economic Security Center (ESCD). Confidential tip-offs go to Al Ameen (Dubai), Aman (Abu Dhabi), or Al Najeed (Sharjah).',
        documents: [
            'Any evidence you have: screenshots, messages, receipts, photos, transaction records',
            'Your ID details (confirm the exact requirements at the station — the official pages do not publish a document list)',
            'Details of what happened: when, where, who was involved, what was lost',
        
            'Emirates ID / passport',
            'Incident location and date/time',
            'Contact details for follow-up'],
        steps: [
            {
                phase: 'before', title: 'Emergency? Call 999', detail: 'Call 999 to report crimes and emergencies anywhere in the UAE. Ambulance: 998. Fire / Civil Defence: 997. Electricity: 991. Tourist police: Abu Dhabi +97128002626 or +97125127777; Dubai +971504538107.', duration: 'Immediate',
                links: [
                    { label: 'Emergency help for tourists (u.ae)', href: 'https://u.ae/en/information-and-services/visiting-and-exploring-the-uae/Tourist-services-and-information/emergency-help-for-tourists-in-the-uae' },
                ],
            },
            {
                phase: 'submit', title: 'Choose your reporting channel', detail: 'Non-emergency reports: go to your nearest police station, or report cybercrime online via the eCrimes platform (Ministry of Interior app), the eCrime website (Dubai Police), the Aman service (Abu Dhabi Police), or the My Safe Society app (UAE Federal Public Prosecution). The official pages do not publish a step-by-step filing flow for the police app — confirm the current steps in the app or at the station.', duration: 'Varies',
                links: [
                    { label: 'Cyber safety and digital security (u.ae)', href: 'https://u.ae/en/information-and-services/justice-safety-and-the-law/Safety/cyber-safety-and-digital-security' },
                ],
            },
            {
                phase: 'fill', title: 'Describe the offence', detail: 'Give a clear account: what happened, when, who was involved, and what was lost, with your evidence attached. Cyber offences fall under Federal Decree Law No. 34 of 2021 on Combatting Rumours and Cybercrimes (in effect 2 January 2022) — listed offences include hacking, falsifying electronic documents, invading privacy, tampering with medical data / bank accounts / confidential codes, eBegging, blackmail and extortion, insulting/slandering, creating illegal content, promoting human trafficking, and transferring/possessing/using illegal funds.', duration: 'Varies',
                links: [
                    { label: 'Cyber safety and digital security (u.ae)', href: 'https://u.ae/en/information-and-services/justice-safety-and-the-law/Safety/cyber-safety-and-digital-security' },
                ],
            },
            {
                phase: 'followup', title: 'Economic crimes: report to ESCD', detail: 'For economic crimes in Dubai — money laundering, financing terrorism/illegal organisations, bribery, abuse of power, impersonation of public officers, forgery, embezzlement, abuse of public funds, misappropriation, illicit gain/profiteering from public funds, cheating Dubai government entities, counterfeiting currency, and practices harming economic security — report to the Economic Security Center of Dubai (ESCD). Reports are dealt with under strict confidentiality. For general fraud, scams, or cybercrime, contact your local police.', duration: 'Varies',
                links: [
                    { label: 'Reporting economic crimes (u.ae)', href: 'https://U.AE/en/information-and-services/business/important-digital-services/reporting-economic-crimes' },
                ],
            },
            {
                phase: 'followup', title: 'Confidential tip-offs', detail: 'Aman electronic system (Abu Dhabi): raise security concerns, help prevent planned crimes, locate criminals. Al Ameen service (Dubai Police): contact police with complete confidentiality, round the clock, about problems/concerns. Al Najeed Service (Sharjah Police): report information/tip-offs about crimes or threats to stability of society.', duration: 'Varies',
                links: [
                    { label: 'Maintaining safety and security (u.ae)', href: 'https://u.ae/en/information-and-services/justice-safety-and-the-law/Safety/maintaining-safety-and-security' },
                ],
            },
            {
                phase: 'receive', title: 'Keep your report reference', detail: 'Ask for and keep the report/reference number for follow-up. The official pages do not publish the report-number format, tracking method, or processing timelines — confirm them at the station or in the channel you used.', duration: 'At filing',
                links: [
                    { label: 'Maintaining safety and security (u.ae)', href: 'https://u.ae/en/information-and-services/justice-safety-and-the-law/Safety/maintaining-safety-and-security' },
                ],
            },
            {
                phase: 'followup', title: 'Criminal vs civil', detail: 'The official pages do not publish a criminal-vs-civil test. If the matter is a private dispute (e.g. an unpaid debt or a contract disagreement), the police may direct you to the civil courts. For wellbeing support related to online harm, the UAE Digital Wellbeing Support Line is 80091.', duration: 'Varies',
                links: [
                    { label: 'Cyber safety and digital security (u.ae)', href: 'https://u.ae/en/information-and-services/justice-safety-and-the-law/Safety/cyber-safety-and-digital-security' },
                ],
            },
        ],
        faqs: [
            { q: 'Is there a non-emergency police number?', a: 'The official pages reviewed do not publish a non-emergency number. Use your nearest police station or the app/online channels for non-emergencies, and 999 for crimes and emergencies.' },
            { q: 'I am a tourist — who do I call?', a: 'Tourist police: Abu Dhabi +97128002626 or +97125127777; Dubai +971504538107. Emergencies anywhere in the UAE: 999.' },
            { q: 'Can I report anonymously?', a: 'Whether anonymous eCrime reports are allowed is not stated on the official pages reviewed. The Al Ameen service (Dubai Police) offers complete confidentiality — confirm the options in the channel you use.' },
        ],
    },
    {
        slug: 'how-to-import-a-pet-into-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Import a Pet into the UAE (MOCCAE Import Permit)',
        metaTitle: 'Import a Pet into UAE: MOCCAE Permit, Steps & Rules (2026)',
        description: 'MOCCAE import permit: check the current checklist on moccae.gov.ae — permit, documents, travel, and arrival steps.',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: 'Varies — confirm on moccae.gov.ae',
        totalCost: 'Varies — confirm on moccae.gov.ae',
        summary: 'Pet imports into the UAE run through MOCCAE (Ministry of Climate Change and Environment) and its import-permit system. Requirements, fees, and timelines change, and secondary sources conflict on key figures — so confirm the current checklist on moccae.gov.ae before booking travel, and do not rely on fee or timeline figures from non-official sites.',
        documents: [
            'MOCCAE\'s current import-permit checklist (confirm on moccae.gov.ae)',
            'Pet identification and vaccination records (as listed on the MOCCAE checklist)',
            'Veterinary health certificate (as listed on the MOCCAE checklist)',
            'Your ID / residency details',
        
            'Import permit (once issued by MOCCAE)',
            'Airline booking details (arrange only after the permit is issued)'],
        steps: [
            {
                phase: 'before', title: 'Confirm the current requirements', detail: 'Check the MOCCAE services portal for the current pet import-permit checklist. Do not book travel first — permit conditions, document rules, and timelines change, and the MOCCAE pet-permit page could not be verified in this review.', duration: 'Before booking travel',
                links: [
                    { label: 'MOCCAE services portal', href: 'https://site.moccae.gov.ae/en/home' },
                ],
            },
            {
                phase: 'fill', title: 'Prepare documents per the MOCCAE checklist', detail: 'Prepare exactly what the current MOCCAE checklist asks for — typically identification and vaccination records plus a veterinary health certificate, but the specific microchip, vaccine, timing, and certificate rules are set by MOCCAE and were not verifiable on an official page in this review. Confirm them on moccae.gov.ae.', duration: 'Varies — confirm on moccae.gov.ae',
                links: [
                    { label: 'MOCCAE services portal', href: 'https://site.moccae.gov.ae/en/home' },
                ],
            },
            {
                phase: 'submit', title: 'Apply for the import permit', detail: 'Apply for the import permit via the MOCCAE services portal. Confirm the current fee, validity period, and processing time on the portal — secondary sources conflict on all three (e.g. fees of AED 200 vs AED 500; validity of 30 vs 90 days).', duration: 'Varies — confirm on moccae.gov.ae', cost: 'Varies — confirm on moccae.gov.ae',
                links: [
                    { label: 'MOCCAE services portal', href: 'https://site.moccae.gov.ae/en/home' },
                ],
            },
            {
                phase: 'go', title: 'Book travel only after the permit is issued', detail: 'Arrange transport once the permit is in hand. Confirm carrier and crate rules with the airline — travel-mode rules were not verifiable on an official page in this review.', duration: 'After permit issuance',
                links: [
                    { label: 'MOCCAE services portal', href: 'https://site.moccae.gov.ae/en/home' },
                ],
            },
            {
                phase: 'receive', title: 'Arrival: inspection / release', detail: 'On arrival, the pet is handled per MOCCAE\'s current inspection/release procedure. Quarantine depends on compliance with the current MOCCAE requirements — confirm the procedure on the portal before travel.', duration: 'Varies — confirm on moccae.gov.ae',
                links: [
                    { label: 'MOCCAE services portal', href: 'https://site.moccae.gov.ae/en/home' },
                ],
            },
            {
                phase: 'followup', title: 'Breed and age rules', detail: 'Breed restrictions and age limits exist in the UAE, but the lists conflict across secondary sources and were not verifiable on an official page in this review. Confirm the current banned-breed list and age limits on moccae.gov.ae before committing to travel.', duration: 'Before booking travel',
                links: [
                    { label: 'MOCCAE services portal', href: 'https://site.moccae.gov.ae/en/home' },
                ],
            },
        ],
        faqs: [
            { q: 'Do I need an import permit for my pet?', a: 'MOCCAE operates an import-permit system for pets. Confirm the current permit requirement and checklist on moccae.gov.ae before travel.' },
            { q: 'How much does the import permit cost?', a: 'Varies — confirm on moccae.gov.ae. Secondary sources conflict (AED 200 vs AED 500 per pet), so do not rely on a non-official figure.' },
            { q: 'Is there quarantine on arrival?', a: 'Quarantine depends on compliance with the current MOCCAE requirements. Confirm the arrival procedure on the MOCCAE portal before travel.' },
        ],
    },
];
