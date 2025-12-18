'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../style/promoSection.module.css';
import Modal from './Modal';
import { Info } from 'lucide-react';

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

              <button
                type="button"
                className="text-white mt-2 min-w-60 bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-4 font-medium rounded-full px-5 py-5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 text-lg"
                onClick={handleGetStarted}
              >
                Download now
              </button>
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
