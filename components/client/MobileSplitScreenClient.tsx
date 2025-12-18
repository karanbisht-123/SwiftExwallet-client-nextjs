'use client';

import { motion } from 'framer-motion';

interface Section {
  title: string;
  content: string;
  gradient: string;
  image: string;
  link: string;
  linkText?: string;
}

interface MobileSplitScreenClientProps {
  sections: Section[];
}

export default function MobileSplitScreenClient({ sections }: MobileSplitScreenClientProps) {
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <motion.article
          key={index}
          className="flex flex-col"
          style={{
            background: section.gradient,
            position: 'relative',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                index % 2 === 0
                  ? 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)'
                  : 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* Content Section */}
          <div
            className={`px-6 py-8 relative z-10 ${index % 2 !== 0 ? 'text-white' : 'text-black'}`}
          >
            <h2 className="text-3xl font-light mb-4 leading-tight">{section.title}</h2>
            <p className="text-lg font-light opacity-90 mb-6 leading-relaxed">{section.content}</p>
            <a
              href={section.link}
              className={`text-lg font-light underline underline-offset-4 decoration-2 ${
                index % 2 !== 0 ? 'text-white' : 'text-black'
              } hover:opacity-80 transition duration-200`}
              aria-label={`${section.linkText || 'Learn More'} about ${section.title}`}
            >
              {section.linkText || 'Learn More'}
            </a>
          </div>

          <div className="w-full max-h-[280px] overflow-hidden px-3 relative z-10">
            <img
              src={section.image}
              alt={`${section.title} - ${section.content}`}
              className="w-full h-auto object-contain"
              loading="lazy"
              width="600"
              height="280"
            />
          </div>
        </motion.article>
      ))}
    </div>
  );
}
