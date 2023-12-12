const { INCREMENTO, DECREMENTO, INCREMENTOIMPAR } = require("../action-types");

const initialState = {
  contador: 0,
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  // action -> {type:"INCREMENTO" , payload}
  console.log(state.contador);
  switch (action.type) {
    case INCREMENTO:
      return {
        ...state,
        contador: state.contador + 1,
      };
    case DECREMENTO:
      return {
        ...state,
        contador: state.contador - 1,
      };
    case INCREMENTOIMPAR:
      if (state.contador % 2 !== 0) {
        return {
          ...state,
          contador: state.contador + 2,
        };
      } else {
        return {
          ...state,
          contador: state.contador + 1,
        };
      }
    default:
      return {
        ...state,
      };
  }
}

module.exports = contador;
