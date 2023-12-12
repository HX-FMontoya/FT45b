import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Personas from "./components/personas/Personas";
import Persona from "./components/persona/Persona";
import Amigos from "./components/amigos/Amigos";
import Form from "./components/form/Form";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const personas = useSelector((state) => state.personas);
  const amigos = useSelector((state) => state.amigos);
  console.log(location.pathname);
  return (
    <div>
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personas">
          <Route index element={<Personas personas={personas} />} />
          <Route path=":id" element={<Persona />} />
        </Route>
        <Route path="/amigos" element={<Amigos amigos={amigos} />} />
      </Routes>
    </div>
  );
}

export default App;
