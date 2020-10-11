import QuizActionTypes from './quiz.types';

export const setQuizData = data => ({
  type: QuizActionTypes.SET_QUIZ_DATA,
  payload: data
});

export const setResult = result => ({
  type: QuizActionTypes.SET_RESULT,
  payload: result
});

export const clearQuiz = () => ({
  type: QuizActionTypes.CLEAR_QUIZ
});

