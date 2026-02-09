'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { Slide, Feature } from '../server/BuySellSection';

interface BuyCryptoSectionClientProps {
  slides: Slide[];
  features: Feature[];
}

interface ImageStyleProps {
  top: string;
  left: string;
  zIndex: number;
  opacity: number;
  scale: number;
}

export function BuyCryptoSectionClient({ slides, features }: BuyCryptoSectionClientProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex(prev => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, slides.length]);

  const handleDotClick = (index: number): void => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex(prev => (prev + 1) % slides.length);
      }, 5000);
    }
  };

  const nextSlide = (): void => {
    setActiveIndex(prev => (prev + 1) % slides.length);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex(prev => (prev + 1) % slides.length);
      }, 5000);
    }
  };

  const prevSlide = (): void => {
    setActiveIndex(prev => (prev - 1 + slides.length) % slides.length);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex(prev => (prev + 1) % slides.length);
      }, 5000);
    }
  };

  const getImageStyles = (index: number): ImageStyleProps => {
    const diff = (index - activeIndex + slides.length) % slides.length;
    const positions: Record<number, ImageStyleProps> = {
      0: { top: '50%', left: '50%', zIndex: 40, opacity: 1, scale: 1.1 },
      1: { top: '30%', left: '75%', zIndex: 30, opacity: 0.7, scale: 0.59 },
      2: { top: '75%', left: '75%', zIndex: 20, opacity: 0.5, scale: 0.59 },
      3: { top: '75%', left: '25%', zIndex: 20, opacity: 0.5, scale: 0.59 },
      4: { top: '30%', left: '25%', zIndex: 30, opacity: 0.7, scale: 0.59 },
    };
    return positions[diff];
  };

  return (
    <div className="container max-w-7xl mx-auto py-6 md:py-16 px-4 sm:px-6 xl:rounded-3xl shadow-2xl overflow-hidden relative bg-gradient-to-r from-[#020E46] to-[#020E46]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-16 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 left-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl mb-4 sm:mb-6 text-white leading-tight">
            Manage Your Digital Assets With Ease
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 font-light max-w-2xl mx-auto md:mb-12">
            Access and organize your digital assets securely and effortlessly, all from one
            intuitive wallet.
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden h-[540px] md:h-[480px] lg:min-h-[700px] md:mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 z-50 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 z-50 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute cursor-pointer w-1/2 sm:w-3/4 md:w-[24%] lg:w-[22%] max-w-xl"
              style={{ x: '-50%', y: '-50%' }}
              animate={getImageStyles(index) as any}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              onClick={() => handleDotClick(index)}
              whileHover={{
                scale: index === activeIndex ? 1 : getImageStyles(index).scale * 1,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative group">
                <img src={slide.image} alt={slide.title} className="w-full h-auto" />
                {/* {index === activeIndex && (
                  <div className="absolute inset-0 rounded-xl flex items-end justify-center p-6">
                    <div className="text-center bg-blue-600 p-3 py-1 rounded-xl">
                      <h3 className="text-white lg:text-sm text-xs">{slide.title}</h3>
                    </div>
                  </div>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2  lg:grid-cols-3 lg:gap-4 gap-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${feature.gradientColor} backdrop-blur-lg rounded-xl p-3 lg:p-6 text-left border border-white/10 hover:border-white/20 transition-all`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 10,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)',
              }}
            >
              <div className="flex items-center mb-3">
                <div className="bg-white/10 rounded-full p-1.5 mr-3">
                  <Check className={`w-5 h-5 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-white text-opacity-80 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
