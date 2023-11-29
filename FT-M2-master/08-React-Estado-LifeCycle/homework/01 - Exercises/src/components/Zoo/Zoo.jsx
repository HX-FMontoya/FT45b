import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";
import axios from "axios";

export default function Zoo() {
  // Escribe acá tu código
  const URL_SERVER = "http://localhost:3001/zoo";
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  React.useEffect(() => {
    // fetch
    fetch(URL_SERVER)
      .then((res) => res.json())
      .then(({ animals, species }) => {
        setZoo({
          ...zoo,
          animals,
          species,
          allAnimals: animals,
        });
      })
      .catch((error) => console.log(error));
    // axios
    axios(URL_SERVER)
      .then(({ data }) => {
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    if (zoo.zooName.length) {
      handleSearch();
    }
  }, [zoo.zooName]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setZoo({
      ...zoo,
      zooName: value,
    });
  };

  const handleSpecies = (event) => {
    const { value } = event.target;
    // value -> es el nombre de una specie
    const filtered = zoo.allAnimals.filter((animal) => animal.specie === value);
    setZoo({
      ...zoo,
      animals: filtered,
    });
  };

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    });
  };

  const handleSearch = () => {
    const filtered = zoo.allAnimals.filter((animal) =>
      animal.name.toLowerCase().includes(zoo.zooName.toLowerCase())
    );
    setZoo({
      ...zoo,
      animals: filtered,
    });
  };

  return (
    <div>
      <label>Zoo Name:</label>
      <input onChange={handleInputChange} value={zoo.zooName} />
      <h1>Estas buscando: {zoo.zooName}</h1>

      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals} />
    </div>
  );
}

/* import React from "react";
import Animals from "../Animals/Animals";
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  React.useEffect(() => {
    fetch("http://localhost:3001/zoo")
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
    // eslint-disable-next-line
  }, []);

  const handleSpecies = (e) => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter(
        (animal) => animal.specie === e.target.value
      ),
    });
  };
  const handleAllSpecies = () => {
    setZoo({ ...zoo, animals: zoo.allAnimals });
  };

  const handleInputChange = (e) => setZoo({ ...zoo, zooName: e.target.value });
  return (
    <div className={`${styledZoo.divContent} ${styledZoo.divContentTitle}`}>
      <label>Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1 className={styledZoo.title}>{zoo.zooName}</h1>

      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />

      <Animals animals={zoo?.animals} />
    </div>
  );
} */
