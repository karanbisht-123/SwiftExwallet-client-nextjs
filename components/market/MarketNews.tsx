"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import Image from "next/image";
import { getCryptoNews, NewsArticle } from "@/lib/marketService";

export default function MarketNews() {
    const [newsList, setNewsList] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                setLoading(true);
                const news = await getCryptoNews(undefined, 6);
                setNewsList(news);
            } catch (err) {
                console.error("Failed to fetch news:", err);
                setError("Failed to load news. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                <p className="text-gray-500 font-medium">Fetching latest crypto news...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-20 text-center text-red-500 font-medium">
                {error}
            </div>
        );
    }

    return (
        <div className="space-y-8 mt-24">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-[#020e46]">
                        Latest Crypto News
                    </h2>
                    <p className="text-gray-500 text-sm">Stay updated with the most recent developments in the crypto space.</p>
                </div>
                <a
                    href="https://financialmodelingprep.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 text-sm transition-colors"
                >
                    Powered by FMP <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsList.map((news, idx) => (
                    <article
                        key={`${news.symbol}-${idx}`}
                        className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
                    >
                        <a href={news.url} target="_blank" rel="noopener noreferrer" className="block relative h-52 w-full overflow-hidden">
                            <Image
                                src={news.image}
                                alt={news.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-2xl text-[10px] font-bold text-[#020e46] uppercase tracking-[0.15em] shadow-sm">
                                {news.site}
                            </div>
                        </a>

                        <div className="p-7 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4">
                                <span className="text-blue-600">{news.publisher}</span>
                                <span>•</span>
                                <span>{new Date(news.publishedDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors mb-4 line-clamp-3">
                                {news.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 text-balance">
                                {news.text}
                            </p>

                            <div className="mt-auto">
                                <a
                                    href={news.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                                >
                                    Read Article
                                    <div className="w-6 h-6 flex items-center justify-center bg-blue-50 rounded-full group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                                        <ExternalLink className="w-3 h-3" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
