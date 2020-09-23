import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Result.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Results = (props) => {
  document.title = 'KnowRona | Results';

  const result = props.result;
  const message =
        result === 100 ? 'PERFECT'
        : result > 90 ? 'EXCELLENT'
        : result > 80 ? 'GOOD JOB!'
        : result > 70 ? 'NEED TO STUDY'
        : result > 60 ? 'CNN/FOX NEWS MUCH?'
        : 'UHM...';

  return (
    <div className='Results'>
      <h1><strong>{result}</strong></h1>
      <h1>Your score is {message}%</h1>
      <button className="primary-btn secondary-btn btn">
        <FontAwesomeIcon icon={faShareAlt} />
        <span className="secondary-btn__name">Share Your Score</span>
      </button>
      <Link to='/generatingquiz'><button className="primary-btn btn">Play Again</button></Link>
    </div>
  );
};

export default Results;
