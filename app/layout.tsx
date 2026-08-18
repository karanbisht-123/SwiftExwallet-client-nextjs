import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import Footer from '@/components/server/FooterServer';
import NavBarServer from '@/components/server/NavBarServer';
import DeferredAnalytics from '@/components/DeferredAnalytics';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'SwiftEx – Secure Access to Digital Assets Across Networks',
  description:
    'SwiftEx Wallet is a non-custodial crypto wallet to manage digital assets across supported networks. Swap, bridge, and access fiat with transparent fees.',
  applicationName: 'SwiftEx',
  keywords: [
    'SwiftEx',
    'non-custodial wallet',
    'crypto wallet',
    'fiat on-ramp',
    'cross-chain swap',
    'Stellar wallet',
    'DeFi wallet',
    'digital assets',
    'blockchain wallet',
    'buy crypto',
  ],
  authors: [{ name: 'SwiftEx Team' }],
  creator: 'SwiftEx Team',
  publisher: 'SwiftEx',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swiftexwallet.com',
    siteName: 'SwiftEx Wallet',
    title: 'SwiftEx Wallet | Non-Custodial Crypto Wallet',
    description:
      'Manage digital assets across supported networks. Swap, bridge, and access fiat with transparent fees. Non-custodial — your keys, your control.',
    images: [
      {
        url: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1782200261/logo_g16diq.jpg',
        width: 1200,
        height: 630,
        alt: 'SwiftEx Wallet Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SwiftEx_Wallet',
    creator: '@SwiftEx_Wallet',
    title: 'SwiftEx Wallet | Non-Custodial Crypto Wallet',
    description:
      'Manage digital assets across supported networks. Swap, bridge, and access fiat with transparent fees. Non-custodial — your keys, your control.',
    images: ['https://res.cloudinary.com/dz1xabyjf/image/upload/v1782200261/logo_g16diq.jpg'],
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
  alternates: {
    canonical: 'https://swiftexwallet.com',
  },
};

//Schema.org Structured Data

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SwiftEx',
  alternateName: 'SwiftEx Wallet',
  url: 'https://swiftexwallet.com',
  logo: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1782200261/logo_g16diq.jpg',
  description:
    'SwiftEx is a non-custodial crypto wallet to manage digital assets across supported networks. Swap, bridge, and access fiat with transparent fees.',
  email: 'info@swiftexwallet.com',
  foundingDate: '2023',
  sameAs: [
    'https://x.com/SwiftEx_Wallet',
    'https://www.instagram.com/swiftexwallet',
    'https://www.facebook.com/swiftexwallet',
    'https://www.linkedin.com/company/swiftex-wallet',
    'https://discord.gg/TkZrnv97MV',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SwiftEx Wallet',
  url: 'https://swiftexwallet.com',
  description: 'Non-custodial crypto wallet for managing digital assets across supported networks.',
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SwiftEx Wallet',
  operatingSystem: 'Android, iOS',
  applicationCategory: 'FinanceApplication',
  description:
    'SwiftEx Wallet is a non-custodial crypto wallet to manage digital assets across supported networks. Swap, bridge, and access fiat with transparent fees.',
  url: 'https://swiftexwallet.com',
  downloadUrl: [
    'https://apps.apple.com/app/swiftex-wallet/id6759080930',
    'https://play.google.com/store/apps/details?id=org.app.swiftEx.wallet',
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description:
      'Transparent fees — no hidden platform fees for core wallet and asset management features.',
  },
  author: {
    '@type': 'Organization',
    name: 'SwiftEx',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is SwiftEx Wallet safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SwiftEx is non-custodial — your private keys and recovery phrase never leave your device. SwiftEx has no access to your funds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SwiftEx charge fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SwiftEx has transparent fees — no hidden platform fees for core wallet features. Network (gas) fees set by the blockchain still apply. Third-party partners for fiat on/off-ramp may have their own fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which blockchains are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SwiftEx supports multiple blockchain networks with cross-chain bridging. See the wallet features page for the current list.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SwiftEx available on iPhone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, SwiftEx Wallet is available on the App Store for iPhone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I lose my phone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your funds are recoverable using your recovery phrase. SwiftEx does not store or have access to it, so keep it safe offline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SwiftEx regulated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SwiftEx is a non-custodial wallet interface and is not a financial service or broker. Fiat features are handled by licensed third-party partners under their own regulatory frameworks.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={ubuntu.className} suppressHydrationWarning>
        <NavBarServer />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <DeferredAnalytics />
      </body>
    </html>
  );
}
