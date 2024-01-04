const { users } = require("../../db/index")

function postUser(req, res) {
    const { body } = req;
    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (Object.keys(body).length === 0) {
          reject("Debes enviar un usuario");
        } else {
          users.push(body);
          resolve("Usuario agregado con exito");
        }
      }, 1000);
    });
    promise
      .then((mensaje) => res.status(201).send(mensaje))
      .catch((reason) => res.status(400).send(reason));
}

module.exports = postUser

//* Esto es lo que estaba en server antes de modularizar
//? version de promesa
/* server.post("/users", (req, res) => {
  const { body } = req;
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (Object.keys(body).length === 0) {
        reject("Debes enviar un usuario");
      } else {
        users.push(body);
        resolve("Usuario agregado con exito");
      }
    }, 1000);
  });
  promise
    .then((mensaje) => res.status(201).send(mensaje))
    .catch((reason) => res.status(400).send(reason));
}); */

//? async await
/* server.post("/users", async (req, res) => {
  try {
    const { body } = req;
    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (Object.keys(body).length === 0) {
          reject("Debes enviar un usuario");
        } else {
          users.push(body);
          resolve("Usuario agregado con exito");
        }
      }, 1000);
    });
    const result = await promise;
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}); */
