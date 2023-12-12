import Persona from "../persona/Persona";

export default function Amigos({ amigos }) {
  return (
    <div>
      {amigos.map((amigo, index) => (
        <Persona persona={amigo} key={index} />
      ))}
    </div>
  );
}
