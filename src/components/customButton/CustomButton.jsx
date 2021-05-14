import React from "react";
import "./CustomButton.scss";

export default function CustomButton({ children, isGoogleLogin, ...props }) {
  return (
    <button
      className={`${isGoogleLogin ? "google-login" : ""} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}
