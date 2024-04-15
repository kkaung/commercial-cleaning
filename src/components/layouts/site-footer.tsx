import Link from 'next/link';
import { siteConfig } from '@/configs/site';
import { Shell } from '@/components/shell';
import { Icons } from '@/components/icons';
import { cn, toTitleCase, unslugify } from '@/lib/utils';
import { type HTMLAttributes } from 'react';
import { Separator } from '@/components/ui/separator';

import Dot from '../dot';

interface SiteFooterProps extends HTMLAttributes<HTMLElement> {}

export default async function SiteFooter({ ...props }: SiteFooterProps) {
    return (
        <footer className="mx-auto w-full bg-secondary">
            <Shell as="div">
                <section
                    id="footer-content"
                    aria-labelledby="footer-content-heading"
                    className="flex flex-col gap-6 lg:flex-row lg:gap-8"
                >
                    <section
                        id="footer-branding"
                        aria-labelledby="footer-branding-heading"
                        className="w-full lg:max-w-sm"
                    >
                        <Link
                            aria-label="Home"
                            href="/"
                            className="text-2xl italic flex items-center space-x-2"
                        >
                            <span className="font-bold">{siteConfig.logo}</span>
                        </Link>
                        <p className="my-4 max-w-xs text-xs text-foreground/70 md:text-sm">
                            Reliable and professional commercial cleaning
                            services tailored to your unique needs. Enjoy a
                            spotless workspace and peace of mind with RZ Clean.
                        </p>
                        <div className="flex flex-col mt-2 space-y-2">
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.mail
                                    className="w-4 h-4 mr-1 inline"
                                    aria-hidden
                                />
                                <span className="sr-only">Email</span>
                                {siteConfig.business.email}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.phone
                                    className="w-4 h-4 mr-1 inline"
                                    aria-hidden
                                />
                                <span className="sr-only">Phone Number</span>
                                {siteConfig.business.phone}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.mapPin
                                    aria-hidden
                                    className="w-4 h-4 mr-1 inline"
                                />
                                <span className="sr-only">Office Address</span>
                                {siteConfig.business.address}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.clock
                                    aria-hidden
                                    className="w-4 h-4 mr-1 inline"
                                />
                                <span className="sr-only">
                                    Business Opening Hour
                                </span>
                                {siteConfig.business.openingHour}
                            </div>
                        </div>
                    </section>
                    <section
                        id="footer-links"
                        aria-labelledby="footer-links-heading"
                        className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
                    >
                        {siteConfig.footerNav.map(item => (
                            <div key={item.title} className="space-y-2">
                                <div className="text-sm font-medium leading-tight">
                                    {item.title}
                                </div>
                                <ul>
                                    {item.items.map(link => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="inline text-xs transition-colors line-clamp-1 text-foreground/70 font-medium hover:underline hover:text-foreground"
                                                title={toTitleCase(
                                                    unslugify(link.href)
                                                )}
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                </section>
                <Separator />
                <section
                    id="footer-bottom"
                    aria-labelledby="footer-bottom-heading"
                    className="flex items-center flex-col space-x-3 lg:flex-row lg:items-center"
                >
                    <div className="flex items-center flex-col gap-4 flex-1 text-xs leading-tight md:flex-row">
                        <div className="text-left">
                            © {new Date().getFullYear()} {siteConfig.name}.
                            <span>All rights reserved.</span>
                        </div>
                        <Dot className="hidden md:inline" />
                        <div className="flex items-center gap-4">
                            <Link href="/privacy" className="hover:underline">
                                Privacy
                            </Link>
                            <Dot />
                            <Link href="/terms" className="hover:underline">
                                Terms
                            </Link>
                        </div>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-x-6 gap-y-2 flex-wrap">
                        <Link
                            aria-label="Facebook"
                            target="_blank"
                            href={siteConfig.links.facebook}
                            rel="nofollow"
                            title="Facebook"
                        >
                            <Icons.facebook aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Instagram"
                            target="_blank"
                            href={siteConfig.links.instagram}
                            rel="nofollow"
                            title="Instagram"
                        >
                            <Icons.instagram aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Twitter"
                            target="_blank"
                            href={siteConfig.links.twitter}
                            rel="nofollow"
                            title="Twitter"
                        >
                            <Icons.twitter aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Youtube"
                            target="_blank"
                            href={siteConfig.links.youtube}
                            rel="nofollow"
                            title="Youtube"
                        >
                            <Icons.youtube aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Linkin"
                            target="_blank"
                            href={siteConfig.links.linkin}
                            rel="nofollow"
                            title="Linkin"
                        >
                            <Icons.linkin aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Pinterest"
                            target="_blank"
                            href={siteConfig.links.pinterest}
                            rel="nofollow"
                            title="Pinterest"
                        >
                            <Icons.pinterest aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="BUY NSW"
                            target="_blank"
                            href={siteConfig.links.buynsw}
                            title="NSW Government registered ICT supplier"
                        >
                            <Icons.sticker aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Trustpilot"
                            target="_blank"
                            href={siteConfig.links.trustpilot}
                            rel="nofollow"
                            title="Trustpilot"
                        >
                            <Icons.star aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Yelp"
                            target="_blank"
                            href={siteConfig.links.yelp}
                            rel="nofollow"
                            title="Yelp"
                        >
                            <Icons.yelp aria-hidden className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </Shell>
        </footer>
    );
}
