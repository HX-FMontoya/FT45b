const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/1";
const url2 = "https://rickandter/1";

function promesaA(url) {
  const promiseA = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (url === "https://rickandmortyapi.com/api/character/1") {
        resolve("bien");
      } else {
        reject("mal");
      }
    }, 1000);
  });
  return promiseA;
}

function promesaB(num) {
  const promiseB = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (num > 10) resolve("aprobaste");
      else reject("debes migrar");
    }, 1000);
  });
  return promiseB;
}

promesaA(url2)
  .then(
    (value) => {
      console.log("1: ", value);
      return promesaB(4);
    },
    (err) => {
      console.log("2: ", err);
      // return `Algo paso: ,${err}`
      // throw `Algo paso: ,${err}`;
      return promesaB(15);
    }
  )
  .then((value) => console.log("3: ", value))
  .catch((err) => console.log("4: ", err));

/* console.log(promesaA(url));
promesaA(url)
  .then(
    (value) => {
      console.log("1: ", value);
      if (!value.includes("ien")) {
        throw new Error("Deberia incluir 'ien', estoy parado en 1");
      }
    },
    (err) => {
      console.log(console.log("2: ", err));
    }
  )
  .then((value) => {
    console.log("3: ", value);

    throw new TypeError("value debe ser un numero");
  })
  .then()
  .catch((err) => {
    console.log("6: ", err);
  }); */

/* axios(url)
  .then((value) => value.data)
  .then((value) => console.log(value))
  .catch((reason) => console.log(reason)); */

// DEMO FLOW CHART
//* camino en que una promesa se resuelve y no tiene handler
/* axios(url)
  .then()
  .then(null, (err) => console.log(err))
  .then()
  .then(); */

//! camino de rechazo y no tiene un handler
/* axios(url2)
  .then(
    (value) => value.data.name,
    (err) => {
      console.log("1: ", err);
    }
  )
  .then(
    (character) => console.log("2: ", character),
    (err) => {
      console.log("3: ", err);
    }
  ); */
