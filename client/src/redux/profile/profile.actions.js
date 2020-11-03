import { Store } from "express-session";
import ProfileActionTypes from "./profile.types";
import store from "../store";

const size = store.getState().profile.avatarSize;
const avatarSize = size === "50px" ? "100px" : "50px";
export const toggleProfileHidden = () => ({
  type: ProfileActionTypes.TOGGLE_PROFILE_HIDDEN,
  payload: avatarSize,
});
