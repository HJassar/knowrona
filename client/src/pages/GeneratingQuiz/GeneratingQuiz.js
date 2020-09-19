import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './GeneratingQuiz.css';

import BigLogo from '../../components/BigLogo/BigLogo';
import Quiz from '../Quiz/Quiz';

const GeneratingQuiz = () => {
  // useState is one of React's 'hooks', this one in particular stores data and the
  // below declarations are the standard syntax.  You declare an array of two values
  // The first one is the name of the piece of state you want, and the second is
  // the name of the function you use to set the value.
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizData, setQuizData] = useState([]);
  // const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    axios
      .get('/quiz/generate')
      .then((res) => {
        console.log(res.data);
        // Below is the function call syntax to redefine the piece of state 'quizData'
        setQuizData(res.data);
        // This sets the isLoaded state to true, so that the quiz question can
        // conditionally render in this component.
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  document.title = 'KnowRona | Generating Quiz';
  return (
    <div className='GeneratingQuiz'>
      <div className='generatingquiz-render'>
        {isLoaded ? (
          <Quiz quizData={quizData} />
        ) : (
          <div>
            <BigLogo />
            {/* added a div with class to fix the position in center */}
            <div className='GeneratingQuiz__pulling'>
              <h1 className='.GeneratingQuiz__status'>
                Pulling the questions...
              </h1>
              <p className='.GeneratingQuiz__redirect'>
                Taking too long? you can click here in 15 seconds
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratingQuiz;
