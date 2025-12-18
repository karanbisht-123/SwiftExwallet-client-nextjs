'use client';
import React, { useState, useCallback, useEffect, useRef, useMemo, memo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Blog } from '@/types/blog';
import { replaceS3Url } from '@/utils/imageUtils';

interface BlogListClientProps {
  initialBlogs: Blog[];
  initialPagination: {
    currentPage: number;
    totalPages: number;
    totalPosts: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  initialTags: string[];
  initialSelectedCategory: string;
  initialSearchTerm: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://swiftexchange.io/api/v2';
const DEFAULT_IMAGE = '/images/logo.avif';

const BlogCardSkeleton = memo(() => (
  <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col shadow-sm animate-pulse">
    <div className="relative w-full h-48 bg-gray-200" />
    <div className="p-4 flex-grow">
      <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  </div>
));
BlogCardSkeleton.displayName = 'BlogCardSkeleton';

const BlogCard = memo(({ blog }: { blog: any }) => {
  const [imageError, setImageError] = useState(false);
  const imageUrl = useMemo(
    () => (imageError ? DEFAULT_IMAGE : blog.imageUrl || DEFAULT_IMAGE),
    [imageError, blog.imageUrl]
  );

  return (
    <Link href={`/blog/${blog.slug}`} className="block h-full group" prefetch={false}>
      <article className="bg-white rounded-lg overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
          <img
            src={imageUrl}
            alt={blog.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        </div>
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3">
            {blog.excerpt || blog.content.substring(0, 150) + '...'}
          </p>
        </div>
        <div className="px-4 pb-4 flex items-center justify-between text-sm text-gray-500">
          <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString()}</time>
          {blog.tags?.[0] && (
            <span className="text-blue-600 text-xs font-medium">{blog.tags[0]}</span>
          )}
        </div>
      </article>
    </Link>
  );
});
BlogCard.displayName = 'BlogCard';

export default function BlogListClient({
  initialBlogs,
  initialPagination,
  initialTags,
  initialSelectedCategory,
  initialSearchTerm,
}: BlogListClientProps) {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [pagination, setPagination] = useState(initialPagination);
  const [availableTags, setAvailableTags] = useState<string[]>(initialTags);
  const [selectedCategory, setSelectedCategory] = useState(initialSelectedCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(initialSearchTerm);
  const [isSearchExpanded, setIsSearchExpanded] = useState(!!initialSearchTerm);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const observerTarget = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const isInitialMount = useRef(true);

  // Sync with initial props when returning to page
  useEffect(() => {
    setAvailableTags(initialTags);
    setBlogs(initialBlogs);
    setPagination(initialPagination);
    setSelectedCategory(initialSelectedCategory);
    setSearchTerm(initialSearchTerm);
    setDebouncedSearchTerm(initialSearchTerm);
    setCurrentPage(1);
  }, [initialTags, initialBlogs, initialPagination, initialSelectedCategory, initialSearchTerm]);

  // Debounce search term
  useEffect(() => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    searchTimeoutRef.current = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [searchTerm]);

  // Update URL without triggering navigation
  const updateURL = useCallback((category: string, search: string) => {
    const params = new URLSearchParams();

    if (category && category !== 'All') {
      params.set('tags', category);
    }

    if (search?.trim()) {
      params.set('search', search.trim());
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/blog?${queryString}` : '/blog';

    window.history.replaceState({}, '', newUrl);
  }, []);

  // Fetch blogs from API
  const fetchBlogs = useCallback(
    async (page: number, category: string, search: string, append: boolean = false) => {
      // Prevent concurrent requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      const loadingState = append ? setLoading : setInitialLoading;
      loadingState(true);

      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: '6',
        });

        // Only add tags if not 'All'
        if (category && category !== 'All') {
          params.set('tags', category);
        }

        // Only add search if it exists
        if (search?.trim()) {
          params.set('search', search.trim());
        }

        const url = `${API_BASE_URL}/blogs?${params.toString()}`;
        console.log('Fetching:', url); // Debug log

        const res = await fetch(url, {
          cache: 'no-store',
          signal: abortControllerRef.current.signal,
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();

        if (append) {
          setBlogs(prev => [...prev, ...(data.posts || [])]);
        } else {
          const posts = data.posts || [];
          setBlogs(posts);

          const firstTags: any[] = posts
            .map((blog: Blog) => blog.tags?.[0])
            .filter((tag: string | undefined): tag is string => !!tag);
          const uniqueFirstTags = Array.from(new Set(firstTags));
          setAvailableTags(['All', ...uniqueFirstTags]);

          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        setPagination(data.pagination);
        setCurrentPage(page);
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error('Failed to fetch blogs:', error);
          if (!append) {
            setBlogs([]);
            setPagination({
              currentPage: 1,
              totalPages: 0,
              totalPosts: 0,
              hasNextPage: false,
              hasPreviousPage: false,
            });
          }
        }
      } finally {
        loadingState(false);
      }
    },
    []
  );

  // Handle category filter change
  const handleCategoryChange = useCallback(
    (category: string) => {
      if (category === selectedCategory && !searchTerm) return;

      console.log('Category changed to:', category); // Debug log

      // Update all state immediately
      setSelectedCategory(category);
      setSearchTerm('');
      setDebouncedSearchTerm('');
      setIsSearchExpanded(false);
      setCurrentPage(1);
      setBlogs([]);

      // Update URL
      updateURL(category, '');

      // Fetch new data
      fetchBlogs(1, category, '', false);
    },
    [selectedCategory, searchTerm, updateURL, fetchBlogs]
  );

  // Handle search input change
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setIsSearchExpanded(false);
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setCurrentPage(1);
    setBlogs([]);

    updateURL(selectedCategory, '');
    fetchBlogs(1, selectedCategory, '', false);
  }, [selectedCategory, updateURL, fetchBlogs]);

  // Handle debounced search term changes
  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Reset and fetch with new search term
    setCurrentPage(1);
    setBlogs([]);
    updateURL(selectedCategory, debouncedSearchTerm);
    fetchBlogs(1, selectedCategory, debouncedSearchTerm, false);
  }, [debouncedSearchTerm]);

  // Infinite scroll observer
  useEffect(() => {
    if (!observerTarget.current || initialLoading || !blogs.length) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && pagination.hasNextPage && !loading) {
          fetchBlogs(currentPage + 1, selectedCategory, debouncedSearchTerm, true);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const currentTarget = observerTarget.current;
    observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [
    pagination.hasNextPage,
    loading,
    initialLoading,
    currentPage,
    selectedCategory,
    debouncedSearchTerm,
    fetchBlogs,
    blogs.length,
  ]);

  // Process blogs with image URLs and extract only first tag
  const processedBlogs = useMemo(
    () =>
      blogs.map(blog => ({
        ...blog,
        imageUrl: blog.imageUrl ? replaceS3Url(blog.imageUrl) : null,
        tags: blog.tags && blog.tags.length > 0 ? [blog.tags[0]] : [],
      })),
    [blogs]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Filter Bar */}
      <div className="container mx-auto sticky lg:top-16 top-12 z-10 bg-gray-100 lg:px-4 px-2 py-4 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Category Filters */}
          <div className="flex-1 min-w-0">
            <div className="flex overflow-x-auto scrollbar-hide gap-2">
              {availableTags.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  disabled={initialLoading}
                  className={`px-4 py-2 whitespace-nowrap transition-all duration-200 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white hover:text-blue-600 hover:shadow-sm bg-white/50'
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="md:w-80 w-full">
            <div className="relative">
              {/* Mobile Search */}
              <div className="md:hidden">
                {!isSearchExpanded ? (
                  <button
                    onClick={() => setIsSearchExpanded(true)}
                    className="w-full flex items-center justify-between bg-white px-4 py-2 text-gray-500 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    aria-label="Open search"
                  >
                    <span>Search blogs...</span>
                    <Search className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search blogs..."
                      className="w-full bg-white text-gray-800 px-4 py-2 pl-10 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 shadow-sm"
                      value={searchTerm}
                      onChange={handleSearch}
                      autoFocus
                      aria-label="Search blogs"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    {searchTerm && (
                      <button
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Clear search"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Desktop Search */}
              <div className="hidden md:block relative">
                <input
                  type="search"
                  placeholder="Search blogs..."
                  className="w-full bg-white text-gray-800 px-4 py-2 pl-10 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow border border-gray-200"
                  value={searchTerm}
                  onChange={handleSearch}
                  aria-label="Search blogs"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container bg-gray-100 mx-auto lg:px-4 lg:py-8 px-2 py-4">
        {initialLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        ) : processedBlogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No blogs found</h3>
            <p className="text-gray-500">
              {searchTerm || debouncedSearchTerm
                ? 'Try adjusting your search term'
                : 'Try selecting a different category'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedBlogs.map(blog => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* Infinite Scroll Trigger & Loading States */}
            <div ref={observerTarget} className="flex justify-center py-8 min-h-[60px]">
              {loading && (
                <div className="flex items-center gap-3 text-blue-600 bg-white px-6 py-3 rounded-full shadow-md">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="font-medium">Loading more blogs...</span>
                </div>
              )}
              {!pagination.hasNextPage && !loading && processedBlogs.length > 0 && (
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-gray-500 bg-white px-6 py-3 rounded-full shadow-sm">
                    <span className="font-medium">
                      You've seen all {pagination.totalPosts} post
                      {pagination.totalPosts !== 1 ? 's' : ''}!
                    </span>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
