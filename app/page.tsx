import { ShieldCheck, UserX, Zap } from 'lucide-react';
import { FAQAccordion } from '@/components/marketing/FAQAccordion';
import { faqLd, JsonLd } from '@/components/marketing/JsonLd';
import { SectionHead } from '@/components/marketing/PageShell';
import { Picker } from '@/components/marketing/Picker';
import { ToolCard } from '@/components/marketing/ToolCard';
import { pageMeta, SITE_NAME, SITE_URL, TAGLINE } from '@/lib/site';
import { SHARED_FAQS, TOOLS } from '@/lib/tools';

export const metadata = pageMeta({
  title: 'DirectTools: Free Peer-to-Peer File, Screen and Video Tools',
  description: 'Five free tools to send files, text, screens, phone cameras and video calls straight between devices with a six-character code. No account, no upload.',
  path: '/',
});

const siteLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: SITE_NAME, url: SITE_URL, logo: `${SITE_URL}/icons/icon-512.png`, sameAs: ['https://github.com/CodeWithVedang'] },
    { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL, description: TAGLINE },
    {
      '@type': 'ItemList',
      name: 'DirectTools',
      itemListElement: TOOLS.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'SoftwareApplication', name: t.name, url: `${SITE_URL}/tools/${t.slug}`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any (web browser)', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
      })),
    },
  ],
};

const REASONS = [
  { icon: UserX, title: 'No account', text: 'Open a page and start. No sign-up, no email, no password.' },
  { icon: ShieldCheck, title: 'Private by design', text: 'Data goes straight between the two devices, encrypted. We keep no copy.' },
  { icon: Zap, title: 'Fast to start', text: 'Type a six-character code or scan a QR. That is the whole setup.' },
];

const STEPS = [
  { title: 'Open a tool on both devices', text: 'Phone, tablet or computer. Any modern browser works.' },
  { title: 'Enter the code or scan the QR', text: 'One device shows a six-character code. The other types it in.' },
  { title: 'Share', text: 'Files, text, screens, cameras and calls move directly between you.' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={siteLd} />
      <JsonLd data={faqLd(SHARED_FAQS.slice(0, 6))} />

      <section className="hero-bg border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="min-w-0">
            <h1 className="text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl">Share anything between two devices. No account.</h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
              DirectTools is five free web tools for files, text, screens, phone cameras and video calls. Pair with a six-character code and your data goes straight to the other device.
            </p>
          </div>
          <Picker />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20" aria-labelledby="tools-heading">
        <div id="tools-heading">
          <SectionHead title="The five tools" text="Each one does a single job well. They share the same pairing, so once you know one, you know all five." />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20" aria-labelledby="how-heading">
        <div id="how-heading">
          <SectionHead title="How it works" text="The same three steps for every tool." />
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-line bg-surface p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-bold text-accent-fg">{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 leading-7 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20" aria-labelledby="why-heading">
        <div id="why-heading">
          <SectionHead title="Why people use DirectTools" />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-xl border border-line bg-surface p-5">
              <r.icon className="text-accent" size={24} aria-hidden />
              <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 leading-7 text-muted">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-20" aria-labelledby="faq-heading">
        <div id="faq-heading">
          <SectionHead title="Questions people ask first" />
        </div>
        <div className="mt-10">
          <FAQAccordion items={SHARED_FAQS.slice(0, 6)} />
        </div>
        <p className="mt-6 text-muted">
          More answers are on the <a className="font-semibold text-accent underline underline-offset-4" href="/faq">full FAQ page</a>.
        </p>
      </section>
    </>
  );
}
