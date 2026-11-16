import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/about",
        "/terms",
        "/privacy-policy",
        "/medical-disclaimer",
        "/contact",
        "/faq",
        "/topics/",
        "/sitemap.xml",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
