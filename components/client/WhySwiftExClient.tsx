'use client';

import { useState, useRef, useEffect, JSX } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Key, Users, ArrowLeftRight, Percent } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  id: string;
  icon: JSX.Element;
  title: string;
  text: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 'secure-assets',
    icon: <Shield />,
    title: 'Secure Asset Management',
    text: 'Secure and controlled crypto asset management using a non-custodial wallet.',
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770203761/wallet4-Photoroom_xnk0ef.webp',
  },
  {
    id: 'full-control',
    icon: <Key />,
    title: 'Full Control',
    text: 'You retain full ownership and control of your private keys at all times.',
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770203761/wallet2-Photoroom_hhnnhk.webp',
  },

  {
    id: 'user-friendly',
    icon: <Users />,
    title: 'User Friendly',
    text: 'Clean and intuitive interface designed for seamless onboarding.',
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770301741/9061-03-iphone-16-mockupdsds-Photoroom_1_ltwlsa.webp',
  },

  {
    id: 'Easy-Token-Swaps',
    icon: <ArrowLeftRight />,
    title: 'Easy Token Swaps',
    text: 'Swap supported digital assets across blockchain networks.',
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770203761/wallet3-Photoroom_wq38h7.webp',
  },
  {
    id: 'No-Platform-Fees',
    icon: <Percent />,
    title: 'No Platform Fees',
    text: 'No platform fees for using core wallet and asset management features.',
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770203761/wallet1-Photoroom_heg5nl.webp',
  },
];

const MOBILE_HERO_IMAGE = '/walletimage/whyswiftEx.webp';

export default function WhySwiftExClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef<gsap.Context>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      return;
    }

    animationRef.current = gsap.context(() => {
      const images = imageContainerRef.current?.children;
      if (!images) return;
      gsap.set(images, { opacity: 1, scale: 1 });
      gsap.set(images[0], { opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 4%',
          end: `+=${features.length * 600}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: self => {
            const progress = self.progress * features.length;
            const clampedProgress = Math.min(progress, features.length - 0.01);
            const index = Math.floor(clampedProgress);
            setActiveFeature(index);
          },
        },
      });

      features.forEach((_, index) => {
        tl.to(images[index], {
          opacity: 1,
          ease: 'power1.inOut',
        });

        if (index > 0) {
          tl.to(
            images[index - 1],
            {
              opacity: 1,
              duration: 0.1,
              ease: 'power1.inOut',
            },
            '<'
          );
        }
      });
    });

    return () => {
      animationRef.current?.revert();
    };
  }, [isMobile]);

  return (
    <>
      <div className="w-full bg-linear-to-b from-gray-50 to-gray-100 py-4 lg:py-8 block lg:hidden">
        <div className="max-w-7xl mx-auto px-4 h-auto">
          <h2 className="text-3xl font-semibold pb-4 text-center not-[]:text-slate-800">
            Why Choose SwiftEx
          </h2>

          <div className="mb-6 relative w-full h-auto">
            <Image
              src={MOBILE_HERO_IMAGE}
              alt="SwiftEx Mobile Wallet Interface"
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="grid gap-4">
            {features.map(feature => (
              <div
                key={feature.id}
                id={feature.id}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-900 text-white rounded-lg">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative h-screen overflow-hidden hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center rounded-2xl bg-gray-100">
          <h2 className="text-5xl font-semibold mb-8 text-center text-slate-800">
            Why Choose SwiftEx
          </h2>

          <div className="grid grid-cols-2 gap-8 h-4/5 mt-6">
            <div
              ref={imageContainerRef}
              className="relative h-full flex items-center justify-center bg-gray-50 rounded-2xl"
            >
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity: activeFeature === index ? 1 : 0,
                    display: activeFeature === index ? 'block' : 'none',
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={`${feature.title} - ${feature.text}`}
                    fill
                    loading={index === 0 ? 'eager' : 'lazy'}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-4 bg-gray-50 p-4 rounded-2xl">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-75 ${activeFeature === index
                    ? 'bg-white border-l-4 border-[#020E46]'
                    : 'bg-gray-50 hover:bg-gray-100 border-l-4 border-gray-50'
                    }`}
                  onClick={() => {
                    const target = document.getElementById(feature.id);
                    if (target) {
                      window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${activeFeature === index
                        ? 'bg-[#020E46] text-white'
                        : 'bg-gray-200 text-gray-600'
                        }`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 mt-1">{feature.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
