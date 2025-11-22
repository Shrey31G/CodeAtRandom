
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { data: topStories } = await axios.get(
            'https://hacker-news.firebaseio.com/v0/topstories.json'
        );

        const storyPromises = topStories
            .slice(0, 5)
            .map((id: string) =>
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            );

        const stories = await Promise.all(storyPromises);

        return NextResponse.json(
            stories.map(s => s.data)
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch news' },
            { status: 500 }
        );
    }
}