import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip } from "../app/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "../app/components/ui/card"
import { Skeleton } from "../app/components/ui/skeleton"
import CustomTooltip from '../components/Tooltip'
import useLanyardStatus from '../hooks/useLanyardStatus'

const chartConfig = {
    desktop: {
        label: "Coding Time",
        color: "hsl(var(--primary))",
    },
}

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

    return (
        <Card className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm h-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Activity</CardTitle>
                <div className="text-sm text-muted-foreground flex items-center">
                    Status:
                    {isLoading ? (
                        <span className="flex items-center ml-2 gap-2">
                            <Skeleton className="w-2 h-2 rounded-full" />
                            <Skeleton className="w-16 h-4 rounded-md" />
                        </span>
                    ) : (
                        <span className="flex items-center ml-2">
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
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <LoadingSkeleton />
                ) : (
                    <ChartContainer config={chartConfig} className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={10}
                                    tick={{ fontSize: 12 }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={10}
                                    tick={{ fontSize: 12 }}
                                    tickFormatter={(value) => `${(value / 3600).toFixed(1)}h`}
                                />
                                <ChartTooltip content={<CustomTooltip />} />
                                <Bar dataKey="total_time" fill="hsl(var(--primary)/0.8)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    )
}