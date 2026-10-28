# Project Status

_Last updated: 2026-10-28 — site live at footcandlefilmfestival.com (Vercel);
2026 festival (Sept 18–27) is over; off-season._

## ✅ Done

- Next.js + Tailwind scaffold, Oswald font, black/white theme (matches original)
- Global **header** (top bar with dates + socials, logo, nav, mobile menu) and
  **footer** (logo, nav, about, copyright)
- **Homepage** — hero, intro, video, FilmLAB, Symposium, 4 feature blocks, FAQ,
  funding acknowledgment, **Sponsors & Supporters** wall, **Friends of the
  Festival** names, and a **2026 Award Winners** banner.
- **Festival hub** (`/festival`, Eventive welcome embed) + four **Eventive
  embed** pages: Film Guide, Schedule, Buy Passes, Donate.
- **Award Winners** page (`/festival/awards`) — 2026 winners in ceremony order,
  with poster, director and country (from the Film Guide). Data is hard-coded
  in `app/festival/awards/page.tsx`; posters in `public/images/awards/`.
- Static pages: **FilmLAB** (with downloadable 2026 flyer), **Filmmaker
  Symposium**, **Become a Sponsor** (full tier benefits + sponsorship flyer
  PDF), **Past Festivals** (2015–2024 poster grid), **Contact Us**.
- **Contact form** → `/api/contact` → emails info@footcandle.org via **Brevo**
  first; saving to Supabase (`contact_submissions`) is a secondary step whose
  failure never blocks the email. Honeypot spam protection.
- Old WordPress URLs (`/2026-footcandle-film-festival/...`) redirect to the new
  clean paths (`next.config.ts`).
- Sponsor list lives in `lib/sponsors.ts`; logos in `public/images/sponsors/`.

## 🗓️ Change log since launch-ready (2026-08-12)

- 08-21 — FilmLAB 2026 flyer download; repo made public / GitHub connected to
  Vercel (deploys on push).
- 09-11 — Contact form reworked: email-first, Supabase storage non-blocking.
- 09-19 → 09-20 — Homepage Sponsors & Supporters wall + Friends of the Festival.
- 09-28 → 09-29 — 2026 Award Winners page + homepage banner; director/country
  added under each film.

## 🚀 Launch status

- ✅ **Supabase** — keys in Vercel; `contact_submissions` table live.
- ✅ **Vercel** — live at `footcandle-film-festival.vercel.app`; every push to
  `main` auto-deploys.
- ✅ **Brevo email** — contact form confirmed delivering to info@footcandle.org.
- ✅ **Pre-launch audit passed** (2026-08-12).
- ✅ **Domain cutover** — `footcandlefilmfestival.com` is live on Vercel
  (confirmed by client 2026-10-28). DNS is managed at DreamHost; keep MX +
  SPF/DKIM/DMARC (incl. Brevo) records intact on any future DNS changes.

_Note: the external Printful shop still lists a "2025" t-shirt — managed in the
Printful account, not this site._

## ⏭️ Open items / next up

- [ ] Decide how long the homepage "Award Winners Are In!" banner stays up.
- [ ] Off-season homepage: hero, dates and FAQ copy still describe the upcoming
      2026 festival in present/future tense.
- [ ] Add 2025 and 2026 to **Past Festivals** when ready (grid currently
      2015–2024).
- [ ] **2027 rollover** — see the checklist in `README.md` (`lib/site.ts` year,
      dates, `eventiveOrg`; hero image; redirects; sponsors list; awards page;
      FilmLAB/Symposium dates and links; sponsorship & FilmLAB flyer PDFs).

## 🚩 Content questions from the original site

All resolved 2026-08-12 (FAQ answers, Symposium date — Thu Sept 24 at Hickory
Community Theatre, 3:00–5:00pm — FilmLAB dates and registration link,
Symposium signup link, "Enter the Festival Site" target, sponsor wording,
sponsorship flyer, Past Festivals links). See git history for details.

## 💡 Notes / easy tweaks

- **Accent color** is teal (from the logo) — change `--accent` in
  `app/globals.css` to re‑theme instantly.
- Tailwind v4 gotcha: a text-color utility on a link can lose to the global
  `a { color: inherit }` (cascade layers); the awards banner uses an inline
  `style={{ color: "#ffffff" }}` to force it (commit 66adaec).
- Original contact form used reCAPTCHA; replaced with a honeypot. Can add
  Cloudflare Turnstile / reCAPTCHA if spam becomes an issue.
- **Shop** stays an external link to Printful.
