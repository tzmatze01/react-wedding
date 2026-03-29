import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./config";
import { getSessionData } from "@/api/login/auth";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

function redirect(request: NextRequest, path: string) {
  const redirectRequest = request.nextUrl.clone();
  redirectRequest.pathname = `/en/${path}`;
  return NextResponse.redirect(redirectRequest);
}

export async function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request);
  const { pathname } = request.nextUrl;

  if (intlResponse && intlResponse.headers.get("location")) {
    console.log("return intl reponse");
    return intlResponse;
  }

  const pathnameWithoutLocale = pathname.replace(/^\/(en|de|es)/, "");
  const publicRoutes = ["/login", "/unauthorized", "/register"]; // add any other public routes

  if (publicRoutes.some((route) => pathnameWithoutLocale.startsWith(route))) {
    console.log("public route, skipping auth check");
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get("session");

  if (!sessionCookie) {
    console.log("no session cookie");
    return redirect(request, "login");
  }

  const sessionData = await getSessionData(sessionCookie.value);
  console.log("sessionData ", JSON.stringify(sessionData, null, 2));
  if (!sessionData) {
    // Invalid session
    console.log("invalid session");
    return redirect(request, "login");
  }

  if (pathnameWithoutLocale.startsWith("overview")) {
    if (!sessionData.roles.includes("admin")) {
      return redirect(request, "unauthorized");
    }
  } else if (pathnameWithoutLocale.startsWith("home")) {
    if (!sessionData.roles.includes("user")) {
      return redirect(request, "unauthorized");
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/(en|de|es)/login", "/(en|de|es)/home/:path*", "/(en|de|es)/overview/:path*"],
};
