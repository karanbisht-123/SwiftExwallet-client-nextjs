'use client';

import React from 'react';
import Link from 'next/link';

interface StoreButtonProps {
  storeType: 'apple' | 'google';
  imageSrc: string;
}

const STORE_URLS = {
  apple:
    process.env.NEXT_PUBLIC_APPLE_STORE_URL?.trim() ||
    process.env.NEXT_PUBLIC_APPLE_PLAY_URL?.trim() ||
    '',
  google: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL?.trim() || '',
} as const;

const StoreButton: React.FC<StoreButtonProps> = ({ storeType, imageSrc }) => {
  const url = STORE_URLS[storeType];

  if (!url) return null;

  return (
    <Link href={url} target="_blank" className="inline-block">
      <div
        className={`
          transition-all duration-300
          // hover:scale-105 active:scale-95
        `}
      >
        <img
          src={imageSrc}
          alt={storeType === 'apple' ? 'Download on App Store' : 'Get it on Google Play'}
          className="min-h-16 w-auto rounded-xl shadow-lg"
        />
      </div>
    </Link>
  );
};

export default StoreButton;
