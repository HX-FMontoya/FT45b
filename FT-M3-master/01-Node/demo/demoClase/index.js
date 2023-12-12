//* Esta es la forma de importar
const fs = require("fs");
const saludar = require("./saludo");
//* Si importo en el back de la siguiente manera, me migran al PREP
/* import { readFileSync } from "fs";
import saludar from "./saludo"; */
// Que se esta guardando en saludar -> fn -> (nombre) => `Hola ${nombre}`
// file system -> lectura y escritura de archivos
console.log(saludar("Jose"));
const poema = fs.readFileSync("./poem.txt", "utf8", function (err, data) {
  if (err) console.log(err);
  if (data) return data;
});
console.log(poema);
console.log("Lectura realizada");

// M2 -> MODULO -> ARCHIVO -> COMMONJS
