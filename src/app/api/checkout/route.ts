import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

type CheckoutLineItem = {
  price: string;
  quantity: number;
};

type CheckoutRequestBody = {
  priceId?: string;
  lineItems?: CheckoutLineItem[];
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CheckoutRequestBody;

    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY in environment variables." },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    const requestedLineItems =
      body.lineItems && body.lineItems.length > 0
        ? body.lineItems
        : body.priceId
          ? [{ price: body.priceId, quantity: 1 }]
          : [];

    const lineItems = requestedLineItems.filter(
      (item) =>
        typeof item.price === "string" &&
        item.price.length > 0 &&
        typeof item.quantity === "number" &&
        item.quantity > 0
    );

    if (lineItems.length === 0) {
      return NextResponse.json(
        { error: "Missing valid checkout items." },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "No checkout URL returned." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 }
    );
  }
}