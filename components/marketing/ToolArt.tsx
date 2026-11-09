export type ToolArtName = 'file' | 'text' | 'screen' | 'webcam' | 'call';

/**
 * Small illustrations for each tool. Pure SVG, themed through the ta-* classes in globals.css,
 * so they follow light and dark mode. Decorative: hidden from assistive tech.
 */
export function ToolArt({ name, className = '' }: { name: ToolArtName; className?: string }) {
  return (
    <svg viewBox="0 0 320 200" className={`block h-auto w-full ${className}`} aria-hidden focusable="false">
      <rect width="320" height="200" className="ta-backdrop" />
      {name === 'file' && <FileArt />}
      {name === 'text' && <TextArt />}
      {name === 'screen' && <ScreenArt />}
      {name === 'webcam' && <WebcamArt />}
      {name === 'call' && <CallArt />}
    </svg>
  );
}

function FileArt() {
  return (
    <g>
      <g className="ta-float">
        <rect x="22" y="56" width="124" height="86" rx="9" className="ta-surface ta-line" />
        <rect x="34" y="70" width="52" height="8" rx="4" className="ta-bar" />
        <rect x="34" y="86" width="84" height="6" rx="3" className="ta-bar" />
        <rect x="34" y="98" width="70" height="6" rx="3" className="ta-bar" />
        <rect x="34" y="116" width="40" height="14" rx="7" className="ta-acc" />
        <path d="M10 150h148l-8 12H18z" className="ta-surface ta-line" />
      </g>
      <path d="M154 100h72" className="ta-acc-s ta-flow" strokeWidth="2.5" strokeLinecap="round" />
      <g className="ta-slide">
        <rect x="170" y="86" width="22" height="28" rx="4" className="ta-acc" />
        <path d="M176 96h10M176 102h10M176 108h6" stroke="rgb(var(--accent-fg))" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g className="ta-float" style={{ animationDelay: '-2s' }}>
        <rect x="236" y="46" width="62" height="112" rx="12" className="ta-surface ta-line" />
        <rect x="244" y="58" width="46" height="72" rx="5" className="ta-soft" />
        <rect x="252" y="68" width="30" height="8" rx="4" className="ta-bar" />
        <rect x="252" y="82" width="22" height="6" rx="3" className="ta-bar" />
        <circle cx="267" cy="144" r="5" className="ta-bar" />
      </g>
    </g>
  );
}

function TextArt() {
  return (
    <g>
      <g className="ta-float">
        <rect x="26" y="34" width="176" height="46" rx="14" className="ta-surface ta-line" />
        <rect x="42" y="49" width="104" height="7" rx="3.5" className="ta-bar" />
        <rect x="42" y="62" width="70" height="7" rx="3.5" className="ta-bar" />
      </g>
      <g className="ta-float" style={{ animationDelay: '-1.5s' }}>
        <rect x="118" y="92" width="176" height="46" rx="14" className="ta-acc" />
        <rect x="134" y="107" width="120" height="7" rx="3.5" fill="rgb(var(--accent-fg) / 0.85)" />
        <rect x="134" y="120" width="76" height="7" rx="3.5" fill="rgb(var(--accent-fg) / 0.6)" />
      </g>
      <g>
        <rect x="26" y="150" width="86" height="34" rx="14" className="ta-surface ta-line" />
        <circle cx="48" cy="167" r="4" className="ta-acc ta-dot" />
        <circle cx="64" cy="167" r="4" className="ta-acc ta-dot" style={{ animationDelay: '0.2s' }} />
        <circle cx="80" cy="167" r="4" className="ta-acc ta-dot" style={{ animationDelay: '0.4s' }} />
      </g>
    </g>
  );
}

