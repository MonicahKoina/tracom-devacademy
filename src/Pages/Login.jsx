import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
function Login() {

  const [loginvalue, setLoginValue] = useState({email:"", password:"", remember:false})

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginvalue); 
    
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
          value={loginvalue.email}  
          onChange={(e) => setLoginValue({... loginvalue, email:e.target.value})}

        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={loginvalue.password}
          onChange={(e) => setLoginValue({... loginvalue, password:(e.target.value)})}
          />
        <label>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={loginvalue.remember}
            onChange={(e) => setLoginValue({... loginvalue, remember:e.target.value})}

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