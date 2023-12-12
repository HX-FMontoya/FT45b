import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
  }
}
