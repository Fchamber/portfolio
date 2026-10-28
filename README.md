# Flynn Chambers Portfolio

Personal portfolio at https://flynnchambers.com, hosted on Cloudflare Pages from `Fchamber/portfolio`.

## Development

Use Node 22, then run `npm ci` and `npm run dev`.
Run `npm run build` for the TypeScript check and production build.

## Content and CV

- `src/data/content.ts`: shared content for the modern home page and Windows XP edition at `/xp`.
- `src/pages/ModernPortfolio.tsx`: modern page and download controls.
- `public/assets/flynn-chambers-portrait.jpg`: current portrait.
- `public/assets/cv.pdf`: current two-page CV download.
- `public/assets/Flynn-Chambers-CV.docx`: editable current CV.
- `docs/Flynn-Chambers-CV.md`: current CV text source.

The current positioning targets temporary or fixed-term AI transformation roles in Brisbane. Employment dates retain the previously published website chronology; older reference documents can contain different dates. The earlier PDF under `docs/` is historical and is not the active CV.

## Publishing

Cloudflare Pages tracks `main`, runs `npm run build`, and serves `dist`. Built output is also retained in this repository; regenerate it whenever source or public assets change. Keep both website editions, PDF, Word and Markdown content aligned when editing the CV.
