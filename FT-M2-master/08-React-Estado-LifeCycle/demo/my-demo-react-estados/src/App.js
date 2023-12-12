import Personas from "./components/Personas";
import Contador from "./components/Contador";
import ContadorSinEstados from "./components/ContadorSinEstados";
import data from "./assets/data";
// data -> [{},{}]
// Personas -> componente -> <Personas/>
function App() {
  // console.log(Contador);
  return (
    <div className="App">
      <h1>Hello world!</h1>
      {/* <Personas amigos={data} /> */}
      {/* ---- Sin props ---- */}
      {/* <ContadorSinEstados /> */}
      {/* <Contador /> */}
      {/* ---- Con props ---- */}
      {/* <ContadorSinEstados contador={0} /> */}
      {/* <Contador contador={0} id={1} /> */}
    </div>
  );
}

export default App;
