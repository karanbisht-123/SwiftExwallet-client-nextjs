import { Metadata } from 'next';
import WhySwiftExClient from '../client/WhySwiftExClient';

export const metadata: Metadata = {
  title: 'Why Choose SwiftEx | Secure Non-Custodial Crypto Trading Platform',
  description:
    'Discover why SwiftEx is the best choice for secure cryptocurrency trading. Features include non-custodial wallet security, zero platform fees, full control over private keys, and an intuitive user-friendly interface for seamless crypto exchanges.',
  keywords: [
    'SwiftEx',
    'cryptocurrency trading',
    'non-custodial wallet',
    'secure crypto trading',
    'zero trading fees',
    'crypto exchange',
    'private key control',
    'blockchain wallet',
  ],
  openGraph: {
    title: 'Why Choose SwiftEx - Secure Crypto Trading Platform',
    description:
      "Experience secure trading with SwiftEx's non-custodial wallet. Get full control over your private keys with 0% platform fees on all trades.",
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1754989195/securetrade_bv62i0_kbqwwu.svg',
        width: 1200,
        height: 630,
        alt: 'SwiftEx - Secure Cryptocurrency Trading Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose SwiftEx - Secure Crypto Trading',
    description:
      "Trade securely with SwiftEx's non-custodial wallet. Zero fees, full control over your private keys.",
    images: [
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1754989195/securetrade_bv62i0_kbqwwu.svg',
    ],
  },
  alternates: {
    canonical: '/why-swiftex',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Why Choose SwiftEx',
  description:
    "Learn about SwiftEx's secure trading features including non-custodial wallet, zero fees, and full control over private keys.",
  url: 'https://swiftex.com/why-swiftex',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Secure Trading',
        description: 'Secure and controlled trading experience with a non-custodial wallet',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Full Control',
        description: 'Full control over your private keys',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'User Friendly',
        description: 'User-friendly interface for seamless onboarding',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Intuitive Trading',
        description: 'Intuitive trading experience with effortless exchanges',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Zero Fees',
        description: '0% platform fee on all trades made through the SwiftEx App',
      },
    ],
  },
  provider: {
    '@type': 'Organization',
    name: 'SwiftEx',
    description: 'Leading non-custodial cryptocurrency trading platform',
  },
};

export default function WhySwiftex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <WhySwiftExClient />
    </>
  );
}
