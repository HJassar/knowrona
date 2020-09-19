import React, { useState } from 'react';
import axios from 'axios';

import './Quiz.css';
import Question from '../Question/Question';
import Explanation from '../../components/Explanation/Explanation';

const Quiz = ({ quizData }) => {
  const [correctChoiceId, setCorrectChoiceId] = useState('');
  const [explanationText, setExplanationText] = useState('');

  const handleChoiceClick = (choiceId) => {
    console.log('choiceId:', choiceId);
    axios
      .get(
        `/questions/quiz/${quizData.quizId}/${quizData.questions[0].id}/${choiceId}`
      )
      .then((res) => {
        console.log(res.data);
        const choices = res.data.choices;
        console.log(choices);
        choices.map((choice) => {
          if (choice.isCorrect === true) {
            console.log(`${choice.choiceId} is correct`);
            setCorrectChoiceId(choice.choiceId);
          }
        });
        setExplanationText(res.data.explanation);
      })
      .catch((err) => console.log(err));
  };

  document.title = 'KnowRona | Quiz';
  return (
    <div className='Quiz'>
      <Question
        //Below is prop declaration. Basically you are passing information from the current 'GeneratingQuiz' component to the child 'Question' component. By default, these will show up in the 'Question' component as prop.stem, prop.choice1, etc. However, you can descructure them out as is done in the 'Question' component.
        quizData={quizData}
        handleChoiceClick={handleChoiceClick}
        correctChoiceId={correctChoiceId}
        // stem={quizData[questionIndex].stem}
        // choice1={quizData[questionIndex].choices[0].text}
        // choice2={quizData[questionIndex].choices[1].text}
        // choice3={quizData[questionIndex].choices[2].text}
      />
      {correctChoiceId ? (
        <Explanation explanationText={explanationText} />
      ) : null}
    </div>
  );
};

export default Quiz;
