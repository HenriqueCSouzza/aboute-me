import { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let headers = { "accept-language": "pt-BR,pt;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en-US", "pt-BR"];
let defaultLocale = "pt-BR";

match(languages, locales, defaultLocale); // -> 'en-US'

function getLocale(request: NextRequest): string {
  const acceptLanguageHeader = request.headers.get("Accept-Language");

  if (!acceptLanguageHeader) {
    return "pt-BR"; // Retornando 'en' como idioma padrão (Inglês).
  }

  const [preferredLocale] = acceptLanguageHeader
    .split(",")
    .map((part) => part.split(";")[0].trim());

  return preferredLocale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
