'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Reveals marketing sections as they scroll into view. Cards inside a grid or list come in one
 * after another. Content already on screen is left alone, nothing is hidden without JavaScript,
 * and nothing moves when the visitor prefers reduced motion. The app screens (/app) are skipped.
 */
export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById('main');
    if (!main) return;
    if (pathname.startsWith('/app')) {
      main.classList.remove('mk');
      return;
    }
    main.classList.add('mk');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const vh = window.innerHeight;
    const hidden: HTMLElement[] = [];
    const targets: HTMLElement[] = [];

    main.querySelectorAll<HTMLElement>(':scope > section:not(.hero-bg)').forEach((section) => {
      if (section.getBoundingClientRect().top < vh * 0.85) return;
      const items = Array.from(section.querySelectorAll<HTMLElement>('.grid > *, ol > li'));
      (items.length ? items : [section]).forEach((el, i) => {
        el.style.setProperty('--mk-i', String(i % 6));
        el.classList.add('mk-rv');
        targets.push(el);
      });
    });

    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add('mk-in');
          io.unobserve(el);
          // Hand the element back to its normal hover styles once it has settled.
          timers.push(
            window.setTimeout(() => {
              el.classList.remove('mk-rv', 'mk-in');
              el.style.removeProperty('--mk-i');
            }, 1200),
          );
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    targets.forEach((el) => {
      hidden.push(el);
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      hidden.forEach((el) => {
        el.classList.remove('mk-rv', 'mk-in');
        el.style.removeProperty('--mk-i');
      });
    };
  }, [pathname]);

  return null;
}
