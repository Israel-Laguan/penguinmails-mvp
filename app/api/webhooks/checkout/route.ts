import { NextRequest } from "next/server";
import { default as stripe, default as Stripe } from "stripe";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headers = await request.headers;

  if (!process.env.STRIPE_WEBHOOK_SIGNING_SECRET) {
    return new Response("Missing stripe webhook signing secret", {
      status: 500,
    });
  }

  const webhookSigningSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET!;
  const stripeSignature = headers.get("stripe-signature");

  if (!stripeSignature) {
    return new Response("Missing stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      stripeSignature,
      webhookSigningSecret,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new Response(
      `Webhook Error: ${err instanceof Error ? err.message : "Unknown error"}`,
      {
        status: 400,
      },
    );
  }

  if (event.type !== "checkout.session.completed") {
    return new Response(`Unhandled event type: ${event.type}`, { status: 400 });
  }

  const checkoutSession = event.data.object as Stripe.Checkout.Session;

  const companyId = Number(checkoutSession.metadata?.companyId);
  const userEmail = checkoutSession.customer_details?.email;
  const planIdParam = checkoutSession.metadata?.planId;

  try {
    const planId = planIdParam || (await prisma.planDetails.findFirst({
      where: {
        name: 'FREE',
      },
      select: {
        id: true,
      }
    }))?.id;

    await prisma.subscriptions.create({
      data: {
        planDetailId: planId || '',
        companyId,
        payOn: new Date(),
        renovateBefore: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      }
    });

    console.log(`Payment processed for company ${companyId} (${userEmail})`);

    return new Response("Payment processed successfully", { status: 200 });
  } catch (error) {
    console.error("Payment processing failed:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
