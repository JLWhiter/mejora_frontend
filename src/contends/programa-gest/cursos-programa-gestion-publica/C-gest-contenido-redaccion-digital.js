function CgestContenidoRedaccionDigital() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20CONTENIDO%20Y%20REDACCIÓN%20DIGITAL",
      "_blank"
    );
  };

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Contenido y Redacción Digital</h1>
      </header>


      {/* PRESENTACIÓN */}
      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          El Curso de Contenido y Redacción Digital está orientado al desarrollo
          de competencias para la creación, edición y gestión de contenidos
          escritos en entornos digitales, integrando aspectos normativos,
          éticos y tendencias actuales como SEO, storytelling,
          marketing de contenidos y herramientas de inteligencia artificial.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Desarrollar habilidades de redacción y edición de contenidos digitales.</li>
          <li>Aplicar técnicas de escritura persuasiva y comunicación efectiva.</li>
          <li>Comprender el marco normativo y ético digital.</li>
          <li>Integrar SEO, storytelling y herramientas digitales en la redacción.</li>
        </ul>

      </section>


      {/* METODOLOGÍA */}
      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/gestion-pu.jpg"
            alt="Metodología del curso de redacción digital"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque andragógico con aprendizaje activo, talleres prácticos,
              análisis de casos reales, desarrollo de proyectos y uso de
              herramientas digitales de optimización y edición.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas en PDF, plantillas,
              briefs, ejemplos prácticos, herramientas SEO
              y recursos digitales colaborativos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Evaluaciones teóricas, prácticas calificadas,
              desarrollo de proyectos digitales y participación
              activa en talleres.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              De 9 a 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificación por participación o aprobación,
              cumpliendo asistencia, evaluaciones y proyecto final.
            </li>

          </ul>

        </div>

      </section>


      {/* TEMARIO */}
      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción al Contenido y Redacción Digital</li>
          <li>Marco Normativo y Ética Digital</li>
          <li>Fundamentos de Redacción Digital</li>
          <li>Copywriting y Escritura Persuasiva</li>
          <li>Redacción SEO y Optimización de Contenidos</li>
          <li>Contenido para Redes Sociales</li>
          <li>Redacción UX</li>
          <li>Herramientas Digitales y Apoyo de IA</li>
          <li>Proyecto Integrador Final</li>

        </ul>

      </section>


      {/* CTA */}
      <section className="curso-cta">

        <h3>Solicita información sobre este curso</h3>

        <button
          className="btn-inscribirse"
          onClick={solicitarInformacion}
        >
          Solicitar Información
        </button>

      </section>

    </article>
  );
}

export default CgestContenidoRedaccionDigital;