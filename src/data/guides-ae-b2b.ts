// UAE guides batch 2 — verified against official UAE government sources
// (u.ae, MOFA, RTA, Dubai Police, MOI, dubai.ae) on 2026-10-13. Fees marked
// "varies" could not be confirmed on an official fee schedule; check the
// linked official portal.

import type { Guide } from './types';

export const guides: Guide[] = [
    {
        slug: 'how-to-get-a-police-clearance-certificate-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Get a Police Clearance Certificate in the UAE (Good Conduct Certificate)',
        metaTitle: 'Police Clearance Certificate UAE: Fees, Documents & Steps (2026)',
        description: 'Good Conduct Certificate via Dubai Police or MOI: online application, fingerprints, fees, validity, and applying from outside the UAE.',
        category: 'ids',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: '5 working days (Dubai Police); within 24 hours (MOI)',
        totalCost: 'From AED 120 (citizens) / AED 220 (residents) online via Dubai Police',
        summary: 'The Police Clearance Certificate (Good Conduct Certificate) proves you have no criminal record in the UAE. It is commonly required for jobs, immigration, study abroad, and licensing. Two authorities issue it: Dubai Police (for Dubai visa holders) and the Ministry of Interior (MOI) for the other emirates. A Dubai Police certificate is valid 3 months; an MOI certificate is valid 30 days. If you will use it abroad, it also needs MOFA attestation.',
        documents: [
            'Emirates ID (valid or expired)',
            'Passport copy',
            'Recent passport-size photo',
            'Copy of previous residence visa (if applying from outside the UAE)',
            '10-print fingerprint card attested by a UAE embassy (if outside the UAE and no fingerprints on file)',
            'Purpose of the certificate (employment, immigration, study, etc.)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm which authority issues your certificate', detail: 'Dubai Police issues certificates for Dubai visa holders. The Ministry of Interior (MOI) issues certificates for Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.', duration: 'Self-check',
                links: [
                    { label: 'Police Clearance Certificate (Dubai Police)', href: 'https://www.dubaipolice.gov.ae/app/services/police-clearance-certificate' },
                ],
            },
            {
                phase: 'fill', title: 'Apply online via the Dubai Police app or website', detail: 'Log in with UAE Pass, choose your applicant category (citizen, resident, visitor, or outside the UAE), enter your Emirates ID number and email, select the purpose and the requesting entity, and choose the certificate language (Arabic or English). Confirm with the one-time password sent to the mobile linked to your Emirates ID.', duration: 'Same day',
                links: [
                    { label: 'Police Clearance Certificate (Dubai Police)', href: 'https://www.dubaipolice.gov.ae/app/services/police-clearance-certificate' },
                ],
            },
            {
                phase: 'go', title: 'Give fingerprints if required', detail: 'If you have no Emirates ID or no fingerprints on file, visit a Dubai Police service centre (Al Qusais, Ports, Al Rashidiya, or Jebel Ali) for fingerprinting. If you are outside the UAE and Dubai Police has no ten-print fingerprints for you, submit a 10-print fingerprint card taken by local police in your country and certified by the UAE embassy there.', duration: 'Same day',
                links: [
                    { label: 'Police Clearance Certificate (Dubai Police)', href: 'https://www.dubaipolice.gov.ae/app/services/police-clearance-certificate' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the fees', detail: 'Dubai Police online: citizens AED 100 + AED 20 Knowledge and Innovation fees = AED 120; residents AED 200 + AED 20 = AED 220; applicants outside the UAE AED 300 + AED 20 = AED 320. Applying in person at a service centre adds AED 100. MOI fees: AED 50 for use inside the UAE, AED 100 for use abroad, plus an AED 50 fingerprinting fee for visitors and GCC citizens. Fees are non-refundable.', duration: 'At application', cost: 'From AED 120 (Dubai Police, online)',
                links: [
                    { label: 'Police Clearance Certificate (Dubai Police)', href: 'https://www.dubaipolice.gov.ae/app/services/police-clearance-certificate' },
                ],
            },
            {
                phase: 'wait', title: 'Wait for processing', detail: 'Dubai Police lists processing at 5 working days; some applications complete sooner. MOI issues within 24 hours. Keep your reference number to track the application.', duration: 'Up to 5 working days',
                links: [
                    { label: 'Police Clearance Certificate (Dubai Police)', href: 'https://www.dubaipolice.gov.ae/app/services/police-clearance-certificate' },
                ],
            },
            {
                phase: 'receive', title: 'Receive the certificate', detail: 'The certificate arrives by email and stays in your Dubai Police account. Check the name, passport number, and purpose before submitting it anywhere.', duration: 'Immediate on issue',
                links: [
                    { label: 'Police Clearance Certificate (Dubai Police)', href: 'https://www.dubaipolice.gov.ae/app/services/police-clearance-certificate' },
                ],
            },
            {
                phase: 'followup', title: 'Attest it if you will use it abroad', detail: 'A certificate used outside the UAE needs MOFA attestation, and often the destination embassy in the UAE as well. See the document attestation guide for the full chain.', duration: 'Varies',
                links: [
                    { label: 'Attestation FAQ (MOFA)', href: 'https://www.mofa.gov.ae/en/faqs' },
                ],
            },
        ],
        faqs: [
            { q: 'How long is the certificate valid?', a: 'A Dubai Police certificate is valid 3 months from issue; an MOI certificate is valid 30 days. Apply close to the date you need to submit it.' },
            { q: 'Can I apply from outside the UAE?', a: 'Yes, if you previously lived in the UAE. Apply online and upload a photo, passport copy, and previous residence visa. If Dubai Police has no fingerprints on file for you, you need a 10-print fingerprint card certified by a UAE embassy.' },
            { q: 'Does the certificate need attestation for use abroad?', a: 'Yes — a certificate used outside the UAE needs MOFA attestation, and the destination country often requires its embassy in the UAE to attest it too.' },
        ],
    },
    {
        slug: 'how-to-attest-documents-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Attest Documents in the UAE (MOFA Attestation)',
        metaTitle: 'Document Attestation UAE: MOFA Fees, Steps & Embassy Chain (2026)',
        description: 'MOFA attestation for educational, personal, and commercial documents: online application, courier, fees per document, and the embassy step for use abroad.',
        category: 'ids',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: '2 hours (digital, eligible docs) to 3 working days (courier)',
        totalCost: 'AED 150 per personal/educational document; AED 2,000 per commercial document',
        summary: 'MOFA attestation is the UAE Ministry of Foreign Affairs confirming that a document and its seals are genuine, so authorities abroad or in the UAE can accept it. UAE-issued documents go directly to MOFA. Foreign-issued documents must first be attested in the issuing country (home-country authority + UAE embassy there), then by MOFA in the UAE. If the document is going abroad, the destination country\'s embassy in the UAE usually attests it after MOFA.',
        documents: [
            'Original document (unlaminated, bearing the issuing authority seal)',
            'Passport copy / Emirates ID',
            'Legal translation if the document is not in Arabic or English',
            'Prior attestation stamps (for foreign-issued documents)',
            'UAE Pass login for the MOFA portal',
        ],
        steps: [
            {
                phase: 'before', title: 'Identify the attestation chain for your document', detail: 'UAE-issued document: direct to MOFA. Foreign-issued document: attest in the issuing country first (relevant authority, then the UAE embassy there), then MOFA in the UAE. Document going abroad after MOFA: the destination country\'s embassy or consulate in the UAE usually attests it next.', duration: 'Self-check',
                links: [
                    { label: 'Attestation FAQ (MOFA)', href: 'https://www.mofa.gov.ae/en/faqs' },
                ],
            },
            {
                phase: 'fill', title: 'Apply on mofa.gov.ae or the MOFA app', detail: 'Log in with UAE Pass and select the Documents Attestation service. No attachments need to be uploaded — the original document is delivered to MOFA via courier.', duration: 'Same day',
                links: [
                    { label: 'Attestation FAQ (MOFA)', href: 'https://www.mofa.gov.ae/en/faqs' },
                ],
            },
            {
                phase: 'submit', title: 'Hand over the original to the courier', detail: 'Place the original document inside an envelope before handing it to the delivery company. It must bear the seal of the issuing government entity, must not be laminated, and for electronically certified documents you must attach the QR code or verification link.', duration: 'Same day',
                links: [
                    { label: 'Attestation FAQ (MOFA)', href: 'https://www.mofa.gov.ae/en/faqs' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the MOFA fee', detail: 'Per MOFA: AED 150 per personal-status document (including educational documents) and AED 2,000 per commercial document. Commercial contracts may count as multiple documents depending on content, so commercial-agreement fees can vary. Commercial invoices and certificates of origin via eDAS 2.0 cost AED 150 each.', duration: 'At application', cost: 'From AED 150 per document',
                links: [
                    { label: 'Attestation FAQ (MOFA)', href: 'https://www.mofa.gov.ae/en/faqs' },
                    { label: 'Commercial invoice attestation via eDAS 2.0 (MOFA)', href: 'https://www.mofa.gov.ae/en/services/edas-attestation-v2' },
                ],
            },
            {
                phase: 'wait', title: 'Wait for attestation', detail: 'Digital attestation for eligible UAE-issued documents (birth, death, and police clearance certificates) completes in as little as 2 hours during working hours. Courier-based attestation takes 1–3 business days. Track the request under My Tasks on mofa.gov.ae or call 800 44444.', duration: '2 hours to 3 working days',
                links: [
                    { label: 'Attestation FAQ (MOFA)', href: 'https://www.mofa.gov.ae/en/faqs' },
                ],
            },
            {
                phase: 'receive', title: 'Receive the attested document', detail: 'The original comes back by courier, or the digital attestation appears in your MOFA account. Verify the attestation reference on the MOFA verification portal before relying on the document.', duration: 'Immediate on completion',
                links: [
                    { label: 'Attestation FAQ (MOFA)', href: 'https://www.mofa.gov.ae/en/faqs' },
                ],
            },
            {
                phase: 'followup', title: 'Get destination-embassy attestation if going abroad', detail: 'Most destination countries require their own embassy or consulate in the UAE to attest the document after MOFA. Embassy fees vary by country — confirm with the embassy before you go.', duration: 'Varies',
                links: [
                    { label: 'Attestation FAQ (MOFA)', href: 'https://www.mofa.gov.ae/en/faqs' },
                ],
            },
        ],
        faqs: [
            { q: 'Can laminated documents be attested?', a: 'No — MOFA does not accept laminated documents. Get a fresh original from the issuing authority.' },
            { q: 'Does the document need to be in Arabic or English?', a: 'Yes — MOFA requires documents in Arabic or English, or a legal translation attached.' },
            { q: 'Can someone else submit my document?', a: 'The application is under your UAE Pass, but anyone can hand the envelope with the original document to the courier on your behalf.' },
        ],
    },
    {
        slug: 'how-to-renew-a-dubai-driving-licence',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Renew a Dubai Driving Licence (RTA)',
        metaTitle: 'Renew Dubai Driving Licence: Eye Test, Fees & Steps (2026)',
        description: 'RTA driving licence renewal: eye test, online application, fees, validity, late fines, and delivery of your new card.',
        category: 'ids',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Same day (digital licence); physical card 2–3 working days by delivery',
        totalCost: 'AED 320 (age 21+) or AED 120 (under 21), plus eye test AED 140–180',
        summary: 'Renew a Dubai driving licence through rta.ae, the RTA Dubai app, a self-service machine, or a Customer Happiness Centre. You need a valid Emirates ID, an eye test at an RTA-approved centre, and all outstanding traffic fines cleared. A renewed licence is valid 5 years for expatriate residents and 10 years for UAE/GCC citizens (1 year if under 21). Renew up to 6 months before expiry if you are 21 or older. Late renewal costs AED 10 per month, capped at AED 500.',
        documents: [
            'Valid Emirates ID',
            'Old driving licence',
            'Eye-test result (uploaded electronically by the optician)',
            'Passport copy (if requested)',
            'Medical test result (if the RTA requires it)',
        ],
        steps: [
            {
                phase: 'before', title: 'Check your expiry date and fines', detail: 'Check your licence expiry in the RTA Dubai app or on rta.ae. Clear all outstanding traffic fines first — the RTA blocks renewal while fines are unpaid.', duration: 'Same day',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'go', title: 'Complete the eye test', detail: 'Take the eye test at an RTA-approved optician. The result uploads electronically to the RTA — you do not carry a paper certificate. The test costs AED 140–180.', duration: 'Same day', cost: 'AED 140–180',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'submit', title: 'Apply on rta.ae or the RTA Dubai app', detail: 'Log in with UAE Pass, select the driving licence renewal service, and confirm your licence details. The eye-test result shows automatically once uploaded.', duration: 'Minutes',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the renewal fee', detail: 'Licence fee: AED 300 (age 21+) or AED 100 (under 21), plus AED 20 Knowledge and Innovation fees — AED 320 or AED 120 total. Add the late fine of AED 10 per month (capped at AED 500) if the licence is already expired.', duration: 'At application', cost: 'AED 320 (21+) / AED 120 (under 21)',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'receive', title: 'Get your digital licence immediately', detail: 'The renewed digital licence is available in the RTA Dubai app right after payment, and can be added to supported Apple or Samsung Wallet services.', duration: 'Immediate',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'receive', title: 'Get the physical card', detail: 'Print the card immediately at an RTA self-service machine, or choose delivery: standard AED 20, same-day AED 35, within two hours AED 50, international AED 50.', duration: 'Immediate (kiosk) / 2–3 working days (delivery)', cost: 'AED 20–50 delivery',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'followup', title: 'If your licence expired more than 10 years ago', detail: 'You must take an evaluation test before renewal. Extra RTA fees apply: training file AED 200, learning application AED 100, handbook AED 50, test AED 200, delay fine AED 500, plus the licence and Knowledge and Innovation fees.', duration: 'Varies', cost: 'From AED 1,370 incl. licence',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
        ],
        faqs: [
            { q: 'Can I drive while my licence is expired?', a: 'No — driving with an expired licence carries an AED 500 fine, and risks vehicle impounding and court charges if you cause an accident.' },
            { q: 'Is an eye test required every time I renew?', a: 'Yes — an RTA-approved eye test is required for renewal, and the optician uploads the result directly to the RTA system.' },
            { q: 'Can I renew while I am outside the UAE?', a: 'Renewal requires a valid Emirates ID and residency, and an eye test at an approved centre. Confirm the current rules for renewing from abroad on rta.ae before you travel.' },
        ],
    },
    {
        slug: 'how-to-get-an-international-driving-permit-in-the-uae',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Get an International Driving Permit in the UAE',
        metaTitle: 'International Driving Permit UAE: RTA Fees, Documents & Validity (2026)',
        description: 'IDP via RTA or the Automobile and Touring Club UAE: eligibility, documents, fees, 1-year validity, and the 5-minute Dubai Airport counter.',
        category: 'ids',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Same day (counter/airport) to 3 working days (online via the club)',
        totalCost: 'AED 197 via RTA; AED 170 + VAT via the Automobile and Touring Club',
        summary: 'An International Driving Permit (IDP) is a translation of your UAE driving licence that lets you drive legally in many other countries. It is valid 1 year from issue and must always be carried together with your original UAE licence. It does not allow driving inside the UAE. Only UAE citizens and residents holding a valid UAE licence can get a UAE IDP — tourists must obtain one in their home country before travelling.',
        documents: [
            'Valid UAE driving licence',
            'Emirates ID',
            'Passport copy',
            'Personal photograph (two for the club route)',
            'UAE Pass login (for online applications)',
        ],
        steps: [
            {
                phase: 'before', title: 'Confirm you are eligible', detail: 'You must be a UAE citizen or resident holding a valid UAE driving licence. Tourists, visitors, and holders of suspended or expired UAE licences are not eligible for a UAE-issued IDP.', duration: 'Self-check',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'fill', title: 'Apply via RTA', detail: 'Apply on rta.ae or the RTA Dubai app: verify your identity, submit the application, and pay. Fee: AED 177 + AED 20 Knowledge and Innovation = AED 197.', duration: 'Same day', cost: 'AED 197',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'fill', title: 'Or apply via the Automobile and Touring Club UAE', detail: 'Apply online or at a club counter. Counter applications typically complete within about half an hour; online applications take about 3 working days, with delivery up to 5 working days. Fee: AED 170 plus VAT.', duration: '30 min (counter) to 3 working days (online)', cost: 'AED 170 + VAT',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'fill', title: 'Or use the Dubai Airport counter', detail: 'The Customer Happiness Centre in Terminal 3 Arrivals at Dubai International Airport issues IDPs in about 5 minutes, 24/7, for citizens and residents holding a valid UAE licence. The fee for the airport counter has not been published — confirm at the counter.', duration: '~5 minutes', cost: 'Confirm at the counter',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'submit', title: 'Pay and receive the permit', detail: 'Through RTA you receive a digital international licence first, then collect or receive the original. Delivery costs extra: standard AED 20, same-day AED 35, within two hours AED 50, international AED 50 (GCC only). Always use the original IDP abroad, not a digital copy.', duration: 'Varies', cost: 'Delivery AED 20–50',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
            {
                phase: 'followup', title: 'Carry both licences abroad', detail: 'The IDP alone is not enough — carry your original UAE driving licence with it. Before renting, check whether your destination recognises a UAE licence, requires an IDP, or has minimum age or licence-holding rules.', duration: 'Ongoing',
                links: [
                    { label: 'Driving licence services (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=617' },
                ],
            },
        ],
        faqs: [
            { q: 'How long is the IDP valid?', a: 'One year from the date of issue. It cannot be renewed — apply for a new one after it expires.' },
            { q: 'Can I drive inside the UAE on an IDP?', a: 'No — the IDP is for driving abroad only. Inside the UAE you drive on your UAE licence.' },
            { q: 'Can a tourist get an IDP in the UAE?', a: 'No — tourists must obtain an International Driving Permit in their home country before travelling to the UAE.' },
        ],
    },
    {
        slug: 'how-to-renew-car-registration-in-dubai',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Renew Car Registration in Dubai (Vehicle Licence / Mulkiya)',
        metaTitle: 'Renew Car Registration Dubai: Fees, Test, Insurance & Steps (2026)',
        description: 'RTA vehicle licence renewal: insurance first, technical inspection if due, fines cleared, fees, and digital Mulkiya delivery.',
        category: 'ids',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Instant once insurance + inspection are in the system',
        totalCost: 'AED 370 (private light vehicle, Category A) incl. Knowledge & Innovation fees',
        summary: 'Vehicle registration (the Mulkiya) must be renewed every year and is valid for a maximum of 12 months. Renew up to 150 days before expiry; there is a 30-day grace period after expiry. New cars from authorised UAE dealers skip the technical inspection for the first 3 years. Insurance must be valid and all fines cleared before the RTA accepts payment.',
        documents: [
            'Emirates ID',
            'Vehicle registration card (Mulkiya)',
            'Valid insurance policy',
            'Technical inspection certificate (if inspection is due)',
            'Plate number / traffic file number',
        ],
        steps: [
            {
                phase: 'before', title: 'Arrange valid insurance', detail: 'The RTA checks your insurance status before accepting payment — if the policy has expired, the system blocks the renewal. Buy or renew the policy first.', duration: 'Same day',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'go', title: 'Pass the technical inspection if due', detail: 'Inspection is required for cars older than 3 years; new cars from authorised UAE dealers are exempt for the first 3 years. The inspection certificate is valid 30 days. The inspection fee varies by test type and is shown at booking on rta.ae.', duration: 'Same day', cost: 'Varies by test type',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'before', title: 'Clear outstanding fines', detail: 'Unpaid traffic fines and Salik violations block renewal. Settle them before applying.', duration: 'Same day',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'submit', title: 'Apply on rta.ae, the RTA Dubai app, or DubaiNow', detail: 'Log in with UAE Pass, select the vehicle, and the system verifies your insurance and inspection automatically — nothing to upload.', duration: 'Minutes',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the renewal fee', detail: 'Private light vehicle, Category A plate: AED 350 + AED 10 Knowledge + AED 10 Innovation = AED 370. Other plate categories cost more — confirm the current fee for your plate category on rta.ae.', duration: 'At application', cost: 'AED 370 (Category A)',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'receive', title: 'Receive your Mulkiya', detail: 'The digital registration certificate arrives by SMS and email immediately on payment and is legally valid at once. A physical card follows by courier, or print it at a self-service machine, or add it to Apple Wallet through the RTA Dubai app.', duration: 'Instant (digital)',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'followup', title: 'If the registration expired more than one year ago', detail: 'Re-registration applies: AED 400 base fee + AED 20 Knowledge and Innovation fees, plus a late fine of AED 500 per year expired. The traffic file may be blocked after 2 months of non-renewal.', duration: 'Varies', cost: 'From AED 420 + late fines',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
        ],
        faqs: [
            { q: 'Is there a grace period after expiry?', a: 'Yes — 30 days after expiry. Do not drive with an expired registration; fines apply.' },
            { q: 'How early can I renew?', a: 'Up to 150 days before the expiry date.' },
            { q: 'Does my car need an inspection every year?', a: 'No — new cars from authorised UAE dealers are exempt from inspection for the first 3 years. Older cars need a technical inspection before renewal.' },
        ],
    },
    {
        slug: 'how-to-get-a-salik-tag-and-pay-tolls',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Get a Salik Tag and Pay Tolls in Dubai',
        metaTitle: 'Salik Tag Dubai: Buy, Activate, Top Up & Toll Rates (2026)',
        description: 'Salik tag purchase and activation, topping up, variable toll rates, free hours, violations, and rental cars.',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Minutes to buy and activate',
        totalCost: 'Tag about AED 100–122.50 incl. AED 50 prepaid credit (varies by channel); tolls per crossing',
        summary: 'Salik is Dubai\'s electronic toll system: an RFID tag on your windshield, linked to a prepaid account, is charged automatically each time you pass one of Dubai\'s 10 toll gates. Tolls use variable pricing — peak AED 6, off-peak AED 4, free 1:00–6:00 AM, Sundays flat AED 4 — plus 5% VAT since 1 June 2026 (so you pay AED 6.30 / AED 4.20). Passing a gate without a registered tag, or with insufficient balance not topped up within 5 days, attracts fines.',
        documents: [
            'Vehicle registration card details',
            'Mobile number',
            'Emirates ID (for online purchase)',
            'Plate number',
            'Salik account number / PIN (for activation and top-ups)',
        ],
        steps: [
            {
                phase: 'before', title: 'Buy a Salik tag', detail: 'Buy online via the Salik website or app, or the RTA Dubai app, or in person at petrol stations (ENOC, EPPCO, Emarat, ADNOC). The tag costs about AED 100–122.50 depending on channel, including AED 50 prepaid toll credit (online orders add delivery).', duration: 'Minutes', cost: 'About AED 100–122.50 incl. AED 50 credit',
                links: [
                    { label: 'Road toll in Dubai (Salik) (dubai.ae)', href: 'https://www.dubai.ae/living/driving-transportation/road-toll-in-dubai-salik' },
                ],
            },
            {
                phase: 'submit', title: 'Activate the tag', detail: 'Tags bought online activate automatically once payment goes through. Tags bought at petrol stations need activation: do it on the Salik website or app, the RTA Dubai app, or via the Salik call centre, and set your PIN.', duration: 'Minutes',
                links: [
                    { label: 'Road toll in Dubai (Salik) (dubai.ae)', href: 'https://www.dubai.ae/living/driving-transportation/road-toll-in-dubai-salik' },
                ],
            },
            {
                phase: 'go', title: 'Stick the tag on your windshield', detail: 'Affix the tag to the front windshield following the installation instructions, so gates can read it. All vehicles, including taxis, are subject to the toll.', duration: 'Minutes',
                links: [
                    { label: 'Road toll in Dubai (Salik) (dubai.ae)', href: 'https://www.dubai.ae/living/driving-transportation/road-toll-in-dubai-salik' },
                ],
            },
            {
                phase: 'submit', title: 'Top up your account', detail: 'Top up via the Salik app or website, the RTA Dubai app, petrol stations, or the Salik call centre. Set up auto top-up in the app so the balance never runs out.', duration: 'Minutes',
                links: [
                    { label: 'Road toll in Dubai (Salik) (dubai.ae)', href: 'https://www.dubai.ae/living/driving-transportation/road-toll-in-dubai-salik' },
                ],
            },
            {
                phase: 'followup', title: 'Know the toll rates', detail: 'Monday to Saturday peak (6:00–10:00 AM and 4:00–8:00 PM): AED 6 per crossing. Off-peak: AED 4. Free every day 1:00–6:00 AM. Sundays: flat AED 4, excluding the free early-morning hours. During Ramadan, peak hours are changeable. Since 1 June 2026, 5% VAT applies on top, so you pay AED 6.30 / AED 4.20. Confirm the live schedule on the Salik app before a long drive.', duration: 'Ongoing', cost: 'AED 6.30 peak / AED 4.20 off-peak (incl. VAT)',
                links: [
                    { label: 'Road toll in Dubai (Salik) (dubai.ae)', href: 'https://www.dubai.ae/living/driving-transportation/road-toll-in-dubai-salik' },
                ],
            },
            {
                phase: 'followup', title: 'Avoid violations', detail: 'Passing through a Salik gate without a registered tag attracts a fine, and passing with insufficient balance without topping up within 5 days also attracts a fine. Confirm the current fine amounts on the Salik website or app before relying on them.', duration: 'Ongoing', cost: 'Fines vary — confirm on Salik channels',
                links: [
                    { label: 'Road toll in Dubai (Salik) (dubai.ae)', href: 'https://www.dubai.ae/living/driving-transportation/road-toll-in-dubai-salik' },
                ],
            },
            {
                phase: 'followup', title: 'Rental cars', detail: 'The rental company owns the tag. Tolls are logged to its account and charged to you, plus any admin fee stated in your contract. Deposits are often held 15–30 days after return to cover late-posting tolls and fines.', duration: 'Per rental',
                links: [
                    { label: 'Road toll in Dubai (Salik) (dubai.ae)', href: 'https://www.dubai.ae/living/driving-transportation/road-toll-in-dubai-salik' },
                ],
            },
        ],
        faqs: [
            { q: 'Do I need one tag per car?', a: 'Yes — each Salik tag and account is registered to one specific vehicle plate number. Owners of multiple vehicles keep separate accounts per vehicle.' },
            { q: 'Can I transfer my Salik balance to another car?', a: 'No — the Salik balance is not transferable between vehicles.' },
            { q: 'What about the paired gates at Al Safa and Al Mamzar?', a: 'Salik caps consecutive charges when you cross both gates of a pair in the same direction within one hour. Confirm the current paired-gate rule on Salik channels.' },
        ],
    },
    {
        slug: 'how-to-get-and-top-up-a-nol-card',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Get and Top Up a NOL Card in Dubai',
        metaTitle: 'NOL Card Dubai: Types, Prices, Top-Up & Fares (2026)',
        description: 'NOL Silver, Gold, Blue, and Red Ticket: where to buy, how to top up, fares by zone, and using Metro, tram, bus, waterbus, and parking.',
        category: 'civic',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Minutes to buy; top-up instant via app/machines',
        totalCost: 'Silver/Gold AED 25 (incl. AED 19 credit); Blue AED 70 (incl. AED 20 credit); Red Ticket AED 2',
        summary: 'The NOL card is Dubai\'s contactless smart card for public transport: Metro, tram, bus, and waterbus, plus RTA parking. Dubai is divided into 7 zones and fares depend on how many zones you cross. Silver is the standard card, Gold gives Gold Class cabin access at double fares, Blue is personalised with balance protection and concession fares, and the Red Ticket is a disposable paper ticket for occasional trips.',
        documents: [
            'Emirates ID (for a Blue/personalised card)',
            'Passport-size photo with white background (Blue/concession cards)',
            'Proof of student status (student concession)',
            'People of Determination card / Sanad card (concession, if applicable)',
            'Mobile phone with NFC (for Nol Pay app top-ups)',
        ],
        steps: [
            {
                phase: 'before', title: 'Choose your card type', detail: 'Silver: standard adult card. Gold: Gold Class cabins on Metro and tram, fares double. Blue (personalised): registered to your name, balance recovery if lost or stolen, required for concession fares. Red Ticket: disposable paper ticket for single trips.', duration: 'Self-check',
                links: [
                    { label: 'NOL fares (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/public-transport/Nol-Fares' },
                ],
            },
            {
                phase: 'submit', title: 'Buy the card', detail: 'Buy at Metro station ticket offices and vending machines, via the RTA app or website, or at retail outlets (Zoom, Carrefour, Spinneys, ENOC/EPPCO). Silver/Gold: AED 25 including AED 19 credit. Blue: AED 70 including AED 20 credit. Red Ticket: AED 2.', duration: 'Minutes', cost: 'From AED 2',
                links: [
                    { label: 'NOL fares (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/public-transport/Nol-Fares' },
                ],
            },
            {
                phase: 'submit', title: 'Top up', detail: 'Top up via the Nol Pay app (NFC, instant), the RTA website or app (maximum AED 150 per transaction; online top-ups can take 45 minutes to 4 hours to become active), ticket vending machines (instant), ticket offices, or retail outlets. Minimum balance applies at entry — keep at least AED 7.50 on Silver/Gold cards.', duration: 'Instant to 4 hours', cost: 'Top-up amount of your choice',
                links: [
                    { label: 'NOL fares (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/public-transport/Nol-Fares' },
                ],
            },
            {
                phase: 'go', title: 'Tap in and tap out', detail: 'Tap your card at entry and exit on Metro, tram, and bus. Fares by zones crossed (regular class): within 1 zone AED 3, 2 adjacent zones AED 5, more than 2 zones AED 7.50. Gold class: double (AED 6 / 10 / 15). Red Ticket: AED 4 / 6 / 8.50 regular, AED 8 / 12 / 17 Gold.', duration: 'Per trip', cost: 'From AED 3 per trip',
                links: [
                    { label: 'NOL fares (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/public-transport/Nol-Fares' },
                ],
            },
            {
                phase: 'followup', title: 'Use it beyond transport', detail: 'Pay for RTA parking with a Silver, Gold, or Blue card by tapping it at the parking meter. The card also works on the waterbus.', duration: 'Ongoing',
                links: [
                    { label: 'NOL fares (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/public-transport/Nol-Fares' },
                ],
            },
            {
                phase: 'followup', title: 'Consider a travel pass if you commute daily', detail: 'Registered Silver/Gold cardholders can buy 7, 30, 90, and 365-day passes (Silver 7-day: AED 50 / 80 / 110 for 1 / 2 / all zones; 30-day: AED 140 / 230 / 350; Gold double). Anonymous cards can only buy the 7-day pass. Students and senior Emiratis/citizens get discounted passes.', duration: 'Ongoing', cost: 'From AED 50 (7-day, 1 zone, Silver)',
                links: [
                    { label: 'NOL fares (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/public-transport/Nol-Fares' },
                ],
            },
            {
                phase: 'followup', title: 'If your card is lost', detail: 'Blue (personalised) cards: block the card and recover the balance. Anonymous Silver/Gold cards: the balance cannot be recovered — register your card to protect it.', duration: 'Same day',
                links: [
                    { label: 'NOL fares (RTA)', href: 'https://www.rta.ae/wps/portal/rta/ae/public-transport/Nol-Fares' },
                ],
            },
        ],
        faqs: [
            { q: 'What is the minimum balance to travel?', a: 'Keep at least AED 7.50 on a Silver or Gold card. Confirm the current minimum for your card type on rta.ae.' },
            { q: 'Can I transfer between Metro, tram, and bus on one fare?', a: 'Free transfers between modes apply within a single journey, subject to RTA transfer rules — confirm the current transfer rules on rta.ae.' },
            { q: 'How long does a NOL card last?', a: 'Silver, Gold, and Blue cards are valid 5 years. A Red Ticket is valid 90 days or up to 10 trips.' },
        ],
    },
    {
        slug: 'how-to-transfer-car-ownership-in-dubai',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Transfer Car Ownership in Dubai (Buying or Selling a Used Car)',
        metaTitle: 'Transfer Car Ownership Dubai: RTA Fees, Steps & Documents (2026)',
        description: 'RTA ownership transfer for used cars: sale agreement, fines clearance, inspection, insurance, plate options, and fees.',
        category: 'ids',
        audience: ['Expat'],
        difficulty: 'Medium',
        totalTime: 'Same day to a few days (plus up to 14 days to complete licensing)',
        totalCost: 'AED 420 (transfer 350 + agreement 50 + Knowledge & Innovation 20); buyer pays transfer, seller pays agreement',
        summary: 'Transfer a used car in Dubai through the Dubai Drive app with UAE Pass, or at an RTA Customer Happiness or Inspection Centre. The seller clears all fines and settles any bank loan; the buyer arranges insurance and an inspection if the car is over 3 years old. Both sides digitally sign the Sale and Purchase Agreement, then the buyer completes licensing and receives the new Mulkiya within 14 days of the transfer.',
        documents: [
            'Emirates ID of buyer and seller',
            'Vehicle registration card (Mulkiya)',
            'Buyer\'s driving licence',
            'Valid insurance policy (buyer)',
            'Technical inspection certificate (if the car is over 3 years old)',
            'Electronic mortgage release (if the car is financed)',
            'Plate number',
        ],
        steps: [
            {
                phase: 'before', title: 'Seller: clear fines and settle any loan', detail: 'Outstanding fines block the transfer. If the car is financed, the loan must be settled and the bank must send an electronic mortgage release to the RTA — banks typically take 2–5 working days. Do not hand over the car until the release is confirmed in the RTA system.', duration: '2–5 working days (mortgage release)',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'fill', title: 'Buyer: arrange insurance and inspection', detail: 'The buyer must hold a valid insurance policy. A technical inspection is required if the car is over 3 years old; the inspection fee varies by test type and is shown at booking on rta.ae.', duration: 'Same day', cost: 'Insurance varies; inspection varies',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'submit', title: 'Start the transfer in the Dubai Drive app', detail: 'The seller logs in with UAE Pass, selects Change Vehicle Ownership, and enters the buyer\'s Emirates ID number and phone number.', duration: 'Minutes',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'submit', title: 'Sign the Sale and Purchase Agreement', detail: 'The buyer receives the agreement by SMS and email and signs it digitally; the seller countersigns and chooses whether to hand over the plates with the car or retain them.', duration: 'Same day',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'submit', title: 'Pay the fees', detail: 'Light vehicle transfer: AED 350 (paid by the buyer) + Sale and Purchase Agreement AED 50 (paid by the seller) + AED 20 Knowledge and Innovation = AED 420 typical. Add AED 200 if the buyer needs a new traffic file. Transferring a plate alone, without the car, costs AED 120.', duration: 'At transfer', cost: 'AED 420 typical + extras',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'receive', title: 'Complete licensing and receive the new Mulkiya', detail: 'The buyer visits a listed service centre to finish registration and receive the new registration card. All licensing transactions must be completed within 14 days of the transfer. Until the new Mulkiya is issued, fines and Salik charges stay linked to the seller\'s traffic file.', duration: 'Within 14 days',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'followup', title: 'Transferring to another emirate', detail: 'A Dubai-registered car cannot transfer directly to another emirate. It must be deregistered via an Export/Transfer Certificate from RTA Dubai and re-registered under the destination emirate\'s traffic authority. Confirm fees and steps with the RTA before starting.', duration: 'Varies',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
        ],
        faqs: [
            { q: 'Who pays the RTA transfer fees?', a: 'By convention the buyer pays the AED 350 transfer fee and the seller pays the AED 50 Sale and Purchase Agreement fee, plus Knowledge and Innovation fees. The parties can renegotiate privately.' },
            { q: 'Can I keep my number plate when I sell the car?', a: 'Yes — choose plate retention during the transfer. Transferring a plate on its own, without the car, costs AED 120.' },
            { q: 'Can I sell a car that still has a bank loan?', a: 'Yes, but the loan must be settled first and the bank must send an electronic mortgage release to the RTA before the transfer can process.' },
        ],
    },
    {
        slug: 'how-to-check-and-pay-traffic-fines-in-dubai',
        country: 'ae',
        updatedAt: '2026',
        lastReviewed: '2026-10-13',
        title: 'How to Check and Pay Traffic Fines in Dubai',
        metaTitle: 'Check & Pay Dubai Traffic Fines: Apps, Discounts & Disputes (2026)',
        description: 'Check fines on the Dubai Police app, RTA app, or MOI app; pay online or in instalments; dispute errors; and how discounts actually work.',
        category: 'accidents',
        audience: ['Expat'],
        difficulty: 'Easy',
        totalTime: 'Minutes to check and pay',
        totalCost: 'Varies by violation — check the payable amount on the official app',
        summary: 'Traffic fines in Dubai come from Dubai Police, the RTA, and the MOI. Check them by plate number, driving licence, or Emirates ID in the Dubai Police app, the RTA app, or the MOI app. Pay by card or Apple Pay, or in interest-free instalments for large totals. Dubai has no standing early-payment discount — reductions apply only during limited-time Dubai Police campaigns, and the payable amount in the app already reflects any live discount. Dispute a wrong fine by filing an objection with evidence.',
        documents: [
            'Plate number',
            'Driving licence number',
            'Emirates ID',
            'Traffic file number',
            'Evidence for disputes (photos, dashcam footage, proof you were not driving)',
        ],
        steps: [
            {
                phase: 'before', title: 'Check your fines', detail: 'Check in the Dubai Police app or website, the RTA website or app, or the MOI app. Search by plate number, driving licence, or Emirates ID. The app shows the current payable amount for each fine, including any live campaign discount.', duration: 'Minutes',
                links: [
                    { label: 'Police Clearance Certificate (Dubai Police)', href: 'https://www.dubaipolice.gov.ae/app/services/police-clearance-certificate' },
                ],
            },
            {
                phase: 'submit', title: 'Pay online', detail: 'Pay by card, Apple Pay, or the other payment options in the app. Fines already paid in full cannot be discounted retroactively.', duration: 'Minutes',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'followup', title: 'Pay in instalments if the total is large', detail: 'Dubai Police offers interest-free instalment payment for fines of AED 5,000 or more (individuals) and AED 20,000 or more (companies), with 25% of the total paid upfront. Confirm your eligibility on the Dubai Police instalment service.', duration: 'Varies', cost: '25% upfront',
                links: [
                    { label: 'Instalment service (Dubai Police)', href: 'https://www.dubaipolice.gov.ae/wps/portal/home/services/individualservicescontent/installmentServiceDetails/' },
                ],
            },
            {
                phase: 'followup', title: 'Check for discount campaigns before paying', detail: 'Dubai has no permanent early-payment discount. Reductions apply only when Dubai Police announces a limited-time campaign (often around National Day or Ramadan). There is nothing to apply for — if a discount is live, the reduced amount shows automatically when you retrieve your fines. Beware of messages promising guaranteed discounts for a fee: they are scams.', duration: 'Minutes',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'submit', title: 'Dispute a fine you believe is wrong', detail: 'File an objection through the Dubai Police app or website with your evidence (photos, dashcam footage, proof you were not driving). Confirm the current objection process on the portal before paying, since a paid fine is harder to challenge.', duration: 'Varies',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
            {
                phase: 'followup', title: 'Clear fines before renewals and transfers', detail: 'Unpaid fines block driving licence renewal, vehicle registration renewal, and ownership transfer. Clear them first so those services process.', duration: 'Ongoing',
                links: [
                    { label: 'RTA services (rta.ae)', href: 'https://www.rta.ae' },
                ],
            },
        ],
        faqs: [
            { q: 'Is there a discount for paying a fine early?', a: 'No standing discount in Dubai — reductions apply only during limited-time Dubai Police campaigns. The payable amount in the app already reflects any live discount.' },
            { q: 'What about fines on a rental car?', a: 'The rental company is charged, then passes the fines to you under your contract. Deposits are often held 15–30 days after return to cover late-posting fines and tolls.' },
            { q: 'What are black points?', a: 'Serious violations add black points to your licence. Accumulating 24 black points leads to licence suspension. Confirm the current black-point rules on Dubai Police or RTA channels.' },
        ],
    },
];
