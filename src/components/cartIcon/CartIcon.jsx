import React from "react";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cart";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";

export default function CartIcon() {
  const dispatch = useDispatch();
  const toggleCart = () => dispatch(toggleCartHidden());

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
