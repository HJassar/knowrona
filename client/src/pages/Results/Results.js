import React from 'react';
import { withRouter } from 'react-router-dom';

import './Results.css';

import BigLogo from '../../components/BigLogo/BigLogo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Results = () => {
  document.title = 'KnowRona | Results';

  return (
    <div className='Results'>
      <BigLogo />
      <h1><strong>Excellent!</strong></h1>
      <h1>Your score is 96%</h1>
      <button className="primary-btn secondary-btn btn"><FontAwesomeIcon icon={faShareAlt}/><span className="secondary-btn__name">Share Your Score</span></button>
      <button className="primary-btn btn">Play Again</button>
    </div>
  );
};

export default withRouter(Results);
