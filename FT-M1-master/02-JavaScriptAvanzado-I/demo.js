// SINGLE THREAD & SINCRINICO
/* console.log("hola");
console.log("chao");
// var - let - const -> scope
console.log(this);
function saludar() {
  console.log(this);
  var nombre = "feli";
  if (true) {
    var nombre = "Nico";
  }
  console.log(nombre); // Feli - Nico
} */

function a() {
  function b() {
    return this;
  }
  return b();
}
console.log(this)
console.log(a());

// Coercion de datos
var str = ""
var num = 1

str = num + str
//  "1" + "" -> "1"
//"3" + 2 ->
// 3 + 2 -> 5


// COPIA VALOR VS COPIA REFERENCIA
// Valores primitivos -> string, number, boolean
// [], {}
var num2 = num
num2 = 2
console.log(num)
console.log(num2);

var arr1 = [1, 2]
var arr2 = arr1
arr2.push(3)
console.log(arr2)
console.log(arr1);

// como solucionar la copia por referncia en js?

