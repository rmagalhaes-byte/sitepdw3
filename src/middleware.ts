import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // ── Admin auth gate ───────────────────────────────────────────────────────
  if (/^\/(pt|en)\/admin(\/|$)/.test(pathname)) {
    if (
      process.env.NODE_ENV !== 'production' &&
      searchParams.get('admin_dev') === '1'
    ) {
      return NextResponse.next();
    }

    const cookie = request.cookies.get('pdw_admin')?.value;
    const expected = process.env.PDW_ADMIN_TOKEN;

    if (expected && cookie === expected) {
      return NextResponse.next();
    }

    const lang = pathname.split('/')[1] || 'pt';
    const url = request.nextUrl.clone();
    url.pathname = `/${lang}`;
    url.searchParams.set('admin_denied', '1');
    return NextResponse.redirect(url);
  }

  // ── i18n locale redirect ──────────────────────────────────────────────────
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
