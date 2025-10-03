import type { MetadataRoute } from "next";
import { allLocations, services } from '@/data/locations';

const siteUrlString = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  
  // Static pages
  const staticPages = [
    {
      url: `${siteUrlString}/`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${siteUrlString}/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrlString}/contact`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrlString}/services`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Location pages
  const locationPages = allLocations.map((location) => ({
    url: `${siteUrlString}/location/${location.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service pages
  const servicePages = services.map((service) => ({
    url: `${siteUrlString}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service-location combination pages
  const serviceLocationPages = [];
  for (const service of services) {
    for (const location of allLocations) {
      serviceLocationPages.push({
        url: `${siteUrlString}/services/${service.slug}/${location.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    }
  }

  // Blog pages (for future content)
  const blogPages = [
    {
      url: `${siteUrlString}/blog`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrlString}/blog/jcb-excavation-guide-prayagraj`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrlString}/blog/road-construction-uttar-pradesh`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrlString}/blog/demolition-services-safety-guide`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrlString}/blog/earthmoving-equipment-rental-tips`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrlString}/blog/construction-equipment-maintenance`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [
    ...staticPages,
    ...locationPages,
    ...servicePages,
    ...serviceLocationPages,
    ...blogPages,
  ];
}