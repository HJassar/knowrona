import { combineReducers } from 'redux';

import quizReducer from './quiz/quiz.reducer';
import profileReducer from './profile/profile.reducer';
import utilsReducer from './utils/utils.reducer';


export default combineReducers({
  quiz: quizReducer,
  profile: profileReducer,
  utils: utilsReducer
});

