import { ChevronDown } from 'lucide-react';
import type { Faq } from '@/lib/tools';

export function FAQAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-surface">
      {items.map((item) => (
        <details key={item.q} className="group px-5">
          <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown size={20} className="shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <p className="pb-4 leading-7 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
