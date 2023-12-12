import { GET_POST } from "../actions.js/types";

const initialState = {
  posts: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
