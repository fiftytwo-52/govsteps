// Comprehensive editorial intros and FAQs for Topic category pages.
// 8 topics × 3 countries = 24 unique, authoritative introductions and FAQ sets for YMYL SEO.

import type { CountryCode } from './types';

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  headline: string;
  lead: string;
  body: string;
  agencyOverview: string;
  faqs: TopicFaq[];
}

export const topicData: Record<CountryCode, Record<string, TopicContent>> = {
  us: {
    taxes: {
      headline: 'US Federal & State Tax Guides: Forms, Deadlines, and Filing Steps',
      lead: 'Navigating the Internal Revenue Service (IRS) and state revenue departments requires understanding which forms apply to your exact filing status.',
      body: 'In the United States, federal income taxes must be filed each year by mid-April using Form 1040 and accompanying schedules. Whether you are filing as a W-2 employee, an independent contractor receiving Form 1099-NEC, or a small business reporting Schedule C profits, compliance is strictly enforced. Non-citizens without a Social Security number must secure an Individual Taxpayer Identification Number (ITIN) using Form W-7 to report earnings or claim refunds. Our step-by-step guides break down the entire process from gathering wage statements to calculating self-employment taxes, making estimated quarterly payments, and tracking refund status online.',
      agencyOverview: 'Official agencies: Internal Revenue Service (irs.gov) and your state department of taxation or revenue.',
      faqs: [
        {
          q: 'When is the annual US federal income tax deadline?',
          a: 'Federal income tax returns (Form 1040) are due April 15 each year. If April 15 falls on a weekend or holiday, the deadline moves to the next business day. You can request an automatic 6-month extension to October 15 using Form 4868, but any tax owed must still be paid by April 15.',
        },
        {
          q: 'Can I file US taxes without a Social Security number (SSN)?',
          a: 'Yes. Non-citizens who do not qualify for an SSN can apply for an Individual Taxpayer Identification Number (ITIN) using IRS Form W-7. The application must be submitted with original identity documents and an attached federal income tax return.',
        },
        {
          q: 'How can I file my US federal taxes for free?',
          a: 'Eligible taxpayers can file free through IRS Free File partners (typically if your Adjusted Gross Income is below the annual threshold), through the IRS Direct File portal if available in your state, or using IRS Free File Fillable Forms.',
        },
        {
          q: 'How do I check the status of my tax refund?',
          a: 'Use the official IRS "Where\'s My Refund?" tool online at irs.gov or via the IRS2Go mobile app. Status updates appear within 24 hours after e-filing or 4 weeks after mailing a paper return.',
        },
      ],
    },
    immigration: {
      headline: 'US Immigration & Visa Guides: Green Cards, Citizenship, and Petitions',
      lead: 'United States immigration law is administered primarily by USCIS, the Department of State, and Customs and Border Protection.',
      body: 'Navigating US lawful permanent residence, family-based petitions, and naturalization involves rigorous documentation standards where small oversights cause months of delay. Spousal adjustment of status requires filing Form I-130 alongside Form I-485 and proving financial sponsorship via Form I-864. After maintaining permanent resident status for three to five years, green card holders can apply for US citizenship using Form N-400 and pass the civics and English examinations. Our guides provide clear, sequential instructions on gathering vital records, scheduling biometrics, preparing for agency interviews, and tracking processing wait times.',
      agencyOverview: 'Official agencies: US Citizenship and Immigration Services (uscis.gov), US Department of State (travel.state.gov), and CBP (cbp.gov).',
      faqs: [
        {
          q: 'How long does a marriage-based green card take to process?',
          a: 'Processing times generally range between 12 and 24 months. Spouses of US citizens living inside the US file Form I-130 and I-485 concurrently via Adjustment of Status, while spouses living abroad process through consular processing with the National Visa Center.',
        },
        {
          q: 'Can I legally work in the US while waiting for my green card?',
          a: 'Yes. When submitting Form I-485 for adjustment of status, you can concurrently file Form I-765 for an Employment Authorization Document (EAD). Once approved, you receive a work permit card valid during case processing.',
        },
        {
          q: 'When does a green card holder become eligible for US citizenship?',
          a: 'Most permanent residents become eligible to file Form N-400 after 5 years of continuous residence. If you obtained your green card through marriage and remain married to and living with your US citizen spouse, you may apply after 3 years.',
        },
        {
          q: 'What happens if I submit an outdated USCIS form edition?',
          a: 'USCIS strictly rejects expired or outdated form editions. Always download forms directly from uscis.gov immediately before filing, and check the edition date printed at the bottom of the form.',
        },
      ],
    },
    ids: {
      headline: 'US Passports, REAL ID, and Vital Records: Step-by-Step Requirements',
      lead: 'Securing primary identification credentials in the United States requires verifying citizenship, legal presence, and state residency.',
      body: 'Primary identity in the US is anchored by state-issued driver\'s licenses, Social Security cards, and US passports. Following the federal REAL ID enforcement standards, all domestic airline passengers and visitors to federal facilities must carry security-compliant licenses marked with a star or an alternative like a passport. First-time passport applicants must appear in person with Form DS-11 and an original birth certificate, while routine renewals use Form DS-82 by mail. Our guides walk you through ordering certified vital records, scheduling DMV visits, replacing lost Social Security cards, and ensuring photo compliance.',
      agencyOverview: 'Official agencies: US Department of State (travel.state.gov), Social Security Administration (ssa.gov), and your state DMV or vital statistics bureau.',
      faqs: [
        {
          q: 'What is a REAL ID and do I need one for domestic flights?',
          a: 'A REAL ID is a state driver\'s license or state ID card featuring a security star emblem indicating compliance with federal security standards. Under federal law, domestic airline travelers must present a REAL ID or valid passport to pass TSA airport checkpoints.',
        },
        {
          q: 'Who can renew a US passport by mail with Form DS-82?',
          a: 'You can renew by mail if you have your undamaged passport in your possession, it was issued when you were age 16 or older, it was issued within the last 15 years, and it was issued in your current legal name (or you can document a legal name change).',
        },
        {
          q: 'Does it cost money to replace a lost Social Security card?',
          a: 'No. The Social Security Administration never charges for a Social Security card replacement. Eligible US citizens can request a free replacement card online through their personal "my Social Security" account or at a local field office.',
        },
      ],
    },
    benefits: {
      headline: 'US Public Benefits & Healthcare: Medicare, Medicaid, and Disability',
      lead: 'Federal and state safety-net programs provide healthcare coverage, income assistance, and disability benefits.',
      body: 'Accessing public healthcare and income assistance in the US involves specific eligibility criteria, income thresholds, and enrollment windows. Older adults turning 65 must enroll in Medicare Part A and B during their Initial Enrollment Period to prevent lifetime late-enrollment penalties. Lower-income families and individuals qualify for state-administered Medicaid or subsidized private coverage through the Affordable Care Act (ACA) Health Insurance Marketplace. For individuals unable to work due to physical or mental impairments, the Social Security Administration administers SSDI (based on work credits) and SSI (needs-based). Our guides explain application windows, income verification, and appeals.',
      agencyOverview: 'Official agencies: Centers for Medicare & Medicaid Services (cms.gov, healthcare.gov, medicare.gov) and the Social Security Administration (ssa.gov).',
      faqs: [
        {
          q: 'When should I sign up for Medicare?',
          a: 'Your Initial Enrollment Period (IEP) is a 7-month window: 3 months before the month you turn 65, your birthday month, and 3 months after. Enrolling on time prevents permanent late-enrollment monthly premium penalties for Part B.',
        },
        {
          q: 'What is the core difference between Medicare and Medicaid?',
          a: 'Medicare is a federal health insurance program primarily for people age 65 or older and younger people with qualifying permanent disabilities regardless of income. Medicaid is a joint federal and state program providing health coverage for low-income individuals and families.',
        },
        {
          q: 'What is the difference between SSDI and SSI disability benefits?',
          a: 'Social Security Disability Insurance (SSDI) is funded through payroll taxes and requires a sufficient history of work credits. Supplemental Security Income (SSI) is funded by general tax revenues and provides monthly assistance based purely on financial need without requiring work credits.',
        },
      ],
    },
    business: {
      headline: 'US Business Formation & Compliance: LLCs, EINs, and Small Business Loans',
      lead: 'Launching and operating a business in the United States requires registering with state authorities and the federal government.',
      body: 'Establishing a limited liability company (LLC) shields personal assets from business liabilities and provides flexible tax election options. After filing Articles of Organization with your state Secretary of State, founders must obtain an Employer Identification Number (EIN) free from the IRS to open commercial bank accounts and hire staff. Maintaining compliance involves filing annual reports, paying franchise taxes, and managing quarterly estimated taxes. When seeking growth capital, small business owners navigate SBA-backed loans and commercial underwriting guidelines. Our guides simplify entity formation, operating agreements, licensing, and compliance.',
      agencyOverview: 'Official agencies: US Small Business Administration (sba.gov), Internal Revenue Service (irs.gov), and state Secretaries of State.',
      faqs: [
        {
          q: 'How does an LLC protect my personal assets?',
          a: 'An LLC creates a legal separation between the business entity and its owners (members). If the business incurs debts or faces legal claims, your personal bank accounts, home, and vehicle are shielded, provided you maintain corporate formalities and do not commingle personal and business funds.',
        },
        {
          q: 'How much does an EIN cost from the IRS?',
          a: 'An EIN (Employer Identification Number) is 100% free directly on irs.gov. The online application takes approximately 15 minutes, and your 9-digit number is issued immediately upon completion.',
        },
        {
          q: 'Do I need an operating agreement if I am a single-member LLC?',
          a: 'While most states do not legally mandate filing an operating agreement, banks, payment processors, and courts strongly recommend one. It legally documents your sole ownership and reinforces your limited liability protection.',
        },
      ],
    },
    accidents: {
      headline: 'US Accidents, Police Reports, and Emergency Records Recovery',
      lead: 'Responding to vehicular crashes, property crimes, or stolen personal documents requires methodical documentation.',
      body: 'When a motor vehicle collision occurs in the United States, taking immediate, structured steps protects both your legal rights and insurance claims. Calling law enforcement to establish an official police report, gathering witness contacts, and photographing scene evidence are crucial first actions. If sensitive identification cards such as your Social Security card, green card, or passport are stolen, immediate credit freezes and formal agency reports prevent identity theft. Our emergency guides outline sequential actions for filing insurance claims, replacing essential documents, and navigating small claims court.',
      agencyOverview: 'Official agencies: Local municipal police, state highway patrols, state insurance commissioners, and credit reporting bureaus.',
      faqs: [
        {
          q: 'What information must I exchange after an automobile accident?',
          a: 'Always exchange full legal names, phone numbers, driver\'s license numbers, vehicle license plate numbers, vehicle VINs, and auto insurance company names and policy numbers. Avoid discussing fault at the scene.',
        },
        {
          q: 'How do I obtain a copy of an official police report after a crash?',
          a: 'You can typically request an accident report 3 to 10 business days after the incident through the responding police department\'s records division or online via regional portals like LexisNexis BuyCrash or CrashDocs.',
        },
        {
          q: 'What immediate steps should I take if my identity documents are stolen?',
          a: 'File a police report immediately to document the theft, place a free fraud alert or credit freeze with Equifax, Experian, and TransUnion, and report missing passports to travel.state.gov or stolen green cards via Form I-90.',
        },
      ],
    },
    students: {
      headline: 'US Higher Education Paperwork: FAFSA, Student Visas, and Loans',
      lead: 'Financing college and maintaining academic immigration status in the US involves precise federal paperwork.',
      body: 'Pursuing undergraduate or graduate education in the US starts with the Free Application for Federal Student Aid (FAFSA), which determines eligibility for Pell Grants, subsidized federal student loans, and work-study programs. International students accepted to Student and Exchange Visitor Program (SEVP) certified schools must receive Form I-20, pay the SEVIS I-901 fee, and complete Form DS-160 for their F-1 visa interview at a US embassy or consulate. Our step-by-step guides explain tax credits like the American Opportunity Tax Credit, student loan repayment options, and visa maintenance.',
      agencyOverview: 'Official agencies: Federal Student Aid (studentaid.gov), Department of Homeland Security (studyinthestates.dhs.gov), and Department of State.',
      faqs: [
        {
          q: 'Who is eligible to fill out the FAFSA for federal student aid?',
          a: 'US citizens and eligible non-citizens (such as green card holders, refugees, and asylees) with a valid Social Security number and high school diploma or equivalent are eligible to complete the FAFSA.',
        },
        {
          q: 'Can international students work in the US on an F-1 visa?',
          a: 'During their first academic year, F-1 students may only work on-campus for up to 20 hours per week while school is in session. Off-campus employment requires Curricular Practical Training (CPT) or Optional Practical Training (OPT) authorization.',
        },
        {
          q: 'What is the difference between Direct Subsidized and Unsubsidized student loans?',
          a: 'With Direct Subsidized Loans, the US Department of Education pays the interest while you are enrolled at least half-time. Direct Unsubsidized Loans accrue interest from the date the funds are disbursed until fully repaid.',
        },
      ],
    },
    civic: {
      headline: 'US Civic Participation: Voter Registration, Jury Duty, and Public Records',
      lead: 'Engaging in American civic life includes exercising voting rights, fulfilling court obligations, and accessing government records.',
      body: 'Civic responsibilities in the United States form the cornerstone of local and national governance. Eligible citizens can register to vote online, by mail via the National Mail Voter Registration Form, or at local election offices and DMVs under the Motor Voter Act. Registered citizens may receive summonses for municipal, state, or federal jury duty, requiring prompt confirmation, postponement requests, or disqualification reporting. Additionally, the Freedom of Information Act (FOIA) allows public access to federal agency records. Our guides explain voter deadlines, polling requirements, and civic rights.',
      agencyOverview: 'Official agencies: US Election Assistance Commission (eacc.gov), state election divisions, and federal/state court administrators.',
      faqs: [
        {
          q: 'How do I check if I am registered to vote in my state?',
          a: 'You can verify your current registration status and polling location online through your state\'s official election website or at vote.gov using your legal name and residential address.',
        },
        {
          q: 'Can I be legally excused or deferred from jury duty?',
          a: 'Yes. State and federal courts permit excuses or one-time deferrals for valid reasons such as active military service, permanent medical disability, caregiving obligations without alternatives, or non-citizenship.',
        },
        {
          q: 'How soon before an election must I register to vote?',
          a: 'Registration deadlines vary significantly by state. Some states require registration 15 to 30 days prior to Election Day, while over 20 states and DC offer same-day voter registration at polling places on Election Day.',
        },
      ],
    },
  },
  uk: {
    taxes: {
      headline: 'UK Tax & Self Assessment Guides: HMRC Returns, Rates, and Refunds',
      lead: 'Navigating HM Revenue & Customs (HMRC) requires understanding PAYE deductions, Self Assessment thresholds, and National Insurance contributions.',
      body: 'In the United Kingdom, individuals with untaxed income, sole traders, partners, and high earners must complete an annual Self Assessment tax return. Online returns and payments must be finalized by 31 January following the end of the tax year on 5 April. Salaried employees taxed automatically through Pay As You Earn (PAYE) can claim refunds for employment expenses, professional fees, or pension tax relief through their Personal Tax Account. Our step-by-step guides walk you through registering for Self Assessment, tracking your tax code, reclaiming overpaid tax with Forms P50 and P55, and reporting cryptoasset gains.',
      agencyOverview: 'Official agencies: HM Revenue & Customs (gov.uk/hmrc).',
      faqs: [
        {
          q: 'When is the UK Self Assessment tax return deadline?',
          a: 'For online returns, the deadline is midnight on 31 January following the end of the tax year (e.g., 31 January 2026 for the 2024/25 tax year). Paper tax returns must be submitted earlier by 31 October.',
        },
        {
          q: 'Do salaried employees on PAYE need to file a Self Assessment return?',
          a: 'Most employees paying tax through PAYE do not need to file unless they have untaxed income over £1,000, dividend income, self-employment earnings, or are subject to the High Income Child Benefit Charge.',
        },
        {
          q: 'How do I claim a refund if I overpaid income tax in the UK?',
          a: 'HMRC automatically recalculates your tax after the tax year ends and sends a P800 calculation. You can claim your refund online into your bank account through your personal tax account on gov.uk or HMRC app.',
        },
      ],
    },
    immigration: {
      headline: 'UK Visas, Settlement, and Citizenship: Home Office Application Steps',
      lead: 'UK immigration procedures are managed by UK Visas and Immigration (UKVI) within the Home Office.',
      body: 'Moving to or settling in the UK involves points-based visa applications, biometric appointments, and strict financial eligibility thresholds. Skilled Worker visas require a formal Certificate of Sponsorship from a licensed employer and meeting minimum salary thresholds. Spousal and family visa applicants must demonstrate genuine relationship evidence and adequate maintenance. After completing eligible qualifying periods (usually five continuous years), residents can apply for Indefinite Leave to Remain (ILR) and subsequently register for British citizenship through naturalization. Our guides detail application requirements, English language testing, the Life in the UK test, and digital eVisas.',
      agencyOverview: 'Official agencies: UK Visas and Immigration and the Home Office (gov.uk/ukvi).',
      faqs: [
        {
          q: 'What is a UK eVisa and how does it replace physical BRP cards?',
          a: 'An eVisa is an online record of your immigration status. The Home Office has transitioned away from physical Biometric Residence Permits (BRPs). You create a UKVI account to view your status and generate digital share codes for employers and landlords.',
        },
        {
          q: 'How long must I live in the UK before applying for Indefinite Leave to Remain (ILR)?',
          a: 'Most applicants on Skilled Worker or Family visas can apply for ILR after 5 continuous years of lawful residence. Under the long residence route, you may apply after 10 continuous years.',
        },
        {
          q: 'What tests are required to naturalise as a British citizen?',
          a: 'Adult applicants must pass the Life in the UK test (covering British customs, history, and laws) and prove knowledge of English at B1 level or higher through an approved Secure English Language Test (SELT) or eligible degree.',
        },
      ],
    },
    ids: {
      headline: 'UK Identity, Passports, and Driving Licences: Official Procedures',
      lead: 'Securing identity credentials in the United Kingdom requires applying through designated government executive agencies.',
      body: 'Primary identification in the UK is established via your National Insurance number, UK driving licence issued by the Driver and Vehicle Licensing Agency (DVLA), and British passport issued by HM Passport Office (HMPO). First-time passport applicants must provide original parentage documentation and complete a countersignature or identity interview. Drivers moving to the UK can drive on foreign licences for up to 12 months before exchanging them or booking driving theory and practical tests. Our guides explain how to register births, replace lost passports, apply for a provisional licence, and obtain share codes for proving right to work or rent.',
      agencyOverview: 'Official agencies: HM Passport Office, DVLA, and Department for Work and Pensions (gov.uk).',
      faqs: [
        {
          q: 'How do I apply for a UK National Insurance (NI) number?',
          a: 'You apply online via gov.uk. You will be asked to upload photos of your identity documents (such as your passport or biometric residence permit) and, in some cases, attend an in-person identity appointment at a Jobcentre Plus office.',
        },
        {
          q: 'How long does a standard UK passport renewal take?',
          a: 'Standard online adult passport renewals typically take around 3 weeks. Urgent 1-week Fast Track or 1-day Premium appointments are available at regional passport offices for an additional fee.',
        },
        {
          q: 'Can I exchange my foreign driving licence for a UK licence?',
          a: 'If your licence was issued in a "designated country" (including EU countries, Canada, Australia, etc.), you can exchange it for a UK licence without taking a test within 5 years of becoming resident.',
        },
      ],
    },
    benefits: {
      headline: 'UK Public Benefits & NHS Healthcare: Universal Credit and Support',
      lead: 'The UK social security safety net is administered by the Department for Work and Pensions (DWP) and the National Health Service (NHS).',
      body: 'Accessing public support in the UK involves understanding means-tested benefits, disability allowances, and state health services. Universal Credit consolidates six previous legacy benefits into a single monthly payment designed to assist with living costs and housing expenses. Families with children can claim Child Benefit, while healthcare access is initiated by registering with a local NHS General Practitioner (GP) surgery. Our guides outline claiming procedures, claimant commitments, work capability assessments, and overseas emergency medical coverage through the Global Health Insurance Card (GHIC).',
      agencyOverview: 'Official agencies: Department for Work and Pensions (dwp.gov.uk) and National Health Service (nhs.uk).',
      faqs: [
        {
          q: 'How long does it take to receive the first Universal Credit payment?',
          a: 'There is a standard 5-week waiting period from the date you submit your claim to your first payment. If you do not have enough money to live on while waiting, you can apply for an advance payment through your online journal.',
        },
        {
          q: 'Can I register with an NHS GP surgery without proof of address or ID?',
          a: 'Yes. NHS guidelines state that anyone in England is entitled to register with a GP surgery for free, and surgeries cannot refuse registration solely because you do not have identification or proof of address.',
        },
        {
          q: 'What is the High Income Child Benefit Charge?',
          a: 'If you or your partner earn over £60,000 individually and receive Child Benefit, you must pay back a portion of the benefit through Self Assessment. The benefit is fully clawed back if income reaches £80,000.',
        },
      ],
    },
    business: {
      headline: 'UK Company Formation & Compliance: Companies House and VAT',
      lead: 'Setting up and running a commercial venture in the UK involves registering with Companies House and HMRC.',
      body: 'Entrepreneurs in the UK typically choose between operating as a sole trader or incorporating a private limited company (Ltd). Incorporating a company provides limited liability protection and establishes a distinct legal identity. Directors must file confirmation statements and annual accounts with Companies House, submit Corporation Tax returns to HMRC, and register for Value Added Tax (VAT) when annual taxable turnover reaches the statutory threshold. Our step-by-step guides cover company naming rules, memorandum and articles of association, business banking, and commercial borrowing.',
      agencyOverview: 'Official agencies: Companies House and HM Revenue & Customs (gov.uk).',
      faqs: [
        {
          q: 'How long does it take to register a private limited company with Companies House?',
          a: 'Online company registrations are typically approved within 24 hours (excluding weekends). The statutory registration fee is paid directly to Companies House during the application.',
        },
        {
          q: 'What is the mandatory VAT registration threshold in the UK?',
          a: 'You must register your business for VAT if your total taxable turnover exceeds £90,000 over a rolling 12-month period, or if you expect your turnover to exceed that threshold within the next 30 days.',
        },
        {
          q: 'What is a Companies House Confirmation Statement?',
          a: 'A confirmation statement (Form CS01) verifies that the company information registered at Companies House (including directors, registered office address, and Persons with Significant Control) is accurate. It must be filed at least once every 12 months.',
        },
      ],
    },
    accidents: {
      headline: 'UK Vehicle Collisions, Crime Reporting, and Police Records',
      lead: 'Responding to motoring incidents, criminal victimisation, or stolen credentials in the UK requires formal notification.',
      body: 'If you are involved in a road traffic collision in the United Kingdom, statutory rules dictate when you must stop, exchange details, and report the event to the police. If injury or property damage occurs and details are not exchanged at the scene, the driver must report the collision to a police station or officer within 24 hours. Victims of property crime or theft can file reports online or via the 101 non-emergency police telephone service. Our emergency guides cover motor insurance claim requirements, reporting lost identity cards, and small claims court procedures.',
      agencyOverview: 'Official agencies: Local UK police forces, DVLA, and Motor Insurers\' Bureau (MIB).',
      faqs: [
        {
          q: 'When must a car accident be reported to the police in the UK?',
          a: 'Under Section 170 of the Road Traffic Act 1988, you must report a collision to the police within 24 hours if you did not exchange details at the scene, or if anyone was injured.',
        },
        {
          q: 'When should I call 101 versus 999 in the UK?',
          a: 'Call 999 only in an emergency: when a crime is in progress, someone is in immediate danger, or serious injury has occurred. Call 101 or report online for non-emergency situations, such as reporting vehicle theft or damage after the fact.',
        },
        {
          q: 'What should I do if my UK driving licence is lost or stolen?',
          a: 'Apply for a replacement licence online via DVLA on gov.uk. You must be a resident of Great Britain, provide your address history for the last 3 years, and pay the statutory replacement fee.',
        },
      ],
    },
    students: {
      headline: 'UK Higher Education Paperwork: Student Finance and Student Visas',
      lead: 'Financing university studies and securing educational visas in the UK involves designated public loan bodies and UKVI.',
      body: 'Higher education students in the United Kingdom fund tuition fees and living maintenance through statutory student finance agencies (Student Finance England, Wales, Scotland, or Northern Ireland). Repayment obligations are income-contingent and only begin after graduating above specific statutory income thresholds. International students accepted to licensed sponsor universities must obtain a Confirmation of Acceptance for Studies (CAS) before applying for a Student Visa. Our guides detail tuition loan applications, repayment plans, post-study Graduate visas, and proof of student status.',
      agencyOverview: 'Official agencies: Student Loans Company (gov.uk/slc) and UK Visas and Immigration.',
      faqs: [
        {
          q: 'When do I start repaying my UK student loan?',
          a: 'You only begin repaying your student loan the April after you graduate or leave your course, and only when your income exceeds the specific threshold for your repayment plan (e.g., Plan 2 or Plan 5). Repayments are deducted automatically via PAYE.',
        },
        {
          q: 'How many hours can international students work in the UK on a Student Visa?',
          a: 'Students enrolled in full-time degree-level courses at higher education institutions can work up to 20 hours per week during term time, and full-time during official university vacation periods.',
        },
        {
          q: 'What is the UK Graduate visa route?',
          a: 'The Graduate visa allows international students who have successfully completed an eligible undergraduate or master\'s degree to stay and work in the UK for 2 years (or 3 years for doctoral graduates) without requiring job sponsorship.',
        },
      ],
    },
    civic: {
      headline: 'UK Civic Engagement: Electoral Roll, Voting, and Civil Ceremonies',
      lead: 'Participating in British civic life includes registering on the electoral roll, voting in public elections, and recording civil events.',
      body: 'Democratic participation in the UK requires registering on the electoral register through your local electoral registration office. Registered voters must present an accepted form of photographic identification (such as a passport or photocard driving licence) or apply for a free Voter Authority Certificate to vote in person at polling stations. Major life milestones, such as marriages and civil partnerships, require formally giving 28 days notice at a local register office before the ceremony. Our guides walk you through electoral registration, jury service obligations, and civil registry appointments.',
      agencyOverview: 'Official agencies: Electoral Commission (electoralcommission.org.uk) and General Register Office (gov.uk).',
      faqs: [
        {
          q: 'Do I need photo ID to vote in person in UK elections?',
          a: 'Yes. Voters in UK parliamentary elections and local elections in England must show an accepted form of photo ID at the polling station. If you do not have an accepted ID, you can apply online for a free Voter Authority Certificate.',
        },
        {
          q: 'Who is eligible to register to vote in UK elections?',
          a: 'British, Irish, and qualifying Commonwealth citizens aged 16 or older (voting starts at 18 in UK general elections) who reside in the UK are eligible to register on the electoral roll.',
        },
        {
          q: 'How far in advance must you give notice of marriage in the UK?',
          a: 'You must sign a legal declaration of your intention to marry at your local register office at least 28 full days before your ceremony date. If either party is subject to immigration control, the notice period may be extended to 70 days.',
        },
      ],
    },
  },
  ca: {
    taxes: {
      headline: 'Canadian Tax Filing Guides: CRA Returns, GST Credits, and Deadlines',
      lead: 'Complying with the Canada Revenue Agency (CRA) requires understanding personal tax returns, credits, and provincial deductions.',
      body: 'In Canada, residents file their annual T1 Income Tax and Benefit Return by April 30. Self-employed individuals have until June 15 to file, though any balance owing must still be paid by April 30 to avoid interest charges. Filing an annual return is essential even with zero income to trigger federal and provincial benefit payments, including the Canada Child Benefit (CCB), the GST/HST credit, and the Canada Carbon Rebate. Our step-by-step guides explain setting up CRA My Account, understanding T4 and T5 tax slips, deducting eligible expenses, and claiming provincial credits.',
      agencyOverview: 'Official agencies: Canada Revenue Agency (canada.ca/cra) and Revenu Québec for QC residents.',
      faqs: [
        {
          q: 'When is the personal income tax filing deadline in Canada?',
          a: 'The general deadline for filing your T1 income tax return is April 30. If you or your spouse are self-employed, the filing deadline is June 15, but any balance owing must still be paid by April 30 to avoid interest.',
        },
        {
          q: 'Why should new immigrants file a tax return in Canada with no income?',
          a: 'Filing your first tax return registers your residency with the CRA and automatically calculates your entitlement to federal and provincial quarterly benefit payments, such as the GST/HST credit and Canada Child Benefit.',
        },
        {
          q: 'How do I access CRA My Account online?',
          a: 'You can register for CRA My Account online using your Social Insurance Number (SIN), date of birth, postal code, and information from a recently assessed tax return, or sign in using a Canadian financial institution Sign-In Partner.',
        },
      ],
    },
    immigration: {
      headline: 'Canadian Immigration, PR, and Citizenship: IRCC Procedures',
      lead: 'Immigration, Refugees and Citizenship Canada (IRCC) administers permanent residence, economic immigration, and citizenship.',
      body: 'Immigrating to Canada involves meeting comprehensive economic, educational, and linguistic criteria evaluated under the Comprehensive Ranking System (CRS) in the Express Entry pool, or through Provincial Nominee Programs (PNP). Permanent residents must maintain physical presence requirements (at least 730 days in Canada every five years) to retain status and renew their PR cards. After accumulating 1,095 days of physical presence, permanent residents can apply for Canadian citizenship, complete the citizenship test, and take the oath of citizenship. Our guides detail study permit applications, work permits, spousal sponsorships, and citizenship requirements.',
      agencyOverview: 'Official agencies: Immigration, Refugees and Citizenship Canada (canada.ca/ircc) and CBSA (cbsa-asfc.gc.ca).',
      faqs: [
        {
          q: 'How long must you live in Canada before applying for Canadian citizenship?',
          a: 'You must have been physically present in Canada as a permanent resident for at least 1,095 days (3 full years) during the 5 years immediately before the date you sign and submit your application.',
        },
        {
          q: 'What is the physical residency requirement to maintain Canadian permanent resident status?',
          a: 'To maintain permanent resident status, you must accumulate at least 730 days (2 years) of physical presence in Canada within every 5-year rolling period, unless specific exceptions (such as working abroad for a Canadian business) apply.',
        },
        {
          q: 'What is the difference between Express Entry and a Provincial Nominee Program (PNP)?',
          a: 'Express Entry is an online federal selection system for skilled workers across Canada. A PNP is a provincial program allowing individual provinces to nominate candidates whose specific skills match regional economic and labour market demands.',
        },
      ],
    },
    ids: {
      headline: 'Canadian Passports, SIN, and Provincial Licences: Application Steps',
      lead: 'Securing primary credentials in Canada involves federal identity issuing offices and provincial transport ministries.',
      body: 'Identification in Canada begins with your Social Insurance Number (SIN), a confidential 9-digit number issued by Service Canada required for working, paying taxes, and accessing government programs. Passports are issued through the Passport Program at Service Canada, requiring proof of citizenship (such as a birth certificate or citizenship certificate), an eligible guarantor, and passport photos meeting strict specifications. Provincial ministries issue driver\'s licences and photo cards following graduated licensing schemes. Our guides detail SIN applications, passport renewals, driver\'s licence exchanges, and civil birth certificates.',
      agencyOverview: 'Official agencies: Service Canada, Passport Program, and provincial ministries of transportation.',
      faqs: [
        {
          q: 'How do I apply for a Social Insurance Number (SIN) in Canada?',
          a: 'You can apply online through Service Canada\'s eSIN portal or in person at a Service Canada Centre. You must submit an original primary identity document proving your legal status (such as a PR card, work permit, or citizenship certificate).',
        },
        {
          q: 'How long does it take to renew a Canadian passport?',
          a: 'Standard passport applications submitted by mail take approximately 20 business days plus mailing time. Applications submitted in person at a specialized passport office take approximately 10 business days, with urgent and express pick-up options available for an extra fee.',
        },
        {
          q: 'Who can act as a guarantor on a Canadian passport application?',
          a: 'For adult simplified renewals, you do not need a guarantor. For general applications, a guarantor must be a Canadian citizen aged 18 or older who holds a valid Canadian passport and has known you personally for at least 2 years.',
        },
      ],
    },
    benefits: {
      headline: 'Canadian Public Benefits & Healthcare: EI, CCB, and Provincial Health',
      lead: 'Canada\'s social safety net is delivered through federal statutory programs and provincial healthcare ministries.',
      body: 'Navigating public benefits in Canada involves applying through Service Canada and provincial social development ministries. Employment Insurance (EI) provides temporary income support to workers who lose their jobs through no fault of their own or take leave for parental, medical, or caregiving purposes. Healthcare is funded publicly through provincial health insurance plans (such as OHIP in Ontario, MSP in British Columbia, or AHCIP in Alberta). Our guides walk you through claiming EI benefits, registering for provincial health cards, applying for the Canada Child Benefit, and qualifying for the Canadian Dental Care Plan (CDCP).',
      agencyOverview: 'Official agencies: Service Canada (canada.ca) and provincial ministries of health.',
      faqs: [
        {
          q: 'How many hours do you need to qualify for Employment Insurance (EI) regular benefits?',
          a: 'You typically need between 420 and 700 hours of insurable employment during your qualifying period (usually the preceding 52 weeks), depending on the unemployment rate in your economic region.',
        },
        {
          q: 'How do I get a provincial health card when moving to Canada?',
          a: 'Apply through your province\'s healthcare agency (e.g., ServiceOntario, MSP BC, Alberta Health). You must submit proof of Canadian citizenship or eligible immigration status, proof of provincial residency, and personal identification.',
        },
        {
          q: 'What is the Canada Child Benefit (CCB) and who is eligible?',
          a: 'The CCB is a tax-free monthly payment from the CRA to help eligible families cover the costs of raising children under age 18. Both parents must file annual tax returns every year to continue receiving payments.',
        },
      ],
    },
    business: {
      headline: 'Canadian Business Registration: Federal & Provincial Incorporation',
      lead: 'Establishing a commercial enterprise in Canada involves choosing between federal and provincial incorporation.',
      body: 'Entrepreneurs launching a business in Canada choose between sole proprietorships, partnerships, and incorporated corporations. Federal incorporation under the Canada Business Corporations Act provides corporate name protection nationwide, while provincial incorporation registers the company specifically in your home province. Once registered, corporations must obtain a 9-digit Business Number (BN) from the CRA to handle corporate income tax, GST/HST remittances, and payroll deductions. Our step-by-step guides cover name reservation (NUANS), corporate bylaws, GST/HST registration, and commercial loans.',
      agencyOverview: 'Official agencies: Corporations Canada (ised-isde.canada.ca) and Canada Revenue Agency (canada.ca/cra).',
      faqs: [
        {
          q: 'What is the difference between federal and provincial incorporation in Canada?',
          a: 'Federal incorporation provides nationwide name protection and allows you to conduct business across Canada under the same corporate name. Provincial incorporation only protects your business name and registers you in that specific province.',
        },
        {
          q: 'When must a Canadian business register for a GST/HST account?',
          a: 'You must register for a GST/HST account if your total taxable worldwide gross revenues exceed $30,000 across any single calendar quarter or over four consecutive calendar quarters.',
        },
        {
          q: 'What is a NUANS report in Canadian business incorporation?',
          a: 'A NUANS (Newly Updated Automated Name Search) report compares your proposed corporate name against existing trademarks, business names, and corporations in Canada to ensure your proposed name is distinct and legally acceptable.',
        },
      ],
    },
    accidents: {
      headline: 'Canadian Vehicle Accidents, Police Reports, and Document Recovery',
      lead: 'Handling automotive crashes, property incidents, and stolen records in Canada requires following provincial statutory codes.',
      body: 'When a motor vehicle collision occurs in Canada, drivers must stop, render assistance, and exchange particulars. If injuries occur or combined property damage exceeds provincial monetary reporting thresholds (typically $2,000 in Ontario and Alberta), drivers must report the collision to police or an official Collision Reporting Centre. In the event of lost or stolen identification cards, reporting theft immediately protects your identity and credit files. Our emergency guides provide sequential instructions on reporting accidents, filing insurance claims, replacing essential documents, and navigating small claims court.',
      agencyOverview: 'Official agencies: Municipal police services, RCMP, and provincial insurance regulators.',
      faqs: [
        {
          q: 'When are you legally required to report a car accident to the police in Canada?',
          a: 'You must report a collision to police or a Collision Reporting Centre if anyone is injured or killed, if a criminal act is suspected, or if total combined vehicle damage exceeds the provincial reporting threshold (usually $2,000 in most provinces).',
        },
        {
          q: 'What should I do if my Canadian Social Insurance Number (SIN) is compromised or stolen?',
          a: 'File a report with your local police, notify the Canadian Anti-Fraud Centre, contact Equifax Canada and TransUnion Canada to place fraud alerts on your credit reports, and visit a Service Canada Centre with your proof of identity.',
        },
        {
          q: 'How does "no-fault" auto insurance work in Canadian provinces like Ontario?',
          a: '"No-fault" insurance does not mean nobody is at fault for the accident. It means that regardless of who caused the collision, you deal directly with your own insurance company for vehicle repair and statutory accident benefit claims.',
        },
      ],
    },
    students: {
      headline: 'Canadian Higher Education: Provincial Student Aid and Study Permits',
      lead: 'Financing post-secondary studies and securing student immigration status in Canada involves provincial loan bodies and IRCC.',
      body: 'Canadian post-secondary students fund tuition and living costs through integrated federal-provincial financial assistance programs (such as OSAP in Ontario, StudentAid BC, or Alberta Student Aid), which disburse a combination of non-repayable grants and loans. International students accepted to Designated Learning Institutions (DLIs) must secure an official Provincial Attestation Letter (PAL) and obtain an IRCC study permit. Our guides detail loan application timelines, off-campus work authorization, and the Post-Graduation Work Permit (PGWP) pathway.',
      agencyOverview: 'Official agencies: National Student Loans Service Centre (csnpe-nslsc.canada.ca) and IRCC (canada.ca/ircc).',
      faqs: [
        {
          q: 'How many hours can international students work off-campus in Canada?',
          a: 'Eligible full-time post-secondary international students holding a valid study permit with work authorization can work off-campus up to 24 hours per week during regular academic sessions, and full-time during scheduled breaks.',
        },
        {
          q: 'When does interest start accruing on Canadian federal student loans?',
          a: 'The Government of Canada permanently eliminated interest on Canada Student Loans and Canada Apprentice Loans. Repayment of the principal balance begins 6 months after completing your studies.',
        },
        {
          q: 'What is a Post-Graduation Work Permit (PGWP)?',
          a: 'A PGWP is an open work permit allowing graduates from eligible Canadian Designated Learning Institutions (DLIs) to work in Canada for up to 3 years. Work experience gained under a PGWP can help qualify for Canadian permanent residence through Express Entry.',
        },
      ],
    },
    civic: {
      headline: 'Canadian Civic Life: Elections Canada, Voting, and Civil Certificates',
      lead: 'Participating in Canadian civic democracy includes registering on electoral lists, voting, and obtaining vital civil records.',
      body: 'Federal electoral participation in Canada is administered by Elections Canada through the National Register of Electors. Eligible voters must be Canadian citizens aged 18 or older and present acceptable identification proving identity and address at the polling station. Provincial vital statistics agencies record marriages, civil births, and legal name changes. Our guides explain how to register on the electoral roll, update your address before elections, order certified marriage certificates, and navigate civil court filings.',
      agencyOverview: 'Official agencies: Elections Canada (elections.ca) and provincial vital statistics agencies.',
      faqs: [
        {
          q: 'Who is eligible to vote in Canadian federal elections?',
          a: 'To vote in a Canadian federal election, you must be a Canadian citizen, be at least 18 years old on Election Day, and provide proof of your identity and residential address.',
        },
        {
          q: 'Can permanent residents vote in Canadian elections?',
          a: 'No. Voting in Canadian federal, provincial, and territorial elections is legally restricted to Canadian citizens. Permanent residents can apply for citizenship once they meet the 1,095-day residency requirement.',
        },
        {
          q: 'What ID is accepted to vote at a Canadian federal polling station?',
          a: 'You can show one government-issued photo ID with your name and current address (such as a driver\'s licence), or two pieces of ID both showing your name and at least one showing your address (such as a bank statement and utility bill).',
        },
      ],
    },
  },
};
