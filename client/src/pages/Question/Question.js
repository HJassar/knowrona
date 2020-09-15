import React, { useEffect } from 'react';

import './Question.css';

const Question = ({ stem, choice1, choice2, choice3 }) => {
  
  return (
    <div className="Question">
      <p>{stem}</p>
      <p>{choice1}</p>
      <p>{choice2}</p>
      <p>{choice3}</p>  
    </div>
  );
}

export default Question;