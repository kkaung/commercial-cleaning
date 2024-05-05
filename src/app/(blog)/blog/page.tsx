import React from 'react';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import { allPosts } from 'contentlayer/generated';
import PostCard from './_components/post-card';

import type { Metadata } from 'next';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { BlogTabs } from './_components/blog-tabs';

export const metadata: Metadata = {
    title: `Expert House Cleaning Tips And Tricks Blog - ${siteConfig.title}`,
    description:
        'Uncover professional insights, expert advice, and clever hacks to make house cleaning a breeze. Get a clean home you love!',
    alternates: {
        canonical: '/blog',
    },
};

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center space-y-4">
                <PageHeaderHeading>
                    {siteConfig.name} House Cleaning Blog
                </PageHeaderHeading>
                <PageHeaderDescription size="sm" className="mx-auto">
                    Simple solutions for a clean home.
                </PageHeaderDescription>
            </PageHeader>
            <section className="mt-8">
                <BlogTabs />
                <div className="grid gap-6 grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3">
                    {allPosts.map((post, idx) => {
                        return <PostCard key={idx} post={post} />;
                    })}
                </div>
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </section>
        </Shell>
    );
}
