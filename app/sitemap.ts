import type { MetadataRoute } from 'next';
import { blogService } from '@/lib/blogService';

const BASE_URL = 'https://swiftexchange.io';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogRoutes: MetadataRoute.Sitemap = [];
  let lastBlogUpdate = new Date();

  try {
    const posts = await blogService.getAllPostsMetadata();
    if (posts.length > 0) {
      const dates = posts.map(p => new Date(p.date).getTime());
      lastBlogUpdate = new Date(Math.max(...dates));
    }

    blogRoutes = posts.map(post => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Error fetching slugs for sitemap:', error);
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/fiat-exchange`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/swiftex-wallet`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: lastBlogUpdate, // Use the most recent blog post date
      changeFrequency: 'daily', // Listing page changes daily if you post daily
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...blogRoutes];
}
