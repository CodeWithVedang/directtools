import { PageShell } from '@/components/marketing/PageShell';
import { AUTHOR_NAME, AUTHOR_URL, pageMeta } from '@/lib/site';

export const metadata = pageMeta({
  title: 'About DirectTools: Private Sharing Without Accounts',
  description: 'DirectTools is a family of five free web tools that move data straight between two devices. Learn why they exist and how they are built.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <PageShell title="About DirectTools" intro="Sharing between two nearby devices should not need an account or a server that sees your data.">
      <h2>What we build</h2>
      <p>DirectTools is five small web apps that share one design and one pairing method: DirectFileShare, DirectTextShare, DirectScreenShare, DirectWebcam and DirectCall.</p>
      <h2>How they work</h2>
      <p>Each tool pairs two browsers with a six-character code or a QR. After pairing, data flows directly between the devices over an encrypted WebRTC connection. There is no database, no login and no stored copy.</p>
      <h2>Who makes them</h2>
      <p>DirectTools is built and maintained by <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer">{AUTHOR_NAME}</a>. You can reach us on the <a href="/contact">contact page</a>.</p>
    </PageShell>
  );
}
