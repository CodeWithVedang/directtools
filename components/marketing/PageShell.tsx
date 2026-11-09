import type { ReactNode } from 'react';

export function SectionHead({ title, text }: { title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {text ? <p className="mt-3 text-lg leading-8 text-muted">{text}</p> : null}
    </div>
  );
}

/** Plain text page (about, privacy, terms, contact). */
export function PageShell({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
      {intro ? <p className="mt-4 text-lg leading-8 text-muted">{intro}</p> : null}
      <div className="prose-page mt-8">{children}</div>
    </div>
  );
}
