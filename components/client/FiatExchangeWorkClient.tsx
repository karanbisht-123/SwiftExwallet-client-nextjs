'use client';

import React from 'react';
import {
  UserPlus,
  CreditCard,
  Banknote,
  ArrowLeftRight,
  Wallet,
  MoveHorizontal,
} from 'lucide-react';
import { ExchangeFeature } from '../server/FiatExchangeWork';

interface FiatExchangeWorkClientProps {
  features: ExchangeFeature[];
  imageSrc: string;
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start p-4 rounded-xl bg-white/5 bg-opacity-5 backdrop-blur-lg transition-all duration-300 hover:bg-opacity-10 hover:scale-105">
    <div className="bg-blue-800 rounded-full p-2 mr-3">{icon}</div>
    <div>
      <h3 className="text-xl font-medium mb-1 text-blue-200">{title}</h3>
      <p className="text-white font-thin text-opacity-80 text-sm">{description}</p>
    </div>
  </div>
);

export function FiatExchangeWorkClient({ features, imageSrc }: FiatExchangeWorkClientProps) {
  // Map icon names to actual icon components
  const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
    UserPlus,
    CreditCard,
    Banknote,
    ArrowLeftRight,
    Wallet,
    MoveHorizontal,
  };

  return (
    <div className="container max-w-7xl mx-auto bg-gradient-to-r from-[#1A3A5A] to-[#0F2A4A] lg:py-16 py-6 lg:px-6 px-2 xl:rounded-3xl shadow-lg">
      <h2 className="text-4xl font-medium mb-12 text-white leading-tight text-center">
        Exchange Made Simple
        <br />
        <span className="text-blue-300 font-medium">Your Path to Seamless Transactions</span>
      </h2>

      <div className="flex flex-col items-center space-y-6 lg:space-y-12">
        {/* Image Section */}
        <div className="w-full flex justify-center items-center">
          <div className="relative group w-full max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-75 blur-3xl group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 w-full overflow-hidden">
              <img
                src={imageSrc}
                alt="Currency exchange process visualization"
                className="w-full h-auto object-cover object-center transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.iconName];
              return (
                <FeatureItem
                  key={index}
                  icon={<IconComponent className="text-blue-300" size={24} />}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
