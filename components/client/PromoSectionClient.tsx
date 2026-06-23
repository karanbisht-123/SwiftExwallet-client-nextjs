'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../style/promoSection.module.css';
import Modal from './Modal';
// import { Info } from 'lucide-react';
import StoreButton from './StoreButton';
import Link from 'next/link';
import Image from 'next/image';
interface PromoSectionClientProps {
  title: string;
  subtitle: string | null;
  description: string | null;
  imageSrc?: string;
  videoSrc?: string;
}

export function PromoSectionClient({
  title,
  subtitle,
  description,
  imageSrc,
  videoSrc,
}: PromoSectionClientProps) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenInView(true);
    }
  }, [inView]);

  const handleGetStarted = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section className="bg-[#020E46] lg:h-[94svh]">
        <article
          ref={ref}
          className={`${styles.topPromo} ${styles.landingPromo} pt-12 container max-w-7xl mx-auto p-4 pb-0 promo-section flex-col xl:flex-row h-full lg:max-w-7xl`}
        >
          <div className="flex flex-col p-4 lg:p-0 gap-8 justify-center xl:w-1/2">
            <div className="flex flex-col gap-2">
              <motion.h1
                initial={{ x: '-100%', opacity: 0 }}
                animate={hasBeenInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-md font-thin opacity-80 text-[#F1F8E8] text-center xl:text-left"
              >
                {title}
              </motion.h1>
              <motion.h2
                initial={{ x: '-100%', opacity: 0 }}
                animate={hasBeenInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-6xl font-medium text-[#FFFFFF] text-center xl:text-left"
              >
                {subtitle}
              </motion.h2>
              <motion.p
                initial={{ x: '-100%', opacity: 0 }}
                animate={hasBeenInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-3 text-[#F1F8E8] font-thin opacity-80 text-center xl:text-left"
              >
                {description}
              </motion.p>
            </div>
            <div className="text-center xl:text-start">
              {/* <div className="flex items-center justify-center xl:justify-start gap-2 text-[#F1F8E8] text-sm opacity-80 mb-2">
                <Info className="text-lg text-white" />
                <span>Currently on Test Network</span>
              </div> */}

              {/* <button
                type="button"
                className="text-white mt-2 min-w-60 bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-4 font-medium rounded-full px-5 py-5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 text-lg"
                onClick={handleGetStarted}
              >
                Download now
              </button> */}


              <div className="mt-6 lg:mt-8 mx-auto lg:mx-0 w-full max-w-[360px] md:max-w-[380px]">
                <div className="bg-transparent sm:bg-white/[0.02] border-0 sm:border border-white/10 rounded-none sm:rounded-2xl p-0 sm:p-4 relative sm:overflow-hidden group">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Left: Badges (side-by-side on mobile, stacked on desktop) */}
                    <div className="flex flex-row sm:flex-col gap-2.5 items-center sm:items-stretch justify-center w-full sm:w-auto">
                      <StoreButton
                        storeType="apple"
                        imageSrc="/app-store-download.fb5659b5.png"
                      />
                      <StoreButton
                        storeType="google"
                        imageSrc="/google-play-download.1c0e3a31.png"
                      />
                    </div>

                    {/* Divider (horizontal on mobile, vertical on desktop - hidden on mobile) */}
                    <div className="hidden sm:block w-px h-16 bg-white/10" />

                    {/* Right: QR Code (hidden on mobile, shown on desktop) */}
                    <div className="hidden sm:flex flex-col items-center gap-1.5 shrink-0">
                      <Link href="/download" aria-label="Open download page" className="group/qr relative block bg-white p-1 rounded-xl transition-transform duration-300 hover:scale-105">
                        <Image
                          src="/qr/swiftex.png"
                          alt="Scan to download SwiftEx"
                          width={80}
                          height={80}
                          className="rounded-lg block"
                          priority
                        />
                      </Link>
                      <span className="text-[10px] text-white/50 font-medium tracking-wide">Scan to download</span>
                    </div>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 mt-4 sm:bg-transparent sm:border-0 sm:p-0 sm:pt-3.5 sm:border-t sm:border-white/5 flex items-center justify-between text-xs">
                    <span className="text-white/40 font-light">Looking for the APK/TestFlight?</span>
                    <button
                      type="button"
                      onClick={handleGetStarted}
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                    >
                      Try Beta →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {imageSrc && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={hasBeenInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${styles.promoImg} mt-12 xl:mt-0`}
            >
              <div className={styles.imageWrapper}>
                <img src={imageSrc} alt="SwiftEx Wallet" className={styles.promoImage} />
                {videoSrc && (
                  <video
                    preload="auto"
                    muted
                    playsInline
                    autoPlay
                    loop
                    className={styles.promoVideo}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          )}
        </article>
      </section>

      <Modal isVisible={showPopup} onClose={handleClosePopup} />
    </>
  );
}
