import { useParams, useLocation, useNavigate } from "react-router-dom";
const Persona = () => {
  // Estos son algunos hooks
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname.includes("1")) console.log("es la persona 1");
  // params -> {id: ""}
  function handleClick() {
    navigate("/home");
  }
  return (
    <div>
      <h1>Soy la persona con el param: {params.id} </h1>
      <button onClick={handleClick}>Navegar al Home</button>
    </div>
  );
};
export default Persona;
