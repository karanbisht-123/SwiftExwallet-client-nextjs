import { FeatureCard } from '../client/FeatureCardClient';

const features = [
  {
    title: 'Fiat Access via Partners',
    description:
      'Buy or sell crypto through licensed third-party providers while keeping your wallet self-custodial.',
    iconName: 'ArrowLeftRight',
  },
  {
    title: 'Multi-Wallet Support',
    description:
      'Keep all your wallets and digital assets together in one simple and easy-to-use app.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Seamless Transactions',
    description:
      'Quick and smooth transactions so you can access, send, and receive assets without delays.',
    iconName: 'Wallet',
  },
  {
    title: 'User-Friendly Interface',
    description:
      'Clean and intuitive design built for both new users and experienced crypto users.',
    iconName: 'LineChart',
  },
  {
    title: 'Transparent Fees',
    description: 'SwiftEx offers transparent fees for core wallet and asset management features.',
    iconName: 'PiggyBank',
  },
  {
    title: 'Cross-Chain Asset Access',
    description: 'Easily use and manage your assets across supported networks from one place.',
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
          <h2 className="text-white text-center lg:text-5xl text-3xl font-medium mb-6">Features</h2>
          <hr />
          <div className="flex flex-wrap">
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
