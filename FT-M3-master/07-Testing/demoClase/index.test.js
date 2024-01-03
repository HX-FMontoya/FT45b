/* const { sum, resta, promesaA } = require("./index");
const axios = require("axios");

xdescribe("testea la funcion sum", () => {
  it("Si se ejecuta sum con 4 y 7, debe devolver 11", () => {
    expect(sum(4, 7)).toBe(11); // -> toBe -> ===
  });

  it("Si se ejecuta sum con 3 y 0, no debe ser 0", () => {
    expect(sum(3, 0)).not.toBe(0);
  });
});

describe("testea la funcion resta", () => {
  it("Si se ejecuta resta con 4 y 7, debe devolver -3", () => {
    expect(resta(4, 7)).toBe(-3);
  });

  it("Si se ejecuta resta con 3 y 0, debe devolver 3", () => {
    expect(resta(3, 0)).toBe(3);
  });
});

let arr1 = [1];
let arr2 = [1];
it("arr1 debe ser igual a arr2", () => {
  expect(arr1).toEqual(arr2);
});

it("no debe ser null", () => {
  const variable = "";
  expect(variable).not.toBeNull();
});

it("debe ser undefined", () => {
  let variable;
  expect(variable).toBeUndefined();
});

it("debe estar definida", () => {
  const variable = null;
  expect(variable).toBeDefined();
});

it("debe ser verdadero", () => {
  const variable = [];
  expect(variable).toBeTruthy();
});

it("debe ser falso", () => {
  const variable = false;
  expect(variable).toBeFalsy();
});

it("a debe ser mayor que b", () => {
  const a = 10;
  const b = 4;
  expect(a).toBeGreaterThan(b);
});

it("a debe ser menor que b", () => {
  const a = 1;
  const b = 4;
  expect(a).toBeLessThan(b);
});

it("0.1 + 0.2 es 0.3", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

it("3 esta contenido en el arreglo", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(arr).toContain(3);
});

it("debe matchear con el string", () => {
  const frase = "los tres tristes tigres que comen trigo en un trigal";
  expect(frase).toMatch(/trigal$/);
  expect(frase).toMatch("tres");
  expect(frase).not.toMatch("dos");
});

// CODIGO ASYNC

describe("testeando promesas", () => {
  it("debe resolverse a holi", () => {
    return promesaA(true).then((res) => expect(res).toBe("holi"));
  });
  it("debe rechazarse a chau", () => {
    return promesaA(false).then(null, (err) => expect(err).toBe("chau"));
  });
});

describe.only("testeando promesas con async await", () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  it("debe resolverse a un status 200", async () => {
    const { status, data } = await axios(url);
    expect(status).toBe(200);
  });
  it("Debe tener como nombre Leanne", () => {
    expect(data.name).toMatch("Leanne");
  });
});
 */

// SUPERTEST
const request = require("supertest");
const server = require("./server")

request(server).get("/").expect(200)