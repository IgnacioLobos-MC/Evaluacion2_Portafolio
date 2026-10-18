
import { useState, useRef } from "react";
import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const nombreRef = useRef(null);

  const manejarEnvio = (e) => {
    e.preventDefault();

    setError("");
    setEnviado(false);

    if (!nombre.trim()) {
      setError("Error. Ingresa tu nombre por favor!!");
      nombreRef.current.focus();
      return;
    }

    if (!correo.trim() || !mensaje.trim()) {
      setError("Error. Debes completar todos los campos del formulario!!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      setError("Error. Ingresa un correo electrónico válido!!");
      return;
    }

    setEnviado(true);
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>

      <p>
        ¿Tienes alguna consulta o propuesta? Escríbeme a través del
        siguiente formulario.
      </p>

      <form onSubmit={manejarEnvio}>
        <CampoFormulario
          id="nombre"
          etiqueta="Nombre"
          valor={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          inputRef={nombreRef}
          maxLength={60}
        />

        <CampoFormulario
          id="correo"
          etiqueta="Correo electrónico"
          tipo="email"
          valor={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="tunombre@correo.com"
        />

        <CampoFormulario
          id="mensaje"
          etiqueta="Mensaje"
          valor={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje"
          multilinea={true}
          maxLength={500}
          rows={5}
        />

        <Boton type="submit">Enviar mensaje</Boton>

        {error && <p role="alert">{error}</p>}

        {enviado && (
          <p role="status">
            ¡Formulario validado correctamente!
          </p>
        )}
      </form>
    </section>
  );
}

export default Contacto;
