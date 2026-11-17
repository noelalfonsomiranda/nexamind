import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  const pathname = request.nextUrl.pathname;

  const isLoggedIn = !!session;

  const isAuthPage =
    pathname.startsWith("/login");

  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/settings");


  // User is NOT logged in
  // Trying to access protected pages
  if (
    isProtectedRoute &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }


  // User IS logged in
  // Trying to access login page
  if (
    isAuthPage &&
    isLoggedIn
  ) {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/login",
  ],
};