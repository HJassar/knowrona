import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import axios from 'axios';

import './Main.css';

import Landing from '../Landing/Landing';
import MainMenu from '../MainMenu/MainMenu';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GeneratingQuiz from '../GeneratingQuiz/GeneratingQuiz';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Privacy from '../Privacy/Privacy';
import TermsOfUse from '../TermsOfUse/TermsOfUse';
import Question from '../../components/Question/Question';
import Quiz from '../Quiz/Quiz';
import Results from '../Results/Results';
import Axios from 'axios';

const Main = () => {
  // State used to determine dynamic routing
  const [routerPath, setRouterPath] = useState('');
  // State used to store data, may need to refactor it out of GeneratingQuiz at some point since it may be duplicating state.
  const [quizData, setQuizData] = useState('');
  const[score, setScore] = useState(0);

  let location = useLocation().pathname;

  // Used to delay the start of the screen.  No fade effect yet.
  const timer = 3;
  useEffect(() => {
    setTimeout(() => {
      setRouterPath('mainmenu');
    }, timer * 1000);
  }, []);

  const displayHeader = () => {
      return <Header />;
  };

  const renderPage = (path) => {
    console.log('location: ', location);
    setRouterPath(path);
  }

  const setQuizDataPassUp = (data) => {
    setQuizData(data);
  }

  const setResultData = () => {
    axios.get(`/session/result/${quizData.quizId}`)
      .then(res => setScore(res.data.result))
      .catch(err => console.log(err));
    console.log(quizData.quizId);
  }

  return (
    <div className='container'>
      {displayHeader()}
      <main className='main'>
        <Switch>
          <Route exact path='/'>
            { routerPath === 'mainmenu' ? (
              <Redirect to='/mainmenu' />
            ) : 
            (
              <Landing />
            )}
          </Route>
          <Route 
            path='/results'
            render={(props) => (
              <Results {...props}
                score={score}
              />
            )}
          />
          <Route path='/mainmenu' component={MainMenu} />
          <Route 
            path='/generatingquiz'
            render={(props) => (
              <GeneratingQuiz {...props}  
                renderPage= {renderPage}
                setQuizDataPassUp={setQuizDataPassUp} 
              />
            )}  
          />
          <Route path='/about' component={About} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/termsofuse' component={TermsOfUse} />
          <Route exact path='/quiz'>
            { routerPath === 'results' ? (
              <Redirect to='/results' />
            ) : 
            ( 
              <Quiz 
                quizData={quizData}
                renderPage={renderPage}
                setResultData={setResultData} 
              />
            )}
          </Route>
          <Route 
            path='/quiz' 
            render={(props) => (
              <Quiz {...props} 
                quizData={quizData}
                renderPage={renderPage} 
              />
            )}
          />
          <Route path='/question' component={Question} />
        </Switch>
      </main>
      {location !== '/' ? <Footer /> : null}
    </div>
  );
};

export default Main;
