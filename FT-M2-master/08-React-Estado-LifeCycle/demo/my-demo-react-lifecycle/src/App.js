import Personas from "./components/Personas";
import LifeCycle from "./components/LifeCycle.jsx";
import data from "./assets/data";
// data -> [{},{}]
// Personas -> componente -> <Personas/>
function App() {
  let nombre = "Feli";
  return (
    <div className="App">
      <h1>Hello world!</h1>
      {/* ---- Sin Props ---- */}
      {/* <LifeCycle /> */}
      {/* ---- ConProps ---- */}
      {/* <LifeCycle name={nombre} /> */}
      {/* <Personas amigos={data} /> */}
    </div>
  );
}

export default App;
