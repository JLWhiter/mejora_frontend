function CgestAmbiental() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20GESTIÓN%20AMBIENTAL",
      "_blank"
    );
  };

  return (
    <article className="curso-container">

      {/* TITULO */}
      <header className="curso-header">
        <h1>Gestión Ambiental</h1>
      </header>


      {/* PRESENTACIÓN */}
      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a capacitar en planificación, implementación y
          evaluación de políticas y proyectos ambientales, integrando
          legislación, sostenibilidad y tendencias actuales como
          economía circular y gestión del cambio climático.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender principios y normas de gestión ambiental.</li>
          <li>Planificar e implementar proyectos ambientales sostenibles.</li>
          <li>Aplicar herramientas de gestión ambiental en organizaciones.</li>
          <li>Promover conciencia ambiental e innovación en el uso de recursos naturales.</li>
        </ul>

      </section>


      {/* METODOLOGÍA */}
      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/gestion-pu.jpg"
            alt="Metodología del curso de gestión ambiental"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Andragogía con clases expositivas, talleres prácticos,
              estudios de caso, simulaciones ambientales y uso de
              herramientas de monitoreo ambiental.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, documentos PDF, normativas ambientales,
              guías técnicas y recursos digitales interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes teóricos, desarrollo de proyectos de gestión
              ambiental y prácticas aplicadas.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o semipresencial.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 90 y 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por aprobación y cumplimiento de asistencia.
            </li>

          </ul>

        </div>

      </section>


      {/* TEMARIO */}
      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Gestión Ambiental</li>
          <li>Políticas y Planificación Ambiental</li>
          <li>Gestión de Recursos Naturales</li>
          <li>Gestión de Residuos y Economía Circular</li>
          <li>Control Ambiental y Monitoreo</li>
          <li>Cambio Climático y Gestión de Riesgos</li>
          <li>Educación y Conciencia Ambiental</li>
          <li>Evaluación y Mejora Ambiental</li>
          <li>Tendencias en Gestión Ambiental</li>

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

export default CgestAmbiental;