const fs = require("fs");
const utils = require("../utils/request");
// utils -> {request : fn(url, cb)}
const process = require("process");

function pwd(print) {
  print(process.cwd());
}

function date(print) {
  print(Date());
}

function echo(print, data) {
  print(data);
}

function reusableFT45b(type, print, err, data) {
  if (err) throw new Error(err);
  else {
    switch (type) {
      case "ls":
        return print(data.join(" "));
      case "cat":
        return print(data);
      case "head":
        return print(data.split("\n")[0]);
      case "tail":
        return print(data.split("\n").at(-1).trim());
    }
  }
}

function ls(print) {
  fs.readdir(".", (err, data) => reusableFT45b("ls", print, err, data));
}

function cat(print, path) {
  fs.readFile(path, "utf-8", (err, data) =>
    reusableFT45b("cat", print, err, data)
  );
}

function head(print, path) {
  fs.readFile(path, "utf-8", (err, data) =>
    reusableFT45b("head", print, err, data)
  );
}

function tail(print, path) {
  fs.readFile(path, "utf-8", (err, data) =>
    reusableFT45b("tail", print, err, data)
  );
}

function curl(print, path) {
  utils.request(path, (err, data) => {
    if (err) throw new Error(err);
    else {
      print(data);
    }
  });
}

module.exports = { pwd, date, echo, ls, cat, head, tail, curl };
