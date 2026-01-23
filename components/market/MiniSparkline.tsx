"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

interface MiniSparklineProps {
    data?: number[];
    isPositive: boolean;
}

export default function MiniSparkline({ data, isPositive }: MiniSparklineProps) {
    if (!data || data.length === 0) return null;

    const chartData = data.map((price) => ({ value: price }));
    const color = isPositive ? "#16a34a" : "#ef4444";

    return (
        <div className="w-16 h-8">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke={color}
                        strokeWidth={1.5}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
