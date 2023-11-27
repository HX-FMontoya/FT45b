import React from "react";

const studentName = "DANIEL MEJIA";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>Iniciando React</h1>
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
