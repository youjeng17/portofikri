# Arfikriawan Portfolio

One-page portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS. The page is configured for static export and can be deployed to Vercel or another static host.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run build` to generate the production site in `out/`.

## Content and assets

- Profile and CV-derived content: `app/profile.ts`
- Page layout: `app/page.tsx`
- Design tokens and responsive styles: `app/globals.css`
- Add an approved portrait when available; the current hero illustration is an abstract placeholder.
- Add a public CV file only after approval, then expose the Download CV link.
- Set the production domain in `metadataBase` when it is known if an absolute social preview image URL is needed.
