const URL = "http://localhost:8080";

export const obtenerPersonas = async () => {

  const response = await fetch(`${URL}/personas`);

  return await response.json();
};

export const guardarPersona = async (persona) => {

  await fetch(`${URL}/grabar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(persona)
  });
};

export const eliminarPersona = async (id) => {

  await fetch(`${URL}/delete/${id}`, {
    method: "DELETE"
  });
};