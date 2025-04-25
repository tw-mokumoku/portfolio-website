import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher';
import Negotiator, { Headers } from 'negotiator'
 

// supported locales in app
let locales = ['en', 'ja'];
// default locale in app
let defaultLocale = 'ja';

const getLocale = (request:NextRequest):string => {
    let headers = {'accept-language': request.headers.get('accept-language') ?? undefined};
    let languages = new Negotiator({headers}).languages();
    return match(languages, locales, defaultLocale) // -> 'en-US'
}

export function middleware(request:NextRequest) {
    const { pathname } = request.nextUrl;
    
    // 画像ファイル系は処理をしない
    /*
    <Link>を使用していると、prefetchが行われるため、リストページなどでは大量にmiddlewareが実行される。
    そのため、大量のmiddleware実行を回避するために以下のコードを追記。
    */
   if (
       pathname.endsWith(".svg") ||
       pathname.endsWith(".ico") ||
       pathname.endsWith(".jpg") ||
       pathname.endsWith(".jpeg") ||
       pathname.endsWith(".png") ||
       pathname.endsWith(".gif") ||
       pathname.endsWith(".webp")
    ) {
        return NextResponse.next();
    }
    
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  ) 
  if (pathnameHasLocale) return;
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}