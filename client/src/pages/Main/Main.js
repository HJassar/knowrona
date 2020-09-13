import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './Main.css';
import Landing from '../Landing/Landing';

const Main = () => {
  return (
    <Router>
      <div className="Main">
        <Switch>
          <Route path='/' component={Landing} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default Main;