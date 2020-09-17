import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {

  let location = useLocation().pathname;


  return (
    <div className="Header">
        {['/', '/mainmenu', '/generatingquiz'].includes(location) ? null : 
      <div className="Header__logo">
        <h1>KnowRona</h1>
      </div>
      }
      <div className="Header__menu">
      <Link className="Header__menu-button"
        to="/mainmenu"
        >
         Main Menu
        </Link>
      </div>
    </div>
  );
}

export default Header;