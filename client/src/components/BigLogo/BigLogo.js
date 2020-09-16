import React from 'react';
import { Link } from 'react-router-dom';

import './BigLogo.css';
// {LINK} is a way of using React-Router-Dom to redirect using the Router system.  
// It acts similary to an a hyperlink
const BigLogo = () => {
  return (
    <div className="BigLogo">
      <h1>KnOwRona</h1>
    </div>
  );
}

export default BigLogo; 