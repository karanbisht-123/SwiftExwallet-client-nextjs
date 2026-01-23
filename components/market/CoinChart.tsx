"use client";

import { useState } from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface ChartDataPoint {
    date: number;
    price: number;
}

interface CoinChartProps {
    data: ChartDataPoint[];
    selectedPeriod: string;
    onPeriodChange: (period: string) => void;
}

export default function CoinChart({ data, selectedPeriod, onPeriodChange }: CoinChartProps) {
    const [hoverData, setHoverData] = useState<ChartDataPoint | null>(null);

    const periods = [
        { value: '1', label: '24H' },
        { value: '7', label: '7D' },
        { value: '15', label: '15D' },
        { value: '30', label: '30D' },
    ];

    const formatDate = (date: string | number | Date, template: "full" | "short" | "axis") => {
        const d = new Date(date);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[d.getMonth()];
        const day = d.getDate();
        const year = d.getFullYear();

        if (template === "axis") return `${month} ${day}`;
        if (template === "short") return `${month} ${day}, ${year}`;

        let hours = d.getHours();
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;

        return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
    };

    if (!data || data.length === 0) {
        return (
            <div className="h-full w-full bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
                No chart data available
            </div>
        );
    }

    const startPrice = data[0].price;
    const currentPrice = hoverData?.price || data[data.length - 1].price;
    const isPositive = currentPrice >= startPrice;
    const color = isPositive ? "#16a34a" : "#ef4444";
    const priceChange = currentPrice - startPrice;
    const percentChange = ((priceChange / startPrice) * 100).toFixed(2);

    return (
        <div className="h-full flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-2 md:mb-4">
                <div className="min-w-0 flex-1">
                    <div className="text-lg md:text-2xl lg:text-3xl font-semibold" style={{ color }}>
                        ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
                        <span className="text-[10px] md:text-xs text-gray-400 truncate max-w-[120px] md:max-w-none">
                            {hoverData
                                ? formatDate(hoverData.date, "full")
                                : formatDate(data[data.length - 1].date, "short")}
                        </span>
                        <span
                            className="text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-0.5 rounded whitespace-nowrap"
                            style={{
                                color,
                                backgroundColor: isPositive ? '#dcfce7' : '#fee2e2'
                            }}
                        >
                            {isPositive ? '↑' : '↓'} ${Math.abs(priceChange).toFixed(2)} ({percentChange}%)
                        </span>
                    </div>
                </div>

                {/* 24H Data Badge */}
                <div className="flex-shrink-0 px-3 py-1.5 bg-white text-gray-600 text-xs  rounded-md">
                    24H Data
                </div>

                {/* Time Period Selector - Commented out due to limited API
                <div className="flex gap-1 bg-slate-100 p-1 rounded-lg flex-shrink-0">
                    {periods.map((period) => (
                        <button
                            key={period.value}
                            onClick={() => onPeriodChange(period.value)}
                            className={`px-2 md:px-3 py-1 text-[10px] md:text-xs font-semibold rounded transition-all ${selectedPeriod === period.value
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {period.label}
                        </button>
                    ))}
                </div>
                */}
            </div>

            <div className="flex-1 min-h-0 w-full">
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <AreaChart
                        data={data}
                        onMouseMove={(e: any) => {
                            if (e.activePayload && e.activePayload[0]) {
                                setHoverData(e.activePayload[0].payload);
                            }
                        }}
                        onMouseLeave={() => setHoverData(null)}
                    >
                        <defs>
                            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <XAxis
                            dataKey="date"
                            tickFormatter={(date) => formatDate(date, "axis")}
                            tick={{ fill: "#9ca3af", fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                            minTickGap={30}
                            hide={false}
                        />
                        <YAxis
                            domain={["auto", "auto"]}
                            tickFormatter={(val) => `$${val >= 1000 ? (val / 1000).toFixed(0) + 'k' : val.toLocaleString()}`}
                            tick={{ fill: "#9ca3af", fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                            width={45}
                        />
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const point = payload[0].payload;
                                    const pointIsPositive = point.price >= startPrice;
                                    const pointColor = pointIsPositive ? "#16a34a" : "#ef4444";

                                    return (
                                        <div className="bg-white p-3 rounded-md border-2" style={{ borderColor: pointColor }}>
                                            <p className="text-lg font-bold" style={{ color: pointColor }}>
                                                ${(payload[0].value as number).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {formatDate(point.date, "full")}
                                            </p>
                                            <p className="text-xs font-semibold mt-1" style={{ color: pointColor }}>
                                                {pointIsPositive ? '↑' : '↓'} {Math.abs(point.price - startPrice).toFixed(2)} ({((point.price - startPrice) / startPrice * 100).toFixed(2)}%)
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                            cursor={{ stroke: color, strokeWidth: 2 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke={color}
                            strokeWidth={3}
                            fill="url(#chartColor)"
                            animationDuration={1500}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}