import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className="registration">
      <h1>
        Create <br /> Account
      </h1>
      <form onSubmit={handleSubmit} className="signup">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>

      <p>or</p>
      <div className="create-icons">
        <FaFacebook />
        <FcGoogle />
        <p>
          Already have an account? <span>Log In</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;