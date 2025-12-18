'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/authService';
import { FileText, Users, Mail, TrendingUp, Calendar } from 'lucide-react';
import Link from 'next/link';

interface DashboardStats {
  totalBlogs: number;
  totalWaitlist: number;
  recentBlogs: number;
  recentWaitlist: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalBlogs: 0,
    totalWaitlist: 0,
    recentBlogs: 0,
    recentWaitlist: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authService.checkAuth()) {
      router.push('/admin/login');
      return;
    }

    fetchDashboardStats();
  }, [router]);

  const fetchDashboardStats = async () => {
    try {
      setIsLoading(true);
      // Fetch stats from your API
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://swiftexchange.io/api/v2';

      // Fetch blogs count
      const blogsRes = await fetch(`${API_BASE_URL}/blogs?limit=1`);
      const blogsData = await blogsRes.json();

      // Fetch waitlist count
      const waitlistRes = await fetch(`${API_BASE_URL}/subscribe?limit=1`);
      const waitlistData = await waitlistRes.json();

      setStats({
        totalBlogs: blogsData.pagination?.totalPosts || 0,
        totalWaitlist: waitlistData.pagination?.totalRecords || 0,
        recentBlogs: blogsData.pagination?.totalPosts || 0,
        recentWaitlist: waitlistData.pagination?.totalRecords || 0,
      });
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
    router.push('/admin/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">
                Welcome back! Here's what's happening with your platform.
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Blogs</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalBlogs}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Waitlist Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalWaitlist}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Recent Posts</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.recentBlogs}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Signups</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.recentWaitlist}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog Management Card */}
          <Link href="/admin/blogs">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-10 h-10 text-blue-600" />
                </div>
                <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Manage Blogs</h3>
              <p className="text-gray-600 mb-4">
                Create, edit, and manage your blog posts. View all published and draft articles.
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <span>View Blog List</span>
              </div>
            </div>
          </Link>

          {/* Waitlist Management Card */}
          <Link href="/admin/waitlist">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 hover:shadow-lg hover:border-green-300 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Mail className="w-10 h-10 text-green-600" />
                </div>
                <span className="text-green-600 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Waitlist Users</h3>
              <p className="text-gray-600 mb-4">
                View and manage your waitlist subscribers. Track user signups and engagement.
              </p>
              <div className="flex items-center text-sm text-green-600 font-medium">
                <span>View Waitlist</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity Section (Optional) */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats Overview</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Total Content Items</span>
              <span className="text-sm font-semibold text-gray-900">{stats.totalBlogs}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Total Subscribers</span>
              <span className="text-sm font-semibold text-gray-900">{stats.totalWaitlist}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">Platform Status</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
