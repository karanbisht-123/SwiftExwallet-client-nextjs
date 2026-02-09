'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { SwapPair } from '../server/SwapSection';

const NETWORK_FEE_CONFIG: Record<string, { fee: number; label: string }> = {
  ETH_USDT: { fee: 0.005, label: 'Ethereum Network' },
  BNB_USDC: { fee: 0.001, label: 'BNB Smart Chain' },
  USDC_BNB: { fee: 0.001, label: 'BNB Smart Chain' },
};

const DEFAULT_FEE = { fee: 0.002, label: 'Network' };

interface SwapData {
  spendIconUrl: string;
  spendCurrency: string;
  spendAmount: number;
  spendColor: string;
  receiveIconUrl: string;
  receiveCurrency: string;
  receiveAmount: number;
  receiveColor: string;
  rate: number;
  networkFee: number;
  networkFeePercent: number;
  networkFeeLabel: string;
}

interface SwapSectionClientProps {
  swapPairs: SwapPair[];
  coinLogos: Record<string, string>;
  fallbackRates: Record<string, number>;
}

function getNetworkFeeConfig(spendCurrency: string, receiveCurrency: string) {
  const key = `${spendCurrency}_${receiveCurrency}`;
  return NETWORK_FEE_CONFIG[key] || DEFAULT_FEE;
}

function calcFee(spendAmount: number, feePercent: number): number {
  return parseFloat((spendAmount * feePercent).toFixed(6));
}

function calcReceiveAmount(spendAmount: number, rate: number, feePercent: number): number {
  const effectiveSpend = spendAmount - spendAmount * feePercent;
  return parseFloat((effectiveSpend * rate).toFixed(6));
}

export function SwapSectionClient({ swapPairs, coinLogos, fallbackRates }: SwapSectionClientProps) {
  const [swapData, setSwapData] = useState<SwapData[]>(
    swapPairs.map(pair => {
      const feeConfig = getNetworkFeeConfig(pair.spendCurrency, pair.receiveCurrency);
      return {
        spendIconUrl: coinLogos[pair.spendCurrency],
        spendCurrency: pair.spendCurrency,
        spendAmount: 1,
        spendColor: pair.spendColor,
        receiveIconUrl: coinLogos[pair.receiveCurrency],
        receiveCurrency: pair.receiveCurrency,
        receiveAmount: calcReceiveAmount(1, pair.initialRate, feeConfig.fee),
        receiveColor: pair.receiveColor,
        rate: pair.initialRate,
        networkFee: calcFee(1, feeConfig.fee),
        networkFeePercent: feeConfig.fee,
        networkFeeLabel: feeConfig.label,
      };
    })
  );

  const fetchPrices = useCallback(async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,binancecoin,tether,usd-coin&vs_currencies=usd'
      );
      const data = await response.json();

      setSwapData(prevSwapData =>
        prevSwapData.map(swap => {
          let newRate = swap.rate;

          if (swap.spendCurrency === 'ETH' && swap.receiveCurrency === 'USDT') {
            newRate = data.ethereum.usd;
          } else if (swap.spendCurrency === 'BNB' && swap.receiveCurrency === 'USDC') {
            newRate = data.binancecoin.usd / data['usd-coin'].usd;
          } else if (swap.spendCurrency === 'USDC' && swap.receiveCurrency === 'BNB') {
            newRate = 1 / (data.binancecoin.usd / data['usd-coin'].usd);
          }

          return {
            ...swap,
            rate: newRate,
            networkFee: calcFee(swap.spendAmount, swap.networkFeePercent),
            receiveAmount: calcReceiveAmount(swap.spendAmount, newRate, swap.networkFeePercent),
          };
        })
      );
    } catch (error) {
      console.error('Error fetching prices:', error);
      setSwapData(prevSwapData =>
        prevSwapData.map(swap => {
          const fallbackRate =
            fallbackRates[`${swap.spendCurrency}_${swap.receiveCurrency}`] || swap.rate;
          return {
            ...swap,
            rate: fallbackRate,
            networkFee: calcFee(swap.spendAmount, swap.networkFeePercent),
            receiveAmount: calcReceiveAmount(swap.spendAmount, fallbackRate, swap.networkFeePercent),
          };
        })
      );
    }
  }, [fallbackRates]);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  const handleSpendAmountChange = (index: number, newAmount: number) => {
    const sanitizedAmount = Math.max(0, newAmount);
    setSwapData(prevSwapData => {
      const updatedData = [...prevSwapData];
      updatedData[index] = {
        ...updatedData[index],
        spendAmount: sanitizedAmount,
        networkFee: calcFee(sanitizedAmount, updatedData[index].networkFeePercent),
        receiveAmount: calcReceiveAmount(sanitizedAmount, updatedData[index].rate, updatedData[index].networkFeePercent),
      };
      return updatedData;
    });
  };

  return (
    <section className="py-12 bg-[#F4F4F7] max-w-7xl mx-auto xl:rounded-3xl">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-4xl lg:text-5xl font-medium text-center  mb-12 text-gray-800">
          Swap cryptocurrency pairs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {swapData.map((swap, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-sm">
              <div className="mb-4">
                <div className="text-sm font-thin opacity-80 mb-2">Spend</div>
                <div className="flex items-center justify-between bg-gray-100 p-3 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <img
                      src={swap.spendIconUrl}
                      alt={`${swap.spendCurrency} logo`}
                      className="w-10 h-10"
                    />
                    <span className="text-lg font-medium">{swap.spendCurrency}</span>
                  </div>
                  <input
                    type="number"
                    min="0"
                    value={swap.spendAmount}
                    onChange={e => handleSpendAmountChange(index, parseFloat(e.target.value) || 0)}
                    className="text-right w-24 bg-transparent font-bold text-lg focus:outline-none"
                    aria-label={`Amount of ${swap.spendCurrency} to swap`}
                  />
                </div>
              </div>
              <div className="flex justify-center my-4 bg-indigo-200 h-12 w-12 mx-auto items-center rounded-full">
                <ArrowDownUp className="text-gray-600" size={30} />
              </div>
              <div>
                <div className="text-sm font-thin opacity-80 mb-2">Receive</div>
                <div className="flex items-center justify-between bg-gray-100 p-3 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <img
                      src={swap.receiveIconUrl}
                      alt={`${swap.receiveCurrency} logo`}
                      className="w-10 h-10"
                    />
                    <span className="text-lg font-thin">{swap.receiveCurrency}</span>
                  </div>
                  <div className="font-thin text-lg">{swap.receiveAmount.toFixed(6)}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-gray-500">Network Fee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600 font-medium">
                      {swap.networkFee.toFixed(6)} {swap.spendCurrency}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">
                      {(swap.networkFeePercent * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-xs text-gray-400">Network</span>
                  <span className="text-xs text-gray-600 font-medium">{swap.networkFeeLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}