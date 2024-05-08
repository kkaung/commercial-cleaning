import { headers } from 'next/headers';
import { toTitleCase } from './utils';

export const getPathname = () => {
    const _headers = headers();

    const pathname = _headers.get('x-pathname') || '';

    return pathname;
};

export const checkUserAgentForGooglebot = () => {
    const headersList = headers();

    const userAgent = headersList.get('user-agent');

    const isGooglebot = /Googlebot/i.test(userAgent!);

    return isGooglebot;
};

export const getCityFromPath = () => {
    const _headers = headers();

    const pathname = _headers.get('x-pathname') || '';

    const pathSegments = pathname.split('/');

    const cityName = toTitleCase(pathSegments[1].split('-').pop()!);

    return cityName !== undefined && cityName !== null && cityName !== ''
        ? cityName
        : 'Australia';
};
