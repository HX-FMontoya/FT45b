import { useParams } from "react-router-dom";

export default function Persona() {

  const { id } = useParams();
  return (
    <div>
      <h1>Hola soy la persona { id }</h1>
    </div>
  );
}
