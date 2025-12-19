
// Imports
import andreas from "../../assets/Orators/andreas_m_papas.jpg";
import maria from "../../assets/Orators/maria_richards_brown.jpg";
import rassa from "../../assets/Orators/rassa_pegahi.jpg";
import anna from "../../assets/Orators/anna_sobanska.jpg";
import barbara from "../../assets/Orators/barbara_de_filippis.jpg";
import priya from "../../assets/Orators/priya_hays.jpg";
import teresa from "../../assets/Orators/teresa_carvajal.jpg";
import huiqin from "../../assets/Orators/huiqin_yang.jpg";

// Banner imports
import andreas_banner from "../../assets/Orator Banners/andreas_m_papas_banner.jpg";
import maria_banner from "../../assets/Orator Banners/maria_richards_brown_banner.jpg";
import rassa_banner from "../../assets/Orator Banners/rassa_pegahi_banner.jpg";
import anna_banner from "../../assets/Orator Banners/anna_sobanska_banner.jpg";
import barbara_banner from "../../assets/Orator Banners/barbara_de_filippis_banner.jpg";
import priya_banner from "../../assets/Orator Banners/priya_hays_banner.jpg";
import teresa_banner from "../../assets/Orator Banners/teresa_carvajal_banner.jpg";
import huiqin_banner from "../../assets/Orator Banners/huiqin_yang_banner.jpg";

export const orators = [
  {
    id: "andreas-m-papas",
    image: andreas,
    name: "Dr. Andreas M Papas",
    from: "USA",
    about: "Adjunct Professor",
    link: "/world-pharmaceutical-summit-orators/andreas-m-papas",
  },
  {
    id: "maria-richards-brown",
    image: maria,
    name: "Maria Richards Brown",
    from: "United Kingdom",
    about: "Research Assistant",
    link: "/world-pharmaceutical-summit-orators/maria-richards-brown",
  },
  {
    id: "rassa-pegahi",
    image: rassa,
    name: "Dr. Rassa Pegahi",
    from: "France",
    about: "PhD in Molecular Biology",
    link: "/world-pharmaceutical-summit-orators/rassa-pegahi",
  },
  {
    id: "anna-w-sobanska",
    image: anna,
    name: "Dr. Anna W. Sobańska",
    from: "Poland",
    about: "PhD in Organic Chemistry",
    link: "/world-pharmaceutical-summit-orators/anna-w-sobanska",
  },
  {
    id: "barbara-de-filippis",
    image: barbara,
    name: "Prof. Barbara De Filippis",
    from: "Italy",
    about: "Associate Professor in Medicinal Chemistry, University of Chieti",
    link: "/world-pharmaceutical-summit-orators/barbara-de-filippis",
  },
  {
    id: "priya-hays",
    image: priya,
    name: "Dr. Priya Hays",
    from: "USA",
    about: "Science Writer and Author",
    link: "/world-pharmaceutical-summit-orators/priya-hays",
  },
  {
    id: "teresa-carvajal",
    image: teresa,
    name: "Dr. Teresa Carvajal",
    from: "USA",
    about: "Faculty Member at Purdue University",
    link: "/world-pharmaceutical-summit-orators/teresa-carvajal",
  },
  {
    id: "huiqin-yang",
    image: huiqin,
    name: "Dr. Huiqin Yang",
    from: "United Kingdom",
    about: "Senior Research Fellow",
    link: "/world-pharmaceutical-summit-orators/huiqin-yang",
  },
];

// Detailed orator data

export const andreas_m_papas_data = {
  id: "andreas-m-papas",
  image: andreas,
  from: "USA",
  name: "Dr. Andreas M Papas",
  banner: andreas_banner,
  about:
    "Dr. Papas is Adjunct Professor of the College of Medicine, East Tennessee State University and CEO and member of the Board of Directors of Antares Health Products, Inc. A Fulbright Scholar and author of 'The Vitamin E Factor', he developed product concepts with NIH-supported clinical evaluation, formulation, and commercial production expertise.",
};

export const maria_richards_brown_data = {
  id: "maria-richards-brown",
  image: maria,
  from: "United Kingdom",
  name: "Maria Richards Brown",
  banner: maria_banner,
  about:
    "Maria Richards-Brown is a research assistant at UCL, with a background in Experimental Psychology from Oxford and MSc in Clinical Mental Health Sciences. She worked on pharmacogenetics studies focusing on patient and clinician feedback regarding antipsychotic drug reactions.",
};

export const rassa_pegahi_data = {
  id: "rassa-pegahi",
  image: rassa,
  from: "France",
  name: "Dr. Rassa Pegahi",
  banner: rassa_banner,
  about:
    "Dr. Pegahi earned a PhD in Molecular Biology and has 7 years of oncology experience in hospital and pharmaceutical industry, specializing in medical affairs and clinical trials.",
};

export const anna_w_sobanska_data = {
  id: "anna-w-sobanska",
  image: anna,
  from: "Poland",
  name: "Dr. Anna W. Sobańska",
  banner: anna_banner,
  about:
    "Dr. Sobańska earned a PhD in Organic Chemistry from Oxford and has worked as a formulation chemist at Pollena-Ewa Cosmetic Factory in Poland.",
};

export const barbara_de_filippis_data = {
  id: "barbara-de-filippis",
  image: barbara,
  from: "Italy",
  name: "Prof. Barbara De Filippis",
  banner: barbara_banner,
  about:
    "Prof. De Filippis is Associate Professor in Medicinal Chemistry at the University of Chieti, focusing on small molecule anticancer and antimicrobial research.",
};

export const priya_hays_data = {
  id: "priya-hays",
  image: priya,
  from: "USA",
  name: "Dr. Priya Hays",
  banner: priya_banner,
  about:
    "Dr. Hays is an accomplished science writer with over twenty publications and five books, serving also as a guest editor on cancer immunotherapies.",
};

export const teresa_carvajal_data = {
  id: "teresa-carvajal",
  image: teresa,
  from: "USA",
  name: "Dr. Teresa Carvajal",
  banner: teresa_banner,
  about:
    "Dr. Carvajal is faculty at Purdue University with a focus on material sciences impacting pharmaceutical formulations and manufacturing.",
};

export const huiqin_yang_data = {
  id: "huiqin-yang",
  image: huiqin,
  from: "United Kingdom",
  name: "Dr. Huiqin Yang",
  banner: huiqin_banner,
  about:
    "Dr. Yang is Senior Research Fellow in Health Technology Assessment at University of Exeter with extensive HTA experience for NICE and NIHR programs.",
};

// Map for lookup

export const orators_details_map = {
  "andreas-m-papas": andreas_m_papas_data,
  "maria-richards-brown": maria_richards_brown_data,
  "rassa-pegahi": rassa_pegahi_data,
  "anna-w-sobanska": anna_w_sobanska_data,
  "barbara-de-filippis": barbara_de_filippis_data,
  "priya-hays": priya_hays_data,
  "teresa-carvajal": teresa_carvajal_data,
  "huiqin-yang": huiqin_yang_data,
};
