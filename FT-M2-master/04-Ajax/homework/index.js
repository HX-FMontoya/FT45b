// Anterior
// document.getElementById("boton").addEventListener("click", cb)

// Actual -> JQuery -> AJAX
const URL = "http://localhost:5000";
const image = $("#image");
image.hide();
const verAmigos = $("#boton");
verAmigos.click(() => {
  image.show();
  const lista = $("#lista");
  lista.empty();
  const urlAmigos = `${URL}/amigos`;
  $.get(urlAmigos, (arrayAmigos) => {
    image.hide();
    for (const amigo of arrayAmigos) {
      // [{},{},{}]
      // amigo -> {name: "Feli",}
      // <ul>
      // <li>1 - Tony</li>
      // <li>2 - </li>;
      // <li>3 - </li>;
      // <li>4 - </li>;
      //</ul >
      lista.append(`<li>${amigo.id} - ${amigo.name}</li>`);
    }
  });
});

// Buscar un amigo
const botonBuscar = $("#search");
const inputBuscar = $("#input");

botonBuscar.click(() => {
  const input = inputBuscar.val();
  const amigo = $("#amigo");
  amigo.empty();
  if (input > 6 || input < 1) return alert("No existe amigo con ese ID");
  const urlAmigoId = `${URL}/amigos/${input}`;
  $.get(urlAmigoId, (objetoAmigo) => {
    amigo.text(objetoAmigo.name);
  });
});

// Borrar amigo
const botonBorrar = $("#delete");
const inputBorrar = $("#inputDelete");

botonBorrar.click(() => {
  const input = inputBorrar.val();
  /* if (input > 6 || input < 1) return alert("No existe amigo con ese ID"); */
  const urlAmigoId = `${URL}/amigos/${input}`;
  $.ajax({
    url: urlAmigoId,
    type: "DELETE",
    success: () => {
      console.log("Ya lo borre");
    },
    error: () => {
      console.log("No lo pude borrar");
    },
  });
});
