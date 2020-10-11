import QuizActionTypes from './quiz.types';

const INITIAL_STATE = {
  quizData: {},
  result: 0
};

const quizReducer =(state = INITIAL_STATE, action) => {
  switch (action.type){
    case QuizActionTypes.SET_QUIZ_DATA:
      return {
        ...state,
        quizData: action.payload
      }
    case QuizActionTypes.SET_RESULT:
      return {
        ...state,
        result: action.payload
      }
    case QuizActionTypes.CLEAR_QUIZ:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default quizReducer;