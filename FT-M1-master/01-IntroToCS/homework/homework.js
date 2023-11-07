"use strict";

function BinarioADecimal(num) {
  //
  // num -> "1001" -> typeof: string
  //         ^
  // Op -> 2 ^ indice * numero
  // 1. Definir un metodo para recorrer ese string
  // 2. Pensemos como aplicamos el indice en la formula
  var index = 0; // 3
  var indexLastElement = num.length - 1;
  var sum = 0;
  for (var i = indexLastElement; i >= 0; i--) {
    var element = num[i];
    console.log(element);
    var op = Math.pow(2, index) * element;
    sum = sum + op;
    console.log(sum);
    index++;
  }
  return sum;
  //
  return parseInt(num, 2);
}
// Ejecutar Quokka -> Ctrl + Shift + p
// console.log(BinarioADecimal("1001")); // 9

function DecimalABinario(num) {
   // num -> 10 -> Typeof : number
   // 1. Definir un bucle para hacer las operaciones
   var str = "" // "1010"
   while (num >= 1) {
      var cociente = Math.floor(num / 2) // devuelve el cociente 
      var residuo = num % 2 // devuelve el residuo
      console.log(residuo.toString()) // "0"
      str = residuo.toString() + str
      console.log(num)
      num = cociente
      console.log(num);
   }
   return str
   // 
   // return num.toString(2)
}
// shift + alt + a -> comentar y descomentar en bloque
// ctrl + k + c -> comentar
// ctrl + k + u -> descomentar

// 10 | 2
//  0   5  | 2
//      1    2  | 2
//           0    1  | 2
//                1    0
console.log(DecimalABinario(10))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
