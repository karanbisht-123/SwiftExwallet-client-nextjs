'use client';

import { useState } from 'react';
import Modal from './Modal';

export function CashOutStepsContent() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStarted = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="mt-12 text-center relative">
        <button
          onClick={handleGetStarted}
          className="bg-[#2458DE] text-white font-bold py-3 px-8 rounded-full transition duration-300 hover:bg-[#1a47c4]"
        >
          Get Started
        </button>
      </div>

      <Modal isVisible={showPopup} onClose={handleClosePopup}></Modal>
    </>
  );
}
