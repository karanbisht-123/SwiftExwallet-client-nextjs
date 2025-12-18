import { CashOutStepsContent } from '../client/CashOutStepsContent';
import Image from 'next/image';

const steps = [
  {
    step: 1,
    title: 'Verify Your Identity',
    description: "Complete a one-time verification of your identity if you're a new customer.",
    icon: '/icons/identification_6551375.avif',
  },
  {
    step: 2,
    title: 'Send Your Crypto',
    description: "You'll receive a wallet address and QR code to send your cryptocurrency to.",
    icon: '/icons/wallet_6409579.avif',
  },
  {
    step: 3,
    title: 'Receive Your Cash',
    description: "Once confirmed, you'll get the cash deposit to your bank account shortly.",
    icon: '/icons/money_1570978.avif',
  },
];

export default function CashOutSteps() {
  return (
    <section className="bg-[#F4F4F7] border-t-4 border-slate-100 lg:border-0 text-black py-12 lg:py-16 container mx-0 lg:mx-auto max-w-7xl lg:rounded-3xl border-t-black md:border-0">
      <div className="xl:px-6 space-y-16">
        <h2 className="lg:text-6xl text-4xl font-medium text-center text-slate-800 px-4">
          Cash Out Crypto in 3 Easy Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {steps.map(item => (
            <div
              key={item.step}
              className="gap-4 p-3 lg:p-6 text-center shadow rounded-lg flex items-center justify-center flex-col"
              style={{ borderRadius: '16px' }}
            >
              {/* Step Number Badge */}
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-medium text-white">{item.step}</span>
              </div>

              {/* Icon Container with Next.js Image */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={112}
                  height={112}
                  loading="lazy"
                  quality={90}
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="lg:text-3xl text-2xl mb-2 text-slate-600 font-semibold">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 font-thin text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        <CashOutStepsContent />
      </div>
    </section>
  );
}
