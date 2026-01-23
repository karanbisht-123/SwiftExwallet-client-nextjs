import CoinDetailClient from "@/components/market/CoinDetailClient";
import { getCoinDetails } from "@/lib/marketService";
import { Metadata } from "next";

interface CoinPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CoinPageProps): Promise<Metadata> {
    const { id } = await params;
    const { data: coin } = await getCoinDetails(id);

    if (!coin) {
        return {
            title: "Coin Details | SwiftEx",
            description: "Track live cryptocurrency price and market data on SwiftEx.",
        };
    }

    const priceFormatted = coin?.current_price?.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return {
        title: `${coin?.name} (${coin?.symbol?.toUpperCase()}) Price $${priceFormatted} | SwiftEx`,
        description: `Track ${coin?.name} live price at $${priceFormatted}, market cap, trading volume, and 24h price chart on SwiftEx.`,
        openGraph: {
            title: `${coin.name} (${coin.symbol?.toUpperCase()}) - $${priceFormatted}`,
            description: `${coin?.name} current price is $${priceFormatted}. Track market cap, volume, and historical data.`,
            images: coin.image ? [{ url: coin.image }] : [],
        },
        twitter: {
            card: "summary",
            title: `${coin?.name} Price - $${priceFormatted}`,
            description: `${coin?.name} (${coin?.symbol?.toUpperCase()}) live price and market data on SwiftEx.`,
        },
    };
}

export default async function CoinPage({ params }: CoinPageProps) {
    const { id } = await params;

    return <CoinDetailClient coinId={id} />;
}