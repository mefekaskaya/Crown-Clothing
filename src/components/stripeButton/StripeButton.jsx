import React from "react";
import StripteCheckout from "react-stripe-checkout";

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JC3hzCGxbpLeludz5MN9XdVp1ldtgggM6XCAUQ7yNW5pc1QM0WMTogxs1aixE0jfpg0iYY4kYU0UhLqbgGgLYbG00KsypLVY2";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successfull");
  };
  return (
    <StripteCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
