/* import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies}) {
  // props -> {species : ["Mamíferos", "Reptiles", "Aves"] , handleSpecies:  (event) => {} , handleAllSpecies: () => {}}
  // console.log(species);
  return (
    <div>
      <h2>Species</h2>
      {species.map((specie, index) => (
        <button key={specie} onClick={handleSpecies} value={specie}>
          {specie}
        </button>
      ))}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  );
} */

import React from "react";
import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  // console.log(species);
  return (
    <div className={styledSpecies.divContent}>
      <h2>Species</h2>
      {species &&
        species.map((specie, i) => {
          return (
            <button key={i} onClick={handleSpecies} value={specie}>
              {specie}
            </button>
          );
        })}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  );
}
