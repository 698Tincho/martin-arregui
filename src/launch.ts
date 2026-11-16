// While the site is being finished, the live domain (Vercel production) shows the holding page at
// /[lang]/soon instead of the full site. Local dev and Vercel preview deployments show everything.
// To launch the full site: set LAUNCHED to true and push.
const LAUNCHED = false;

export const comingSoon = !LAUNCHED && process.env.VERCEL_ENV === "production";
