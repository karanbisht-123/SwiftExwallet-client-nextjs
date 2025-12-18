'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../server/FAQ';

interface FAQClientProps {
  faqs: FAQItem[];
  title: string;
  bgClass: string;
}

interface FAQItemComponentProps {
  item: FAQItem;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItemComponent: React.FC<FAQItemComponentProps> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden" id="faq">
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg text-gray-800 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
        onClick={toggleOpen}
      >
        <span className="font-medium">{item.question}</span>
        <span className="ml-6 flex-shrink-0 text-blue-500">
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 bg-gray-50 font-thin text-gray-600 border-t border-gray-100">
              <p className="font-thin">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQClient({ faqs, title, bgClass }: FAQClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Check if there's a hash in the URL for scrolling to FAQ
    if (typeof window !== 'undefined' && window.location.hash === '#faq') {
      const element = document.getElementById('faq');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section id="faq" className={`${bgClass} py-16 max-w-7xl mx-auto xl:rounded-3xl`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-center mb-12 text-gray-800">{title}</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItemComponent
              key={index}
              item={faq}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
