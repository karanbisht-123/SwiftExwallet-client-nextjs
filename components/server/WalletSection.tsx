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
    title: 'Easy Wallet Setup',
    description:
      'Set up your wallet in minutes or securely import an existing wallet using a simple and intuitive onboarding process.',
    gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
    textColor: 'text-black',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770120981/walletscren-left_iqx6xe.webp',
    imageHeight: '350px',
  },
  {
    title: 'Manage Multiple Assets',
    description:
      'Organize and access a wide range of digital assets, including stablecoins and cryptocurrencies, across supported networks all in one place.',
    gradient: 'bg-gradient-to-r from-[#020E46] to-[#020E46]',
    textColor: 'text-white',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770121210/market_4.16.04_PM-left_gslmmo.webp',
    imageHeight: '350px',
  },
  {
    title: 'Fast & Reliable Transactions',
    description: 'Send and receive digital assets quickly and securely across supported networks.',
    gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
    textColor: 'text-black',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770127218/ki9of9j1mu4imttfwawf_udnydm.webp',
    imageHeight: '400px',
  },
  {
    title: 'Asset Overview',
    description:
      'View all your supported assets in one place, with up-to-date information across networks.',
    gradient: 'bg-gradient-to-r from-[#020E46] to-[#020E46]',
    textColor: 'text-white',
    imageSrc: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770188054/market-left_p4roph.webp',
    imageHeight: '400px',
  },
  {
    title: 'User-Friendly Interface',
    description:
      'Enjoy a clean and intuitive interface designed to make viewing, managing, and organizing digital assets simple and seamless.',
    gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
    textColor: 'text-black',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770117148/apphome-left_jko6mi.webp',
    imageHeight: '400px',
  },
];

export default function WalletSection() {
  return <WalletSectionClient cards={securityCards} />;
}
