import { PageShell } from '@/components/marketing/PageShell';
import { CONTACT_EMAIL, pageMeta } from '@/lib/site';

export const metadata = pageMeta({
  title: 'DirectTools Privacy Policy',
  description: 'DirectTools has no accounts and no database. This site uses cookie-free analytics only. Read what we collect and what we do not.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy policy" intro="This policy covers the DirectTools website. Each tool has its own privacy page.">
      <h2>What we collect</h2>
      <p>This website uses cookie-free Vercel Analytics to count page views. It does not identify you and does not use advertising trackers.</p>
      <h2>What we do not collect</h2>
      <ul>
        <li>No accounts, names or email addresses</li>
        <li>No files, messages, screens, video or audio. Those never touch this website.</li>
      </ul>
      <h2>Your settings</h2>
      <p>If you switch between light and dark mode, that choice is saved in your browser only.</p>
      <h2>Contact</h2>
      <p>Questions about privacy: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </PageShell>
  );
}
