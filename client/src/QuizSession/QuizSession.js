import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Question from './Question/Question';
import Result from './Result/Result';

import './QuizSession.css'
import { connect } from 'react-redux';

const QuizSession = ( { quizData, result }) => {

   // States
    const [timeIsUp, setTimeIsUp] = useState(false);
    // Removing this next line due to Redux
    // const [result, setResult] = useState()

    // Required Data-Removed due to REDUX
    // const quizData = props.location.state;
    console.log(quizData, 'here')
    if (Object.keys(quizData).length === 0 && quizData.constructor === Object) {
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
    } else if (result) {
        return (
            <>
                <Result/>
            </>
        )

    } else {
        return (
            <div className='QuizSession'>
                <Question
                    quizData={quizData}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    quizData: state.quiz.quizData,
    result: state.quiz.result
});

export default connect(mapStateToProps)(QuizSession);