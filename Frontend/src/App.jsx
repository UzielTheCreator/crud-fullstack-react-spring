import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Personas from "./pages/Personas";
import CrearPersona from "./pages/CrearPersona";

import "./styles/App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/personas"
          element={<Personas />}
        />

        <Route
          path="/crear"
          element={<CrearPersona />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;