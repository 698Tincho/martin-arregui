import type { Dictionary } from "./en";

// Borrador de textos — a revisar.
export const es: Dictionary = {
  meta: {
    title: "Martín Arregui · Desarrollador fullstack creativo",
    description: "Desarrollador fullstack autodidacta en Montevideo, con formación en diseño gráfico.",
  },
  nav: {
    work: "Trabajos",
    about: "Sobre mí",
    contact: "Hablemos",
    language: "Idioma",
  },
  hero: {
    greeting: "Hola, soy Martín. Vivo en Montevideo.",
    line1: "Diseñador que programa.",
    line2Before: "Desarrollador que",
    line2Highlight: "diseña",
    line2After: ".",
    intro: "Hace cinco años que programo al lado de muy buenos ingenieros. Lo que yo sumo es el ojo: que lo que construimos se vea bien y sea fácil de usar.",
    cta: "Ver trabajos",
    sticker: "DISEÑO × CÓDIGO × DISEÑO × CÓDIGO × ",
  },
  work: {
    heading: "Lo que construí",
    opensInNewTab: "se abre en una pestaña nueva",
    finanzas: {
      badge: "Proyecto personal",
      title: "Finanzas",
      subtitle: "Plataforma de finanzas personales",
      description:
        "Convierte recibos de sueldo y estados de cuenta de tarjetas en un solo dashboard y un resumen mensual por mail.",
      tags: ["Next.js", "Postgres", "Node", "Playwright", "Recharts"],
      demoUrl: "https://finanzas.martinarregui.dev",
      codeUrl: "https://github.com/698Tincho/finanzas-demo",
      cta: "Probar la demo",
      code: "Ver el código",
      note: "La demo usa datos inventados.",
      chartLabel: "Ingresos · últimos 12 meses",
      demo: "Datos de ejemplo",
      domain: "finanzas.martinarregui.dev",
      kpis: [
        { label: "Ingresos", value: 4820 },
        { label: "Gastos", value: 3710 },
        { label: "Ahorro", value: 1110 },
      ],
      months: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    },
    turchii: {
      badge: "Cliente · Diseño y desarrollo",
      title: "Juan Turchii",
      subtitle: "Despachante de aduanas · Montevideo, desde 1986",
      description:
        "Sitio bilingüe: diseño, desarrollo y lanzamiento.",
      tags: ["Diseño", "Desarrollo", "Next.js", "ES / EN"],
      url: "https://www.juanturchii.com/",
      cta: "Ver sitio",
      image: "/work/turchii.png",
      imageAlt: "Sitio de Juan Turchii en escritorio",
      domain: "juanturchii.com",
    },
    ferro: {
      badge: "Cliente · Diseño y desarrollo",
      title: "Ferro Industrial",
      subtitle: "Soldadura y estructuras metálicas · Canelones",
      description:
        "Landing page para una empresa de soldadura industrial, pensada para pedir presupuesto.",
      tags: ["Diseño", "Desarrollo", "Next.js"],
      url: "https://ferroindustrial.com.uy/",
      cta: "Ver sitio",
      image: "/work/ferro.png",
      imageAlt: "Landing page de Ferro Industrial",
      domain: "ferroindustrial.com.uy",
    },
  },
  about: {
    heading: "De diseñador gráfico a desarrollador fullstack.",
    body: "Empecé como diseñador gráfico en un e-commerce, y de a poco el desarrollo se volvió parte de mi trabajo: primero HTML y CSS, después JavaScript, después el backend. Hace cinco años que trabajo como desarrollador fullstack y sigo mirando cada pantalla con ojos de diseñador.",
    skills: ["Diseño UI", "Branding", "React y Next.js", "TypeScript", "Node", "Postgres", "Automatización", "Vercel"],
  },
  marquee: ["Diseño", "Frontend", "Backend", "Branding", "Next.js", "Automatización"],
  soon: {
    badge: "Sitio nuevo en construcción",
    intro: "Soy Martín Arregui, desarrollador fullstack con formación en diseño gráfico, en Montevideo. El sitio completo está en camino. Mientras tanto, me encontrás acá.",
    email: "Escribime",
    cv: "Descargar CV",
    demo: "Demo de Finanzas",
  },
  contact: {
    kicker: "¿Estás con un proyecto o querés charlar?",
    cta: "Hablemos",
    email: "martinarregui1994@gmail.com",
    linkedin: "https://www.linkedin.com/in/martin-arregui/",
    github: "https://github.com/698Tincho",
    cv: "CV",
  },
};
