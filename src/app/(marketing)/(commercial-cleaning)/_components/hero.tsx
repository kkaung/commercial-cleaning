import Dot from '@/components/dot';
import { Icons } from '@/components/icons';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location: string;
}

export default function Hero({ location, ...props }: HeroProps) {
    return (
        <PageHeader
            id="hero"
            aria-labelledby="hero-heading"
            className={cn(props.className, 'space-y-6')}
        >
            <PageHeaderHeading size="lg">
                {location}&apos;s Most In Demand <br /> Commercial Cleaning
                Company
            </PageHeaderHeading>
            <PageHeaderDescription>
                We are a Sydney-based boutique law firm that provides full
                Australian visa law visa services to individuals and businesses
                Australia-wide and internationally. Let us help you with your
                Australian visa.
            </PageHeaderDescription>
            <div className="space-y-3 leading-tight">
                <div className="flex items-center">
                    <Icons.check
                        className="w-4 h-4 mr-2"
                        aria-hidden
                        strokeWidth={3}
                    />
                    <p>
                        Proactive migration support for individuals and
                        businesses
                    </p>
                </div>
                <div className="flex items-center">
                    <Icons.check
                        className="w-4 h-4 mr-2"
                        aria-hidden
                        strokeWidth={3}
                    />
                    <p>
                        Experienced at successfully appealing at court and
                        tribunals
                    </p>
                </div>
            </div>
            <div className="flex gap-1 items-center text-sm">
                <Icons.starFull className="w-4 h-4 text-pink-500" />
                <span className="font-semibold">
                    {siteConfig.rating.ratingValue}
                </span>
                <Dot />
                <span className="text-muted-foreground underline">
                    {siteConfig.rating.ratingCount} reviews
                </span>
            </div>
            <div>
                <Link
                    href="/send-inquire"
                    className={cn(buttonVariants({ size: 'lg' }))}
                >
                    Enquire Wit Us
                </Link>
            </div>
        </PageHeader>
    );
}
