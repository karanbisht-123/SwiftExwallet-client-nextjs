'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal from './Modal';
// import { Info } from 'lucide-react';

interface BannerContentProps {
  content: {
    heading: string;
    highlightedText: string;
    subHeading: string;
    description: string;
    // networkStatus: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
  };
}

export function BannerContent({ content }: BannerContentProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStarted = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Modal isVisible={showPopup} onClose={handleClosePopup} />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="container mx-auto px-4 py-12 sm:py-16"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <motion.div variants={itemVariants} className="lg:w-1/2 w-full text-center lg:text-left">
            <h3
              id="banner-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {content.heading} <span className="text-blue-800">{content.highlightedText}</span>{' '}
              {content.subHeading}
            </h3>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              {content.description}
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4">
              {/* <div className="flex items-center gap-2 text-gray-700">
                <Info className="text-xl text-blue-800" />
                <span>{content.networkStatus}</span>
              </div> */}

              <button
                onClick={handleGetStarted}
                aria-label="Download SwiftEx Wallet"
                className="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-full px-8 py-4 text-lg transition-colors duration-300 transform hover:scale-105"
              >
                {content.buttonText}
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:w-1/2 w-full flex justify-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 20,
                delay: 0.5,
              }}
              className="relative w-full max-w-md h-[300px] lg:h-[400px]"
            >
              <img
                src={content.imageSrc}
                alt={content.imageAlt}
                className="h-full w-full object-contain drop-shadow-xl"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
