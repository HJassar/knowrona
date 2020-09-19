import React, { useEffect, useState } from 'react';

import './Question.css';

const Question = ({quizData, handleChoiceClick}) => {
  // const lorem = 'Occaecat sit eiusmod pariatur esse. Et nulla cupidatat ex aliquip non elit dolor tempor nostrud nulla proident. Reprehenderit sit magna do et minim nulla laborum cupidatat cillum. Consequat aute exercitation ipsum occaecat elit eu nisi ea ex mollit id et est. Labore tempor laborum non culpa do est. Est eiusmod excepteur dolor sit occaecat cillum anim occaecat pariatur velit elit aliqua. Dolore dolor ea officia est ipsum cillum.'
  // const [stem,choice1,choice2,choice3] = [lorem,lorem,lorem,lorem]
  const handleClick = (e) => {
    // dataset works with lowercase only
    const choiceId = e.target.dataset.choiceid;
    // const choiceId = e.target.getAttribute('data-choiceId')
    handleChoiceClick(choiceId);
  }
  return (
    <div className='Question'>
      {!quizData ? <h1>PLEASE GO BACK TO MAIN MENU TO GENERATE A QUIZ</h1>
        :
        <div>
          <p>{quizData.questions[0].stem}</p>
          {quizData.questions[0].choices.map(choice => {
            return <p 
              onClick={handleClick} 
              key={choice.choiceId}
              data-choiceid={choice.choiceId}>
              {choice.choiceText}
            </p>
          })}
        </div>
      }
      {/* <p className='Question__stem'>{stem}</p>
      <p className='Question__choice'>{choice1}</p>
      <p className='Question__choice'>{choice2}</p>
      <p className='Question__choice'>{choice3}</p> */}
    </div>
  );

}

export default Question;