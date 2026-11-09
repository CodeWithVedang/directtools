'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { buttonClass } from '@/components/ui/Button';
import { TOOLS } from '@/lib/tools';

export const NAV_LINKS = [
  { href: '/tools', label: 'All tools' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  // Portal to <body>: the sticky header uses backdrop-filter, which would otherwise become the
  // containing block for this fixed overlay and push the sheet off-screen.
  return createPortal(
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl border-t border-line bg-surface p-5 pb-8 shadow-2xl"
      >
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-line" aria-hidden />
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">Menu</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl hover:bg-line/60"
          >
            <X size={22} aria-hidden />
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-3 flex flex-col gap-1">
          {[{ href: '/', label: 'Home' }, ...NAV_LINKS].map((l) => (
            <Link key={l.href} href={l.href} onClick={onClose} className="flex min-h-[48px] items-center rounded-xl px-3 text-base font-medium hover:bg-line/60">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="mt-4 px-3 text-sm font-semibold text-muted">The tools</p>
        <ul className="mt-1 flex flex-col gap-1">
          {TOOLS.map((t) => (
            <li key={t.slug}>
              <Link href={`/tools/${t.slug}`} onClick={onClose} className="flex min-h-[48px] items-center rounded-xl px-3 text-base font-medium hover:bg-line/60">
                {t.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
