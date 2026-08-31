import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher';

// supported locales in app
const locales = ['en', 'ja'];
// default locale in app
const defaultLocale = 'ja';

// Parse Accept-Language without negotiator (Node-only; breaks Vercel Edge middleware).
const parseAcceptLanguage = (header: string | null): string[] => {
    if (!header) return [];
    return header
        .split(',')
        .map((part) => part.split(';')[0]?.trim())
        .filter(Boolean) as string[];
};

const getLocale = (request: NextRequest): string => {
    const languages = parseAcceptLanguage(request.headers.get('accept-language'));
    return match(languages, locales, defaultLocale);
};

export function middleware(request:NextRequest) {
    const { pathname } = request.nextUrl;
    
    // Skip static assets and public HTML pages
   if (
       pathname.endsWith(".svg") ||
       pathname.endsWith(".ico") ||
       pathname.endsWith(".jpg") ||
       pathname.endsWith(".jpeg") ||
       pathname.endsWith(".png") ||
       pathname.endsWith(".gif") ||
       pathname.endsWith(".webp") ||
       pathname.endsWith(".html") ||
       pathname.endsWith(".mp3") ||
       pathname.endsWith("chill") ||
       pathname.endsWith("kawaii") ||
       pathname.endsWith("privacy")
    ) {
        return NextResponse.next();
    }
    
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  ) 
  if (pathnameHasLocale) return;
 
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}
