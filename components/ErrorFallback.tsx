'use client';

import Link from 'next/link';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
}

export default function ErrorFallback({ error }: ErrorFallbackProps) {
  const isNetworkError =
    error.message.includes('fetch failed') ||
    error.message.includes('network') ||
    error.message.includes('connection');

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-[#020E46] rounded-2xl shadow-xl p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {isNetworkError ? 'Connection Error' : 'Unable to Load Blogs'}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {isNetworkError
              ? "We couldn't connect to the server. Please check your internet connection or try again later."
              : "We're having trouble loading the blog posts right now. This might be a temporary issue."}
          </p>

          <div className="space-y-3">
            <Link
              href="/blogs"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Link>

            <Link
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <Home className="w-4 h-4" />
              Go to Homepage
            </Link>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <details className="mt-6 text-left">
              <summary className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                Error Details (Dev Only)
              </summary>
              <pre className="mt-2 text-xs bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto text-red-600 dark:text-red-400">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          )}

          <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
            If the problem persists, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
