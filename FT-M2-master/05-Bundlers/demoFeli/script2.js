// ------------------ 1 ---------------------

// console.log("Estoy en el script 2");

// ------------------- 2 --------------------

// saludar()
/* function despedirse() { 
    console.log("bye")
} */

// ------------------ 3 ---------------------

/* var arr = ["Feli", "Alejo", "Daniel", "Kelly", "Rigo"]
mostrarNumero(3) */

// ------------------ 4 ---------------------

// let nombre = "Feli";

// ------------------ 5 ----------------------
// ---------------  IIFE  --------------------

/* var names = [
  "Argentina",
  "Colombia",
  "Mexico",
  "Venezuela",
  "Chile",
  "Ecuador",
  "Perú",
  "Bolivia",
];

console.log(weekDay.name(2));
console.log(algo); */

// ------------------ 6 ----------------------
// -------------  commonJS  ------------------
// --------   SINTAXIS -> BACKEND  -----------
/* var weekDays = require("./script1.js")
console.log(weekDays.name) */
// weekDays -> {}
/* 
    Se arma un paquete de este estilo
{
    name: function (number) {
            return names[number];
        },
    number: function (name) {
                return names.indexOf(name);
            }
} 
*/

// console.log(weekDays.name(3))

// ------------------ 7 ----------------------
// -----------  module Exports  --------------

/* var weekDays = require("./script1.js")
console.log(weekDays.name(3)); */

// ------------------ 8 ----------------------
// ----------------  ES6  --------------------

/* import todo from "./script1.js";
console.log(todo) */
// {name, number}
/* import { name } from "./script1.js"
console.log(name(2)) */
/* import { number as num, name } from "./script1.js";
// console.log(name(4));  
console.log(num("Martes")) */
/* import objeto from "./script1.js";
console.log(objeto) */
