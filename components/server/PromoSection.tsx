import { PromoSectionClient } from '../client/PromoSectionClient';

interface PromoSectionProps {
  title?: string;
  subtitle?: any;
  description?: any;
  imageSrc?: string;
  videoSrc?: string;
}

export default function PromoSection({
  title = 'Welcome to SwiftEx',
  subtitle,
  description,
  imageSrc,
  videoSrc,
}: PromoSectionProps) {
  const defaultSubtitle = (
    <>
      Your Gateway
      <br />
      Effortless Fiat and
      <br />
      Cryptocurrency Exchange
    </>
  );

  const defaultDescription = (
    <>
      Your Gateway to Seamless Cryptocurrency Management. Trade Swiftly,
      <br />
      Trade Securely
    </>
  );

  return (
    <PromoSectionClient
      title={title}
      subtitle={subtitle || defaultSubtitle}
      description={description || defaultDescription}
      imageSrc={imageSrc}
      videoSrc={videoSrc}
    />
  );
}
