import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `School Cleaning In ${location}`,
        description: `Top-rated school cleaning in ${location} for a safe & focused learning environment. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
