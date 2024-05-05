import { getCityFromPath } from '@/lib/next';
import React from 'react';
import { type Metadata } from 'next';
import { getMetadata } from '../_components/metadata';
import Content from '../_components/contnet';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPath();

    return getMetadata(city);
}

export default function Page() {
    const city = getCityFromPath();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-sydney',
                },
            ]}
        />
    );
}
