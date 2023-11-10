//! CLOSURE -> funcion que retorna otra funcion

function saludar(nombre, a, b) {
    function suma(a, b) {
        return a+b
    }
    return function (saludo) {
        console.log(saludo)
        return saludo + nombre
    }
}

console.log(saludar())
var saludoADan = saludar("Dan")
console.log(saludoADan("Hola "))
console.log(saludoADan("Hi "));
console.log(saludoADan("Ni hao "));

var saludoADaniel = saludar("Daniel")
console.log(saludoADaniel("Hola "))
console.log(saludoADaniel("Hi "))
console.log(saludoADaniel("Ni hao "));

//! Particularidades
//? 1. Que tengamos problemas usando var
var crearFuncion = function () {
  var arr = [];
  for (let i = 0; i < 3; i++) {
      arr.push(() => { console.log(i) });
  }
  return arr;
};
var arreglo = crearFuncion();
console.log(arreglo[0]());
console.log(arreglo[1]());
console.log(arreglo[2]());


//? 2. Que pueda retornar una closure u otra segun el caso
function saludar(saludo) {
    console.log(saludo)
}

function hacerSaludo(lenguaje) {
    switch (lenguaje) {
        case "en" : return saludar("Hi!")
        case "es" : return saludar("Hola!")
    }
}

hacerSaludo("es")

// BIND , CALL , APPLY
// Bind -> devuelve una nueva funcion, con el this ya modificado
// Call y Apply devuelven es una instancia con el this modificado

// BIND
var obj = { nombre: "Feli" }
var obj2 = {nombre : "Mateo"}
var obj3 = {nombre: "David"}
var obj4 = { nombre: "Jero" };
var obj5 = { nombre: "Gonza" };

function saludoNombre(saludo) {
    return saludo + " " + this.nombre
}

var saludarAFeli = saludoNombre.bind(obj, "Hola")
console.log(saludarAFeli())
var saludarAMateo = saludoNombre.bind(obj2, "Hola");
console.log(saludarAMateo());

// CALL
var saludarADavid = saludoNombre.call(obj3, "Hi")
console.log(saludarADavid)
var saludarAJero = saludoNombre.call(obj4, "Hi");
console.log(saludarAJero);

// APPLY
var saludarAGonza = saludoNombre.apply(obj5, ["Ni hao"])
console.log(saludarAGonza)








