// Una promesa es el eventual resultado de una operacion asincrona
// Es decir que en algun momento puede resolverse o rechazarse

// Una promesa es un objeto

// {
//     status: "pending" || "fulfilled" || "rejected",
//     result: undefined || value || reason
// }

//? const myPromiseOne = new Promise : Aprobar el M3
// { status: "pending", result: und }

//* Si la promesa se resuelve a un valor
// {status: "fulfilled", result: "Felicidades"}

//! Si la promesa se rechaza a una razon
// {status: "rejected", result: "No alcanzo la nota minima"}

// TODO : Una vez la promesa cambia de estado, no vuelve a cambiar
// TODO: Si pasa de "pending" a "fulfilled" por ejemplo, no puede luego pasar a "rejected" o a "pending".

// otro ejemplo:

//? const myPromiseTwo = new Promise: axios("https://rym2.up.railway.app/api/character")
// { status: "pending", result: und }

//* Si la promesa se resuelve a un valor
// { status: "fulfilled", result: { statusCode:200, data: {...} } }

//! Si la promesa se rechaza a una razon
// { status: "rejected", result: {message: "Bad request"} }

// TODO METODO .then()

// El .then maneja internamente dos handlers
// .then(succesHandler, errorHandler)

//* succesHanlder -> Maneja el caso del exito, solo se va a ejecutar si la promesa cambia a "fulfilled"
// El argumento de la funcion es la data

//! errorHanlder -> Maneja el caso del rechazo, solo se va a ejecutar si la promesa cambia a "rejected"
// El argumento de la funcion es la razon del rechazo

//? Ejemplo mas completo: aplicando la logica a tomar un vuelo
// Se deben pasar diversos filtros: Papeles al dia, no tener antecedentes, no tener objetos peligrosos antes de abordar, etc

// const MyPromise = new Promise("Tomar un vuelo")

// MyPromise.then((response)=>{console.log(response)} , (reason)=>console.log(reason) )
//                        ^                                    ^
//                      Respuesta, caso fulfilled            razon, caso rejected

//                    fulfilled -> [papeles al dia: ✅] -> [no tiene antecedentes: ✅]
// promesa -> - ✈️ -🚔                  |                      |
//                    rejected -> [falta pasaporte : ❌] -> [robo : ❌]

//? O aplicado a un caso real:

// axios(url)
//.then((res) => res.data, (err) => console.log(err)))
// .then(data => console.log(data.name), (err) => console.log(err))

//                    fulfilled -> [res.data: ✅] -> [log(data.name): ✅]
// promesa -> - ✈️ -🚔                  |                   |
//                    rejected -> [log(err) : ❌] -> [log(err) : ❌]

// TODO METODO .catch()

// En vez de que cada then tenga un errorHandler, que tal manejarlo al final?
// Pista: Esto sera el catch en una promesa

//                    fulfilled -> [papeles al dia: ✅] -> [no tiene antecedentes: ✅]
// promesa -> - ✈️ -🚔                  |                      |
//                    rejected ->        - - - - - - - - - - - - - - - - - -> [log(reason) : ❌]

//

//                    fulfilled -> [res.data: ✅] -> [log(data.name): ✅]
// promesa -> - ✈️ -🚔                  |                   |
//                    rejected ->        - - - - - - - - - - - - - - - - - -> [log(reason) : ❌]

// TODO Hacer demo sencilla con axios, then
// TODO sin catch 
axios("https://rickandmortyapi.com/api/character/1")
  .then(
    (res) => res.data,
    (err) => console.log(err)
  )
  .then(
    (data) => console.log(data.name),
    (err) => console.log(err)
  );
// TODO  con catch
axios("https://rickandmortyapi.com/api/character/1")
  .then((res) => res.data)
  .then((data) => console.log(data.name))
  .catch((err) => console.log(err));

// TODO Explicar como se crea una promesa
// TODO creando promesas en scope global
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Pase por la primera promesa");
    resolve(1);
  }, 1000);
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Pase por la segunda promesa");
    resolve(2);
  }, 2000);
});

// console.log(promiseOne);
promiseOne.then((res) => console.log(res));
promiseTwo.then((res) => console.log(res));

// TODO controlando el scope de las promesas
function promesaUno() {
  const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Pase por la primera promesa");
      resolve(1);
    }, 1000);
  });
  return promiseOne;
}

function promesaDos(num) {
  const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Pase por la segunda promesa");
      console.log(num);
      resolve(2 + num);
    }, 2000);
  });
  return promiseTwo;
}

//* promesas apartadas
promesaUno().then((res) => console.log(res));
promesaDos().then((res) => console.log(res));

//* promesas combinadas
promesaUno()
  .then((res) => promesaDos(res))
  .then((res) => console.log(res));

// TODO manejando reject
function promesaUno(num) {
  const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Pase por la primera promesa");
      if (num > 0) resolve(num);
      else reject(0);
    }, 1000);
  });
  return promiseOne;
}

function promesaDos(num) {
  const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Pase por la segunda promesa");
      if (num >= 5) resolve(num - 5);
      else reject(5 - num);
    }, 2000);
  });
  return promiseTwo;
}
//* se maneja con el errorHandler
promesaUno(-2)
  .then(
    (res) => promesaDos(res),
    (err) => console.log(err)
  )
  .then(
    (res) => console.log(res),
    (err) => console.log(err)
  );
//* O manejarlo con un catch
promesaUno(2)
  .then((res) => promesaDos(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
