import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Restaurant Cleaning Service In ${location}`,
        description: `From kitchens to dining areas, we clean it all! Reliable restaurant cleaning in ${location} for a top-to-bottom fresh feel. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
