import AuthActionTypes from "./auth.types";

const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case ProfileActionTypes.TOGGLE_PROFILE_HIDDEN:
    //   return {
    //     ...state,
    //     hidden: !state.hidden
    //   }
    default:
      return state;
  }
};

export default authReducer;
