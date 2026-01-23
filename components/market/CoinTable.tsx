"use client";

import { CoinData } from "@/lib/marketService";
import { ArrowUpRight, ArrowDownRight, Search, Info } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

interface CoinTableProps {
    coins: CoinData[];
}
const formatValue = (value: number): string => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return `$${value.toFixed(2)}`;
};

const formatPrice = (price: number): string => {
    if (price >= 1000) return `$${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
    if (price >= 1) return `$${price.toFixed(2)}`;
    if (price >= 0.01) return `$${price.toFixed(4)}`;
    return `$${price.toFixed(6)}`;
};

export default function CoinTable({ coins }: CoinTableProps) {
    const [search, setSearch] = useState("");
    const [navigating, setNavigating] = useState<string | null>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    const filteredCoins = coins.filter(
        (coin) =>
            coin?.name?.toLowerCase().includes(search.toLowerCase()) ||
            coin?.symbol?.toLowerCase().includes(search.toLowerCase())
    );

    const rowVirtualizer = useVirtualizer({
        count: filteredCoins.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 64,
        overscan: 10,
    });

    return (
        <div className="text-gray-900 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-2 px-4 py-2 text-xs text-gray-400 border-b border-gray-100">
                <Info className="w-3 h-3" />
                <span>Data cached for optimization</span>
            </div>

            <div className="hidden md:flex items-center px-4 py-3 text-xs text-gray-400 uppercase font-semibold border-b border-gray-100 bg-gray-50/50">
                <div className="w-12 text-center">#</div>
                <div className="flex-1 min-w-0">Coin</div>
                <div className="w-28 text-right">Price</div>
                <div className="w-24 text-right">24h</div>
                <div className="w-28 text-right">Market Cap</div>
                <div className="w-28 text-right hidden lg:block">Volume</div>
            </div>

            <div className="flex md:hidden items-center px-4 py-2 text-xs text-gray-400 uppercase font-semibold border-b border-gray-100 bg-gray-50/50">
                <div className="w-8 text-center">#</div>
                <div className="flex-1">Coin</div>
                <div className="text-right">Price</div>
            </div>


            <div
                ref={parentRef}
                className="overflow-y-auto overflow-x-hidden"
                style={{ maxHeight: '700px' }}
            >
                <div
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const coin = filteredCoins[virtualRow.index];
                        if (!coin) return null;

                        const priceChange = coin.price_change_percentage_24h ?? 0;
                        const isPositive = priceChange >= 0;

                        return (
                            <div
                                key={coin.id}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: `${virtualRow.size}px`,
                                    transform: `translateY(${virtualRow.start}px)`,
                                }}
                            >
                                <Link
                                    href={`/market/${coin.id}`}
                                    prefetch={true}
                                    onClick={() => setNavigating(coin.id)}
                                    className="block h-full hover:bg-blue-50/50 active:bg-blue-50 transition-colors"
                                >
                                    <div className="hidden md:flex items-center h-full px-4 border-b border-gray-100">
                                        <div className="w-12 text-center text-sm text-gray-500 font-medium">
                                            {coin.market_cap_rank ?? '-'}
                                        </div>
                                        <div className="flex-1 min-w-0 flex items-center gap-3">
                                            <div className="relative flex-shrink-0">
                                                {navigating === coin.id && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-full z-10">
                                                        <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                                                    </div>
                                                )}
                                                <img
                                                    src={coin.image || '/placeholder-coin.png'}
                                                    alt={coin.name || 'Coin'}
                                                    width={32}
                                                    height={32}
                                                    className="rounded-full"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="font-semibold text-gray-900 text-sm truncate">
                                                    {coin.name || 'Unknown'}
                                                </div>
                                                <div className="text-xs text-gray-400 uppercase">
                                                    {coin.symbol?.toUpperCase() || 'N/A'}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-28 text-right font-mono text-sm text-gray-900">
                                            {formatPrice(coin.current_price ?? 0)}
                                        </div>
                                        <div className="w-24 text-right">
                                            <span className={`inline-flex items-center gap-0.5 text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                                {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                                                {Math.abs(priceChange).toFixed(2)}%
                                            </span>
                                        </div>
                                        <div className="w-28 text-right font-mono text-sm text-gray-600">
                                            {formatValue(coin.market_cap ?? 0)}
                                        </div>
                                        <div className="w-28 text-right font-mono text-sm text-gray-600 hidden lg:block">
                                            {formatValue(coin.total_volume ?? 0)}
                                        </div>
                                    </div>
                                    <div className="flex md:hidden items-center h-full px-4 border-b border-gray-100">
                                        <div className="w-8 text-center text-xs text-gray-400 font-medium flex-shrink-0">
                                            {coin.market_cap_rank ?? '-'}
                                        </div>
                                        <div className="flex-1 min-w-0 flex items-center gap-2">
                                            <div className="relative flex-shrink-0">
                                                {navigating === coin.id && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-full z-10">
                                                        <div className="w-2 h-2 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                                                    </div>
                                                )}
                                                <img
                                                    src={coin.image || '/placeholder-coin.png'}
                                                    alt={coin.name || 'Coin'}
                                                    width={28}
                                                    height={28}
                                                    className="rounded-full"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="font-semibold text-gray-900 text-sm truncate">
                                                    {coin.name || 'Unknown'}
                                                </div>
                                                <div className="text-xs text-gray-400 truncate">
                                                    <span className="uppercase">{coin.symbol?.toUpperCase() || 'N/A'}</span>
                                                    <span className="mx-1">•</span>
                                                    <span>{formatValue(coin.market_cap ?? 0)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right flex-shrink-0 pl-2">
                                            <div className="font-semibold text-gray-900 text-sm">
                                                {formatPrice(coin.current_price ?? 0)}
                                            </div>
                                            <div className={`text-xs font-semibold flex items-center justify-end gap-0.5 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                                {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                                {Math.abs(priceChange).toFixed(2)}%
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {filteredCoins.length === 0 && (
                    <div className="p-12 text-center text-gray-400 flex flex-col items-center">
                        <Search className="w-10 h-10 mb-3 opacity-20" />
                        <p className="text-sm">No coins found matching "{search}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}