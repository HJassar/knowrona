import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './Main.css';

import Landing from '../Landing/Landing';
import MainMenu from '../MainMenu/MainMenu';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GeneratingQuiz from '../GeneratingQuiz/GeneratingQuiz';

const Main = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [footerToggle, setFooterToggle] = useState(false);
  const [routerPath, setRouterPath] = useState('');

  // Used to delay the start of the screen.  No fade effect yet.
  const timer = 3;
  useEffect( () => {
    setTimeout( () => {
      setFooterToggle(true);
      setRouterPath('mainmenu');
    }, timer * 1000);
  }, []);

  
  return (
    <Router>
      <div className="Main">
        {headerToggle ? <Header /> : null}
        <Switch>
          <Route exact path='/'>
            {routerPath === 'mainmenu' ? <Redirect to='/mainmenu' /> : <Landing />}
          </Route>
          <Route path='/mainmenu' component={MainMenu} />
          <Route path='/generatingquiz' component={GeneratingQuiz} />
        </Switch>
        {footerToggle ? <Footer /> : null}
      </div>
    </Router>
    
  );
}

export default Main;