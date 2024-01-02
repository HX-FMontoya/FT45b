//? Como se hacia antes, simulando setimeout

/* let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Recordando promesas");
  }, 1000);
}); */

//? Encapsulando
/* function promiseOne(saludo) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({ saludo });
    }, 1000);
  });
  return promise;
}
console.log(promiseOne("Hi"));
promiseOne()
  .then((res) => {
    if (res.saludo === "Hola") return "ES";
    else throw Error("No se de que hablas");
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */

// Ejemplo de las slides
function resolveAfter2Seconds() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("me resolvi");
    }, 2000);
  });
  return promise;
}
// resolveAfter2Seconds().then((res) => console.log(res));
// try - catch
async function resultado() {
  try {
    console.log("estoy en el try");
    const result = await resolveAfter2Seconds();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
console.log(resultado());

//? Transformando a async await

