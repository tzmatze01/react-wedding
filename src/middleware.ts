import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request);

  const { pathname } = request.nextUrl;
  if (intlResponse && intlResponse.headers.get("location")) {
    return intlResponse;
  }

  const protectedRoutes = ["/home", "/overview"];

  // Remove locale prefix (e.g. /en/home → /home)
  const pathnameWithoutLocale = pathname.replace(/^\/(en|de|es)/, "");

  if (
    protectedRoutes.some((route) => pathnameWithoutLocale.startsWith(route))
  ) {
    const token = request.cookies.get("session")?.value;

    if (!token) {
      const locale = request.nextUrl.locale;

      return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
    }

    // TODO: Optionally, verify token validity and user permissions
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/(en|de|es)/login",
    "/(en|de|es)/home/:path*",
    "/(en|de|es)/overview/:path*",
  ],
};
