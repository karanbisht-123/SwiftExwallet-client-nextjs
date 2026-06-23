'use client';

import React from 'react';
import Image from 'next/image';

const partners = [
  { id: 1, logo: '/images/partners/stellar.png' },
  { id: 2, logo: '/images/partners/alchemypay.jpg' },
  { id: 3, logo: '/images/partners/1inchnetwork.webp' },
  { id: 4, logo: '/images/partners/Banxa2.webp' },
  { id: 5, logo: '/images/partners/changely2.jpeg' },
  { id: 6, logo: '/images/partners/moonpay.png' },
  { id: 7, logo: '/images/partners/unisap.png' },
];

const css = `
  @keyframes marqueeLeft {
    from { transform: translateX(0); }
    to   { transform: translateX(calc(-100% / 3)); }
  }

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .mq-track {
    animation: marqueeLeft 28s linear infinite;
  }

  .mq-wrap:hover .mq-track {
    animation-play-state: paused;
  }

  .anim-in {
    opacity: 0;
    animation: fadeSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) var(--delay, 0s) forwards;
  }
`;

export default function PartnersMarquee() {
  const tripled = [...partners, ...partners, ...partners];

  return (
    <>
      <style>{css}</style>

      <section className="relative max-w-7xl mx-auto xl:rounded-3xl overflow-hidden bg-[#020E46] py-8 lg:py-16">

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="px-4 lg:px-8 text-center mb-8">
          <h3
            className="anim-in text-5xl lg:text-6xl  text-white"
          >
            Our Partners
          </h3>
        </div>

        <div
          className="anim-in"
          style={{ '--delay': '0.2s' } as React.CSSProperties}
        >
          <div
            className="mq-wrap overflow-hidden"
            style={{
              WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
              maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
            }}
          >
            <div className="mq-track flex items-center gap-4 w-max">
              {tripled.map((partner, index) => (

                <div
                  key={`${partner.id}-${index}`}
                  className="shrink-0 w-36 h-20 lg:w-44 lg:h-24 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/15 transition-all duration-300 flex items-center justify-center p-4"
                >

                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt="Partner logo"
                      fill
                      sizes="(max-width: 1024px) 144px, 176px"
                      className="object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>
    </>
  );
}