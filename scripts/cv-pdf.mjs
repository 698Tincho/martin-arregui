// Renders /en/cv and /es/cv to A4 PDFs in public/cv.
// Usage: start the site (npm run build && npm start, or npm run dev), then
//   npm run cv:pdf            (uses http://localhost:3000)
//   npm run cv:pdf -- http://localhost:3123
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const base = process.argv[2] ?? "http://localhost:3000";
const outDir = fileURLToPath(new URL("../public/cv/", import.meta.url));

const browser = await chromium.launch();
try {
  for (const lang of ["en", "es"]) {
    const page = await browser.newPage();
    const res = await page.goto(`${base}/${lang}/cv`, { waitUntil: "networkidle" });
    if (!res?.ok()) throw new Error(`${lang}: HTTP ${res?.status()}`);
    await page.evaluate(() => document.fonts.ready);
    const path = `${outDir}martin-arregui-cv-${lang}.pdf`;
    await page.pdf({ path, preferCSSPageSize: true, printBackground: true });
    console.log("wrote", path);
    await page.close();
  }
} finally {
  await browser.close();
}
