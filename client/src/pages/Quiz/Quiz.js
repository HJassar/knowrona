import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './Quiz.css';
import Question from '../../components/Question/Question';
import NextButton from '../../components/NextButton/NextButton';

const Quiz = ({ quizData, renderPage, setResultData }) => {

  const [correctChoiceId, setCorrectChoiceId] = useState('');
  const [explanationText, setExplanationText] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [disableClick, setDisableClick] = useState(false);
  const [buttonText, setButtonText] = useState('Next');


  const handleNextClick = () => {
    setQuestionIndex(questionIndex + 1);
    if (quizData.questions.length - 2 === questionIndex) {
      setButtonText('Get Results');
    }
    if (quizData.questions.length - 1 > questionIndex) {
      // setCorrectChoiceId('');
      // setExplanationText('');
      setIsAnswered(false);
      setDisableClick(false);
    } else {
      //Create logic for sending to the results page
      setQuestionIndex(0);
      setResultData();
      renderPage('results');
    }
  }

  console.log('quiz data', quizData)

  document.title = 'KnowRona | Quiz';
  if (quizData) {
    return (
      <div className='Quiz'>
        <Question
          quizData={quizData}
          questionIndex={questionIndex}
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered}
          disableClick={disableClick}
          setDisableClick={setDisableClick}
        />

        {isAnswered ? <NextButton
          handleNextClick={handleNextClick}
          buttonText={buttonText}
        />
          : null}

      </div>
    );
  } else{
    return <Redirect to="/mainmenu" />
  }
};

export default Quiz;
