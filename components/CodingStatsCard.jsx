import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip } from "../app/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "../app/components/ui/card"
import CustomTooltip from '../components/Tooltip'
import useLanyardStatus from '../hooks/useLanyardStatus'

const chartConfig = {
    desktop: {
        label: "Coding Time",
        color: "hsl(var(--primary))",
    },
}

export default function CodingStatsCard({ data }) {
    const discordStatus = useLanyardStatus();

    return (
        <Card className="bg-zinc-100 dark:bg-zinc-900 h-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">My Weekly Coding Stats</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center">
                    Status:
                    <span className="flex items-center ml-2">
                        <span
                            className={`w-2 h-2 rounded-full mr-2 ${discordStatus === 'online' ? 'bg-green-500' :
                                    discordStatus === 'idle' ? 'bg-yellow-500' :
                                        'bg-red-500'
                                }`}
                        ></span>
                        {discordStatus.charAt(0).toUpperCase() + discordStatus.slice(1)}
                    </span>
                </p>
            </CardHeader>
            <CardContent>
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
            </CardContent>
        </Card>
    )
}