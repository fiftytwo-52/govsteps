// Interactive calculators embedded inside guides (see Guide.calculator).
// Every formula is pure, verified against the official source named in each
// definition, and unit-tested in scripts/test-calculators.mjs. All results are
// estimates — the official source governs.

export type CalcInputType = 'number' | 'select' | 'checkbox' | 'range';

export interface CalcInput {
    id: string;
    label: string;
    type: CalcInputType;
    min?: number;
    max?: number;
    step?: number;
    defaultValue: number | string | boolean;
    prefix?: string;
    suffix?: string;
    hint?: string;
    options?: { value: string; label: string }[];
}

export interface CalcOutput {
    key: string;
    label: string;
    format: 'money' | 'percent' | 'number' | 'text';
    hint?: string;
    highlight?: boolean;
}

export interface CalculatorDef {
    id: string;
    title: string;
    description: string;
    currency: 'AED' | 'USD' | 'GBP' | 'CAD';
    /** Optional: derive the display currency from a select input (e.g. country). */
    currencyInput?: string;
    currencyMap?: Record<string, string>;
    inputs: CalcInput[];
    outputs: CalcOutput[];
    formula: (v: Record<string, number | string | boolean>) => Record<string, number | string>;
    disclaimer: string;
    sourceLabel: string;
    sourceHref: string;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

/** Standard loan amortization: monthly payment for principal P, annual rate, n months. */
function amortize(principal: number, annualRatePct: number, months: number): number {
    if (months <= 0 || principal <= 0) return 0;
    if (annualRatePct <= 0) return principal / months;
    const r = annualRatePct / 100 / 12;
    const f = Math.pow(1 + r, months);
    return (principal * r * f) / (f - 1);
}

/** Loan payoff with an optional extra monthly payment. Returns months + total paid. */
function loanWithExtra(principal: number, annualRatePct: number, months: number, feePct: number, extra: number) {
    const base = amortize(principal, annualRatePct, months);
    const fee = principal * (feePct / 100);
    if (extra <= 0) {
        return { monthly: round2(base), months, totalPaid: round2(base * months), fee: round2(fee), totalInterest: round2(base * months - principal) };
    }
    const pay = base + extra;
    const r = annualRatePct / 100 / 12;
    let payoffMonths = months;
    if (annualRatePct <= 0) {
        payoffMonths = Math.ceil(principal / pay);
    } else if (pay > principal * r) {
        payoffMonths = Math.ceil(-Math.log(1 - (r * principal) / pay) / Math.log(1 + r));
    }
    const totalPaid = round2(pay * payoffMonths);
    return { monthly: round2(pay), months: payoffMonths, totalPaid, fee: round2(fee), totalInterest: round2(totalPaid - principal) };
}

/** 2026 HHS poverty guidelines, 48 contiguous states + DC (family size 1–8).
 *  Source: Federal Register, Annual Update of the HHS Poverty Guidelines
 *  (Jan 2026). Alaska/Hawaii have higher tables — not used here. */
const FPL_2026 = [15960, 21640, 27320, 33000, 38680, 44360, 50040, 55720];

/** RAP monthly payment: 1–10% of AGI by $10k bands, minus $50 per
 *  dependent, floored at $10/month. Annual base is $120 for AGI ≤ $10k
 *  (i.e. the $10 floor). Source: FSA servicer RAP terms (ED). */
function rapMonthly(agi: number, dependents: number): number {
    let annualBase: number;
    if (agi <= 10000) annualBase = 120;
    else if (agi <= 100000) annualBase = agi * ((Math.ceil(agi / 10000) - 1) / 100);
    else annualBase = agi * 0.1;
    return Math.max(10, annualBase / 12 - 50 * Math.max(0, dependents));
}

/** Simulate fixed-payment repayment: interest accrues monthly, payment
 *  applies to interest first. Returns total paid + balance left after
 *  maxMonths (the forgiven amount if the term runs out). Income is
 *  assumed constant — no annual recertification, no capitalization. */
function simulateRepayment(balance: number, annualRatePct: number, monthlyPayment: number, maxMonths: number) {
    let bal = Math.max(0, balance);
    let totalPaid = 0;
    const r = annualRatePct / 100 / 12;
    for (let m = 0; m < maxMonths && bal > 0.005; m++) {
        const interest = bal * r;
        const pay = Math.min(monthlyPayment, bal + interest);
        bal = bal + interest - pay;
        totalPaid += pay;
    }
    return { totalPaid: round2(totalPaid), remaining: round2(Math.max(0, bal)) };
}

/** US customs fees: MPF 0.3464% ad valorem for formal entries, clamped to
 *  the FY2027 floor/cap (19 CFR 24.23; CBP user-fee table). HMF 0.125%
 *  on ocean cargo only (19 CFR 24.24). */
function usMpfFormal(customsValue: number): number {
    if (customsValue <= 0) return 0;
    return Math.min(670.86, Math.max(34.58, customsValue * 0.003464));
}
function ukIncomeTax(gross: number): number {
    const pa = Math.max(0, 12570 - Math.max(0, (gross - 100000) / 2));
    const taxable = Math.max(0, gross - pa);
    const b1 = Math.min(taxable, 37700);
    const b2 = Math.min(Math.max(0, taxable - 37700), 87440);
    const b3 = Math.max(0, taxable - 125140);
    return b1 * 0.2 + b2 * 0.4 + b3 * 0.45;
}

/** UK Class 1 employee NI (8% PT–UEL, 2% above UEL). */
function ukEmployeeNI(gross: number): number {
    return Math.min(Math.max(0, gross - 12570), 37700) * 0.08 + Math.max(0, gross - 50270) * 0.02;
}

/** UK Corporation Tax: 19% ≤ £50k, 25% ≥ £250k, marginal relief (3/200) between. */
function ukCorporationTax(profit: number): number {
    if (profit <= 0) return 0;
    if (profit <= 50000) return profit * 0.19;
    if (profit >= 250000) return profit * 0.25;
    return profit * 0.25 - (250000 - profit) * 0.015;
}

/** UK dividend tax: £500 allowance, then dividends stacked on top of salary.
 *  2026/27: 10.75% / 35.75% / 39.35%. 2025/26: 8.75% / 33.75% / 39.35%. */
function ukDividendTax(dividends: number, salary: number, taxYear: string): number {
    const rates = taxYear === '2026/27' ? [0.1075, 0.3575, 0.3935] : [0.0875, 0.3375, 0.3935];
    const taxable = Math.max(0, dividends - 500);
    const basicRoom = Math.max(0, 50270 - salary);
    const higherRoom = Math.max(0, 125140 - Math.max(salary, 50270));
    const inBasic = Math.min(taxable, basicRoom);
    const inHigher = Math.min(Math.max(0, taxable - inBasic), higherRoom);
    const inAdditional = Math.max(0, taxable - inBasic - inHigher);
    return inBasic * rates[0] + inHigher * rates[1] + inAdditional * rates[2];
}

/** Inside-IR35 (umbrella) take-home for a gross assignment rate.
 *  Employer NI (15% above £5,000) comes out of the assignment rate, so the
 *  gross taxable pay is solved: gross = (assignment − margin + 750) / 1.15. */
function ir35InsideTakeHome(assignment: number, marginAnnual: number) {
    const net = assignment - marginAnnual;
    if (net <= 0) return { grossPay: 0, employerNI: 0, incomeTax: 0, employeeNI: 0, takeHome: 0 };
    const solved = (net + 750) / 1.15;
    const grossPay = solved > 5000 ? solved : net;
    const employerNI = 0.15 * Math.max(0, grossPay - 5000);
    const incomeTax = ukIncomeTax(grossPay);
    const employeeNI = ukEmployeeNI(grossPay);
    return { grossPay, employerNI, incomeTax, employeeNI, takeHome: grossPay - incomeTax - employeeNI };
}

export const CALCULATORS: Record<string, CalculatorDef> = {
    'ae-gratuity': {
        id: 'ae-gratuity',
        title: 'UAE Gratuity Calculator',
        description: 'Estimate your end-of-service gratuity under Federal Decree-Law 33/2021: 21 days of basic wage per year for the first 5 years, 30 days per year after, pro-rated for partial years.',
        currency: 'AED',
        inputs: [
            { id: 'basicSalary', label: 'Last monthly basic salary', type: 'number', min: 0, step: 100, defaultValue: 10000, prefix: 'AED' },
            { id: 'serviceYears', label: 'Years of service', type: 'number', min: 0, max: 50, step: 0.25, defaultValue: 7, hint: 'Count full years + partial year as a decimal, e.g. 7.5' },
            { id: 'unpaidLeaveDays', label: 'Unpaid-leave days (optional)', type: 'number', min: 0, step: 1, defaultValue: 0, hint: 'Unpaid-leave days do not count toward service time' },
        ],
        outputs: [
            { key: 'gratuity', label: 'Estimated gratuity', format: 'money', highlight: true },
            { key: 'eligibility', label: 'Eligibility', format: 'text' },
            { key: 'dailyWage', label: 'Daily basic wage (basic ÷ 30)', format: 'money' },
            { key: 'firstFive', label: 'First 5 years (21 days/yr)', format: 'money' },
            { key: 'beyondFive', label: 'Beyond 5 years (30 days/yr)', format: 'money' },
            { key: 'effectiveYears', label: 'Service counted (years)', format: 'number' },
        ],
        formula: (v) => {
            const basic = Number(v.basicSalary) || 0;
            const years = Number(v.serviceYears) || 0;
            const leave = Number(v.unpaidLeaveDays) || 0;
            const effective = Math.max(0, years - leave / 365);
            const daily = basic / 30;
            const first5 = Math.min(effective, 5);
            const beyond = Math.max(0, effective - 5);
            const raw = (21 * first5 + 30 * beyond) * daily;
            const cap = basic * 24; // 2 years of basic wage
            const gratuity = effective < 1 ? 0 : Math.min(raw, cap);
            return {
                gratuity: round2(gratuity),
                eligibility: effective < 1 ? 'Not yet eligible — 1+ year of continuous service required' : 'Eligible (1+ year of service)',
                dailyWage: round2(daily),
                firstFive: round2(21 * first5 * daily),
                beyondFive: round2(30 * beyond * daily),
                effectiveYears: round2(effective),
            };
        },
        disclaimer: 'Estimate only. Covers federal private-sector employees. Excludes DIFC/ADGM, government, and domestic workers (separate regimes). The cap is applied against basic wage because the calculator takes basic salary only; under Art. 51(6) the legal cap is two years\' total Wage (basic + allowances).',
        sourceLabel: 'Federal Decree-Law 33/2021, Art. 51 (MOHRE)',
        sourceHref: 'https://mohre.gov.ae/en/media-center/news/15/11/2021/uae-president-issues-federal-decree-law-on-regulation-of-labour-relations-in-private-sector',
    },
    'ae-corporate-tax': {
        id: 'ae-corporate-tax',
        title: 'UAE Corporate Tax Calculator',
        description: 'Estimate UAE Corporate Tax: 0% on taxable income up to AED 375,000, 9% on the excess. Tax applies to profit, not revenue.',
        currency: 'AED',
        inputs: [
            { id: 'taxableIncome', label: 'Annual taxable income (profit)', type: 'number', min: 0, step: 1000, defaultValue: 1000000, prefix: 'AED' },
            { id: 'smallBusinessRelief', label: 'Small Business Relief (revenue ≤ AED 3M)', type: 'checkbox', defaultValue: false, hint: 'Eligible businesses are treated as having no taxable income' },
        ],
        outputs: [
            { key: 'taxDue', label: 'Estimated Corporate Tax', format: 'money', highlight: true },
            { key: 'effectiveRate', label: 'Effective rate', format: 'percent' },
            { key: 'taxedAt9', label: 'Income taxed at 9%', format: 'money' },
        ],
        formula: (v) => {
            const income = Number(v.taxableIncome) || 0;
            if (v.smallBusinessRelief) return { taxDue: 0, effectiveRate: 0, taxedAt9: 0 };
            const taxed = Math.max(0, income - 375000);
            const tax = taxed * 0.09;
            return { taxDue: round2(tax), effectiveRate: income > 0 ? round2((tax / income) * 100) : 0, taxedAt9: round2(taxed) };
        },
        disclaimer: 'Estimate only. Excludes Qualifying Free Zone Person treatment (0% on qualifying income, conditions apply) and Pillar Two rules for very large multinationals. Registration is required even when no tax is due.',
        sourceLabel: 'Federal Decree-Law 47/2022, Art. 5 (FTA)',
        sourceHref: 'https://tax.gov.ae/en/taxes/corporate.tax.aspx',
    },
    'us-fha-mortgage': {
        id: 'us-fha-mortgage',
        title: 'FHA Mortgage Payment Calculator',
        description: 'Estimate your monthly FHA payment: principal & interest plus FHA mortgage insurance premium (MIP), with optional taxes and insurance.',
        currency: 'USD',
        inputs: [
            { id: 'homePrice', label: 'Home price', type: 'number', min: 0, step: 1000, defaultValue: 310880, prefix: '$' },
            { id: 'downPaymentPct', label: 'Down payment', type: 'range', min: 0, max: 50, step: 0.5, defaultValue: 3.5, suffix: '%' },
            { id: 'interestRate', label: 'Interest rate (APR)', type: 'number', min: 0, max: 20, step: 0.125, defaultValue: 6.5, suffix: '%' },
            { id: 'termYears', label: 'Loan term', type: 'select', defaultValue: '30', options: [{ value: '30', label: '30 years' }, { value: '20', label: '20 years' }] },
            { id: 'annualTax', label: 'Annual property taxes (optional)', type: 'number', min: 0, step: 100, defaultValue: 0, prefix: '$' },
            { id: 'annualInsurance', label: 'Annual homeowners insurance (optional)', type: 'number', min: 0, step: 100, defaultValue: 0, prefix: '$' },
            { id: 'financeUfmip', label: 'Finance the 1.75% upfront MIP into the loan', type: 'checkbox', defaultValue: true },
        ],
        outputs: [
            { key: 'totalMonthly', label: 'Estimated total monthly payment', format: 'money', highlight: true },
            { key: 'monthlyPI', label: 'Principal & interest', format: 'money' },
            { key: 'monthlyMip', label: 'Monthly MIP', format: 'money' },
            { key: 'monthlyTaxIns', label: 'Taxes + insurance', format: 'money' },
            { key: 'loanAmount', label: 'Loan amount', format: 'money' },
            { key: 'ufmip', label: 'Upfront MIP (1.75%)', format: 'money' },
            { key: 'mipDuration', label: 'MIP duration', format: 'text' },
        ],
        formula: (v) => {
            const price = Number(v.homePrice) || 0;
            const dp = price * ((Number(v.downPaymentPct) || 0) / 100);
            const baseLoan = Math.max(0, price - dp);
            const ufmip = baseLoan * 0.0175;
            const loan = v.financeUfmip ? baseLoan + ufmip : baseLoan;
            const term = Number(v.termYears) || 30;
            const pi = amortize(loan, Number(v.interestRate) || 0, term * 12);
            const ltv = price > 0 ? (loan / price) * 100 : 0;
            const mipRate = ltv > 95 ? 0.0055 : 0.005;
            const mip = (loan * mipRate) / 12;
            const taxIns = ((Number(v.annualTax) || 0) + (Number(v.annualInsurance) || 0)) / 12;
            return {
                totalMonthly: round2(pi + mip + taxIns),
                monthlyPI: round2(pi),
                monthlyMip: round2(mip),
                monthlyTaxIns: round2(taxIns),
                loanAmount: round2(loan),
                ufmip: round2(ufmip),
                mipDuration: ltv > 90 ? 'Life of loan (LTV above 90%)' : '11 years (LTV 90% or below)',
            };
        },
        disclaimer: 'Estimate only. Uses current FHA annual MIP rates (0.55% above 95% LTV, 0.50% at or below, for terms over 15 years). Excludes HOA dues and any seller concessions. Your lender quote governs.',
        sourceLabel: 'HUD Mortgagee Letter 2023-05 (FHA MIP rates)',
        sourceHref: 'https://www.hud.gov/program_offices/administration/hudclips/letters/mortgagee',
    },
    'us-personal-loan': {
        id: 'us-personal-loan',
        title: 'Personal Loan Payment Calculator',
        description: 'Estimate your monthly personal loan payment, total interest, and payoff time — including any origination fee and extra monthly payments.',
        currency: 'USD',
        inputs: [
            { id: 'amount', label: 'Loan amount', type: 'number', min: 0, step: 100, defaultValue: 10000, prefix: '$' },
            { id: 'apr', label: 'Interest rate (APR)', type: 'number', min: 0, max: 40, step: 0.1, defaultValue: 10, suffix: '%' },
            { id: 'termMonths', label: 'Term (months)', type: 'number', min: 1, max: 240, step: 1, defaultValue: 36 },
            { id: 'originationFeePct', label: 'Origination fee (optional)', type: 'number', min: 0, max: 20, step: 0.25, defaultValue: 0, suffix: '%' },
            { id: 'extraPayment', label: 'Extra monthly payment (optional)', type: 'number', min: 0, step: 10, defaultValue: 0, prefix: '$' },
        ],
        outputs: [
            { key: 'monthlyPayment', label: 'Monthly payment', format: 'money', highlight: true },
            { key: 'payoffMonths', label: 'Payoff time (months)', format: 'number' },
            { key: 'totalInterest', label: 'Total interest', format: 'money' },
            { key: 'totalCost', label: 'Total cost (payments + fee)', format: 'money' },
        ],
        formula: (v) => {
            const r = loanWithExtra(Number(v.amount) || 0, Number(v.apr) || 0, Number(v.termMonths) || 1, Number(v.originationFeePct) || 0, Number(v.extraPayment) || 0);
            return { monthlyPayment: r.monthly, payoffMonths: r.months, totalInterest: r.totalInterest, totalCost: round2(r.totalPaid + r.fee) };
        },
        disclaimer: 'Estimate only. Assumes fixed APR, monthly payments, and no prepayment penalty. Your lender quote governs.',
        sourceLabel: 'Standard loan amortization formula',
        sourceHref: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-personal-loan-en-2125/',
    },
    'uk-income-tax': {
        id: 'uk-income-tax',
        title: 'UK Income Tax Calculator',
        description: 'Estimate Income Tax + employee National Insurance for employment income in England, Wales, and Northern Ireland (standard case, no Scotland).',
        currency: 'GBP',
        inputs: [
            { id: 'grossIncome', label: 'Gross annual income', type: 'number', min: 0, step: 500, defaultValue: 60000, prefix: '£' },
            { id: 'pension', label: 'Annual pension contributions (optional)', type: 'number', min: 0, step: 100, defaultValue: 0, prefix: '£', hint: 'Deducted from taxable income and take-home' },
            { id: 'taxYear', label: 'Tax year', type: 'select', defaultValue: '2026/27', options: [{ value: '2026/27', label: '2026/27' }, { value: '2025/26', label: '2025/26' }] },
        ],
        outputs: [
            { key: 'takeHome', label: 'Estimated take-home pay', format: 'money', highlight: true },
            { key: 'incomeTax', label: 'Income Tax', format: 'money' },
            { key: 'nationalInsurance', label: 'National Insurance (Class 1)', format: 'money' },
            { key: 'effectiveRate', label: 'Effective deduction rate', format: 'percent' },
        ],
        formula: (v) => {
            const gross = Number(v.grossIncome) || 0;
            const pension = Number(v.pension) || 0;
            // Personal Allowance £12,570, tapering £1 per £2 over £100,000 (both years, bands frozen).
            const pa = Math.max(0, 12570 - Math.max(0, (gross - 100000) / 2));
            const taxable = Math.max(0, gross - pension - pa);
            const band1 = Math.min(taxable, 37700);
            const band2 = Math.min(Math.max(0, taxable - 37700), 74870);
            const band3 = Math.max(0, taxable - 125140);
            const tax = band1 * 0.2 + band2 * 0.4 + band3 * 0.45;
            const ni = Math.min(Math.max(0, gross - 12570), 37700) * 0.08 + Math.max(0, gross - 50270) * 0.02;
            const takeHome = gross - pension - tax - ni;
            return {
                takeHome: round2(takeHome),
                incomeTax: round2(tax),
                nationalInsurance: round2(ni),
                effectiveRate: gross > 0 ? round2(((tax + ni) / gross) * 100) : 0,
            };
        },
        disclaimer: 'Estimate only, standard case: employment income, England/Wales/NI, no Scotland, no student-loan repayments, no Marriage Allowance, no blind person allowance. HMRC / your P60 governs.',
        sourceLabel: 'HMRC income tax rates (GOV.UK)',
        sourceHref: 'https://www.gov.uk/guidance/rates-and-allowances-income-tax-personal-allowances-and-reliefs',
    },
    'uk-child-benefit': {
        id: 'uk-child-benefit',
        title: 'UK Child Benefit Calculator',
        description: 'Estimate Child Benefit for your children, including the High Income Child Benefit Charge (HICBC) when the highest earner is over £60,000.',
        currency: 'GBP',
        inputs: [
            { id: 'children', label: 'Number of children', type: 'number', min: 1, max: 12, step: 1, defaultValue: 2 },
            { id: 'taxYear', label: 'Tax year', type: 'select', defaultValue: '2026/27', options: [{ value: '2026/27', label: '2026/27' }, { value: '2025/26', label: '2025/26' }] },
            { id: 'highestIncome', label: "Highest earner's adjusted net income (optional)", type: 'number', min: 0, step: 500, defaultValue: 0, prefix: '£', hint: 'Leave 0 if under £60,000 — no charge applies' },
        ],
        outputs: [
            { key: 'annualBenefit', label: 'Annual Child Benefit', format: 'money', highlight: true },
            { key: 'weeklyBenefit', label: 'Weekly', format: 'money' },
            { key: 'per4Weeks', label: 'Per 4-week payment', format: 'money' },
            { key: 'hicbc', label: 'High Income charge (HICBC)', format: 'money' },
            { key: 'netAnnual', label: 'Net benefit after charge', format: 'money' },
        ],
        formula: (v) => {
            const kids = Math.max(1, Math.floor(Number(v.children) || 1));
            const rates = v.taxYear === '2026/27' ? { first: 27.05, extra: 17.9 } : { first: 26.05, extra: 17.25 };
            const weekly = rates.first + (kids - 1) * rates.extra;
            const annual = weekly * 52;
            const income = Number(v.highestIncome) || 0;
            let charge = 0;
            if (income > 60000) {
                charge = income >= 80000 ? annual : annual * ((income - 60000) / 200) * 0.01;
            }
            return {
                annualBenefit: round2(annual),
                weeklyBenefit: round2(weekly),
                per4Weeks: round2(weekly * 4),
                hicbc: round2(charge),
                netAnnual: round2(annual - charge),
            };
        },
        disclaimer: 'Estimate only. Uses the official rates for the selected tax year. HICBC uses adjusted net income (enter pension/Gift Aid-adjusted figure if applicable). HMRC governs.',
        sourceLabel: 'Child Benefit rates (GOV.UK)',
        sourceHref: 'https://www.gov.uk/child-benefit-rates',
    },
    'ca-ei': {
        id: 'ca-ei',
        title: 'Canada EI Benefit Calculator',
        description: 'Estimate your weekly Employment Insurance benefit: 55% of average weekly insurable earnings, up to the annual maximum.',
        currency: 'CAD',
        inputs: [
            { id: 'annualEarnings', label: 'Annual insurable earnings', type: 'number', min: 0, step: 500, defaultValue: 60000, prefix: '$' },
            { id: 'benefitYear', label: 'Benefit year', type: 'select', defaultValue: '2026', options: [{ value: '2026', label: '2026' }, { value: '2025', label: '2025' }] },
        ],
        outputs: [
            { key: 'weeklyBenefit', label: 'Estimated weekly EI benefit', format: 'money', highlight: true },
            { key: 'annualPremium', label: 'Estimated annual EI premium', format: 'money', hint: 'Employee premium on insurable earnings' },
            { key: 'maxWeekly', label: 'Maximum weekly benefit (this year)', format: 'money' },
        ],
        formula: (v) => {
            const earnings = Number(v.annualEarnings) || 0;
            const y2026 = v.benefitYear === '2026';
            const mie = y2026 ? 68900 : 65700;
            const maxWeekly = y2026 ? 729 : 695;
            const weekly = Math.min(0.55 * (earnings / 52), maxWeekly);
            const premium = Math.min(earnings, mie) * (y2026 ? 0.0163 : 0.0164);
            return { weeklyBenefit: round2(weekly), annualPremium: round2(premium), maxWeekly };
        },
        disclaimer: 'Estimate only. Service Canada uses your best 14–22 weeks of insurable earnings (by regional unemployment rate), not a simple annual average, and benefit duration (14–45 weeks) depends on hours and region. Quebec has a separate plan. Service Canada governs.',
        sourceLabel: 'Employment Insurance (Canada.ca)',
        sourceHref: 'https://www.canada.ca/en/services/benefits/ei.html',
    },
    'ca-personal-loan': {
        id: 'ca-personal-loan',
        title: 'Personal Loan Payment Calculator (Canada)',
        description: 'Estimate your monthly personal loan payment, total interest, and payoff time — including any origination/admin fee and extra monthly payments.',
        currency: 'CAD',
        inputs: [
            { id: 'amount', label: 'Loan amount', type: 'number', min: 0, step: 100, defaultValue: 15000, prefix: '$' },
            { id: 'apr', label: 'Interest rate (APR)', type: 'number', min: 0, max: 40, step: 0.1, defaultValue: 9, suffix: '%' },
            { id: 'termMonths', label: 'Term (months)', type: 'number', min: 1, max: 240, step: 1, defaultValue: 48 },
            { id: 'originationFeePct', label: 'Origination/admin fee (optional)', type: 'number', min: 0, max: 20, step: 0.25, defaultValue: 0, suffix: '%' },
            { id: 'extraPayment', label: 'Extra monthly payment (optional)', type: 'number', min: 0, step: 10, defaultValue: 0, prefix: '$' },
        ],
        outputs: [
            { key: 'monthlyPayment', label: 'Monthly payment', format: 'money', highlight: true },
            { key: 'payoffMonths', label: 'Payoff time (months)', format: 'number' },
            { key: 'totalInterest', label: 'Total interest', format: 'money' },
            { key: 'totalCost', label: 'Total cost (payments + fee)', format: 'money' },
        ],
        formula: (v) => {
            const r = loanWithExtra(Number(v.amount) || 0, Number(v.apr) || 0, Number(v.termMonths) || 1, Number(v.originationFeePct) || 0, Number(v.extraPayment) || 0);
            return { monthlyPayment: r.monthly, payoffMonths: r.months, totalInterest: r.totalInterest, totalCost: round2(r.totalPaid + r.fee) };
        },
        disclaimer: 'Estimate only. Assumes fixed APR, monthly payments, and no prepayment penalty. Your lender quote governs.',
        sourceLabel: 'Standard loan amortization formula',
        sourceHref: 'https://www.canada.ca/en/financial-consumer-agency/services/loans/personal-loans.html',
    },
    'gcc-gratuity': {
        id: 'gcc-gratuity',
        title: 'GCC Gratuity Calculator',
        description: 'Estimate your end-of-service gratuity in the UAE, Saudi Arabia, Qatar, Kuwait, or Oman — each country uses its own formula, wage base, and resignation rules. Pick your country to apply the right one.',
        currency: 'AED',
        currencyInput: 'country',
        currencyMap: { ae: 'AED', sa: 'SAR', qa: 'QAR', kw: 'KWD', om: 'OMR' },
        inputs: [
            { id: 'country', label: 'Country of employment', type: 'select', defaultValue: 'ae', options: [
                { value: 'ae', label: 'United Arab Emirates (AED)' },
                { value: 'sa', label: 'Saudi Arabia (SAR)' },
                { value: 'qa', label: 'Qatar (QAR)' },
                { value: 'kw', label: 'Kuwait (KWD)' },
                { value: 'om', label: 'Oman (OMR)' },
            ] },
            { id: 'monthlyWage', label: 'Last monthly wage', type: 'number', min: 0, step: 100, defaultValue: 10000, hint: 'Wage base differs by country: UAE / Qatar / Oman use basic wage only; Kuwait uses last total wage (basic + regular allowances); Saudi uses last wage — check your contract for which allowances count.' },
            { id: 'serviceYears', label: 'Years of service', type: 'number', min: 0, max: 50, step: 0.25, defaultValue: 7, hint: 'Full years + partial year as a decimal, e.g. 7.5. Enter service time net of unpaid-leave days.' },
            { id: 'leavingType', label: 'How did the job end?', type: 'select', defaultValue: 'employer', options: [
                { value: 'employer', label: 'Employer ended it / contract expired' },
                { value: 'resign', label: 'I resigned' },
            ] },
            { id: 'qatarDaysPerYear', label: 'Qatar only: days per year in your contract', type: 'number', min: 21, max: 60, step: 1, defaultValue: 21, hint: 'Only used for Qatar. The legal minimum is 21 days; your contract may give more.' },
            { id: 'omanOldLawYears', label: 'Oman only: years under the old law (before 31 July 2023)', type: 'number', min: 0, max: 50, step: 0.25, defaultValue: 0, hint: 'Only used for Oman. Service before 31 July 2023 uses the old formula; later service uses one full month per year.' },
        ],
        outputs: [
            { key: 'gratuity', label: 'Estimated gratuity', format: 'money', highlight: true },
            { key: 'fullEntitlement', label: 'Full entitlement before resignation share', format: 'money' },
            { key: 'resignationShare', label: 'Resignation share applied', format: 'text' },
            { key: 'wageBase', label: 'Wage base used', format: 'text' },
            { key: 'ruleSummary', label: 'Rule applied', format: 'text' },
            { key: 'eligibility', label: 'Eligibility', format: 'text' },
        ],
        formula: (v) => {
            const country = String(v.country ?? 'ae');
            const wage = Number(v.monthlyWage) || 0;
            const years = Number(v.serviceYears) || 0;
            const resigned = v.leavingType === 'resign';
            const qDays = Math.max(21, Number(v.qatarDaysPerYear) || 21);
            const omOld = Math.min(Math.max(0, Number(v.omanOldLawYears) || 0), years);
            let full = 0;
            let share = 1;
            let shareLabel = 'Full (100%)';
            let wageBase = '';
            let rule = '';
            let eligibility = '';
            let gated = false;
            if (country === 'ae') {
                // Federal Decree-Law 33/2021, Art. 51: 21 days/yr first 5 yrs,
                // 30 days/yr after; cap 2 years' total wage. Cap applied here
                // against basic wage (the only input); legal cap uses total wage.
                const daily = wage / 30;
                full = (21 * Math.min(years, 5) + 30 * Math.max(0, years - 5)) * daily;
                full = Math.min(full, wage * 24);
                wageBase = 'Basic wage ÷ 30 = daily wage';
                rule = 'UAE: 21 days/yr first 5 yrs, 30 days/yr after; capped at 2 years\u2019 wage (cap applied against basic wage — see note)';
                eligibility = years < 1 ? 'Not yet eligible — 1+ year of continuous service required' : 'Eligible (1+ year of service). Resignation does not reduce the award.';
                gated = years < 1;
            } else if (country === 'sa') {
                // Saudi Labour Law, Art. 84: half a month/yr first 5 yrs, one
                // month/yr after, on last wage. Art. 85 resignation shares:
                // <2y none; 2–5y one-third; >5–<10y two-thirds; 10y+ full.
                full = (0.5 * Math.min(years, 5) + Math.max(0, years - 5)) * wage;
                wageBase = 'Last wage, monthly basis';
                rule = 'Saudi Arabia: ½ month/yr first 5 yrs, 1 month/yr after (Labour Law Art. 84)';
                if (resigned) {
                    if (years < 2) { share = 0; shareLabel = 'None — resigned under 2 years (Art. 85)'; }
                    else if (years <= 5) { share = 1 / 3; shareLabel = 'One-third (1/3) — resigned after 2–5 years (Art. 85)'; }
                    else if (years < 10) { share = 2 / 3; shareLabel = 'Two-thirds (2/3) — resigned after 5–10 years (Art. 85)'; }
                    else { shareLabel = 'Full (100%) — resigned after 10+ years (Art. 85)'; }
                }
                eligibility = 'Eligible. Employer-ended: no minimum service period in Art. 84; resignation shares per Art. 85.';
            } else if (country === 'qa') {
                // Labour Law No. 14 of 2004, Art. 54: minimum 3 weeks'
                // (21 days) basic wage per year; 1+ year; last basic wage.
                // No resignation reduction, no cap.
                full = (wage / 30) * qDays * years;
                wageBase = 'Basic wage ÷ 30 = daily wage';
                rule = `Qatar: ${qDays} days/yr, every year (Labour Law No. 14 of 2004, Art. 54 — legal minimum 21 days)`;
                eligibility = years < 1 ? 'Not yet eligible — 1+ year of continuous service required' : 'Eligible (1+ year). Resignation does not reduce the award.';
                gated = years < 1;
            } else if (country === 'kw') {
                // Labour Law No. 6 of 2010, Art. 51: 15 days/yr first 5 yrs,
                // 30 days/yr after; daily wage = wage ÷ 26 (Art. 67);
                // cap 18 months' wage. Art. 53 resignation shares.
                const days = 15 * Math.min(years, 5) + 30 * Math.max(0, years - 5);
                full = Math.min(days * (wage / 26), wage * 18);
                wageBase = 'Last total wage (basic + regular allowances) ÷ 26 = daily wage';
                rule = 'Kuwait: 15 days/yr first 5 yrs, 30 days/yr after; daily wage = wage ÷ 26; capped at 18 months\u2019 wage (Labour Law No. 6 of 2010, Art. 51)';
                if (resigned) {
                    if (years < 3) { share = 0; shareLabel = 'None — resigned under 3 years (Art. 53)'; }
                    else if (years < 5) { share = 1 / 2; shareLabel = 'Half (1/2) — resigned after 3–5 years (Art. 53)'; }
                    else if (years < 10) { share = 2 / 3; shareLabel = 'Two-thirds (2/3) — resigned after 5–10 years (Art. 53)'; }
                    else { shareLabel = 'Full (100%) — resigned after 10+ years (Art. 53)'; }
                }
                eligibility = years < 1 ? 'Not yet eligible — 1+ year of continuous service required' : 'Eligible (1+ year of service).';
                gated = years < 1;
            } else {
                // Oman, Labour Law RD 53/2023, Art. 61: not less than one
                // basic wage per year of service. Pre-31 Jul 2023 service
                // under the old law: 15 days/yr (½ month) first 3 yrs,
                // one month/yr after. No resignation reduction verified.
                const oldPart = (0.5 * Math.min(omOld, 3) + Math.max(0, omOld - 3)) * wage;
                const newPart = (years - omOld) * wage;
                full = oldPart + newPart;
                wageBase = 'Basic wage, monthly basis';
                rule = 'Oman: pre-31 Jul 2023 years at ½ month/yr first 3 yrs then 1 month/yr; later years at 1 month/yr (Labour Law RD 53/2023, Art. 61)';
                eligibility = 'Check your contract: a savings/provident system is being phased in for expats — confirm whether gratuity or the fund applies to you.';
            }
            return {
                gratuity: round2(gated ? 0 : full * share),
                fullEntitlement: round2(gated ? 0 : full),
                resignationShare: resigned ? shareLabel : 'Not applicable — employer ended the contract',
                wageBase,
                ruleSummary: rule,
                eligibility,
            };
        },
        disclaimer: 'Estimate only. Bahrain is not included: since 1 March 2024 expat gratuity there is paid through the SIO fund system, not the old lump-sum formula — use the SIO portal. Private-sector only; domestic workers, government staff, and DIFC/ADGM (UAE) have separate regimes. Contract terms can be more generous than the legal minimum — check your contract. Your settlement statement and the labour authority govern.',
        sourceLabel: 'UAE Federal Decree-Law 33/2021 + GCC labour laws — see Official rules below',
        sourceHref: 'https://mohre.gov.ae/en/media-center/news/15/11/2021/uae-president-issues-federal-decree-law-on-regulation-of-labour-relations-in-private-sector',
    },
    'uk-ir35': {
        id: 'uk-ir35',
        title: 'IR35 Take-Home Calculator',
        description: 'Compare take-home pay inside IR35 (umbrella) vs outside IR35 (your own limited company) for the same contract — and the inside day rate you would need to match the outside take-home.',
        currency: 'GBP',
        inputs: [
            { id: 'dayRate', label: 'Day rate', type: 'number', min: 0, step: 5, defaultValue: 500, prefix: '£' },
            { id: 'daysPerYear', label: 'Billable days per year', type: 'number', min: 0, max: 365, step: 1, defaultValue: 220, hint: '220 ≈ 44 weeks × 5 days, allowing for holidays and gaps between contracts' },
            { id: 'taxYear', label: 'Tax year', type: 'select', defaultValue: '2026/27', options: [{ value: '2026/27', label: '2026/27' }, { value: '2025/26', label: '2025/26' }] },
            { id: 'umbrellaMarginMonthly', label: 'Umbrella margin per month', type: 'number', min: 0, step: 1, defaultValue: 25, prefix: '£', hint: 'Typical £20–£30/month. Enter your umbrella company’s actual margin.' },
            { id: 'accountancyAnnual', label: 'Accountancy cost per year (Ltd only)', type: 'number', min: 0, step: 50, defaultValue: 1800, prefix: '£', hint: 'Typical £1,200–£2,400/year. Enter your accountant’s actual fee.' },
            { id: 'businessCostsAnnual', label: 'Other business costs per year (Ltd only)', type: 'number', min: 0, step: 50, defaultValue: 0, prefix: '£', hint: 'Insurance, software, equipment, training — costs the company pays before profit.' },
            { id: 'directorSalary', label: 'Director salary (Ltd)', type: 'select', defaultValue: '12570', options: [{ value: '12570', label: '£12,570 — use the full Personal Allowance' }, { value: '5000', label: '£5,000 — no employer NI' }] },
        ],
        outputs: [
            { key: 'takeHomeInsideAnnual', label: 'Inside IR35 — take-home (annual)', format: 'money', highlight: true },
            { key: 'takeHomeInsideMonthly', label: 'Inside IR35 — take-home (monthly)', format: 'money' },
            { key: 'insideEmployerNI', label: 'Inside — employer NI (from your rate)', format: 'money' },
            { key: 'insideIncomeTax', label: 'Inside — Income Tax', format: 'money' },
            { key: 'insideEmployeeNI', label: 'Inside — employee NI', format: 'money' },
            { key: 'takeHomeOutsideAnnual', label: 'Outside IR35 — take-home (annual)', format: 'money', highlight: true },
            { key: 'takeHomeOutsideMonthly', label: 'Outside IR35 — take-home (monthly)', format: 'money' },
            { key: 'corporationTax', label: 'Outside — Corporation Tax', format: 'money' },
            { key: 'dividendTax', label: 'Outside — dividend tax', format: 'money' },
            { key: 'difference', label: 'Extra take-home outside IR35', format: 'money' },
            { key: 'equivalentInsideDayRate', label: 'Inside day rate to match outside take-home', format: 'money', hint: 'Per day, same billable days' },
        ],
        formula: (v) => {
            const assignment = (Number(v.dayRate) || 0) * (Number(v.daysPerYear) || 0);
            const marginAnnual = (Number(v.umbrellaMarginMonthly) || 0) * 12;
            const inside = ir35InsideTakeHome(assignment, marginAnnual);
            const salary = Number(v.directorSalary) || 12570;
            const employerNILtd = 0.15 * Math.max(0, salary - 5000);
            const profit = assignment - salary - employerNILtd - (Number(v.accountancyAnnual) || 0) - (Number(v.businessCostsAnnual) || 0);
            const ct = ukCorporationTax(profit);
            const dividends = Math.max(0, profit - ct);
            const divTax = profit > 0 ? ukDividendTax(dividends, salary, String(v.taxYear ?? '2026/27')) : 0;
            const takeHomeOutside = profit > 0
                ? salary + dividends - divTax
                : Math.max(0, assignment - employerNILtd - (Number(v.accountancyAnnual) || 0) - (Number(v.businessCostsAnnual) || 0));
            let equiv = 0;
            const days = Number(v.daysPerYear) || 0;
            if (days > 0 && takeHomeOutside > 0) {
                let lo = 0;
                let hi = Math.max(assignment * 3, assignment + 100000);
                for (let i = 0; i < 80; i++) {
                    const mid = (lo + hi) / 2;
                    if (ir35InsideTakeHome(mid, marginAnnual).takeHome < takeHomeOutside) lo = mid; else hi = mid;
                }
                equiv = hi / days;
            }
            return {
                takeHomeInsideAnnual: round2(inside.takeHome),
                takeHomeInsideMonthly: round2(inside.takeHome / 12),
                insideEmployerNI: round2(inside.employerNI),
                insideIncomeTax: round2(inside.incomeTax),
                insideEmployeeNI: round2(inside.employeeNI),
                takeHomeOutsideAnnual: round2(takeHomeOutside),
                takeHomeOutsideMonthly: round2(takeHomeOutside / 12),
                corporationTax: round2(ct),
                dividendTax: round2(divTax),
                difference: round2(takeHomeOutside - inside.takeHome),
                equivalentInsideDayRate: round2(equiv),
            };
        },
        disclaimer: 'Estimate only. Standard case: England, Wales or Northern Ireland; single-director company; no pension contributions, student-loan repayments, or other income; no Employment Allowance (not available to single-director companies); no apprenticeship levy; umbrella margin as entered. Your accountant or umbrella company governs.',
        sourceLabel: 'HMRC — off-payroll working (IR35), dividend tax, Corporation Tax, NI rates',
        sourceHref: 'https://www.gov.uk/guidance/understanding-off-payroll-working-ir35',
    },
    'us-student-loan-pslf': {
        id: 'us-student-loan-pslf',
        title: 'US Student Loan / PSLF Repayment Comparator',
        description: 'Compare all five federal repayment plans side by side — Standard, IBR, PAYE, ICR, and the new RAP — and see what PSLF would forgive after 120 qualifying payments under the cheapest plan.',
        currency: 'USD',
        inputs: [
            { id: 'loanBalance', label: 'Current federal loan balance', type: 'number', min: 0, step: 500, defaultValue: 40000, prefix: '$', hint: 'Your balance today, from your servicer dashboard — not the amount you originally borrowed.' },
            { id: 'interestRate', label: 'Weighted average interest rate', type: 'number', min: 0, max: 25, step: 0.1, defaultValue: 6, suffix: '%', hint: 'If you have several loans at different rates, use the balance-weighted average.' },
            { id: 'annualIncome', label: 'Annual income (AGI)', type: 'number', min: 0, step: 1000, defaultValue: 55000, prefix: '$', hint: 'Adjusted gross income — joint income if you file jointly.' },
            { id: 'familySize', label: 'Family size', type: 'number', min: 1, max: 8, step: 1, defaultValue: 1, hint: 'You + spouse (if any) + dependents. Drives the poverty-line calculation for IBR / PAYE / ICR.' },
            { id: 'dependents', label: 'Dependents on your tax return', type: 'number', min: 0, max: 10, step: 1, defaultValue: 0, hint: 'Only used by RAP: −$50/month per dependent.' },
            { id: 'borrowerEra', label: 'When were your loans disbursed?', type: 'select', defaultValue: 'pre-2026', options: [
                { value: 'pre-2026', label: 'Before 1 July 2026 — legacy plans available' },
                { value: 'post-2026', label: 'On/after 1 July 2026 — RAP or Tiered Standard only' },
            ] },
            { id: 'qualifyingPayments', label: 'Qualifying PSLF payments already made', type: 'number', min: 0, max: 120, step: 1, defaultValue: 0, hint: 'From your servicer dashboard / PSLF Help Tool count. 0 if you have not started PSLF.' },
        ],
        outputs: [
            { key: 'monthlyStandard', label: 'Standard 10-year — monthly', format: 'money' },
            { key: 'totalStandard', label: 'Standard 10-year — total paid', format: 'money' },
            { key: 'monthlyIbr', label: 'IBR — monthly', format: 'money' },
            { key: 'totalIbr', label: 'IBR — total paid (20 yrs)', format: 'money' },
            { key: 'forgivenIbr', label: 'IBR — forgiven after 20 yrs', format: 'money' },
            { key: 'monthlyPaye', label: 'PAYE — monthly', format: 'money' },
            { key: 'totalPaye', label: 'PAYE — total paid (20 yrs)', format: 'money' },
            { key: 'forgivenPaye', label: 'PAYE — forgiven after 20 yrs', format: 'money' },
            { key: 'monthlyIcr', label: 'ICR — monthly', format: 'money' },
            { key: 'totalIcr', label: 'ICR — total paid (25 yrs)', format: 'money' },
            { key: 'forgivenIcr', label: 'ICR — forgiven after 25 yrs', format: 'money' },
            { key: 'monthlyRap', label: 'RAP — monthly', format: 'money' },
            { key: 'totalRap', label: 'RAP — total paid (30 yrs)', format: 'money' },
            { key: 'forgivenRap', label: 'RAP — forgiven after 30 yrs', format: 'money' },
            { key: 'pslfPlan', label: 'PSLF — cheapest qualifying plan', format: 'text' },
            { key: 'pslfMonthly', label: 'PSLF — monthly payment', format: 'money' },
            { key: 'pslfMonthsLeft', label: 'PSLF — payments left to 120', format: 'number' },
            { key: 'pslfTotalPaid', label: 'PSLF — total you would still pay', format: 'money', highlight: true },
            { key: 'pslfForgiven', label: 'PSLF — balance forgiven (tax-free)', format: 'money', highlight: true },
            { key: 'planAvailability', label: 'Which plans apply to you', format: 'text' },
        ],
        formula: (v) => {
            const balance = Number(v.loanBalance) || 0;
            const rate = Number(v.interestRate) || 0;
            const agi = Number(v.annualIncome) || 0;
            const fam = Math.min(8, Math.max(1, Math.floor(Number(v.familySize) || 1)));
            const deps = Math.max(0, Math.floor(Number(v.dependents) || 0));
            const post2026 = v.borrowerEra === 'post-2026';
            const made = Math.min(120, Math.max(0, Math.floor(Number(v.qualifyingPayments) || 0)));
            const fpl = FPL_2026[fam - 1];
            const notAvailable = 'Not available — only for loans disbursed before 1 July 2026';
            const standardMonthly = amortize(balance, rate, 120);
            const standardTotal = round2(standardMonthly * 120);
            // IBR (new-borrower terms): 10% of discretionary income
            // (AGI − 150% FPL), capped at the 10-year Standard payment.
            const disc150 = Math.max(0, agi - 1.5 * fpl);
            const ibrMonthly = Math.min((0.1 * disc150) / 12, standardMonthly);
            const ibr = post2026 ? { totalPaid: 0, remaining: 0 } : simulateRepayment(balance, rate, ibrMonthly, 240);
            // PAYE: same 10% formula, 20-year forgiveness.
            const payeMonthly = Math.min((0.1 * disc150) / 12, standardMonthly);
            const paye = post2026 ? { totalPaid: 0, remaining: 0 } : simulateRepayment(balance, rate, payeMonthly, 240);
            // ICR: lesser of 20% of discretionary income (AGI − 100% FPL)
            // and a 12-year amortized payment. The official formula also
            // applies an income percentage factor to the 12-year figure,
            // so your servicer may quote slightly less — see Official rules.
            const disc100 = Math.max(0, agi - fpl);
            const icrMonthly = Math.min((0.2 * disc100) / 12, amortize(balance, rate, 144));
            const icr = post2026 ? { totalPaid: 0, remaining: 0 } : simulateRepayment(balance, rate, icrMonthly, 300);
            // RAP: 1–10% of AGI by band, −$50 per dependent, $10 floor.
            const rapPay = rapMonthly(agi, deps);
            const rap = simulateRepayment(balance, rate, rapPay, 360);
            // PSLF: cheapest qualifying IDR plan for the borrower's era,
            // simulated over the payments remaining to 120.
            const candidates: { name: string; monthly: number }[] = post2026
                ? [{ name: 'RAP', monthly: rapPay }]
                : [
                    { name: 'IBR', monthly: ibrMonthly },
                    { name: 'PAYE', monthly: payeMonthly },
                    { name: 'ICR', monthly: icrMonthly },
                    { name: 'RAP', monthly: rapPay },
                ];
            const cheapest = candidates.reduce((a, b) => (b.monthly < a.monthly ? b : a));
            const remaining = 120 - made;
            const pslf = simulateRepayment(balance, rate, cheapest.monthly, remaining);
            return {
                monthlyStandard: round2(standardMonthly),
                totalStandard: standardTotal,
                monthlyIbr: post2026 ? notAvailable : round2(ibrMonthly),
                totalIbr: post2026 ? notAvailable : ibr.totalPaid,
                forgivenIbr: post2026 ? notAvailable : ibr.remaining,
                monthlyPaye: post2026 ? notAvailable : round2(payeMonthly),
                totalPaye: post2026 ? notAvailable : paye.totalPaid,
                forgivenPaye: post2026 ? notAvailable : paye.remaining,
                monthlyIcr: post2026 ? notAvailable : round2(icrMonthly),
                totalIcr: post2026 ? notAvailable : icr.totalPaid,
                forgivenIcr: post2026 ? notAvailable : icr.remaining,
                monthlyRap: round2(rapPay),
                totalRap: rap.totalPaid,
                forgivenRap: rap.remaining,
                pslfPlan: cheapest.name,
                pslfMonthly: round2(cheapest.monthly),
                pslfMonthsLeft: remaining,
                pslfTotalPaid: pslf.totalPaid,
                pslfForgiven: pslf.remaining,
                planAvailability: post2026
                    ? 'Loans on/after 1 July 2026: RAP or the Tiered Standard plan only. PAYE and ICR are closed to you.'
                    : 'Pre-July-2026 loans: IBR, PAYE, ICR, and RAP are all open to you. PAYE and ICR close on 1 July 2028 — confirm the current deadline with your servicer.',
            };
        },
        disclaimer: 'Estimate only. Income is assumed constant for the whole term — real IDR payments are recertified yearly and change with income. IBR uses new-borrower terms (10%, 20 years); borrowers whose first loan predates 1 July 2014 may be on old-borrower IBR (15%, 25 years). ICR omits the official income percentage factor (see Official rules). PSLF needs Direct Loans, full-time qualifying employment, and on-time payments — confirm your qualifying count on your servicer dashboard. Use the official Repayment Calculator on StudentAid.gov for your binding figures.',
        sourceLabel: 'Federal Student Aid — IDR plan FAQs + servicer RAP terms',
        sourceHref: 'https://studentaid.gov/articles/faqs-idr-plan/',
    },
    'us-import-duty': {
        id: 'us-import-duty',
        title: 'US Import Duty / Landed Cost Calculator',
        description: 'Work out the true landed cost of an import: duty on your HTS rate, any extra tariffs, the Merchandise Processing Fee, Harbor Maintenance Fee for ocean freight, and brokerage — per shipment and per unit.',
        currency: 'USD',
        inputs: [
            { id: 'customsValue', label: 'Customs value of goods (FOB)', type: 'number', min: 0, step: 100, defaultValue: 10000, prefix: '$', hint: 'Price actually paid for the goods, excluding international freight and insurance (19 U.S.C. §1401a).' },
            { id: 'dutyRatePct', label: 'HTS duty rate', type: 'number', min: 0, max: 100, step: 0.1, defaultValue: 5, suffix: '%', hint: 'Look up your product’s HTS code and column-1 rate at hts.usitc.gov. Enter 0 if duty-free (e.g. USMCA-qualifying).' },
            { id: 'additionalTariffPct', label: 'Extra tariffs, if any (Section 301 / 232 / IEEPA)', type: 'number', min: 0, max: 200, step: 0.5, defaultValue: 0, suffix: '%', hint: 'Additional duties stacked on top of the HTS rate. Enter 0 if none apply — tariff rates change often, verify per HTS + origin.' },
            { id: 'freight', label: 'International freight', type: 'number', min: 0, step: 50, defaultValue: 0, prefix: '$' },
            { id: 'insurance', label: 'Insurance', type: 'number', min: 0, step: 10, defaultValue: 0, prefix: '$' },
            { id: 'brokerageFees', label: 'Brokerage + entry filing fees', type: 'number', min: 0, step: 25, defaultValue: 0, prefix: '$', hint: 'From your broker/forwarder quote — varies by broker, not set by CBP.' },
            { id: 'entryType', label: 'Entry type', type: 'select', defaultValue: 'formal', options: [
                { value: 'formal', label: 'Formal entry (shipment $2,500+) — MPF ad valorem' },
                { value: 'informal', label: 'Informal entry (under $2,500) — flat MPF' },
            ] },
            { id: 'informalMpf', label: 'Informal-entry MPF flat fee', type: 'number', min: 0, step: 0.01, defaultValue: 8.06, prefix: '$', hint: 'Only used for informal entries. CBP informal MPF tiers: $2.69 / $8.06 / $12.09 — confirm your tier with your broker.' },
            { id: 'oceanShipment', label: 'Ocean shipment (Harbor Maintenance Fee applies)', type: 'checkbox', defaultValue: false },
            { id: 'units', label: 'Number of units in the shipment', type: 'number', min: 1, step: 1, defaultValue: 1 },
        ],
        outputs: [
            { key: 'duty', label: 'Customs duty (HTS rate)', format: 'money' },
            { key: 'additionalTariff', label: 'Extra tariffs', format: 'money' },
            { key: 'mpf', label: 'Merchandise Processing Fee (MPF)', format: 'money' },
            { key: 'hmf', label: 'Harbor Maintenance Fee (HMF, ocean only)', format: 'money' },
            { key: 'totalImportCharges', label: 'Total import charges (duty + tariffs + fees + brokerage)', format: 'money', highlight: true },
            { key: 'landedCost', label: 'Total landed cost', format: 'money', highlight: true },
            { key: 'landedPerUnit', label: 'Landed cost per unit', format: 'money' },
            { key: 'entryTypeText', label: 'Entry type applied', format: 'text' },
        ],
        formula: (v) => {
            const value = Number(v.customsValue) || 0;
            const duty = value * ((Number(v.dutyRatePct) || 0) / 100);
            const addl = value * ((Number(v.additionalTariffPct) || 0) / 100);
            const formal = v.entryType !== 'informal';
            const mpf = formal ? usMpfFormal(value) : (Number(v.informalMpf) || 0);
            const hmf = v.oceanShipment ? value * 0.00125 : 0;
            const brokerage = Number(v.brokerageFees) || 0;
            const totalCharges = duty + addl + mpf + hmf + brokerage;
            const landed = value + (Number(v.freight) || 0) + (Number(v.insurance) || 0) + totalCharges;
            const units = Math.max(1, Math.floor(Number(v.units) || 1));
            return {
                duty: round2(duty),
                additionalTariff: round2(addl),
                mpf: round2(mpf),
                hmf: round2(hmf),
                totalImportCharges: round2(totalCharges),
                landedCost: round2(landed),
                landedPerUnit: round2(landed / units),
                entryTypeText: formal
                    ? 'Formal entry — MPF 0.3464% of value, FY2027 floor $34.58 / cap $670.86'
                    : 'Informal entry — flat MPF as entered; confirm the $2.69 / $8.06 / $12.09 tier with your broker',
            };
        },
        disclaimer: 'Estimate only. Duty rates, extra tariffs, and fee tiers change — verify your HTS rate and any Section 301/232/IEEPA tariffs for your exact product + origin before ordering. Excludes domestic transport after arrival, warehousing, PGA (e.g. FDA/USDA) fees, demurrage, and any duty drawback. Your broker’s entry summary governs.',
        sourceLabel: 'CBP — Customs user fee table (MPF/HMF)',
        sourceHref: 'https://cbp.gov/trade/basic-import-export/user-fee-table',
    },
    'digital-nomad': {
        id: 'digital-nomad',
        title: 'Digital Nomad Visa + Cost-of-Living Calculator',
        description: 'Check whether your remote income clears a digital nomad visa’s minimum — and what life there actually costs per month, per year, and with an emergency buffer.',
        currency: 'USD',
        inputs: [
            { id: 'monthlyIncome', label: 'Monthly remote income (net, after tax)', type: 'number', min: 0, step: 100, defaultValue: 4000, prefix: '$', hint: 'What actually lands in your account each month. Convert from EUR at your bank’s rate if the visa quotes euros.' },
            { id: 'visaMinIncome', label: 'Visa minimum monthly income', type: 'number', min: 0, step: 50, defaultValue: 3680, prefix: '$', hint: 'From the embassy/consulate for your destination — e.g. Portugal D8 ≈ $3,680-equiv (4× minimum wage, 2026). Enter the figure in USD.' },
            { id: 'rent', label: 'Rent', type: 'number', min: 0, step: 50, defaultValue: 1200, prefix: '$' },
            { id: 'utilities', label: 'Utilities + internet + phone', type: 'number', min: 0, step: 25, defaultValue: 150, prefix: '$' },
            { id: 'food', label: 'Food + groceries', type: 'number', min: 0, step: 25, defaultValue: 400, prefix: '$' },
            { id: 'transport', label: 'Transport', type: 'number', min: 0, step: 25, defaultValue: 100, prefix: '$' },
            { id: 'healthInsurance', label: 'Health insurance', type: 'number', min: 0, step: 25, defaultValue: 150, prefix: '$', hint: 'Most nomad visas require private cover — often ≥ €30,000 for Schengen destinations.' },
            { id: 'otherMonthly', label: 'Other monthly costs', type: 'number', min: 0, step: 25, defaultValue: 200, prefix: '$', hint: 'Coworking, subscriptions, fun — everything else.' },
            { id: 'visaFeesAnnual', label: 'Visa + permit fees per year', type: 'number', min: 0, step: 50, defaultValue: 300, prefix: '$', hint: 'Application + residence-permit fees, annualized. Varies by destination — enter your consulate’s figure.' },
            { id: 'bufferMonths', label: 'Emergency-fund target (months of costs)', type: 'number', min: 0, max: 24, step: 1, defaultValue: 3 },
        ],
        outputs: [
            { key: 'totalMonthlyCost', label: 'Total monthly cost of living', format: 'money', highlight: true },
            { key: 'surplus', label: 'Monthly surplus (income − costs)', format: 'money', highlight: true },
            { key: 'meetsRequirement', label: 'Visa income check', format: 'text' },
            { key: 'annualCost', label: 'Annual cost of living', format: 'money' },
            { key: 'emergencyFund', label: 'Emergency fund target', format: 'money' },
            { key: 'savingsRate', label: 'Savings rate', format: 'percent' },
        ],
        formula: (v) => {
            const income = Number(v.monthlyIncome) || 0;
            const minIncome = Number(v.visaMinIncome) || 0;
            const cost = (Number(v.rent) || 0) + (Number(v.utilities) || 0) + (Number(v.food) || 0)
                + (Number(v.transport) || 0) + (Number(v.healthInsurance) || 0) + (Number(v.otherMonthly) || 0)
                + ((Number(v.visaFeesAnnual) || 0) / 12);
            const surplus = income - cost;
            const gap = income - minIncome;
            return {
                totalMonthlyCost: round2(cost),
                surplus: round2(surplus),
                meetsRequirement: gap >= 0
                    ? `Meets the visa minimum — $${round2(gap).toLocaleString('en-US')} per month above it`
                    : `Below the visa minimum by $${round2(-gap).toLocaleString('en-US')} per month`,
                annualCost: round2(cost * 12),
                emergencyFund: round2(cost * (Number(v.bufferMonths) || 0)),
                savingsRate: income > 0 ? round2((surplus / income) * 100) : 0,
            };
        },
        disclaimer: 'Estimate only. Visa thresholds are set by each country and move with minimum-wage changes — confirm the current figure, currency, and whether it is gross or net with the consulate before applying. Cost-of-living figures are your own estimates; rent and insurance vary widely by city. This is not immigration or tax advice — tax residency rules (often 183 days) vary by country.',
        sourceLabel: 'Portugal vs Spain digital nomad visa thresholds, 2026 (reported; confirm with the consulate)',
        sourceHref: 'https://remoteworkeurope.eu/insights/portugal-vs-spain-digital-nomad-visa/',
    },
    'study-abroad': {
        id: 'study-abroad',
        title: 'Study-Abroad Total Cost + ROI Calculator',
        description: 'Add up the full cost of studying abroad — tuition, living, insurance, travel, visa fees, minus scholarships and part-time work — then see how many years of higher pay it takes to earn it back.',
        currency: 'USD',
        inputs: [
            { id: 'tuitionAnnual', label: 'Tuition per year', type: 'number', min: 0, step: 500, defaultValue: 30000, prefix: '$', hint: 'From your offer letter / I-20 cost estimate.' },
            { id: 'livingAnnual', label: 'Living costs per year (rent + food + transport)', type: 'number', min: 0, step: 500, defaultValue: 15000, prefix: '$' },
            { id: 'insuranceAnnual', label: 'Health insurance per year', type: 'number', min: 0, step: 100, defaultValue: 2000, prefix: '$' },
            { id: 'travelAnnual', label: 'Flights + travel per year', type: 'number', min: 0, step: 100, defaultValue: 1500, prefix: '$' },
            { id: 'visaFees', label: 'One-time visa + SEVIS-type fees', type: 'number', min: 0, step: 25, defaultValue: 535, prefix: '$', hint: 'US F-1 example: $535 = $350 SEVIS (I-901) + $185 MRV visa fee. Enter your destination’s figure — confirm before paying.' },
            { id: 'programYears', label: 'Program length (years)', type: 'number', min: 0.5, max: 10, step: 0.5, defaultValue: 4 },
            { id: 'scholarshipAnnual', label: 'Scholarships + grants per year', type: 'number', min: 0, step: 500, defaultValue: 5000, prefix: '$' },
            { id: 'workIncomeAnnual', label: 'Part-time / campus work income per year', type: 'number', min: 0, step: 500, defaultValue: 3000, prefix: '$', hint: 'Be realistic about visa work limits (e.g. F-1: on-campus, 20 hrs/week in term).' },
            { id: 'savings', label: 'Savings already set aside', type: 'number', min: 0, step: 500, defaultValue: 10000, prefix: '$' },
            { id: 'expectedSalary', label: 'Expected annual starting salary after graduation', type: 'number', min: 0, step: 1000, defaultValue: 70000, prefix: '$' },
            { id: 'currentSalary', label: 'Annual salary if you did not study', type: 'number', min: 0, step: 1000, defaultValue: 40000, prefix: '$', hint: 'What you would earn per year without the degree — the ROI baseline.' },
        ],
        outputs: [
            { key: 'annualNetCost', label: 'Net cost per year', format: 'money' },
            { key: 'totalProgramCost', label: 'Total program cost', format: 'money', highlight: true },
            { key: 'netOutOfPocket', label: 'Out of pocket after savings', format: 'money', highlight: true },
            { key: 'monthlyBudget', label: 'Monthly budget while studying', format: 'money' },
            { key: 'paybackYears', label: 'Years to earn it back (payback)', format: 'number' },
            { key: 'tenYearGain', label: '10-year net gain vs not studying', format: 'money' },
        ],
        formula: (v) => {
            const annual = (Number(v.tuitionAnnual) || 0) + (Number(v.livingAnnual) || 0)
                + (Number(v.insuranceAnnual) || 0) + (Number(v.travelAnnual) || 0)
                - (Number(v.scholarshipAnnual) || 0) - (Number(v.workIncomeAnnual) || 0);
            const years = Number(v.programYears) || 0;
            const total = annual * years + (Number(v.visaFees) || 0);
            const net = total - (Number(v.savings) || 0);
            const uplift = (Number(v.expectedSalary) || 0) - (Number(v.currentSalary) || 0);
            return {
                annualNetCost: round2(annual),
                totalProgramCost: round2(total),
                netOutOfPocket: round2(net),
                monthlyBudget: round2(annual / 12),
                paybackYears: uplift <= 0
                    ? 'No payback on salary alone — expected salary is not above your current salary'
                    : round2(net <= 0 ? 0 : net / uplift),
                tenYearGain: round2(uplift * 10 - net),
            };
        },
        disclaimer: 'Estimate only. All cost figures are yours — tuition and living costs vary by school and city, and exchange rates move. ROI uses starting salaries only: it ignores raises, taxes, loan interest, and the earnings you give up while studying beyond the baseline you entered. Visa fees are one-time; confirm the current total on the official visa site before paying. Not financial advice.',
        sourceLabel: 'US F-1 fee breakdown (SEVIS $350 + MRV $185) — confirm on official sites',
        sourceHref: 'https://www.aaptaxlaw.com/VISA/USA/How-to-apply-Student-VISA-for-USA-F-1-Visa-M-1-Application-Procedure.html',
    },
    'freelancer-true-rate': {
        id: 'freelancer-true-rate',
        title: 'Freelancer True-Rate Calculator',
        description: 'Work backwards from the take-home pay you want to the hourly rate you must charge — after platform fees, payment processing, business expenses, tax, and the hours you cannot bill.',
        currency: 'USD',
        inputs: [
            { id: 'targetAnnualNet', label: 'Annual take-home pay you want', type: 'number', min: 0, step: 1000, defaultValue: 60000, prefix: '$', hint: 'After platform fees, processing, expenses, and tax — what lands in your pocket.' },
            { id: 'billableHoursWeek', label: 'Billable hours per week', type: 'number', min: 0, max: 80, step: 1, defaultValue: 30, hint: 'Hours clients actually pay for — not total hours worked.' },
            { id: 'weeksPerYear', label: 'Working weeks per year', type: 'number', min: 1, max: 52, step: 1, defaultValue: 48, hint: '52 minus holidays, sick time, and gaps between contracts.' },
            { id: 'nonBillablePct', label: 'Non-billable time', type: 'number', min: 0, max: 90, step: 5, defaultValue: 20, suffix: '%', hint: 'Admin, marketing, proposals, learning — time you work but cannot charge.' },
            { id: 'businessExpenses', label: 'Annual business expenses', type: 'number', min: 0, step: 100, defaultValue: 2000, prefix: '$', hint: 'Software, equipment, insurance, coworking, accountant.' },
            { id: 'platformFeePct', label: 'Platform fee', type: 'number', min: 0, max: 100, step: 0.5, defaultValue: 10, suffix: '%', hint: 'Upwork: variable 0–15% per contract since May 2025 (was flat 10%). Fiverr: flat 20%. Direct clients: 0%.' },
            { id: 'processingFeePct', label: 'Payment processing fee', type: 'number', min: 0, max: 100, step: 0.5, defaultValue: 3, suffix: '%', hint: 'Stripe US: 2.9% + 30¢ per domestic card charge (≈3% for typical invoices). PayPal varies by country — enter your figure.' },
            { id: 'taxRatePct', label: 'Effective income-tax rate on profit', type: 'number', min: 0, max: 99, step: 1, defaultValue: 20, suffix: '%', hint: 'Your own effective rate — varies by country, income, and deductions. Enter your figure, not a guess from this page.' },
        ],
        outputs: [
            { key: 'hourlyRate', label: 'Hourly rate you must charge', format: 'money', highlight: true },
            { key: 'dayRate', label: 'Day rate (8 hours)', format: 'money' },
            { key: 'grossAnnualNeeded', label: 'Gross billing needed per year', format: 'money' },
            { key: 'monthlyGross', label: 'Gross billing needed per month', format: 'money' },
            { key: 'billableHoursAnnual', label: 'Billable hours per year', format: 'number' },
            { key: 'takeHomePerHour', label: 'Take-home per billable hour', format: 'money' },
            { key: 'feesAndTaxAnnual', label: 'Fees + tax per year', format: 'money' },
        ],
        formula: (v) => {
            const target = Number(v.targetAnnualNet) || 0;
            const expenses = Number(v.businessExpenses) || 0;
            const platform = (Number(v.platformFeePct) || 0) / 100;
            const processing = (Number(v.processingFeePct) || 0) / 100;
            const tax = (Number(v.taxRatePct) || 0) / 100;
            const hours = (Number(v.billableHoursWeek) || 0) * (Number(v.weeksPerYear) || 0)
                * (1 - ((Number(v.nonBillablePct) || 0) / 100));
            // Gross-up: net = ((gross × (1−platform) × (1−processing)) − expenses) × (1−tax)
            // ⇒ gross = (target / (1−tax) + expenses) / ((1−platform) × (1−processing))
            const denom = (1 - platform) * (1 - processing);
            const gross = denom > 0 && tax < 1 && hours > 0
                ? (target / (1 - tax) + expenses) / denom
                : 0;
            return {
                hourlyRate: round2(hours > 0 ? gross / hours : 0),
                dayRate: round2(hours > 0 ? (gross / hours) * 8 : 0),
                grossAnnualNeeded: round2(gross),
                monthlyGross: round2(gross / 12),
                billableHoursAnnual: round2(hours),
                takeHomePerHour: round2(hours > 0 ? target / hours : 0),
                feesAndTaxAnnual: round2(gross - target - expenses),
            };
        },
        disclaimer: 'Estimate only. The model assumes one flat tax rate on profit after expenses, and fees applied in the order shown — real tax is progressive, and platform/processing fees may apply differently per contract. Self-employment tax (US: 15.3% on net earnings) is NOT included — fold it into your tax rate or add it separately. Enter your own rates; the platform examples are reference points, not your terms.',
        sourceLabel: 'Upwork variable fee + Freelancer.com fee terms (checked Aug 2026); Stripe US pricing',
        sourceHref: 'https://flexiple.com/compare/freelancer-vs-upwork',
    },
};

export function getCalculator(id: string | undefined): CalculatorDef | undefined {
    if (!id) return undefined;
    return CALCULATORS[id];
}
