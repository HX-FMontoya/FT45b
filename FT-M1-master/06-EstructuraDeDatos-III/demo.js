//? Arboles
// EDD conformada por nodos, nodo raiz, nodos hoja, nodos hermano
//? Arboles Binarios
// Solamente pueden tener 2 sub-arboles hijos
//? Arbol Binario de Busqueda -> Binary Search Tree
// Ordena los datos -> mayores (derecha) y los menores (izq)

// 6
//    ( 8 )
//   /    \
// ( 7 )  null
// /   \
//null null

//    ( 6 )
//   /    \
// null  null

// Diferencia entre Linkedlist y BST
// Linkedlist iniciaba -> head -> null
// BST -> Ya tiene el primer elemento -> nodo raiz -> sub-arbol raiz

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
const myBST = new BinarySearchTree(8);
console.log(myBST);

BinarySearchTree.prototype.insert = function (data) {
  // Ya de por si, el arbool tiene una raiz
  // Por ende no debemos preocuparnos de que este vacio
  let subTree = new BinarySearchTree(data);
  if (data < this.value) {
    // Me dirijo a la izquierda
    if (!this.left) {
      // Esta disponible
      this.left = subTree;
    } else {
      // Si esta ocupado
      // Que hacemos??
      this.left.insert(data);
    }
  } else {
    // valor va a ser mayor o igual
    // Me dirijo hacia la derecha
    if (!this.right) {
      this.right = subTree;
    } else {
      // No esta disponible
      this.right.insert(data);
    }
  }
};

myBST.insert(7);
myBST.insert(6);
console.log(myBST);

// RECORRIDOS
// BFS -> recorrido en anchura -> Por niveles
// DFS -> recorrido en profundidad -> inorder,preorder,postorder
// In -order -> izq - nodo - der
// Pre - order -> nodo - izq - der
// Post -order -> izq - der - nodo
