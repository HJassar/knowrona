import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookShareButton } from 'react-share';
import { connect } from 'react-redux';
import { clearQuiz } from '../../redux/quiz/quiz.actions';
import './Result.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Results = ( { result, clearQuiz }) => {
  document.title = 'KnowRona | Results';

  const evaluation =
    result === 100 ? {
      rank: 'perfect!',
      message: 'You must be a scientist or something!'
    }
      : result >= 90 ? {
        rank: 'excellent!',
        message: 'You did very well!Keep trying until you get the perfect score!'
      }
        : result >= 80 ? {
          rank: 'very good',
          message: 'You did very well! Keep trying until you get the perfect score!'
        }
          : result >= 70 ? {
            rank: 'good',
            message: 'Not bad! Let\'s try again and close some gaps!'
          }
            : result >= 50 ? {
              rank: 'poor',
              message: 'But it\'s all good. Keep trying to improve your score'
            }
              : {
                rank: 'failed!',
                message: 'But it\'s all good. Keep trying to improve your score'
              };

  return (
    <div className='Results'>
      <h1>Your score is {result}%</h1>
      <h2>{evaluation.rank}</h2>
      <p>{evaluation.message}</p>
        <FacebookShareButton
          url={'https://www.knowrona.net'}
          resetButtonStyle={false}
          hashtag = '#knowRona'
          quote={`I got a ${evaluation.rank} score of ${result}% in KnowRona!\nYour turn!`}
          className="primary-btn secondary-btn btn"
          >
          <FontAwesomeIcon icon={faShareAlt} />
          <span className="secondary-btn__name">Share Your Score</span>
        </FacebookShareButton>
      <Link to='/home'>
      <button className="primary-btn btn" onClick={clearQuiz}>Play Again</button></Link>
    </div>
  );
};

const mapStatetoProps = state => ({
  result: state.quiz.result
});

const mapDispatchtoProps = dispatch => ({
  clearQuiz: () => dispatch(clearQuiz())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(Results);
