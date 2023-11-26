//! Notacion de Clases
//? Sin props
/* import React from "react";
class Contador extends React.Component {
  //* Aunque no le lleguen props al componente, debemos crear un constructor para poder heredar el this.state que es el metodo que impone React para el manejo de estados
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // this.aumento = this.aumento.bind(this)
  }
  //* Tengo dos alternativas
  //* 1 - Definirla como metodo junto con el bindeo
  // aumento() { 
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // }
  //* 2 - Definirla como arrow function
  // aumento = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   })
  // }
  render() {
    // console.log(this.state)
    // function aumento() {
    //   console.log(`Counter vale: ${this.state.counter}`);
    //   //* Por lo que vimos en el componente ContadorSinEstados, al ser esta una funcion dentro del método render, no esta logrando acceder al this de la clase.
    // }
    return (
      <div>
        <h1>Soy el contador: {this.state.counter}</h1>
        <button onClick={aumento}>Aumentar</button>
      </div>
    );
  }
}

export default Contador; */

//! Notacion de Clases
//? Con props
/* import React from "react";
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.contador,
    };
    // this.aumento = this.aumento.bind(this)
  }
  //* Tengo dos alternativas
  //* 1 - Definirla como metodo junto con el bindeo
  // aumento() { 
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // }
  //* 2 - Definirla como arrow function
  // aumento = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   })
  // }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Soy el contador: {this.state.counter}</h1>
        <button onClick={this.aumento}>Aumentar</button>
      </div>
    );
  }
}

export default Contador; */

//! Notacion Funcional
//? Sin props
/* import { useState } from "react";
function Contador() {
  console.log(useState);
  let [counter, setCounter] = useState(0);
  // this.state -> { counter: 0 }
  function aumento() {
    setCounter(counter++);
    // setCounter(++counter);
    // setCounter(counter + 1);
    console.log(`Counter vale: ${counter}`);
  }
  return (
    <div>
      <h1>Soy el contador: {counter}</h1>
      <button onClick={aumento}>Aumentar</button>
    </div>
  );
}

export default Contador; */

//! Notacion Funcional
//? Con props
/* import { useState } from "react";
function Contador(props) {
  console.log(props);
  let [counter, setCounter] = useState(props.contador);
  function aumento() {
    setCounter(++counter);
    console.log(`Counter vale: ${counter}`);
  }
  return (
    <div>
      <h1>Soy el contador: {counter}</h1>
      <button onClick={aumento}>Aumentar</button>
    </div>
  );
}

export default Contador; */
