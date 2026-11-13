import { NextResponse } from "next/server";

const NOINDEX_HEADER_VALUE =
  "noindex, nofollow, noarchive, nosnippet, noimageindex";

/**
 * Enforces a strict noindex HTTP response header across every route
 * and asset handled by Next.js 16 Proxy.
 */
export function proxy() {
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", NOINDEX_HEADER_VALUE);
  return response;
}

export const config = {
  matcher: "/:path*",
};

