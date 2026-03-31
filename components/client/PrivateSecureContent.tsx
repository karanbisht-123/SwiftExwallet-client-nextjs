'use client';

import { useState } from 'react';
import { Lock, UserCog, Key, LucideIcon } from 'lucide-react';
import Modal from './Modal';
import StoreButton from './StoreButton';

const iconMap: Record<string, LucideIcon> = {
  Lock,
  UserCog,
  Key,
};

interface SecurityFeature {
  iconName: string;
  title: string;
  description: string;
}

interface HeroContent {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface PrivateSecureContentProps {
  securityFeatures: SecurityFeature[];
  heroContent: HeroContent;
}

export function PrivateSecureContent({ securityFeatures, heroContent }: PrivateSecureContentProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStarted = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Modal isVisible={showPopup} onClose={handleClosePopup} />

      <div className="bg-white shadow-xl p-4 lg:p-8 mb-12 border border-black rounded-3xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-3xl font-medium text-black mb-3">{heroContent.title}</h2>
            <p className="text-[#656464] mb-6 font-thin opacity-95">{heroContent.description}</p>
            <div className="relative">
              <button
                className="bg-[#2458DE] text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                style={{ borderRadius: '20px' }}
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>

          </div>
          <div className="lg:w-1/3 lg:pr-16">
            <img
              src={heroContent.imageSrc}
              alt={heroContent.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {securityFeatures.map((feature, index) => {
          const Icon = iconMap[feature.iconName];
          const scaleClass = index === 1 ? 'hover:scale-110' : 'hover:scale-105';

          return (
            <div
              key={index}
              className={`bg-white p-4 lg:p-8 shadow-xl border border-black rounded-3xl text-center transform ${scaleClass} transition-transform duration-300 ease-in-out`}
            >
              {Icon && (
                <Icon
                  size={80}
                  className="text-8xl text-white mb-4 p-4 bg-[#020E46] rounded-full shadow-lg mx-auto"
                />
              )}
              <h3 className="text-2xl font-medium text-black mb-3">{feature.title}</h3>
              <p className="text-[#656464] font-thin opacity-95">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
