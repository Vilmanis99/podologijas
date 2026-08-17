import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Exposes the request pathname to the root layout so it can set <html lang>
// correctly for the /ru routes — the layout has no other way to see the URL.
//
// This file also used to hold an HTTP Basic Auth lock that kept the site
// private before launch. That is gone; the site is public.
export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Only pages need the pathname header, so skip static assets entirely.
  matcher: [
    "/((?!_next/static|_next/image|_next/data|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp|avif|ico|css|js|woff|woff2|ttf|map)$).*)",
  ],
};
