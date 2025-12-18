import { BuyCryptoSectionClient } from '../client/BuyCryptoSectionClient';

export interface Slide {
  image: string;
  title: string;
}

export interface Feature {
  title: string;
  description: string;
  iconColor: string;
  gradientColor: string;
}

export const slides: Slide[] = [
  {
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958365/trade1_o9d6od.avif',
    title: 'Instant Trade',
  },
  {
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958367/trade4_q1nata.avif',
    title: 'Large Trade',
  },
  {
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958366/trade2_om0sgs.avif',
    title: 'Trade Overview',
  },
  {
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958366/trade3_x4uxne.avif',
    title: 'Order Book',
  },
  {
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958365/exhnagetrade_c0wdfy.avif',
    title: 'Home Screen',
  },
];

export const features: Feature[] = [
  {
    title: 'Accessible',
    description: 'Easily buy Ethereum or other cryptocurrencies through our vetted partners.',
    iconColor: 'text-green-400',
    gradientColor: 'from-green-400/20 to-green-600/10',
  },
  {
    title: 'Convenient',
    description:
      'Buy crypto with your preferred payment method through our simple partner integrations.',
    iconColor: 'text-blue-400',
    gradientColor: 'from-blue-400/20 to-blue-600/10',
  },
  {
    title: 'Low-cost',
    description:
      'Expect favorable quotes from many of our providers with transparent fees and minimal shifts in exchange rates.',
    iconColor: 'text-purple-400',
    gradientColor: 'from-purple-400/20 to-purple-600/10',
  },
  {
    title: 'Secure',
    description:
      'Your transactions are protected with industry-leading security measures including biometric authentication and encryption.',
    iconColor: 'text-yellow-400',
    gradientColor: 'from-yellow-400/20 to-yellow-600/10',
  },
  {
    title: 'Seamless Exchange',
    description:
      'Easily exchange your cryptocurrencies within the platform with minimal fees and access to the best rates.',
    iconColor: 'text-red-400',
    gradientColor: 'from-red-400/20 to-red-600/10',
  },
  {
    title: '24/7 Support',
    description:
      "Get 24/7 support from our expert developers—whenever you need help on your crypto journey, we've got your back.",
    iconColor: 'text-indigo-400',
    gradientColor: 'from-indigo-400/20 to-indigo-600/10',
  },
];

export default function BuyCryptoSection() {
  return <BuyCryptoSectionClient slides={slides} features={features} />;
}
