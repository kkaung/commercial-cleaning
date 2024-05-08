import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/people/RZ-Clean/61556268283106/',
    twitter: 'https://twitter.com/rzclean_au',
    instagram: 'https://instagram.com/rzclean_au',
    pinterest: 'https://www.pinterest.com.au/rzclean_au',
    linkin: 'https://www.linkedin.com/company/rzclean/',
    youtube: 'https://www.youtube.com/channel/UCBNVu3ROfR33-6MfIkOXa9Q',

    googlemap:
        'https://www.google.com/maps/place/RZClean/@-33.8787396,150.7297722,11z/data=!4m6!3m5!1s0x6b12b1db31154a65:0x7a1b397d9cd853c7!8m2!3d-33.8973489!4d151.2024981!16s%2Fg%2F11y435t1xh?entry=ttu',

    trustpilot: 'https://au.trustpilot.com/review/rzclean.com.au',
};

export const siteConfig = {
    logo: 'RZ Clean Sydney',
    name: 'RZ Clean Sydney',
    title: `RZ Clean Sydney`,
    description: '',
    url: 'https://rzclean.com.au',
    ogImage: 'https://rzclean.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Spring Cleaning',
                    href: '/spring-cleaning-sydney',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-sydney',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-sydney',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-sydney',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-sydney',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-sydney',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-sydney',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-sydney',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Spring Cleaning Sydney',
                    href: '/spring-cleaning-sydney',
                },
                {
                    title: 'Regular Cleaning Sydney',
                    href: '/regular-cleaning-sydney',
                },
                {
                    title: 'End Of Lease Cleaning Sydney',
                    href: '/end-of-lease-cleaning-sydney',
                },
                {
                    title: 'Carpet Cleaning Sydney',
                    href: '/carpet-cleaning-sydney',
                },
                {
                    title: 'Office Cleaning Sydney',
                    href: '/office-cleaning-sydney',
                },
                {
                    title: 'Window Cleaning Sydney',
                    href: '/window-cleaning-sydney',
                },
                {
                    title: 'Oven Cleaning Sydney',
                    href: '/oven-cleaning-sydney',
                },
                {
                    title: 'After Builder Cleaning Sydney',
                    href: '/after-builder-cleaning-sydney',
                },
                {
                    title: 'House Cleaning Service Sydney',
                    href: '/',
                },
            ],
        },
        {
            title: 'Userful Links',
            items: [
                {
                    title: 'Blog',
                    href: '/blog',
                },
                {
                    title: 'Pricing',
                    href: '/pricing',
                },
                {
                    title: 'Products',
                    href: '/products',
                },
                {
                    title: 'FAQs',
                    href: '/faqs',
                },
                {
                    title: 'Contact Us',
                    href: '/contact',
                },
                {
                    title: 'Terms And Conditions',
                    href: '/terms',
                },
                {
                    title: 'Privacy Policy',
                    href: '/privacy',
                },
            ],
        },
        {
            title: 'Company',
            items: [
                {
                    title: 'About Us',
                    href: '/about',
                },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@rzclean.com.au',
        phone: '+61 414076980',
        address: 'Unit 402/249 George Street, Waterloo, NSW 2017',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 727,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
