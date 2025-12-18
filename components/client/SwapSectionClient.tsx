'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { SwapPair } from '../server/SwapSection';

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
}

interface SwapSectionClientProps {
  swapPairs: SwapPair[];
  coinLogos: Record<string, string>;
  fallbackRates: Record<string, number>;
}

export function SwapSectionClient({ swapPairs, coinLogos, fallbackRates }: SwapSectionClientProps) {
  const [swapData, setSwapData] = useState<SwapData[]>(
    swapPairs.map(pair => ({
      spendIconUrl: coinLogos[pair.spendCurrency],
      spendCurrency: pair.spendCurrency,
      spendAmount: 1,
      spendColor: pair.spendColor,
      receiveIconUrl: coinLogos[pair.receiveCurrency],
      receiveCurrency: pair.receiveCurrency,
      receiveAmount: pair.initialRate,
      receiveColor: pair.receiveColor,
      rate: pair.initialRate,
    }))
  );

  // Fetch prices from CoinGecko
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
            receiveAmount: parseFloat((swap.spendAmount * newRate).toFixed(6)),
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
            receiveAmount: parseFloat((swap.spendAmount * fallbackRate).toFixed(6)),
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
      updatedData[index].spendAmount = sanitizedAmount;
      updatedData[index].receiveAmount = parseFloat(
        (sanitizedAmount * updatedData[index].rate).toFixed(6)
      );
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
              <div className="mt-2 text-xs text-gray-500 text-right">
                Rate: 1 {swap.spendCurrency} = {swap.rate.toFixed(6)} {swap.receiveCurrency}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
