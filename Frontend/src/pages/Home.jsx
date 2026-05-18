import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home">

      <div className="hero">

        <h1>
          CRUD Fullstack
        </h1>

        <p>
          React + Spring Boot + MySQL
        </p>

        <div className="botones">

          <Link to="/personas">
            <button>
              Ver Personas
            </button>
          </Link>

          <Link to="/crear">
            <button>
              Crear Persona
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;