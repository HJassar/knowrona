import React from 'react';

import './Question.css';

const Question = ({quizIds}) => {

  const lorem = 'Occaecat sit eiusmod pariatur esse. Et nulla cupidatat ex aliquip non elit dolor tempor nostrud nulla proident. Reprehenderit sit magna do et minim nulla laborum cupidatat cillum. Consequat aute exercitation ipsum occaecat elit eu nisi ea ex mollit id et est. Labore tempor laborum non culpa do est. Est eiusmod excepteur dolor sit occaecat cillum anim occaecat pariatur velit elit aliqua. Dolore dolor ea officia est ipsum cillum.'
  const [stem,choice1,choice2,choice3] = [lorem,lorem,lorem,lorem]

  return (
    <div className='Question'>
      {/* {quizIds.map(question => <p key={question._id}>{question._id}</p>)} */}
      <p className='Question__stem'>{stem}</p>
      <p className='Question__choice'>{choice1}</p>
      <p className='Question__choice'>{choice2}</p>
      <p className='Question__choice'>{choice3}</p>
    </div>
  );

}

export default Question;