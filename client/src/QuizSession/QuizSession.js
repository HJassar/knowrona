import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Question from './Question/Question';
import Result from './Result/Result';


const QuizSession = (props) => {

    // States
    const [timeIsUp, setTimeIsUp] = useState(false);
    const [result, setResult] = useState()

    // Required Data
    const quizData = props.location.state;

    if (!props.location.state) {
        setTimeout(() => {
            setTimeIsUp(true);
        }, 3000);
        return (
            <div>
                <h1>Ops...</h1>
                <p>
                    No Active sessions, redirecting you to main menu...
                </p>
                {
                    timeIsUp ?
                        <Redirect to="/home" />
                        : null
                }
            </div>
        )
    } else if(result){
        return (
            <>
                <Result
                result={result}
                />
            </>
        )
    
}else{
        return (
            <>
                <Question
                    quizData={quizData}
                    setResult={setResult}
                />
            </>
        )
    }
}

export default QuizSession;