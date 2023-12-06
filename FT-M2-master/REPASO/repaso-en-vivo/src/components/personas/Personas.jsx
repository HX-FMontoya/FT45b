import Persona from "../persona/Persona";

export default function Personas({ personas }) {
  return (
    <div>
      {personas.map((persona, index) => (
        <Persona persona={persona} key={index} />
      ))}
    </div>
  );
}
