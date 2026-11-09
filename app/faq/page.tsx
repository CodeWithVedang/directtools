import { FAQAccordion } from '@/components/marketing/FAQAccordion';
import { faqLd, JsonLd } from '@/components/marketing/JsonLd';
import { pageMeta } from '@/lib/site';
import { SHARED_FAQS, TOOLS } from '@/lib/tools';

export const metadata = pageMeta({
  title: 'DirectTools FAQ: Privacy, Pairing and Browsers',
  description: 'Answers about DirectTools: how pairing works, what is stored, which browsers work and which tool to use for files, text, screens, cameras and calls.',
  path: '/faq',
});

export default function FaqPage() {
  const all = [...SHARED_FAQS, ...TOOLS.flatMap((t) => t.faqs.map((f) => ({ q: `${t.name}: ${f.q}`, a: f.a })))];
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <JsonLd data={faqLd(all)} />
      <h1 className="text-4xl font-extrabold sm:text-5xl">Frequently asked questions</h1>
      <p className="mt-4 text-lg leading-8 text-muted">Short answers about all five tools.</p>
      <div className="mt-10">
        <FAQAccordion items={all} />
      </div>
    </div>
  );
}
