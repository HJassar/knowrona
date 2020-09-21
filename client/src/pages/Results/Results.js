import React from 'react';
import { Link } from 'react-router-dom';

import './Results.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Results = () => {
  document.title = 'KnowRona | Results';

  return (
    <div className='Results'>
      <h1><strong>Excellent!</strong></h1>
      <h1>Your score is 96%</h1>
      <button className="primary-btn secondary-btn btn"><FontAwesomeIcon icon={faShareAlt}/><span className="secondary-btn__name">Share Your Score</span></button>
      <Link to='/generatingquiz'><button className="primary-btn btn">Play Again</button></Link>
    </div>
  );
};

export default Results;
