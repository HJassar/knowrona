import { faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import './Question.css';
import { set } from 'mongoose';

const Question = ({ quizData, questionIndex, isAnswered, setIsAnswered }) => {


  const [selectedChoiceId, setSelectedChoiceId] = useState('');
  const [correctChoiceId, setCorrectChoiceId] = useState('');
  const [explanation, setExplanation] = useState('')
  const [choices, setChoices] = useState([])


  const handleChoiceClick = (choiceId) => {
    axios
      .get(
        `/questions/quiz/${quizData.quizId}/${quizData.questions[questionIndex].id}/${choiceId}`
      )
      .then((res) => {
        console.log(res.data);

        res.data.choices.map((choice) => {
          if (choice.isCorrect === true) {
            setCorrectChoiceId(choice.choiceId);
          }
        });
        setExplanation(res.data.explanation);
        setIsAnswered(true);
      })
      .catch((err) => console.log(err));
  };

  const handleClick = (e) => {
    // dataset works with lowercase only
    // choiceId = e.target.dataset.choiceid;
    const choiceId = e.target.getAttribute('id')
    setSelectedChoiceId(choiceId);
    handleChoiceClick(choiceId);
  };

  if (quizData) {
    let choices = quizData.questions[questionIndex].choices;
    const stem = quizData.questions[questionIndex].stem;
    // const choices = quizData.questions[questionIndex].choices;

    const Choice = (props) => {

      const ChoiceClasses = ['Question__choice']

      if (isAnswered) {
        ChoiceClasses.push('Question__choice--disabled');
        if (selectedChoiceId !== '') {
          console.log('selected ' + selectedChoiceId)
          if (props.id === correctChoiceId) {
            ChoiceClasses.push('Question__choice--correct')
          }

          if (props.id !== correctChoiceId && props.id === selectedChoiceId) {
            ChoiceClasses.push('Question__choice--incorrect')
          }
        }
      }


      console.log(isAnswered)
      return (
        <button
          id={props.id}
          key={props.id}
          onClick={handleClick}
          className={ChoiceClasses.join(' ')}
          disabled={selectedChoiceId !== '' && isAnswered}

        >
          {props.text}
        </button>
      )
    }

    const choiceButtons = choices.map(choice => {
      return (<Choice
        text={choice.choiceText}
        id={choice.choiceId}
      />)
    })

    return (
      <div>
        <div className='Question__stem'>
          {stem}
        </div>
        {choiceButtons}
        <div>{isAnswered?explanation:null}</div>
      </div>
    )

  } else {
    return (<Link to='/generatingquiz'>generate</Link>)
  }

};

export default Question;
