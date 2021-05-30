import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./Header.scss";

export default function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
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
          <div className="option" onClick={() => auth.signOut()}>
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
