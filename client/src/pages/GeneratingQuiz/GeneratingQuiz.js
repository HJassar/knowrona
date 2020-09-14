import React, { useEffect, useHistory } from 'react';
import axios from 'axios';

import './GeneratingQuiz.css';

const GeneratingQuiz = () => {
  useEffect( () => {
    axios.get('http://localhost:5000/')
      .then(res => alert(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="GeneratingQuiz">
      <h1>KnOwRona</h1>
      <h2>Pulling the questions...</h2>
      <h4>Taking too long? you click here in 15 seconds</h4>
    </div>
  );
}

export default GeneratingQuiz;