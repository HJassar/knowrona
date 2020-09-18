import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './GeneratingQuiz.css';

import Question from '../Question/Question';
import BigLogo from '../../components/BigLogo/BigLogo';

const GeneratingQuiz = () => {
  // useState is one of React's 'hooks', this one in particular stores data and the
  // below declarations are the standard syntax.  You declare an array of two values
  // The first one is the name of the piece of state you want, and the second is
  // the name of the function you use to set the value.  
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizIds, setQuizIds] = useState([]);
  // const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    axios.get('/quiz/generate')
      .then(res => {
        console.log(res.data.questions);
        // Below is the function call syntax to redefine the piece of state 'quizIds'
        setQuizIds(res.data.questions);
        // This sets the isLoaded state to true, so that the quiz question can 
        // conditionally render in this component.
        setIsLoaded(true);
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
                 quizIds={quizIds}
              // stem={quizData[questionIndex].stem}
              // choice1={quizData[questionIndex].choices[0].text}
              // choice2={quizData[questionIndex].choices[1].text}
              // choice3={quizData[questionIndex].choices[2].text}
            />
            :
            <div>
              <BigLogo />
              {/* added a div with class to fix the position in center */}
               <div className="GeneratingQuiz__pulling">
              <h1 className='.GeneratingQuiz__status'>Pulling the questions...</h1>
              <p className='.GeneratingQuiz__redirect'>Taking too long? you can click here in 15 seconds</p>
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default GeneratingQuiz;