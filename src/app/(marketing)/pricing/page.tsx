import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Metadata } from 'next';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { siteConfig } from '@/configs/site';

import FAQs from '../_components/faqs';

export const metadata: Metadata = {
    title: 'House Cleaning Prices in Sydney',
    description: `Get crystal clear pricing on Sydney's top-rated house cleaning services. Find the perfect fit for your budget and needs, with options from weekly refreshes to deep dives.`,
    alternates: {
        canonical: '/pricing',
    },
};

const pricingList = [
    {
        title: '1 Bedroom, 1 Bathroom',
        price: '$339',
    },
    {
        title: '2 Bedroom, 1 Bathroom',
        price: '$400',
    },
    {
        title: '3 Bedroom, 2 Bathroom',
        price: '$469',
    },
    {
        title: '4 Bedroom, 2 Bathroom',
        price: '$549',
    },
    {
        title: '4 Bedroom, 3 Bathroom',
        price: '$579',
    },
    {
        title: '5 Bedroom, 3 Bathroom',
        price: '$659',
    },
    {
        title: '6 Bedroom, 3 Bathroom',
        price: '$709',
    },
];

export default function Page() {
    return (
        <Shell as="article">
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Pricing', href: '/pricing' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center">
                <PageHeaderHeading>
                    House Cleaning Pricing in Sydney
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    <time
                        dateTime={'2024-01-04T00:00:00.000Z'}
                        className="block text-sm text-muted-foreground mb-2"
                    >
                        Updated on {formatDate('2024-01-04T00:00:00.000Z')}
                    </time>
                </PageHeaderDescription>
            </PageHeader>
            <section className="broder max-w-xl mx-auto w-full">
                <Table>
                    <TableCaption>A list of cleaning prices.</TableCaption>
                    <TableHeader>
                        <TableRow className="text-base">
                            <TableHead className="w-[300px]">
                                Home / Apartment
                            </TableHead>
                            <TableHead>Pricing</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pricingList.map(p => (
                            <TableRow key={p.title} className="text-base">
                                <TableCell className="font-medium">
                                    {p.title}
                                </TableCell>
                                <TableCell>{p.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            <FAQs />
            <section className="bg-secondary/50 p-6 rounded-lg space-y-4 my-8 max-w-xl mx-auto">
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{siteConfig.name}</h3>
                    <p className="text-sm">
                        <Link href="/">{siteConfig.title}</Link> is a top-rated
                        house cleaning company in Sydney. We offer tailored
                        cleaning services for your homes, apartments and
                        offices.
                    </p>
                </div>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm">
                    <li>
                        <Link
                            href="/deep-cleaning-sydney"
                            title="Deep Cleaning Service In Sydney"
                        >
                            Deep Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/regular-cleaning-sydney"
                            title="Regular Cleaning Service In Sydney"
                        >
                            Regular Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/end-of-lease-cleaning-sydney"
                            title="End Of Lease Cleaning Service In Sydney"
                        >
                            End Of Lease Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/end-of-lease-cleaning-sydney"
                            title="End Of Lease Cleaning Service In Sydney"
                        >
                            Office Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/end-of-lease-cleaning-sydney"
                            title="End Of Lease Cleaning Service In Sydney"
                        >
                            Oven Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/carpet-cleaning-sydney"
                            title="Carpet Cleaning Service In Sydney"
                        >
                            Carpet Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/window-cleaning-Sydney"
                            title="Window Cleaning Service In Sydney"
                        >
                            Window Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/after-builder-cleaning-sydney"
                            title="After Builder Cleaning Service In Sydney"
                        >
                            After Builder Cleaning
                        </Link>
                    </li>
                </ul>
            </section>
        </Shell>
    );
}
