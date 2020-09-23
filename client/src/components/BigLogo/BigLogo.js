import React from 'react';
import logo from '../logo_white.png'
import './BigLogo.css';

const BigLogo = () => {
  return (
    <div className='BigLogo'>
      <h1>
        Kn
        <div className='BigLogo__logo'>
          <img src={logo} alt='Logo' />
        </div>
        wRona
      </h1>
    </div>
  );
};

export default BigLogo;
