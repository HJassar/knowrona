import React, { useEffect, useHistory, useState } from 'react';
import axios from 'axios';

import './GeneratingQuiz.css';

import Question from '../Question/Question';

const GeneratingQuiz = () => {
  // useState is one of React's 'hooks', this one in particular stores data and the
  // below declarations are the standard syntax.  You declare an array of two values
  // The first one is the name of the piece of state you want, and the second is
  // the name of the function you use to set the value.  
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    axios.get('/quiz/generate')
      .then(res => {
        console.log(res.data.question);
        // Below is the function call syntax to redefine the piece of state 'quizData'
        // setQuizData(res.data.questions);
        // This sets the isLoaded state to true, so that the quiz question can 
        // conditionally render in this component.
        // setIsLoaded(true);
      }
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="GeneratingQuiz">
      <div className="generatingquiz-render">
        {
          isLoaded ?
            <Question
              //Below is prop declaration. Basically you are passing information from the current 'GeneratingQuiz' component to the child 'Question' component. By default, these will show up in the 'Question' component as prop.stem, prop.choice1, etc. However, you can descructure them out as is done in the 'Question' component.
              stem={quizData[questionIndex].stem}
              choice1={quizData[questionIndex].choices[0].text}
              choice2={quizData[questionIndex].choices[1].text}
              choice3={quizData[questionIndex].choices[2].text}
            />
            :
            <div>
              <h1>KnOwRona</h1>
              <h2>Pulling the questions...</h2>
              <h4>Taking too long? you click here in 15 seconds</h4>
            </div>
        }
      </div>
    </div>
  );
}

export default GeneratingQuiz;