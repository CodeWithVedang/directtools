'use client';

import { useState } from 'react';
import { Check, Share2 } from 'lucide-react';
import { buttonClass } from '@/components/ui/Button';

/** Uses the native share sheet when available, otherwise copies the site link. */
export function ShareButton() {
  const [done, setDone] = useState(false);

  const share = async () => {
    const data = { title: 'DirectTools', text: 'Five free tools to share files, text, screens, cameras and calls. No account.', url: window.location.origin };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(data.url);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      /* user cancelled or clipboard blocked */
    }
  };

  return (
    <button type="button" onClick={share} className={buttonClass('secondary', 'md')}>
      {done ? <Check size={16} aria-hidden /> : <Share2 size={16} aria-hidden />}
      <span aria-live="polite">{done ? 'Link copied' : 'Share DirectTools'}</span>
    </button>
  );
}
