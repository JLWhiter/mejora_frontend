function CgestControlAuditoriaEticaPublica() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20CONTROL%2C%20AUDITORÍA%20Y%20ÉTICA%20PÚBLICA",
      "_blank"
    );
  };

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Control, Auditoría y Ética Pública</h1>
      </header>


      {/* PRESENTACIÓN */}
      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          El Curso de Control, Auditoría y Ética Pública está orientado a
          capacitar a profesionales y funcionarios en los principios de
          control interno, auditoría institucional y prácticas éticas
          en la función pública. Se enfoca en la normativa vigente,
          estándares de auditoría y tendencias en gobernanza,
          transparencia y prevención de la corrupción.
        </p>

        <p>
          Además, incorpora enfoques modernos como auditoría digital,
          control basado en riesgos, compliance y gobierno electrónico.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Conocer principios, normas y herramientas de control y auditoría pública.</li>
          <li>Planificar, ejecutar y evaluar auditorías y controles administrativos.</li>
          <li>Aplicar criterios de ética, integridad y transparencia en la gestión pública.</li>
          <li>Integrar auditoría digital, gestión de riesgos y gobierno abierto.</li>
        </ul>

      </section>


      {/* METODOLOGÍA */}
      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/gestion-pu.jpg"
            alt="Metodología del curso de control y auditoría pública"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque andragógico combinando clases expositivas,
              análisis de casos reales, talleres prácticos,
              simulaciones de auditorías y resolución de dilemas éticos.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas PDF con guías de control interno
              y auditoría, normativa vigente, estándares internacionales
              y recursos digitales interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Evaluación progresiva mediante exámenes teóricos y prácticos,
              desarrollo de proyectos de auditoría y simulaciones
              de control interno.
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
              Certificado de participación o aprobación.
            </li>

          </ul>

        </div>

      </section>


      {/* TEMARIO */}
      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción al Control, Auditoría y Ética Pública</li>
          <li>Control Interno en la Gestión Pública</li>
          <li>Auditoría Pública y Gestión de Riesgos</li>
          <li>Ética, Integridad y Transparencia</li>
          <li>Herramientas Digitales para Control y Auditoría</li>
          <li>Evaluación y Mejora Continua</li>
          <li>Tendencias y Buenas Prácticas en Control y Auditoría Pública</li>

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

export default CgestControlAuditoriaEticaPublica;