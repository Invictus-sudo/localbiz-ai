# LocalBiz AI — Starter (EN)

A minimal Next.js 14 (App Router) starter with Stripe checkout + Supabase client placeholders.

## 1) Environment Variables (Vercel → Project Settings → Environment Variables)
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...   # optional for later

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_...       # must start with price_ (NOT prod_)
NEXT_PUBLIC_APP_URL=https://<your-vercel>.vercel.app
NEXTAUTH_SECRET=any-long-random-string
```

## 2) Stripe Webhook (optional for now)
Endpoint: `https://<your-vercel>.vercel.app/api/stripe-webhook`
Events: `checkout.session.completed`, `customer.subscription.deleted`
Copy the Signing Secret to `STRIPE_WEBHOOK_SECRET` if you plan to verify signatures.

## 3) Develop
```
npm i
npm run dev
```
