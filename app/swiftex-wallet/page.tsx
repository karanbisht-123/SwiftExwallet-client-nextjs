import PromoSection from '@/components/server/PromoSection';
import WalletSection from '@/components/server/WalletSection';
import SwapSection from '@/components/server/SwapSection';
import PaymentSection from '@/components/server/PaymentSection';
import FAQ from '@/components/server/FAQ';
import { walletFAQs } from '@/components/server/FAQ';
import BuySellSection from '@/components/server/BuySellSection';
import RampServicesSection from '@/components/server/RampServicesSection';

const page = () => {
  return (
    <div className="lg:space-y-16">
      <PromoSection
        title=""
        subtitle="Secure Multichain Wallet"
        description="SwiftEx Wallet is a secure multichain wallet for managing digital assets across supported networks, with access to fiat-related features provided by licensed and regulated partners."
        imageSrc="/images/phonemockup.avif"
        videoSrc="https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects/walletIntro.mp4"
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
