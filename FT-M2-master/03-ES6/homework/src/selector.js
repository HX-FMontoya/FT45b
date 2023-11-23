/* var traverseDomAndCollectElements = function (
  matchFunc,
  startEl = document.body,
  resultSet = []
) {
  // matchFunc -> (elemento) => `#${elemento.id}` === selector;

  // caso donde evaluo el elemento en donde estoy parado en este momento a ver si cumple o no con lo de matchFunc
  if (matchFunc(startEl)) resultSet.push(startEl);
  // voy a preguntar por los hijos
  for (let i = 0; i < startEl.children.length; i++) {
    const elem = startEl.children[i];
    // en elem esta lo que el usuario esta buscando?
    let result = traverseDomAndCollectElements(matchFunc, elem, resultSet);
    // result -> [1,2,3,4,]
    resultSet = [...resultSet, ...result];
  }

  return resultSet;

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
}; */
// Solucion FT45b en el PP
var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];
  var stack = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  while (stack.length > 0) {
    var currentEl = stack.pop();

    if (matchFunc(currentEl)) {
      resultSet.push(currentEl);
    }
    var children = currentEl.children;
    for (var i = children.length - 1; i >= 0; i--) {
      stack.push(children[i]);
    }
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

/* const selectorTypeMatcher = function(selector) {
  // selctor -> "#myId" ".myClass" "span.myClass"
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.includes(".")) return "tag.class";
  else return "tag";

}; */

// Otra forma
const selectorTypeMatcher = (selector) =>
  selector[0] === "#"
    ? "id"
    : selector[0] === "."
    ? "class"
    : selector.includes(".")
    ? "tag.class"
    : "tag";

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = function (selector) {
  // ".myClass"
  // selctor -> "#myId" ".myClass" "span.myClass" "div"
  let selectorType = selectorTypeMatcher(selector);
  // selectorType -> "class"
  let matchFunction;
  if (selectorType === "id") {
    matchFunction = (elemento) => `#${elemento.id}` === selector;
    // <span id="myId"></span>
    // id Span -> "myId" -> "#myId"
    // selector -> "#myId"
    /* if ("#" + elemento.id === selector) return true
      else return false */
  } else if (selectorType === "class") {
    matchFunction = (elemento) =>
      elemento.classList.some((elem) => `.${elem}` === selector);
    // <span class="myClass myClass2 myClass3"></span>
    // classList span -> ['myClass', 'myClass2', 'myClass3']
    // selector -> ".myClass"
    /* for (const elem of elemento.classList) {
        if (`.${elem}` === selector) return true
        else return false
      } */
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {
      // <span class="myClass myClass2 myClass3"></span>
      // selector -> "span.myClass"
      // myClass div -> div.class3
      const [tag, clase] = selector.split("."); // ["span", "myClass"]
      return (
        matchFunctionMaker(tag)(elemento) &&
        matchFunctionMaker(`.${clase}`)(elemento)
      );
    };
  } else if (selectorType === "tag") {
    // selector -> "span"
    matchFunction = (elemento) => selector === elemento.tagName.toLowerCase();
    // <span class="myClass myClass2 myClass3"></span>
  }
  return matchFunction;
};

/* const matchFunctionMaker = (selector) => {
  // ".myClass"
  // selctor -> "#myId" ".myClass" "span.myClass" "div"
  let selectorType = selectorTypeMatcher(selector);
  // selectorType -> "class"
  let matchFunction;
  return selectorType === "id"
    ? (matchFunction = (elemento) => `#${elemento.id}` === selector)
    : selectorType === "class"
    ? (matchFunction = (elemento) =>
        elemento.classList.some((elem) => `.${elem}` === selector))
    : selectorType === "tag.class"
    ? (matchFunction = (elemento) =>
        matchFunctionMaker(selector.split(".")[0])(elemento) &&
        matchFunctionMaker(`.${selector.split(".")[1]}`)(elemento))
    : (matchFunction = (elemento) =>
        selector === elemento.tagName.toLowerCase());
}; */

var $ = function (selector) {
  // "#myId"
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  // selectorMatchFunc -> (elemento) => `#${elemento.id}` === selector;
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

// $("#myId") -> selector
