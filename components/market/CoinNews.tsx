"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Loader2, Newspaper, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import { getCryptoNews, NewsArticle } from "@/lib/marketService";
import { motion, AnimatePresence } from "framer-motion";

// interface CoinNewsProps {
//     coinName: string;
//     coinSymbol: string;
// }

export default function CoinNews() {
    const [newsList, setNewsList] = useState<NewsArticle[]>([]);
    const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                setLoading(true);

                const news = await getCryptoNews(undefined, 20);
                setNewsList(news);
                if (news.length > 0) {
                    setSelectedNews(news[0]);
                }
            } catch (err) {
                console.error("Failed to fetch coin news:", err);
                setError("Failed to load news for this coin.");
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 space-y-4 bg-white rounded-3xl border border-gray-100 mt-12 shadow-sm">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                <p className="text-gray-400 text-sm font-medium tracking-tight">Curating latest crypto updates...</p>
            </div>
        );
    }

    if (error || newsList.length === 0) {
        return null;
    }

    return (
        <div className="space-y-8 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-50 rounded-2xl">
                        <Newspaper className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#020e46] tracking-tight">
                            Market Insights
                        </h2>
                        <p className="text-sm text-gray-400 font-medium">Top stories moving the market today</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-gray-400">
                        Powered by <a href="https://financialmodelingprep.com" target="_blank" className="text-blue-600 hover:underline">FMP</a> & <a href="https://www.coingecko.com" target="_blank" className="text-blue-600 hover:underline">CoinGecko</a>
                    </span>
                    <a
                        href="https://financialmodelingprep.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 text-sm transition-colors py-2 px-4 rounded-full hover:bg-blue-50"
                    >
                        View All <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">

                <div className="lg:col-span-5 h-full overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                    {newsList.map((news, idx) => (
                        <div
                            key={`${news.symbol}-${idx}`}
                            onClick={() => setSelectedNews(news)}
                            className={`group cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex gap-4 ${selectedNews === news
                                ? "bg-blue-50 border-blue-200 shadow-sm"
                                : "bg-white border-gray-100 hover:border-blue-100 hover:bg-gray-50/50"
                                }`}
                        >
                            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex flex-col justify-between py-1">
                                <h3 className={`text-sm font-bold leading-snug line-clamp-2 ${selectedNews === news ? "text-blue-900" : "text-gray-700 group-hover:text-blue-800"
                                    }`}>
                                    {news.title}
                                </h3>
                                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                    <span className="text-blue-600">{news.publisher}</span>
                                    <span>•</span>
                                    <span>{new Date(news.publishedDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden lg:block lg:col-span-7 h-full relative">
                    <AnimatePresence mode="wait">
                        {selectedNews && (
                            <motion.article
                                key={selectedNews.url}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-900/5 overflow-hidden sticky top-0"
                            >
                                <div className="relative h-1/2 w-full overflow-hidden">
                                    <Image
                                        src={selectedNews.image}
                                        alt={selectedNews.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-1000"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold text-[#020e46] uppercase tracking-[0.15em] shadow-sm">
                                        {selectedNews.site}
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <div className="flex items-center gap-2 mb-3 text-xs font-medium text-white/90">
                                            <Clock className="w-3.5 h-3.5" />
                                            {new Date(selectedNews.publishedDate).toLocaleString(undefined, {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                        <h2 className="text-2xl font-bold leading-tight text-balance shadow-black/10 drop-shadow-md">
                                            {selectedNews.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className="flex-1 p-8 flex flex-col">
                                    <div className="flex items-center gap-3 text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">
                                        <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{selectedNews.publisher}</span>
                                        <span className="bg-gray-50 px-3 py-1 rounded-lg">{selectedNews.symbol}</span>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-relaxed line-clamp-6 text-pretty mb-8">
                                        {selectedNews.text}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-gray-400">
                                            Read full story on {selectedNews.site}
                                        </span>
                                        <a
                                            href={selectedNews.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-3 px-6 py-3 bg-[#020e46] text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
                                        >
                                            Read Article
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="lg:hidden mt-8">
                {selectedNews && (
                    <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg">
                        <div className="relative h-48 w-full">
                            <Image
                                src={selectedNews.image}
                                alt={selectedNews.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">{selectedNews.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm line-clamp-3">{selectedNews.text}</p>
                            <a
                                href={selectedNews.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center py-3 bg-[#020e46] text-white rounded-xl font-bold text-sm"
                            >
                                Read Article
                            </a>
                        </div>
                    </article>
                )}
            </div>
        </div>
    );
}
