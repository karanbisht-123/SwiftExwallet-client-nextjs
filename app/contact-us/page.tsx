import { Metadata } from 'next';
import ContactForm from '@/components/client/ContactForm';

export const metadata: Metadata = {
  title: 'Contact SwiftEx Support | Get Help & Report Bugs',
  description:
    "Need assistance with SwiftEx? Contact our dedicated support team for any queries, feedback, or to report a bug. We're here to help you with our crypto exchange and wallet services.",
  keywords:
    'SwiftEx contact, SwiftEx support, contact us, crypto exchange support, wallet help, report bug, customer service, SwiftEx feedback, cryptocurrency assistance',
  openGraph: {
    title: 'Contact SwiftEx: Your Crypto Support & Feedback Hub',
    description:
      'Get in touch with SwiftEx support for assistance with our secure crypto exchange and wallet. Send us your feedback or report an issue.',
    type: 'website',
    url: 'https://swiftexchange.io/contact-us',
    siteName: 'SwiftEx',
    images: [
      {
        url: 'https://res.cloudinary.com/dz1xabyjf/image/upload/v1753074870/busy-woman-doing-many-things-same-time_ckuxlx.avif',
        alt: 'SwiftEx Contact Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SwiftExwallet',
    title: 'Contact SwiftEx: Your Crypto Support & Feedback Hub',
    description:
      'Get in touch with SwiftEx support for assistance with our secure crypto exchange and wallet. Send us your feedback or report an issue.',
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
    <div className="min-h-screen bg-[#020E46] py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl text-center font-medium text-white mb-8 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-center text-white text-xl mb-12 font-thin opacity-80">
          We're here to listen to your feedback and address any queries you may have.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
