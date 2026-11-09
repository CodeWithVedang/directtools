import { ArrowRight, ExternalLink } from 'lucide-react';
import { ToolArt, type ToolArtName } from './ToolArt';

const HUB = 'https://directtools.vercel.app';

const FAMILY: Array<{ slug: string; name: string; url: string; art: ToolArtName; blurb: string }> = [
  { slug: 'file-share', name: 'DirectFileShare', url: 'https://directfileshare.vercel.app', art: 'file', blurb: 'Send any file to another device. No upload, no account.' },
  { slug: 'text-share', name: 'DirectTextShare', url: 'https://directtextshare.vercel.app', art: 'text', blurb: 'Move text and links between your devices in seconds.' },
  { slug: 'screen-share', name: 'DirectScreenShare', url: 'https://directscreenshare.vercel.app', art: 'screen', blurb: 'Show your screen to any device with a code.' },
  { slug: 'webcam', name: 'DirectWebcam', url: 'https://directwebcam.vercel.app', art: 'webcam', blurb: 'Use your phone as a webcam and document scanner.' },
  { slug: 'call', name: 'DirectCall', url: 'https://directcall.vercel.app', art: 'call', blurb: 'Private one-to-one video calls with a code.' },
];

/** "More from DirectTools" strip. `current` is the slug of the tool this site is, so it is left out. */
export function MoreTools({ current }: { current: string }) {
  const others = FAMILY.filter((t) => t.slug !== current);
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20" aria-labelledby="more-tools-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 id="more-tools-heading" className="text-3xl font-bold sm:text-4xl">More tools from DirectTools</h2>
          <p className="mt-3 text-lg leading-8 text-muted">Same six-character code and the same privacy, for a different job.</p>
        </div>
        <a href={HUB} className="inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-accent hover:underline">
          See all tools <ArrowRight size={16} aria-hidden />
        </a>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((t) => (
          <a key={t.slug} href={t.url} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface">
            <div className="border-b border-line">
              <ToolArt name={t.art} />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="mt-2 flex-1 leading-7 text-muted">{t.blurb}</p>
              <span className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-accent">
                Open {t.name} <ExternalLink size={15} aria-hidden />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
