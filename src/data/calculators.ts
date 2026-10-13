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
        disclaimer: 'Estimate only. Covers federal private-sector employees. Excludes DIFC/ADGM, government, and domestic workers (separate regimes). The 2-year cap is applied against basic wage, following majority practice; the law says "two years’ wage" without specifying basic vs total.',
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
};

export function getCalculator(id: string | undefined): CalculatorDef | undefined {
    if (!id) return undefined;
    return CALCULATORS[id];
}
