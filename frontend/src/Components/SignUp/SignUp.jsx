import React, { useState } from 'react';
import './SignUp.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const SignUp = () => {
  const [action, setAction] = useState("SignUp");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && !password.includes(' ');
  };

  const convertToJSON = () => {
    const formDataJSON = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    return JSON.stringify(formDataJSON);
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setFirstNameError(value.trim() === "" ? "" : validateName(value) ? "" : "Invalid First Name");
  };

  const handleLastNameChange = (e) => {
    const value1 = e.target.value;
    setLastName(value1);
    setLastNameError(value1.trim() === "" ? "" : validateName(value1) ? "" : "Invalid Last Name");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value.trim() === "" ? "" : validateEmail(value) ? "" : "Invalid Email");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.trim() === "" ? "" : validatePassword(value) ? "" : "Invalid Password");
  };

  const handleSignUp = () => {
    // Validate the input fields
    if (!validateName(firstName)) {
      setFirstNameError("Invalid First Name");
    }
    if (!validateName(lastName)) {
      setLastNameError("Invalid Last Name");
    }
    if (!validateEmail(email)) {
      setEmailError("Invalid Email");
    }
    if (!validatePassword(password)) {
      setPasswordError("Invalid Password");
    }

    if (firstNameError || lastNameError || emailError || passwordError) {
      return;
    }

    // Convert form data to JSON format
    const jsonData = convertToJSON();
    console.log(jsonData);

    // You can send the JSON data to your server or perform other actions with it.
  };

  return (
    <div className='container-signup'>
      <div className="header-signup">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {firstNameError && <div className="error-message">{firstNameError}</div>}
        </div>

        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          {lastNameError && <div className="error-message">{lastNameError}</div>}
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email-Id"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        <div className="login-button">
          <button className="btn" onClick={handleSignUp}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
