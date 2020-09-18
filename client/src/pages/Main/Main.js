import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

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
import Question from '../Question/Question';

const Main = () => {
  const [routerPath, setRouterPath] = useState('');

  let location = useLocation().pathname;

  // Used to delay the start of the screen.  No fade effect yet.
  const timer = 3;
  useEffect(() => {
    setTimeout(() => {
      setRouterPath('mainmenu');
    }, timer * 1000);
  }, []);

  const displayHeader = () => {
    if (!['/', '/mainMenu', '/generatingquiz'].includes(location)) {
      return <Header />;
    }
  };

  return (
    <div class='container'>
      {displayHeader()}
      <main className='main'>
        <Switch>
          <Route exact path='/'>
            {routerPath === 'mainmenu' ? (
              <Redirect to='/mainmenu' />
            ) : (
              <Landing />
            )}
          </Route>
          <Route path='/mainmenu' component={MainMenu} />
          <Route path='/generatingquiz' component={GeneratingQuiz} />
          <Route path='/about' component={About} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/termsofuse' component={TermsOfUse} />
          <Route path='/question' component={Question} />
        </Switch>
      </main>
      {location !== '/' ? <Footer /> : null}
    </div>
  );
};

export default Main;
