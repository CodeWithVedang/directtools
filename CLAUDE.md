# CLAUDE.md: DirectTools

Parent control file: `../PRD.md` (local only). It wins on conflicts.

## What this is
Marketing website that showcases and links to the five Direct* tools. Static Next.js export on Vercel. No backend, DB, accounts or trackers (cookie-free Vercel Analytics only).

## Rules
- Keep the theme identical to the tools: tokens in `app/globals.css`, `tailwind.config.ts`.
- All tool copy and URLs live in `lib/tools.ts`. Do not hardcode them in pages.
- Every page needs `pageMeta()` (title <= 60, description <= 160) and JSON-LD where relevant.
- Mobile first: tap targets >= 44px, no horizontal scroll at 390px.
- Prod URL: https://directtools.vercel.app (`NEXT_PUBLIC_SITE_URL` overrides).
- Before pushing: `npm run lint && npm run build`.
