"use strict";
// En que indice sera almacenado?
class HashTable {
  constructor() {
    this.tabla = new Array(10);
  }
  insertar(clave, valor) {
    // clave -> edad
    // 4 % 10 -> 4
    const indice = clave.length % this.tabla.length;
    this.tabla[indice]
      ? this.tabla[indice].push({ clave, valor })
      : (this.tabla[indice] = [{ clave, valor }]);
  }
}

const tablaHash = new HashTable();
tablaHash.insertar("nombre", "Juan");
tablaHash.insertar("edad", 25);
tablaHash.insertar("ciudad", "Ejemplo");

// ¿Cuál sería el índice de la tabla hash utilizado para almacenar la clave "edad"? 
// R // -> 4

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (data) {
  // data = 3
  let node = new Node(data);
  // Si esta vacia -> this.head = null
  if (!this.head) {
    this.head = node;
    this._length++;
    return node;
  }
  // Si no esta vacia
  let current = this.head;
  // H -> [3] -> ["hola"] ->
  // Recorro la lista -> Mientras tengas a alguien delante
  while (current.next) {
    current = current.next;
  }
  // current en este momento, luego del bucle se queda en el ultimo nodo de la lista
  current.next = node;
  this._length++;
  return node;
};

LinkedList.prototype.remove = function () {
  // Si la lista esta vacia
  if (!this.head) return null;
  // Si la lista tiene un solo nodo
  if (!this.head.next) {
    let last = this.head;
    this.head = null;
    this._length--;
    return last.value;
  }
  // Si la lista no esta vacia, tiene mas de un nodo
  let current = this.head;
  while (current.next.next) {
    current = current.next;
  }
  // El current esta parado en el penultimo
  // Me guardo el ultimo nodo
  let last = current.next;
  current.next = null;
  this._length--;
  return last.value;
};

LinkedList.prototype.search = function (arg) {
  // Si la lista esta vacia
  if (!this.head) return null;
  // Si la lista no esta vacia
  let current = this.head;
  // H -> [] -> [] ->
  while (current) {
    // Que le vamos a preguntar al nodo actual?
    if (typeof arg === "function") {
      // arg es una function -> arg es una callBack
      let result = arg(current.value);
      // result puede ser true o false
      if (result) return current.value;
      // return arg(current.value) && current.value
    } else {
      // arg es algo diferente a una fn
      if (arg === current.value) return current.value;
    }
    current = current.next;
    //
  }
  return null;
};

LinkedList.prototype.size = function () {
  return this._length;
};
// search("como")
// H -> [3] -> ["hola"] ->
//                  ^
/* const myList = new LinkedList();
console.log(myList.add(3));
console.log(myList.remove());
console.log(myList);
console.log(myList.add("hola"));
console.log(myList.add("chao"));
console.log(myList.size()); */
/* console.log(myList.add("hola"));
console.log(myList); */

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.table = [];
  this.numBuckets = 35;
}
// hash("hola")
//          ^
HashTable.prototype.hash = function (key) {
  // key -> "hola"
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    // "hola".charCodeAt(1)
    let code = key.charCodeAt(i);
    console.log(code);
    // code -> un numero en la representacion ASCII
    total = total + code;
    // total += code
  }
  console.log(total);
  // Restringir el valor de total a la cantidad de buckets
  let index = total % this.numBuckets;
  return index;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw TypeError("Keys must be strings");
  let index = this.hash(key);
  console.log(index);
  if (!this.table[index]) this.table[index] = {};
  this.table[index][key] = value;
};

HashTable.prototype.get = function (key) {
  let index = this.hash(key);
  console.log(index);
  if (this.hasKey(key)) return this.table[index][key];
  else return false;
};

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key);
  return this.table[index] ? this.table[index].hasOwnProperty(key) : false;
};

const myHashTable = new HashTable();
console.log(myHashTable);
/* console.log(myHashTable.hash("hola"));
console.log(myHashTable.hash("aloh")); */
// {hola, aloh}
// [index][key] 
/* console.log(myHashTable.set("hola", "conocimiento"));
console.log(myHashTable.get("chao"));
console.log(myHashTable.hasKey("chao")); */
// [{hola:, aloh: },{},{},...]

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
