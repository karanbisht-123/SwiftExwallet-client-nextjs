import NewWallet from '@/components/NewWallet';
import {
  DynamicOneTapTrade,
  DynamicWhySwiftEx,
  DynamicFeatures,
  DynamicSplitSection,
  DynamicMobileSplit,
  DynamicCashOut,
  DynamicPrivateSecure,
  DynamicBanner,
} from '@/lib/loading-components';

const sectionsData = [
  {
    title: 'Import Wallets or Add Crypto Assets',
    content:
      'Import your existing wallet or add new crypto assets to SwiftEx. Our platform supports a wide range of cryptocurrencies, so you can manage all your digital assets easily.',
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958282/walletimport_kswgpx.avif',
    gradient: 'linear-gradient(135deg, #F4F4F7 0%, #F4F4F7 100%)',
    blobColors: ['blue-300', 'indigo-400', 'purple-300', 'violet-400'],
    link: '/swiftex-wallet',
    linkText: 'Get Started',
  },
  {
    title: 'Send, Receive, and Swap Assets Across Multi-chain Wallets',
    content:
      'SwiftEx allows you to send, receive, and swap cryptocurrencies across blockchains seamlessly and securely, ensuring fast and reliable transactions.',
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958280/reciveasset_fvtpqa.avif',
    gradient: 'linear-gradient(135deg, #020E46 0%, #020E46 100%)',
    blobColors: ['green-300', 'teal-400', 'cyan-300', 'blue-400'],
    link: '/swiftex-wallet',
    linkText: 'Send Assets',
  },
  {
    title: 'Bridge your Assets',
    content:
      'Easily bridge your assets across different blockchain networks. SwiftEx enables smooth and secure transfers, allowing you to maximize the utility and accessibility of your digital assets.',
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958279/briage_sgmwh9.avif',
    gradient: 'linear-gradient(135deg, #F4F4F7 0%, #F4F4F7 100%)',
    blobColors: ['purple-400', 'indigo-500', 'blue-400', 'cyan-500'],
    link: '/fiat-exchange',
    linkText: 'Bridge Now',
  },
  {
    title: 'Trade your Assets Via Stellar DEX',
    content:
      'Trade your digital assets effortlessly through Stellar DEX. Enjoy a decentralized, secure, and transparent trading experience with real-time data and low fees.',
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958280/trade_bcs41h.avif',
    gradient: 'linear-gradient(135deg, #020E46 0%, #020E46 100%)',
    blobColors: ['blue-400', 'cyan-500', 'teal-400', 'blue-600'],
    link: '/fiat-exchange',
    linkText: 'Start Trading',
  },
  {
    title: 'Going On & Off Ramp',
    content:
      'Anchors on the Stellar network act as bridges between traditional banking systems and the blockchain, enabling users to deposit and withdraw assets seamlessly.',
    image: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958279/onofframp_d82stj.avif',
    gradient: 'linear-gradient(135deg, #F4F4F7 0%, #F4F4F7 100%)',
    blobColors: ['yellow-300', 'orange-300', 'red-200', 'amber-400'],
    link: '/fiat-exchange',
    linkText: 'View Options',
  },
];

// export const metadata = generateSectionMetadata(sectionsData);
export default function Home() {
  return (
    <>
      <div className="lg:space-y-16">
        <NewWallet />
        <DynamicOneTapTrade />
        <DynamicWhySwiftEx />
        <DynamicFeatures />

        <div className="xl:block hidden">
          <DynamicSplitSection sections={sectionsData} />
        </div>

        <div className="xl:hidden block">
          <DynamicMobileSplit sections={sectionsData} />
        </div>

        <DynamicCashOut />
        <DynamicPrivateSecure />
        <DynamicBanner />
      </div>
    </>
  );
}
