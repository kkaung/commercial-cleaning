import React from 'react';
import { type Metadata } from 'next';

import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { getPathname } from '@/lib/next';
import AccordionItemList from '@/components/accordion-item-list';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
    const pathname = getPathname();

    return {
        title: 'Frequently Asked Questions About Commercial Cleaning',
        description: `Find the answers you're looking for commercial cleaning service.`,
        alternates: {
            canonical: pathname,
        },
    };
}

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    {
                        title: 'Home',
                        href: '/',
                    },
                    {
                        title: 'FAQs',
                        href: '/frequently-asked-questions',
                    },
                ]}
                dottable={false}
            />
            <PageHeader
                id="hero"
                aria-labelledby="hero-heading"
                className="text-center"
            >
                <PageHeaderHeading>
                    Frequently Asked Questions
                </PageHeaderHeading>
            </PageHeader>
            <AccordionItemList items={[]} />
        </Shell>
    );
}
