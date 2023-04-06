import React from "react";

import "./Auth.css";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";

const Auth = () => {
  return (
    <div className="auth-page">
      <div className="black-partition">
        <h1>Board.</h1>
      </div>
      <div className="white-partition">
        <div className="auth-section">
          <h1 className="signin-header">
            <strong>Sign In</strong>
          </h1>
          <h3>Sign in to your account</h3>
          <div className="auth-buttons">
            <button className="auth-button">
              <img src={google} alt="google" className=" google" />
              Sign in with Google
            </button>
            <button className="auth-button">
              <img src={apple} alt="apple" className="apple" />
              Sign in with Apple
            </button>
          </div>
          <div className="form-section">
            <form action="">
              <h4>Email address</h4>
              <input type="email" />
              <h4>Password</h4>
              <input type="password" />
              <a href="#">
                <h5>Forgot password?</h5>
              </a>
              <button type="submit">Sign In</button>
            </form>
            <h5 className="register">
              Don't have an account <a href="#">Register here</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
