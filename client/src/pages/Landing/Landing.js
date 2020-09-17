import React from 'react';
import BigLogo from '../../components/BigLogo/BigLogo';

import './Landing.css';

const Landing = () => {
  return (

    <div className="Landing">
      <BigLogo />
      <div className='Landing__project-by'>A PROJECT BY
        <div className='Landing__cnsplit-logo'>
          <img src='./cnsplit_logo_white.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Landing;