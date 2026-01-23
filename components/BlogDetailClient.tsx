'use client';

import {
  useState,
  useMemo,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types/blog';
import SharePost from './SharePost';
import { replaceS3Url } from '@/utils/imageUtils';

interface BlogDetailClientProps {
  blog: Blog;
  initialRelatedBlogs: Blog[];
  initialPagination: {
    totalPosts: number;
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL || '';

const prependS3UrlToContent = (html: string) => {
  if (!html) return html;

  return html.replace(/(src|href)=["']([^"']+)["']/g, (_match, attr, value) => {
    if (/^(https?:|data:|mailto:)/.test(value)) {
      return `${attr}="${value}"`;
    }
    return `${attr}="${S3_BASE_URL}/${value}"`;
  });
};
export default function BlogDetailClient({
  blog,
  initialRelatedBlogs,
  initialPagination,
}: BlogDetailClientProps) {
  const [relatedBlogs, setRelatedBlogs] = useState(initialRelatedBlogs);
  const [pagination, setPagination] = useState(initialPagination);
  const [isLoadingRelated, setIsLoadingRelated] = useState(false);

  const processedBlog = useMemo(
    () => ({
      ...blog,
      content: prependS3UrlToContent(blog.content),
      imageUrl: blog.imageUrl ? `${S3_BASE_URL}/${blog.imageUrl}` : null,
      excerpt: blog.excerpt ? `${S3_BASE_URL}/${blog.imageUrl}` : null,
    }),
    [blog]
  );

  const processedRelatedBlogs = useMemo(() => {
    return relatedBlogs.map(relatedBlog => ({
      ...relatedBlog,
      content: replaceS3Url(relatedBlog.content),
      imageUrl: relatedBlog.imageUrl ? replaceS3Url(relatedBlog.imageUrl) : null,
      excerpt: relatedBlog.excerpt ? replaceS3Url(relatedBlog.excerpt) : null,
    }));
  }, [relatedBlogs]);

  const fetchRelatedBlogs = async (page: number) => {
    setIsLoadingRelated(true);
    try {
      const response = await fetch(`/api/related-blogs?page=${page}&limit=3`);
      const data = await response.json();
      setRelatedBlogs(data.posts);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching related blogs:', error);
    } finally {
      setIsLoadingRelated(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        .styled-content {
          color: #374151 !important;
          font-size: 1.125rem !important;
          line-height: 1.8 !important;
          max-width: 100% !important;
          overflow-wrap: break-word !important;
          font-family:
            'Inter',
            ui-sans-serif,
            system-ui,
            -apple-system,
            sans-serif !important;
        }

        .styled-content h1 {
          font-size: clamp(1.75rem, 4vw, 2.25rem) !important;
          font-weight: 600 !important;
          color: #111827 !important;
          margin: 1.75rem 0 1rem !important;
          line-height: 1.25 !important;
          letter-spacing: -0.02em !important;
        }

        .styled-content h2 {
          font-size: clamp(1.35rem, 3.5vw, 1.75rem) !important;
          font-weight: 600 !important;
          color: #111827 !important;
          margin: 1.5rem 0 0.75rem !important;
          line-height: 1.35 !important;
        }

        .styled-content h3 {
          font-size: 1.25rem !important;
          font-weight: 600 !important;
          color: #1f2937 !important;
          margin: 1.25rem 0 0.5rem !important;
        }

        .styled-content p {
          color: #4b5563 !important;
      
        }

        .styled-content ul {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
        }

        .styled-content ol {
          list-style-type: decimal !important;
          padding-left: 1.5rem !important;
        }

        .styled-content li {
          color: #4b5563 !important;
          display: list-item !important;
        }

        .styled-content img {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 12px !important;
          margin: 2.5rem auto !important;
          display: block !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
        }

        .styled-content blockquote {
          border-left: 4px solid #2563eb !important;
          background-color: #f8fafc !important;
          padding: 1.5rem 2rem !important;
          margin: 2rem 0 !important;
          color: #1e40af !important;
          font-style: italic !important;
          font-size: 1.25rem !important;
          border-radius: 0 12px 12px 0 !important;
        }

        .styled-content pre {
          background-color: #111827 !important;
          color: #f3f4f6 !important;
          border-radius: 12px !important;
          padding: 1.25rem !important;
          margin: 1.5rem 0 !important;
          overflow-x: auto !important;
        }

        .styled-content code {
          background-color: #f3f4f6 !important;
          color: #dc2626 !important;
          padding: 0.2rem 0.4rem !important;
          border-radius: 6px !important;
          font-size: 0.9em !important;
          font-family: ui-monospace, monospace !important;
        }

        .styled-content a {
          color: #2563eb !important;
          font-weight: 500 !important;
          transition: all 0.2s ease !important;
          display: inline !important;
        }

        .styled-content a:hover {
          color: #1d4ed8 !important;
          text-decoration-color: #1d4ed8 !important;
        }

        /* Normalize link styling - remove unwanted bold/underline from nested elements */
        .styled-content a strong,
        .styled-content a b,
        .styled-content a u {
          font-weight: inherit !important;
          text-decoration: none !important;
        }

        .styled-content p u,
        .styled-content p strong a,
        .styled-content p u a {
          font-weight: 500 !important;
          text-decoration: none !important;
        }

        @media (max-width: 768px) {
          .styled-content {
            font-size: 1rem !important;
          }

          .styled-content blockquote {
            padding: 1rem 1.25rem !important;
            font-size: 1.1rem !important;
          }

          .styled-content ul,
          .styled-content ol {
            padding-left: 1.25rem !important;
          }
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto p-2 md:p-6 bg-white lg:rounded-lg lg:border border-gray-200 mt-3 lg:mt-10"
      >
        <header className="flex justify-between items-center mb-8">
          <Link
            href="/blog"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="mr-2" />
            <span>Back to Blogs</span>
          </Link>
        </header>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <article className="mb-12 max-w-4xl mx-auto px-2 lg:px-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
              >
                {processedBlog.title}
              </motion.h1>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 text-gray-600 mb-8 pb-6 border-b border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">S</span>
                  </div>
                  <span className="font-medium">By {processedBlog.author.username}</span>
                </div>
                <span className="text-gray-400">•</span>
                <time className="text-gray-500">
                  {new Date(processedBlog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="prose max-w-none text-gray-700 styled-content"
                dangerouslySetInnerHTML={{ __html: processedBlog.content }}
              />
            </article>
          </div>

          <aside className="lg:w-1/3 sticky top-24 self-start space-y-6">
            <SharePost
              url={typeof window !== 'undefined' ? window.location.href : ''}
              title={processedBlog.title}
            />
            <RelatedPosts
              relatedBlogs={processedRelatedBlogs}
              pagination={pagination}
              onPageChange={fetchRelatedBlogs}
              isLoading={isLoadingRelated}
            />
          </aside>
        </div>
      </motion.div>
    </>
  );
}

// interface RelatedPostsProps {
//   relatedBlogs: Blog[];
//   pagination: {
//     currentPage: number;
//     totalPages: number;
//   };
//   onPageChange: (page: number) => void;
//   isLoading: boolean;
// }

function RelatedPosts({ relatedBlogs, pagination, onPageChange, isLoading }: any) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-gray-50 p-5 rounded-lg border border-gray-200"
      data-nosnippet
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Related Posts</h2>
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          relatedBlogs.map(
            (blog: {
              _id: Key | null | undefined;
              slug: any;
              title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                | string
                | number
                | bigint
                | boolean
                | ReactPortal
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | null
                | undefined
              >
              | null
              | undefined;
              excerpt:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                | string
                | number
                | bigint
                | boolean
                | ReactPortal
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | null
                | undefined
              >
              | null
              | undefined;
            }) => (
              <Link key={blog._id} href={`/blog/${blog.slug}`} className="block">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-all duration-200"
                >
                  <h3 className="text-base font-medium mb-1.5 text-gray-900 line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                  <span className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-sm">
                    Read article
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </motion.div>
              </Link>
            )
          )
        )}
      </div>

      {pagination.totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-6">
          <button
            onClick={() => onPageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            className={`p-2 rounded-lg border transition-colors duration-200 ${pagination.currentPage === 1
              ? 'text-gray-400 cursor-not-allowed border-gray-200'
              : 'text-blue-600 hover:bg-blue-50 border-blue-200'
              }`}
          >
            <ChevronLeft size={18} />
          </button>

          {(() => {
            const current = pagination.currentPage;
            const total = pagination.totalPages;
            const pages = [];

            if (total <= 5) {
              for (let i = 1; i <= total; i++) pages.push(i);
            } else {
              pages.push(1);

              if (current > 3) {
                pages.push('...');
              }
              const start = Math.max(2, current - 1);
              const end = Math.min(total - 1, current + 1);

              for (let i = start; i <= end; i++) {
                if (!pages.includes(i)) pages.push(i);
              }

              if (current < total - 2) {
                pages.push('...');
              }
              if (!pages.includes(total)) pages.push(total);
            }

            return pages.map((page, index) => {
              if (page === '...') {
                return (
                  <span key={`dots-${index}`} className="px-2 text-gray-400">
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={index}
                  onClick={() => onPageChange(page as number)}
                  className={`w-10 h-10 rounded-lg border font-medium transition-colors duration-200 ${pagination.currentPage === page
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'text-gray-600 hover:bg-blue-50 border-gray-200'
                    }`}
                >
                  {page}
                </button>
              );
            });
          })()}


          <button
            onClick={() => onPageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
            className={`p-2 rounded-lg border transition-colors duration-200 ${pagination.currentPage === pagination.totalPages
              ? 'text-gray-400 cursor-not-allowed border-gray-200'
              : 'text-blue-600 hover:bg-blue-50 border-blue-200'
              }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </motion.div>
  );
}
