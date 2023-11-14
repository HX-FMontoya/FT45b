// COMPLEJIDAD -> BIG O notation
// O(1) - O(log(n)) - O(n) - O(n^2)

// O(1)
console.log("hola");
let nombre = "Feli";
if (nombre === "Feli") console.log("chao");
var num = 0;
// O(n)
// bucles
while (num < 10) {
  num += 1;
}
// O(n)
for (let i = 0; i < 5; i++) {
  // N
  console.log(i); // 1
}
// O(1)
function sumar(a, b) {
  // L.E
  // a = 2 O(1)
  // b = 5 O(1)
  let suma = a + b; // O(1)
  return suma; // O(1)
}
sumar(2, 5);
// O(1 + 1 + 1 + 1) -> O(4) -> O(1)

//O(n^2)
var acum = 0 // O(1)
for (let i = 0; i < 10; i++){ // O(n)
    // por cada paso de i, se ejecutan m pasos de j
    for (let j = 1; j < 5; j++){
      // O(m) ~ O(n)
      acum += i + j; // O(1)
      console.log("hola"); // O(1)
    }
}
console.log(acum) // O(1)
// O(1) + O(n * m) + O(1)
// O(n*m) -> O(n*n) -> O(n^2)

// Recursion
function sumarNaturales(n) {
    // L.R
    // n = 10 O(1)
    let resultado = sumarNaturales(n - 1) // O(n)
    return n + resultado; // O(1)
}
sumarNaturales(10)
// O(1 + n + 1) -> O(n)

BinarySearchTree.prototype.contains = function (elem) {
    // elem -> O(1)
  // Caso ideal -> Caso base -> caso de corte
  if (elem === this.value) return true; // O(1)
  // Empezar a preguntar si es mayor o menor para poder bajar
  if (elem < this.value) { // O(1)
    // Valido que haya alguien ahi
    if (!this.left) return false; // O(1)
    // Si si hay algo, lo puedo comparar
    else return this.left.contains(elem); // O(n)
  } else {
    // Se que los que entran en este caso son estrictamente mayores
    // Valido si hay alguien por la derecha
    if (!this.right) return false; // O(1)
    else return this.right.contains(elem); // O(n)
  }
};
console.log(myTree.contains(18)); // O(1)
// O(n) + O(n) -> O(2n) -> O(n) // 1000 -> 1000

// Solucion Alejo
BinarySearchTree.prototype.contains = function (valor) {
    // valor -> O(1)
  if (this.value === valor) { // O(1)
    return true; // O(1)
  } else {
    while (this.left !== null) { // O(n)
      return this.left.contains(valor); // O(m) ~ O(n)
    }
    while (this.right !== null) { // O(l) ~ O(n)
      return this.right.contains(valor); // O(k) ~ O(n)
    }
  }
  return false; // O(1)
};

// O(n * m)  +  O(l * k)
// O(n * n)  +  O(n * n)
// O(n^2) + O(n^2)
// O(2n^2) -> O(n^2)
// 1000 -> 1000000