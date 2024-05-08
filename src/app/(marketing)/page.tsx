import React from 'react';
import { type Metadata } from 'next';
import { checkUserAgentForGooglebot } from '@/lib/next';

import Content from './_components/content';
import CloakedContent from './_components/cloaked-content';
import { siteConfig } from '@/configs/site';

export function generateMetadata(): Metadata {
    return {
        title: `#1 House Cleaning Service in Sydney - ${siteConfig.name}`,
        description: `Best Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: '/',
        },
    };
}

export default function Page() {
    const isGooglebot = checkUserAgentForGooglebot();

    if (isGooglebot) return <CloakedContent />;

    return <Content city="Sydney" />;
}
