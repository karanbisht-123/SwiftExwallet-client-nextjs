import { Metadata } from 'next';
import ContactContent from '@/components/client/ContactContent';

export const metadata: Metadata = {
  title: 'Contact SwiftEx Wallet | 24/7 Global Crypto Support',
  description:
    "Connect with the SwiftEx Wallet dedicated support team. Get 24/7 assistance for your crypto transactions, account inquiries, and technical support. We're here to ensure your trading experience is seamless.",
  keywords:
    'SwiftEx Wallet contact, crypto wallet support, SwiftEx help, 24/7 crypto assistance, blockchain support, SwiftEx customer service, report issue',
  openGraph: {
    title: 'Contact SwiftEx Wallet | 24/7 Global Crypto Support',
    description:
      'Connect with the SwiftEx Wallet dedicated support team. Get 24/7 assistance for your crypto transactions, account inquiries, and technical support.',
    type: 'website',
    url: 'https://swiftexchange.io/contact-us',
    siteName: 'SwiftEx Wallet',
    images: [
      {
        url: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1753074870/busy-woman-doing-many-things-same-time_ckuxlx.avif',
        alt: 'SwiftEx Wallet Support Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SwiftExwallet',
    title: 'Contact SwiftEx Wallet | 24/7 Global Crypto Support',
    description:
      'Connect with the SwiftEx Wallet dedicated support team. Get 24/7 assistance for your crypto transactions, account inquiries, and technical support.',
    images: [
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1753074016/swiftex-twitter_ea6ggg.avif',
    ],
  },
  alternates: {
    canonical: 'https://swiftexchange.io/contact-us',
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactContent />
    </div>
  );
}
