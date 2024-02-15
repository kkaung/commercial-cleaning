import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Medical Center Cleaning Service In ${location}`,
        description: `Looking for professional medical centre cleaning services in ${location}? We provide affordable and highly efficient medical cleaning services. Contact us today!`,
        alternates: {
            canonical: pathname,
        },
    };
};
