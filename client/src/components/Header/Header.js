import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.css';
import logo from '../../assets/logo_white.png';

const Header = () => {
  let location = useLocation().pathname;
  const displayHeaderLogo = () => {
    if (!['/', '/mainmenu', '/generatingquiz', '/landing'].includes(location)) {
      return <HeaderLogo />;
    }
  };

  return (
    <header className='Header'>
      {displayHeaderLogo()}
      <div className='Header__menu'>
        <Link className='Header__menu-button' to='/mainmenu'>
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </div>
    </header>
  );
};

const HeaderLogo = () => {
  return (
    <>
      <div className='Header__logo'>
        <h1>
          Kn
          <div className='Header__img'>
            <img src={logo} alt='Logo' />
          </div>
          wRona
        </h1>
      </div>
    </>
  );
};

export default Header;
