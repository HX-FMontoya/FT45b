"use strict";

// Dificultad de la homework
function homework(dificultad) {
  return function () {
    switch (dificultad) {
      case "Easy":
        return "😎";
      case "Medium":
        return "😰";
      case "Impossible":
        return "🤯";
      default:
        return "🫠";
    }
  };
}
var yourOpinion = "Easy";
var dificultadHomework = homework(yourOpinion);
console.log(dificultadHomework());
// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */

// 
function counter() {
  var contador = 1;
  return function () {
    // le brinda una referencia, sepa donde queda contador
    return contador++;
  };
}

const nuevoContador = counter(); // function
console.log(nuevoContador()); // 1
console.log(nuevoContador()); // 2

const otroContador = counter()
console.log(otroContador())      // 1
console.log(otroContador() )     // 2 */

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) {
  // cb -> square
  var cache = {}
  return function (argument) {
    // argument -> 3
    // square(3)
    if(cache.hasOwnProperty(argument)) return cache[argument]
    var resultado = cb(argument) // 9
    cache[argument] = resultado
    return resultado
  }
}

function square(n) {
  console.log(n)
  return n * n;
}

// console.log(square())
const squareCache = cacheFunction(square);
console.log(squareCache(3))
console.log(squareCache(3));

//----------------------------------------

// Bind - Call - Apply -> cambian el this, a donde a punta
// Bind -> devuelve una nueva funcion, debo ejecutarla para que me devuelva en nuevo valor bindeado
// Tanto Call, como Apply, nos devuelven una instancia de la fn, ya modificada
// Call -> Recibia los argumentos uno a uno
// Apply recibe los argumentos en un array

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/
var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre(saludo, despedida) {
  return saludo + " " + this.nombre + " " + despedida;
}
// Solo para modificar el a donde apunta el this
let getNombreInstructor = getNombre.bind(instructor, "Hola", "Chao");
let getNombreAlumno = getNombre.bind(alumno, "Hi", "Bye");
let nombreInstructor = getNombre.call(instructor, "Hola", "Chao");
let nombreAlumno = getNombre.apply(alumno, ["Hola", "Chao"]);
console.log(nombreInstructor)
console.log(nombreAlumno);
console.log(getNombreInstructor())  // "Franco"
console.log(getNombreAlumno())  // "Juan"


/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}
// El this por defecto apunta al global
// Hay que cambiar a donde apunta el this?
// Si no necesito modificar el a donde apunta el this
// null, undefined, this
let textoAsteriscos = crearCadena.bind(null, "*", "*");
let textoGuiones = crearCadena.bind(this, "-", "-");
let textoUnderscore = crearCadena.bind(undefined, "_", "_");

/* console.log(textoAsteriscos("hola"))
console.log(textoGuiones("chao"));
console.log(textoUnderscore("como estas")); */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
