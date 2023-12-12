//? Redux Legacy
//* npm install redux
//* importar al createStore
import { legacy_createStore as createStore } from "redux";
const initialState = {
  character: {},
};
async function characterReducer(state = initialState, action) {
  switch (action.type) {
    case "getCharById":
      const { payload } = action;
      const url = `https://rym2.up.railway.app/api/character/${payload}?key=henrystaff`;
      let character = await fetch(url).then((res) => res.json());
      return {
        character,
      };
    default:
      return { ...state };
  }
}
//* Store
let store = createStore(characterReducer);
//* Suscribirse a un componente
store.subscribe(async () => {
  console.log(await store.getState());
});
//* Despachar una action
store.dispatch({ type: "getCharById", payload: "2" });
// -----------------------------------------------
//-------------- Ahora con toolkit ---------------
// -----------------------------------------------
//? Redux Toolkit
//* npm install @reduxjs/toolkit
/* import { createSlice, configureStore } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "character",
  initialState: {
    detail: {},
  },
  reducers: {
    getCharById: async (state, action) => {
      const url = `https://rym2.up.railway.app/api/character/${action.payload}?key=henrystaff`;
      const character = await fetch(url).then((res) => res.json());
      state.detail = character;
    },
  },
});

export const { getCharById } = characterSlice.actions;

const store = configureStore({
  reducer: characterSlice.reducer,
});

store.subscribe(async () => {
  console.log(await store.getState());
});

store.dispatch(getCharById("2")); */
