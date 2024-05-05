import { siteConfig } from '@/configs/site';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    return {
        title: `#1 Regular Cleaning Service in ${location} - ${siteConfig.name}`,
        description: `Best Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaner ✔️ Instant Online Booking`,
        alternates: {
            canonical: '/regular-cleaning-sydney',
        },
    };
};
