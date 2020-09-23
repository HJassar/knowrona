import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


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
        <FontAwesomeIcon icon={faChevronRight} />
        :
        <FontAwesomeIcon icon={faGraduationCap} />
      }
        </button>
  );
}

export default NextButton;