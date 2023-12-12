import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPersona } from "../../redux/actions";

export default function Home() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()
  const nombre = useSelector((state) => state.userName);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleClick = () => {
    console.log(`Voy a buscar al id: ${input}`);
    dispatch(getPersona(input))
  };

  return (
    <div>
      <h2>Bienvenido {nombre}</h2>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Agregar</button>
    </div>
  );
}
