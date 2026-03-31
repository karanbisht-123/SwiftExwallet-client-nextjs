'use client';

import React from 'react';
import Link from 'next/link';

interface StoreButtonProps {
  storeType: 'apple' | 'google';
  imageSrc: string;
}

const STORE_URLS = {
  apple: process.env.NEXT_PUBLIC_APPLE_STORE_URL?.trim() ?? '',
  google: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL?.trim() ?? '',
} as const;

const StoreButton: React.FC<StoreButtonProps> = ({ storeType, imageSrc }) => {
  const url = STORE_URLS[storeType];
  const isAvailable = Boolean(url);

  const buttonContent = (
    <div className="relative inline-block group">
      {!isAvailable && (
        <span
          className="
            absolute -top-0.5 right-4 z-20
            bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800
            text-white text-[10px] font-extrabold uppercase
            px-4 py-1 rounded-md rounded-t-none
            shadow-[0_4px_14px_rgba(59,130,246,0.65)]
          "
          style={{ letterSpacing: '0.12em' }}
        >
          Soon
        </span>
      )}

      <div
        className={`
          transition-all duration-300
          group-hover:scale-105 group-active:scale-95
          ${!isAvailable ? 'opacity-60 grayscale saturate-50' : ''}
        `}
      >
        <img
          src={imageSrc}
          alt={storeType === 'apple' ? 'Download on App Store' : 'Get it on Google Play'}
          className="h-[60px] w-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );

  if (isAvailable) {
    return (
      <Link href={url} target="_blank" className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return (
    <div className="inline-block cursor-not-allowed select-none">
      {buttonContent}
    </div>
  );
};

export default StoreButton;