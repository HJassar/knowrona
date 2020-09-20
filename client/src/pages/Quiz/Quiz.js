import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './Quiz.css';
import Question from '../../components/Question/Question';
import Explanation from '../../components/Explanation/Explanation';
import NextButton from '../../components/NextButton/NextButton';

const Quiz = ({ quizData, renderPage }) => {

  const [correctChoiceId, setCorrectChoiceId] = useState('');
  const [explanationText, setExplanationText] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);


  const handleNextClick = () => {
    setQuestionIndex(questionIndex + 1);
    if (quizData.questions.length - 1 > questionIndex) {
      // setCorrectChoiceId('');
      // setExplanationText('');
      setIsAnswered(false);
    } else {
      //Create logic for sending to the results page
      setQuestionIndex(0);

      renderPage('results');
    }
  }

  document.title = 'KnowRona | Quiz';
  return (
    <div className='Quiz'>
      <Question
        quizData={quizData}
        questionIndex={questionIndex}
        setIsAnswered={setIsAnswered}
        isAnswered={isAnswered}
      />

      {isAnswered ? <NextButton
        handleNextClick={handleNextClick}
      /> : null}

    </div>
  );
};

export default Quiz;
