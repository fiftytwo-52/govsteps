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

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
