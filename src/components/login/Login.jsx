import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";

import { googleLoginStart, emailLoginStart } from '../../redux/actions/user';

import "./Login.scss";

export default function Login() {
  const dispatch = useDispatch();
  
  const [userCredentials,setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailLoginStart({email, password}));
  };

  return (
    <div>
      <div className="login">
        <h2>I already have an account</h2>
        <span>Login with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Login</CustomButton>
            <CustomButton type='button' onClick={() => dispatch(googleLoginStart())} isGoogleLogin>
              Login with Google
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
}