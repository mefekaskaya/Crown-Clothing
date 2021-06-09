import React from "react";
import "./CustomButton.scss";

export default function CustomButton({
  children,
  isGoogleLogin,
  inverted,
  ...props
}) {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleLogin ? "google-login" : ""
      } custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}
