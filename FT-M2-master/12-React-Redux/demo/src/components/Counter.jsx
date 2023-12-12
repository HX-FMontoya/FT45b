import React, { Component } from "react";
import store from "../store.js";
import * as actionsCreators from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPost } from "../actions/index.js";
import axios from "axios";

const Counter = ({ name, counter, increment, decrement, reset, fetchPost }) => (
  <p>
    <h1>{name}</h1>
    Clicked: {counter} times <button onClick={increment}>+</button>{" "}
    <button onClick={decrement}>-</button>{" "}
    <button onClick={reset}>Reset</button>
    <button onClick={() => fetchPost(counter)}>Fetch</button>
  </p>
);

const mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
  // {counter: 0}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
  // {increment: fn(){}, }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// El componente luego del connect va a recibir por props las propiedades de mapStateToProps y mapDispatchToProps
