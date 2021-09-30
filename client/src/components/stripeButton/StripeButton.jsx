import React from "react";
import StripteCheckout from "react-stripe-checkout";
import axios from 'axios';

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JC3hzCGxbpLeludz5MN9XdVp1ldtgggM6XCAUQ7yNW5pc1QM0WMTogxs1aixE0jfpg0iYY4kYU0UhLqbgGgLYbG00KsypLVY2";
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(res => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error ' + JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you use the provided credit card')
    })
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
