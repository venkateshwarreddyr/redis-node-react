import { ADD_USER } from "./types";
import Axios from "axios";

export const addUser = (username) => {
  const response = Axios.post("http://localhost:8080/user", { username });
  const action = { type: ADD_USER, payload: response };
  return action;
};
export const fetchUser = (id) => {
  const response = Axios.get(`http://localhost:8080/user/${id}`);
  const action = { type: ADD_USER, payload: response };
  return action;
};
