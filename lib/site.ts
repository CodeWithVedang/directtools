import type { Metadata } from 'next';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://directtools.vercel.app').replace(/\/$/, '');
export const SITE_NAME = 'DirectTools';
/** Wordmark halves: plain text, then the accented part. */
export const WORDMARK = ['direct', 'tools'] as const;
export const CONTACT_EMAIL = 'shelatkarvedang2@gmail.com';
export const AUTHOR_NAME = 'CodeWithVedang';
export const AUTHOR_URL = 'https://github.com/CodeWithVedang';
export const TAGLINE = 'Five free tools to share anything between two devices. No account.';

/** Build per-page metadata. Keep `title` <= 60 chars and `description` <= 160 chars. */
export function pageMeta(opts: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE_URL}${opts.path === '/' ? '' : opts.path}`;
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'DirectTools: five peer-to-peer tools' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}
