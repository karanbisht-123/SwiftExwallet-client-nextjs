import { FAQClient } from '../client/FAQClient';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  bgClass?: string;
}

export default function FAQ({
  faqs,
  title = 'Frequently Asked Questions',
  bgClass = 'bg-gradient-to-b from-blue-50 to-white',
}: FAQProps) {
  return <FAQClient faqs={faqs} title={title} bgClass={bgClass} />;
}

export const walletFAQs: FAQItem[] = [
  {
    question: 'What digital assets does Swiftex Wallet support?',
    answer: 'Swiftex Wallet supports a wide range of cryptocurrencies and stablecoins, allowing you to diversify your portfolio with ease.',
  },
  {
    question: 'How secure is Swiftex Wallet?',
    answer:
      'We use advanced encryption, biometric authentication, and two-factor authentication to ensure the highest level of security. Rest assured, we do not store your private keys.',
  },
  {
    question: 'Can I access Swiftex Wallet on multiple devices?',
    answer:
      'Yes, you can access your wallet via our mobile app and web interface, ensuring your assets are always within reach.',
  },
  {
    question: 'What currencies can I access via SwiftEx?',
    answer:
      'SwiftEx connects you to licensed third-party providers that support a wide range of fiat currencies, making global transactions simple.',
  },
  {
    question: 'How do licensed partners handle fiat transactions?',
    answer:
      'Fiat transactions are processed through licensed third-party providers. SwiftEx remains fully non-custodial and secure, while our partners comply with regulatory standards.',
  },
  {
    question: 'What are on & off-ramp services?',
    answer:
      'On & off-ramp services allow you to seamlessly deposit (on-ramp) and withdraw (off-ramp) funds between fiat currencies and digital assets, bridging the gap between traditional and digital economies.',
  },
];

