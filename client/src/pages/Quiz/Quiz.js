import React from 'react';
import axios from 'axios';

import './Quiz.css';
import Question from '../Question/Question';

const Quiz = ({quizData}) => {
  const handleChoiceClick = (choiceId) => {
    console.log('choiceId', choiceId);
    axios.get(`/questions/quiz/${quizData.quizId}/${quizData.questions[0].id}/${choiceId}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  return (
    <div className="Quiz">
      <Question
              //Below is prop declaration. Basically you are passing information from the current 'GeneratingQuiz' component to the child 'Question' component. By default, these will show up in the 'Question' component as prop.stem, prop.choice1, etc. However, you can descructure them out as is done in the 'Question' component.
                 quizData={quizData}
                 handleChoiceClick={handleChoiceClick}
              // stem={quizData[questionIndex].stem}
              // choice1={quizData[questionIndex].choices[0].text}
              // choice2={quizData[questionIndex].choices[1].text}
              // choice3={quizData[questionIndex].choices[2].text}
            />
    </div>
  );
}

export default Quiz;