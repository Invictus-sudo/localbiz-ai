# LocalBiz AI — Complete Starter (Next.js + Supabase + Stripe)

Αυτό το archive περιέχει μια **πλήρη, λειτουργική έκδοση** του starter project — με όλα τα αρχεία που χρειάζεσαι για να το κάνεις deploy στο Vercel και να συνδέσεις Supabase + Stripe. Έχω προσθέσει τα απαραίτητα `lib/` αρχεία, seed data, και ένα απλό webhook handler.

---

## Γρήγορα βήματα για να το ανεβάσεις στο GitHub & Vercel (για αρχάριους)

### 1) Κατέβασε και άνοιξε το zip
- Κατέβασε το `localbiz-ai-complete.zip` από τον σύνδεσμο που παρέχεται στην απάντηση.

### 2) Upload στο GitHub (μέσω web UI)
1. Άνοιξε το repo σου στο GitHub (το private repo που έφτιαξες).
2. Click **Add file → Upload files**.
3. Από το zip: άνοιξε το φάκελο `localbiz-ai-complete` και σέρνεις ΟΛΑ τα αρχεία/φακέλους στο drop area.
4. Στο κάτω μέρος: **Commit directly to the `main` branch** (ή κάνε νέο branch αν προτιμάς).
5. Commit message: `Replace with complete starter`.

> Αν προτιμάς git: αποσυμπίεσε και κάνε `git add . && git commit -m "complete starter" && git push`.

### 3) Σύνδεση με Vercel
1. Vercel → New Project → Import από GitHub → διάλεξε το repo `localbiz-ai`.
2. Deploy (στο πρώτο deploy ίσως αποτύχει μέχρι να προσθέσεις env vars, αλλά αυτό είναι OK).

### 4) Περιβάλλον (Environment Variables)
Στο Vercel → Project → Settings → Environment Variables, πρόσθεσε τα παρακάτω (αργότερα θα πάρεις τις τιμές από Supabase/Stripe):

- `NEXT_PUBLIC_SUPABASE_URL` = (από Supabase → Project Settings → API → Project URL)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (από Supabase → API → anon key)
- `SUPABASE_SERVICE_ROLE_KEY` = (Supabase → API → service_role key) **(ΜΗΝ ΤΗΝ ΚΑΝΕΙΣ PUBLIC)**
- `NEXT_PUBLIC_APP_URL` = https://<your-vercel-url>
- `STRIPE_PUBLIC_KEY` = (Stripe → Developers → API keys → publishable key)
- `STRIPE_SECRET_KEY` = (Stripe → secret key)
- `STRIPE_PRICE_ID` = (Price ID του προϊόντος σου, π.χ. price_*)
- `STRIPE_WEBHOOK_SECRET` = (Signing secret από Webhooks στο Stripe)

Μόλις τα προσθέσεις, κάνε **Redeploy** στο Vercel.

---

## 5) Supabase (γρήγορα)
1. supabase.com → New Project.
2. Στο SQL Editor εκτέλεσε το `supabase_schema.sql` (περιλαμβάνεται στο zip) — αυτό δημιουργεί tables και trigger για profiles.
3. Στο Authentication → Providers → ενεργοποίησε Email (magic link).
4. Αντέγραψε το `Project URL`, `anon key` και `service_role key` και βάλε τις τιμές στο Vercel env vars όπως παραπάνω.

---

## 6) Stripe (γρήγορα)
1. stripe.com → Dashboard → Products → New product: `LocalBiz AI — Pro` (Recurring – monthly).
2. Δημιούργησε Price (π.χ. 29 EUR/month). Αντέγραψε το `Price ID`.
3. Developers → Webhooks → Add endpoint:
   - Endpoint URL: `https://<your-vercel-url>/api/stripe-webhook`
   - Events: `checkout.session.completed`, `customer.subscription.deleted`
   - Αντέγραψε το Signing secret → βάλε το στο `STRIPE_WEBHOOK_SECRET` στο Vercel.

---

## 7) Τι να ελέγξεις όταν γίνει deploy
- Άνοιξε `https://<your-vercel-url>` → πρέπει να εμφανιστεί η landing σελίδα (Login / Pricing).
- Login → δοκίμασε magic link (όταν Supabase έχει ρυθμιστεί).
- Dashboard → κάνε checkout σε test mode για να δοκιμάσεις το webhook.

---

Αν κολλήσεις σε κάποιο βήμα (π.χ. τιμές env, error στο build, webhook), γράψε μου το ακριβές μήνυμα σφάλματος και το διορθώνω άμεσα.

Καλή επιτυχία — μετά το upload προχωράμε στα αυτοματισμένα drafts & prompt packs!
