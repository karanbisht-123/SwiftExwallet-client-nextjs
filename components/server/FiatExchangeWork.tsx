import { FiatExchangeWorkClient } from '../client/FiatExchangeWorkClient';

export interface ExchangeFeature {
  iconName: string;
  title: string;
  description: string;
}

export const exchangeFeatures: ExchangeFeature[] = [
  {
    iconName: 'UserPlus',
    title: 'Sign Up',
    description: 'Quick and easy registration process',
  },
  {
    iconName: 'CreditCard',
    title: 'Verify Identity',
    description: 'Secure and compliant verification',
  },
  {
    iconName: 'Banknote',
    title: 'Deposit',
    description: 'Add funds to your account',
  },
  {
    iconName: 'ArrowLeftRight',
    title: 'Exchange',
    description: 'Swap currencies effortlessly',
  },
  {
    iconName: 'Wallet',
    title: 'Withdraw',
    description: 'Transfer to bank or use in-app',
  },
  {
    iconName: 'MoveHorizontal',
    title: 'On/Off Ramp',
    description: 'Bridge between fiat and digital assets',
  },
];

const exchangeImage =
  'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958364/exchnagesimpale_fwag0j.avif';

export default function FiatExchangeWork() {
  return <FiatExchangeWorkClient features={exchangeFeatures} imageSrc={exchangeImage} />;
}
