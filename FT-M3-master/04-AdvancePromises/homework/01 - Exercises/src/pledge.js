"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be function");
  }
  this._state = "pending";
  this._handlerGroups = [];
  executor(this._internalResolve.bind(this), this._internalReject.bind(this));
}

$Promise.prototype._internalResolve = function (value) {
  if (this._state === "pending") {
    this._state = "fulfilled";
    this._value = value;
    this._callHandlers();
  }
};

$Promise.prototype._internalReject = function (reason) {
  if (this._state === "pending") {
    this._state = "rejected";
    this._value = reason;
    this._callHandlers();
  }
};

$Promise.prototype.then = function (successCb, errorCb) {
  if (typeof successCb !== "function") successCb = false;
  if (typeof errorCb !== "function") errorCb = false;
  this._handlerGroups.push({
    successCb,
    errorCb,
  });
  //? En que momento es que se debe disparar un then?
  if (this._state !== "pending") this._callHandlers();
};

$Promise.prototype._callHandlers = function () {
  while (this._handlerGroups.length) {
    const handler = this._handlerGroups.shift();
    // handler -> {successCb: false , errorCb: }
    if (this._state === "fulfilled") {
      if (handler.successCb) {
        handler.successCb(this._value);
      }
    } else if (this._state === "rejected") {
      if (handler.errorCb) {
        handler.errorCb(this._value);
      }
    }
  }
};

$Promise.prototype.catch = function (errorCb) {
  this.then(null, errorCb);
};

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
