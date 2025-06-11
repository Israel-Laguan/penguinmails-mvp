"use server";

import { stripeApi } from "@/lib/stripe-server";

const priceId = process.env.STRIPE_PRICE_ID;
const settingsPath = '/dashboard/settings';

export default async function purchaseAction() {
  try {
    const stripeCheckoutSession = await stripeApi.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXTAUTH_URL}${settingsPath}?checkout=success`,
      cancel_url: `${process.env.NEXTAUTH_URL}${settingsPath}?checkout=cancel`,
    });

    return { checkoutSessionId: stripeCheckoutSession.id };
  } catch (e) {
    console.error(e);
    return { checkoutSessionId: null };
  }
}
