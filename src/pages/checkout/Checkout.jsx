import React from "react";
import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../redux/selectors/cart";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import StripeButton from "../../components/stripeButton/StripeButton";

import "./Checkout.scss";

export default function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
}
