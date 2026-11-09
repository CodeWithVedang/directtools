import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { TOOLS } from '@/lib/tools';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ['/', '/tools', ...TOOLS.map((t) => `/tools/${t.slug}`), '/faq', '/about', '/contact', '/privacy', '/terms'];
  return paths.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/tools') ? 0.8 : path === '/privacy' || path === '/terms' ? 0.3 : 0.6,
  }));
}
