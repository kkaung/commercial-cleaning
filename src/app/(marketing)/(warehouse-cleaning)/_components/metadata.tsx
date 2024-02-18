import { siteConfig } from '@/configs/site';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Warehouse Cleaning Service In ${location}`,
        description: `Reliable warehouse cleaning in ${location} for a top-to-bottom fresh feel.${siteConfig.name} provides expert services for all types of warehouses. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
