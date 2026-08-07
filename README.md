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

- `app/` — pages: home, `/services`, `/services/[slug]`, `/about`, `/contact`, `/blog`,
  `/faq`, `/privacy-policy`, `/terms-and-conditions`.
- `components/` — shared UI (header, footer, hero, cards, etc).
- `lib/site.ts` — business info (phone, email, address, hours, Jobber Client Hub config)
  used throughout the site.
- `lib/services.ts` — copy for each service page.

## Lead capture

The `/contact` page embeds the client's Jobber Client Hub work request form (see
`components/JobberRequestForm.tsx`), so estimate requests go directly into Jobber. No
API keys or environment variables are needed for this — it's Jobber's public embed
snippet, configured via `lib/site.ts`.

## Content to update before launch

- `lib/site.ts` — confirm the Facebook URL (currently a placeholder).
- Have `/privacy-policy` and `/terms-and-conditions` reviewed by an attorney before
  launch — they're standard boilerplate, not legal advice.

## Deploy

Deployed via Vercel, connected to this repo's GitHub integration.
