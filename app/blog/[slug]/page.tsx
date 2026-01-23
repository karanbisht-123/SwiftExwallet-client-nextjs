import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogService } from '@/lib/blogService';
import BlogDetailClient from '@/components/BlogDetailClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL || '';
export async function generateStaticParams() {
  try {
    const posts = await blogService.getAllPostsMetadata();
    return posts.map(post => ({ slug: post.slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const data = await blogService.getBlogBySlug(slug);
    const blog = data.post;
    const url = `https://swiftexchange.io/blog/${slug}`;
    const imageUrl = blog.imageUrl ? `${S3_BASE_URL}/${blog.imageUrl}` : '';

    return {
      title: `${blog.title}`,
      description: blog.excerpt || blog.content.substring(0, 160),
      keywords: [...blog.tags, 'SwiftEx', 'crypto', 'blockchain', 'cryptocurrency'],
      alternates: { canonical: url },
      authors: [{ name: blog.author.username }],
      openGraph: {
        title: blog.title,
        description: blog.excerpt || blog.content.substring(0, 160),
        url,
        type: 'article',
        publishedTime: blog.date,
        authors: [blog.author.username],
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        siteName: 'SwiftEx',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@SwiftExwallet',
        title: blog.title,
        description: blog.excerpt || blog.content.substring(0, 160),
        images: imageUrl ? [imageUrl] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Blog Not Found | SwiftEx',
      description: 'The requested blog post could not be found.',
    };
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  try {
    const { slug } = await params;
    const [blogData, relatedData] = await Promise.all([
      blogService.getBlogBySlug(slug),
      blogService.getRelatedBlogs(1, 3),
    ]);

    return (
      <BlogDetailClient
        blog={blogData.post}
        initialRelatedBlogs={relatedData.posts}
        initialPagination={relatedData.pagination}
      />
    );
  } catch (error) {
    console.error('Error loading blog:', error);
    notFound();
  }
}
