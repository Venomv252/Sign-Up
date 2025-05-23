import React, { useState } from "react";
import "./First.css";

export default function Main() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Account created successfully!");
      // Further backend integration goes here
    }
  };

  return (
    <main className="main-content">
      <div className="auth-container signup-mode">
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <h2>Create Account</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="form-group">
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error-text">{errors.password}</p>}
              </div>
              <button type="submit" className="auth-btn">Sign Up</button>
            </form>
            <div className="auth-switch">
              <p>Already have an account? <button type="button">Login</button></p>
            </div>
          </div>
        </div>
        <div className="auth-animation-container">
          <div className="animation-circle circle-1"></div>
          <div className="animation-circle circle-2"></div>
          <div className="animation-circle circle-3"></div>
          <div className="animation-content">
            <h2>Welcome!</h2>
            <p>Login to access your personalized dashboard</p>
            <button className="animation-btn">Login</button>
          </div>
        </div>
      </div>
    </main>
  );
}
