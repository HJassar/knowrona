import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [headerLogo, setHeaderLogo] = useState(true);

  const headerLogoStyle = {
    display: headerLogo ? 'block' : 'none'
  };

  let location = useLocation().pathname;

  useEffect(() => {
    if (['/landing', '/mainmenu', '/generatingquiz'].includes(location)) {
      setHeaderLogo(false);
    } else {
      setHeaderLogo(true);
    }
  }, []);

  return (
    <div className="Header">
      <div style={headerLogoStyle} className="Header__logo">
        <h1>KnowRona</h1>
      </div>
      <div className="Header__menu">
        <Link className="Header__menu-button" to="/mainMenu">
          Main Menu
        </Link>
      </div>
    </div>
  );
};

export default Header;
