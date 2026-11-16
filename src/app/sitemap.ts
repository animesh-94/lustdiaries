import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getTopicHref, isExternalHref, WELLNESS_TOPICS } from "@/data/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-16T00:00:00.000Z");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/medical-disclaimer`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const internalTopicPages: MetadataRoute.Sitemap = WELLNESS_TOPICS.filter(
    (topic) => !isExternalHref(getTopicHref(topic.slug))
  ).map((topic) => ({
    url: `${SITE_URL}/topics/${topic.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...internalTopicPages];
}

