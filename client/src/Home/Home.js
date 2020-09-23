import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BigLogo from '../Components/BigLogo/BigLogo';

import './Home.css';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
  document.title = 'KnowRona | Main Menu';

  const [status, setStatus] = useState('landed');
  const [generatedQuiz, setGeneratedQuiz] = useState({})

  const handleGenerateClick = (event) => {
    // Show generating quiz componenet until the quiz is sent back
    setStatus('loading');
    // Prevent the button from generating another quiz
    event.target.disabled = true;
    event.target.className = 'Question__choice--disabled'
    // Send the request to generate a quiz
    axios
      .get('/session/generate')
      .then((res) => {
        setGeneratedQuiz(res.data);
        setStatus('loaded')
      })
      .catch((err) => console.log(err));

  }

  // Temporarily hiding the login button
  const loginButtonStyle = {
    display: 'none'
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
            <button
              style={loginButtonStyle}
              className='btn primary-btn'
            >
              LOGIN
      </button>
          </>
        )
        break;
      case 'loading': return (
        <>
          <h1>
            Pulling the questions...
              </h1>
          <p>
            Taking too long? you can click here in 15 seconds
              </p>
        </>
      )
        break;
      case 'loaded':
        return (
          <Redirect to={
            {
              pathname: '/quiz',
              state: generatedQuiz
            }}
          />)
        break;
    }
  }


  return (
    <div className='Home'>
      <BigLogo />
      <HomeContent />
    </div>
  );
};

export default Home;
