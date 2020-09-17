import React from 'react';

import './Question.css';

const Question = ({quizIds}) => {

  // return (
  //   <div className="Question">
  //     {quizIds.map(question => <p key={question._id}>{question._id}</p>)}
  //     {/* <p>{stem}</p>
  //     <p>{choice1}</p>
  //     <p>{choice2}</p>
  //     <p>{choice3}</p> */}
  //   </div>
  // );

  return (
    <div className="Question">
      <p className="Question__question">Occaecat sit eiusmod pariatur esse. Et nulla cupidatat ex aliquip non elit dolor tempor nostrud nulla proident. Reprehenderit sit magna do et minim nulla laborum cupidatat cillum. Consequat aute exercitation ipsum occaecat elit eu nisi ea ex mollit id et est. Labore tempor laborum non culpa do est. Est eiusmod excepteur dolor sit occaecat cillum anim occaecat pariatur velit elit aliqua. Dolore dolor ea officia est ipsum cillum.</p> 
      <p className="Question__answer">Minim officia voluptate consequat ullamco voluptate Lorem Lorem ad adipisicing sit velit amet.</p> 
      <p className="Question__answer">Aute ipsum quis reprehenderit quis Lorem qui velit consectetur labore reprehenderit est.</p> 
      <p className="Question__answer">Laborum qui cillum officia mollit voluptate cillum mollit.</p>   
    </div>
  )
}

export default Question;