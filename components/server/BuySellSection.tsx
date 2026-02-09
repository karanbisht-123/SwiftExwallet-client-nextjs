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
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770127883/sdexhome-portrait_brtvcz.webp',
    title: 'Manage Assets',
  },
  {
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770127179/a8qbrf103y5tqzwugfsr_ogwwxe.webp',
    title: 'Portfolio Overview',
  },
  {
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770127197/ebaxossfviqrdewewe7r_i2wweg.webp',
    title: 'Swap Assets',
  },
  {
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770127182/mznpj8dzcqbtrdrpoci4_txkmjx.webp',
    title: 'Transaction Overview',
  },
  {
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770127197/ehye4nq9ha3vgm1w3y7j_srhzwo.webp',
    title: 'Home Screen',
  },
];

export const features: Feature[] = [
  {
    title: 'Accessible',
    description: 'Easily purchase supported digital assets via licensed partners.',
    iconColor: 'text-green-300',
    gradientColor: 'from-green-400/20 to-green-600/10',
  },
  {
    title: 'Convenient',
    description: 'Use your preferred payment method with our trusted partner integrations.',
    iconColor: 'text-blue-300',
    gradientColor: 'from-blue-400/20 to-blue-600/10',
  },
  {
    title: 'Transparent Fees',
    description: 'All transaction fees are provided by our partners and are fully transparent.',
    iconColor: 'text-purple-300',
    gradientColor: 'from-purple-400/20 to-purple-600/10',
  },
  {
    title: 'Secure',
    description: 'Transactions are protected with secure partner systems and encryption.',
    iconColor: 'text-yellow-300',
    gradientColor: 'from-yellow-400/20 to-yellow-600/10',
  },
  {
    title: 'Seamless Swaps',
    description: 'Swap digital assets easily with minimal delays via partner networks.',
    iconColor: 'text-red-300',
    gradientColor: 'from-red-400/20 to-red-600/10',
  },
  {
    title: 'Support',
    description: 'Get assistance when needed while using our partner-integrated services.',
    iconColor: 'text-indigo-300',
    gradientColor: 'from-indigo-400/20 to-indigo-600/10',
  },
];

export default function BuySellSection() {
  return <BuyCryptoSectionClient slides={slides} features={features} />;
}
