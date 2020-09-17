import React from 'react';
import { BrowserRouter as Router, ReactDOM } from 'react-router-dom';

import './App.css';

import Main from './pages/Main/Main';

function App() {


  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
