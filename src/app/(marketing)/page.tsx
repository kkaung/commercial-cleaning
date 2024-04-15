import React from 'react';
import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import { getPathname } from '@/lib/next';

import Hero from './_components/hero';
import LatestPost from './_components/latest-posts';
import FAQs from './_components/faqs';
import Reviews from './_components/reviews';
import Features from './_components/features';
import Sponsorship from './_components/sponsorship';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
    const pathname = getPathname();

    return {
        title: `Australia's Most Reliable Commercial Cleaning Company`,
        description: `Get a sparkling clean workspace today! Boost your employee wellbeing & productivity with our reliable commercial cleaning services across Australia.`,
        alternates: {
            canonical: pathname,
        },
    };
}

export default function Page() {
    return (
        <Shell>
            <Hero />
            <Reviews />
            <Features />
            <FAQs />
            <LatestPost />
            <Sponsorship />
        </Shell>
    );
}
