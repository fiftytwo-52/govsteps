# GovSteps — Official Sources Watchlist & Freshness Protocol

This watchlist defines the regulatory and agency feeds monitored by the GovSteps editorial team to keep all guides synchronized with statutory fee, form, and processing time changes.

## Monitoring Cadence & Assigned Editorial Leads

| Agency / Domain | Canonical News / Alerts Endpoint | Primary Focus Areas | Check Frequency | Editorial Owner |
|---|---|---|---|---|
| **US: Internal Revenue Service (IRS)** | [irs.gov/newsroom](https://www.irs.gov/newsroom) | Form 1040, Form W-7 (ITIN), standard deductions, Direct File expansion | Weekly (Mon) | David Vance (Tax & Business Lead) |
| **US: Citizenship and Immigration Services (USCIS)** | [uscis.gov/newsroom/alerts](https://www.uscis.gov/newsroom/alerts) | Fee schedule revisions, Form I-130, Form I-485, Form N-400, policy alerts | Weekly (Mon & Thu) | Elena Rostova (Senior Immigration Lead) |
| **US: Department of State (Travel & Passports)** | [travel.state.gov/content/travel/en/passports.html](https://travel.state.gov/content/travel/en/passports.html) | Routine vs expedited processing weeks, Form DS-11 / DS-82 fees | Bi-weekly | Marcus Chen (Identity Lead) |
| **US: Social Security Administration (SSA)** | [ssa.gov/news/press/releases](https://www.ssa.gov/news/press/releases/) | SSN card replacement portal, evidence requirements, COLA adjustments | Monthly | Marcus Chen (Identity Lead) |
| **US: HealthCare.gov / CMS** | [healthcare.gov/blog](https://www.healthcare.gov/blog/) | Open enrollment dates, FPL income thresholds, subsidy brackets | Monthly (Weekly Nov-Jan) | Sarah Jenkins (Benefits Lead) |
| **UK: HM Revenue & Customs (HMRC)** | [gov.uk/government/organisations/hm-revenue-customs](https://www.gov.uk/government/organisations/hm-revenue-customs) | Self Assessment deadlines, National Insurance thresholds, tax codes | Weekly (Wed) | David Vance (Tax Lead) |
| **UK: UK Visas and Immigration (Home Office)** | [gov.uk/government/organisations/uk-visas-and-immigration](https://www.gov.uk/government/organisations/uk-visas-and-immigration) | Skilled Worker minimum salary, eVisa transition, settlement fees | Weekly (Tue) | Elena Rostova (Immigration Lead) |
| **UK: HM Passport Office (HMPO)** | [gov.uk/browse/abroad/passports](https://www.gov.uk/browse/abroad/passports) | Online vs paper renewal fees, turnaround estimates | Monthly | Marcus Chen (Identity Lead) |
| **UK: Driver and Vehicle Licensing Agency (DVLA)** | [gov.uk/government/organisations/driver-and-vehicle-licensing-agency](https://www.gov.uk/government/organisations/driver-and-vehicle-licensing-agency) | Theory & practical driving test fees, license renewals | Monthly | Marcus Chen (Identity Lead) |
| **CA: Immigration, Refugees and Citizenship Canada (IRCC)** | [canada.ca/en/immigration-refugees-citizenship/news.html](https://www.canada.ca/en/immigration-refugees-citizenship/news.html) | Express Entry draws, study permit caps, citizenship processing times | Weekly (Tue & Fri) | Elena Rostova (Immigration Lead) |
| **CA: Canada Revenue Agency (CRA)** | [canada.ca/en/revenue-agency/news.html](https://www.canada.ca/en/revenue-agency/news.html) | GST/HST credit dates, personal tax brackets, SIN registration | Weekly (Wed) | David Vance (Tax Lead) |
| **CA: Service Canada & Passport Program** | [canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html](https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html) | Passport turnaround times, Canadian Dental Care Plan, EI rules | Monthly | Sarah Jenkins (Benefits Lead) |

---

## Action Triggers & SLAs

1. **Urgent Filing Fee or Form Revision:**
   - **Trigger:** Agency increases statutory filing fee (e.g., USCIS fee rule update) or deprecates an edition date.
   - **SLA:** Update live guide data file (`guides-*.ts`) within **48 hours**.
   - **Action:** Bump `updatedAt` / `lastReviewedDate` in data file, run `npm run build` (regenerates sitemap with fresh lastmod), deploy to production, submit URL in Google Search Console for priority re-indexing.

2. **Wait Time Fluctuation:**
   - **Trigger:** Agency updates seasonal backlog (e.g., US Passport wait drops from 8-11 weeks to 6-8 weeks).
   - **SLA:** Update within **5 business days**.

3. **Routine Source Audits (6-Month / Annual):**
   - **Volatile Categories (Taxes, Immigration, Benefits):** Full end-to-end verification every **6 months**.
   - **Stable Categories (IDs, Civic, Records):** Verified annually.
   - **Automated Alerting:** The site system flags any guide older than 6 months with an in-progress review banner.

---

## Corrections Submissions Channel

Community and user reports submitted to `gun-yes@proton.me` are triaged against this watchlist by the domain lead within 48 business hours.
