const routerUsers = require("./routes/users/index")
const express = require("express");
const server = express();

//* middlewares
//? express.json() para poder leer req.body
server.use(express.json());
//? middleware para delegar las rutas de users
server.use("/users", routerUsers)
//? middleware para delegar las rutas de todos

module.exports = server;
