import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Oven Cleaning Service in ${location} - Oven Cleaner ${location}`,
        description: `Best Oven Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaner ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'oven cleaning',
            'oven cleaning sydney',
            'oven cleaning service',
            'oven cleaning service sydney',
            'oven cleaner',
            'oven cleaner sydney',
        ],
    };
};
