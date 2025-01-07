import { NextResponse } from 'next/server';
import { Buffer } from 'buffer';


function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
}

function processData(data, formattedDate) {
    let totalSeconds = 0;
    const languages = new Set();

    data.data.forEach((entry) => {
        totalSeconds += entry.duration;
        if (entry.language) {
            languages.add(entry.language);
        }
    });

    const date = new Date(formattedDate);
    const formattedDisplayDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);

    return {
        date: formattedDisplayDate,
        total_time: totalSeconds,
        formatted_time: formatTime(totalSeconds),
        languages: Array.from(languages),
    };
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
        return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 });
    }

    const apiKey = process.env.WAKATIME_API_KEY; // Securely access the API key
    if (!apiKey) {
        return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const url = `${'https://wakatime.com/api/v1/users/current/durations'}?date=${date}&slice_by=language&paywalled=true`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const processedData = processData(data, date);

        return NextResponse.json(processedData);
    } catch (error) {
        console.error('Error fetching Wakatime data:', error);
        return NextResponse.json({ error: 'Failed to fetch Wakatime data' }, { status: 500 });
    }
}
