import { Clock, Code } from 'lucide-react';


export default function CustomTooltip({ active, payload }){
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 max-w-xs">
                <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-100">{data.date}</h3>
                <div className="flex items-center mb-3 text-zinc-600 dark:text-zinc-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{data.formatted_time}</span>
                </div>
                <div>
                    <div className="flex items-center mb-2">
                        <Code className="w-4 h-4 mr-2 text-zinc-600 dark:text-zinc-300" />
                        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">Languages:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {data.languages.map((lang, index) => (
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
};

