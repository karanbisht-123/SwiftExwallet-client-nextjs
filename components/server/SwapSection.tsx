import { SwapSectionClient } from '../client/SwapSectionClient';

export interface SwapPair {
  spendCurrency: string;
  spendColor: string;
  receiveCurrency: string;
  receiveColor: string;
  initialRate: number;
}

export const COIN_LOGOS: Record<string, string> = {
  ETH: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  BNB: 'https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970',
  USDT: 'https://coin-images.coingecko.com/coins/images/35021/large/USDT.png?1707233575',
  USDC: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
};

export const fallbackRates: Record<string, number> = {
  ETH_USDT: 2000,
  BNB_USDC: 250,
  USDC_BNB: 1 / 250,
};

export const swapPairs: SwapPair[] = [
  {
    spendCurrency: 'ETH',
    spendColor: 'text-[#627eea]',
    receiveCurrency: 'USDT',
    receiveColor: 'text-[#26a17b]',
    initialRate: fallbackRates.ETH_USDT,
  },
  {
    spendCurrency: 'BNB',
    spendColor: 'text-[#f3ba2f]',
    receiveCurrency: 'USDC',
    receiveColor: 'text-[#2775ca]',
    initialRate: fallbackRates.BNB_USDC,
  },
  {
    spendCurrency: 'USDC',
    spendColor: 'text-[#2775ca]',
    receiveCurrency: 'BNB',
    receiveColor: 'text-[#f3ba2f]',
    initialRate: fallbackRates.USDC_BNB,
  },
];

export default function SwapSection() {
  return (
    <SwapSectionClient swapPairs={swapPairs} coinLogos={COIN_LOGOS} fallbackRates={fallbackRates} />
  );
}
