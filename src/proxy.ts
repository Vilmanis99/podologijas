import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Preview lockdown — HTTP Basic Auth so the site can be shown privately
// (e.g. to a colleague) while staying completely unreachable to Google and
// other crawlers. Override the credentials with PREVIEW_USER / PREVIEW_PASSWORD
// env vars in Vercel. Remove this file (and the env vars) to go fully public.
const USER = process.env.PREVIEW_USER || "podolo";
const PASS = process.env.PREVIEW_PASSWORD || "preview2026";

export function proxy(request: NextRequest) {
  const header = request.headers.get("authorization");

  if (header?.startsWith("Basic ")) {
    const decoded = atob(header.slice(6));
    const separator = decoded.indexOf(":");
    const user = decoded.slice(0, separator);
    const pass = decoded.slice(separator + 1);

    if (user === USER && pass === PASS) {
      // Expose the pathname to the root layout so it can set <html lang>.
      const headers = new Headers(request.headers);
      headers.set("x-pathname", request.nextUrl.pathname);
      return NextResponse.next({ request: { headers } });
    }
  }

  return new NextResponse("Šī lapa ir privāta.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Podologijas Klinika Preview", charset="UTF-8"',
      // Belt-and-suspenders: even the challenge page tells crawlers to stay out.
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  // Protect every HTML page/route, but let static assets through so the image
  // optimizer can fetch source files (its internal fetch carries no auth) and
  // so CSS/JS/fonts load on the 401 challenge page. Pages still require the
  // password → Google cannot index the site.
  matcher: [
    "/((?!_next/static|_next/image|_next/data|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp|avif|ico|css|js|woff|woff2|ttf|map)$).*)",
  ],
};
