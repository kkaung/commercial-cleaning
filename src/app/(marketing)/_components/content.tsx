import { Shell } from '@/components/shell';
import React, { HTMLAttributes } from 'react';

import Hero from './hero';
import Reviews from './reviews';
import Features from './features';
import FAQs from './faqs';
import LatestPost from './latest-posts';

interface ContentProps extends HTMLAttributes<HTMLElement> {
    city: string;
}
export default function Content({ city, ...props }: ContentProps) {
    return (
        <Shell>
            <Hero />
            <Reviews />
            <Features />
            <FAQs />
            <LatestPost />
        </Shell>
    );
}
