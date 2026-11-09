import { LinkButton } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-extrabold">Page not found</h1>
      <p className="mt-4 text-lg text-muted">That page does not exist. Pick a tool from the home page instead.</p>
      <div className="mt-8">
        <LinkButton href="/" size="lg">Go to home</LinkButton>
      </div>
    </div>
  );
}
