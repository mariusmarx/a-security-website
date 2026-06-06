import type { MetadataRoute } from "next";
import { siteMeta } from "@/content/site";
import { pillars } from "@/content/services";

const lastModified = "2026-06-03";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMeta.url;
  const entries: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    ...pillars.map((p) => ({
      url: `${base}/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/impressum`, lastModified, priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified, priority: 0.2 },
  ];
  return entries;
}
