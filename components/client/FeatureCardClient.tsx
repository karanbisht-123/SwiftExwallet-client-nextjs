'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowLeftRight,
  ShieldCheck,
  Wallet,
  LineChart,
  PiggyBank,
  LifeBuoy,
  LucideIcon,
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  ArrowLeftRight,
  ShieldCheck,
  Wallet,
  LineChart,
  PiggyBank,
  LifeBuoy,
};

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

export function FeatureCard({ title, description, iconName, index }: FeatureCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const Icon = iconMap[iconName];

  return (
    <motion.div
      ref={ref}
      className={`w-full border-b md:w-1/2 ${
        index % 3 !== 2 ? 'md:border-r' : ''
      } lg:w-1/3 py-12 lg:px-8 p-3`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      whileHover={{ backgroundColor: '#020E46' }}
    >
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-[4px] bg-[#1a2b7a]">
          {Icon && <Icon className="h-5 w-5 lg:h-12 lg:w-12 text-yellow-400" />}
        </div>
        <div className="ml-4 text-2xl font-thin text-white">{title}</div>
      </div>
      <p className="leading-loose text-xl text-[#d0d0d0] font-thin opacity-80">{description}</p>
    </motion.div>
  );
}
