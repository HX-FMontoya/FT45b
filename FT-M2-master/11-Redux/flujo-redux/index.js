//! REDUX
// Es una libreria que permite crear un store que brinda estados globales
//! Redux Legacy -> version anterior
//! Redux toolkit -> version actual
//! thunk -> Middleware para manejar asincronismo
//? Repasando el Flow de Redux
// Un componente gracias a un evento, ejecuta una accion
// Una action es un objeto que se encarga de modificar un estado
// por ende puede o no recibir informacion, va al reducer
// El reducer es una funcion pura ( quiere decir que siempre devuelve lo mismo, si se ejecuta con el mismo valor. Math.random() no es una funcion pura, por ejemplo ) que se encarga de recibir la info de una action y dependiendo del type de la action, modifica un estado u otro
// Una vez modificado dicho estado, el store
// El store se va a encargar de envolver toda la app y avisarle a los componentes que estan suscritos a un estado, que ese estado cambio
// Una vez que el store notifica, cada componente se re-renderiza para actualizar su informacion.

//? En resumen
// componente -> button -> onClick -> action incrementar
// actions -> action incrementar -> info -> reducer -> switch case
// reducer -> state, info -> store -> los componentes subscritos

//? Conociendo las estructuras
/* //* Importando la libreria
import { legacy_createStore as createStore } from "redux";
//* Conociendo las actions
const actionSumaDefault = { type: "sumaDefault" };
const actionSumar3 = { type: "suma", payload: 3 };
// type es obligatorio, payload es opcional
const actionSumar = (numero) => {
  // numero -> 5
  return {
    type: "suma",
    payload: numero,
  };
};
//* Como es un reducer
const initialState = { number: 0 }; // { number: 9}
function reducer(state = initialState, action) {
  // action -> { type: "sumaDefault" }
  if (action.type === "sumaDefault") {
    return {
      ...state,
      number: state.number + 1,
    };
  }
  if (action.type === "suma") {
    return {
      ...state,
      number: state.number + action.payload,
    };
  }
  return {
    ...state,
  };
}
//* Y el store
const store = createStore(reducer);
//* Esto lo tiene el componente que despacha una action
// import store from "donde estemos creando del store"
// import actionSumaDefault from "donde estemos creando las actions"
store.dispatch(actionSumaDefault);
store.dispatch(actionSumar3);
store.dispatch(actionSumar(5));
// store.dispatch({type: "suma",payload: 5})
//* Esto lo tiene un componente que escucha los cambios
// import store from "donde estemos creando del store"
store.subscribe(() => console.log(store.getState()));
//* Si queremos ver el estado
console.log(store.getState()); // {number:9} */

//? Pseudocodigo
// <button> -> fn inc = () => {type:"Incrementar" , payload: {} }
//             action es un objeto ↴                     ↜ payload opcional
// fn inc -> fn reducer (state, action){ action.type === "Incrementar"
//                                   state.counter = state.counter + 1 }
// fn Contador (){ return <span>{state.counter}</span> } -> Se actualiza

//* Flujo simple con Redux Legacy
/* import { legacy_createStore as createStore } from "redux";

const reducer = (state = { number: 0 }, action) => {
  // action -> {type: "dec", payload}
  console.log(action);
  switch (action.type) {
    case "inc":
      return {
        ...state,
        number: state.number + 1,
      };
    case "dec":
      return {
        ...state,
        number: state.number - action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const store = createStore(reducer);

const actionInc = { type: "inc" };
const actionDec = (num) => {
  return {
    type: "dec",
    payload: num,
  };
};

store.dispatch(actionInc);
store.dispatch(actionDec(6));
store.dispatch(actionInc);
store.dispatch(actionInc);
store.dispatch(actionInc);
console.log(store.getState()); */
