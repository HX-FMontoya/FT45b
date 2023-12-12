import Persona from "./components/Persona";
import Personas from "./components/Personas";
import data from "./assets/data";
// data -> [{},{}]
// Persona -> componente -> <Persona/>
function App() {
  console.log(Persona);
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Personas amigos={data} />
    </div>
  );
}

export default App;
