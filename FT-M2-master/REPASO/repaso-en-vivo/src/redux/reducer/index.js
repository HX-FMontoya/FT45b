import {
  USER_NAME,
  GET_PERSONAS,
  DELETE_FRIEND,
  ADD_FRIEND,
} from "../actions/types";

const initialState = {
  userName: "",
  personas: [],
  amigos: [],
};

export default function reducer(state = initialState, action) {
  // action -> { type: USER_NAME, payload: "Feli01",};
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case GET_PERSONAS:
      return {
        ...state,
        personas: [...state.personas, action.payload],
      };
    case DELETE_FRIEND:
      const filtered = state.amigos.filter(
        (amigo) => amigo.id !== action.payload
      );
      return {
        ...state,
        amigos: filtered,
      };
    case ADD_FRIEND:
      return {
        ...state,
        amigos: [...state.amigos, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
}
