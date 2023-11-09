//! Version/forma Iterativa
function sumarConFor() {
  var total = 0;
  for (var i = 1; i <= 5; i++) {
    total = total + i;
  }
  return total;
}
// console.log(sumarConFor()); // 15

//! Version/forma Recursiva
function sumarConRecursionPrimerosCinco(num) {
  // caso de corte
  if (num === 5) return 5;
  // apliquemos la recursion
  var res = num + sumarConRecursionPrimerosCinco(num + 1);
  return res;
}
// console.log(sumarConRecursionPrimerosCinco(1));

// Creamos una funcion que si tenga utilidad
// Esta funcion va a recibir el numero hasta el cual yo quiero sumar

function sumarConRecursion(num) {
  console.log(arguments);
  // num = 8, 7
  // caso de corte
  if (num === 1) return 1;
  // apliquemos la recursion
  var nuevoNumero = num - 1;
  var recursion = sumarConRecursion(nuevoNumero);
  var res = num + recursion;
  //         8 + 7 + 6 + ... + 1
  return res;
}
console.log(sumarConRecursion(8));

function a() {
    console.log(arguments)
 }
a()
//! ESTRUCTURA DE DATOS
//? ARRAYS
var arr = [1, 1, 1, 2, 3, false, "hola", { a: "hola" }];
//         ^
// Porque typeof array -> objeto ->
var res = arr.pop(); // eliminamos el ultimo elemento -> retorna ese elemento
var res2 = arr.push(4); // agregamos al final -> la longitud del nuevo array
var res3 = arr.unshift(0); // agregamos un elemento al inicio -> devuelve el elem
var res4 = arr.shift(); // elimina el primer elemento -> devuelve la longitud del nuevo array

// Array-like -> estructura que heredando en sus propiedades metodos de Array

//? SET
var conjunto = new Set(arr);
console.log(conjunto.add(10));
console.log(conjunto.delete(10));
console.log(conjunto.entries());
conjunto.forEach(function (el) {
    console.log(el)
})

//? STACK -> LIFO ->
// [ "platoRojo" , "platoVerde" ] -> vamos a ingresar "platoAmarillo"
//       0               1
//                                 -?
// LAST IN -> "platoAmarillo" -> PUSH -> UNSHIFT
// FIRST OUT -> "platoAmarillo" -> POP -> SHIFT

// para lavarlos
//arr2.shift()
// Que devuelve el pop cuando se le aplica a un array vacio?

function Stack(array) {
    this.arr = array
}

Stack.prototype.add = function (elem) {
    this.arr.push(elem)
    return this.arr
}

Stack.prototype.remove = function () {
    return this.arr.pop()
}

Stack.prototype.size = function () {
    return this.arr.length
}

/* class Stack {
    constructor(arreglo) {
        this.arr = arreglo
    }
    add(el) {
        this.arr.unshift(el)
        return this.arr
    }
    remove() {
        return this.arr.pop()
    }
    size() {
        return this.arr.length
    }
} */


var stack1 = new Stack([])
console.log(stack1)
console.log(stack1.add(1))
console.log(stack1.add(4))
console.log(stack1.remove())
console.log(stack1.size());

//? QUEUE
// FIFO ->
// ["Jaime", "Ivana", "Alejo", "Jodannys"]
// FIRST IN -> PUSH -> USHIFT
// FIRST OUT -> SHIFT -> POP
//

var fila = ["Jaime", "Ivana", "Alejo", "Jodannys"]
console.log(fila.shift())
console.log(fila.shift())
console.log(fila.shift())
console.log(fila.push("Juan"));
console.log(fila);



//? OBJETC
var obj = {
    name: "Feli",
}
obj.name = "Hola"

console.log(obj)