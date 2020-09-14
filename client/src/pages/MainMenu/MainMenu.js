import React from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';

const MainMenu = () => {
  return (
    <div className="MainMenu">
      <h1>KnOwRona</h1>
      <Link to='/generatingquiz'>
        <button>CONTINUE AS GUEST</button>
      </Link>
      <button>LOGIN</button>
    </div>
  );
}

export default MainMenu;