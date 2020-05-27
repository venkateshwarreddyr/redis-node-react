import { ADD_COMMENT, FETCH_COMMENTS } from "./types";
import Axios from "axios";
export const addComment = (comment, user) => {
  console.log({user})
  const response = Axios.post('http://localhost:8080/comment',{
    comment,
    userId: user._id
  });
  const action = { type: ADD_COMMENT, payload: response };
  return action;
};
export const fetchComments = (id) => {
  const response = Axios.get(`http://localhost:8080/comment/${id}`);
  const action = { type: FETCH_COMMENTS, payload: response };
  return action;
};
