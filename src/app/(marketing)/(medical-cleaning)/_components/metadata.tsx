import { siteConfig } from '@/configs/site';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Reliable Medical Center Cleaning Service In ${location}`,
        description: `Eco-friendly medical center cleaning in ${location}! ${siteConfig.name} prioritizes patient safety & sustainability. Get a free quote & experience the difference!`,
        alternates: {
            canonical: pathname,
        },
    };
};
