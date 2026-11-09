import { JsonLd, breadcrumbLd } from '@/components/marketing/JsonLd';
import { ToolCard } from '@/components/marketing/ToolCard';
import { pageMeta, SITE_URL } from '@/lib/site';
import { TOOLS } from '@/lib/tools';

export const metadata = pageMeta({
  title: 'All DirectTools: File, Text, Screen, Webcam and Call',
  description: 'Compare the five DirectTools: send files, send text, share your screen, use your phone as a webcam, or make a video call. All free, no account.',
  path: '/tools',
});

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <JsonLd data={breadcrumbLd([{ name: 'Home', url: SITE_URL }, { name: 'All tools', url: `${SITE_URL}/tools` }])} />
      <h1 className="text-4xl font-extrabold sm:text-5xl">All tools</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">Pick the job you need done. Every tool is free, needs no account and sends data directly between two devices.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((t) => (
          <ToolCard key={t.slug} tool={t} />
        ))}
      </div>
    </div>
  );
}
