// Formula tests for src/data/calculators.ts. Expected values verified against
// official examples / competitor calculators (see calculators.ts comments).
// Run: node --experimental-strip-types scripts/test-calculators.mjs
import { CALCULATORS } from '../src/data/calculators.ts';

const approx = (a, b, tol = 0.02) => Math.abs(a - b) <= tol;
let pass = 0, fail = 0;
function check(name, actual, expected, tol) {
    const ok = typeof expected === 'string' ? actual === expected : approx(actual, expected, tol ?? 0.02);
    if (ok) { pass++; console.log('  PASS', name, '=', actual); }
    else { fail++; console.log('  FAIL', name, 'expected', expected, 'got', actual); }
}

const f = (id, v) => CALCULATORS[id].formula(v);

console.log('ae-gratuity (AED 10,000, 7 yrs -> 55,000)');
let r = f('ae-gratuity', { basicSalary: 10000, serviceYears: 7, unpaidLeaveDays: 0 });
check('gratuity', r.gratuity, 55000);
check('dailyWage', r.dailyWage, 333.33);
check('firstFive', r.firstFive, 35000);
check('beyondFive', r.beyondFive, 20000);
r = f('ae-gratuity', { basicSalary: 7000, serviceYears: 7, unpaidLeaveDays: 0 });
check('Gulf News example 7,000/7y', r.gratuity, 38500);
r = f('ae-gratuity', { basicSalary: 10000, serviceYears: 0.5, unpaidLeaveDays: 0 });
check('under 1 year -> 0', r.gratuity, 0);

console.log('ae-corporate-tax (1,000,000 -> 56,250)');
r = f('ae-corporate-tax', { taxableIncome: 1000000, smallBusinessRelief: false });
check('taxDue', r.taxDue, 56250);
check('taxedAt9', r.taxedAt9, 625000);
r = f('ae-corporate-tax', { taxableIncome: 300000, smallBusinessRelief: false });
check('under threshold -> 0', r.taxDue, 0);
r = f('ae-corporate-tax', { taxableIncome: 1000000, smallBusinessRelief: true });
check('SBR -> 0', r.taxDue, 0);

console.log('us-fha-mortgage ($300k loan @6.5%/30y, 3.5% down -> P&I 1,896.20, MIP 137.50)');
r = f('us-fha-mortgage', { homePrice: 310880, downPaymentPct: 3.5, interestRate: 6.5, termYears: '30', annualTax: 0, annualInsurance: 0, financeUfmip: false });
check('monthlyPI', r.monthlyPI, 1896.20, 0.5);
check('monthlyMip', r.monthlyMip, 137.50, 0.5);
check('totalMonthly', r.totalMonthly, 2033.70, 1);
check('ufmip', r.ufmip, 5250, 1);
check('mipDuration', r.mipDuration, 'Life of loan (LTV above 90%)');
r = f('us-fha-mortgage', { homePrice: 310880, downPaymentPct: 3.5, interestRate: 6.5, termYears: '30', annualTax: 0, annualInsurance: 0, financeUfmip: true });
check('financed UFMIP P&I', r.monthlyPI, 1929.39, 1);

console.log('us-personal-loan ($10k @10%/36 -> 322.67, interest 1,616.12)');
r = f('us-personal-loan', { amount: 10000, apr: 10, termMonths: 36, originationFeePct: 0, extraPayment: 0 });
check('monthlyPayment', r.monthlyPayment, 322.67);
check('totalInterest', r.totalInterest, 1616.12, 0.5);
check('payoffMonths', r.payoffMonths, 36);

console.log('uk-income-tax (£60,000 -> tax 11,432, NI 3,210.60, take-home 45,357.40)');
r = f('uk-income-tax', { grossIncome: 60000, pension: 0, taxYear: '2026/27' });
check('incomeTax', r.incomeTax, 11432);
check('nationalInsurance', r.nationalInsurance, 3210.60);
check('takeHome', r.takeHome, 45357.40);
r = f('uk-income-tax', { grossIncome: 12570, pension: 0, taxYear: '2026/27' });
check('at allowance -> 0 tax', r.incomeTax, 0);

