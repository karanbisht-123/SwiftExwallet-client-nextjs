'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface DemoModalProps {
  isVisible: boolean;
  onClose: () => void;
  videoId?: string;
}

const DemoModal: React.FC<DemoModalProps> = ({ isVisible, onClose, videoId = 'BZie-z79BGQ' }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <div
        className="absolute inset-0 bg-black/40 bg-opacity-75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl rounded-xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden transition-all duration-300 transform scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200 rounded-full p-2"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full pt-[56.25%] bg-gray-100 dark:bg-gray-900">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-opacity duration-300">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
