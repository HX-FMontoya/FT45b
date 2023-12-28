// Promesa -> Es el eventual resultado de una operacion asincrona

// Una promesa es un objeto

/* { 
    status: "pending",
    result: undefined
} */

//? Ejemplo:

// const myPromise = new Promise()

// myPromise = "Tomar un vuelo para las vacaciones"

// 1. Comprar los tiquetes
// 2. Llega con 2 hrs de anticipacion al aeropuerto
// 3. Pasar por check in
// 4. Escaner
// 5. Abordaje

// La funcion de cb es la que se encarga de gestionar
// Si se resuelve o se rechaza
// myPromise = "Tomar un vuelo para las vacaciones"
// myPromise()

// 1. Comprar los tiquetes
function promesaUno() {
  const precioTiquete = 600;
  const myPromiseOne = new Promise(function (resolve, reject) {
    const saldo = 1000;
    setTimeout(() => {
      if (precioTiquete < saldo) resolve("Tiquetes comprados");
      // el resolve cambia internamente el objeto
      // { status: "fulfilled", result: "Tiquetes comprados"}
      else reject("No tenes fondos suficientes");
      // el reject cambia el objeto
      // { status: "rejected" , result: "No tenes fondos suficientes"}
    }, 2000);
  });
  console.log(myPromiseOne);
  return myPromiseOne;
}
promesaUno();

myPromiseOne.then(
  function (value) {
    // funcion successHandler -> maneja el valor al cual se resuelve la promesa
    console.log(myPromiseOne);
        console.log("Me resolvi a: ", value);
  },
  function (reason) {
    // funcion errorHandler -> maneja la razon del rechazo
    console.log(myPromiseOne);
    console.log("Me rechazaron por: ", reason);
  }
);
// En el m2, connect(null, mapDispatchToProps)
// .then(null, function(reason){}) -> catch
// catch(function(err){})

// 2. Llega con 2 hrs de anticipacion al aeropuerto
function promesaDos(value) {
  console.log(value);
  const hora = 12;
  const myPromisetwo = new Promise(function (resolve, reject) {
    const horaLlegada = 10;
    setTimeout(() => {
      if (hora - horaLlegada >= 2) resolve("Que puntualidad!");
      else reject("Llegaste tarde");
    }, 2000);
  });
  console.log(myPromisetwo);
  return myPromisetwo;
}

/* myPromisetwo.then(
  function (value) {
    console.log("Me resolvi a: ", value);
  },
  function (reason) {
    console.log("Me rechazaron por: ", reason);
  }
); */


//               fulfilled            [ ✅ ]                [ ✅ ]
// Tomar un vuelo -> Comprar Tiquetes   | -> Llegar puntual    |
//               rejected             [ ❌ ]                [ ❌ ]


//               fulfilled            [ ✅ ]                [ ✅ ]
// Tomar un vuelo -> Comprar Tiquetes   | -> Llegar puntual    |
//               rejected               - - - - - - - - - - - - - - >  [ ❌ ]



myPromiseOne().then(fn).then(fn).then().catch()