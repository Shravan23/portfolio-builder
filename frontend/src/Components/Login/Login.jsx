import React, { useState } from 'react';
import './Login.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Handle email validation
    if (name === "email") {
        setEmailError(value.trim() === "" ? "" : validateEmail(value) ? "" : "Invalid Email");
    }

    // Handle password validation
    if (name === "password") {
        setPasswordError(value.trim() === "" ? "" : validatePassword(value) ? "" : "Invalid Password");
    }
  };

  const handleLogin = () => {
    if (formData.email.trim() === "") {
        setEmailError("Email is required");
        return;
      }
    
      // Check for empty password
      if (formData.password.trim() === "") {
        setPasswordError("Password is required");
        return;
      }
    // Convert formData to JSON format and send it to the server or perform any other action
    const jsonData = JSON.stringify(formData);
    console.log(jsonData); // You can send jsonData to your server

    // Validate the email and password fields
    if (!validateEmail(formData.email)) {
      setEmailError("Invalid Email");
      return;
    }

    if (!validatePassword(formData.password)) {
      setPasswordError("Invalid Password");
      return;
    }

    if (emailError || passwordError) {
        return;
      }

  };

  const validateEmail = (email) => {
    // Regular expression to validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters long and should not contain spaces
    return password.length >= 8 && !password.includes(' ');
  };

  return (
    <div className='container-login'>
      <div className="header-Login">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
          <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="email" placeholder="Email-Id" value={formData.email} onChange={handleInputChange} />
          {emailError && <div className="error-message">{emailError}</div>}
          </div> 
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        <div className="login-button">
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
