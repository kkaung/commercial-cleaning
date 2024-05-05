import { siteConfig } from '@/configs/site';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Window Cleaning Service in ${location} - Window Cleaner ${location}`,
        description: `Best Window Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Bond Cleaning ✔️ Trusted & Vetted Cleaner ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'window cleaning',
            'window cleaning service',
            'window cleaning service sydney',
            'window cleaning service near me',
            'window cleaner',
            'window cleaner sydney',
            'window cleaner near me',
            'window cleaning company',
            'window cleaning company sydney',
            'residental window cleaning',
        ],
    };
};
