import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import BigLogo from '../components/BigLogo/BigLogo';

import './Splash.css';

const Splash = () => {

  const [animationIsOver,setAnimationIsOver] = useState(false)

  setTimeout(() => {
    setAnimationIsOver(true);
  }, 3000);

  document.title = 'KnowRona | Home';
  if(!animationIsOver){
  return (
    <div className='Splash'>
      <BigLogo />
      <div className='Splash__project-by'>
        A PROJECT BY
        <div className='Splash__cnsplit-logo'>
          <img src='./cnsplit_logo_white.png' alt='' />
        </div>
      </div>
    </div>
  );
  }else{
    return <Redirect to='/home' />
  }
};

export default Splash;
