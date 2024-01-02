function pruebaFunction() {
  console.log("iniciando prueba");
  return "uno"
  return "dos"
  console.log("fin");
}

function* pruebaGeneratorFunction() {
  console.log("iniciando prueba");
  yield "uno";
  let nombre = "Feli"
  console.log(`nombre: ${nombre}`)
  yield "dos";
  console.log("fin");
  yield "tres"
  yield "cuatro"
}
const prueba = pruebaGeneratorFunction();
// console.log(prueba)
//* Accediendo a los valores de una funcion generadora
// console.log(prueba.next())
// console.log(prueba.next());
// console.log(prueba.next());
// console.log(prueba.next());
// console.log(prueba.next());

//? Ejemplo 2 -> Comparando funciones

function* naturalNumbersGenerator(x) {
  let number = 1;
  console.log("inicio");
  while (number < x) {
    yield number;
    number += 1;
  }
  console.log("fin");
}

const naturalNumbersG = naturalNumbersGenerator(5);
console.log(naturalNumbersG.next())
console.log(naturalNumbersG.next())
console.log(naturalNumbersG.next())
console.log(naturalNumbersG.next());
console.log(naturalNumbersG.next());

function naturalNumbersFunction(x) {
  let number = 1;
  let naturals = [];
  console.log("inicio");
  while (number < x) {
    naturals.push(number);
    number += 1;
  }
  console.log("fin");
  return naturals;
}

const naturalNumbers = naturalNumbersFunction(5);
// console.log(naturalNumbers);
