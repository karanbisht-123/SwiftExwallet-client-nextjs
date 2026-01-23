"use client";

import { useState, useEffect } from "react";
import {
    getCoinDetails,
    getCoinMarketChart,
    sparklineToChartData,
    clearExpiredCache,
    CoinDetails,
    ChartDataPoint
} from "@/lib/marketService";
import CoinChart from "./CoinChart";
import CoinInfo from "./CoinInfo";
import CoinActions from "./CoinActions";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Search, Loader2, Info } from "lucide-react";

interface CoinDetailClientProps {
    coinId: string;
}

export default function CoinDetailClient({ coinId }: CoinDetailClientProps) {
    const [coin, setCoin] = useState<CoinDetails | null>(null);
    const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
    const [loading, setLoading] = useState(true);
    const [chartLoading, setChartLoading] = useState(false);
    const [error, setError] = useState<{ message: string; type: 'rate_limit' | 'not_found' | 'unknown' } | null>(null);
    const [selectedPeriod, setSelectedPeriod] = useState('1');

    useEffect(() => {
        clearExpiredCache();
    }, []);

    useEffect(() => {
        async function fetchCoinDetails() {
            setLoading(true);
            setError(null);

            const result = await getCoinDetails(coinId);

            if (result.error || !result.data) {
                setError({
                    message: result.error || 'Failed to load coin details',
                    type: result.errorType || 'unknown'
                });
                setLoading(false);
            } else {
                setCoin(result.data);

                if (result.data.sparkline && result.data.sparkline.length > 0) {
                    const sparklineData = sparklineToChartData(result.data.sparkline);
                    setChartData(sparklineData);
                }

                setLoading(false);
            }
        }

        fetchCoinDetails();
    }, [coinId]);

    useEffect(() => {
        async function fetchChartData() {
            if (selectedPeriod === '1' && coin?.sparkline && coin.sparkline.length > 0) {
                const sparklineData = sparklineToChartData(coin.sparkline);
                setChartData(sparklineData);
                return;
            }

            setChartLoading(true);
            const data = await getCoinMarketChart(coinId, selectedPeriod);
            setChartData(data);
            setChartLoading(false);
        }

        if (coin) {
            fetchChartData();
        }
    }, [selectedPeriod, coinId, coin]);

    const handlePeriodChange = (period: string) => {
        setSelectedPeriod(period);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
                    <p className="text-slate-600 font-medium">Loading coin data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        const isRateLimit = error.type === 'rate_limit';
        const isNotFound = error.type === 'not_found';

        return (
            <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="max-w-lg w-full text-center space-y-5">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${isRateLimit ? 'bg-amber-100' : isNotFound ? 'bg-slate-100' : 'bg-red-100'}`}>
                        {isRateLimit ? (
                            <AlertTriangle className="w-8 h-8 text-amber-600" />
                        ) : (
                            <Search className="w-8 h-8 text-slate-500" />
                        )}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {isRateLimit ? 'Too Many Requests' : isNotFound ? 'Coin Not Found' : 'Something Went Wrong'}
                    </h1>
                    <p className="text-base text-slate-600 leading-relaxed">
                        {isRateLimit
                            ? "You've been browsing coins quite fast! Please wait a moment before trying again."
                            : isNotFound
                                ? `We couldn't find a coin with ID "${coinId}". It may have been delisted or the ID is incorrect.`
                                : 'An unexpected error occurred. Please try again later.'}
                    </p>
                    <Link
                        href="/market"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all hover:scale-105 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Market
                    </Link>
                </div>
            </div>
        );
    }

    if (!coin) return null;

    const currentPrice = coin.current_price ?? 0;
    const priceChange = coin.price_change_percentage_24h ?? 0;
    const coinSymbol = coin.symbol?.toUpperCase() || 'N/A';
    const coinImage = coin.image || '/placeholder-coin.png';
    const marketCapRank = coin.market_cap_rank ?? 'N/A';

    const coinForInfo = {
        name: coin.name,
        symbol: coin.symbol,
        market_cap_rank: coin.market_cap_rank,
        description: coin.description || '',
        market_data: {
            market_cap: { usd: coin.market_cap },
            total_volume: { usd: coin.total_volume },
            current_price: { usd: coin.current_price },
            high_24h: { usd: coin.high_24h },
            low_24h: { usd: coin.low_24h },
            price_change_percentage_24h: coin.price_change_percentage_24h,
            circulating_supply: coin.circulating_supply,
            total_supply: coin.total_supply,
            max_supply: coin.max_supply,
            ath: { usd: coin.ath },
            ath_change_percentage: { usd: 0 },
            atl: { usd: coin.atl },
            atl_change_percentage: { usd: 0 },
        },
        categories: [],
        links: coin.links || [],
        tags: coin.tags || [],
        provider: coin.provider,
        last_updated: coin.last_updated,
        ath_date: coin.ath_date,
        atl_date: coin.atl_date,
        market_cap: coin.market_cap,
        total_volume: coin.total_volume,
        current_price: coin.current_price,
        price_change_percentage_24h: coin.price_change_percentage_24h,
        circulating_supply: coin.circulating_supply,
        max_supply: coin.max_supply,
        ath: coin.ath,
        atl: coin.atl,
    };

    return (
        <div className="min-h-screen text-slate-900 lg:py-12 px-0 lg:px-8">
            <div className="container lg:rounded-3xl p-2 lg:p-8 bg-gradient-to-br from-slate-50 to-slate-100 mx-auto">
                <div className="my-3 md:my-4 flex items-center justify-between">
                    <Link
                        href="/market"
                        className="inline-flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors font-medium group text-sm"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="hidden sm:inline">Back to Market</span>
                        <span className="sm:hidden">Back</span>
                    </Link>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Info className="w-3.5 h-3.5" />
                        <span>Data cached for optimization</span>
                    </div>
                </div>

                <div className="p-1 md:p-4 lg:p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between gap-2 md:gap-4">
                        <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                            <div className="relative w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 shadow-sm rounded-full p-1 md:p-1.5 bg-slate-50 flex-shrink-0">
                                <img
                                    src={coinImage}
                                    alt={coin.name || 'Coin'}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                                    <h1 className="text-base md:text-2xl lg:text-4xl font-semibold text-[#0F172A] tracking-tight truncate">
                                        {coin.name || 'Unknown Coin'}
                                    </h1>
                                    <span className="text-[10px] md:text-xs lg:text-sm text-slate-400 font-medium uppercase px-1.5 md:px-2 py-0.5 bg-slate-50 rounded md:rounded-lg border border-slate-100 flex-shrink-0">
                                        {coinSymbol}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
                                    <span className="bg-blue-50 text-blue-700 px-1.5 md:px-2 py-0.5 rounded text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                                        Rank #{marketCapRank}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                            <div className="text-lg md:text-2xl lg:text-4xl font-semibold text-[#0F172A] font-mono tracking-tighter">
                                ${currentPrice.toLocaleString()}
                            </div>
                            <div className={`inline-flex items-center gap-0.5 text-xs md:text-sm lg:text-base font-semibold mt-0.5 ${priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {priceChange >= 0 ? '+' : ''}
                                {priceChange.toFixed(2)}%
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" md:mb-8 mt-1 md:mt-4 h-[350px] md:h-[450px] lg:h-[500px] p-1 md:p-6">
                    {chartLoading ? (
                        <div className="h-full w-full flex items-center justify-center">
                            <div className="flex flex-col items-center gap-3">
                                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                                <p className="text-slate-400 text-sm">Loading chart...</p>
                            </div>
                        </div>
                    ) : (
                        <CoinChart
                            data={chartData}
                            selectedPeriod={selectedPeriod}
                            onPeriodChange={handlePeriodChange}
                        />
                    )}
                </div>

                <CoinInfo coin={coinForInfo} />

                <CoinActions symbol={coin.symbol || ''} name={coin.name || ''} />
            </div>
        </div>
    );
}