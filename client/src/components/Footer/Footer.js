import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <nav className="footer-nav">
        <ul>
          <li><Link to='about'>About</Link></li>
          <li><Link to='contactus'>Contact Us</Link></li>
          <li><Link to='privacy'>Privacy</Link></li>
          <li><Link to='termsofuse'>Terms of Use</Link></li>
          <li>A Project by <img src='./cnsplit_logo_white.png'></img> </li>
        </ul>
      </nav>
      <div className="copyrights">
        <p>All rights reserved 2020 KnowRona</p>
      </div>
    </div>
  );
}

export default Footer;