import { PrivateSecureContent } from '../client/PrivateSecureContent';

const securityFeatures = [
  {
    iconName: 'Lock',
    title: 'Enhanced Security with Encryption',
    description:
      'Our encryption methods meet the highest standards, providing robust protection against unauthorized access.',
  },
  {
    iconName: 'UserCog',
    title: 'No Personal Data Tracking',
    description:
      'We respect your privacy and do not track your personal data. Your activities remain confidential and are never shared with third parties.',
  },
  {
    iconName: 'Key',
    title: 'Your Private Keys Your Control',
    description:
      'We never store your private keys on our servers. All key access is exclusively in your hands, ensuring that your assets are secure and fully under your control.',
  },
];

export default function PrivateSecure() {
  return (
    <div className="bg-[#020E46] lg:min-h-[700px] py-8 p-4 lg:p-8 max-w-7xl mx-auto xl:rounded-3xl md:py-20 lg:py-20">
      <main className="max-w-5xl mx-auto">
        <h3 className="lg:text-5xl text-4xl font-medium text-white mb-4 text-center">
          Ensure Your Privacy and Security
        </h3>
        <p className="text-lg text-white font-thin opacity-95 mb-12 text-center">
          Relax knowing that our advanced privacy and security protocols keep your data and digital
          assets secure and under your control.
        </p>

        <PrivateSecureContent
          securityFeatures={securityFeatures}
          heroContent={{
            title: 'Complete Control Over Your Crypto Assets',
            description:
              'Your wallet is secure with us, but we do not have access to your private keys or recovery phrase. Only you have that control.',
            imageSrc: '/images/iPhone/raw.0acff7b3.svg',
            imageAlt: 'security',
          }}
        />
      </main>
    </div>
  );
}
