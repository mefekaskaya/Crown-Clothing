import React from "react";
import "./CustomButton.scss";

export default function CustomButton({ children, ...props }) {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  );
}
