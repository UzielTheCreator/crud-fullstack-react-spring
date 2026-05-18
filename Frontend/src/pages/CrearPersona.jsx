import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { guardarPersona } from "../services/api";

function CrearPersona() {

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const guardar = async () => {

    if (!nombre || !telefono) {
      alert("Completa todos los campos");
      return;
    }

    await guardarPersona({
      nombre,
      telefono
    });

    navigate("/personas");
  };

  return (
    <div className="container">

      <div className="navbar">

        <h1>Crear Persona</h1>

        <Link to="/">
          <button>
            Inicio
          </button>
        </Link>

      </div>

      <div className="formulario">

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <button onClick={guardar}>
          Guardar Persona
        </button>

      </div>

    </div>
  );
}

export default CrearPersona;