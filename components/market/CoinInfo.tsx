"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
    TrendingUp,
    BarChart3,
    Database,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Info,
    ChevronDown,
    ChevronUp,
    Layers,
    Activity,
    Globe,
    Zap,
    Clock,
    Award,
    Eye,
    ExternalLink,
    Link as LinkIcon
} from "lucide-react";

interface StatItem {
    label: string;
    value: string;
    icon?: React.ReactNode;
    color?: string;
    subValue?: string;
}

interface Section {
    title: string;
    icon: React.ReactNode;
    stats: StatItem[];
}

interface CoinLink {
    name: string;
    url: string;
    type: string;
}

interface CoinInfoProps {
    coin: any;
}

export default function CoinInfo({ coin }: CoinInfoProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [shouldShowReadMore, setShouldShowReadMore] = useState(false);
    const descriptionRef = useRef<HTMLDivElement>(null);

    const description = typeof coin.description === 'string'
        ? coin.description
        : coin.description?.en || '';

    useEffect(() => {
        if (descriptionRef.current) {
            const isTruncated = descriptionRef.current.scrollHeight > 165;
            setShouldShowReadMore(isTruncated);
        }
    }, [description]);

    const formatCurrency = (val: number | null | undefined) => {
        if (val === undefined || val === null || isNaN(val)) return "N/A";
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: val < 1 ? 6 : 2
        }).format(val);
    };

    const formatNumber = (val: number | null | undefined) => {
        if (val === undefined || val === null || isNaN(val)) return "N/A";
        return new Intl.NumberFormat('en-US').format(val);
    };

    const formatPercent = (val: number | null | undefined) => {
        if (val === undefined || val === null || isNaN(val)) return "N/A";
        return `${val.toFixed(1)}%`;
    };

    const formatDate = (dateStr: string | null | undefined) => {
        if (!dateStr) return "N/A";
        try {
            const date = new Date(dateStr);
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        } catch {
            return "N/A";
        }
    };

    const sections: Section[] = [
        {
            title: "Market Context",
            icon: <Globe className="w-5 h-5 text-blue-500" />,
            stats: [
                {
                    label: "Market Cap",
                    value: formatCurrency(coin.market_data?.market_cap?.usd || coin.market_cap),
                    icon: <BarChart3 className="w-4 h-4" />
                },
                {
                    label: "Fully Diluted",
                    value: formatCurrency(coin.market_data?.fully_diluted_valuation?.usd),
                    icon: <Layers className="w-4 h-4" />
                },
                {
                    label: "24h Volume",
                    value: formatCurrency(coin.market_data?.total_volume?.usd || coin.total_volume),
                    icon: <Activity className="w-4 h-4" />
                },
            ]
        },
        {
            title: "Price Performance",
            icon: <Zap className="w-5 h-5 text-yellow-500" />,
            stats: [
                {
                    label: "24h Change",
                    value: formatPercent(coin.market_data?.price_change_percentage_24h || coin.price_change_percentage_24h),
                    color: (coin.market_data?.price_change_percentage_24h || coin.price_change_percentage_24h || 0) >= 0 ? "text-green-500" : "text-red-500",
                    icon: <Clock className="w-4 h-4" />
                },
                {
                    label: "7d Change",
                    value: formatPercent(coin.market_data?.price_change_percentage_7d),
                    color: (coin.market_data?.price_change_percentage_7d || 0) >= 0 ? "text-green-500" : "text-red-500"
                },
                {
                    label: "30d Change",
                    value: formatPercent(coin.market_data?.price_change_percentage_30d),
                    color: (coin.market_data?.price_change_percentage_30d || 0) >= 0 ? "text-green-500" : "text-red-500"
                },
            ]
        },
        {
            title: "Supply & Rank",
            icon: <Award className="w-5 h-5 text-indigo-500" />,
            stats: [
                {
                    label: "Market Cap Rank",
                    value: `#${coin.market_cap_rank || 'N/A'}`,
                    icon: <TrendingUp className="w-4 h-4" />
                },
                {
                    label: "Circulating Supply",
                    value: `${formatNumber(coin.market_data?.circulating_supply || coin.circulating_supply)} ${coin.symbol?.toUpperCase() || ''}`,
                    icon: <Database className="w-4 h-4" />
                },
                {
                    label: "Max Supply",
                    value: coin.max_supply ? `${formatNumber(coin.max_supply)} ${coin.symbol?.toUpperCase() || ''}` : "∞",
                    icon: <Eye className="w-4 h-4" />
                },
            ]
        },
        {
            title: "Price Extremes",
            icon: <TrendingUp className="w-5 h-5 text-green-500" />,
            stats: [
                {
                    label: "All-Time High",
                    value: formatCurrency(coin.market_data?.ath?.usd || coin.ath),
                    subValue: coin.ath_date ? formatDate(coin.ath_date) : undefined,
                    icon: <ArrowUpRight className="w-4 h-4 text-green-500" />
                },
                {
                    label: "All-Time Low",
                    value: formatCurrency(coin.market_data?.atl?.usd || coin.atl),
                    subValue: coin.atl_date ? formatDate(coin.atl_date) : undefined,
                    icon: <ArrowDownRight className="w-4 h-4 text-red-500" />
                },
                {
                    label: "Last Updated",
                    value: formatDate(coin.last_updated),
                    icon: <Calendar className="w-4 h-4" />
                },
            ]
        }
    ];

    if (!coin) {
        return <div className="p-3 text-center text-gray-500 text-sm">Market data unavailable</div>;
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    const links = coin.links || [];
    const tags = coin.tags || [];
    const categories = coin.categories || [];

    return (
        <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white border border-slate-200 overflow-hidden rounded-2xl"
            >
                {sections.map((section, sIdx) => (
                    <motion.div
                        key={sIdx}
                        variants={itemVariants}
                        className={`p-3 md:p-5 lg:p-6 ${sIdx < sections.length - 1 ? 'border-b border-slate-200' : ''}`}
                    >
                        <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
                            {section.icon}
                            <h3 className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide">{section.title}</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                            {section.stats.map((stat: StatItem, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col gap-1 md:gap-1.5 ${idx < section.stats.length - 1 ? 'md:border-r md:border-slate-200 md:pr-4 lg:pr-6' : ''}`}
                                >
                                    <div className="flex items-center gap-1 text-slate-400">
                                        <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide truncate">{stat.label}</span>
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className={`text-sm md:text-base font-medium text-slate-900 truncate ${stat.color || ""}`}>
                                            {stat.value}
                                        </span>
                                        {stat.subValue && (
                                            <span className="text-[10px] md:text-xs text-slate-400">
                                                {stat.subValue}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl md:rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
                <div className="p-4 md:p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="p-1.5 md:p-2 bg-blue-50 rounded-lg">
                            <Info className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        </div>
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900">About {coin.name}</h3>
                    </div>

                    {description ? (
                        <>
                            <div className="relative">
                                <div
                                    ref={descriptionRef}
                                    className={`prose prose-slate prose-sm max-w-none text-slate-600 leading-relaxed overflow-hidden transition-all duration-700 ease-in-out ${!isExpanded ? 'max-h-40' : 'max-h-[5000px]'}`}
                                    dangerouslySetInnerHTML={{ __html: description }}
                                />
                                {!isExpanded && shouldShowReadMore && (
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                                )}
                            </div>

                            {shouldShowReadMore && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
                                >
                                    {isExpanded ? (
                                        <>
                                            Show Less <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                        </>
                                    ) : (
                                        <>
                                            Read More <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                        </>
                                    )}
                                </button>
                            )}
                        </>
                    ) : (
                        <p className="text-slate-400 text-sm">No description available</p>
                    )}
                </div>

                {(tags.length > 0 || categories.length > 0) && (
                    <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 border-t border-slate-100">
                        <div className="flex flex-wrap gap-1.5 md:gap-2 pt-4">
                            {tags.slice(0, 8).map((tag: string, idx: number) => (
                                <span
                                    key={`tag-${idx}`}
                                    className="px-2 md:px-3 py-0.5 md:py-1 bg-blue-50 text-blue-600 text-[10px] md:text-xs font-semibold rounded-full border border-blue-100 uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                            {categories.slice(0, 5).map((category: string, idx: number) => (
                                <span
                                    key={`cat-${idx}`}
                                    className="px-2 md:px-3 py-0.5 md:py-1 bg-slate-50 text-slate-600 text-[10px] md:text-xs font-semibold rounded-full border border-slate-100 uppercase tracking-wider"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>

            {links.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl md:rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                >
                    <div className="p-4 md:p-6 lg:p-8">
                        <div className="flex items-center gap-2 mb-4 md:mb-6">
                            <div className="p-1.5 md:p-2 bg-purple-50 rounded-lg">
                                <LinkIcon className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                            </div>
                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900">Official Links</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {links.map((link: CoinLink, idx: number) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                                >
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold text-slate-900 truncate group-hover:text-blue-600">
                                            {link.name}
                                        </p>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-wide">
                                            {link.type}
                                        </p>
                                    </div>
                                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-500 flex-shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}

            <div className="flex justify-between items-center text-[10px] md:text-xs text-slate-400 px-2">
                <span>
                    Data provided by{' '}
                    <span className="font-bold text-slate-500">
                        {coin.provider === 'coinranking' ? 'CoinRanking' :
                            coin.provider === 'coingecko' ? 'CoinGecko' :
                                coin.provider || 'External API'}
                    </span>
                </span>
                {coin.last_updated && (
                    <span className="text-slate-300">
                        Updated: {formatDate(coin.last_updated)}
                    </span>
                )}
            </div>
        </div>
    );
}