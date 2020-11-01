import AuthActionTypes from "./auth.types";
const isEmpty = require("is-empty");

const INITIAL_STATE = { isAuthenticated: false, user: {} };

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
