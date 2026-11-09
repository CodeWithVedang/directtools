# DirectTools

Marketing hub for five free peer-to-peer tools: DirectFileShare, DirectTextShare, DirectScreenShare, DirectWebcam and DirectCall.
Static Next.js 14 export, same theme as the tools (violet accent, Inter and Inter Tight, light and dark). No backend, no accounts.

Live: https://directtools.vercel.app

```bash
npm install && npm run dev   # http://localhost:3000
npm run lint                 # tsc --noEmit
npm run build                # static export to ./out
```

## Where things live
| Path | Purpose |
| --- | --- |
| `lib/tools.ts` | Single source of truth for the five tools: copy, URLs, FAQs, SEO text |
| `app/tools/[slug]/page.tsx` | One SEO landing page per tool, generated from `lib/tools.ts` |
| `components/marketing/Picker.tsx` | Hero "What do you want to do?" chooser |
| `public/llms.txt` | Summary for AI agents and crawlers |

To add or change a tool, edit `lib/tools.ts`. Pages, sitemap and JSON-LD follow.
