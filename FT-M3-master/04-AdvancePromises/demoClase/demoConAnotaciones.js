// TODO Repaso

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("se resuelve promiseOne");
    reject("se rechaza promiseOne");
  }, 1000);
});

console.log("1: ", promiseOne);

// Manejar la promesa One
promiseOne.then(
  function (value) {
    console.log("2: ", value);
  },
  function (reason) {
    console.log("3: ", reason);
  }
);

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("se resuelve promiseTwo");
    // reject("se rechaza promiseTwo");
  }, 1000);
});

console.log("4: ", promiseTwo);

// Manejar la promesa Two
promiseTwo.then(
  function (value) {
    console.log("5: ", value);
  },
  function (reason) {
    console.log("6: ", reason);
  }
);

// 1, 4, 3, 5

// TODO Hacer ejemplo con fetch o axios

/* fetch("https://rym2.up.railway.app/api/character/1?key=henrystaff")
  .then((res) => res.json())
  .then((data) => console.log(data)); 
  .catch((err) => console.log(err))  
*/

//               fulfilled            [ ✅ ]                [ ✅ ]
// Tomar un vuelo -> Comprar Tiquetes   | -> Llegar puntual    |
//               rejected             [ ❌ ]                [ ❌ ]

//               fulfilled            [ ✅ ]                [ ✅ ]
// Tomar un vuelo -> Comprar Tiquetes   | -> Llegar puntual    |
//               rejected               - - - - - - - - - - - - - - >  [ ❌ ]

fetch("https://rym2.up.railway.app/api/character/1?key=henrystaff")
  .then(
    function (res) {
      return res.json();
    },
    function (reason) {
      console.log(reason);
    }
  )
  .then(
    function (data) {
      console.log(data);
    },
    function (reason) {
      console.log(reason);
    }
  );

//? Explicando Dagrama PDF flowchart

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Me resolvi");
    reject("Me rechace");
  }, 1000);
});
// Cuando una promesa se cumple, puede o resolverse o rechazarse

//* Si se resuelve
//* Tiene dos caminos
//* 1 -> Se resuelve y no tiene succes Handler
myPromise.then().then().then();
myPromise
  .then()
  .then(null, () => {})
  .then();
//* 2 -> Se resuelve y tiene succes Hanlder
//* En este caso se subdivide en 3
//* 2.1 -> Su handler retorna un resultado
myPromise.then((value) => {
  console.log(value); // ? Con esto, que resultado arroja la promesa?
});
myPromise.then((value) => value); // ? Con esto, que resultado arroja la promesa?

//? Es decir, para cada caso anterior, el encadenamiento de then se comporta:

myPromise
  .then((value) => console.log(value)) //? Que devuelve este console.log?
  .then((value) => console.log(value)); //? Que devuelve este console.log?
myPromise
  .then((value) => value) //? Que devuelve este console.log?
  .then((value) => console.log(value)); //? Que devuelve este console.log?

//* 2.2 -> Su handler retorna una nueva promesa
myPromise.then((value) => {
  console.log(value);
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Se resuelve la nueva promesa");
      // reject("Se rechaza la nueva promesa");
    }, 1000);
  });
});
//? O mejor de esta forma
const myOtherPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Se resuelve la nueva promesa");
    // reject("Se rechaza la nueva promesa");
  }, 1000);
})
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
myPromise
  .then((value) => {
    console.log(value);
    return myOtherPromise;
  })
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
//* 2.3 -> Su handler arroja un error
myPromise
  .then((value) => {
    console.log(value);
    throw Error("Ocurrio un error");
  })
  .then()
  .then(null, (err) => console.log(err))
  .catch((err) => console.log(err));

//! Se rechaza
//! Tiene dos caminos
//! 1 -> Se rechaza y no tiene error Handler
/* const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("Me resolvi");
    reject("Me rechace");
  }, 1000);
}); */
myPromise.then((value) => console.log(value));
myPromise.then();
myPromise.catch();
//! 2 -> Que tenga error Handler
//! En cuyo caso se divide en 3 tipos al igual que el success
//! 2.1 -> Se rechaza a un resultado
myPromise.then(null, (reason) => console.log(reason));
myPromise.then(
  (value) => console.log(value),
  (reason) => console.log(reason)
);
myPromise
  .then((value) => console.log(value))
  .catch((reason) => console.log(reason));
//! 2.2 -> Se rechaza a una nueva Promesa
const myPromiseB = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ status: 200, message: "Hola" });
    reject({ status: 400, message: "Error" });
  });
});

myPromise
  .then(
    (value) => console.log(value),
    (reason) => {
      console.log(reason);
      return myPromiseB;
    }
  )
  .then(
    (value) => console.log(value),
    (err) => console.log(err)
  );

//? La mejor forma es si tenemos encapsulada la promesa en una funcion, ya que, podemos recibir por parametro el valor al cual se rechaza

function promiseC(result) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (result.status === 200) resolve(result.message);
      else reject(result.message);
    });
  });
  return promise;
}

myPromiseB
  .then(
    (value) => console.log(value),
    (reason) => {
      return promiseC(reason);
    }
  )
  .then(
    (data) => console.log(data),
    (err) => console.log(err)
  );

//! 2.3 -> Que arroje un error
myPromise
  .then(
    (value) => console.log(value),
    (reason) => {
      console.log(reason);
      throw Error("Hubo un error");
    }
  )
  .then(
    (value) => value,
    (err) => console.log(err)
    // Con este errorHanlder ya no seria necesario un catch
    // Debido a que esta capturando el throw que viene de la promesa anterior
  )
  .catch((err) => console.log(err));
