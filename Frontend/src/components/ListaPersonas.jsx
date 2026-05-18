import PersonaCard from "./PersonaCard";

function ListaPersonas({ personas, onEliminar }) {

  return (
    <div className="lista">

      {
        personas.map((persona) => (

          <PersonaCard
            key={persona.id}
            persona={persona}
            onEliminar={onEliminar}
          />
        ))
      }

    </div>
  );
}

export default ListaPersonas;