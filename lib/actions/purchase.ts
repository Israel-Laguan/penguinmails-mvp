"use server";

import { stripeApi } from "@/lib/stripe-server";

const priceId = process.env.STRIPE_PRICE_ID;

export default async function purchase() {
  try {

    const stripeCheckoutSession = await stripeApi.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXTAUTH_URL}/?status=success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/?status=cancelled`,
    });

    return { checkoutSessionId: stripeCheckoutSession.id };
  } catch (e) {
    console.error(e);
    return { checkoutSessionId: null };
  }
}
