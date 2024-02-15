import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Strata Cleaning Service In ${location}`,
        description: `Our professional strata cleaning services in Sydney are tailored to meet your unique needs. Contact us today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
