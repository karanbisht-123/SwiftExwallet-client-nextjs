import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/privacy-policy', '/terms-of-service', '/anti-money-laundering'],
    },
    sitemap: 'https://swiftexchange.io/sitemap.xml',
  };
}
