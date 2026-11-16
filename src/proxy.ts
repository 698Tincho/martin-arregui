import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale } from "@/i18n";

// Picks the visitor's language from the Accept-Language header ("es-UY,es;q=0.9,en;q=0.8").
function preferredLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return ranked.find((p) => hasLocale(p.lang))?.lang ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (hasLocale(first)) return;

  request.nextUrl.pathname = `/${preferredLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and any file with an extension (images, cv.pdf, favicon…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
