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
    answer: 'Swiftex Wallet supports a wide range of cryptocurrencies and stablecoins.',
  },
  {
    question: 'How secure is Swiftex Wallet?',
    answer:
      'We use advanced encryption, biometric authentication, and two-factor authentication to ensure the highest level of security. Rest assured, we do not store your private key',
  },
  {
    question: 'Can I access Swiftex Wallet on multiple devices?',
    answer:
      'Yes, you can access your wallet via our mobile app and web interface, ensuring your assets are always within reach.',
  },
];

export const paymentFAQs: FAQItem[] = [
  {
    question: 'Can I buy cryptocurrency with a credit card?',
    answer:
      'Yes! SwiftEx accepts all major credit cards including Visa and Mastercard. You can instantly purchase Bitcoin, Ethereum, and other cryptocurrencies using your credit card with zero transaction fees.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit cards (Visa, Mastercard), debit cards, bank transfers (ACH, wire), digital wallets (Apple Pay, Google Pay, PayPal), and cryptocurrency wallet transfers. Choose the method that works best for you.',
  },
  {
    question: 'Are there any fees for buying cryptocurrency?',
    answer:
      'Currently, SwiftEx offers zero transaction fees and zero withdrawal fees on all cryptocurrency purchases. This is a limited-time promotional offer to help you get started with crypto investing.',
  },
];

export const swapFAQs: FAQItem[] = [
  {
    question: 'How do I swap cryptocurrencies on SwiftEx?',
    answer:
      'Simply select your swap pair (e.g., ETH to USDT), enter the amount you want to swap, and review the exchange rate. The platform automatically calculates your receive amount using real-time market prices.',
  },
  {
    question: 'What are the fees for crypto swaps?',
    answer:
      'SwiftEx offers competitive fees for all cryptocurrency swaps. The exact fee structure varies by trading pair and is transparently displayed before you confirm any transaction.',
  },
  {
    question: 'Are the exchange rates updated in real-time?',
    answer:
      'Yes! Our platform fetches live cryptocurrency prices from CoinGecko API every minute, ensuring you always see current market rates for all supported trading pairs.',
  },
];

export const generalFAQs: FAQItem[] = [
  {
    question: 'What is SwiftEx?',
    answer:
      'SwiftEx is a comprehensive cryptocurrency platform that allows you to buy, sell, swap, and manage digital assets securely. We offer a user-friendly wallet, multiple payment methods, and real-time market data.',
  },
  {
    question: 'Is SwiftEx safe to use?',
    answer:
      'Absolutely! We employ bank-level security measures including end-to-end encryption, two-factor authentication, biometric login, and secure key management. Your private keys are never stored on our servers.',
  },
  {
    question: 'How do I get started with SwiftEx?',
    answer:
      "Getting started is easy! Simply download our app or visit our website, create an account using your email or social login, complete the verification process, and you're ready to start trading cryptocurrencies.",
  },
  {
    question: 'Which countries is SwiftEx available in?',
    answer:
      'SwiftEx is available in most countries worldwide. However, due to regulatory requirements, some features may be restricted in certain jurisdictions. Please check our supported countries list during registration.',
  },
];

export const ExcahngeFAQS: FAQItem[] = [
  {
    question: 'What currencies does SwiftEx Fiat Exchange support?',
    answer: 'We support a wide range of fiat currencies from around the world.',
  },
  {
    question: 'How secure is SwiftEx Fiat Exchange?',
    answer:
      'We utilize advanced encryption, two-factor authentication, and comply with regulatory standards to ensure the highest level of security.',
  },
  {
    question: 'Can I access SwiftEx Fiat Exchange on multiple devices?',
    answer:
      'Yes, our platform is accessible via mobile app and web interface, providing flexibility and convenience.',
  },
  {
    question: 'What are on & off-ramp services?',
    answer:
      'On & off-ramp services allow you to seamlessly deposit (on-ramp) and withdraw (off-ramp) funds between fiat currencies and digital assets, bridging the gap between traditional and digital economies.',
  },
];
