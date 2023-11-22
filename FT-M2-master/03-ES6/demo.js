//! Let - Const -> Se definen en el scope, tienen alcance de bloque
/* var nombre = "Feli";
let edad = 40;
let email = "email@email.com";
email = email + "/";
if (true) {
  var nombre = "Daniel";
  let edad = 26;
  console.log(edad);
  const string = "hola";
  // string = "chao" -> No se puede
  console.log(string);
}
console.log(nombre);
console.log(edad);

const saludo = function () {
  return "hola";
};
const amigosPersona1 = ["Pedro", "Jose", "Ana"];
amigosPersona1.push("Milena");
console.log(amigosPersona1);
amigosPersona1.shift();
amigosPersona1.shift();
amigosPersona1.shift();
console.log(amigosPersona1); */
//! Arrow Funcion -> Funcion flecha -> retorna por defecto
//? Notacion de funcion
/* const promedio = function (a, b, c, d, e) {
  let suma = a + b + c + d + e;
  console.log(suma);
  return suma / 5;
};
console.log(promedio(1, 2, 3, 4, 5)); */
//? Notacion arrow
/* const avg = (a, b, c, d, e) => (a + b + c + d + e) / 5;
console.log(avg(1, 2, 3, 4, 5)); */
//
//* Otro ejemplo
//? Notacion Funcional
const arr = [1, 2, 3, 4, 5];
/* function iterar(array) {
    return array.filter(function (elem, index) {
        return elem % 2 === 0
     })
} 
console.log(iterar(arr));
*/
//? Notacion Arrow mejora 1
/* function iterar(array) {
  return array.filter((elem) => elem % 2 === 0)
} 
console.log(iterar(arr));
*/
//? Notacion Arrow mejora 2
/* const iterar = (array) => array.filter((elem) => elem % 2 === 0);
console.log(iterar(arr)); */

//! Ternarios -> ? :
//? Condicional IF
/* function saludarIdioma(idioma) {
    if (idioma === "es") {
        return "Hola"
    } else if (idioma === "en") {
        return "Hello"
    } else if (idioma === "man") {
        return "Ni hao"
    } else {
        return "✌️"
    }
} */
// console.log(saludarIdioma("man", 4));

//? Ternarios
function saludarIdioma(idioma, numero) {
  return idioma === "es"
    ? "Hola"
    : idioma === "en"
    ? "Hello"
    : idioma === "man" && numero === 5
    ? "Ni hao"
    : "✌️";
}

//! Clases

//? Notacion funcional
/* function Animal(raza, edad) {
  this.raza = raza;
  this.edad = edad;
}

Animal.prototype.dormir = function () {
  console.log(this.raza);
  return "zzzZZZ";
};
const animal1 = new Animal("pitbull", 2);
console.log(animal1.dormir()); */

//? Notacion de clase
/* class Animal {
    constructor(raza,edad) {
        this.raza : raza;
        this.edad
    }
    dormir() {
        return "zzzZZZ"
    }
}
const animal1 = new Animal("pitbull", 2);
console.log(animal1.dormir()); */

//! Objetos Literales

//? Una forma
/* var persona = {
    0: "hola",
  nombre: "Felipe",
  year: 1998,
  edad: function () {
    return new Date().getFullYear() - this.year;
  },
  ["es" + (() => "Mayor")()]: function () {
    const status = new Date().getFullYear() - this.year;
    return status > 18;
  },
};
console.log(persona.esMayor()) */

//? Otra forma de usar objetos literales
/* function saludar(nombre, edad, mail) {
  const persona = {
    nombre,
    edad,
    mail,
    saludo: function () {
      return "Hola " + this.nombre + " " + this.edad
    },
  };
  return persona.saludo();
}
console.log(saludar("Feli", 25)); */


//? Ejemplo con destructuring
/* const persona = {
    nombre: "Feli",
    edad: 20,
  saludo: function () {
    return "Hola " + this.nombre + " " + this.edad;
  },
}; 
function reciboObjeto({ nombre}) {
    console.log(nombre)
    const objeto2 = {
        nombre
    }
    return objeto2.nombre
}
console.log(reciboObjeto(persona))
*/
//! Template strings

/* function retornar(nombre) {
    // return "Hola, " + nombre + " como estas?"
    // return `Hola, ${nombre} como estas?`
    return `Hola, ${nombre} `
} */

//! Destructuring
// Asocia las variables que le paso con los valores del array segun su posicion
//? Para strings
/* let [nombre, edad, email] = "hola"
console.log(nombre)
console.log(edad);
console.log(email); */
//? Para arrays
/* const arreglo = ["Pedro", 35, "mail@mail.com"]
let [nombre, edad, email] = arreglo;
console.log(nombre)
console.log(edad)
console.log(email); */
//? Para arrays version 2
/* const infoPedro = ["Pedro", 35, "mail@mail.com", true, 3];
const [nombre, ...loDemas] = infoPedro;
console.log(nombre)
console.log(loDemas); */
//? Para objetos
/* let people = {
  name: "Mateo",
  age: 22,
  mail: "mail@mail.com",
};
let { age, email } = people
console.log(age)
console.log(email);
let { name, ...others } = people;
console.log(name)
console.log(others) */
//? En una funcion
/* function despedirse({ nombre: loQueSea }) {
  console.log(loQueSea);
}
despedirse({nombre: "Alejo"}) */

//! Default Parameter
function bye(despedida = "chao") {
  return despedida;
}
console.log(bye())

//! Rest Parameters
function rest(...parameters) {
  console.log(parameters);
}
rest(1,2,3,4,5)

//! Spread Operator
function sum(a, b, c) {
  return a + b + c;
}
const array = [1, 2, 3];
console.log(...array)
console.log(sum(...array))
