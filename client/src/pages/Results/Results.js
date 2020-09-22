import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Results.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Results = ({ score, resultsText }) => {
  document.title = 'KnowRona | Results';

  return (
    <div className='Results'>
      <h1><strong>{resultsText}</strong></h1>
      <h1>Your score is {score}%</h1>
      <button className="primary-btn secondary-btn btn">
        <FontAwesomeIcon icon={faShareAlt} />
        <span className="secondary-btn__name">Share Your Score</span>
      </button>
      <Link to='/generatingquiz'><button className="primary-btn btn">Play Again</button></Link>
    </div>
  );
};

export default Results;
