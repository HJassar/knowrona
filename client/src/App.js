import React, { useState } from 'react';

import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [footerToggle, setFooterToggle] = useState(false);
  
  return (
    <div className="App">
      {headerToggle ? <Header /> : null}
      <Main />
      {footerToggle ? <Footer /> : null}
    </div>
  );
}

export default App;
