import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Reliable Supermarket Cleaning Service In ${location}`,
        description: `Reliable & flexible cleaning for ${location}'s supermarkets! We clean everything from aisles to restrooms, tailored to your needs. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