console.log('uk-child-benefit (2 kids 2026/27 -> annual 2,337.40; at £70k HICBC 1,168.70)');
r = f('uk-child-benefit', { children: 2, taxYear: '2026/27', highestIncome: 0 });
check('annualBenefit', r.annualBenefit, 2337.40);
check('per4Weeks', r.per4Weeks, 179.80);
r = f('uk-child-benefit', { children: 2, taxYear: '2026/27', highestIncome: 70000 });
check('hicbc at 70k', r.hicbc, 1168.70);
check('netAnnual at 70k', r.netAnnual, 1168.70);
r = f('uk-child-benefit', { children: 2, taxYear: '2025/26', highestIncome: 0 });
check('2025/26 annual', r.annualBenefit, 2251.60);

console.log('ca-ei ($60k -> 634.62/wk)');
r = f('ca-ei', { annualEarnings: 60000, benefitYear: '2025' });
check('weeklyBenefit 2025', r.weeklyBenefit, 634.62);
r = f('ca-ei', { annualEarnings: 60000, benefitYear: '2026' });
check('weeklyBenefit 2026', r.weeklyBenefit, 634.62);
r = f('ca-ei', { annualEarnings: 100000, benefitYear: '2026' });
check('capped at 729', r.weeklyBenefit, 729);

console.log('ca-personal-loan ($15k @9%/48 -> 373.28, interest 2,917.44)');
r = f('ca-personal-loan', { amount: 15000, apr: 9, termMonths: 48, originationFeePct: 0, extraPayment: 0 });
check('monthlyPayment', r.monthlyPayment, 373.28);
check('totalInterest', r.totalInterest, 2917.44, 0.5);

// --- Edge cases (added 2026-10-14): branch boundaries the basic tests never hit ---

console.log('EDGE uk-income-tax: PA taper (>100k), 45% band boundary (125,140), additional rate');
r = f('uk-income-tax', { grossIncome: 110000, pension: 0, taxYear: '2026/27' });
check('110k tax (PA tapered to 7,570)', r.incomeTax, 33432);
check('110k NI', r.nationalInsurance, 4210.60);
check('110k take-home', r.takeHome, 72357.40);
r = f('uk-income-tax', { grossIncome: 125140, pension: 0, taxYear: '2026/27' });
check('125,140 tax (PA fully tapered, no 45% yet)', r.incomeTax, 37488);
check('125,140 NI', r.nationalInsurance, 4513.40);
check('125,140 take-home', r.takeHome, 83138.60);
r = f('uk-income-tax', { grossIncome: 150000, pension: 0, taxYear: '2026/27' });
check('150k tax (45% band)', r.incomeTax, 48675);
check('150k NI', r.nationalInsurance, 5010.60);
check('150k take-home', r.takeHome, 96314.40);

console.log('EDGE ae-gratuity: partial year, unpaid leave, 2-year cap, 1-year boundary');
r = f('ae-gratuity', { basicSalary: 10000, serviceYears: 7.5, unpaidLeaveDays: 0 });
check('7.5y gratuity', r.gratuity, 60000);
check('7.5y beyondFive', r.beyondFive, 25000);
r = f('ae-gratuity', { basicSalary: 10000, serviceYears: 7, unpaidLeaveDays: 365 });
check('365 unpaid-leave days -> 6 effective years', r.effectiveYears, 6);
check('365 unpaid-leave gratuity', r.gratuity, 45000);
r = f('ae-gratuity', { basicSalary: 10000, serviceYears: 30, unpaidLeaveDays: 0 });
check('30y gratuity capped at 2y wage', r.gratuity, 240000);
r = f('ae-gratuity', { basicSalary: 10000, serviceYears: 1, unpaidLeaveDays: 0 });
check('exactly 1y -> eligible, 21 days', r.gratuity, 7000);
r = f('ae-gratuity', { basicSalary: 10000, serviceYears: 0.99, unpaidLeaveDays: 0 });
check('0.99y -> 0', r.gratuity, 0);

