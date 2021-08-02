import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { registerStart } from "../../redux/actions/user";

import "./Register.scss";

export default function Register() {
  const dispatch = useDispatch();

  const [userCredentials,setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    dispatch(registerStart({ displayName, email, password }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({...userCredentials, [name]: value });
  };

  return (
    <div className="register">
      <h2 className="title">I do not have an account</h2>
      <span>Register with your email and password</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit" onClick={handleSubmit}>
          REGISTER
        </CustomButton>
      </form>
    </div>
  );
}
