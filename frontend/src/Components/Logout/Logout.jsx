import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Header/Header.css';

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
    localStorage.setItem("token", null);
  };

  return (
    <div className="header-top-Logout" style={{ position: 'relative', float: 'right', right: '2rem', top: '0.7rem', }}>
      <div className="header-button-Logout">
        <Link to="/">
          <button style={{ borderRadius: '5px' }}>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

// style={{position: 'relative', float:'right', margin:'5px', bottom: '6rem'}}