//? Dependencias
const axios = require("axios");

//? Variables de entorno
require("dotenv").config();
const { PORT, HOST } = process.env;

//? Como se hacia con http

/* const http = require("http");
const server = (req, res) => {
    const { url, method } = req;
    // req.params ? req.query ?
  if (url === "/hola") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Hola mundo!");
      res.end();
    } else if (method === "POST") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Hola POST");
      res.end();
    }
  } else if (url === "/users") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hola users!");
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Nada para mostrar!");
    res.end();
  }
};
http.createServer(server).listen(PORT, HOST, () => {
  console.log(`Listening  on port: ${PORT}`);
}); */

//? Como se hace con express

/* const express = require("express");
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("pase por el md 2");
  next();
});

// users

app.get("/users", (req, res) => {
  console.log(req.query); // {}
  //
  res.status(200).send("GET users");
});

app.use((req, res, next) => {
  console.log("pase por el md 1");
  next();
});

app.post("/users", (req, res) => {
  res.header().status(200).send("POST users");
});

app.delete("/users", (req, res) => {
  res.header().status(200).send("Delete users");
});

//? metodo all
app.all("/users", (req, res) => {
    console.log(req);
    const { method } = req
  res.header().status(200).send("Algo con users");
});

// movies
app.get("/movies", (req, res) => {
  console.log(req.query); // {}
  res.status(200).send("GET movies");
});

app.get("/movies/:type/:id", (req, res) => {
  console.log(req.params); // {}
  res.status(200).send("GET movies id");
});

app.post("/movies", (req, res) => {
  const { body } = req;
  console.log(body);
  res.status(200).send("POST movies");
});

app.listen(PORT, HOST, () => {
  console.log(`Listening  on port: ${PORT}`);
}); */

//? version express con rutas

const express = require("express");
const router = require("./routes/index");
const app = express();

// manejo de rutas

app.use("/", router);

app.listen(PORT, HOST, () => {
  console.log(`Listening  on port: ${PORT}`);
});
