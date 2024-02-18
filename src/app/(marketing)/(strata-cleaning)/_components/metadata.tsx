import { siteConfig } from '@/configs/site';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Reliable Strata Cleaning Service In ${location}`,
        description: `Keep your ${location} Strata sparkling clean with ${siteConfig.name}! Reliable, professional cleaning services for common areas, lobbies, and more. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
