import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const NOINDEX_HEADER_VALUE =
  "noindex, nofollow, noarchive, nosnippet, noimageindex";

const SITEMAP_INDEXABLE_PREFIXES = [
  "/sitemap.xml",
  "/about",
  "/terms",
  "/privacy-policy",
  "/medical-disclaimer",
  "/contact",
  "/faq",
  "/topics",
  "/_next",
  "/images",
  "/icon.svg",
  "/apple-icon",
];

/**
 * Keeps the ad landing page `/` and unlisted paths strictly `noindex`,
 * while allowing compliance, editorial, and sitemap routes to be accepted
 * cleanly by Search Console and XML sitemap validators.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  const isIndexable = SITEMAP_INDEXABLE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (!isIndexable) {
    response.headers.set("X-Robots-Tag", NOINDEX_HEADER_VALUE);
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};
