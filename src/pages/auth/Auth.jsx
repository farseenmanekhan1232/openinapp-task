import React, { useState } from "react";

import { auth, googleAuthProvider, appleAuthProvider } from "../../firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  OAuthProvider,
} from "firebase/auth";

import "./Auth.css";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  if (user) {
    navigate("/dashboard");
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        // ...
      })
      .catch((error) => {
        setUser(null);
        // ..
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        setUser(result.user);
      })
      .catch((error) => {
        setUser(null);
      });
  };

  const signInWithApple = () => {
    signInWithPopup(auth, appleAuthProvider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        setUser(result.user);
      })
      .catch((error) => {
        setUser(null);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-black-partition">
        <h1>Board.</h1>
      </div>
      <div className="auth-white-partition">
        <div className="auth-section">
          <h1 className="signin-header">
            <strong>Sign In</strong>
          </h1>
          <h3>Sign in to your account</h3>
          <div className="auth-buttons">
            <button className="auth-button" onClick={signInWithGoogle}>
              <img src={google} alt="google" className=" google" />
              Sign in with Google
            </button>
            <button className="auth-button" onClick={signInWithApple}>
              <img src={apple} alt="apple" className="apple" />
              Sign in with Apple
            </button>
          </div>
          <div className="form-section">
            <form action="" onSubmit={signIn}>
              <h4>Email address</h4>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h4>Password</h4>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
