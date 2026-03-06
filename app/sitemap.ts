import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.wfdev.ca";

  const staticPages = [
    "",
    "/residential",
    "/rentals",
    "/commercial",
    "/hospitality",
    "/customer-service",
    "/careers",
  ];

  return staticPages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
