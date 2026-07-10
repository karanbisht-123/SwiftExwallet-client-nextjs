'use client';

import { JSX, useEffect, useState } from 'react';
import Link from 'next/link';
import StoreButton from '../../components/client/StoreButton';

const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APPLE_PLAY_URL?.trim() || 'https://apps.apple.com/app/swiftex-wallet/id6759080930';
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL?.trim() ||
  'https://play.google.com/store/apps/details?id=com.swiftex';

export default function DownloadPage(): JSX.Element {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('skip') === 'true') {
      setIsHydrated(true);
      return;
    }

    const ua = navigator.userAgent;
    const isiOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);

    if (isiOS && APP_STORE_URL) {
      window.history.replaceState(null, '', '/download?skip=true');
      globalThis.location.replace(APP_STORE_URL);
      return;
    }
    if (isAndroid && PLAY_STORE_URL) {
      window.history.replaceState(null, '', '/download?skip=true');
      globalThis.location.replace(PLAY_STORE_URL);
      return;
    }

    setIsHydrated(true);
  }, []);

  console.log(APP_STORE_URL, "------")

  if (!isHydrated) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white p-6">
        <div className="max-w-3xl w-full rounded-2xl p-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Download SwiftEx</h1>
        </div>
      </main>
    );
  }

  return (
    <main className=" text-white  px-4 lg:px-6 pt-6">
      <section className="w-full py-8  md:py-16 rounded-3xl  max-w-7xl mx-auto bg-[#060F38]">
        <div className=" mx-auto p-4 lg:p-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Download
            <br />
            <span className="text-white">SwiftEx</span>
          </h1>
          <p className="text-white/60 text-lg max-w-md">
            SwiftEx is available as a mobile app on iOS and Android.
          </p>
        </div>
      </section>

      <section className="w-full  py-14   max-w-7xl  mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl  p-4 lg:p-8 flex flex-col gap-5 bg-[#F3F4F6] transition-colors">
            <div>
              <h2 className="text-xl font-bold text-gray-600 mb-1">Download for iOS</h2>
              <p className="text-gray-500 text-sm">
                Get SwiftEx from the App Store on your iPhone or iPad.
              </p>
            </div>
            <StoreButton storeType="apple" imageSrc="/app-store-download.fb5659b5.png" />
          </div>

          <div className="rounded-2xl p-8 flex flex-col gap-5 bg-[#F3F4F6] transition-colors">
            <div>
              <h2 className="text-xl font-bold text-gray-600 mb-1">Download for Android</h2>
              <p className="text-gray-500 text-sm">
                Get SwiftEx from Google Play on your Android device.
              </p>
            </div>
            <StoreButton storeType="google" imageSrc="/google-play-download.1c0e3a31.png" />
          </div>
        </div>
      </section>
    </main>
  );
}