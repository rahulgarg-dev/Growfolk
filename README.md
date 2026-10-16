# Growfolk website (React + Vite + Tailwind, 5 pages)

Pages: Home `/`, Services `/services`, About `/about`, Pricing `/pricing`, Contact `/contact` (+ 404).

```bash
npm install
npm run dev
npm run build        # production build in /dist
```

## Enquiry emails
The contact form uses PostDrop (`postdrop.online`) for headless submission and deliverability directly to your inbox.
Set `VITE_POSTDROP_ID` (your PostDrop Public ID) or `VITE_FORM_ENDPOINT` in `.env` (or configure `postdropId` in `src/config.js`). Submissions are processed asynchronously via AJAX with zero page reloads or clunky confirmation redirects.

## Deploy
`vercel.json` and `public/_redirects` (Netlify) are included so direct links like /services work.

## Edit
Business details + theme (`green` / `orange`): `src/config.js` · Copy: `src/data.js` · Form rules: `src/validation.js` · Logos: `public/`
