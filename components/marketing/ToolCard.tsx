import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Tool } from '@/lib/tools';
import { ToolArt } from './ToolArt';
import { ToolIcon } from './ToolIcon';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface">
      <div className="border-b border-line">
        <ToolArt name={tool.icon} />
      </div>
      <div className="flex flex-1 flex-col p-5">
      <h3 className="text-xl font-bold">
        <Link href={`/tools/${tool.slug}`} className="hover:text-accent">
          {tool.name}
        </Link>
      </h3>
      <p className="mt-2 flex-1 leading-7 text-muted">{tool.summary}</p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
        <a
          href={tool.url}
          className="inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-accent hover:underline"
        >
          Open {tool.name} <ExternalLink size={15} aria-hidden />
        </a>
        <Link href={`/tools/${tool.slug}`} className="inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-muted hover:text-fg">
          Details <ArrowRight size={15} aria-hidden />
        </Link>
      </div>
      </div>
    </article>
  );
}
