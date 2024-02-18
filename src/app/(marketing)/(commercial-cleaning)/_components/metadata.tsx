import { siteConfig } from '@/configs/site';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Reliable Commercial Cleaning Experts In ${location}`,
        description: `Don't stress about cleaning! ${siteConfig.name} provides trustworthy and affordable cleaning solutions for businesses of all sizes in ${location}. Request a free quote!`,
        alternates: {
            canonical: pathname,
        },
    };
};
