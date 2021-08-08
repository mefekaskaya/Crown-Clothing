import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import CustomButton from "../customButton/CustomButton.jsx";
import CartItem from "../cartItem/CartItem.jsx";

import { selectCartItems } from "../../redux/selectors/cart";
import { toggleCartHidden } from "../../redux/actions/cart";

import "./CartDropdown.scss";

export default function CartDropdown() {
  const history = useHistory();
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}
