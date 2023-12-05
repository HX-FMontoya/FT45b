import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Personas from "./components/personas/Personas";
import Persona from "./components/persona/Persona";
import Amigos from "./components/amigos/Amigos";
import Form from "./components/form/Form";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personas" >
          <Route index element={<Personas />} />
          <Route path=":id" element={<Persona/> }/>
        </Route>
        <Route path="/amigos" element={<Amigos />} />
      </Routes>
    </div>
  );
}

export default App;
