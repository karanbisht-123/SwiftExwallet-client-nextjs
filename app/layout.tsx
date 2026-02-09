import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import Footer from '@/components/server/FooterServer';
import NavBarServer from '@/components/server/NavBarServer';
import ContactWaitlistSection from '@/components/server/ContactWaitlistSection';
// import DeferredAnalytics from '@/components/DeferredAnalytics';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'SwiftEx | Non-Custodial Crypto Wallet & Fiat Access',
  description:
    'The non-custodial wallet for EVM and Stellar chains. Seamlessly swap and use third-party fiat on/off-ramps (via licensed partners) with 0% platform fees. Full control over your keys.',
  applicationName: 'SwiftEx',
  keywords: [
    'assets',
    'SwiftEx',
    'Non-custodial Wallet',
    'Fiat Access',
    'Stellar DeFi',
    '0% Platform Fee',
    'Cross-chain Swaps',
    'Buy Crypto',
    'Blockchain Payments',
  ],
  authors: [{ name: 'SwiftEx Team' }],
  creator: 'SwiftEx Team',
  publisher: 'SwiftEx',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swiftexchange.io',
    siteName: 'SwiftEx',
    title: 'SwiftEx | Non-Custodial Wallet & Fiat Access',
    description:
      'Manage assets securely with 0% platform fees. A non-custodial wallet and third-party fiat ramp (via licensed partners) built on the Stellar Blockchain.',
    images: [
      {
        url: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958364/exchnagesimpale_fwag0j.avif',
        width: 1200,
        height: 630,
        alt: 'SwiftEx App Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SwiftExwallet',
    creator: '@SwiftExwallet',
    title: 'SwiftEx | Non-Custodial Wallet & Fiat Access',
    description:
      'Secure crypto management with 0% platform fees. Instant cross-chain swaps and third-party fiat on-ramps (via licensed partners).',
    images: [
      'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958364/exchnagesimpale_fwag0j.avif',
    ],
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
    canonical: 'https://swiftexchange.io',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className={ubuntu.className} suppressHydrationWarning>
        <NavBarServer />
        <main className="min-h-screen">{children}</main>
        <ContactWaitlistSection />
        <Footer />
        {/* <DeferredAnalytics /> */}
      </body>
    </html>
  );
}
