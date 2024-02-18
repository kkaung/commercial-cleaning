import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Showroom Cleaning Service In ${location}`,
        description: `${location}'s top showroom cleaning: Elevate your brand, impress clients, boost sales with dazzling showroom shine.Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
