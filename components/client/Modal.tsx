import React, { useEffect, useRef, ReactNode } from 'react';
import { X, Info } from 'lucide-react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const handleDownloadAPK = () => {
  const mainnetUrl = 'https://swift-ex-web-app.s3.us-east-2.amazonaws.com/SwiftEx+wallet.apk';
  window.location.href = mainnetUrl;
};

const appStoreUrl = process.env.NEXT_PUBLIC_APPLE_PLAY_URL?.trim() || 'https://apps.apple.com/';
const googlePlayUrl =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL?.trim() || 'https://play.google.com/store';

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 bg-opacity-60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative bg-white shadow-2xl p-4 md:p-6 w-full max-w-lg mx-4 rounded-3xl border border-gray-100 max-h-[90vh] overflow-y-auto"
      >
        <div className="text-start mb-6">
          <h2 className="text-2xl font-bold text-slate-950 mb-3">Download SwiftEx App</h2>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="flex items-start gap-3 text-sm text-slate-700">
              <Info className="mt-0.5 shrink-0 text-sky-500" size={18} />
              <div>
                <p className="font-semibold text-slate-900">Main Network</p>
                <p className="mt-1 text-slate-600">
                  Real cryptocurrency network. Use real funds for actual transactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-500 shadow-sm transition hover:bg-slate-200 hover:text-slate-700"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="space-y-5 mb-6">
          <button
            onClick={handleDownloadAPK}
            className="w-full rounded-[1.75rem] bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
          >
            Download APK
          </button>

          <div className="flex items-center justify-center gap-3 text-sm font-medium text-slate-500">
            <span className="h-px flex-1 bg-slate-200"></span>
            <span>or install from</span>
            <span className="h-px flex-1 bg-slate-200"></span>
          </div>

          {/* <p className="text-center text-sm text-slate-600">
            Choose the store for your device and open SwiftEx directly from the app marketplace.
          </p> */}

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center rounded-[1.75rem] bg-slate-50 px-4 py-4 transition hover:bg-slate-100"
              aria-label="Download on the App Store"
            >
              <img
                src="/app-store-download.fb5659b5.png"
                alt="Download on the App Store"
                className="h-16 w-auto object-contain"
              />
            </a>

            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center rounded-[1.75rem] bg-slate-50 px-4 py-4 transition hover:bg-slate-100"
              aria-label="Get it on Google Play"
            >
              <img
                src="/google-play-download.1c0e3a31.png"
                alt="Get it on Google Play"
                className="h-16 w-auto object-contain"
              />
            </a>
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
