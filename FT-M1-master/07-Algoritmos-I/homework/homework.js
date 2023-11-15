"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let factores = [1];
  if (num === 1) return factores;
  if (num === 2) return [1, 2];
  if (num === 3) return [1, 3];
  //
  /* for (let i = 2; i < num; i++){
    let residuo = num % i // 90 % 2 -> 0
    let cociente = num / i // 180 / 2 -> 90
    if (residuo === 0) {
      factores.push(i)
      num = cociente
      i = i - 1
    } 
  }
  return factores */
  let i = 2;
  while (num > 1) {
    let residuo = num % i; // 181 % 6 -> 1
    let cociente = num / i; // 180 / 2 -> 90
    if (residuo === 0) {
      factores.push(i);
      num = cociente;
    } else {
      // El residuo no dio cero, osea que no es un factor
      i++;
    }
  }
  return factores;
}

// console.log(factorear(180));
function bubble(array) {
  for (let i = 0; i < array.length; i++) {
    // O(n)
    let actual = array[i];
    let next = array[i + 1];
    if (actual > next) {
      let aux = actual;
      array[i] = next;
      array[i + 1] = aux;
    }
  }
  return array;
}
const arr = [4, 6, 9, 1, 3, 2, 0, 3];
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // TOMAR POR PAREJAS Y COMPARABA, CREABA UNA BURBUJA
  // AUX = i
  // i = j
  // j = AUX
  // [6,4,9,1,3,2,0,3]
  //  ^
  //    ^
  // aux = 4
  // WHILE - FOR -> sistema switch
  /* let swap = true
  while (swap) { // O(n)
    swap = false
    for (let i = 0; i < array.length; i++){ // O(m) ~ O(n)
      let actual = array[i]
      let next = array[i + 1]
      if (actual > next) {
        swap = true
        let aux = actual
        array[i] = next;
        array[i + 1] = aux;
  }
    }
  }
  return array */
  // solucion 2
  let arr = []; // [6,9]
  while (array.length !== 0) {
    // O(n)
    array = bubble(array); // O(m) ~ O(n)
    let lastElem = array.pop();
    arr.unshift(lastElem);
  }
  return arr;
}
// [4,6,1,9,2,0,3,9]
// 9
// console.log(bubbleSort(arr));
// COMPLEJIDAD DE BUBBLESORT -> O(n^2)

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //   [1, 2, 3, 4, 6, 9, 0, 3];
  //                   i
  //   j
  // aux = 2
  // Tanto i como j son posiciones, no elementos
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
  // Solucion 2
  return array.reduce((prev, next) => {
    let j = prev.findIndex((x) => next < x);
    prev.splice(j === -1 ? Infinity : j, 0, next);
    return prev;
  }, []);
}

// [4, 6, 9, 1, 3, 2, 0, 3];
let arr2 = [4, 6, 9, 1, 3, 2, 0, 3];
// console.log(insertionSort(arr2));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // let arr2 = [-1, 9, 2, 3, 3, 4, 1, 9];
  //             ^
  //                ^
  // min = 0
  //
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      // este for se encarga de encontrar al mas pequeño
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;
}
let arr3 = [4, 6, 9, 1, 3, 2, 0, 3];
console.log(selectionSort(arr3));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
