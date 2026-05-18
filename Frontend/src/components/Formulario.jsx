import { useState } from "react";

function Formulario({ onGuardar }) {

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const enviar = () => {

    if (!nombre || !telefono) {
      alert("Completa todos los campos");
      return;
    }

    onGuardar({ nombre, telefono });

    setNombre("");
    setTelefono("");
  };

  return (
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

      <button onClick={enviar}>
        Guardar
      </button>

    </div>
  );
}

export default Formulario;