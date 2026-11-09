import { WORDMARK } from '@/lib/site';

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <rect width="32" height="32" rx="8" fill="rgb(var(--accent))" />
      <path d="M9 22L16 10l7 12" stroke="rgb(var(--accent-fg))" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      <circle cx="9" cy="22" r="2.6" fill="rgb(var(--accent-fg))" />
      <circle cx="16" cy="10" r="2.6" fill="rgb(var(--accent-fg))" />
      <circle cx="23" cy="22" r="2.6" fill="rgb(var(--accent-fg))" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex items-center gap-2 font-display text-[1.15rem] font-bold tracking-tight">
      <LogoMark />
      <span>
        {WORDMARK[0]}
        <span className="text-accent">{WORDMARK[1]}</span>
      </span>
    </span>
  );
}
