import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { hasLocale, locales } from "@/i18n";
import { getDictionary } from "@/dictionaries";
import SmoothScroll from "@/components/SmoothScroll";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { languages: { en: "/en", es: "/es" } },
  };
}

// Runs before first paint: opt in to entrance animations only when the
// visitor allows motion, and bail out if the app never hydrates.
const motionScript = `(function(){try{var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: no-preference)').matches){d.classList.add('motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('motion')},4000)}}catch(e){}})()`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${bricolage.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
