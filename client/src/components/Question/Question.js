import { faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

import './Question.css';

const Question = ({ quizData, handleChoiceClick, correctChoiceId, questionIndex}) => {
  // const lorem = 'Occaecat sit eiusmod pariatur esse. Et nulla cupidatat ex aliquip non elit dolor tempor nostrud nulla proident. Reprehenderit sit magna do et minim nulla laborum cupidatat cillum. Consequat aute exercitation ipsum occaecat elit eu nisi ea ex mollit id et est. Labore tempor laborum non culpa do est. Est eiusmod excepteur dolor sit occaecat cillum anim occaecat pariatur velit elit aliqua. Dolore dolor ea officia est ipsum cillum.'
  // const [stem,choice1,choice2,choice3] = [lorem,lorem,lorem,lorem]
  const [selectedChoiceId, setSelectedChoiceId] = useState('');
  let choiceId;
  const handleClick = (e) => {
    // dataset works with lowercase only
    choiceId = e.target.dataset.choiceid;
    // const choiceId = e.target.getAttribute('data-choiceId')
    setSelectedChoiceId(choiceId);
    handleChoiceClick(choiceId);
  };
  let correctStyle = {
    backgroundColor: 'green'
  };
  let incorrectStyle = {
    backgroundColor: 'red',
    textDecoration: 'line-through'
  };

  
  return (
    <div className='Question'>
      {!quizData ? (
        <h1>PLEASE GO BACK TO MAIN MENU TO GENERATE A QUIZ</h1>
      ) : (
        <div>
          <p>{quizData.questions[questionIndex].stem}</p>
          {
            // WILL NEED TO REFACTOR THIS LOGIC INTO DRYER CODE IF ANYONE WANTS TO TAKE A SHOT
            quizData.questions[questionIndex].choices.map((choice) => {
              if (correctChoiceId === choice.choiceId) {
                return (
                  <p
                    style={correctStyle}
                    onClick={handleClick}
                    key={choice.choiceId}
                    data-choiceid={choice.choiceId}
                  >
                    {choice.choiceText}
                  </p>
                );
              } else if (choice.choiceId === selectedChoiceId) {
                return (
                  <p
                    style={incorrectStyle}
                    onClick={handleClick}
                    key={choice.choiceId}
                    data-choiceid={choice.choiceId}
                  >
                    {choice.choiceText}
                  </p>
                );
              } else {
                return (
                  <p
                    onClick={handleClick}
                    key={choice.choiceId}
                    data-choiceid={choice.choiceId}
                  >
                    {choice.choiceText}
                  </p>
                );
              }
            })
          }
        </div>
      )}
    </div>
  );
};

export default Question;
