import { Metadata } from 'next';
import { blogService } from '@/lib/blogService';
import BlogListClient from '@/components/BlogListClient';
import ErrorFallback from '@/components/ErrorFallback';
import { Suspense } from 'react';

interface PageProps {
  searchParams: Promise<{
    tags?: string;
    search?: string;
  }>;
}
export const revalidate = 60;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const category = params.tags || 'All';

  const title = `SwiftEx Blog | ${category !== 'All' ? category + ' ' : ''}Crypto News & Insights`;
  const description = `Stay updated with the latest crypto news, market insights, and blockchain innovations on the SwiftEx blog.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// Loading component
function BlogListLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden h-full flex flex-col shadow-sm animate-pulse"
            >
              <div className="relative w-full h-48 bg-gray-200"></div>
              <div className="p-4 flex-grow">
                <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function BlogContent({ searchParams }: PageProps) {
  const params = await searchParams;
  const tags = params.tags || 'All';
  const search = params.search || '';

  try {
    const { posts, pagination } = await blogService.getBlogs({
      page: 1,
      limit: 6,
      tags: tags !== 'All' ? tags : undefined,
      search: search || undefined,
    });

    // Optimize tag extraction
    const allTags =
      posts.length > 0 ? Array.from(new Set(posts.flatMap(blog => blog.tags || []))) : [];
    const uniqueTags = ['All', ...allTags];

    return (
      <BlogListClient
        initialBlogs={posts}
        initialPagination={pagination}
        initialTags={uniqueTags}
        initialSelectedCategory={tags}
        initialSearchTerm={search}
      />
    );
  } catch (error) {
    console.error('Error loading blogs:', error);
    return (
      <ErrorFallback error={error instanceof Error ? error : new Error('Unknown error occurred')} />
    );
  }
}

export default async function BlogListPage(props: PageProps) {
  return (
    <Suspense fallback={<BlogListLoading />}>
      <BlogContent {...props} />
    </Suspense>
  );
}
