import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Esta libreria de composeWithDevTools nos evita escribir esto de window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer/index";
//Para trabajar con ello, lo combinamos en un compose
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, composedEnhancer);
export default store;

/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(favoritesReducer, enhancer); */
