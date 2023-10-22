import React, { useState, useEffect } from 'react';
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
  const [loginError, setLoginError] = useState("");

  const hideErrorMessages = () => {
    setEmailError("");
    setPasswordError("");
    setLoginError("");
  };

  // Effect to trigger error message hiding after 1500 seconds
  useEffect(() => {
    const timer = setTimeout(hideErrorMessages, 1000);
    return () => clearTimeout(timer);
  }, [emailError, passwordError, loginError]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Handle email validation
    if (name === "email") {
        setEmailError(value.trim() === "" ? "" : validateEmail(value) ? "" : "Invalid Email Format");
    }

    // Handle password validation
    if (name === "password") {
        setPasswordError(value.trim() === "" ? "" : validatePassword(value) ? "" : "Password must have atleast -[one cap, one dig, one spec]");
    }
  };

  const handleLogin = () => {
    if (formData.email.trim() === "" && formData.password.trim() === "") {
        setLoginError("Please fill in the inputs.");
        return;
      } else {
        setLoginError(""); // Reset login error when other conditions are met
      }

    if (formData.email.trim() === "") {
        setEmailError("Email is required");
        return;
      }
    
      // Check for empty password
      if (formData.password.trim() === "") {
        setPasswordError("Password is required");
        return;
      }

    // Validate the email and password fields
    if (!validateEmail(formData.email)) {
      setEmailError("Invalid Email");
      return;
    }

    if (!validatePassword(formData.password)) {
      setPasswordError("Invalid Password");
      return;
    }

    
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    setFormData({
        email: "",
        password: ""
    });
    setEmailError("");
    setPasswordError("");

  };

  const validateEmail = (email) => {
    // Regular expression to validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
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
          </div> 
          {emailError && <div className="error-message">{emailError}</div>}
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
          </div>
          {passwordError && <div className="error-message">{passwordError}</div>}
          {loginError && <div className="error-message">{loginError}</div>}
        {/* </div> */}
        <div className="login-button">
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
