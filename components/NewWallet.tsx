'use client';

import React, { useEffect, useState, lazy, Suspense } from 'react';
import Image from 'next/image';
import { Wallet, ArrowLeftRight, Repeat, Send, Info, Smartphone } from 'lucide-react';
import styles from './style/newWallt.module.css';
import Link from 'next/link';
import StoreButton from './client/StoreButton';

interface CardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  className: string;
  colorClass: string;
}

// const MODAL_DISMISSED_KEY = 'swiftex_demo_modal_dismissed';

const Modal = lazy(() => import('./client/Modal'));
// const DemoModal = lazy(() => import('./client/DemoModal'));

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
            <h2 className="md:text-md text-sm font-medium lg:hidden ml-2">{title}</h2>
          </div>
          <div className="md:pl-3 text-start">
            <h2 className="md:text-md text-sm font-medium hidden lg:block">{title}</h2>
            <p
              className={`text-sm text-black mt-2 lg:mt-0 ${styles.custmFont}`}
              style={{ fontSize: '14px' }}
            >
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
  // const [showDemoModal, setShowDemoModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);

    // const modalDismissed = localStorage.getItem(MODAL_DISMISSED_KEY) === 'true';
    // if (!modalDismissed) {
    //   const timer = setTimeout(() => {
    //     setShowDemoModal(true);
    //   }, 1500);

    //   return () => clearTimeout(timer);
    // }
  }, []);

  useEffect(() => {
    if (showPopup /* || showDemoModal */) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopup /*, showDemoModal */]);

  const handleGetStarted = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // const handleOpenDemo = () => {
  //   // setShowDemoModal(true);
  // };

  // const handleCloseDemo = () => {
  //   setShowDemoModal(false);
  //   localStorage.setItem(MODAL_DISMISSED_KEY, 'true');
  // };

  return (
    <>
      <div className="bg-[#020E46] overflow-hidden min-h-[60svh] lg:px-10 lg:pb-20">
        <div className="max-w-7xl mx-auto h-full justify-center items-center flex flex-col xl:flex-row">
          <div
            className={`flex flex-col gap-8 justify-center xl:w-1/2 px-6 py-8 md:px-10 lg:px-10 ${
              animateIn ? styles.textEnterAnimation : ''
            }`}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-normal md:text-4xl lg:text-5xl text-white text-center lg:text-left">
                One App to Access and Manage Crypto Across Multiple Networks
              </h1>

              <p className="mt-3 text-lg text-[#F1F8E8] text-center lg:text-left font-normal opacity-80">
                Easily manage, move, and use your digital assets across supported networks with a
                smooth and secure experience.
              </p>

              <div className="text-center xl:text-start">
                <div className="mt-3 mb-4 lg:mb-0  mx-auto lg:mx-0 w-full max-w-90 md:max-w-95">
                  <Link
                    href="https://app.swiftexchange.io/"
                    target="_blank"
                    className="lg:h-16 h-14 flex items-center justify-center gap-2.5 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-base rounded-2xl shadow-xl transition-all duration-300  active:scale-95 border border-white/10 w-full mb-4"
                    aria-label="Launch SwiftEx Web App"
                  >
                    <span>Launch Web App</span>
                    <ArrowLeftRight size={18} className="opacity-80" />
                  </Link>

                  {/* Mobile App Download Box */}
                  <div className="bg-transparent sm:bg-white/2 border-0 sm:border border-white/10 rounded-none sm:rounded-2xl p-0 sm:p-4 relative sm:overflow-hidden group">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex flex-row sm:flex-col gap-2.5 items-center sm:items-stretch justify-center w-full sm:w-auto">
                        <StoreButton
                          storeType="apple"
                          imageSrc="/app-store-download.fb5659b5.png"
                          height={48}
                        />
                        <StoreButton
                          storeType="google"
                          imageSrc="/google-play-download.1c0e3a31.png"
                          height={48}
                        />
                      </div>

                      <div className="hidden sm:block w-px h-24 bg-white/10" />

                      <div className="hidden sm:flex flex-col items-center gap-1.5 shrink-0">
                        <div className="relative block bg-white p-1 rounded-xl">
                          <Image
                            src="/qr/swiftex.png"
                            alt="Scan to download SwiftEx"
                            width={80}
                            height={80}
                            className="rounded-lg block"
                            priority
                          />
                        </div>
                        <span className="text-[10px] text-white/50 font-medium tracking-wide">
                          Scan to download
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="flex items-center justify-center xl:justify-start mt-4">
                  <div className={styles.googleBorderButton}>
                    <button
                      type="button"
                      className="group relative w-full sm:w-auto min-w-60 bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl px-8 py-4 text-center transition-all duration-300 transform"
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
                </div> */}

                {/* <div className="flex items-center justify-center xl:justify-start mt-3">
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
                </div> */}
              </div>
            </div>
          </div>

          <div
            className={`w-full lg:w-full relative mt-1 lg:mt-12 ${
              animateIn ? styles.imageEnterAnimation : ''
            }`}
          >
            <div className={`${styles.headerImageWrapper} h-[450px] md:h-[500px] lg:h-[85vh] mb-6`}>
              <Image
                className={`${styles.headerImage} lg:max-h-[70vh] w-auto`}
                src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770117148/apphome-left_jko6mi.webp"
                alt="SwiftEx mobile application interface showing wallet and asset management features"
                width={500}
                height={1000}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={85}
              />

              <CardComponent
                title="Send"
                description="Send digital assets to wallets across multiple networks."
                icon={Send}
                className="_1"
                colorClass="iconScan"
              />

              <CardComponent
                title="Wallet"
                description="Add, view, and manage multiple wallets in one place."
                icon={Wallet}
                className="_2"
                colorClass="iconConvert"
              />

              <CardComponent
                title="Cross-chain"
                description="Swap and bridge tokens across supported networks"
                icon={Repeat}
                className="_3"
                colorClass="iconSend"
              />

              <CardComponent
                title="Fiat Access"
                description="Convert between crypto and fiat via licensed partners."
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
        {/* {showDemoModal && (
          <DemoModal isVisible={showDemoModal} onClose={handleCloseDemo} videoId="BZie-z79BGQ" />
        )} */}
      </Suspense>
    </>
  );
};

export default React.memo(NewWallet);
