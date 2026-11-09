import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import { FAQAccordion } from '@/components/marketing/FAQAccordion';
import { breadcrumbLd, faqLd, JsonLd } from '@/components/marketing/JsonLd';
import { SectionHead } from '@/components/marketing/PageShell';
import { ToolArt } from '@/components/marketing/ToolArt';
import { ToolCard } from '@/components/marketing/ToolCard';
import { ToolIcon } from '@/components/marketing/ToolIcon';
import { buttonClass } from '@/components/ui/Button';
import { pageMeta, SITE_URL } from '@/lib/site';
import { getTool, TOOLS } from '@/lib/tools';

export const dynamicParams = false;

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug);
  if (!tool) return {};
  return pageMeta({ title: tool.seoTitle, description: tool.seoDescription, path: `/tools/${tool.slug}` });
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug);
  if (!tool) notFound();
  const others = TOOLS.filter((t) => t.slug !== tool.slug);

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    url: tool.url,
    description: tool.seoDescription,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any (web browser)',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <JsonLd data={ld} />
      <JsonLd data={faqLd(tool.faqs)} />
      <JsonLd data={breadcrumbLd([{ name: 'Home', url: SITE_URL }, { name: 'All tools', url: `${SITE_URL}/tools` }, { name: tool.name, url: `${SITE_URL}/tools/${tool.slug}` }])} />

      <section className="hero-bg border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/tools" className="inline-flex min-h-[44px] items-center hover:text-fg">All tools</Link>
            <span aria-hidden> / </span>
            <span>{tool.name}</span>
          </nav>
          <div className="mt-2 flex items-center gap-3">
            <ToolIcon name={tool.icon} />
            <p className="text-lg font-bold">{tool.name}</p>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-6xl">{tool.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{tool.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={tool.url} className={buttonClass('primary', 'lg')}>
              Open {tool.name} <ArrowRight size={18} aria-hidden />
            </a>
            <Link href="/tools" className={buttonClass('secondary', 'lg')}>
              See all tools
            </Link>
          </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
            <ToolArt name={tool.icon} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20" aria-labelledby="features-heading">
        <div id="features-heading">
          <SectionHead title={`What ${tool.name} does`} />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {tool.features.map((f) => (
            <div key={f.title} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 leading-7 text-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-20 md:grid-cols-2" aria-labelledby="use-heading">
        <div>
          <h2 id="use-heading" className="text-2xl font-bold sm:text-3xl">Good for</h2>
          <ul className="mt-5 space-y-3">
            {tool.useCases.map((u) => (
              <li key={u} className="flex gap-3 leading-7">
                <Check size={20} className="mt-1 shrink-0 text-ok" aria-hidden />
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">How to use it</h2>
          <ol className="mt-5 space-y-4">
            {tool.steps.map((s, i) => (
              <li key={s} className="flex gap-3 leading-7">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-fg">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-20" aria-labelledby="tool-faq">
        <div id="tool-faq">
          <SectionHead title="Common questions" />
        </div>
        <div className="mt-10">
          <FAQAccordion items={tool.faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20" aria-labelledby="more-heading">
        <div id="more-heading">
          <SectionHead title="Other DirectTools" text="Same code pairing, same privacy, different job." />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      </section>
    </>
  );
}
