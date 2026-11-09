import Link from 'next/link';
import { AUTHOR_NAME, AUTHOR_URL, SITE_NAME, TAGLINE } from '@/lib/site';
import { TOOLS } from '@/lib/tools';
import { Wordmark } from './Logo';
import { ShareButton } from '@/components/marketing/ShareButton';

const GROUPS = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">{TAGLINE}</p>
          <div className="mt-4">
            <ShareButton />
          </div>
        </div>
        <nav aria-label="Tools">
          <p className="text-sm font-semibold text-muted">Tools</p>
          <ul className="mt-3 space-y-1">
            {TOOLS.map((t) => (
              <li key={t.slug}>
                <Link href={`/tools/${t.slug}`} className="inline-flex min-h-[44px] min-w-[44px] items-center text-sm font-medium hover:text-accent">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {GROUPS.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <p className="text-sm font-semibold text-muted">{g.title}</p>
            <ul className="mt-3 space-y-1">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-[44px] min-w-[44px] items-center text-sm font-medium hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-muted">
          <span>© {new Date().getFullYear()} {SITE_NAME}</span>
          <span>
            Built by{' '}
            <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center font-semibold text-fg hover:text-accent">
              {AUTHOR_NAME}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
