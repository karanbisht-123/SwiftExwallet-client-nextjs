'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SecurityCardData } from '../server/WalletSection';

interface SecurityCardProps extends SecurityCardData {
  isLastCard: boolean;
  zIndex: number;
  imagePosition: 'left' | 'right';
}

interface WalletSectionClientProps {
  cards: SecurityCardData[];
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const SecurityCard: React.FC<SecurityCardProps> = ({
  title,
  description,
  gradient,
  textColor,
  imageSrc,
  isLastCard,
  zIndex,
  imagePosition,
}) => (
  <motion.div
    className={`${gradient} ${textColor} p-2 md:p-8 lg:-mt-8 lg:p-16 xl:rounded-3xl shadow-lg md:sticky lg:max-h-[600px]  overflow-hidden`}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.5 }}
    variants={cardVariants}
    style={{
      marginBottom: isLastCard ? '0px' : '5px',
      zIndex,
    }}
  >
    <div
      className={`rounded-2xl ${textColor === 'text-[#333333]' ? 'bg-transparent' : 'bg-transparent'
        }`}
    >
      <div
        className={`flex flex-col-reverse md:flex-row justify-around items-center md:items-start ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''
          }`}
      >
        <div className="max-w-lg flex flex-col justify-center mt-4 lg:min-h-96 mb-4 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-medium mb-3 text-center md:text-start">
            {title}
          </h2>
          <p className="text-lg md:text-xl font-thin opacity-80 text-center md:text-start">
            {description}
          </p>
        </div>
        <div className="w-full lg:min-h-96 lg:w-1/2 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full max-h-[420px] md:max-h-[480px] lg:max-h-[900px] object-contain"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export function WalletSectionClient({ cards }: WalletSectionClientProps) {
  const totalCards = cards.length;

  return (
    <div className="mx-auto max-w-7xl relative ">
      {cards.map((card, index) => (
        <SecurityCard
          key={index}
          {...card}
          isLastCard={index === totalCards - 1}
          zIndex={totalCards - index}
          imagePosition={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
}
