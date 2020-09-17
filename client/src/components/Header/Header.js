import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [headerLogo, setHeaderLogo] = useState(true); //This toggles the headers logo and the setHeaderLogo will change the boolean value

  let location = useLocation().pathname; //The page that you are on

  // This will set the logo to appear if you are on the landing page, main menu, or generating quiz page when it renders.
  useEffect(() => {
    if (['/landing', '/mainmenu', '/generatingquiz'].includes(location)) {
      setHeaderLogo(false);
    } else {
      setHeaderLogo(true);
    }
  }, []);

  return (
    <div className='Header'>
      {
        headerLogo ? (
          <HeaderLogo />
        ) : (
          ''
        ) /**The header logo will appear if the header logo state is true */
      }
      <div className='Header__menu'>
        <Link className='Header__menu-button' to='/mainMenu'>
          Main Menu
        </Link>
      </div>
    </div>
  );
};

const HeaderLogo = () => {
  return (
    <>
      <div className='Header__logo'>
        <h1>KnowRona</h1>
      </div>
    </>
  );
};

export default Header;
