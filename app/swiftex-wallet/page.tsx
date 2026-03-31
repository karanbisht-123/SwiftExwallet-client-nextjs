import type { Metadata } from 'next';
import PromoSection from '@/components/server/PromoSection';
import WalletSection from '@/components/server/WalletSection';
import SwapSection from '@/components/server/SwapSection';
import PaymentSection from '@/components/server/PaymentSection';
import FAQ from '@/components/server/FAQ';
import { walletFAQs } from '@/components/server/FAQ';
import BuySellSection from '@/components/server/BuySellSection';
import RampServicesSection from '@/components/server/RampServicesSection';

export const metadata: Metadata = {
  title: 'SwiftEx Wallet | Non-Custodial Crypto Wallet',
  description:
    'SwiftEx Wallet is a non-custodial crypto wallet to manage digital assets across supported networks. Swap, bridge, and access fiat with low fees.',
  alternates: {
    canonical: 'https://swiftexwallet.com/swiftex-wallet',
  },
  openGraph: {
    title: 'SwiftEx Wallet | Non-Custodial Crypto Wallet',
    description:
      'SwiftEx Wallet is a non-custodial crypto wallet to manage digital assets across supported networks. Swap, bridge, and access fiat with low fees.',
    url: 'https://swiftexwallet.com/swiftex-wallet',
  },
  twitter: {
    title: 'SwiftEx Wallet | Non-Custodial Crypto Wallet',
    description:
      'SwiftEx Wallet is a non-custodial crypto wallet to manage digital assets across supported networks. Swap, bridge, and access fiat with low fees.',
  },
};

const page = () => {
  return (
    <div className="lg:space-y-16">
      <PromoSection
        title=""
        subtitle="Secure Multichain Wallet"
        description="SwiftEx Wallet is a secure multichain wallet for managing digital assets across supported networks, with access to fiat-related features provided by licensed and regulated partners."
        imageSrc="/images/phonemockup.avif"
        videoSrc="https://res.cloudinary.com/dz1xabyjf/video/upload/v1770627935/newwalletdemo_tefzar.mp4"
      />

      <WalletSection />
      <div id="buy-sell">
        <BuySellSection />
      </div>
      <SwapSection />
      <RampServicesSection />
      <div id="payment-services">
        <PaymentSection />
      </div>
      <FAQ faqs={walletFAQs} />
    </div>
  );
};

export default page;