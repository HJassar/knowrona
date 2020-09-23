import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


import './NextButton.css';

const NextButton = (props) => {

  return (
    <button
      className="NextButton"
      onClick={props.click}
    >
      {!props.isGetResults ?
        <FontAwesomeIcon icon={faCaretRight} />
        :
        <FontAwesomeIcon icon={faGraduationCap} />
      }
    </button>
  );
}

export default NextButton;