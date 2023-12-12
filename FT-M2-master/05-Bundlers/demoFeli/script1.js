// ----------------- 1 ----------------------

// console.log("Estoy en el script 1")

// ---------------- 2 ----------------------

/* function saludar() { 
    console.log("Holi")
} */
// despedirse();

// ---------------- 3 ----------------------

/* var arr = [0, 1, 2, 3, 4]
function mostrarNumero(index) { 
    console.log(arr[index])
}
mostrarNumero(1) // 1 */
// --------------- 4 -----------------------

// let nombre = "Maty"

// --------------- 5 -----------------------
// ------------  IIFE  ---------------------
/* const weekDay = (function () {
  var names = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  window.algo = "algo random"
  return {
    name: function (number) {
      return names[number];
    },
    number: function (name) {
      return names.indexOf(name);
    },
  };
})();
console.log(weekDay.name(3));  */ // Miercoles

// ------------------ 6 ----------------------
// -------------  commonJS  ------------------

/* var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

exports.name = function (number) {
  return names[number];
};
exports.number = function (name) {
  return names.indexOf(name);
}; */

/* 
  exports -> {}
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

// Se puede exports = function algo(){...} ??? NO

// ------------------ 7 ----------------------
// -----------  module Exports  --------------

/* var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

module.exports.name = function (number) {
  return names[number];
};
module.exports.number = function (name) {
  return names.indexOf(name);
}; */

// Se puede module.exports = function algo(){...} ??? SI

/* 
---- Comportamiento ----
var obj = {}
obj.name = fn(){ }
obj.number = fn(){ }
obj = fn(){ } 
*/

// ------------------ 8 ----------------------
// ----------------  ES6  --------------------

/* var names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

export function name(number) {
  return names[number];
}
export function number(name) {
  return names.indexOf(name);
} */
/* const obj = {
  saludar: function () {
    console.log("Holi");
  },
  nombre: "Feli",
};
export default obj; */