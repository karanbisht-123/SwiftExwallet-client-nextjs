"use client";

import { CoinData } from "@/lib/marketService";
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MiniSparkline = dynamic(() => import("./MiniSparkline"), {
    ssr: false,
    loading: () => <div className="w-16 h-8 bg-slate-100 rounded animate-pulse" />
});

interface MarketStatsProps {
    gainers: CoinData[];
    losers: CoinData[];
}

export default function MarketStats({ gainers, losers }: MarketStatsProps) {
    return (
        <>
            <div className="bg-white mt-1 rounded-b-none p-2 lg:p-4">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-50 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <h2 className="text-md font-bold text-slate-900 uppercase tracking-wide">Top Gainers</h2>
                </div>
                <div className="space-y-4">
                    {gainers.slice(0, 5).map((coin) => {
                        const priceChange = coin?.price_change_percentage_24h ?? 0;
                        return (
                            <Link href={`/market/${coin?.id}`} key={coin?.id} className="flex border-b border-gray-100 items-center justify-between p-3 hover:bg-slate-50  transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-8 h-8 rounded-full bg-slate-100 p-1">
                                        <img
                                            src={coin?.image || '/placeholder-coin.png'}
                                            alt={coin?.name || 'Coin'}
                                            className="w-full h-full object-contain rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{coin?.symbol?.toUpperCase() || 'N/A'}</div>
                                        <div className="text-xs text-slate-500">{coin?.name || 'Unknown'}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MiniSparkline data={coin?.sparkline} isPositive={true} />
                                    <div className="text-right">
                                        <div className="font-mono font-medium text-slate-900 text-sm">${(coin?.current_price ?? 0).toLocaleString()}</div>
                                        <div className="flex items-center justify-end gap-1 text-green-600 text-xs font-bold">
                                            <ArrowUpRight className="w-3 h-3" />
                                            {priceChange.toFixed(2)}%
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="bg-white mt-1 rounded-b-none p-2 lg:p-4">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-50 rounded-lg">
                        <TrendingDown className="w-4 h-4 text-red-600" />
                    </div>
                    <h2 className="text-md font-bold text-slate-900 uppercase tracking-wide">Top Losers</h2>
                </div>
                <div className="space-y-4">
                    {losers.slice(0, 5).map((coin) => {
                        const priceChange = coin?.price_change_percentage_24h ?? 0;
                        return (
                            <Link href={`/market/${coin?.id}`} key={coin?.id} className="flex border-b border-gray-100 items-center justify-between p-3 hover:bg-slate-50  transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-8 h-8 rounded-full bg-slate-100 p-1">
                                        <img
                                            src={coin?.image || '/placeholder-coin.png'}
                                            alt={coin?.name || 'Coin'}
                                            className="w-full h-full object-contain rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{coin?.symbol?.toUpperCase() || 'N/A'}</div>
                                        <div className="text-xs text-slate-500">{coin?.name || 'Unknown'}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MiniSparkline data={coin?.sparkline} isPositive={false} />
                                    <div className="text-right">
                                        <div className="font-mono font-medium text-slate-900 text-sm">${(coin?.current_price ?? 0).toLocaleString()}</div>
                                        <div className="flex items-center justify-end gap-1 text-red-600 text-xs font-bold">
                                            <ArrowDownRight className="w-3 h-3" />
                                            {Math.abs(priceChange).toFixed(2)}%
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
