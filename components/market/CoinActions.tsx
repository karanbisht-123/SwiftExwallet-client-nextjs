"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

interface CoinActionsProps {
    symbol: string;
    name: string;
}

export default function CoinActions({ symbol, name }: CoinActionsProps) {
    const normalizedSymbol = symbol.toLowerCase();
    const isNative = ["eth", "bnb"].includes(normalizedSymbol);
    const isStable = ["usdt", "usdc"].includes(normalizedSymbol);
    if (!isNative && !isStable) {
        return null;
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
                Options for {name} on SwiftEx
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            >
                {isNative && (
                    <motion.div variants={item} className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Buy & Sell via Bank Transfer</h3>
                        <p className="text-slate-500 text-base leading-relaxed">
                            Securely buy or sell <strong className="text-slate-700">{symbol.toUpperCase()}</strong> directly using your bank account.
                            SwiftEx offers seamless fiat on-ramps and off-ramps, allowing you to convert your crypto to cash instantly.
                        </p>
                    </motion.div>
                )}

                {(isNative || isStable) && (
                    <motion.div variants={item} className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Swap</h3>
                        <p className="text-slate-500 text-base leading-relaxed">
                            Swap <strong className="text-slate-700">{symbol.toUpperCase()}</strong> instantly with competitive rates.
                            Exchange your assets without leaving the platform, leveraging our high-liquidity pools for the best price execution.
                        </p>
                    </motion.div>
                )}

                {isStable && (
                    <motion.div variants={item} className="group relative p-8 rounded-3xl border border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                        <h3 className="text-xl font-bold t mb-3 pr-12">Bridge to Stellar Network</h3>
                        <p className=" text-base leading-relaxed">
                            Bridge your <strong className="text-slate-100">{symbol.toUpperCase()}</strong> to the Stellar network for ultra-low fees and 5-second transaction times.
                            Access the global Stellar ecosystem seamlessly.
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
