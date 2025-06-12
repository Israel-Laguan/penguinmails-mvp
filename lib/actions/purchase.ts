"use server";

import { PlanDetails } from "@/components/settings/types";
import { stripeApi } from "@/lib/stripe-server";

const settingsPath = '/dashboard/settings';

export default async function purchaseAction(productPlan: PlanDetails) {
  try {
    const { description, name, price, id } = productPlan;
    const stripeCheckoutSession = await stripeApi.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: price * 100,
            product_data: {
              name: name,
              description: description,
              metadata: {
                planId: id
              }
            },
            recurring: {
              interval: 'month',
              interval_count: 1,
            }
          },
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
