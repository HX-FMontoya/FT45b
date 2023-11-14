"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
// 17
//     (20)
//     /  \
//   (15) 23
//  /    \
// null  17
function BinarySearchTree(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.size = function () {
  let count = 1;
  console.log(count);
  if (this.left) count += this.left.size();
  if (this.right) count += this.right.size();
  return count;
  /* if (!this.value) return 0;
  if (!this.left && !this.right) return 1;
  if (!this.left && this.right) return 1 + this.right.size();
  if (this.left && !this.right) return 1 + this.left.size();
  if (this.left && this.right) return 1 + this.left.size();
  +this.right.size(); */
};
BinarySearchTree.prototype.insert = function (elem) {
  // elem -> 17
  let subTree = new BinarySearchTree(elem);
  //    (17)
  //  /    \
  // null null
  console.log(subTree);
  // Tengo que preguntar-comparar
  if (elem < this.value) {
    // Lo voy a mandar a la izq
    // Si esta vacio-disponible
    if (!this.left) {
      this.left = subTree;
      return subTree;
    } else {
      // this.left ya esta ocupado
      // aplico recursion
      this.left.insert(elem);
    }
  } else if (elem > this.value) {
    // Que sea mayor o igual
    // Verificar si esta disponible
    if (!this.right) {
      this.right = subTree;
      return subTree;
    } else {
      // Ya esta ocupado
      // Aplicamos recursion
      this.right.insert(elem);
    }
  }
};

//
let myTree = new BinarySearchTree(20);
console.log(myTree);
myTree.insert(15);
myTree.insert(17);
myTree.insert(25);
myTree.insert(25);
myTree.insert(18);
console.log(myTree.size());
console.log(myTree);

BinarySearchTree.prototype.contains = function (elem) {
  // Caso ideal -> Caso base -> caso de corte
  if (elem === this.value) return true;
  // Empezar a preguntar si es mayor o menor para poder bajar
  if (elem < this.value) {
    // Valido que haya alguien ahi
    if (!this.left) return false;
    // Si si hay algo, lo puedo comparar
    else return this.left.contains(elem);
  } else {
    // Se que los que entran en este caso son estrictamente mayores
    // Valido si hay alguien por la derecha
    if (!this.right) return false;
    else return this.right.contains(elem);
  }
};
console.log(myTree.contains(18));

// Solucion Alejo
/* BinarySearchTree.prototype.contains = function (valor) {
  if (this.value === valor) {
    return true;
  } else {
    while (this.left !== null) {
      return this.left.contains(valor);
    }
    while (this.right !== null) {
      return this.right.contains(valor);
    }
  }
  return false;
}; */

//? RECORRIDOS

/* - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS) */

//          (20)
//        /     \
//      (15)      (25)
//     /    \     /  \
//   null  (17) null null
//         /  \
//       null (18)
//            /  \
//         null null
//
// resultado -> [20, 15, 25, 17, 18]
// memoria -> [] -> push
// shift ->

// pre -> [20, 15, 17, 18, 25]
// post -> [18, 17, 15, 25, 20]
// in -> [15, 17, 18, 20, 25]
// BFS -> [20, 15, 25, 17, 18]

// pre-order -> nodo - izq - der
// in-order -> izq - nodo - der
// post-order -> izq - der - nodo
BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = "in-order"
) {
  if (typeof cb !== "function") throw TypeError("Must be a function");
  switch (order) {
    case "pre-order":
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
      break;
    case "post-order":
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;
    case "in-order":
      if (this.left) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, order);
      break;
    default:
      return "No conozco ese orden";
  }
};

// myTree.depthFirstForEach(consologuear, "sdf")
//
//          (20)
//        /     \
//      (15)      (25)
//     /    \     /  \
//   null  (17) null null
//         /  \
//       null (18)
//            /  \
//         null null
console.log(myTree)
function consologuear(elem) {
  console.log(elem);
}
// BFS -> [20, 15, 25, 17, 18]

BinarySearchTree.prototype.breadthFirstForEach = function (cb, memoria = []) {
  cb(this.value);
  if (this.left) memoria.push(this.left);
  if (this.right) memoria.push(this.right);
  if(memoria.length) memoria.shift().breadthFirstForEach(cb, memoria)

  // Solucion Jaime
  /* let queue = [];
  queue.push(this);

  while (queue.length > 0) {
    let temp = queue.shift();
    cb(temp.value);
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  } */

};
myTree.breadthFirstForEach(consologuear)
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
