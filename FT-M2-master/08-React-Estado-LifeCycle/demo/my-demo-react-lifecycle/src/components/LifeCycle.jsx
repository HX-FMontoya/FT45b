//! Notacion de clases
/* import React from "react";
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isActive: true,
    //   name: props.name,
    };
  }
  componentDidMount() {
    console.log("I'm alive");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log("Me actualice: ");
    console.log(prevState);
    if (prevState.isActive !== this.state.isActive) {
      console.log("Actualice isActive ");
    }
  }
  componentWillUnmount() {
    console.log("I'm dead");
  }
  aumento = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Soy el LifeCycle</h1>
        <h3>Counter: {this.state.counter}</h3>
        <h3>isActive: {this.state.isActive ? "Yes" : "Not"}</h3>
        <button onClick={this.aumento}>Aumentar</button>
        <button
          onClick={() => this.setState({ isActive: !this.state.isActive })}>
          Change
        </button>
      </div>
    );
  }
}

export default LifeCycle; */

//! Notacion Funcional
//? Primera forma
/* import { useState, useEffect } from "react";
function LifeCycle(props) {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState(props.name);
  useEffect(() => {
    console.log("I'm alive");
  }, []);

  useEffect(() => {
    console.log("Me actualice");
  }, [isActive]);

  useEffect(() => {
    return () => console.log("I'm dead");
  }, []);

  function aumento() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Soy el LifeCycle</h1>
      <h3>Name: {name}</h3>
      <h3>Counter: {counter}</h3>
      <h3>isActive: {isActive ? "Yes" : "Not"}</h3>
      <button onClick={aumento}>Aumentar</button>
      <button onClick={() => setIsActive(!isActive)}>Change</button>
    </div>
  );
}

export default LifeCycle; */

//! Notacion Funcional
//? Segunda forma
/* import { useState, useEffect } from "react";
function LifeCycle(props) {
  const [info, setInfo] = useState({
    counter: 0,
    isActive: true,
    name: props.name,
  });
  useEffect(() => {
    console.log("I'm alive");
  }, []);

  useEffect(() => {
    console.log("Me actualice");
  }, [info]);

  useEffect(() => {
    return () => console.log("I'm dead");
  }, []);

  function aumento() {
    setInfo({
      ...info,
      counter: info.counter + 1,
    });
  }

  return (
    <div>
      <h1>Soy el LifeCycle</h1>
      <h3>Name: {info.name}</h3>
      <h3>Counter: {info.counter}</h3>
      <h3>isActive: {info.isActive ? "Yes" : "Not"}</h3>
      <button onClick={aumento}>Aumentar</button>
      <button onClick={() => setInfo({ ...info, isActive: !info.isActive })}>
        Change
      </button>
    </div>
  );
}

export default LifeCycle; */
