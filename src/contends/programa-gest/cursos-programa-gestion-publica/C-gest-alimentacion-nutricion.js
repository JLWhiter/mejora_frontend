function CgestAlimentacionNutricion() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20ALIMENTACIÓN%20Y%20NUTRICIÓN",
      "_blank"
    );
  };

  return (
    <article className="curso-container">

      {/* TITULO */}
      <header className="curso-header">
        <h1>Alimentación y Nutrición</h1>
      </header>


      {/* PRESENTACIÓN */}
      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a capacitar en principios de nutrición humana,
          hábitos alimentarios saludables y estrategias de intervención
          nutricional, integrando normativa sanitaria y tendencias actuales
          como nutrición personalizada y alimentación funcional.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender fundamentos de alimentación y nutrición saludable.</li>
          <li>Evaluar necesidades nutricionales y planificar dietas adecuadas.</li>
          <li>Aplicar estrategias de educación nutricional.</li>
          <li>Integrar nutrición con prevención de enfermedades y bienestar.</li>
        </ul>

      </section>


      {/* METODOLOGÍA */}
      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/gestion-pu.jpg"
            alt="Metodología del curso de nutrición"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Andragogía con clases expositivas, talleres prácticos de
              evaluación nutricional, planificación de menús, estudios
              de caso y uso de herramientas digitales.
            </li>

            <li>
              <strong>Material Académico:</strong>
              PPT, PDF, guías alimentarias, tablas nutricionales y
              recursos digitales interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes teóricos, proyectos de intervención nutricional
              y prácticas aplicadas.
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

          <li>Introducción a la Alimentación y Nutrición</li>
          <li>Macronutrientes y Micronutrientes</li>
          <li>Evaluación Nutricional</li>
          <li>Planificación y Diseño de Dietas</li>
          <li>Educación y Promoción Nutricional</li>
          <li>Seguridad Alimentaria y Calidad Nutricional</li>
          <li>Tendencias en Alimentación y Nutrición</li>
          <li>Gestión de Programas Nutricionales</li>

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

export default CgestAlimentacionNutricion;