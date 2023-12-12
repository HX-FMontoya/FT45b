import Controlado from "./components/Controlado";
import FormValidadoHTML from "./components/FormValidadoHTML";
import FormValidadoREGEX from "./components/FormValidadoREGEX"
import NoControlado from "./components/NoControlado";
// import './App.css'

function App() {
  return (
    <div>
      <h1>Demo React Forms ☸️</h1>
      {/* <h3>Form No Controlado:</h3>
      <NoControlado /> */}
      {/* <h3>Form Controlado:</h3>
      <Controlado /> */}
      {/* <h3>Form con validaciones HTML</h3>
      <FormValidadoHTML/> */}
      <h3>Form con REGEX</h3>
      <FormValidadoREGEX/>
    </div>
  );
}

export default App;
