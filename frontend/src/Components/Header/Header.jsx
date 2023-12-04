import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // You can create a separate CSS file for the header styles
import logo from '../Assets/resume genie logo.jpg'

const Header = () => {
  const location = useLocation();

  return (
    <div className="header-top">
      <div className="logo">
      <Link to="/">
        <img src={logo} alt="genie Logo" />
      </Link>
      </div>
      <div className="header-button">
        <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
          <button style={{borderRadius: '5px'}}>Login</button>
        </Link>
        <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>
         <button style={{borderRadius: '5px'}} >Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;