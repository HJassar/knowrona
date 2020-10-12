import { combineReducers } from 'redux';

import quizReducer from './quiz/quiz.reducer';
import profileReducer from './profile/profile.reducer';

export default combineReducers({
  quiz: quizReducer,
  profile: profileReducer
});

