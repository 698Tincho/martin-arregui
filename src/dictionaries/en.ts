// Placeholder copy — to be reviewed. Contact links are placeholders until the domain exists.
export const en = {
  meta: {
    title: "Martín Arregui · Creative fullstack developer",
    description: "Self-taught fullstack developer in Montevideo with a graphic design background.",
  },
  nav: {
    work: "Work",
    about: "About",
    contact: "Let's talk",
    language: "Language",
  },
  hero: {
    greeting: "Hola, I'm Martín. I live in Montevideo.",
    line1: "Designer who codes.",
    line2Before: "Developer who",
    line2Highlight: "designs",
    line2After: ".",
    intro: "I've spent five years writing code next to great engineers. What I add is the eye: making sure what we build looks right and is easy to use.",
    cta: "See my work",
    sticker: "DESIGN × CODE × DESIGN × CODE × ",
  },
  work: {
    heading: "Things I've built",
    opensInNewTab: "opens in a new tab",
    finanzas: {
      badge: "Personal project",
      title: "Finanzas",
      subtitle: "Personal finance platform",
      description:
        "Turns payslips and card statements into one dashboard and a monthly email summary.",
      tags: ["Next.js", "Postgres", "Node", "Playwright", "Recharts"],
      demoUrl: "https://finanzas.martinarregui.dev",
      codeUrl: "https://github.com/698Tincho/finanzas-demo",
      cta: "Try the demo",
      code: "View code",
      note: "The demo is in Spanish and uses made-up data.",
      chartLabel: "Income · last 12 months",
      demo: "Demo data",
      domain: "finanzas.martinarregui.dev",
      kpis: [
        { label: "Income", value: 4820 },
        { label: "Spending", value: 3710 },
        { label: "Saved", value: 1110 },
      ],
      months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    },
    turchii: {
      badge: "Client · Design & development",
      title: "Juan Turchii",
      subtitle: "Customs broker · Montevideo, since 1986",
      description:
        "Bilingual website: design, development and launch.",
      tags: ["Design", "Development", "Next.js", "ES / EN"],
      url: "https://www.juanturchii.com/en",
      cta: "Visit site",
      image: "/work/turchii.png",
      imageAlt: "Juan Turchii website on desktop",
      domain: "juanturchii.com",
    },
    ferro: {
      badge: "Client · Design & development",
      title: "Ferro Industrial",
      subtitle: "Welding & metal structures · Canelones",
      description:
        "Landing page for an industrial welding company, built around quote requests.",
      tags: ["Design", "Development", "Next.js"],
      url: "https://ferroindustrial.com.uy/",
      cta: "Visit site",
      image: "/work/ferro.png",
      imageAlt: "Ferro Industrial landing page",
      domain: "ferroindustrial.com.uy",
    },
  },
  about: {
    heading: "Graphic designer turned fullstack dev.",
    body: "I started as a graphic designer at an e-commerce company, and development slowly became part of my job: HTML and CSS first, then JavaScript, then the backend. I've now worked as a fullstack developer for five years, and I still look at every screen like a designer.",
    skills: ["UI design", "Branding", "React & Next.js", "TypeScript", "Node", "Postgres", "Automation", "Vercel"],
  },
  marquee: ["Design", "Frontend", "Backend", "Branding", "Next.js", "Automation"],
  soon: {
    badge: "New site in progress",
    intro: "I'm Martín Arregui, a fullstack developer with a graphic design background, based in Montevideo. The full site is on its way. In the meantime, here's where to find me.",
    email: "Email me",
    cv: "Download CV",
    demo: "Finanzas demo",
  },
  contact: {
    kicker: "Working on something, or just want to say hi?",
    cta: "Let's talk",
    email: "martinarregui1994@gmail.com",
    linkedin: "https://www.linkedin.com/in/martin-arregui/",
    github: "https://github.com/698Tincho",
    cv: "CV",
  },
};

export type Dictionary = typeof en;
