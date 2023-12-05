import { Routes, Route } from "react-router-dom";
import Form from "./components/form/Form"
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Form labelName="Ingrese su nombre" buttonName="Ingresar" />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
