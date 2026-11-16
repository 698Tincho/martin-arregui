# martinarregui.dev

My portfolio: a few projects in depth, an about section and a printable CV, in English and Spanish.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. The motion uses GSAP
(with SplitText and ScrollTrigger) and Lenis for smooth scrolling, and turns off when the visitor
asks for reduced motion.

## Run it

```bash
npm install
npm run dev       # http://localhost:3000 (redirects to /en or /es)
```

## CV

The CV is a page (`/en/cv`, `/es/cv`) whose content lives in `src/dictionaries/cv.ts`. The PDFs
in `public/cv` are generated from it. After changing the CV, start the site and run:

```bash
npm run cv:pdf
```
