import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hola, soy la demo en vivo</h1>
          <button onClick={() => navigate("/home")}>Ingresar</button>
    </div>
  );
}
