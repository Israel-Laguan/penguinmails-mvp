"use client";

import { getStripe } from "@/lib/stripe-client";
import { useState } from "react";
import purchase from "@/lib/actions/purchase";

export const PurchaseButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);

    const res = await purchase();

    if (!res.checkoutSessionId) {
      console.error("Failed to create stripe checkout session.");
      setIsLoading(false);
      return;
    }

    const stripe = await getStripe();
    const responseStrip = await stripe?.redirectToCheckout({
      sessionId: res.checkoutSessionId,
      successUrl: `${process.env.NEXTAUTH_URL}/?checkout=success`,
      cancelUrl: `${process.env.NEXTAUTH_URL}/?checkout=cancelled`,
    });

    setIsLoading(false);
  };

  return (
    <button
      onClick={onSubmit}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white"
    >
      {isLoading ? "Loading..." : "Purchase"}
    </button>
  );
};
