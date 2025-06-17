import { NextRequest } from "next/server";
import { default as stripe, default as Stripe } from "stripe";
import { PrismaClient, Subscription } from "../../generated/prisma";
import { stripeApi } from "@/lib/stripe-server";

const prisma = new PrismaClient();

const dayOnMili = 24 * 60 * 60 * 1000;

const handleSubscriptionDowngradeToFree = async ({ stripeSubscriptionId, companyId, stripeEventId }: {
  stripeSubscriptionId?: string;
  companyId: number;
  stripeEventId: string;
}) => {
  const freePlan = await getFreePlanDetails();

  if (!freePlan || !freePlan.id) {
    console.error("Free plan not found in DB. Unable to downgrade the subscription.");
    return;
  }

  try {
    const currentLocalSubscription = await prisma.subscription.findFirst({
      where: {
        companyId: companyId,
        status: 'ACTIVE',
        renovateBefore: {
          gt: new Date(),
        }
      },
      select: {
        id: true,
        planDetailId: true,
      }
    });

    if (!currentLocalSubscription) {
      console.error(`Local subscription not found for company ${companyId} and Stripe subscription ${stripeSubscriptionId}. Cannot downgrade.`);
      return;
    }

    if (stripeSubscriptionId) {
      await stripeApi.subscriptions.cancel(stripeSubscriptionId);
      console.log(`Suscripción de Stripe ${stripeSubscriptionId} CANCELADA.`);
    }

    await prisma.subscription.update({
      where: {
        id: currentLocalSubscription.id,
      },
      data: {
        planDetailId: freePlan.id,
        status: 'FREE_DOWNGRADED',
        stripeSubscriptionId: null,
        paidOn: null,
        renovateBefore: null,
      }
    });

    console.log(`Subscription in DB for company ${companyId} updated to the free plan after Stripe cancellation.`);

  } catch (error) {
    console.error(`Error during the cancellation of subscription ${stripeSubscriptionId} and downgrade to free:`, error);
  }
};

const getFreePlanDetails = async () => {
  try {
    return await prisma.planDetail.findFirst({
      where: {
        name: 'FREE',
      },
      select: {
        id: true,
      }
    });
  } catch (error) {
    console.error("Failed to found Free plan:", error);
    return;
  }
};

const handleCheckoutSessionCompleted = async (checkoutSession: Stripe.Checkout.Session, event: Stripe.Event) => {
  const customerId = checkoutSession.customer as string;
  const subscriptionId = checkoutSession.subscription as string;
  const companyIdFromMetadata = Number(checkoutSession.metadata?.companyId);
  const planIdFromMetadata = checkoutSession.metadata?.planId;

  if (!companyIdFromMetadata || !planIdFromMetadata || !customerId || !subscriptionId) {
    console.error("Missing metadata or IDs in the event checkout.session.completed.", { companyIdFromMetadata, planIdFromMetadata, customerId, subscriptionId });
    return new Response("Missing metadata or IDs in the event checkout.session.completed.", { status: 400 });
  }

  try {
    const existingSubscription = await prisma.subscription.findFirst({
      where: { companyId: companyIdFromMetadata, status: 'PENDING', paidOn: null },
      select: { id: true }
    });

    const suscriptionData = {
      planDetailId: planIdFromMetadata,
      paidOn: new Date(),
      renovateBefore: new Date(Date.now() + 30 * dayOnMili), // 30 days
      stripeCustomerId: customerId,
      stripeSubscriptionId: subscriptionId,
      status: 'ACTIVE',
    } as Subscription;

    if (existingSubscription) {
      await prisma.subscription.updateMany({
        where: { companyId: companyIdFromMetadata, status: 'PENDING' },
        data: {
          ...suscriptionData,
        }
      });
    } else
      await prisma.subscription.create({
        data: {
          ...suscriptionData, companyId: companyIdFromMetadata,
        }
      });

    console.log(`Checkout session completed and processed suscription for ${companyIdFromMetadata} company.`);
    return new Response("Payment processed succesfully.", { status: 200 });

  } catch (error) {
    console.error("Error processing the checkout.session.completed event:", error);
    return new Response("Internal server error during checkout processing.", { status: 500 });
  }
};

const handleInvoicePaymentFailed = async (invoice: Stripe.Invoice, event: Stripe.Event) => {
  const customerIdFailed = invoice.customer as string;

  if (!customerIdFailed) {
    console.error("customerId or subscriptionId is missing in the invoice.payment_failed event.");
    return new Response("Incomplete data in the failed payment event.", { status: 400 });
  }

  const companyRecord = await prisma.subscription.findFirst({
    where: { stripeCustomerId: customerIdFailed },
    select: { companyId: true, id: true, planDetailId: true }
  });

  if (!companyRecord) {
    console.error(`Company or subscription not found for the Stripe Customer ID: ${customerIdFailed}. Unable to downgrade the subscription.`);
    return new Response("Company/subscription not found for the customer.", { status: 404 });
  }

  await handleSubscriptionDowngradeToFree({ companyId: companyRecord.companyId, stripeEventId: event.id });

  console.log(`Failed payment event handled for subscription. Canceled and downgraded to free.`);
  return new Response("Failed payment event handled. Subscription canceled and downgraded to free.", { status: 200 });
};

const handleCustomerSubscriptionDeleted = async (deletedSubscription: Stripe.Subscription, event: Stripe.Event) => {
  const customerIdDeleted = deletedSubscription.customer as string;

  if (!customerIdDeleted) {
    console.error("customerId is missing in customer.subscription.deleted event.");
    return new Response("Incomplete data in the deleted subscription event.", { status: 400 });
  }

  const companyRecordForDelete = await prisma.subscription.findFirst({
    where: { stripeCustomerId: customerIdDeleted },
    select: { companyId: true, id: true, planDetailId: true }
  });

  if (!companyRecordForDelete) {
    console.warn(`Company not found for the deleted subscription customer ${customerIdDeleted}.`);
    return new Response('Company not found.', { status: 200 });
  }

  const freePlan = await getFreePlanDetails();
  if (!freePlan) {
    console.error("The free plan for the downgrade was not found in 'customer.subscription.deleted'.");
    return new Response("Free plan configuration error.", { status: 500 });
  }

  await prisma.subscription.update({
    where: { id: companyRecordForDelete.id },
    data: {
      planDetailId: freePlan.id,
      status: 'CANCELED',
      stripeSubscriptionId: null,
      paidOn: null,
      renovateBefore: null,
    }
  });

  console.log(`Subscription ${deletedSubscription.id} deleted. It was ensured that the company ${companyRecordForDelete.companyId} is on the free plan.`);
  return new Response('Removed subscription event handled.', { status: 200 });
};

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

  switch (event.type) {
    case "checkout.session.completed":
      const checkoutSession: Stripe.Checkout.Session = event.data.object;

      return await handleCheckoutSessionCompleted(checkoutSession, event);

    case "invoice.payment_failed":
      const invoice: Stripe.Invoice = event.data.object;
      return await handleInvoicePaymentFailed(invoice, event);

    case "customer.subscription.deleted":
      const deletedSubscription: Stripe.Subscription = event.data.object;
      return await handleCustomerSubscriptionDeleted(deletedSubscription, event);

    default:
      console.log(`Unhandled event type: ${event.type}`);
      return new Response(`Unhandled event type: ${event.type}`, { status: 400 });
  }
}
