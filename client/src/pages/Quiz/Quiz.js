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

  const handleChoiceClick = (choiceId) => {
    if (isAnswered) {
      alert('You have already answered this question. Please click on the next button.');
      return;
    }
    console.log('choiceId:', choiceId);
    axios
      .get(
        `/questions/quiz/${quizData.quizId}/${quizData.questions[questionIndex].id}/${choiceId}`
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
        setIsAnswered(true);
      })
      .catch((err) => console.log(err));
  };
  const handleNextClick = () => {
    if (quizData.questions.length - 1 > questionIndex) {
      setCorrectChoiceId('');
      setExplanationText('');
      setIsAnswered(false);
      setQuestionIndex(questionIndex + 1);
    } else {
      //Create logic for sending to the results page
      renderPage('results');
    }
  }

  document.title = 'KnowRona | Quiz';
  return (
    <div className='Quiz'>
      <Question
        //Below is prop declaration. Basically you are passing information from the current 'GeneratingQuiz' component to the child 'Question' component. By default, these will show up in the 'Question' component as prop.stem, prop.choice1, etc. However, you can descructure them out as is done in the 'Question' component.
        quizData={quizData}
        handleChoiceClick={handleChoiceClick}
        correctChoiceId={correctChoiceId}
        questionIndex={questionIndex}
      />
      {correctChoiceId ? (
        <div>
          <div>
            <Explanation explanationText={explanationText} />
          </div>
          <div>
            <NextButton 
              handleNextClick={handleNextClick}  
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Quiz;
