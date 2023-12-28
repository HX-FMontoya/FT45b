const $Promise = require("../src/pledge");

console.log($Promise);
const boolean = false;
const myPromise = new $Promise((resolve, reject) => {
  setTimeout(() => {
    if (boolean) resolve("bien");
    else reject("mal");
  }, 1000);
});

console.log(myPromise);

myPromise
  .then()
  .then()
  .then((value) => {
    console.log(value);
  });
// [{successCb:()=> {}, errorCb: false}]->
