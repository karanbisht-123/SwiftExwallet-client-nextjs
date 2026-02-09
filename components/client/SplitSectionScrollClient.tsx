'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../style/splitSection.modules.css';

gsap.registerPlugin(ScrollTrigger);

interface Section {
  title: string;
  content: string;
  gradient: string;
  image: string;
  link: string;
  blobColors: string[];
  linkText?: string;
}

interface SplitSectionScrollClientProps {
  sections: Section[];
}

export default function SplitSectionScrollClient({ sections }: SplitSectionScrollClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = gsap.utils.toArray<HTMLElement>('.card');

    gsap.set(cards, { yPercent: 100, opacity: 1 });
    gsap.set(cards[0], { yPercent: 0, opacity: 1 });

    const setupScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${container.offsetHeight * (cards.length - 1)}`,
        pin: true,
        anticipatePin: 1,
        scrub: true,
        onUpdate: self => {
          const progress = self.progress;
          cards.forEach((card, index) => {
            const cardProgress = gsap.utils.clamp(0, 1, progress * (cards.length - 1) - index + 1);
            gsap.to(card, {
              yPercent: 100 - cardProgress * 100,
              opacity: 1,
              ease: 'none',
              duration: 0.3,
            });
          });
        },
      });
    };

    setupScrollTrigger();

    const handleResize = () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      setupScrollTrigger();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, [sections]);

  return (
    <div className="stacking-card-container max-w-7xl lg:mx-auto" ref={containerRef}>
      {sections.map((section, index) => (
        <article key={index} className="card">
          <div
            className="card-content min-w-7xl flex flex-col lg:flex-row items-center relative overflow-hidden lg:rounded-3xl"
            style={{
              background: `${section.gradient}`,
            }}
          >
            <div
              className={`phone-image-container ${index % 2 === 0 ? 'md:order-1 text-black' : 'md:order-2 text-white'
                } relative w-full lg:w-1/2 h-full flex justify-center items-center`}
            >
              <div className="relative z-10 w-full h-full flex justify-center items-center">
                <img
                  src={section.image}
                  alt={`${section.title} - ${section.content}`}
                  className="w-full h-full object-contain drop-shadow-lg relative"
                  loading="lazy"
                  width="800"
                  height="600"
                  onError={e => console.error(`Error loading image: ${section.image}`, e)}
                />
              </div>
            </div>
            <div
              className={`text-content ${index % 2 === 0 ? 'md:order-2 text-slate-800' : 'md:order-1 text-white'
                } lg:w-1/2 p-2 lg:p-8 relative max-h-[400px] z-10`}
            >
              <h3 className="font-medium text-5xl  text-center lg:text-start leading-tight">
                {section.title}
              </h3>
              <p className="text-lg font-thin opacity-70 md:text-2xl mt-3 text-center lg:text-start leading-relaxed mb-3 lg:mb-8">
                {section.content}
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href={section.link}
                  className="bg-white text-blue-600 font-thin py-2 px-4 rounded-md border hover:bg-blue-100 transition duration-300 "
                  aria-label={`${section.linkText || 'Learn More'} about ${section.title}`}
                >
                  {section.linkText || 'Learn More'}
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}