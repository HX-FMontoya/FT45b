import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Zoo() {
  /* Escribe acá tu código */


  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  })

  const handleInputChange = (event) => {
    const { value } = event.target
    setZoo({ ...zoo, zooName: value })
  };

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []);


  const handleSpecies = (event) => { 
    // value es el nombre de una specie
    const {value} = event.target;
    const arrayFilter = zoo.allAnimals.filter()

  };

  const handleAllSpecies = (event) => { };



  return (
    <div>
      <label>Zoo Name:</label>
      <input zoo={zoo.zooName} value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
      <Animals animals={zoo.animals}/>

    </div>
  );
}
