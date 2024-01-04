import React from "react";
import Animal from "../Animal/Animal";
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
<<<<<<< HEAD
=======
    // props -> {animals: [{},{},{}]}
>>>>>>> c068f74282362c4c4b9a17cdafe289e78875212d
    super(props);
  }

  render() {
<<<<<<< HEAD
    return <div>
      {this.props.animals.map((currentValue, index)=>{
        return (
          <div key={index}>
            <h5>{currentValue.name }</h5>
            <img src={currentValue.image} alt={currentValue.name} width="300px"/>
            <span>{currentValue.specie}</span>
          </div>
        )
      }) }

    </div>
=======
    return (
      <div>
        {this.props.animals.map(({ name, specie, image }, index) => (
          <Animal
            key={index}
            id={index}
            name={name}
            specie={specie}
            image={image}
          />
        ))}
      </div>
    );
>>>>>>> c068f74282362c4c4b9a17cdafe289e78875212d
  }
}

/* import React from "react";
import styledAnimals from "./Animals.module.css";

export default class Animals extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styledAnimals.container}>
        {this.props.animals.map((animal, index) => (
          <div key={index} className={styledAnimals.containerAnimals}>
            <h5>{animal.name}</h5>
            <img width="300px" src={animal.image} alt={animal.name} />
            <br />

            <span>{animal.specie}</span>
          </div>
        ))}
      </div>
    );
  }
} */
