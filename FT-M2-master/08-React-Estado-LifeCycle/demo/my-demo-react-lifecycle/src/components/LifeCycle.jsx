//! Notacion de clases
/* import React from "react";
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isActive: true,
      name: props.name,
    };
    // this.aumento = this.aumento.bind(this)
  }
  componentDidMount() {
    console.log("I'm alive");
  }
  componentDidUpdate(prevProps, prevState) {
    // props || state
    console.log("Me actualice");
    console.log(prevProps);
    console.log(prevState);
    if (prevProps.name !== this.props.name) {
      console.log("el nombre cambio");
    }
    if (prevState.isActive !== this.state.isActive) {
      console.log("Actualice isActive ");
    }
    if (prevState.counter !== this.state.counter) {
      console.log("Actualice counter ");
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
import { useState, useEffect } from "react";
function LifeCycle(props) {
  // props -> {name: ""}
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState("");
  // componentDidMount(){ // que hace} -> useEffect(()=>que hace,[])
  // el segundo parametro del useEffect -> [] es determinante para el comportamiento
  //* Si es [] -> useEffect se va a ejecutar cuando el componente se monta
  // useEffect(() => {
  //   console.log("I'm alive");
  // }, []);
  //* Si el arreglo tiene valores, esos valores seran las dependencias que 'escuche' para poder ejecutar el codigo
  //* Se va a ejecutar cuando se monta y cuando la dependencia se actualiza
  // useEffect(() => {
  //   console.log("Actualice isActive");
  // }, [isActive]);
  // useEffect(() => {
  //   console.log("Actualice counter");
  // }, [counter]);
  // useEffect(() => {
  //   console.log(props)
  //   console.log("cambie")
  // },[props])

  // useEffect(() => {
  //   setName(props.name);
  // }, [props.name]);

  // useEffect(() => {
  //   console.log("nuevo nombre: " + name);
  // }, [name]);

  // componentWillUnmount -> se usa el useEffect para desmontar el componente retornando una nueva funcion y con el arreglo de dependencias vacio
  // useEffect(() => {
  //   // Para que se ejecute algo cuando se desmonta el componente
  //   // En el useEffect, debe retornarse una nueva funcion
  //   console.log("Me monte")
  //   return () => console.log("I'm dead");
  // }, []);


  //! useEffect -> para montaje -> array vacio
  //? para actualizar -> array con dependencias (tanto estados como props) -> tambien se va a ejecutar la primer vez
  //* para desmontar -> array vacio y en bloque del useEffect se debe retornan una funcion, donde esta funcion tiene las instrucciones que se ejecutaran cuando se demonte el componente
  // un mismo useEffect me puede servir para montaje y desmontaje
  useEffect(() => { 
    console.log("me monte")
    return () => { console.log("me desmonte")}
  }, [])
  // un mismo useEffect me sirve para montaje y actualizacion
  useEffect(() => { 
    console.log("cuando se monta o cuando cambia isActive")
  }, [isActive])
  // useMemo -> 

  function aumento() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Soy el LifeCycle</h1>
      {/* <h3>Name: {name}</h3> */}
      <h3>Counter: {counter}</h3>
      <h3>isActive: {isActive ? "Yes" : "Not"}</h3>
      <button onClick={aumento}>Aumentar</button>
      <button onClick={() => setIsActive(!isActive)}>Change</button>
    </div>
  );
}

export default LifeCycle;

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
