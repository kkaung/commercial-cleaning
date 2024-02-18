import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Club & Pub Cleaning Service In ${location}`,
        description: `${location}'s top-rated club & pub cleaning! Keep your space spotless for happy patrons & booming business. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
