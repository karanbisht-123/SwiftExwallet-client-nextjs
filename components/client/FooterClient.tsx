'use client';

import { useState } from 'react';
// import { motion } from 'framer-motion';
import Modal from './Modal';
import StoreButton from './StoreButton';

interface SocialIcon {
  id: number;
  icon: React.ReactNode;
  hoverColor: string;
  href: string;
}

// interface FooterClientProps {
//   socialIcons: ReadonlyArray<SocialIcon>;
// }

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
              <a href="/swiftex-wallet" className="text-gray-700 hover:opacity-75 transition">
                SwiftEx Wallet
              </a>
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

        {/* Helpful Links */}
        <div>
          <p className="font-medium text-gray-900">Helpful Links</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="/contact-us" className="text-gray-700 hover:opacity-75 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/swiftex-wallet/#faq" className="text-gray-700 hover:opacity-75 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="text-gray-700 hover:opacity-75 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/anti-money-laundering"
                className="text-gray-700 hover:opacity-75 transition"
              >
                AML & Compliance Statement
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-gray-700 hover:opacity-75 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Downloads</p>
          <button
            onClick={handleGetStarted}
            className="mt-4 bg-blue-800 hover:bg-blue-600 text-white font-medium rounded-full px-6 py-3 text-lg transition"
          >
            Download APK
          </button>

          <div className="flex flex-col lg:gap-6 gap-4 mt-4 lg:mt-8">
            <div className="flex flex-col justify-center lg:justify-start gap-4">
              <StoreButton
                storeType="apple"

                imageSrc="/app-store-download.fb5659b5.png"
              />
              <StoreButton
                storeType="google"

                imageSrc="/google-play-download.1c0e3a31.png"
              />
            </div>


          </div>
        </div>



      </div>
    </>
  );
}
