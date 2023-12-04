import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useForm } from 'react-hook-form';


const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [action, setAction] = useState('Login');
  const [loginError, setLoginError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log('submit clicked');
    try {
      const response = await axios.post(
        'https://portfolio-builder-backend.onrender.com/v1/user/login',
        {
          email: data.email,
          password: data.password
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response)
      if (response.status) {
        localStorage.setItem("token",response.data.token)
        if(response.data.isFirstLogin || response.data.userData=={}){
          navigate("/resumeUploadPage")
        } else {
          navigate("/PortfolioCard")
        }
        setResponseMessage(response.message);
        console.log('Success:', response.data);
      } else {
        setResponseMessage(response.data.message)
      }
    } catch (error) {
      console.log(error)
      setResponseMessage(error);
      // console.error('Error:', error.response ? error.response.data : error.message);
      setLoginError("Login failed. Please try again.");  // Display error message
    }
    reset();
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

          <div className="login-button">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

