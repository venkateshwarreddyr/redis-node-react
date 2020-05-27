import { GET_USER, ADD_USER } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state };
    case ADD_USER:
      const user = action.payload.data;
      localStorage.setItem('id', user.user._id)
      return { ...state, ...user.user };
    default:
      return state;
  }
};
