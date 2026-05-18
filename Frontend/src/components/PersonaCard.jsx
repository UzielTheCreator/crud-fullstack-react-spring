function PersonaCard({ persona, onEliminar }) {

  return (
    <div className="card">

      <h2>{persona.nombre}</h2>

      <p>{persona.telefono}</p>

      <button
        onClick={() => onEliminar(persona.id)}
      >
        Eliminar
      </button>

    </div>
  );
}

export default PersonaCard;