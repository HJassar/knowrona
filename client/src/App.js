import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Splash from './Splash/Splash';
import Home from './Home/Home';
import QuizSession from './QuizSession/QuizSession';
// import Dashboard from './Dashboard/Dashboard';
// import Pages from './Pages/Pages';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main class='main'>
          <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/home' component={Home} />
            {/* <Route path='/dashboard' component={Dashboard} /> */}
            <Route path='/quiz' component={QuizSession} />
            {/* <Route path='/' component={Pages} /> */}
            <Route render={() => { return <h1>404 page</h1> }} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
