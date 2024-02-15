'use client';

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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import HeroOneImage from '/public/assets/images/hero-one.jpeg';
import HeroTwoImage from '/public/assets/images/hero-two.jpeg';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location: string;
}

export default function Hero({ location, ...props }: HeroProps) {
    return (
        <PageHeader
            id="hero"
            aria-labelledby="hero-heading"
            className={cn(
                props.className,
                'grid grid-cols-1 gap-6 items-center md:grid-cols-2 md:gap-8'
            )}
        >
            <div className="space-y-6">
                <PageHeaderHeading size="lg">
                    Commercial Showroom Cleaning Company In {location}
                </PageHeaderHeading>
                <PageHeaderDescription>
                    We are a Sydney-based boutique law firm that provides full
                    Australian visa law visa services to individuals and
                    businesses Australia-wide and internationally. Let us help
                    you with your Australian visa.
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
                        Get A Quote
                    </Link>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <Carousel
                    className="w-full"
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <div className="overflow-hidden rounded-xl">
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="bg-secondary"
                                    >
                                        <Image
                                            fill
                                            src={HeroOneImage}
                                            alt="End Of Lease Cleaner"
                                            className="object-top object-cover bg-no-repeat"
                                        />
                                    </AspectRatio>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <div className="overflow-hidden rounded-xl">
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="bg-secondary"
                                    >
                                        <Image
                                            fill
                                            src={HeroTwoImage}
                                            alt="Moving Out Cleaner"
                                            className="object-top object-cover bg-no-repeat"
                                        />
                                    </AspectRatio>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </PageHeader>
    );
}
