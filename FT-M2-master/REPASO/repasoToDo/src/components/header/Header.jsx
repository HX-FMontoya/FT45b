import { useSelector } from "react-redux";
import Form from "../form/Form";
import "./Header.css"
export default function Header() {
  const name = useSelector((state) => state.name);
  return (
    <header>
      <h2>Bienvenido/a {name}</h2>
      <Form labelName="Ingresa la ToDo" buttonName="Agregar" />
    </header>
  );
}
