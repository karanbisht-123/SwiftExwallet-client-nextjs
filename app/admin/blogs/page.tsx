'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, Edit, Trash2, ArrowLeft, Users } from 'lucide-react';
import { authService } from '@/lib/authService';
import { blogService } from '@/lib/blogService';
import { adminService } from '@/lib/adminService';
import { BlogPost } from '@/types/blog';

export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authService.checkAuth()) {
      router.push('/admin/login');
      return;
    }

    const fetchBlogs = async () => {
      try {
        const data = await blogService.getBlogs({ limit: 100 });
        setBlogs(data?.posts);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [router]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await adminService.deletePost(id);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Failed to delete blog:', error);
      alert('Failed to delete post');
    }
  };

  const handleLogout = () => {
    authService.logout();
    router.push('/admin/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link
                href="/admin/dashboard"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
                <p className="text-sm text-gray-600 mt-1">Create and manage your blog posts</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/waitlist"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50"
              >
                <Users className="w-4 h-4 mr-2" />
                Waitlist
              </Link>
              <Link
                href="/admin/blogs/new"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {blogs.length === 0 ? (
              <li className="px-6 py-12 text-center text-gray-500">
                <div className="flex flex-col items-center">
                  <div className="text-gray-400 text-6xl mb-4">📝</div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No blog posts yet</h3>
                  <p className="text-gray-500 mb-4">Create your first post to get started!</p>
                  <Link
                    href="/admin/blogs/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create First Post
                  </Link>
                </div>
              </li>
            ) : (
              blogs.map((blog, index) => (
                <li key={blog._id || `blog-${index}`} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900 truncate">{blog.title}</h3>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">{blog.excerpt}</p>
                      <div className="mt-2 flex gap-2 flex-wrap">
                        {blog.tags?.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={`${tag}-${tagIndex}`}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {tag}
                          </span>
                        ))}
                        {blog.tags && blog.tags.length > 3 && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            +{blog.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex gap-2">
                      <Link
                        href={`/admin/blogs/edit/${blog._id}`}
                        className="inline-flex items-center p-2 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        title="Edit post"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog._id!)}
                        className="inline-flex items-center p-2 border border-transparent rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors"
                        title="Delete post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
