import React from 'react';
import BigLogo from '../../components/BigLogo/BigLogo';

import './Landing.css';

const Landing = () => {
  return (
    
    <div className="Landing">
      <BigLogo />
      <h3>A PROJECT BY <img src='./cnsplit_logo_white.png' /></h3>
    </div>
  );
}

export default Landing;