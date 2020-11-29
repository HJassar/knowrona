import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
// {LINK} is a way of using React-Router-Dom to redirect using the Router system.  
// It acts similary to an a hyperlink
const Footer = () => {
  return (
    <div className="Footer">
      <nav className="Footer__nav">
        <ul className="Footer__list">
          <li className="Footer__list-item">
            <a href="https://www.facebook.com/KnowRona" target="_blank" className="Footer__link">About</a>
          </li>
          
          <li className="Footer__list-item">
            <a href="https://www.facebook.com/KnowRona" target="_blank" className="Footer__link">Contact Us</a>
          </li>

          <li className="Footer__list-item">
            <a className="Footer__link Footer__cnsplit" href="https://cnsplit.com" target="_blank" rel="noopener noreferrer">
              A Project by
              <div className="Footer__cnsplit-logo">
                <img src='/cnsplit_logo_white.png' alt=''></img>
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <div className="Footer__copyrights">
        <p className="Footer__copyright-text">
          All rights reserved 2020 KnowRona
        </p>
      </div>
    </div>
  );
}

export default Footer; 