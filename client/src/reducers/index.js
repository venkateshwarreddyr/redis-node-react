import commentsReducer from "./comments";
import userReducer from "./user";
import { combineReducers } from "redux";
export default combineReducers({
  comments: commentsReducer,
  user: userReducer,
});
