import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../Assets/resume genie logo.jpg';

const Header = () => {
  const location = useLocation();

  return (
    <div className="header-top">
      <div className="logo">
      <Link to="/"> <h3>Resume Genie</h3> </Link>
      </div>
      <div className="header-button">
        <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
          <h4>Login</h4></Link>  
        <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>
         <h4>Signup</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;