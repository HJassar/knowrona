import React from 'react';

import './NextButton.css';

const NextButton = ({ handleNextClick, buttonText }) => {
  const handleClick = () => {
    handleNextClick();
  }
  return (
    <div className="NextButton">
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default NextButton;