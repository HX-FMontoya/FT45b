function sum(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function promesaA(booleano) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      booleano ? resolve("holi") : reject("chau");
    }, 1000);
  });
  return promise;
}

module.exports = { sum, resta, promesaA };
