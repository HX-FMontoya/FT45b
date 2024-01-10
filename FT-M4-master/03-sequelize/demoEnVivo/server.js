const express = require("express");
const routerUsers = require("./routes/users/index");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json())
server.use("/users",routerUsers);

module.exports = server;
