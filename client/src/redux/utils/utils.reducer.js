import UtilsActionTypes from './utils.types';

const INITIAL_STATE = {
  splashOver: false
};

const utilsReducer =(state = INITIAL_STATE, action) => {
  switch (action.type){
    case UtilsActionTypes.SET_SPLASH_OVER:
      return {
        ...state,
        splashOver: true
      };
    default:
      return state;
  }
}

export default utilsReducer;