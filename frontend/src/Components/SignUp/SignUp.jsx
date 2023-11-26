import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("SignUp");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const hideErrorMessages = () => {
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setSignUpError("");
  };

  // Effect to trigger error message hiding after 5 seconds
  useEffect(() => {
    const timer = setTimeout(hideErrorMessages, 1500);
    return () => clearTimeout(timer);
  }, [firstNameError, lastNameError, emailError, passwordError, signUpError]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "firstName") {
      setFirstNameError(value.trim() === "" ? "" : validateName(value) ? "" : "Only alphabets allowed");
    }
    if (name === "lastName") {
      setLastNameError(value.trim() === "" ? "" : validateName(value) ? "" : "Only alphabets allowed");
    }
    if (name === "email") {
      setEmailError(value.trim() === "" ? "" : validateEmail(value) ? "" : "Invalid Email Format");
    }
    if (name === "password") {
      setPasswordError(value.trim() === "" ? "" : validatePassword(value) ? "" : "Password must have at least -[one cap, one dig, one spec]");
    }
  };

  const handleSignUp = () => {
    let hasError = false;

    if (
      formData.firstName.trim() === "" &&
      formData.lastName.trim() === "" &&
      formData.email.trim() === "" &&
      formData.password.trim() === ""
    ) {
      setSignUpError("Please fill in all the inputs.");
      return;
    }

    if (formData.firstName.trim() === "") {
      setFirstNameError("First Name is required");
      hasError = true;
    } else if (!validateName(formData.firstName)) {
      setFirstNameError("Invalid First Name");
      hasError = true;
    }

    if (formData.lastName.trim() === "") {
      setLastNameError("Last Name is required");
      hasError = true;
    } else if (!validateName(formData.lastName)) {
      setLastNameError("Invalid Last Name");
      hasError = true;
    }

    if (formData.email.trim() === "") {
      setEmailError("Email is required");
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      setEmailError("Invalid Email");
      hasError = true;
    }

    if (formData.password.trim() === "") {
      setPasswordError("Password is required");
      hasError = true;
    } else if (!validatePassword(formData.password)) {
      setPasswordError("Invalid Password");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setSignUpError(""); // Reset any previous sign-up error
    // You can send the form data to your server or perform other actions here
    console.log("Form data:", formData);

    // Clear the input fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });

    // Redirect to the ResumeUpload page
    navigate('/ResumeUpload');
  };

  const handleTestButtonClick = () => {
    // Navigate to the SimpleForm page
    navigate('/SimpleForm');
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="container-signup">
      <div className="header-signup">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        {firstNameError && <div className="error-message">{firstNameError}</div>}

        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        {lastNameError && <div className="error-message">{lastNameError}</div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            name="email"
            placeholder="Email-Id"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        {emailError && <div className="error-message">{emailError}</div>}

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        {passwordError && <div className="error-message">{passwordError}</div>}
        {signUpError && <div className="error-message">{signUpError}</div>}

        <div className="login-button">
          <button className="btn" onClick={handleSignUp}>
            SignUp
          </button>
        </div>
      </div>

      {/* Test button for navigation */}
      <div className="test-button">
        <button className="btn" onClick={handleTestButtonClick}>
          Test
        </button>
      </div>
    </div>
  );
};

export default SignUp;
