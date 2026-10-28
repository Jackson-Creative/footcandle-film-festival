@AGENTS.md

# Project brief — Footcandle Film Festival website

Read `STATUS.md` (current state + open items) and `README.md` (stack, yearly
rollover checklist) at the start of every session.

## What this is

The public website for the **Footcandle Film Festival** (Hickory, NC; held each
September). A rebuild of the old WordPress/Elementor site at
footcandlefilmfestival.com. Built and maintained by **Jackson Creative**
(repo: `Jackson-Creative/footcandle-film-festival`).

- **Stack:** Next.js 16 (App Router, TypeScript) + Tailwind CSS v4. See the
  AGENTS.md note above — read `node_modules/next/dist/docs/` before writing
  Next.js code.
- **Hosting:** Vercel, Git-connected — **every push to `main` deploys to
  production.** Treat merges to `main` as going live.
- **Ticketing/schedule/films/donations:** Eventive embeds
  (`components/EventiveEmbed.tsx`). The Eventive org slug changes every year.
- **Contact form:** `app/api/contact/route.ts` → emails info@footcandle.org via
  Brevo; Supabase storage is secondary and must never block the email.
- **Secrets** (Supabase, Brevo) live only in Vercel env vars. Never commit
  `.env*` files or keys.

## Where content lives

- `lib/site.ts` — festival year, dates, Eventive org, nav, socials, contact
  details. Change values here rather than hard-coding them in pages.
- `lib/sponsors.ts` + `public/images/sponsors/` — sponsor wall.
- `app/festival/awards/page.tsx` + `public/images/awards/` — award winners.
- `app/<route>/page.tsx` — page copy.
- `next.config.ts` — redirects from old WordPress URLs.

## Working rules

- **Don't guess content.** Dates, names, prices, links and sponsor details come
  from the client or the official sources (Eventive, the printed program). When
  something conflicts or is missing, flag it in `STATUS.md` instead of
  inventing it.
- **Preserve the original copy** unless asked to rewrite it.
- **Keep `STATUS.md` current** — update it in the same commit as any meaningful
  change (what changed, what's still open).
- Run `npm run build` (and `npm run lint`) before pushing; a broken build means
  a broken production deploy.
- Keep the look consistent: black/white cinematic theme, Oswald, teal accent
  (`--accent` in `app/globals.css`).

## People & accounts

- **Festival contact:** Alan Jackson — 828-962-4188 — info@footcandle.org.
- **Approves content:** _TODO — fill in who signs off on copy/design changes._
- **Accounts outside the repo** (Claude can't see these; ask the user):
  Vercel, Supabase, Brevo, DreamHost (DNS for footcandlefilmfestival.com),
  Eventive, Printful (shop).
- _TODO — anything else a new session should know (preferences, things never
  to change, upcoming deadlines)._
