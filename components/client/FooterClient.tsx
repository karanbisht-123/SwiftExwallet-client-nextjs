'use client';

import Link from 'next/link';
import StoreButton from './StoreButton';
import Image from 'next/image';

const apkUrl = 'https://swift-ex-web-app.s3.us-east-2.amazonaws.com/SwiftEx+wallet.apk';

interface SocialIcon {
  id: number;
  icon: React.ReactNode;
  hoverColor: string;
  href: string;
}

export default function FooterClient() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
      {/* Services */}
      <div>
        <p className="font-medium text-gray-900">Services</p>
        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <Link href="/swiftex-wallet" className="text-gray-700 hover:opacity-75 transition">
              SwiftEx Wallet
            </Link>
          </li>
        </ul>
      </div>

      {/* Company */}
      {/* <div>
          <p className="font-medium text-gray-900">Company</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="/about-us" className="text-gray-700 hover:opacity-75 transition">
                About
              </a>
            </li>
            <li>
              <a href="/about-us/#team" className="text-gray-700 hover:opacity-75 transition">
                Meet the Team
              </a>
            </li>
          </ul>
        </div> */}

      <div>
        <p className="font-medium text-gray-900">Helpful Links</p>
        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <Link href="/contact-us" className="text-gray-700 hover:opacity-75 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/swiftex-wallet/#faq" className="text-gray-700 hover:opacity-75 transition">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="text-gray-700 hover:opacity-75 transition">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="/anti-money-laundering"
              className="text-gray-700 hover:opacity-75 transition"
            >
              AML & Compliance Statement
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="text-gray-700 hover:opacity-75 transition">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:col-span-2">
        <p className="font-medium text-gray-900">Downloads</p>

        <Link
          href={apkUrl}
          className="w-full mt-4 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-4 text-base transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Download APK
        </Link>

        <div className="mt-6 space-y-4">
          <div className="flex gap-3">
            <StoreButton storeType="apple" imageSrc="/app-store-download.fb5659b5.png" />
            <StoreButton storeType="google" imageSrc="/google-play-download.1c0e3a31.png" />
          </div>
          <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-4">
            <div className="flex flex-col items-center gap-1.5 shrink-0">
              <div className="relative block bg-white p-1 rounded-xl">
                <Image
                  src="/qr/swiftex.png"
                  alt="Scan to download SwiftEx"
                  width={100}
                  height={100}
                  className="rounded-lg block"
                  priority
                />
              </div>
              <span className="text-[10px] text-white/50 font-medium tracking-wide">
                Scan to download
              </span>
            </div>
            <span className="text-xs text-gray-600 font-medium mt-3">Scan to download</span>
          </div>
        </div>
      </div>
    </div>
  );
}