console.log('EDGE us-fha-mortgage: 20% down -> 0.50% MIP, 11-year MIP duration');
r = f('us-fha-mortgage', { homePrice: 310880, downPaymentPct: 20, interestRate: 6.5, termYears: '30', annualTax: 0, annualInsurance: 0, financeUfmip: false });
check('20% down MIP', r.monthlyMip, 103.63, 0.5);
check('20% down P&I', r.monthlyPI, 1571.98, 1);
check('20% down MIP duration', r.mipDuration, '11 years (LTV 90% or below)');
check('20% down UFMIP', r.ufmip, 4352.32, 1);

console.log('EDGE loans: extra payments shorten payoff, origination fee adds to total cost');
r = f('us-personal-loan', { amount: 10000, apr: 10, termMonths: 36, originationFeePct: 0, extraPayment: 100 });
check('US +$100 extra monthly', r.monthlyPayment, 422.67);
check('US +$100 extra payoff months', r.payoffMonths, 27);
check('US +$100 extra total interest', r.totalInterest, 1412.09, 0.5);
r = f('us-personal-loan', { amount: 10000, apr: 10, termMonths: 36, originationFeePct: 5, extraPayment: 0 });
check('US 5% fee total cost', r.totalCost, 12116.12, 1);
check('US 5% fee leaves interest unchanged', r.totalInterest, 1616.12, 0.5);
r = f('ca-personal-loan', { amount: 15000, apr: 9, termMonths: 48, originationFeePct: 0, extraPayment: 100 });
check('CA +$100 extra monthly', r.monthlyPayment, 473.28);
check('CA +$100 extra payoff months', r.payoffMonths, 37);
check('CA +$100 extra total interest', r.totalInterest, 2511.36, 0.5);

console.log('EDGE uk-child-benefit: HICBC boundaries 60k (no charge) and 80k (full charge)');
r = f('uk-child-benefit', { children: 2, taxYear: '2026/27', highestIncome: 60000 });
check('60k HICBC', r.hicbc, 0);
check('60k net', r.netAnnual, 2337.40);
r = f('uk-child-benefit', { children: 2, taxYear: '2026/27', highestIncome: 80000 });
check('80k HICBC = full benefit', r.hicbc, 2337.40);
check('80k net = 0', r.netAnnual, 0);

console.log('EDGE ca-ei: caps + premiums for both benefit years');
r = f('ca-ei', { annualEarnings: 100000, benefitYear: '2025' });
check('2025 capped at 695', r.weeklyBenefit, 695);
check('2025 premium at MIE', r.annualPremium, 1077.48);
r = f('ca-ei', { annualEarnings: 100000, benefitYear: '2026' });
check('2026 premium at MIE', r.annualPremium, 1123.07);
r = f('ca-ei', { annualEarnings: 26000, benefitYear: '2026' });
check('below-cap weekly', r.weeklyBenefit, 275);
check('below-cap premium', r.annualPremium, 423.80);

