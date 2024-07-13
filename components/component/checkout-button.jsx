"use client";

import { Button } from "../ui/button";
import { loadStripe } from "@stripe/stripe-js";
// import { supabase } from "@/utils/supabaseClient";

export function CheckoutButton(props) {
  const handleCheckout = async () => {
    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: "price_1PcDygHls8Ac4l1WL6Uzw57d",
      }),
    });
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <Button disabled={!props.isFormValid} className="ml-auto mr-auto mt-3">
      {!props.isFormValid
        ? "Please fill out all required fields"
        : "Continue to Checkout"}
    </Button>
  );
}
