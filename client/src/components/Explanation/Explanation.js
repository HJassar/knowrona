import React from 'react';

import './Explanation.css';

const Explanation = ({explanationText}) => {
  return (
    <div className="Explanation">
      <p>{explanationText}</p>
    </div>
  );
}

export default Explanation;