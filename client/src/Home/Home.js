import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BigLogo from '../components/BigLogo/BigLogo';
import ProfilePic from '../components/ProfilePicture/profile-pic.png';

import { connect } from 'react-redux';
import { setQuizData } from '../redux/quiz/quiz.actions';
import { setSplashOver } from '../redux/utils/utils.actions';

import './Home.css';
import { Redirect, Link } from 'react-router-dom';

const Home = ({ quizData, setGeneratedQuiz, setSplashOver }) => {
    document.title = 'KnowRona | Main Menu';
    useEffect(() => {
        setSplashOver();
    }, []);
    const [status, setStatus] = useState('confirmLogin');
    const [isLoggedInConfirmed, setIsLoggedInConfirmed] = useState(false);
    // This is being replaced with a call to set the quiz in the store
    // const [generatedQuiz, setGeneratedQuiz] = useState({})

    // const handleGenerateClick = (event) => {
    //     // Show generating quiz componenet until the quiz is sent back
    //     setStatus('loading');
    //     setSplashOver();
    //     // Prevent the button from generating another quiz
    //     event.target.disabled = true;
    //     event.target.className = 'Question__choice--disabled';
    //     // Send the request to generate a quiz
    //     axios
    //         .get('/session/generate')
    //         .then((res) => {
    //             setGeneratedQuiz(res.data);
    //             setStatus('loaded');
    //         })
    //         .catch((err) => console.log(err));
    // };

    // Handles confirmed Login
    const confirmedLogin = () => {
      
    }

    const HomeContent = () => {
        switch (status) {
            case 'confirmLogin':
                return (
                    <>
                        <img
                            onClick={() =>
                                setIsLoggedInConfirmed(true)
                            }
                            src={ProfilePic}
                            alt='Profile Picture'
                        />
                        <small>
                            <Link to='/login'>
                                (Not you?) Sign in with a different account.
                            </Link>
                        </small>
                    </>
                );
            case 'isLoggedInConfirmed':
                return <p>Hello world!</p>;

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
    setGeneratedQuiz: (quizData) => dispatch(setQuizData(quizData)),
    setSplashOver: () => dispatch(setSplashOver())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
