'use client';

import React, { useEffect, useState, lazy, Suspense } from 'react';
import Image from 'next/image';
import { Wallet, ArrowLeftRight, Repeat, Send, Info, PlayCircle, Smartphone } from 'lucide-react';
import styles from './style/newWallt.module.css';

interface CardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  className: string;
  colorClass: string;
}

const MODAL_DISMISSED_KEY = 'swiftex_demo_modal_dismissed';

const Modal = lazy(() => import('./client/Modal'));
const DemoModal = lazy(() => import('./client/DemoModal'));

const CardComponent: React.FC<CardProps> = React.memo(
  ({ title, description, icon: Icon, className, colorClass }) => (
    <div className={`${styles.floatStatsHeader} ${styles[className]} ${styles.floatAnimation}`}>
      <div className={`${styles.glassCard} py-2 px-2`}>
        <div className="bg-transparent flex-col md:flex-row text-black flex rounded-2xl">
          <div className="flex items-center">
            <Icon
              size={40}
              className={`${styles.cardIcon} ${styles[colorClass]}`}
              aria-hidden="true"
            />
          </div>
          <div className="md:pl-3 text-start">
            <h2 className="text-sm font-medium">{title}</h2>
            <p className={`text-sm text-black ${styles.custmFont}`} style={{ fontSize: '14px' }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
);

const NewWallet: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);

    const modalDismissed = localStorage.getItem(MODAL_DISMISSED_KEY) === 'true';
    if (!modalDismissed) {
      const timer = setTimeout(() => {
        setShowDemoModal(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (showPopup || showDemoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopup, showDemoModal]);

  const handleGetStarted = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleOpenDemo = () => {
    setShowDemoModal(true);
  };

  const handleCloseDemo = () => {
    setShowDemoModal(false);
    localStorage.setItem(MODAL_DISMISSED_KEY, 'true');
  };

  return (
    <>
      <div className="bg-[#020E46] overflow-hidden min-h-[60svh] lg:px-10 lg:pb-20">
        <div className="max-w-7xl mx-auto h-full justify-center items-center flex flex-col xl:flex-row">
          <div
            className={`flex flex-col gap-8 justify-center xl:w-1/3 px-6 py-8 md:px-10 lg:px-10 ${
              animateIn ? styles.textEnterAnimation : ''
            }`}
          >
            <div className="flex flex-col gap-4">
              <p className="text-lg font-normal opacity-80 text-[#F1F8E8] text-center xl:text-left">
                Welcome to SwiftEx
              </p>
              <h1 className="text-2xl font-normal md:text-4xl lg:text-5xl text-white text-center lg:text-left">
                Your Gateway to Effortless Fiat and Cryptocurrency Exchange
              </h1>
              <p className="mt-3 text-lg text-[#F1F8E8] text-center lg:text-left font-normal opacity-80">
                Trade Swiftly, Trade Securely with our seamless cryptocurrency management platform.
              </p>
              <div className="text-center xl:text-start">
                <div className="flex items-center justify-center xl:justify-start gap-2 text-[#F1F8E8] text-sm opacity-80 mb-4">
                  <Info className="text-lg text-emerald-400" aria-hidden="true" />
                  <span className="bg-linear-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent font-medium">
                    🚀 Beta Launch - Mainnet Available
                  </span>
                </div>

                <div className="flex items-center justify-center xl:justify-start mt-4">
                  <div className={styles.googleBorderButton}>
                    <button
                      type="button"
                      className="group relative w-full sm:w-auto min-w-60 bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl px-8 py-4 text-center transition-all duration-300 transform "
                      onClick={handleGetStarted}
                      aria-label="Get SwiftEx Beta - Android APK & iOS TestFlight"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Smartphone
                          size={22}
                          className="text-white group-hover:text-blue-100"
                          aria-hidden="true"
                        />
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-semibold">Get Beta Access</span>
                          <span className="text-xs opacity-90">Android APK • iOS TestFlight</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center xl:justify-start mt-3">
                  <button
                    type="button"
                    onClick={handleOpenDemo}
                    className="group text-white/80 hover:text-white flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 focus:outline-none font-medium rounded-full px-4 py-2 text-center text-sm transition-all duration-300"
                    aria-label="View SwiftEx Demo Video"
                  >
                    <PlayCircle
                      size={18}
                      className="text-red-500 group-hover:text-red-400 transition-colors"
                      aria-hidden="true"
                    />
                    <span className="underline decoration-dotted underline-offset-4">
                      View Demo
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-full lg:w-full relative mt-6 lg:mt-12 ${
              animateIn ? styles.imageEnterAnimation : ''
            }`}
          >
            <div className={`${styles.headerImageWrapper} h-[400px] md:h-[500px] lg:h-[85vh] mb-6`}>
              <Image
                className={`${styles.headerImage} lg:max-h-[70vh] w-auto`}
                src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958280/switExhomescreen_basftg.webp"
                alt="SwiftEx mobile application interface showing wallet details and transaction options"
                width={500}
                height={1000}
                priority={true}
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={85}
              />

              <Image
                className={styles.backgroundHeader}
                src="/images/iPhone/backround.svg"
                alt="Abstract decorative background"
                width={700}
                height={700}
              />

              <CardComponent
                title="Send"
                description="Send crypto assets to multichain wallets."
                icon={Send}
                className="_1"
                colorClass="iconScan"
              />
              <CardComponent
                title="Wallet"
                description="Import/create multichain wallets."
                icon={Wallet}
                className="_2"
                colorClass="iconConvert"
              />
              <CardComponent
                title="Swap"
                description="Swap assets across blockchains securely."
                icon={Repeat}
                className="_3"
                colorClass="iconSend"
              />
              <CardComponent
                title="Trade & Cashout"
                description="Trade and cash out assets seamlessly on StellarDEX & Anchor."
                icon={ArrowLeftRight}
                className="_4"
                colorClass="iconTrade"
              />
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className={styles.loadingSpinner}></div>}>
        {showPopup && <Modal isVisible={showPopup} onClose={handleClosePopup} />}
        {showDemoModal && (
          <DemoModal isVisible={showDemoModal} onClose={handleCloseDemo} videoId="BZie-z79BGQ" />
        )}
      </Suspense>
    </>
  );
};

export default React.memo(NewWallet);
