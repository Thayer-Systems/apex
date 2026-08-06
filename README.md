# Apex Demolition & Excavation

Marketing site for Apex Demolition & Excavation (West Milton, OH), built with Next.js
(App Router) and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — pages: home, `/services`, `/services/[slug]`, `/about`, `/contact`, and the
  `/api/contact` route the quote form posts to.
- `components/` — shared UI (header, footer, hero, form, cards, etc).
- `lib/site.ts` — business info (phone, email, address, hours) used throughout the site.
- `lib/services.ts` — copy for each service page.

## Contact form setup

The quote form on `/contact` posts to `app/api/contact/route.ts`, which sends email via
[Resend](https://resend.com). Until `RESEND_API_KEY` is set, the API route logs the
submission and returns a friendly error asking visitors to call/email directly instead —
nothing is silently lost, but nothing is emailed either.

To wire it up:

1. Create a free Resend account and verify a sending domain (or use their `resend.dev`
   sandbox domain for testing).
2. Set these environment variables in Vercel (Project Settings → Environment Variables):
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (optional — defaults to the email in `lib/site.ts`)
   - `CONTACT_FROM_EMAIL` (optional — must be on a domain verified in Resend)

See `.env.example`.

## Content to update before launch

- `lib/site.ts` — confirm the Facebook URL (currently a placeholder).
- Replace the logo-mark placeholder panels (home "Why Apex" section) and hero background
  with real jobsite/equipment photography once available — drop images into `public/`
  and swap them into `components/HomeHero.tsx` / `components/WhyApex.tsx`.
- Consider adding real project photos to a future "Projects" page/gallery.

## Deploy

Deployed via Vercel, connected to this repo's GitHub integration.
