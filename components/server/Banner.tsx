import { BannerContent } from '../client/BannerContent';

export default function Banner() {
  const content = {
    heading: 'Experience the Future of',
    highlightedText: 'Crypto',
    subHeading: 'Trading',
    description:
      'SwiftEx provides a secure, all-in-one solution for managing and exchanging digital assets. Our platform combines a non-custodial wallet with an Anchor-based fiat currency decentralized exchange on the Stellar Blockchain.',
    buttonText: 'Download Now',
    imageSrc: '/images/logo.avif',
    imageAlt: 'SwiftEx Wallet and Exchange Interface',
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
