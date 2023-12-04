import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // You can create a separate CSS file for the header styles

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-top-Logout" style={{position: 'relative', float:'right', right: '2rem', top:'0.7rem',}}>
      <div className="header-button-Logout">
        <Link to="/">
          <button style={{borderRadius: '5px'}}>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

// style={{position: 'relative', float:'right', margin:'5px', bottom: '6rem'}}