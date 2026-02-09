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
  // {
  //   title: 'Fast Transactions',
  //   description:
  //     'Move your digital assets quickly and efficiently, minimizing waiting times for a smooth experience.',
  //   gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
  //   textColor: 'text-black',
  //   imageSrc:
  //     'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958363/exchnagebriage_bi2slz.avif',
  //   imageHeight: '350px',
  // },
  {
    title: 'User-Friendly Interface',
    description:
      'Navigate your assets with ease using a clean and intuitive design, making digital asset management straightforward.',
    gradient: 'bg-gradient-to-r from-[#020E46] to-[#020E46]',
    textColor: 'text-white',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770127883/sdexhome-left_knvsal.webp',
    imageHeight: '350px',
  },
  {
    title: 'Transparent Asset Handling',
    description:
      'All actions are clear and visible, so you always know what is happening with your digital assets.',
    gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
    textColor: 'text-black',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770127210/caslifd8trn394d35avh_eqv3zi.webp',
    imageHeight: '350px',
  },
  {
    title: 'Seamless Asset Transfers',
    description:
      'Easily move your digital assets across supported networks with secure and reliable processing.',
    gradient: 'bg-gradient-to-r from-[#020E46] to-[#020E46]',
    textColor: 'text-white',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770127199/tbennwcaulucpw4bi70d_tjhbiv.webp',
    imageHeight: '350px',
  },
];

export default function RampServicesSection() {
  return <WalletSectionClient cards={securityCards} />;
}
