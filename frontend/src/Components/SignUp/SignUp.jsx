import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [action, setAction] = useState('SignUp');
  const navigate = useNavigate(); // Access the navigate function
  const [signUpError, setSignUpError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      console.log('Inside try');
      const response = await axios.post(
          'https://portfolio-builder-backend.onrender.com/v1/user/signup',
          {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              password: data.password
          },
          {
              headers: {
                  'Content-Type': 'application/json',
              },
          }
      );
      setResponseMessage(response.data);  // Display success message
      console.log(response)
      navigate("/")

      
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setResponseMessage(`Signup failed. Please try again${error.response.data}`); 
      setSignUpError("Signup failed. Please try again.");  // Display error message
  }
    reset();
  };

  const redirectToResumeUploadPage = () => {
    navigate('/resumeUploadPage');
  };

  return (
    <div className="container-signup">
      <div className="header-signup">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              {...register('firstName', { 
                required: 'First Name is Required',
                pattern:{
                  value: /^[A-Za-z ]+$/,
                  message:"only alphabets allowed"
                 }
                })}
            />
            {errors.firstName && (<small className="text-danger">{errors.firstName.message}</small>)}
          </div>

          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              {...register('lastName', { 
                required: 'Last Name is Required',
               pattern:{
                value: /^[A-Za-z ]+$/,
                message:"only alphabets allowed"
               }
                })}
            />
            {errors.lastName && (<small className="text-danger">{errors.lastName.message}</small>)}
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Email-Id"
              {...register('email', 
              { required: 'Email id is Required',
              pattern:{
                value: /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/,
                message:"please enter valid email"
               }
               })}
            />
            {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register('password',  
              { required: 'Password is Required',
              pattern:{
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message:"pass should contain dig, Capi, speci"
               }
              })}
            />
            {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
          </div>

          <div className="signup-button">
            <button type="submit">SignUp</button>
          </div>
        </div> 
      </form>
    </div>
  );
};

export default SignUp;

