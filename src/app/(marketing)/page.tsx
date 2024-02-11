import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';
import { BreadcrumbJsonLd, OrganizationJsonLd } from 'next-seo';

import { absoluteUrl } from '@/lib/utils';
import { siteConfig } from '@/configs/site';
import Hero from './_components/hero';
import LatestPost from './_components/latest-posts';
import FAQs from './_components/faqs';
import Reviews from './_components/reviews';
import Features from './_components/features';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: ``,
    description: ``,
};

export default function Page() {
    return (
        <>
            <Shell>
                <Hero />
                <Reviews />
                <Features />
                <FAQs />
                <LatestPost />
            </Shell>
            <OrganizationJsonLd
                useAppDir
                id={absoluteUrl('')}
                type=""
                name={siteConfig.name}
                description={siteConfig.description}
                legalName={siteConfig.name}
                url={absoluteUrl('')}
                logo={absoluteUrl('/')}
                sameAs={[siteConfig.links.facebook, siteConfig.links.linkin]}
                address={{
                    streetAddress: '101/ 761 - 763 George St Haymarket',
                    addressLocality: 'Sydney',
                    addressRegion: 'NSW',
                    postalCode: '2000',
                    addressCountry: 'AU',
                }}
                aggregateRating={{
                    ratingValue: siteConfig.rating.ratingValue,
                    ratingCount: siteConfig.rating.ratingCount,
                }}
                brand={{
                    name: siteConfig.name,
                }}
            />
            <BreadcrumbJsonLd
                useAppDir
                itemListElements={[
                    {
                        position: 1,
                        name: 'Home',
                        item: absoluteUrl('/'),
                    },
                ]}
            />
        </>
    );
}
