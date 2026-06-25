# Maskani

Verified real estate connection broker for Nairobi — built with Next.js.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel + GitHub

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Maskani interactive landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/maskani.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.

3. Vercel auto-detects Next.js. Click **Deploy**.

4. Every push to `main` auto-deploys a new version.

## Landing page sections

- Hero with tenant/agent toggle + neighborhood carousel
- Trust stats with animated counters
- Interactive verification flow stepper
- Pricing tabs (tenant vs agent) + ROI calculator
- Why Maskani comparison
- Testimonials, FAQ accordion, CTA

## Environment variables (future)

Copy `.env.example` to `.env.local` when integrating Firebase, M-Pesa, and SMS.
