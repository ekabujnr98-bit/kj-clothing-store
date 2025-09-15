# KJ Brand Store - Full Starter

This extended starter includes:
- Next.js app structure + Tailwind
- Shop, Product detail, Cart pages
- Stripe checkout API route (example)
- Paystack endpoint placeholder (server-side)
- Simple admin mockup page (read-only)
- Seed product data in /data/products.json
- Vercel deployment instructions and GitHub Actions template

## Quick start
1. Install dependencies:
   ```
   npm install
   ```
2. Add environment variables using `.env.local` based on `.env.example`
3. Run dev server:
   ```
   npm run dev
   ```

## Deployment
- Connect this repo to Vercel and set environment variables in the Vercel dashboard.
- Add Stripe keys and Paystack keys to env.

## Notes
- The admin page is a mockup UI for editing/preview only; for production, connect a headless CMS or implement authenticated admin APIs.
- Paystack route included is a placeholder; adapt it to your server setup and secure with secret keys.
