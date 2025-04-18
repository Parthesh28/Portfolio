import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip } from "../app/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "../app/components/ui/card"
import { Skeleton } from "../app/components/ui/skeleton"
import CustomTooltip from '../components/Tooltip'
import useLanyardStatus from '../hooks/useLanyardStatus'
import { useEffect, useState, useMemo } from 'react'

const chartConfig = {
    desktop: {
        label: "Coding Time",
        color: "hsl(var(--primary))",
    },
}

// Format date to weekday abbreviation (Mon, Tue, Wed, etc.)
const formatDateToWeekday = (dateStr) => {
    if (!dateStr) return '';

    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    } catch (e) {
        console.error("Invalid date format:", dateStr, e);
        return dateStr;
    }
};

const LoadingSkeleton = () => {
    const skeletonData = [...Array(7)].map(() => ({
        value: 10 + Math.random() * 30
    }));

    return (
        <div className="space-y-4 animate-pulse">
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <Skeleton className="h-5 w-24 rounded-md" />
                    <Skeleton className="h-5 w-16 rounded-md" />
                </div>
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-12 rounded-md" />
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-16 rounded-md" />
                </div>
            </div>

            <div className="h-[250px] w-full mt-6">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skeletonData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="hsl(var(--muted-foreground)/0.1)"
                        />
                        <XAxis
                            axisLine={false}
                            tickLine={false}
                            tick={false}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={false}
                        />
                        <Bar
                            dataKey="value"
                            radius={[4, 4, 0, 0]}
                            fill="hsl(var(--muted-foreground)/0.1)"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-between mt-4">
                {[...Array(7)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-8 rounded-md" />
                ))}
            </div>
        </div>
    )
}

export default function CodingStatsCard({ data }) {
    const discordStatus = useLanyardStatus();
    const isLoading = !data || data.length === 0;
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        // Run on mount and when window resizes
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Process data to add formatted dates and calculate stats
    const { formattedData, totalHours, avgHoursPerDay } = useMemo(() => {
        if (!data || data.length === 0) {
            return { formattedData: [], totalHours: 0, avgHoursPerDay: 0 };
        }

        const processedData = data.map(item => ({
            ...item,
            weekday: formatDateToWeekday(item.date)
        }));

        const totalSeconds = processedData.reduce((sum, item) => sum + item.total_time, 0);
        const totalHours = totalSeconds / 3600;
        const avgHoursPerDay = totalHours / processedData.length;

        return {
            formattedData: processedData,
            totalHours: totalHours.toFixed(1),
            avgHoursPerDay: avgHoursPerDay.toFixed(1)
        };
    }, [data]);

    return (
        <Card className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl h-full">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-semibold">Coding Activity</CardTitle>

                    <div className="text-sm text-muted-foreground flex items-center">
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <Skeleton className="w-2 h-2 rounded-full" />
                                <Skeleton className="w-16 h-4 rounded-md" />
                            </span>
                        ) : (
                            <span className="flex items-center">
                                <span
                                    className={`w-2 h-2 rounded-full mr-2 ${discordStatus === 'online' ? 'bg-green-500' :
                                        discordStatus === 'idle' ? 'bg-yellow-500' :
                                            'bg-red-500'
                                        }`}
                                />
                                {discordStatus.charAt(0).toUpperCase() + discordStatus.slice(1)}
                            </span>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <LoadingSkeleton />
                ) : (
                    <ChartContainer config={chartConfig} className="h-[250px] w-full px-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={formattedData}
                                margin={{
                                    top: 10,
                                    right: isMobile ? 10 : 10,
                                    left: isMobile ? 10 : 0,
                                    bottom: 20
                                }}
                                barGap={isMobile ? 0 : 4}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="hsl(var(--muted-foreground)/0.15)"
                                />
                                <XAxis
                                    dataKey="weekday"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={8}
                                    tick={{
                                        fontSize: isMobile ? 10 : 12,
                                        fill: "hsl(var(--muted-foreground))"
                                    }}
                                    interval={0}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={isMobile ? 10 : 10}
                                    tick={{
                                        fontSize: isMobile ? 10 : 12,
                                        fill: "hsl(var(--muted-foreground))"
                                    }}
                                    tickFormatter={(value) => `${(value / 3600).toFixed(isMobile ? 1 : 1)}h`}
                                    width={isMobile ? 45 : 40}
                                    padding={{ top: 10 }}
                                />
                                <ChartTooltip content={<CustomTooltip />} />
                                <Bar
                                    dataKey="total_time"
                                    fill="hsl(var(--primary)/0.9)"
                                    radius={[4, 4, 0, 0]}
                                    maxBarSize={isMobile ? 30 : 50}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                )}

                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Total: {isLoading ? '-' : `${totalHours}h`}</span>
                    <span>Avg: {isLoading ? '-' : `${avgHoursPerDay}h/day`}</span>
                </div>
            </CardContent>
        </Card>
    )
}