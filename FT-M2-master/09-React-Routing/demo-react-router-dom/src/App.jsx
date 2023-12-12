import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Personas from "./components/Personas";
import NavBar from "./components/NavBar";
import Persona from "./components/Persona";
import "./App.css";
// componente -> fn
// elemento -> retorna la funcion

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Hola, soy la demo de React Router Dom</h1>
      {/* //*Como se hacia ahora v6: */}
      <Routes>
        <Route path="/home" element={<Home saludo="Hola" />} />
        <Route path="/about" element={<About />} />
        <Route path="/personas">
          <Route index element={<Personas />} />
          <Route path=":id" element={<Persona />} />
        </Route>
      </Routes>
      {/* //*Como se hacia antes v5: */}
      {/* <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
