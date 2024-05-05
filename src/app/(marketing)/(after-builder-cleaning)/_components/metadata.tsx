import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 After Builder Cleaning Service in ${location} - Post Construction Cleaning ${location}`,
        description: `Best Builder Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'builder clean',
            'after builder cleaning',
            'after builder cleaning sydney',
            'builder cleaning service',
            'builder cleaning service',
            'post construction cleaning service',
            'post construction cleaning service sydney',
            'construction cleaning company',
            'construction cleaning company sydney',
        ],
    };
};
