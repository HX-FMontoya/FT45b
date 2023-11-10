//! LINKEDLIST
// H -> null
function LinkedList() {
  this.head = null;
  this._length = 0;
}
// Node -> {value: info, next: null}
function Node(info) {
  this.value = info;
  this.next = null;
}

/* const miLinkedList = new LinkedList()
console.log(miLinkedList)
const persona1 = { nombre: "Feli", edad: 25}
const nodo1 = new Node(persona1)
console.log(nodo1) */

// ADD

LinkedList.prototype.add = function (data) {
  // data -> {nombre: "Feli", edad: 25}
  const node = new Node(data);
  // node -> {value: {nombre: "Feli", edad: 25}, next: null }
  // Comprobar si la lista esta vacia
  if (!this.head) {
    this.head = node;
    this._length++;
    return node;
  }
  // Si la lista no esta vacia -> la recorro
  // this.head es el primer nodo
  var current = this.head; // Me guardo la referncia del head
  // Mientras haya un nodo, accede al next
  // verifica si el next del nodo actual esta vacio o tiene un nodo
  while (current.next) {
    current = current.next;
  }
  // en que valor esta el current en este momento luego de cortar el while
  // se encuentra en el ultimo nodo
  current.next = node;
  // H -> {next: { next: { next: null}}}
  this._length++;
  return node;
};
const persona1 = 2;
const persona2 = 3;
const miLinkedList = new LinkedList();
console.log(miLinkedList);
console.log(miLinkedList.add(persona1));
console.log(miLinkedList._length);
console.log(miLinkedList.add(persona2));
console.log(miLinkedList);
console.log(miLinkedList.search(3));
