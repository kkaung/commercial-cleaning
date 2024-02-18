import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Hotel Cleaning Service In ${location}`,
        description: `Top-rated hotel cleaning in ${location} for a memorable stay. Trained & insured cleaners, We clean your hotel responsibly and effectively. Get a free quote today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
