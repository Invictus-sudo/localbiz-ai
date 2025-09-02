import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature") || "";
  const secret = process.env.STRIPE_WEBHOOK_SECRET!;
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch (err: any) {
    console.error('Webhook signature error', err?.message);
    return NextResponse.json({ error: 'Webhook signature error' }, { status: 400 });
  }

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

  if (event.type === 'checkout.session.completed') {
    const email = (event.data.object as any).customer_details?.email;
    if (email) {
      await supabase.from('profiles').update({ plan: 'pro' }).eq('email', email);
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    // TODO: handle downgrades
  }

  return NextResponse.json({ received: true });
}