function ScreenArt() {
  return (
    <g>
      <g className="ta-float">
        <rect x="26" y="32" width="190" height="124" rx="9" className="ta-surface ta-line" />
        <path d="M26 50h190" className="ta-line" />
        <circle cx="40" cy="41" r="3" className="ta-bar" />
        <circle cx="52" cy="41" r="3" className="ta-bar" />
        <circle cx="64" cy="41" r="3" className="ta-bar" />
        <rect x="40" y="62" width="70" height="8" rx="4" className="ta-bar" />
        <rect x="40" y="78" width="100" height="6" rx="3" className="ta-bar" />
        <rect x="40" y="94" width="156" height="50" rx="6" className="ta-soft" />
        <path d="M50 134l24-18 22 10 28-26 30 14 32-20" className="ta-acc-s" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M96 156l-6 16h42l-6-16z" className="ta-surface ta-line" />
        <g className="ta-cursor">
          <path d="M150 92l0 20 6-5 4 9 5-2-4-9 8 0z" className="ta-acc" stroke="rgb(var(--surface))" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
      </g>
      <g className="ta-ring-wrap">
        <path d="M232 98a22 22 0 0 1 0 0" className="ta-acc-s" />
        <path d="M226 86a16 16 0 0 1 0 24M232 78a26 26 0 0 1 0 40" className="ta-acc-s ta-blink" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g className="ta-float" style={{ animationDelay: '-2.2s' }}>
        <rect x="244" y="62" width="58" height="104" rx="11" className="ta-surface ta-line" />
        <rect x="251" y="74" width="44" height="64" rx="4" className="ta-soft" />
        <rect x="256" y="82" width="22" height="5" rx="2.5" className="ta-bar" />
        <path d="M257 124l10-8 9 4 11-10" className="ta-acc-s" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="273" cy="153" r="4" className="ta-bar" />
      </g>
    </g>
  );
}

function WebcamArt() {
  return (
    <g>
      <g className="ta-float">
        <rect x="30" y="24" width="92" height="152" rx="14" className="ta-surface ta-line" />
        <rect x="38" y="36" width="76" height="112" rx="6" className="ta-soft" />
        <circle cx="76" cy="86" r="22" className="ta-surface ta-line" />
        <circle cx="76" cy="86" r="13" className="ta-acc" />
        <circle cx="71" cy="81" r="4" fill="rgb(var(--accent-fg) / 0.7)" />
        <path d="M46 44h10M46 44v10M106 44H96M106 44v10M46 140h10M46 140v-10M106 140H96M106 140v-10" className="ta-acc-s" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="76" cy="162" r="6" className="ta-acc ta-blink" />
      </g>
      <path d="M130 100h50" className="ta-acc-s ta-flow" strokeWidth="2.5" strokeLinecap="round" />
      <g className="ta-float" style={{ animationDelay: '-2s' }}>
        <rect x="184" y="52" width="116" height="80" rx="8" className="ta-surface ta-line" />
        <rect x="192" y="60" width="100" height="64" rx="4" className="ta-soft" />
        <circle cx="242" cy="82" r="11" className="ta-acc" />
        <path d="M222 124c2-14 12-20 20-20s18 6 20 20z" className="ta-acc" />
        <circle cx="282" cy="68" r="3.5" className="ta-acc ta-blink" />
        <path d="M174 140h136l-8 12H182z" className="ta-surface ta-line" />
      </g>
    </g>
  );
}

function CallArt() {
  return (
    <g>
      <g className="ta-float">
        <rect x="26" y="22" width="178" height="124" rx="12" className="ta-surface ta-line" />
        <rect x="34" y="30" width="162" height="108" rx="7" className="ta-soft" />
        <circle cx="115" cy="84" r="26" className="ta-acc ta-ring" opacity="0.25" />
        <circle cx="115" cy="76" r="14" className="ta-acc" />
        <path d="M86 130c3-20 16-30 29-30s26 10 29 30z" className="ta-acc" />
      </g>
      <g className="ta-float" style={{ animationDelay: '-1.8s' }}>
        <rect x="204" y="86" width="92" height="64" rx="10" className="ta-surface ta-line" />
        <rect x="210" y="92" width="80" height="52" rx="6" className="ta-bar" opacity="0.6" />
        <circle cx="250" cy="110" r="9" className="ta-line" fill="rgb(var(--muted) / 0.45)" />
        <path d="M232 140c2-12 10-18 18-18s16 6 18 18z" fill="rgb(var(--muted) / 0.45)" />
      </g>
      <g>
        <circle cx="96" cy="174" r="14" className="ta-surface ta-line" />
        <rect x="92" y="166" width="8" height="12" rx="4" className="ta-acc" />
        <circle cx="130" cy="174" r="15" fill="rgb(var(--danger))" />
        <path d="M122 176c5-5 11-5 16 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="164" cy="174" r="14" className="ta-surface ta-line" />
        <rect x="156" y="169" width="12" height="9" rx="2" className="ta-acc" />
        <path d="M168 172l6-3v10l-6-3z" className="ta-acc" />
      </g>
    </g>
  );
}
