import AuthActionTypes from "./auth.types";
import axios from "axios";

// export const toggleProfileHidden = () => ({
//   type: ProfileActionTypes.TOGGLE_PROFILE_HIDDEN
// });

export const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: AuthActionTypes.SET_CURRENT_USER,
    payload: decoded,
  };
};
