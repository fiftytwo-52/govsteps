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

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
