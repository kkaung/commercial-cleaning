import { siteConfig } from '@/configs/site';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Spring Cleaning Service in ${location} - Deep Cleaning ${location}`,
        description: `Best Spring Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning Service ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'deep cleaning',
            'deep clean',
            'deep cleaning service',
            'deep cleaning sydney',
            'spring cleaning',
            'spring cleaning service',
            'spring cleaning service sydney',
            'spring cleaning sydney',
            'spring cleaner sydney',
            'spring cleaning near me',
        ],
    };
};
