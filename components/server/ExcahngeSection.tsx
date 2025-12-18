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
    title: 'Fast Transactions',
    description:
      'Experience lightning-fast currency exchanges with our efficient processing system, minimizing waiting times.',
    gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
    textColor: 'text-black',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958363/exchnagebriage_bi2slz.avif',
    imageHeight: '350px',
  },
  {
    title: 'User-Friendly Interface',
    description:
      'Navigate our platform with ease, thanks to a clean and intuitive design that makes currency exchange straightforward.',
    gradient: 'bg-gradient-to-r from-[#020E46] to-[#020E46]',
    textColor: 'text-white',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958365/exhnagetrade_c0wdfy.avif',
    imageHeight: '350px',
  },
  {
    title: 'Transparent Fee Structure',
    description:
      "Enjoy full transparency with no hidden fees, allowing you to understand exactly what you're paying for.",
    gradient: 'bg-gradient-to-r from-[#F4F4F7] to-[#F4F4F7]',
    textColor: 'text-black',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958363/exchnagebridge2_zczt4b.avif',
    imageHeight: '400px',
  },
  {
    title: 'Fiat Exchange & On & Off Ramp Services',
    description:
      'Seamlessly deposit and withdraw your assets via our trusted network of anchors, bridging the gap between fiat currencies and digital assets. Effortlessly move your funds in and out of the digital economy with our on & off-ramp services.',
    gradient: 'bg-gradient-to-r from-[#020E46] to-[#020E46]',
    textColor: 'text-white',
    imageSrc:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958363/exchnagecrossbridging_xnhaqx.avif',
    imageHeight: '400px',
  },
];

export default function ExcahngeSection() {
  return <WalletSectionClient cards={securityCards} />;
}
