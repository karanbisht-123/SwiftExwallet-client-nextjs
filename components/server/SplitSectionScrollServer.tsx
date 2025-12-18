// import { Metadata } from 'next';
import SplitSectionScrollClient from '../client/SplitSectionScrollClient';

interface Section {
  title: string;
  content: string;
  gradient: string;
  image: string;
  link: string;
  blobColors: string[];
  linkText?: string;
}

interface SplitSectionScrollProps {
  sections: Section[];
}

// export function generateSectionMetadata(sections: Section[]): Metadata {
//   const firstSection = sections[0];
//   const sectionTitles = sections.map(s => s.title).join(', ');

//   return {
//     title: `${firstSection.title} | SwiftEx Wallet Features`,
//     description: `Explore SwiftEx's powerful features: ${sectionTitles}. Manage your crypto assets with ease across multiple blockchains.`,
//     keywords: [
//       'SwiftEx wallet',
//       'cryptocurrency wallet',
//       'multi-chain wallet',
//       'crypto assets',
//       'blockchain wallet',
//       'import wallet',
//       'swap crypto',
//       'bridge assets',
//       'Stellar DEX',
//       'on-ramp off-ramp',
//       ...sections.map(s => s.title.toLowerCase()),
//     ],
//     openGraph: {
//       title: `SwiftEx Wallet Features - ${firstSection.title}`,
//       description: `Discover how SwiftEx helps you ${sections.map(s => s.title.toLowerCase()).join(', ')}. Your gateway to seamless crypto management.`,
//       type: 'website',
//       images: [
//         {
//           url: sections[0].image,
//           width: 1200,
//           height: 630,
//           alt: `${firstSection.title} - SwiftEx Wallet`,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `SwiftEx Wallet - ${firstSection.title}`,
//       description: `${firstSection.content}`,
//       images: [sections[0].image],
//     },
//     alternates: {
//       canonical: '/swiftex-wallet',
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     },
//   };
// }

export default function SplitSectionScroll({ sections }: SplitSectionScrollProps) {
  // const carouselStructuredData = {
  //   '@context': 'https://schema.org',
  //   '@type': 'ItemList',
  //   name: 'SwiftEx Wallet Features',
  //   description: 'Complete guide to SwiftEx wallet features for managing cryptocurrency assets',
  //   itemListElement: sections.map((section, index) => ({
  //     '@type': 'ListItem',
  //     position: index + 1,
  //     item: {
  //       '@type': 'Article',
  //       name: section.title,
  //       description: section.content,
  //       image: section.image,
  //       url: `https://swiftexchange.io/${section.link}`,
  //     },
  //   })),
  // };
  // const webPageStructuredData = {
  //   '@context': 'https://schema.org',
  //   '@type': 'WebPage',
  //   name: 'SwiftEx Wallet Features',
  //   description:
  //     'Comprehensive cryptocurrency wallet features including multi-chain support, asset bridging, DEX trading, and on-ramp/off-ramp solutions',
  //   url: 'https://swiftexchange.io/swiftex-wallet',
  //   about: {
  //     '@type': 'SoftwareApplication',
  //     name: 'SwiftEx Wallet',
  //     applicationCategory: 'FinanceApplication',
  //     operatingSystem: 'Web, iOS, Android',
  //     offers: {
  //       '@type': 'Offer',
  //       price: '0',
  //       priceCurrency: 'USD',
  //     },
  //     aggregateRating: {
  //       '@type': 'AggregateRating',
  //       ratingValue: '4.8',
  //       ratingCount: '1250',
  //     },
  //   },
  //   mainEntity: {
  //     '@type': 'ItemList',
  //     numberOfItems: sections.length,
  //     itemListElement: sections.map((section, index) => ({
  //       '@type': 'HowTo',
  //       position: index + 1,
  //       name: section.title,
  //       description: section.content,
  //       image: section.image,
  //       step: {
  //         '@type': 'HowToStep',
  //         text: section.content,
  //         url: `https://swiftexchange.io${section.link}`,
  //       },
  //     })),
  //   },
  //   breadcrumb: {
  //     '@type': 'BreadcrumbList',
  //     itemListElement: [
  //       {
  //         '@type': 'ListItem',
  //         position: 1,
  //         name: 'Home',
  //         item: 'https://swiftexchange.io',
  //       },
  //       {
  //         '@type': 'ListItem',
  //         position: 2,
  //         name: 'Wallet Features',
  //         item: 'https://swiftexchange.io/swiftex-wallet',
  //       },
  //     ],
  //   },
  // };

  // const faqStructuredData = {
  //   '@context': 'https://schema.org',
  //   '@type': 'FAQPage',
  //   mainEntity: sections.map(section => ({
  //     '@type': 'Question',
  //     name: `How does ${section.title} work?`,
  //     acceptedAnswer: {
  //       '@type': 'Answer',
  //       text: section.content,
  //     },
  //   })),
  // };

  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(carouselStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      /> */}
      <SplitSectionScrollClient sections={sections} />
    </>
  );
}
