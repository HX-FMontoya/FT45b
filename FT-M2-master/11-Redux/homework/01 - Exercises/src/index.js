const { legacy_createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento, incrementoImpar } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = legacy_createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // store.getState() -> { contador: 0 }
  const { contador } = store.getState();
  console.log(`me actualice: ${contador}`);
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = contador;
}

// Ejecutamos la función 'renderContador':
renderContador();
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
const incrementoButton = document.getElementById("incremento");
const decrementoButton = document.getElementById("decremento");
const incrementoImparButton = document.getElementById("incrementoImpar");
const incrementoAsyncButton = document.getElementById("incrementoAsync");
// hagan un dispatch al store de la acción correspondiente:
incrementoButton.addEventListener("click", () => {
  store.dispatch(incremento());
});
decrementoButton.addEventListener("click", () => {
  store.dispatch(decremento());
});
incrementoImparButton.addEventListener("click", () => {
  store.dispatch(incrementoImpar());
});
incrementoAsyncButton.addEventListener("click", () => {
  setTimeout(() => {
    store.dispatch(incremento());
  }, 1000);
});
