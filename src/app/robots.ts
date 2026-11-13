import type { MetadataRoute } from "next";

/**
 * Blocks all search engine crawling in this pure noindex environment.
 * Note: If your ad-verification crawler requires crawling the page to read
 * the `noindex` meta tag and `X-Robots-Tag` header, change `disallow: "/"`
 * to `allow: "/"` while keeping the strict `noindex` tags active.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}

