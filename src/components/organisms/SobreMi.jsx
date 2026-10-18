
import avatar from "../../assets/avatar yo ese.png";

function SobreMi() {
  return (
    <section id="inicio" className="about">
      <div className="presentacion">
        <p className="saludo">¡Hola!, mi nombre es</p>

        <h1>Ignacio Lobos</h1>

        <h2>Estudiante de Analista Programador</h2>

        <p className="descripcion">
          Soy estudiante de Analista Programador en Duoc UC. Me interesa
          mucho la programación y soy un amante de VS Code. Fuera de la
          tecnología, me gusta mucho la música, tocar instrumentos, el cine
          y los videojuegos (soy un niño rata).
          Me motiva seguir aprendiendo y desarrollar proyectos que me
          permitan mejorar como programador y como persona.
        </p>

      </div>

      <img
        src={avatar}
        alt="Avatar ilustrado de Ignacio Lobos"
        className="avatar"
      />
    </section>
  );
}

export default SobreMi;
