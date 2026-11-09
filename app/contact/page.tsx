import { PageShell } from '@/components/marketing/PageShell';
import { CONTACT_EMAIL, pageMeta } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Contact DirectTools: Support and Feedback',
  description: 'Contact the DirectTools team for support, bug reports, feature ideas or press questions.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <PageShell title="Contact" intro="Questions, bug reports and ideas are welcome.">
      <h2>Email</h2>
      <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
      <h2>What to include</h2>
      <ul>
        <li>Which tool you used</li>
        <li>Your device and browser</li>
        <li>What you expected and what happened</li>
      </ul>
    </PageShell>
  );
}
