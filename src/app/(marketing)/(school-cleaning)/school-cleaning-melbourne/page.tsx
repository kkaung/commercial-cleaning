import { getCityFromPath } from '@/lib/next';
import React from 'react';
import { type Metadata } from 'next';

import Content from '../_components/content';
import { getMetadata } from '../_components/metadata';

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
                    title: 'School Cleaning',
                    href: '/school-cleaning-melbourne',
                },
            ]}
        />
    );
}