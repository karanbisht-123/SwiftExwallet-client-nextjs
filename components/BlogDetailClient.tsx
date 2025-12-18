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
      content: replaceS3Url(blog.content),
      imageUrl: blog.imageUrl ? replaceS3Url(blog.imageUrl) : null,
      excerpt: blog.excerpt ? replaceS3Url(blog.excerpt) : null,
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
          font-family:
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
            sans-serif;
          line-height: 1.6;
          color: #2d3748;
        }
        .styled-content h1 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .styled-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a202c;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.25rem;
        }
        .styled-content h3 {
          font-size: 1.375rem;
          font-weight: 600;
          color: #2d3748;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
        .styled-content p {
          margin-bottom: 1rem;
          line-height: 1.6;
          color: #4a5568;
          font-size: 1rem;
        }
        .styled-content ul,
        .styled-content ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .styled-content li {
          margin-bottom: 0.5rem;
          color: #4a5568;
          line-height: 1.6;
        }
        .styled-content a {
          color: #3182ce;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .styled-content a:hover {
          color: #2c5282;
          border-bottom-color: #3182ce;
        }
        .styled-content pre {
          background-color: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 1rem;
          margin: 1rem 0;
          overflow-x: auto;
        }
        .styled-content code {
          background-color: #f7fafc;
          color: #e53e3e;
          padding: 0.15rem 0.3rem;
          border-radius: 3px;
          font-size: 0.875rem;
        }
        .styled-content blockquote {
          border-left: 4px solid #3182ce;
          background-color: #f7fafc;
          padding: 0.75rem 1rem;
          margin: 1rem 0;
          color: #4a5568;
          font-style: italic;
        }
        .styled-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem auto;
          display: block;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto p-2 md:p-6 bg-white rounded-lg border border-gray-200 mt-3 lg:mt-10"
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
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
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

          <div className="lg:w-1/3 sticky top-24 self-start space-y-6">
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
          </div>
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
      className="bg-gray-50 p-6 rounded-lg border border-gray-200"
    >
      <h2 className="text-xl font-bold mb-6 text-gray-900">Related Posts</h2>
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
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{blog.excerpt}</p>
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
            className={`p-2 rounded-lg border transition-colors duration-200 ${
              pagination.currentPage === 1
                ? 'text-gray-400 cursor-not-allowed border-gray-200'
                : 'text-blue-600 hover:bg-blue-50 border-blue-200'
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          {[...Array(pagination.totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`w-10 h-10 rounded-lg border transition-colors duration-200 ${
                pagination.currentPage === index + 1
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-blue-600 hover:bg-blue-50 border-blue-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => onPageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
            className={`p-2 rounded-lg border transition-colors duration-200 ${
              pagination.currentPage === pagination.totalPages
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
