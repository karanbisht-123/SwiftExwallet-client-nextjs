import type { Metadata } from 'next';
import PromoSection from '@/components/server/PromoSection';
import BuyCryptoSection from '@/components/server/BuyCryptoSection';
import FiatExchangeWork from '@/components/server/FiatExchangeWork';
import ExcahngeSection from '@/components/server/ExcahngeSection';
import FAQ from '@/components/server/FAQ';
import { ExcahngeFAQS } from '@/components/server/FAQ';

export const metadata: Metadata = {
  title: 'SwiftEx Fiat Exchange | Buy & Sell Crypto with Bank Transfer',

  description:
    'Seamless fiat on/off-ramp services. Buy, sell, and cash out crypto directly to your bank account with 0% platform fees via the Stellar Anchor network.',

  keywords: [
    'Fiat Exchange',
    'Fiat On-ramp',
    'Fiat Off-ramp',
    'Buy Crypto with Fiat',
    'Sell Crypto for Cash',
    'SwiftEx Exchange',
    'Stellar Anchors',
    'Cash Out Crypto',
    'Bank Transfer Crypto',
  ],
  openGraph: {
    title: 'SwiftEx Fiat Exchange | Secure On/Off-Ramp',
    description:
      'Use SwiftEx to instantly convert fiat currency to crypto and cash out crypto to your bank with 0% platform fees.',
    url: 'https://swiftexchange.io/fiat-exchange',
  },

  alternates: {
    canonical: 'https://swiftexchange.io/fiat-exchange',
  },
};

const page = () => {
  return (
    <div className="lg:space-y-16">
      <PromoSection
        title="SwiftEx Fiat Exchange"
        subtitle="Your Trusted Platform for Seamless Fiat Currency Exchange"
        description="Welcome to SwiftEx Fiat Exchange - where secure, fast, and cost-effective currency exchange meets modern convenience."
        imageSrc="/images/phonemockup.avif"
        videoSrc="https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects/exchageInto.mp4"
      />
      <BuyCryptoSection />
      <FiatExchangeWork />
      <ExcahngeSection />
      <FAQ faqs={ExcahngeFAQS} />
    </div>
  );
};

export default page;
