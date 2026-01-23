import { BlogListResponse, BlogDetailResponse } from '@/types/blog';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://swiftexchange.io/api/v2';

export const blogService = {
  async getBlogs(params: {
    page?: number;
    limit?: number;
    tags?: string;
    search?: string;
  }): Promise<BlogListResponse> {
    const queryParams = new URLSearchParams({
      page: (params.page || 1).toString(),
      limit: (params.limit || 6).toString(),
      ...(params.tags && params.tags !== 'All' && { tags: params.tags }),
      ...(params.search && { search: params.search }),
    });

    const response = await fetch(`${API_BASE_URL}/blogs?${queryParams}`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }

    return response.json();
  },

  async getBlogBySlug(slug: string): Promise<BlogDetailResponse> {
    const response = await fetch(`${API_BASE_URL}/blogs/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }

    return response.json();
  },

  async getAllPostsMetadata(): Promise<{ slug: string; date: string }[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs?limit=1000`, {
        next: { revalidate: 3600 },
      });

      if (!response.ok) {
        return [];
      }

      const data: BlogListResponse = await response.json();
      return data.posts.map(post => ({
        slug: post.slug,
        date: post.date,
      }));
    } catch (error) {
      console.error('Error fetching blog slugs:', error);
      return [];
    }
  },

  async getRelatedBlogs(page: number = 1, limit: number = 3): Promise<BlogListResponse> {
    const response = await fetch(`${API_BASE_URL}/blogs?page=${page}&limit=${limit}`, {
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch related blogs');
    }

    return response.json();
  },
};
