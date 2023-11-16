"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //
  // [5, 1, 4, 2, 8]
  // pivot = 5
  // left = [1, 4, 2] -> // [1,2,4]
  //                    pivot = 1
  //                    left = []
  //                    equals = [1]  // [1]
  //                    right = [4,2] -> // [1].concat([2,4]) // [1,2,4]
  //                                    pivot = 4
  //                                    left = [2]
  //                                    equals = [4] // [2,4]
  //                                    right = [] // [2,4].concat([]) // [2,4]
  // equals = [5] // [1,2,4].conact([5]) // [1,2,4,5]
  // right = [8] // [1,2,4,5].concat([8]) // [1,2,4,5,8]

  // [] [1] [2] [4] [] [5] [8]

  // left.concat(equals).concat(right)
  // [].concat([1]).concat([2])
  // [1,2]

  // Para la recursion:
  if (array.length <= 1) return array;

  // 1. Definir el pivote
  /* let numAleatorio = Math.random() * array.length;
  let indexAleatorio = Math.floor(numAleatorio);
  let pivot = array[indexAleatorio]; */
  let pivot = array[0];
  let left = [];
  let right = [];
  let equals = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (pivot === element) {
      equals.push(element);
    } else if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }

  //
  return quickSort(left).concat(equals).concat(quickSort(right));
}
// console.log([1,2].concat([3,4]));

// console.log(quickSort([5, 1, 4, 2, 8])); //[1, 2, 4, 5, 8]
// console.log(quickSort([10, 10, 16, 12])); //[10, 10, 12, 16]);
// console.log(quickSort([10, -2, -7, 4])); //[-7, -2, 4, 10]

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // [5, 1, 4, 2, 8]
  //        ^
  // middle = array.length -> 5 / 2 -> 2.5 -> 2
  // left = [5,1] -> middle -> 1
  //                 left = [5]  -> [5]
  //                 right = [1] -> [1]
  // right = [4,2,8] -> middle = 1
  //                    left = [4] -> [4]
  //                    right = [2,8] -> middle = 1
  //                                     left = [2] -> [2]
  //                                     right = [8] -> [8]
  //
  // [5] []
  //
  // [1]
  //Para la recursion
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  let nuevoArray = []; // -> [1,2,4,5,8] 
  left = mergeSort(left); // -> []
  right = mergeSort(right); // -> [ 8]

  while (left.length && right.length) {
    console.log(left);
    console.log(right);
    let elem;
    if (left[0] < right[0]) {
      elem = left.shift();
      console.log(elem);
      nuevoArray.push(elem);
    } else {
      elem = right.shift();
      console.log(elem);
      nuevoArray.push(elem);
    }
  }

  // cuando termine el while, puede pasar que uno de los dos arrays aun tenga elementos
  nuevoArray = nuevoArray.concat(left, right);
  return nuevoArray;
}
console.log([1, 2, 3, 4].slice(0, 2));
console.log(mergeSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
console.log(mergeSort([10, 10, 16, 12])) // [10, 10, 12, 16]
console.log(mergeSort([10, -2, -7, 4])) // [-7, -2, 4, 10]

// OTRA FORMA DEL MERGESORT

function mergeSort(array) {
  // [5, 1, 4, 2, 8];
  // [5,1] [4,2,8]
  // [5] [1] [4] [2,8]
  // [5] [1] [4] [2] [8]

  if (array.length === 1) return array;

  var div = splitOne(array);
  var left = div[0];
  var right = div[1];

  return merge(mergeSort(left), mergeSort(right));
}

function splitOne(array) {
  // [5, 1, 4, 2, 8];
  console.log(array);
  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var rigth = array.slice(middle);
  // [ [5,1], [4,2,8] ]
  return [left, rigth];
}

function merge(left, right) {
  // left -> [1, 5] [4,6]
  //               ^
  //                   ^
  // [1, 4, 5]
  var leftIndex = 0;
  var rightIndex = 0;
  var array = [];

  // 1. Que condiciones debe cumplir el array para recorrelo?\
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
