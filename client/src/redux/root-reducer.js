import { combineReducers } from 'redux';

import quizReducer from './quiz/quiz.reducer';

export default combineReducers({
  quiz: quizReducer
});

