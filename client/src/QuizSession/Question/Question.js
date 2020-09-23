import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import NextButton from './NextButton/NextButton'
import './Question.css';

// const Question = ({ quizData, questionIndex, isAnswered, setIsAnswered, disableClick, setDisableClick }) => {
const Question = (props) => {

  // States
  const [choiceSelected, setChoiceSelected] = useState(false);
  const [correctChoiceId, setCorrectChoiceId] = useState('');
  const [selectedChoiceId, setSelectedChoiceId] = useState('');
  const [explanation, setExplanation] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);

  const setResult = props.setResult;

  // Inherited Data
  const quizId = props.quizData.quizId;
  const questionsCount = props.quizData.questions.length;
  const questionData = props.quizData.questions[questionIndex];
  const questionId = questionData.id;
  const choicesArray = questionData.choices

  // Handlers
  const handleChoiceClick = (choiceId) => {
    setChoiceSelected(true);
    setSelectedChoiceId(choiceId);

    axios
      .get(
        `/session/${quizId}/${questionId}/${choiceId}/${questionIndex}`
      )
      .then((res) => {
        res.data.choices.map((choice) => {
          if (choice.isCorrect === true) {
            setCorrectChoiceId(choice.choiceId);
          }
        });

        setExplanation(res.data.explanation);

      })
      .catch((err) => console.log(err));
  }

  const handleNextClick = (event) => {
    if (questionIndex < questionsCount - 1) {
      setQuestionIndex(questionIndex + 1);
      setChoiceSelected(false)
      setCorrectChoiceId('')
      setSelectedChoiceId('')
      setExplanation('')
    } else {
      axios
        .get(
          `/session/result/${quizId}`
        )
        .then((res) => {
          setResult(res.data.result)
          console.log(res)
        })
        .catch((err) => console.log(err));
    }
  }


  // Choice componenet
  const Choice = (props) => {

    // Conditional classes
    const ChoiceClasses = ['Question__choice']
    if (choiceSelected) {
      ChoiceClasses.push('Question__choice--disabled');
    }

    if (correctChoiceId != '') {
      if (props.id === correctChoiceId) {
        ChoiceClasses.push('Question__choice--correct')
      } else if (props.id === selectedChoiceId) {
        ChoiceClasses.push('Question__choice--incorrect')
      }
    }

    // Construct the choice
    return (
      <button
        id={props.id}
        key={props.id}
        onClick={() => handleChoiceClick(props.id)}
        className={ChoiceClasses.join(' ')}
        disabled={choiceSelected}
      >
        {props.text}
      </button>)
  }

  // Add on the choices
  const choiceButtons =
    choicesArray.map(choice => {
      return (<Choice
        text={choice.choiceText}
        id={choice.choiceId}
      />)
    })


  // Finally, return the Question!
  return (
    <div className='Question'>
      {questionData.stem}
      {choiceButtons}
      {explanation}
      {/* {correctChoiceId != '' ? */}
      <NextButton
      click={handleNextClick}
      isGetResults={questionIndex === questionsCount - 1}
      />
    </div>
  )

};

export default Question;
