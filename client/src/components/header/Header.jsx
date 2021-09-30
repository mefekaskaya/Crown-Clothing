import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCartHidden } from "../../redux/selectors/cart";
import { selectCurrentUser } from "../../redux/selectors/user";
import { logoutStart } from '../../redux/actions/user';

import "./Header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => dispatch(logoutStart())}>
            LOG OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            LOGIN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}
