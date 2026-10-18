
function Proyectos() {
  const proyectos = [
    {
      titulo: "Mundo Cigarro",
      categoria: "Programación",
      descripcion:
        "Examen de Desarrollo Fullstack I. proyecto de API REST",
      enlace:
        "https://github.com/IgnacioLobos-MC/MundoCigarroWC",
      plataforma: "Ver repositorio en GitHub",
    },
    {
      titulo: "Prueba Formativa: Perros y Gatos",
      categoria: "Programación",
      descripcion:
        "Proyecto desarrollado como parte de una evaluación formativa.",
      enlace:
        "https://github.com/IgnacioLobos-MC/PruebaFormativa_PerrosyGatos",
      plataforma: "Ver repositorio en GitHub",
    },
    {
      titulo: "Producción musical: GRIM - Visions of Death",
      categoria: "Productor",
      descripcion:
        "Proyecto de titulo de la carrera Producción musical disponible para escuchar en spotify.",
      enlace:
        "https://open.spotify.com/intl-es/album/6GOFlsuVXsPbuJnfypGX7l?si=NrRl93drSfS7D8vYpQp5uQ",
      plataforma: "Escuchalo en Spotify!!",
    },
    {
      titulo: "Producción musical: No Invierno - Plantas para sanar",
      categoria: "Productor / Músico",
      descripcion:
        "Lanzamiento musical en el que participas como productor y músico.",
      enlace:
        "https://open.spotify.com/intl-es/album/24svCRj0wG5G5LNZp8CuJe?si=5e653dcd08b0491a",
      plataforma: "Escuchalo en Spotify!!",
    },
    {
      titulo: "Perfil de artista",
      categoria: "Músico",
      descripcion:
        "Conoce mi trabajo como Bajista!.",
      enlace:
        "https://open.spotify.com/intl-es/artist/6IkqGyJsjDRHL6wI3drNUW?si=I4B-zxH8QwqoH4gd0jVJ4w",
      plataforma: "Ver perfil en Spotify!",
    },
  ];

  return (
    <section id="proyectos" className="proyectos">
      <h2>Mis proyectos</h2>

      <p className="proyectos-intro">
        Una muestra de mi trabajo en programación y de mi pasión por la música.
      </p>

      <h3 className="proyectos-subtitulo">Programación</h3>

      <div className="proyectos-grid">
        {proyectos
          .filter((proyecto) => proyecto.categoria === "Programación")
          .map((proyecto) => (
            <article className="proyecto" key={proyecto.titulo}>
              <span className="proyecto-categoria">
                {proyecto.categoria}
              </span>

              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>

              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
              >
                {proyecto.plataforma}
              </a>
            </article>
          ))}
      </div>

      <h3 className="proyectos-subtitulo">Producción musical y música</h3>

      <div className="proyectos-grid">
        {proyectos
          .filter((proyecto) => proyecto.categoria !== "Programación")
          .map((proyecto) => (
            <article className="proyecto" key={proyecto.titulo}>
              <span className="proyecto-categoria">
                {proyecto.categoria}
              </span>

              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>

              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
              >
                {proyecto.plataforma}
              </a>
            </article>
          ))}
      </div>
    </section>
  );
}

export default Proyectos;
