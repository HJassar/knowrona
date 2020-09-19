import React from 'react';

import './NextButton.css';

const NextButton = ({ handleNextClick }) => {
  const handleClick = () => {
    handleNextClick();
  }
  return (
    <div className="NextButton">
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default NextButton;