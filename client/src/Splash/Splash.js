import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import BigLogo from '../components/BigLogo/BigLogo';
import { connect } from 'react-redux';
import { setSplashOver } from '../redux/utils/utils.actions';

import './Splash.css';

const Splash = ( { setSplashOver, splashOver }) => {

  // const [animationIsOver,setAnimationIsOver] = useState(false)

  setTimeout(() => {
    setSplashOver()
  }, 3000);

  document.title = 'KnowRona | Home';
  if(!splashOver){
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
const mapStateToProps = state => ({
  splashOver: state.utils.splashOver
});

const mapDispatchToProps = dispatch => ({
  setSplashOver: () => dispatch(setSplashOver())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
