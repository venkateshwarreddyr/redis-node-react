import { ADD_COMMENT, FETCH_COMMENTS } from "../actions/types";
export default (state = [], action) => {
  switch (action.type) {
    // case ADD_COMMENT:
    //   return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.comments.map(({comment}) => comment);
      return [...comments]
    default:
      return state;
  }
};
