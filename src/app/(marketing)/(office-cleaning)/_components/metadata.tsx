import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Office Cleaning Service in ${location} - Office Cleaner ${location}`,
        description: `Best Office Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'commercial cleaning company',
            'commercial cleaning company sydney',
            'commercial cleaner',
            'commercial cleaner sydney',
            'commercial cleaning service',
            'commercial cleaning service sydney',
            'office cleaning service',
            'office cleaning service sydney',
            'office cleaner',
            'office cleaner sydney',
            'office cleaner near me',
        ],
    };
};
