import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <h1>KnowRona</h1>
      </div>
      <div className="Header__menu">
        <Link
        className="Header__menu-button"
        to="/mainMenu"
        >
         Main Menu
        </Link>
      </div>
    </div>
  );
}

export default Header;