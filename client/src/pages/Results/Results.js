import React from 'react';
import { withRouter } from 'react-router-dom';

import './Results.css';

import BigLogo from '../../components/BigLogo/BigLogo';

const Results = () => {
  document.title = 'KnowRona | Results';

  return (
    <div className='Results'>
      <BigLogo />
      <h1><strong>Excellent!</strong></h1>
      <h1>Your score is 96%</h1>
      <button>Share Your Score</button>
      <button>Play Again</button>
    </div>
  );
};

export default withRouter(Results);
