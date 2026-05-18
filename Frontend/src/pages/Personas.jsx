import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerPersonas, eliminarPersona } from "../services/api";

function Personas() {

  const [personas, setPersonas] = useState([]);

  const cargar = async () => {

    const data = await obtenerPersonas();

    setPersonas(data);
  };

  const borrar = async (id) => {

    await eliminarPersona(id);

    cargar();
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <div className="container">

      <div className="navbar">

        <h1>Personas</h1>

        <Link to="/">
          <button>
            Inicio
          </button>
        </Link>

      </div>

      <div className="lista">

        {
          personas.map((persona) => (

            <div className="card" key={persona.id}>

              <h2>{persona.nombre}</h2>

              <p>{persona.telefono}</p>

              <button
                onClick={() => borrar(persona.id)}
              >
                Eliminar
              </button>

            </div>
          ))
        }

      </div>

    </div>
  );
}
export default Personas;