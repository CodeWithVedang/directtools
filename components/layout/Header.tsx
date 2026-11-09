'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { buttonClass } from '@/components/ui/Button';
import { Wordmark } from './Logo';
import { MobileMenu, NAV_LINKS } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex min-h-[44px] items-center" aria-label="DirectTools home">
            <Wordmark />
          </Link>
          <nav aria-label="Main" className="hidden items-center md:flex">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="flex min-h-[44px] items-center px-3 text-sm font-medium text-muted transition-colors hover:text-fg">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link href="/#pick" className={buttonClass('dark', 'md', 'hidden md:inline-flex')}>
            Pick a tool <ArrowRight size={16} aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-line/60 md:hidden"
          >
            <Menu size={22} aria-hidden />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={close} />
    </header>
  );
}
