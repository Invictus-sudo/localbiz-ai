import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

// NOTE: For signature verification you also need STRIPE_WEBHOOK_SECRET set in Vercel.
// This minimal handler just acknowledges events so Stripe sees 200 OK.
export async function POST(req: Request) {
  try {
    const sig = headers().get("stripe-signature");
    const body = await req.text();
    let event: any;

    const secret = process.env.STRIPE_WEBHOOK_SECRET;
    if (secret && sig) {
      event = stripe.webhooks.constructEvent(body, sig, secret);
    } else {
      // Fallback: try to parse without verification (development)
      event = JSON.parse(body);
    }

    // You can handle event types here (e.g., checkout.session.completed)
    // and update Supabase if needed (plan=pro). Left as TODO for simplicity.

    return new NextResponse("ok", { status: 200 });
  } catch (err: any) {
    console.error("Webhook error:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const preferredRegion = "auto";
