import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  console.log("PATH:", request.nextUrl.pathname);
  console.log("SESSION COOKIE:", session);


  if (!session) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }


  const payload = await verifySession(session);

  if (!payload) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};