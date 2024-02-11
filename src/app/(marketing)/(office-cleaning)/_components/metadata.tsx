import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `End Of Lease Cleaning ${location} - Bond Cleaning`,
        description: `Professional End of Lease Cleaning Service In ${location} with 100% Bond Back Guarantee and the Lowest Price Guaranteed. Book online in 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
};
