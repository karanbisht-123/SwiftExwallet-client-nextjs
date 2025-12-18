import { FeatureCard } from '../client/FeatureCardClient';

const features = [
  {
    title: 'On/Off-Ramp Supported DEX',
    description:
      'Trade crypto securely in a non-custodial environment with seamless entry and exit via anchor integrations.',
    iconName: 'ArrowLeftRight',
  },
  {
    title: 'Multi-Wallet Support',
    description:
      'Supports multiple wallets, allowing you to manage all your crypto assets in one place.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Seamless Transactions',
    description:
      'Instant processing times to ensure quick access to your funds. Effortlessly deposit and withdraw funds.',
    iconName: 'Wallet',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Intuitive platform designed for both beginners and experienced traders.',
    iconName: 'LineChart',
  },
  {
    title: 'Lifetime Reduced Fees',
    description:
      'Swiftex provides a lifetime 0% platform fee on all trades and transactions through SwiftEx App.',
    iconName: 'PiggyBank',
  },
  {
    title: 'Cross Chain Trades',
    description:
      'Enables seamless cross-chain trades for a diverse and flexible trading experience.',
    iconName: 'LifeBuoy',
  },
];

export default function FeaturesSectionServer() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 lg:max-w-7xl bg-[#020E46] lg:px-3 px-1 xl:rounded-3xl">
        <div
          className="container mx-auto py-8 px-2 lg:px-4 bg-[#020E46]"
          style={{ borderRadius: '12px' }}
        >
          <h2 className="text-white text-center lg:text-5xl text-3xl font-medium  mb-6">
            Features
          </h2>
          <hr />
          <div className="flex flex-wrap ">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
