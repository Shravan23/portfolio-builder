import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // You can create a separate CSS file for the header styles
import logo from '../Assets/resume genie logo.jpg'

const Header = () => {
  const location = useLocation();

  return (
    <div className="header-top">
      <div className="logo">
        <img src={logo} alt="genie Logo" />
      </div>
      <div className="header-button">
        <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
          <button>Login</button>
        </Link>
        <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>
         <button>Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
