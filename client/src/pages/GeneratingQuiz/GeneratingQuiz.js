import React, { useEffect, useHistory, useState } from 'react';
import axios from 'axios';

import './GeneratingQuiz.css';

import Question from '../Question/Question';

const GeneratingQuiz = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect( () => {
    axios.get('http://localhost:5000/quiz/generate')
      .then(res => {
        console.log(res.data.questions);
        setQuizData(res.data.questions);
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