'use client';

import * as React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import posthog from 'posthog-js';

import { PostHogProvider } from 'posthog-js/react';
import dynamic from 'next/dynamic';

export function Providers({ children, ...props }: React.PropsWithChildren) {
    return (
        <>
            <PostHogProvider client={posthog}>
                <TooltipProvider>{children}</TooltipProvider>
            </PostHogProvider>
        </>
    );
}
