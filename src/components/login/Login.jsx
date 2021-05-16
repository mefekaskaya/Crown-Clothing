import React, { Component } from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./Login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <div className="login">
          <h2>I already have an account</h2>
          <span>Login with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              value={this.state.email}
              handleChange={this.handleChange}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              label="password"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />
            <div className="buttons">
              <CustomButton type="submit">Login</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleLogin>
                Login with Google
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
