import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';

interface SponsorshipProps extends HTMLAttributes<HTMLElement> {}

export default function Sponsorship({ ...props }: SponsorshipProps) {
    return (
        <section className={cn(props.className, 'sr-only')}>
            <div>
                Looking for professional house cleaning services in Gold Coast?
                <Link href={siteConfig.links.coastmaid}>Coast Maid</Link>
                has you covered! Click here to visit their homepage and book
                your cleaning appointment today.
            </div>
        </section>
    );
}
