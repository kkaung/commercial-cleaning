import { type MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages, allAuthors } from 'contentlayer/generated';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const authorsRoutes = allAuthors.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        '',
        '/blog',

        '/commercial-cleaning-sydney',
        '/commercial-cleaning-melbourne',

        '/office-cleaning-sydney',
        '/office-cleaning-melbourne',

        '/strata-cleaning-sydney',
        '/strata-cleaning-melbourne',

        '/medical-cleaning-sydney',
        '/medical-cleaning-melbourne',

        '/gym-cleaning-sydney',
        '/gym-cleaning-melbourne',

        '/childcare-cleaning-sydney',
        '/childcare-cleaning-melbourne',

        '/hotel-cleaning-sydney',
        '/hotel-cleaning-melbourne',

        '/school-cleaning-sydney',
        '/school-cleaning-melbourne',

        '/warehouse-cleaning-sydney',
        '/warehouse-cleaning-melbourne',

        '/church-cleaning-sydney',
        '/church-cleaning-melbourne',

        '/club-cleaning-sydney',
        '/club-cleaning-melbourne',

        '/supermarket-cleaning-sydney',
        '/supermarket-cleaning-melbourne',

        '/restaurant-cleaning-sydney',
        '/restaurant-cleaning-melbourne',

        '/showroom-cleaning-sydney',
        '/showroom-cleaning-melbourne',
    ].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes, ...postsRoutes, ...authorsRoutes];
}
