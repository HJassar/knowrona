import React from 'react';

import './Question.css';

const Question = ({quizIds}) => {

  return (
    <div className="Question">
      {quizIds.map(question => <p key={question._id}>{question._id}</p>)}
      {/* <p>{stem}</p>
      <p>{choice1}</p>
      <p>{choice2}</p>
      <p>{choice3}</p> */}
    </div>
  );
}

export default Question;