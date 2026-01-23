import { getMarketData, getTopGainers, getTopLosers } from "@/lib/marketService";
import MarketStats from "@/components/market/MarketStats";
import CoinTable from "@/components/market/CoinTable";
export const revalidate = 1200;

export const metadata = {
    title: "Crypto Market Overview | SwiftEx",
    description: "Real-time cryptocurrency market data, top gainers, top losers, and comprehensive coin listings.",
};

export default async function MarketPage() {
    const coins = await getMarketData();
    const gainers = getTopGainers(coins);
    const losers = getTopLosers(coins);

    return (
        <div className="min-h-screen text-slate-900 px-2 lg:px-4  lg:py-12 ">
            <div className="container mx-auto border border-gray-100 rounded-3xl">
                <div className="flex px-4 flex-col md:flex-row justify-between items-end gap-6 py-4">
                    <div className="lg:space-y-2 space-y-1">
                        <h1 className="lg:text-4xl text-2xl font-semibold text-[#0F172A] tracking-tight">
                            Market Overview
                        </h1>
                        <p className="text-slate-500 text-lg max-w-xl">
                            Track the latest price trends and market movements.
                        </p>
                    </div>
                </div>
                <div className="  bg-linear-to-br from-slate-50 to-slate-100 grid grid-cols-1 lg:grid-cols-2  gap-1 lg:gap-1">
                    <MarketStats gainers={gainers} losers={losers} />
                </div>
                <div className="  bg-linear-to-br from-slate-50 to-slate-100">
                    <CoinTable coins={coins} />
                </div>
            </div>
        </div>
    );
}
