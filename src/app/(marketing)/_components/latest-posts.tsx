import { headingVariants } from '@/components/page-header';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn, formatDate } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LatestPostsProps extends HTMLAttributes<HTMLElement> {}

export default function LatestPost({ ...props }: LatestPostsProps) {
    return (
        <section id="latest-post" aria-labelledby="latest-post-heading">
            <h2 className={cn(headingVariants({}), 'md:text-center')}>
                Suggested Read About Cleaning
            </h2>
            <ul className="flex flex-nowrap overflow-x-scroll gap-6">
                {allPosts.map((post, idx) => (
                    <li key={idx} className="w-[300px]">
                        <article className="relative space-y-2">
                            <AspectRatio
                                ratio={16 / 9}
                                className="overflow-hidden rounded-xl relative mb-2"
                            >
                                <Image
                                    fill
                                    src={post.image}
                                    alt={`${post.title}`}
                                    className="h-fit w-fit object-cover"
                                />
                                <Link
                                    href={`/blog/${post.slugAsParams}`}
                                    className="absolute inset-0"
                                >
                                    <span className="sr-only">
                                        View Blog Post
                                    </span>
                                </Link>
                            </AspectRatio>
                            <Link href={`/blog/${post.slugAsParams}`}>
                                <h4 className="font-semibold text-lg leading-tight hover:underline">
                                    {post.title}
                                </h4>
                            </Link>
                            <p className="text-muted-foreground text-sm">
                                {formatDate(post.date)}
                            </p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}
