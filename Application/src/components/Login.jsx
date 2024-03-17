// Login.jsx
import React, { useState } from "react";
import "../styles/Login.css"; // Make sure the path is correct

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email, "Password: ", password);
    // Pass the email to the onLoginSuccess function
    onLoginSuccess(email);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="options-group">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="register-link">
          Don't have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
}
