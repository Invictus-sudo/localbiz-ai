// app/api/create-checkout-session/route.ts
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    // Πάρε το origin από το request, fallback στο env αν χρειαστεί
    const origin = request.headers.get("origin") || process.env.NEXT_PUBLIC_APP_URL || "";

    const priceId = process.env.STRIPE_PRICE_ID!;
    if (!priceId) {
      console.error("Missing STRIPE_PRICE_ID");
      return NextResponse.json({ error: "missing_price" }, { status: 500 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      // Στέλνουμε τον χρήστη πίσω σε /success ή /cancel στο ίδιο origin
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("create-checkout-session error:", err);
    return NextResponse.json({ error: "checkout_error" }, { status: 500 });
  }
}
