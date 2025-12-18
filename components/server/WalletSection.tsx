import { WalletSectionClient } from '../client/WalletSectionClient';

export interface SecurityCardData {
  title: string;
  description: string;
  gradient: string;
  textColor: string;
  imageSrc: string;
  imageHeight: string;
}

export const securityCards: SecurityCardData[] = [
  {
    title: 'Easy Account Setup',
    description:
      'Create and manage your account with ease, thanks to our user-friendly onboarding process.',
    gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
    textColor: 'text-black',
    imageSrc: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958333/wallet1_bhbrvz.avif',
    imageHeight: '350px',
  },
  {
    title: 'Multi-Currency Support',
    description:
      'Easily manage a diverse portfolio of digital assets, including cryptocurrencies and stablecoins, all in one place.',
    gradient: 'bg-gradient-to-r from-[#020E46] to-[#020E46]',
    textColor: 'text-white',
    imageSrc: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958333/wallet2_h7zlfm.avif',
    imageHeight: '350px',
  },
  {
    title: 'Passkey protected',
    description:
      'No more complicated passwords or 12-word secret phrases to manage. SWIFT reduces the risk of lost funds by using biometric-protected passkeys to create, secure, and recover your wallet.',
    gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
    textColor: 'text-black',
    imageSrc: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958333/wallet3_fpwrgd.avif',
    imageHeight: '350px',
  },
  {
    title: 'User-Friendly Interface',
    description:
      'Enjoy a clean and intuitive design that simplifies the process of sending, receiving, and managing your assets.',
    gradient: 'bg-gradient-to-r from-[#020E46] to-[#020E46]',
    textColor: 'text-white',
    imageSrc: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958334/wallet4_zcyldy.avif',
    imageHeight: '400px',
  },
  {
    title: 'Instant Transactions',
    description:
      'Experience fast and reliable transactions with minimal fees, leveraging the power of the Stellar network.',
    gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
    textColor: 'text-black',
    imageSrc: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958334/wallet5_o9roks.avif',
    imageHeight: '400px',
  },
  {
    title: 'Real-Time Price Tracking',
    description:
      'Stay updated with live market prices and trends to make informed decisions about your investments.',
    gradient: 'bg-gradient-to-r from-[#020E46] to-[#020E46]',
    textColor: 'text-white',
    imageSrc: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958334/wallet6_xqvea7.avif',
    imageHeight: '400px',
  },
];

export default function WalletSection() {
  return <WalletSectionClient cards={securityCards} />;
}
