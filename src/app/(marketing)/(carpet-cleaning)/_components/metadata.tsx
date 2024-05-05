import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Carpet Cleaning Service in ${location}`,
        description: `Best Carpet Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: '/carpet-cleaning-sydney',
        },
        keywords: [
            'carpet cleaning',
            'carpet cleaning service',
            'carpet cleaning service sydney',
            'carpet cleaning company',
            'carpet cleaning company sydney',
            'carpet cleaner',
            'carpet cleaner sydney',
            'carpet cleaner near me',
            'carpet cleaning service near me',
        ],
    };
};
