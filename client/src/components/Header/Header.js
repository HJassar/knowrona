import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'




import './Header.css';

const Header = () => {

  let location = useLocation().pathname;


  return (
    <header className="Header">
      {['/', '/mainmenu', '/generatingquiz'].includes(location) ? null :
        <div className="Header__logo">
          <h1>Kn
            <div className="Header__img">
            <img src='/logo_white.png' />
            </div>
            wRona</h1>
        </div>
      }
      <div className="Header__menu">
        <Link className="Header__menu-button"
          to="/mainmenu"
        >
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </div>
    </header>
  );
}

export default Header;