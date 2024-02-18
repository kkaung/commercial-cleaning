import { siteConfig } from '@/configs/site';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Childcare Cleaning Service In ${location}`,
        description: `Trusted childcare cleaning across ${location}! ${siteConfig.name} provides expert services for a healthy environment. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
