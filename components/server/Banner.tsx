import { BannerContent } from '../client/BannerContent';

export default function Banner() {
  const content = {
    heading: 'Experience the Future of',
    highlightedText: 'Crypto Wallets',
    subHeading: '',
    description:
      'SwiftEx provides a secure, multichain wallet for managing digital assets. The app connects users to decentralized networks and licensed providers, fully non-custodial.',
    buttonText: 'Download Now',
    imageSrc: '/images/logo.avif',
    imageAlt: 'SwiftEx Wallet Interface',
  };

  return (
    <section
      className="max-w-7xl mx-auto bg-linear-to-r from-[#F4F4F7] to-[#E8EAF2] rounded-xl overflow-hidden lg:py-16 md:py-12 px-4 sm:px-6"
      aria-labelledby="banner-heading"
    >
      <BannerContent content={content} />
    </section>
  );
}
