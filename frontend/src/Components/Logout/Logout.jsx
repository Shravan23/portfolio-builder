import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Header/Header.css';
import './Logout.css'

const Header = () => {
  const location = useLocation();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'https://portfolio-builder-backend.onrender.com/v1/user/login',
        {
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

    } catch (error) {
      console.log(error)
    }
    localStorage.setItem("token", "");
  };

  return (
    <div className="header-top-Logout">
      <div className="Logout-link">
        <Link to="/"><h4>Logout</h4></Link>
      </div>
    </div>
  );
};

export default Header;