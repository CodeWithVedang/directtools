import { PageShell } from '@/components/marketing/PageShell';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta({
  title: 'DirectTools Terms of Use',
  description: 'Terms for using the DirectTools website and its five free peer-to-peer tools.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <PageShell title="Terms of use" intro="By using DirectTools you agree to these terms.">
      <h2>Use of the tools</h2>
      <p>The tools are free and provided as they are. Use them lawfully and do not use them to harm others or share content you have no right to share.</p>
      <h2>Your content</h2>
      <p>Your content goes directly between your devices. We do not host, store or review it, and you are responsible for what you send.</p>
      <h2>No warranty</h2>
      <p>Connections depend on your network and browser. We do not guarantee that a connection will always succeed.</p>
      <h2>Changes</h2>
      <p>We may update these terms. Continued use means you accept the updated terms.</p>
    </PageShell>
  );
}
