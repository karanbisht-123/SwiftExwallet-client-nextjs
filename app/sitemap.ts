import type { MetadataRoute } from 'next';

const BASE_URL = 'https://swiftexchange.io';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/swiftex-wallet`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...staticRoutes];
}