console.log('gcc-gratuity (one calculator, five country formulas)');
const g = (v) => f('gcc-gratuity', v);
r = g({ country: 'ae', monthlyWage: 10000, serviceYears: 7, leavingType: 'employer', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('AE 10k/7y', r.gratuity, 55000);
check('AE wage base', r.wageBase, 'Basic wage ÷ 30 = daily wage');
r = g({ country: 'ae', monthlyWage: 10000, serviceYears: 0.5, leavingType: 'employer', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('AE under 1y -> 0', r.gratuity, 0);
r = g({ country: 'sa', monthlyWage: 10000, serviceYears: 8, leavingType: 'employer', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('SA 10k/8y employer', r.gratuity, 55000);
r = g({ country: 'sa', monthlyWage: 10000, serviceYears: 8, leavingType: 'resign', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('SA 8y resign 2/3', r.gratuity, 36666.67);
check('SA 8y resign full', r.fullEntitlement, 55000);
r = g({ country: 'sa', monthlyWage: 10000, serviceYears: 3, leavingType: 'resign', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('SA 3y resign 1/3', r.gratuity, 5000);
r = g({ country: 'sa', monthlyWage: 10000, serviceYears: 1.5, leavingType: 'resign', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('SA 1.5y resign -> 0', r.gratuity, 0);
r = g({ country: 'qa', monthlyWage: 6000, serviceYears: 5, leavingType: 'employer', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('QA 6k/5y 21d', r.gratuity, 21000);
r = g({ country: 'qa', monthlyWage: 6000, serviceYears: 5, leavingType: 'resign', qatarDaysPerYear: 30, omanOldLawYears: 0 });
check('QA 30d contract, resign no reduction', r.gratuity, 30000);
r = g({ country: 'kw', monthlyWage: 600, serviceYears: 7.5, leavingType: 'employer', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('KW 600/7.5y (worked example)', r.gratuity, 3461.54);
r = g({ country: 'kw', monthlyWage: 600, serviceYears: 7.5, leavingType: 'resign', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('KW 7.5y resign 2/3', r.gratuity, 2307.69);
r = g({ country: 'kw', monthlyWage: 600, serviceYears: 30, leavingType: 'employer', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('KW 30y capped at 18 months', r.gratuity, 10800);
r = g({ country: 'om', monthlyWage: 500, serviceYears: 5, leavingType: 'employer', qatarDaysPerYear: 21, omanOldLawYears: 2 });
check('OM 5y, 2 old-law yrs', r.gratuity, 2000);
r = g({ country: 'om', monthlyWage: 500, serviceYears: 4, leavingType: 'employer', qatarDaysPerYear: 21, omanOldLawYears: 0 });
check('OM 4y all new law', r.gratuity, 2000);
r = g({ country: 'om', monthlyWage: 500, serviceYears: 4, leavingType: 'employer', qatarDaysPerYear: 21, omanOldLawYears: 4 });
check('OM 4y all old law', r.gratuity, 1250);

console.log('uk-ir35 (£500/day x 220 days)');
const ir = (v) => f('uk-ir35', v);
r = ir({ dayRate: 500, daysPerYear: 220, taxYear: '2026/27', umbrellaMarginMonthly: 25, accountancyAnnual: 1800, businessCostsAnnual: 0, directorSalary: '12570' });
check('inside take-home 2026/27', r.takeHomeInsideAnnual, 66262.62);
check('inside employer NI', r.insideEmployerNI, 13656.52);
check('inside income tax', r.insideIncomeTax, 25849.39);
check('inside employee NI', r.insideEmployeeNI, 3931.47);
check('outside take-home 2026/27', r.takeHomeOutsideAnnual, 69206.97);
check('corporation tax', r.corporationTax, 21291.04);
check('dividend tax 2026/27 (10.75/35.75)', r.dividendTax, 16566.49);
check('difference', r.difference, 2944.35);
check('equivalent inside day rate', r.equivalentInsideDayRate, 529.62, 1);
r = ir({ dayRate: 500, daysPerYear: 220, taxYear: '2025/26', umbrellaMarginMonthly: 25, accountancyAnnual: 1800, businessCostsAnnual: 0, directorSalary: '12570' });
check('outside take-home 2025/26 (8.75/33.75)', r.takeHomeOutsideAnnual, 70661.04);
check('dividend tax 2025/26', r.dividendTax, 15112.42);
r = ir({ dayRate: 500, daysPerYear: 220, taxYear: '2026/27', umbrellaMarginMonthly: 25, accountancyAnnual: 1800, businessCostsAnnual: 0, directorSalary: '5000' });
check('£5,000 salary loses to £12,570', r.takeHomeOutsideAnnual, 67640.54);
r = ir({ dayRate: 200, daysPerYear: 100, taxYear: '2026/27', umbrellaMarginMonthly: 25, accountancyAnnual: 1800, businessCostsAnnual: 0, directorSalary: '12570' });
check('low income: inside can beat outside', r.difference, -450.14);
check('low income equivalent rate', r.equivalentInsideDayRate, 192.81, 1);

console.log('us-student-loan-pslf ($40k @6%, AGI $55k, family 1)');
const sl = (v) => f('us-student-loan-pslf', v);
const slBase = { loanBalance: 40000, interestRate: 6, annualIncome: 55000, familySize: 1, dependents: 0, borrowerEra: 'pre-2026', qualifyingPayments: 0 };
r = sl(slBase);
check('standard monthly', r.monthlyStandard, 444.08);
check('standard total', r.totalStandard, 53289.84, 1);
check('IBR monthly (10% of disc.)', r.monthlyIbr, 258.83);
check('IBR total 20y', r.totalIbr, 62120.00, 1);
check('IBR forgiven', r.forgivenIbr, 12816.59, 1);
check('PAYE monthly', r.monthlyPaye, 258.83);
check('PAYE total 20y', r.totalPaye, 62120.00, 1);
check('PAYE forgiven', r.forgivenPaye, 12816.59, 1);
check('ICR monthly (12-yr cap binds)', r.monthlyIcr, 390.34);
check('ICR total (paid off, 0 forgiven)', r.totalIcr, 56208.97, 1);
check('ICR forgiven', r.forgivenIcr, 0);
check('RAP monthly (5% band)', r.monthlyRap, 229.17);
check('RAP total 30y', r.totalRap, 82500.00, 1);
check('RAP forgiven', r.forgivenRap, 10701.64, 1);
check('PSLF cheapest plan', r.pslfPlan, 'RAP');
check('PSLF monthly', r.pslfMonthly, 229.17);
check('PSLF months left', r.pslfMonthsLeft, 120);
check('PSLF total paid', r.pslfTotalPaid, 27500.00, 1);
check('PSLF forgiven', r.pslfForgiven, 35220.19, 1);
r = sl({ ...slBase, qualifyingPayments: 60 });
check('PSLF 60 made -> 60 left', r.pslfMonthsLeft, 60);
check('PSLF 60 made total', r.pslfTotalPaid, 13750.00, 1);
check('PSLF 60 made forgiven', r.pslfForgiven, 37965.04, 1);
r = sl({ ...slBase, borrowerEra: 'post-2026' });
check('post-2026 IBR not available', r.monthlyIbr, 'Not available — only for loans disbursed before 1 July 2026');
check('post-2026 PAYE not available', r.monthlyPaye, 'Not available — only for loans disbursed before 1 July 2026');
check('post-2026 PSLF plan = RAP', r.pslfPlan, 'RAP');
r = sl({ ...slBase, annualIncome: 15000 });
check('RAP 1% band at $15k AGI', r.monthlyRap, 12.50);
r = sl({ ...slBase, annualIncome: 120000 });
check('RAP 10% band at $120k AGI', r.monthlyRap, 1000.00);
r = sl({ ...slBase, dependents: 2 });
check('RAP -$50 x 2 dependents', r.monthlyRap, 129.17);
r = sl({ ...slBase, annualIncome: 8000, dependents: 1 });
check('RAP $10 floor', r.monthlyRap, 10);
r = sl({ ...slBase, annualIncome: 200000, familySize: 1 });
check('high income IBR capped at Standard', r.monthlyIbr, 444.08);

console.log('us-import-duty ($10k value, 5% HTS + 7.5% extra, ocean, formal)');
const id = (v) => f('us-import-duty', v);
const idBase = { customsValue: 10000, dutyRatePct: 5, additionalTariffPct: 7.5, freight: 800, insurance: 100, brokerageFees: 150, entryType: 'formal', informalMpf: 8.06, oceanShipment: true, units: 10 };
r = id(idBase);
check('duty', r.duty, 500);
check('additional tariff', r.additionalTariff, 750);
check('MPF 0.3464%', r.mpf, 34.64);
check('HMF 0.125%', r.hmf, 12.50);
check('total import charges', r.totalImportCharges, 1447.14);
check('landed cost', r.landedCost, 12347.14);
check('landed per unit (10)', r.landedPerUnit, 1234.71);
r = id({ ...idBase, customsValue: 1000, oceanShipment: false });
check('MPF floor $34.58', r.mpf, 34.58);
check('air: no HMF', r.hmf, 0);
r = id({ ...idBase, customsValue: 1000000 });
check('MPF cap $670.86', r.mpf, 670.86);
r = id({ ...idBase, entryType: 'informal', customsValue: 1000, oceanShipment: false });
check('informal flat MPF', r.mpf, 8.06);
r = id({ ...idBase, customsValue: 1000, dutyRatePct: 0, additionalTariffPct: 0, freight: 0, insurance: 0, brokerageFees: 0, oceanShipment: false, units: 1 });
check('duty-free small shipment total = MPF floor', r.totalImportCharges, 34.58);

console.log('digital-nomad ($4,000 income vs $3,680 visa min)');
const dn = (v) => f('digital-nomad', v);
const dnBase = { monthlyIncome: 4000, visaMinIncome: 3680, rent: 1200, utilities: 150, food: 400, transport: 100, healthInsurance: 150, otherMonthly: 200, visaFeesAnnual: 300, bufferMonths: 3 };
r = dn(dnBase);
check('monthly cost', r.totalMonthlyCost, 2225.00);
check('surplus', r.surplus, 1775.00);
check('meets requirement', r.meetsRequirement, 'Meets the visa minimum — $320 per month above it');
check('annual cost', r.annualCost, 26700.00);
check('emergency fund 3mo', r.emergencyFund, 6675.00);
check('savings rate', r.savingsRate, 44.38);
r = dn({ ...dnBase, monthlyIncome: 3000 });
check('below minimum', r.meetsRequirement, 'Below the visa minimum by $680 per month');
check('below-minimum surplus still positive', r.surplus, 775.00);
r = dn({ ...dnBase, monthlyIncome: 2000 });
check('deficit surplus', r.surplus, -225.00);

console.log('study-abroad ($30k tuition, 4 yrs, $5k scholarship, $3k work)');
const sa = (v) => f('study-abroad', v);
const saBase = { tuitionAnnual: 30000, livingAnnual: 15000, insuranceAnnual: 2000, travelAnnual: 1500, visaFees: 535, programYears: 4, scholarshipAnnual: 5000, workIncomeAnnual: 3000, savings: 10000, expectedSalary: 70000, currentSalary: 40000 };
r = sa(saBase);
check('annual net cost', r.annualNetCost, 40500);
check('total program cost', r.totalProgramCost, 162535);
check('net out of pocket', r.netOutOfPocket, 152535);
check('monthly budget', r.monthlyBudget, 3375.00);
check('payback years', r.paybackYears, 5.08);
check('10-year gain', r.tenYearGain, 147465);
r = sa({ ...saBase, expectedSalary: 35000 });
check('no payback when salary drops', r.paybackYears, 'No payback on salary alone — expected salary is not above your current salary');
r = sa({ ...saBase, savings: 200000 });
check('savings cover all -> 0 payback', r.paybackYears, 0);

console.log('freelancer-true-rate ($60k target, 30h x 48w, 20% non-billable, 10% + 3% + 20%)');
const fr = (v) => f('freelancer-true-rate', v);
const frBase = { targetAnnualNet: 60000, billableHoursWeek: 30, weeksPerYear: 48, nonBillablePct: 20, businessExpenses: 2000, platformFeePct: 10, processingFeePct: 3, taxRatePct: 20 };
r = fr(frBase);
check('gross annual needed', r.grossAnnualNeeded, 88201.60, 1);
check('hourly rate', r.hourlyRate, 76.56);
check('day rate', r.dayRate, 612.51, 1);
check('monthly gross', r.monthlyGross, 7350.13, 1);
check('billable hours/year', r.billableHoursAnnual, 1152);
check('take-home per hour', r.takeHomePerHour, 52.08);
check('fees + tax/year', r.feesAndTaxAnnual, 26201.60, 1);
r = fr({ ...frBase, platformFeePct: 0, processingFeePct: 0 });
check('direct client gross (no fees)', r.grossAnnualNeeded, 77000);
check('direct client hourly', r.hourlyRate, 66.84);
check('direct client fees = tax only', r.feesAndTaxAnnual, 15000);
r = fr({ ...frBase, platformFeePct: 20 });
check('Fiverr 20% gross', r.grossAnnualNeeded, 99226.80, 1);
check('Fiverr 20% hourly', r.hourlyRate, 86.13, 1);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
