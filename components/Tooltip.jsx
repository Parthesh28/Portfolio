import { Clock, Code } from 'lucide-react';

export default function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        const topLanguages = data.languages.slice(0, 3);

        return (
            <div className="bg-zinc-100/90 dark:bg-zinc-900/90 backdrop-blur-3xl  p-4 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 w-64">
                <h3 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-100">{data.date}</h3>
                <div className="flex items-center mb-3 text-zinc-600 dark:text-zinc-300">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">Active Time: {data.formatted_time}</span>
                </div>
                <div>
                    <div className="flex items-center mb-2">
                        <Code className="w-4 h-4 mr-2 text-zinc-600 dark:text-zinc-300 flex-shrink-0" />
                        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">Languages Used:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {topLanguages.map((lang, index) => (
                            <span
                                key={index}
                                className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    return null;
}