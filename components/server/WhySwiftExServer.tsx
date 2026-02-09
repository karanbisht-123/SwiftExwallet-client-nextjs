import { Metadata } from 'next';
import WhySwiftExClient from '../client/WhySwiftExClient';

export const metadata: Metadata = {
  title: 'Why Choose SwiftEx | Secure Non-Custodial Crypto Wallet',
  description:
    'Discover why SwiftEx is a secure non-custodial crypto wallet. Manage, swap, and move digital assets with full private key control, No Platform Fees, and a seamless user experience.',
  keywords: [
    'SwiftEx',
    'non-custodial wallet',
    'crypto wallet',
    'secure crypto app',
    'crypto swaps',
    'private key control',
    'blockchain wallet',
    'multi-chain wallet',
  ],
  openGraph: {
    title: 'Why Choose SwiftEx - Secure Non-Custodial Crypto Wallet',
    description:
      'Experience full control with SwiftEx’s non-custodial wallet. Manage and swap crypto assets securely with No Platform Fees.',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1754989195/securetrade_bv62i0_kbqwwu.svg',
        width: 1200,
        height: 630,
        alt: 'SwiftEx - Secure Non-Custodial Crypto Wallet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose SwiftEx - Secure Crypto Wallet',
    description:
      'Secure non-custodial wallet with full private key control and No Platform Fees.',
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
    'Learn how SwiftEx helps users securely manage and move crypto assets using a non-custodial wallet.',
  url: 'https://swiftex.com/why-swiftex',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Secure Asset Management',
        description: 'Secure, non-custodial crypto asset management',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Full Control',
        description: 'Users retain full control over their private keys',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'User Friendly',
        description: 'Simple and intuitive interface for all users',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Easy Token Swaps',
        description: 'Swap supported digital assets across blockchain networks',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'No Platform Fees',
        description: 'No platform fees for using SwiftEx wallet features',
      },
    ],
  },
  provider: {
    '@type': 'Organization',
    name: 'SwiftEx',
    description: 'Non-custodial multi-chain crypto wallet platform',
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
