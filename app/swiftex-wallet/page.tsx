import PromoSection from '@/components/server/PromoSection';
import WalletSection from '@/components/server/WalletSection';
import SwapSection from '@/components/server/SwapSection';
import PaymentSection from '@/components/server/PaymentSection';
import FAQ from '@/components/server/FAQ';
import { walletFAQs } from '@/components/server/FAQ';

const page = () => {
  return (
    <div className="lg:space-y-16">
      <PromoSection
        title="SwiftEx Wallet"
        subtitle="Secure, Fast, and User-Friendly"
        description="Welcome to SwiftEx Wallet - your gateway to seamless digital asset management."
        imageSrc="/images/phonemockup.avif"
        videoSrc="https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects/walletIntro.mp4"
      />
      <WalletSection />
      <SwapSection />
      <PaymentSection />
      <FAQ faqs={walletFAQs} />
    </div>
  );
};

export default page;
