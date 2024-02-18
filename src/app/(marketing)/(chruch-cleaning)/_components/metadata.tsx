import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Church Cleaning Service In ${location}`,
        description: `${location}'s trusted church cleaning for a pristine, welcoming environment. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
