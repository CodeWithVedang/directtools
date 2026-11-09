import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TOOLS } from '@/lib/tools';
import { ToolIcon } from './ToolIcon';

const DEMO_CODE = ['K', '7', 'M', '2', 'Q', 'X'];

/** The hero's centrepiece: tell us what you want to do, land on the right tool. */
export function Picker() {
  return (
    <div id="pick" className="min-w-0 scroll-mt-20 rounded-2xl border border-line bg-surface p-4 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-line pb-4">
        <h2 className="text-lg font-bold">What do you want to do?</h2>
        <p className="flex items-center gap-1 font-mono text-sm font-bold tracking-widest text-accent" aria-hidden>
          {DEMO_CODE.map((c, i) => (
            <span key={i} className="code-char rounded-md border border-line bg-bg px-1.5 py-0.5" style={{ animationDelay: `${i * 90}ms` }}>
              {c}
            </span>
          ))}
        </p>
      </div>
      <ul className="mt-2">
        {TOOLS.map((t) => (
          <li key={t.slug}>
            <Link
              href={`/tools/${t.slug}`}
              className="group flex min-h-[64px] items-center gap-4 rounded-xl px-2 py-2.5 transition-colors hover:bg-line/50"
            >
              <ToolIcon name={t.icon} />
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{t.goal}</span>
                <span className="block truncate text-sm text-muted">{t.goalHint}</span>
              </span>
              <ArrowRight size={18} className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
