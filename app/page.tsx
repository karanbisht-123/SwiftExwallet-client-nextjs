import NewWallet from '@/components/NewWallet';
import {
  DynamicOneTapTrade,
  DynamicWhySwiftEx,
  DynamicFeatures,
  DynamicSplitSection,
  DynamicMobileSplit,
  DynamicPrivateSecure,
  DynamicBanner,
} from '@/lib/loading-components';

const sectionsData = [
  {
    title: 'Import Wallets or Add Digital Assets',
    content:
      'Import your existing wallet or add supported digital assets to SwiftEx. Manage everything from one place with a simple and secure experience.',
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770184066/walletselcation_sqg063.webp',
    gradient: 'linear-gradient(135deg, #F4F4F7 0%, #F4F4F7 100%)',
    blobColors: ['blue-300', 'indigo-400', 'purple-300', 'violet-400'],
    link: '/swiftex-wallet',
    linkText: 'Know More',
  },
  {
    title: 'Send and Receive Assets Across Supported Networks',
    content:
      'SwiftEx lets you send and receive digital assets across supported networks with a smooth, reliable, and easy-to-use interface.',
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770182916/send-recive_bpb85m.webp',
    gradient: 'linear-gradient(135deg, #020E46 0%, #020E46 100%)',
    blobColors: ['green-300', 'teal-400', 'cyan-300', 'blue-400'],
    link: '/swiftex-wallet',
    linkText: 'Know More',
  },
  {
    title: 'Move Assets Between Supported Networks',
    content:
      'Move your digital assets between supported networks with ease. SwiftEx helps you keep your assets accessible wherever you need them.',
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770185199/depositusdc_1_yub2jd.webp',
    gradient: 'linear-gradient(135deg, #F4F4F7 0%, #F4F4F7 100%)',
    blobColors: ['purple-400', 'indigo-500', 'blue-400', 'cyan-500'],
    link: '/swiftex-wallet#buy-sell',
    linkText: 'Know More',
  },
  {
    title: 'Advanced Swaps via Stellar SDEX',
    content:
      "Access on-chain swaps through Stellar's built-in decentralized exchange (SDEX) with typically low network fees.",
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770187174/sdex-Photoroom_ddotlf.webp',
    gradient: 'linear-gradient(135deg, #020E46 0%, #020E46 100%)',
    blobColors: ['blue-400', 'cyan-500', 'teal-400', 'blue-600'],
    link: '/swiftex-wallet#buy-sell',
    linkText: 'Know More',
  },
  {
    title: 'Fiat Access via Licensed Partners',
    content:
      'Licensed providers connect traditional banking systems with supported networks, enabling fiat access under their own terms.',
    image:
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1770187686/fiat-Photoroom_zfvfry.webp',
    gradient: 'linear-gradient(135deg, #F4F4F7 0%, #F4F4F7 100%)',
    blobColors: ['yellow-300', 'orange-300', 'red-200', 'amber-400'],
    link: '/swiftex-wallet#payment-services',
    linkText: 'Know More',
  },
];

export default function Home() {
  return (
    <>
      <div className="lg:space-y-16">
        <NewWallet />
        <DynamicWhySwiftEx />
        <DynamicFeatures />

        <div className="xl:block hidden">
          <DynamicSplitSection sections={sectionsData} />
        </div>

        <div className="xl:hidden block">
          <DynamicMobileSplit sections={sectionsData} />
        </div>

        <DynamicPrivateSecure />
        <DynamicBanner />
      </div>
    </>
  );
}