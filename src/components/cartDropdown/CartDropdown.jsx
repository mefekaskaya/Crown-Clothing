import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../customButton/CustomButton.jsx";
import CartItem from "../cartItem/CartItem.jsx";
import { selectCartItems } from "../../redux/selectors/cart";
import "./CartDropdown.scss";

export default function CartDropdown() {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
