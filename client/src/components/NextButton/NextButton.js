import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


import './NextButton.css';

const NextButton = ({ handleNextClick, buttonText }) => {
  const handleClick = () => {
    handleNextClick();
  }
  return (
      <button 
      className="NextButton"
      onClick={handleClick}>
        {buttonText === 'next'?
        <FontAwesomeIcon icon={faCaretRight} />
        :
        <FontAwesomeIcon icon={faGraduationCap} />
      }
        </button>
  );
}

export default NextButton;