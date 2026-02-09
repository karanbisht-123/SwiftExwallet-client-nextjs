'use client';

import React, { useState } from 'react';
import { CreditCard, Wallet, Landmark, Bitcoin, PiggyBank, Percent } from 'lucide-react';
import { PaymentMethod, FeeInfo } from '../server/PaymentSection';

interface PaymentSectionClientProps {
  paymentMethods: PaymentMethod[];
  feeInfo: FeeInfo[];
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PaymentMethodCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="bg-white/10 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-opacity-20 flex flex-col md:flex-row">
    <div className="w-1/3 bg-blue-900 flex items-center justify-center p-6 rounded-br-2xl">
      <div className="text-white">{icon}</div>
    </div>
    <div className="md:w-2/3 w-full p-6">
      <h3 className="text-2xl font-medium mb-3 text-white">{title}</h3>
      <p className="text-blue-100 font-thin opacity-80">{description}</p>
    </div>
  </div>
);

const FeeCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="bg-white/10 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-opacity-20 flex flex-col md:flex-row">
    <div className="w-1/4 bg-blue-900 flex items-center justify-center p-6 rounded-br-2xl">
      <div className="text-white">{icon}</div>
    </div>
    <div className="md:w-3/4 w-full p-6">
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  </div>
);

export function PaymentSectionClient({ paymentMethods, feeInfo }: PaymentSectionClientProps) {
  const [activeTab, setActiveTab] = useState<'payment' | 'fees'>('payment');

  const icons = [
    <CreditCard size={48} />,
    <Wallet size={48} />,
    <Landmark size={48} />,
    <Bitcoin size={48} />,
  ];

  const feeIcons = [<PiggyBank size={48} />, <Percent size={48} />];

  return (
    <div className="container max-w-7xl mx-auto bg-[#020E46] py-12 lg:py-4 px-4 min-h-screen flex items-center justify-center xl:rounded-3xl shadow-2xl">
      <div>
        <h2 className="lg:text-5xl text-4xl font-medium mb-12 text-center text-white leading-tight">
          Securely Buy & Sell Crypto <br />
          <span className="text-blue-200 font-medium">Through Licensed Partners</span>
        </h2>

        {/* Toggle Section */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-900 rounded-full p-1 flex w-full max-w-md">
            <button
              className={`w-1/2 px-6 py-3 rounded-full text-lg font-thin ${activeTab === 'payment' ? 'bg-white text-blue-900' : 'text-white'
                } transition-all duration-300`}
              onClick={() => setActiveTab('payment')}
            >
              Payment Options
            </button>
            <button
              className={`w-1/2 px-6 py-3 rounded-full text-lg font-thin ${activeTab === 'fees' ? 'bg-white text-blue-900' : 'text-white'
                } transition-all duration-300`}
              onClick={() => setActiveTab('fees')}
            >
              Platform Highlights
            </button>
          </div>
        </div>

        {/* Content Section */}
        {activeTab === 'payment' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {paymentMethods.map((method, index) => (
              <PaymentMethodCard
                key={index}
                icon={icons[index]}
                title={method.title}
                description={method.description}
              />
            ))}
          </div>
        )}

        {activeTab === 'fees' && (
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {feeInfo.map((fee, index) => (
              <FeeCard
                key={index}
                icon={feeIcons[index]}
                title={fee.title}
                description={fee.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
