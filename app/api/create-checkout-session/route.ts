import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST() {
  const priceId = process.env.STRIPE_PRICE_ID!;
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?canceled=1`
  });
  return NextResponse.json({ url: session.url });
}

// Next.js 14 hints
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const preferredRegion = "auto";
