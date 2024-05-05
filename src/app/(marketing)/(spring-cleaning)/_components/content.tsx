import { Shell } from '@/components/shell';
import React from 'react';
import FAQs from './faqs';
import Reviews from './reviews';

import { Breadcrumbs } from '@/components/pagers/breadcrumbs';

import LatestPosts from '../../_components/latest-posts';
import Hero from './hero';

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
                <FAQs />
                <LatestPosts />
                <Breadcrumbs segments={segments} dottable={false} />
            </Shell>
        </>
    );
}
