import type { Locale } from "@/i18n";

// CV content. The PDFs in public/cv are generated from the /[lang]/cv page (npm run cv:pdf).
const en = {
  meta: {
    title: "CV · Martín Arregui",
    description: "Martín Arregui, creative fullstack developer in Montevideo. One-page CV.",
  },
  toolbar: { back: "Back to site", download: "Download PDF" },
  name: "Martín Arregui",
  titleBefore: "",
  titleHighlight: "Creative",
  titleAfter: " fullstack developer",
  contact: [
    "Montevideo, Uruguay · Hybrid",
    "martinarregui1994@gmail.com",
    "linkedin.com/in/martin-arregui",
    "github.com/698Tincho",
  ],
  headings: {
    profile: "Profile",
    experience: "Experience",
    projects: "Selected projects",
    skills: "Skills",
    education: "Education",
    courses: "Courses",
    languages: "Languages",
  },
  profile:
    "Fullstack developer with a graphic design background. For five years I've built web products next to great engineers. What I add is the eye: making sure what we ship looks right and is easy to use.",
  experience: [
    {
      company: "Activo.uy",
      role: "Fullstack Developer · since Sep 2026",
      previous: "Web Developer, Mar 2022 – Sep 2026",
      dates: "Mar 2022 – Present",
    },
    { company: "Wunderman Thompson", role: "Jr. Front-End Developer", dates: "Oct 2021 – Mar 2022" },
    { company: "Suárez & Clavera", role: "Graphic Designer", dates: "Dec 2020 – Oct 2021" },
    { company: "TocToc Viajes", role: "Jr. Web Developer", dates: "Aug 2019 – May 2020" },
    { company: "CARDINAL", role: "Graphic Designer", dates: "2018 – 2019" },
  ] as { company: string; role: string; dates: string; previous?: string }[],
  projects: [
    {
      name: "Finanzas",
      text: "Personal finance platform. Turns payslips and card statements into one dashboard and a monthly email summary. Next.js, Postgres, Node, Playwright.",
    },
    { name: "Juan Turchii", text: "Bilingual website for a customs broker. Design, development and launch. Next.js." },
    {
      name: "Ferro Industrial",
      text: "Landing page for an industrial welding company, built around quote requests. Next.js.",
    },
  ],
  skills: [
    { group: "Design", items: ["UI design", "Branding", "Typography", "Layout"] },
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML / CSS / Sass"] },
    { group: "Backend", items: ["Node", "Postgres", "APIs", "Automation"] },
    { group: "Shipping", items: ["Vercel", "Playwright", "i18n"] },
  ],
  education: { degree: "BA in Graphic Design", school: "Universidad de la Empresa", dates: "2016 – 2020" },
  courses: [
    { name: "Front-End Developer", school: "Hack Academy" },
    { name: "WordPress Developer", school: "Udemy" },
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
};

export type CV = typeof en;

const es: CV = {
  meta: {
    title: "CV · Martín Arregui",
    description: "Martín Arregui, desarrollador fullstack creativo en Montevideo. CV de una página.",
  },
  toolbar: { back: "Volver al sitio", download: "Descargar PDF" },
  name: "Martín Arregui",
  titleBefore: "Desarrollador fullstack ",
  titleHighlight: "creativo",
  titleAfter: "",
  contact: [
    "Montevideo, Uruguay · Híbrido",
    "martinarregui1994@gmail.com",
    "linkedin.com/in/martin-arregui",
    "github.com/698Tincho",
  ],
  headings: {
    profile: "Perfil",
    experience: "Experiencia",
    projects: "Proyectos destacados",
    skills: "Habilidades",
    education: "Educación",
    courses: "Cursos",
    languages: "Idiomas",
  },
  profile:
    "Desarrollador fullstack con formación en diseño gráfico. Hace cinco años que construyo productos web al lado de muy buenos ingenieros. Lo que yo sumo es el ojo: que lo que publicamos se vea bien y sea fácil de usar.",
  experience: [
    {
      company: "Activo.uy",
      role: "Desarrollador Fullstack · desde sep. 2026",
      previous: "Desarrollador Web, mar. 2022 – sep. 2026",
      dates: "mar. 2022 – actualidad",
    },
    { company: "Wunderman Thompson", role: "Desarrollador Front-End Jr.", dates: "oct. 2021 – mar. 2022" },
    { company: "Suárez & Clavera", role: "Diseñador Gráfico", dates: "dic. 2020 – oct. 2021" },
    { company: "TocToc Viajes", role: "Desarrollador Web Jr.", dates: "ago. 2019 – may. 2020" },
    { company: "CARDINAL", role: "Diseñador Gráfico", dates: "2018 – 2019" },
  ],
  projects: [
    {
      name: "Finanzas",
      text: "Plataforma de finanzas personales. Convierte recibos de sueldo y estados de cuenta de tarjetas en un solo dashboard y un resumen mensual por mail. Next.js, Postgres, Node, Playwright.",
    },
    { name: "Juan Turchii", text: "Sitio bilingüe para un despachante de aduanas. Diseño, desarrollo y lanzamiento. Next.js." },
    {
      name: "Ferro Industrial",
      text: "Landing page para una empresa de soldadura industrial, pensada para pedir presupuesto. Next.js.",
    },
  ],
  skills: [
    { group: "Diseño", items: ["Diseño UI", "Branding", "Tipografía", "Composición"] },
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML / CSS / Sass"] },
    { group: "Backend", items: ["Node", "Postgres", "APIs", "Automatización"] },
    { group: "Publicación", items: ["Vercel", "Playwright", "i18n"] },
  ],
  education: { degree: "Licenciatura en Diseño Gráfico", school: "Universidad de la Empresa", dates: "2016 – 2020" },
  courses: [
    { name: "Front-End Developer", school: "Hack Academy" },
    { name: "WordPress Developer", school: "Udemy" },
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Fluido" },
  ],
};

export const getCV = (locale: Locale): CV => ({ en, es })[locale];

export const cvPdfPath = (locale: Locale) => `/cv/martin-arregui-cv-${locale}.pdf`;
