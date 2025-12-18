'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/style/articleContent.module.css';

import {
  getArticleById,
  getArticlesByIds,
  Article,
  Category,
  Subtopic,
  categories,
} from '@/data/data';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, altText, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setImageLoaded(false);
      setIsZoomed(false);

      const handlePopState = () => {
        onClose();
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setTouchStart({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart && e.changedTouches.length === 1) {
      const touch = e.changedTouches[0];
      const deltaX = Math.abs(touch.clientX - touchStart.x);
      const deltaY = Math.abs(touch.clientY - touchStart.y);

      if (deltaX < 10 && deltaY < 10) {
        toggleZoom();
      }
    }
    setTouchStart(null);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 md:p-6"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="relative w-full h-full max-w-6xl max-h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleZoom}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg p-2 transition-all duration-200 backdrop-blur-sm"
              title={isZoomed ? 'Zoom Out' : 'Zoom In'}
              aria-label={isZoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {isZoomed ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              )}
            </button>

            <div className="hidden sm:block text-white text-sm bg-white bg-opacity-20 px-3 py-1 rounded-lg backdrop-blur-sm">
              Click image to zoom
            </div>
          </div>

          <button
            onClick={onClose}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg p-2 transition-all duration-200 backdrop-blur-sm"
            aria-label="Close modal"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div
          className={`flex-grow flex items-center justify-center transition-all duration-300 ${
            isZoomed ? 'overflow-auto cursor-grab active:cursor-grabbing' : 'overflow-hidden'
          }`}
          style={{ minHeight: 0 }}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          <img
            src={imageUrl}
            alt={altText}
            className={`transition-all duration-300 select-none ${
              isZoomed
                ? 'scale-150 md:scale-200 cursor-grab active:cursor-grabbing'
                : 'max-w-full max-h-full object-contain cursor-pointer hover:scale-105'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            onClick={toggleZoom}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            draggable={false}
            style={{
              maxWidth: isZoomed ? 'none' : '100%',
              maxHeight: isZoomed ? 'none' : '100%',
            }}
          />
        </div>

        {altText && (
          <div className="mt-4 text-center flex-shrink-0">
            <p className="text-white text-sm md:text-base bg-white bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm inline-block max-w-full">
              {altText}
            </p>
          </div>
        )}

        <div className="sm:hidden mt-2 text-center">
          <p className="text-white text-xs bg-white bg-opacity-20 px-3 py-1 rounded-lg backdrop-blur-sm inline-block">
            Tap image to zoom • Swipe to close
          </p>
        </div>
      </div>
    </div>
  );
};

interface SolutionArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function SolutionArticlePage({ params }: SolutionArticlePageProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { slug } = use(params);

  const article: Article | undefined = getArticleById(slug);

  console.log(article, '-------------------');

  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [modalImage, setModalImage] = useState<{
    url: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (slug && !article) {
      router.replace('/404');
    }
  }, [slug, article, router]);

  useEffect(() => {
    const handleHashChange = () => {
      const isModalHash = window.location.hash === '#image-modal';

      if (isModalHash && !modalImage) {
        return;
      } else if (!isModalHash && modalImage) {
        setModalImage(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [modalImage]);

  const getArticleCategoryAndSubtopic = (
    id: string
  ): { category?: Category; subtopicId?: string } => {
    for (const category of categories) {
      for (const subtopic of category.subtopics) {
        if (subtopic.articles.some((item: Article) => item.id === id)) {
          return { category, subtopicId: subtopic.id };
        }
      }
    }
    return {};
  };

  const { category: currentCategory, subtopicId } = slug
    ? getArticleCategoryAndSubtopic(slug)
    : { category: undefined, subtopicId: undefined };

  const articlesInFolder: Article[] = currentCategory
    ? currentCategory.subtopics
        .flatMap((subtopic: Subtopic) => subtopic.articles)
        .filter((item: Article) => item.id !== slug)
    : [];

  const youMayLikeToReadArticles: Article[] = article?.relatedArticles
    ? getArticlesByIds(article.relatedArticles)
    : [];

  const handlePrint = () => {
    window.print();
  };

  const handleFeedback = () => {
    setFeedbackGiven(true);
  };

  const handleImageClick = (imageUrl: string, altText: string) => {
    setModalImage({ url: imageUrl, alt: altText });
    window.location.hash = 'image-modal';
  };

  const closeModal = () => {
    setModalImage(null);
    if (window.location.hash === '#image-modal') {
      router.back();
    }
  };

  useEffect(() => {
    const images = document.querySelectorAll('.custom-article-content img');

    const handleClick = (e: Event) => {
      const target = e.target;
      if (target instanceof HTMLImageElement) {
        handleImageClick(target.src, target.alt || target.title || 'Image');
      }
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target;
      if (target instanceof HTMLImageElement) {
        target.style.transform = 'scale(1.02)';
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target;
      if (target instanceof HTMLImageElement) {
        target.style.transform = 'scale(1)';
      }
    };

    images.forEach(img => {
      img.addEventListener('click', handleClick);
      img.addEventListener('mouseenter', handleMouseEnter);
      img.addEventListener('mouseleave', handleMouseLeave);

      const imgElement = img as HTMLImageElement;
      imgElement.style.cursor = 'pointer';
      imgElement.style.transition = 'transform 0.2s ease';
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('click', handleClick);
        img.removeEventListener('mouseenter', handleMouseEnter);
        img.removeEventListener('mouseleave', handleMouseLeave);

        const imgElement = img as HTMLImageElement;
        imgElement.style.cursor = 'default';
        imgElement.style.transform = 'scale(1)';
      });
    };
  }, [article?.content]);

  // Show loading or null while article is being fetched
  if (!article) {
    return null;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-8">
      <div className="bg-[#233ba3] py-12 px-4 md:px-8 text-sm text-gray-600 border-b border-blue-100">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-gray-50 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-gray-50">/</span>
            <Link href="/solution" className="text-gray-50 hover:underline">
              Help Center
            </Link>
            {currentCategory && subtopicId && (
              <>
                <span className="mx-2 text-gray-50">/</span>
                <Link href="/solution" className="text-gray-50 hover:underline">
                  {
                    currentCategory.subtopics.find(
                      (subtopic: Subtopic) => subtopic.id === subtopicId
                    )?.name
                  }
                </Link>
              </>
            )}
          </div>
          <h1 className="md:text-4xl text-3xl font-extrabold text-white mb-4">{article.title}</h1>
          {article.modifiedDate && (
            <div className="text-sm text-gray-100 mb-8">Modified on {article.modifiedDate}</div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pb-16 bg-white shadow-lg rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow min-w-0 overflow-hidden">
            <div className="p-4 lg:p-6 article-content-wrapper">
              {article.headerImage && (
                <div className="mb-8 flex justify-center relative group">
                  <Image
                    src={article.headerImage}
                    alt={article.title}
                    fill
                    priority
                    className="object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => handleImageClick(article.headerImage!, article.title)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline mr-1"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    Click to expand
                  </div>
                </div>
              )}

              <div
                dangerouslySetInnerHTML={{ __html: article.content ?? '' }}
                className={styles.customArticleContent}
              />

              <div className="mt-12 pt-8 border-t border-gray-200">
                {!feedbackGiven ? (
                  <div className="gap-6 flex items-center justify-center flex-col lg:flex-row">
                    <h3 className="text-lg text-gray-800 text-center">Was this article helpful?</h3>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={handleFeedback}
                        className="flex gap-2 border p-3 px-6 items-center rounded-lg hover:bg-green-50 transition-colors duration-200 group"
                      >
                        <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-200">
                          😊
                        </span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-green-600">
                          Yes
                        </span>
                      </button>
                      <button
                        onClick={handleFeedback}
                        className="flex gap-2 items-center border p-3 px-6 rounded-lg hover:bg-red-50 transition-colors duration-200 group"
                      >
                        <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-200">
                          😞
                        </span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-red-600">
                          No
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <div className="flex justify-center items-center space-x-3">
                      <span className="text-3xl">📄</span>
                      <span className="text-lg font-medium text-gray-700">
                        Thank you for feedback!
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-80 bg-gray-50 p-6">
            <div className="sticky top-8 space-y-6">
              <div className="border-b">
                <button
                  onClick={handlePrint}
                  className="w-full font-semibold flex items-center justify-start transition-colors duration-200 py-3 px-4 hover:bg-gray-100 rounded-lg"
                >
                  <span className="mr-2 text-xl">🖨️</span> Print Page
                </button>
              </div>

              {articlesInFolder.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4">
                    Articles in this folder
                  </h3>
                  <div className="space-y-3">
                    {articlesInFolder.map((item: Article) => (
                      <Link
                        key={item.id}
                        href={`/solution${item.path}`}
                        className="block p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                      >
                        <div className="flex items-start">
                          <span className="mr-3 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                            📄
                          </span>
                          <span className="text-gray-700 group-hover:text-blue-600 text-sm leading-relaxed">
                            {item.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {youMayLikeToReadArticles.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4">
                    You may like to read
                  </h3>
                  <div className="space-y-3">
                    {youMayLikeToReadArticles.map((item: Article) => (
                      <Link
                        key={item.id}
                        href={`/solution${item.path}`}
                        className="block p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                      >
                        <div className="flex items-start">
                          <span className="mr-3 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                            🔗
                          </span>
                          <span className="text-gray-700 group-hover:text-blue-600 text-sm leading-relaxed">
                            {item.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          imageUrl={modalImage.url}
          altText={modalImage.alt}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
