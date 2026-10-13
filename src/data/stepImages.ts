// Free-licensed photos for guide step cards — Wikimedia Commons, no watermarks.
// Every image is CC0, public domain, CC BY, or CC BY-SA; the credit line under
// each photo names the photographer and links to the file page, satisfying the
// attribution requirement of the CC BY / CC BY-SA licenses.
// Resolution rule: the "before" step shows the guide's category photo, every
// other step shows its phase photo — so each guide's cards vary step to step.
import type { Step } from './guides';

export interface StepImage {
  src: string;
  alt: string;
  /** e.g. "Celestin92 / Wikimedia Commons (CC BY-SA 4.0)" */
  credit: string;
  /** Commons file page for the photo */
  creditHref: string;
}

const commons = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

/** Category photo — used for the first ("before") step of a guide. */
export const STEP_CATEGORY_IMAGES: Record<string, StepImage> = {
  immigration: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Four_Different_Passports.jpg/960px-Four_Different_Passports.jpg',
    alt: 'Four passports from different countries',
    credit: 'Wikimedia Commons (CC0)',
    creditHref: commons('Four Different Passports.jpg'),
  },
  ids: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Permis_de_conduire_fran%C3%A7ais_2019_recto_01.jpg/960px-Permis_de_conduire_fran%C3%A7ais_2019_recto_01.jpg',
    alt: 'A driving licence card',
    credit: 'Celestin92 / Wikimedia Commons (CC BY-SA 4.0)',
    creditHref: commons('Permis de conduire français 2019 recto 01.jpg'),
  },
  taxes: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Tax_calculator.jpg/960px-Tax_calculator.jpg',
    alt: 'Calculator next to tax paperwork',
    credit: 'Joe lope / Wikimedia Commons (CC BY-SA 4.0)',
    creditHref: commons('Tax calculator.jpg'),
  },
  benefits: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/CP25_Leukemia_Patient_Consultation_%289123625%29.jpg/960px-CP25_Leukemia_Patient_Consultation_%289123625%29.jpg',
    alt: 'Doctor consulting with a patient',
    credit: 'U.S. Navy / Wikimedia Commons (public domain)',
    creditHref: commons('CP25 Leukemia Patient Consultation (9123625).jpg'),
  },
  business: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Business_breakfast_meeting._%2854641476579%29.jpg/960px-Business_breakfast_meeting._%2854641476579%29.jpg',
    alt: 'Business people meeting around a table',
    credit: 'Foreign, Commonwealth & Development Office / Wikimedia Commons (CC BY 4.0)',
    creditHref: commons('Business breakfast meeting. (54641476579).jpg'),
  },
  accidents: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Japanese_car_accident.jpg/960px-Japanese_car_accident.jpg',
    alt: 'Cars involved in a road accident',
    credit: 'Shuets Udono / Wikimedia Commons (CC BY-SA 2.0)',
    creditHref: commons('Japanese car accident.jpg'),
  },
  students: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Massey_University_graduation_procession.jpg/960px-Massey_University_graduation_procession.jpg',
    alt: 'Graduates in academic dress in a procession',
    credit: 'Panamitsu / Wikimedia Commons (CC BY-SA 4.0)',
    creditHref: commons('Massey University graduation procession.jpg'),
  },
  civic: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Town_hall%2C_Christchurch_City%2C_New_Zealand.jpg/960px-Town_hall%2C_Christchurch_City%2C_New_Zealand.jpg',
    alt: 'A town hall civic building',
    credit: 'Michal Klajban / Wikimedia Commons (CC BY-SA 4.0)',
    creditHref: commons('Town hall, Christchurch City, New Zealand.jpg'),
  },
  insurance: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/A_family_in_Gwynns_Falls-Leakin_Park.png/960px-A_family_in_Gwynns_Falls-Leakin_Park.png',
    alt: 'A family together in a park',
    credit: 'John Dean / Wikimedia Commons (CC BY-SA 3.0)',
    creditHref: commons('A family in Gwynns Falls-Leakin Park.png'),
  },
};

/** Phase photo — used for every step except the first one. */
export const STEP_PHASE_IMAGES: Record<Step['phase'], StepImage> = {
  // "Before" prep steps reuse the form photo — preparing paperwork.
  before: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Passport_application_form_blank_Russia.jpg/960px-Passport_application_form_blank_Russia.jpg',
    alt: 'A blank application form to fill in',
    credit: 'Rakoon / Wikimedia Commons (CC0)',
    creditHref: commons('Passport application form blank Russia.jpg'),
  },
  go: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Surrey_County_Hall%2C_Kingston_upon_Thames-15627419968.jpg/960px-Surrey_County_Hall%2C_Kingston_upon_Thames-15627419968.jpg',
    alt: 'A government county hall building',
    credit: 'David Howard / Wikimedia Commons (CC BY 2.0)',
    creditHref: commons('Surrey County Hall, Kingston upon Thames-15627419968.jpg'),
  },
  fill: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Passport_application_form_blank_Russia.jpg/960px-Passport_application_form_blank_Russia.jpg',
    alt: 'A blank application form to fill in',
    credit: 'Rakoon / Wikimedia Commons (CC0)',
    creditHref: commons('Passport application form blank Russia.jpg'),
  },
  submit: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Post_service_counters_at_China_Post_Minxing_office-20240420.jpg/960px-Post_service_counters_at_China_Post_Minxing_office-20240420.jpg',
    alt: 'Service counters where documents are submitted',
    credit: 'Shwangtianyuan / Wikimedia Commons (CC BY-SA 4.0)',
    creditHref: commons('Post service counters at China Post Minxing office-20240420.jpg'),
  },
  wait: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Doctor_office_waiting_room.jpg/960px-Doctor_office_waiting_room.jpg',
    alt: 'An empty waiting room with chairs',
    credit: 'Kurt Kaiser / Wikimedia Commons (CC0)',
    creditHref: commons('Doctor office waiting room.jpg'),
  },
  followup: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Call_center_PV.jpg',
    alt: 'A call centre agent with a headset',
    credit: 'Kellie Walenciak / Wikimedia Commons (CC BY-SA 4.0)',
    creditHref: commons('Call center PV.jpg'),
  },
  receive: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Mailbox_in_General_Post_Office.jpg/960px-Mailbox_in_General_Post_Office.jpg',
    alt: 'A mailbox at a post office',
    credit: 'Gaurav Dhwaj Khadka / Wikimedia Commons (CC BY-SA 4.0)',
    creditHref: commons('Mailbox in General Post Office.jpg'),
  },
};

export function getStepImage(category: string, phase: Step['phase'], isFirst: boolean): StepImage {
  if (isFirst) {
    return STEP_CATEGORY_IMAGES[category] ?? STEP_PHASE_IMAGES.go;
  }
  return STEP_PHASE_IMAGES[phase];
}
