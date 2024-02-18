import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Aged Care Cleaning Service In ${location}`,
        description: `Top-rated aged care cleaning in ${location}. We guarantee a sanitized and comfortable living space for your ${location} residents Get a free quote today!
`,
        alternates: {
            canonical: pathname,
        },
    };
};
