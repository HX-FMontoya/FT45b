// TODO -> Variables del server
const PORT = 3001;
const HOST = "127.0.0.1";

// TODO -> Server con http

const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hola mundo!");
    res.end();
  })
  .listen(PORT, HOST, () => {
    console.log(`Listening on port: ${PORT}`);
  });

// TODO -> Server con Express

const express = require("express");
const app = express();

// TODO -> Middleware necesario para req.body
//? Antes era usado el middleware 'body-parser'
//? A partir de la version 4.16.0 se integro a express
//? Por ende, solo debe usarse express.json()
app.use(express.json());

// TODO -> morgan es un middleware para usarlo en express 
// TODO -> y proporcionar el metodo y un tanto mas de informacion de la request
//? Se debe instalar con npm i morgan
//? Tambien debe usarse de la siguiente manera
const morgan = require("morgan")
app.use(morgan)

// TODO -> Una ruta basica

app.get("/", function (req, res) {
  res.send("Hello World");
});

// TODO -> Metodos

app.get("/users", function (req, res) {
  res.send("GET users");
});
app.post("/users", function (req, res) {
  res.send("POST users");
});
app.put("/users", function (req, res) {
  res.send("PUT users");
});

// TODO -> Metdodo all -> Permite capturar cualquier tipo de request

app.all("/users", function (req, res) {
  console.log(req.method);
  res.send("request a /users");
});

// TODO -> Estos metodos son reremplazados por el all

app.get("/users", function (req, res) {
  console.log("GET users");
  res.send("GET users");
});
app.post("/users", function (req, res) {
  console.log("POST users");
  res.send("POST users");
});
app.put("/users", function (req, res) {
  console.log("PUT users");
  res.send("PUT users");
});
app.delete("/users", function (req, res) {
  console.log("DELETE users");
  res.send("DELETE users");
});
app.patch("/users", function (req, res) {
  console.log("PATCH users");
  res.send("PATCH users");
});

//TODO -> QUERYS, PARAMS, BODY

app.get("/users", function (req, res) {
  console.log("Querys: ", req.query);
  res.send("GET users");
});
app.get("/users/:id1/:id2", function (req, res) {
  console.log("Params: ", req.params);
  res.send("GET users");
});
app.post("/users", function (req, res) {
  console.log("Body: ", req.body);
  res.send("POST users");
});
app.put("/users", function (req, res) {
  console.log("Body: ", req.body);
  res.send("PUT users");
});

// TODO -> MIDDLEWARES
// TODO -> El orden de las rutas y los middlewares importa
// TODO -> Todas las rutas que estan por debajo de un middleware, 
// TODO -> la request pasara primero por el middleware

app.use(function (req, res, next) {
  console.log("pase por aqui");
  next();
});
app.all("/users", function (req, res) {
  console.log(req);
  res.send("request a /users");
});

//? Middleware para verificar que esta llegando la query correcta
//? De esta forma todas las rutas por debajo, estaran "protegidas"
//? Si no tiene la key correcta, no le permitira pasar

app.use(function (req, res, next) {
  const { key } = req.query;
  if (key === "admin") {
    next();
  } else {
    res.send("No Autorizado");
  }
});

app.get("/dashboard", function (req, res) {
  res.send("Estas en el dashboard");
});
app.get("/dashboard/detail", function (req, res) {
  res.send("Estas en el dashboard detail");
});
app.get("/home", function (req, res) {
  res.send("Estas en el home");
});

// TODO -> CORS

//? Sin libreria

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); //Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

//? Con libreria

const cors = require('cors');
//Habilito todas las solicitudes CORS
app.use(cors()); // Si dejo cors sin parametros, aceptaria todo
// Le puedo pasar un objeto 
var corsOptions = {
  origin: "http://example.com", // usa * para aceptar a todos
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization", // ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions))


// TODO -> Usando CORS en una ruta

app.get("/products/:id", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all" });
});
app.get("/dahboard/", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

// TODO -> EXPRESS STATIC -> middleware

//? Se usa para renderizar archivos html, imagenes, css desde el back
app.use(express.static('public'));

// Ruta principal que sirve un archivo HTML estático
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// TODO -> LISTENING DEL SERVER

app.listen(PORT, HOST, () => {
  console.log(`Listening on port: ${PORT}`);
});
