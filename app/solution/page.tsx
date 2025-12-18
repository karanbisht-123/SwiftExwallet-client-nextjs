import React from 'react';
import Link from 'next/link';
import { categories, Category } from '../../data/data';
import { Folder, FileText, Home, ChevronRight } from 'lucide-react';

const Solution: React.FC = () => {
  const totalArticles = categories.reduce(
    (sum, category) =>
      sum + category.subtopics.reduce((subSum, subtopic) => subSum + subtopic.articles.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <nav className="text-sm text-gray-500 mb-6 flex items-center">
            <Link href="/" className="hover:text-blue-600 flex items-center transition-colors">
              <Home className="w-4 h-4 mr-1" /> Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Knowledge Base</span>
          </nav>

          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Help Center</h1>
              <p className="text-gray-600 text-lg">
                Find answers to common questions and get support for your needs.
              </p>
            </div>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full hidden md:block">
              {totalArticles} articles
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 bg-white md:rounded-2xl md:my-6 my-2  md:shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {categories.map((category: Category, index: number) => {
            const articleCount = category.subtopics.reduce(
              (sum, subtopic) => sum + subtopic.articles.length,
              0
            );

            const isLeftColumn = index % 2 === 0;

            return (
              <div
                key={category.id}
                className={` border-b border-b-gray-200 transition-colors 
          ${isLeftColumn ? 'lg:border-r lg:border-r-gray-200' : ''}`}
              >
                {/* Category Header */}
                <div className="lg:px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Folder className="w-8 h-8 mr-3 text-gray-600" />
                      <h2 className="md:text-xl  tex-lg font-semibold text-gray-600">
                        {category.name}
                      </h2>
                    </div>
                    <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                      {articleCount} articles
                    </span>
                  </div>
                  {/* <p className="text-gray-600 text-sm mt-2 ml-8">
                    {category.description}
                  </p> */}
                </div>

                {/* Articles List */}
                <div className="lg:px-6 px-0 py-4">
                  <div className="space-y-4">
                    {category.subtopics.slice(0, 4).map(subtopic => (
                      <div key={subtopic.id}>
                        <div className="space-y-1 ml-4">
                          {subtopic.articles.slice(0, 3).map(article => (
                            <Link
                              key={article.id}
                              href={`/solution/${article.id}`}
                              className="flex items-center text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors group"
                            >
                              <FileText className="w-6 h-6 mr-2 text-lg flex-shrink-0 text-blue-800 group-hover:text-blue-800" />
                              <span className="truncate text-md text-blue-800">
                                {article.title}
                              </span>
                            </Link>
                          ))}
                          {subtopic.articles.length > 3 && (
                            <div className="text-xs text-gray-400 ml-5">
                              +{subtopic.articles.length - 3} more articles
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View All Link */}
                  {category.subtopics.length > 4 && (
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link
                        href={`/${category.id}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        View all {category.subtopics.length} subtopics
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center text-sm text-gray-500">
            <span>Can't find what you're looking for?</span>
            <Link href="/contact-us" className="ml-2 text-blue-600 hover:text-blue-700 font-medium">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
