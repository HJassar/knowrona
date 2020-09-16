import React from 'react';
import { Link } from 'react-router-dom';

import BigLogo from '../../components/BigLogo/BigLogo'

import './MainMenu.css';

const MainMenu = () => {

  // Temporarily hiding the login button
  const loginButtonStyle = {
    display: "none"
  }

  return (
    <div className="MainMenu">
      <BigLogo />
      <Link to='/generatingquiz'>
        <button className="btn primary-btn">Generate a Quiz!
        </button>
      </Link>
      <button className="btn primary-btn" style={loginButtonStyle}>LOGIN</button>
    </div>
  );
}

export default MainMenu;