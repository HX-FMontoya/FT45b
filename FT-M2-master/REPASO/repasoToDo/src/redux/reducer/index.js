import { ADD_TODO, CHANGE_NAME } from "../actions/types";

const initialState = {
  name: "",
  todos: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    default:
      return {
        ...state,
      };
  }
}
