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



  return (
    <PromoSectionClient
      title={title}
      subtitle={subtitle || ''}
      description={description || ''}
      imageSrc={imageSrc}
      videoSrc={videoSrc}
    />
  );
}
