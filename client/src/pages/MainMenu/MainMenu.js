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
        <button className="primary-btn">Generate a Quiz!
        {/* AS GUEST */}
        </button>
      </Link>
      <button className="primary-btn" style={loginButtonStyle}>LOGIN</button>
    </div>
  );
}

export default MainMenu;