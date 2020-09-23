import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


import './NextButton.css';

const NextButton = (props) => {

  

  return (
    <button
      className="NextButton"
      onClick={props.click}
    >
      {!props.isGetResults ?
        <FontAwesomeIcon icon={faChevronRight} />
        :
        <FontAwesomeIcon icon={faGraduationCap} />
      }
    </button>
  );
}

export default NextButton;