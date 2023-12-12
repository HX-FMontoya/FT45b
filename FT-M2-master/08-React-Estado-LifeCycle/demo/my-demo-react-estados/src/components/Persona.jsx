function Persona(props) {
  console.log(props);
  // props -> {nombre = "Feli", edad = "25"}
  // props -> {nombre = "Jero", edad = "24"}
  return (
    <div>
      <h3>Nombre: {props.name}</h3>
      <h3>Edad: {props.age}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default Persona