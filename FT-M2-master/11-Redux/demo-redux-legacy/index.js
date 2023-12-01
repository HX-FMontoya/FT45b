//? Redux Legacy
//* npm install redux
//* importar al createStore
import { createStore } from "redux";
// import { legacy_createStore as createStore } from "redux";

//* Reducer
const initialState = {
  counter: 0,
};
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
//* Store
let store = createStore(counterReducer);
//* Suscribirse a un componente
store.subscribe(() => console.log(store.getState()));
//* Despachar una action
store.dispatch({ type: "counter/incremented" });
// {counter: 1}
store.dispatch({ type: "counter/incremented" });
// {counter: 2}
store.dispatch({ type: "counter/decremented" });
// {counter: 1}
console.log(store.getState());
