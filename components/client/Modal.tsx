import React, { useEffect, useRef, ReactNode, useState } from 'react';
import { X, Info } from 'lucide-react';
import StoreButton from './StoreButton';
type NetworkType = 'mainnet' | 'testnet';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const handleDownloadAPK = (isMainnet: boolean) => {
  const mainnetUrl = 'https://swift-ex-web-app.s3.us-east-2.amazonaws.com/SwiftEx+wallet.apk';
  const testnetUrl =
    'https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects/app-release.apk';
  const apkUrl = isMainnet ? mainnetUrl : testnetUrl;
  window.location.href = apkUrl;
};

const handleRedirectToForm = (isMainnet: boolean) => {
  const mainnetFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSeSr5_flmvF16Vw2Q1tcYR2xy-JAVa2y1dOdXT6l7bXwXKyow/viewform?usp=dialog';
  const testnetFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSelpYCirc0MDaVp6mKMJKnHP1QOGeoYvlOW6dkrMjasffV_-g/viewform';
  const formUrl = isMainnet ? mainnetFormUrl : testnetFormUrl;
  window.open(formUrl, '_blank');
};

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkType>('testnet');

  useEffect(() => {
    if (isVisible) {
      const scrollY = window.scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const isMainnet = selectedNetwork === 'mainnet';
  const networkInfo = isMainnet
    ? {
      name: 'Main Network',
      description: 'Real cryptocurrency network. Use real funds for actual transactions.',
    }
    : {
      name: 'Test Network',
      description: 'For testing purposes only. Use test tokens to experiment with the app.',
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 bg-opacity-60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative bg-white shadow-2xl p-4 md:p-6 w-full max-w-lg mx-4 rounded-3xl border border-gray-100 max-h-[90vh] overflow-y-auto"
      >
        <div className="text-start mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            Download SwiftEx App
          </h2>

          <div className="flex flex-row items-center justify-center my-4 lg:justify-start gap-4">
            <StoreButton storeType="apple" imageSrc="/app-store-download.fb5659b5.png" />
            <StoreButton storeType="google" imageSrc="/google-play-download.1c0e3a31.png" />
          </div>
          <div className="bg-blue- p-3 rounded-xl border border-blue-100 mt-4">
            <div className="flex items-start justify-center gap-2 text-sm">
              <Info className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
              <span className="text-blue-700 text-left">
                <span className="font-semibold">{networkInfo.name}</span>
                {` - ${networkInfo.description}`}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-100 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-1 mb-8 shadow-inner relative">
          <div
            className={`absolute top-1 bottom-1 bg-white rounded-xl shadow-lg transition-all duration-500 ease-in-out ${selectedNetwork === 'testnet' ? 'left-1 right-1/2 mr-0.5' : 'left-1/2 right-1 ml-0.5'
              }`}
          ></div>
          <button
            onClick={() => setSelectedNetwork('testnet')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ease-in-out relative z-10 ${selectedNetwork === 'testnet' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Testnet
          </button>
          <button
            onClick={() => setSelectedNetwork('mainnet')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ease-in-out relative z-10 ${selectedNetwork === 'mainnet' ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Mainnet
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-1">
            <button
              onClick={() => handleDownloadAPK(isMainnet)}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Download {isMainnet ? 'Mainnet' : 'Testnet'} APK
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
            <span className="text-gray-400 text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200"></div>
          </div>

          <div className="text-center mb-4">
            <p className="text-gray-600 text-sm">
              iOS is here! Fill out the form to get TestFlight access.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-1">
            <button
              onClick={() => handleRedirectToForm(isMainnet)}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              iOS {isMainnet ? 'Mainnet' : 'Testnet'} Access
            </button>
          </div>
        </div>

        <div className=" text-gray-500 text-center mt-4">
          <p className="text-xs">
            By downloading, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
