import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cart";
import { selectCartItemsCount } from "../../redux/selectors/cart";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";

export default function CartIcon() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectCartItemsCount);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
}
