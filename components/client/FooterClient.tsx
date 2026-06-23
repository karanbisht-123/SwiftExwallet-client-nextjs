'use client';

import { useState } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import StoreButton from './StoreButton';

interface SocialIcon {
  id: number;
  icon: React.ReactNode;
  hoverColor: string;
  href: string;
}

export default function FooterClient() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStarted = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <Modal isVisible={showPopup} onClose={handleClosePopup} />
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
              <Link
                href="/swiftex-wallet/#faq"
                className="text-gray-700 hover:opacity-75 transition"
              >
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

          <button
            onClick={handleGetStarted}
            className="w-full mt-4 bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded-lg px-6 py-4 text-base transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Download APK/TestFlight
          </button>

          <div className="mt-6 space-y-4">
            {/* Store Buttons */}
            <div className="flex gap-3">
              <StoreButton storeType="apple" imageSrc="/app-store-download.fb5659b5.png" />
              <StoreButton storeType="google" imageSrc="/google-play-download.1c0e3a31.png" />
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-4">
              <Link href="/download" aria-label="Open download page" className="group">
                <img
                  src="/qr/swiftex.png"
                  alt="Scan to download SwiftEx"
                  className="h-32 w-32 rounded-md border-2 border-gray-300 bg-white p-2 shadow-md"
                />
              </Link>
              <span className="text-xs text-gray-600 font-medium mt-3">Scan to download</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
