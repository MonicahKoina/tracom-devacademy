import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", remember);
  };

  return (
    <div className="sign-in">
      <h1>Welcome Back</h1>
      <p>Please enter your details</p>
      <form onSubmit={handleSubmit} className="log-in">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <p>Remember me</p>
        </label>


        <div className="log-in-btns">
          <button className="signin-btn">Sign In</button>
          <h5>Or</h5>
          <button className="singin-google">
          <span>
              <FcGoogle />
            </span>
            <p>Sign in with Google</p> 
          </button>
          <p>Don't have an account? Sign up for free</p>
        </div>
      </form>
    </div>
  );
}

export default Login;