import React, { useState } from 'react';
import axios from 'axios';

import BigLogo from '../components/BigLogo/BigLogo';

import { connect } from 'react-redux';
import { setQuizData } from '../redux/quiz/quiz.actions';

import './Home.css';
import { Redirect, Link } from 'react-router-dom';

const Home = ({ quizData, setGeneratedQuiz }) => {
    document.title = 'KnowRona | Main Menu';

    const [status, setStatus] = useState('landed');
    // This is being replaced with a call to set the quiz in the store
    // const [generatedQuiz, setGeneratedQuiz] = useState({})

    const handleGenerateClick = (event) => {
        // Show generating quiz componenet until the quiz is sent back
        setStatus('loading');
        // Prevent the button from generating another quiz
        event.target.disabled = true;
        event.target.className = 'Question__choice--disabled';
        // Send the request to generate a quiz
        axios
            .get('/session/generate')
            .then((res) => {
                setGeneratedQuiz(res.data);
                setStatus('loaded');
            })
            .catch((err) => console.log(err));
    };

    const HomeContent = () => {
        switch (status) {
            case 'landed':
                return (
                    <>
                        <button
                            onClick={handleGenerateClick}
                            className='btn primary-btn'
                        >
                            Generate a Quiz!
                        </button>
                        <Link to='/login'>
                            <button className='btn primary-btn'>LOGIN</button>
                        </Link>
                    </>
                );
                break;
            case 'loading':
                return (
                    <>
                        <h1>Pulling the questions...</h1>
                        <p>Taking too long? you can click here in 15 seconds</p>
                    </>
                );
                break;
            case 'loaded':
                return <Redirect to='/quiz' />;
                break;
        }
    };

    return (
        <div className='Home'>
            <BigLogo />
            <HomeContent />
        </div>
    );
};

const mapStateToProps = (state) => ({
    quizData: state.quiz.quizData
});

const mapDispatchToProps = (dispatch) => ({
    setGeneratedQuiz: (quizData) => dispatch(setQuizData(quizData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
