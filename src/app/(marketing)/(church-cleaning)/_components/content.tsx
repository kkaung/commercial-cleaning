import { Shell } from '@/components/shell';
import React from 'react';
import Hero from './hero';
import FAQs from './faqs';
import Reviews from './reviews';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';

import LatestPosts from '../../_components/latest-posts';
import Features from './features';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell>
                <Hero location={city} />
                <Reviews location={city} />
                <Features location={city} />
                <FAQs />
                <LatestPosts />
                <Breadcrumbs segments={segments} dottable={false} />
            </Shell>
        </>
    );
}
