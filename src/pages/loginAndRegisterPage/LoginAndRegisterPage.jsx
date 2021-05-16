import React from "react";
import Login from "../../components/login/Login.jsx";
import Register from "../../components/register/Register.jsx";
import "./LoginAndRegisterPage.scss";

export default function LoginAndRegister() {
  return (
    <div className="login-and-register">
      <Login />
      <Register />
    </div>
  );
}
