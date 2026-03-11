import '../curso-gest-publica.css'

function CgestInversionPublica(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Inversión%20Pública",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>INVERSIÓN PÚBLICA</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a la planificación, evaluación y ejecución de proyectos
          bajo la normativa de Invierte.pe, con enfoque en eficiencia, transparencia,
          priorización estratégica y sostenibilidad en la inversión pública.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender el marco normativo y metodológico de la inversión pública en el Perú.</li>
          <li>Aplicar herramientas de formulación, evaluación y priorización de proyectos.</li>
          <li>Desarrollar competencias para el seguimiento y evaluación con enfoque en resultados.</li>
          <li>Promover el uso de tecnologías digitales en la gestión de proyectos públicos.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_inversion_publica.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque andragógico con clases interactivas, análisis de casos
              reales, talleres de formulación y evaluación de proyectos,
              simulaciones prácticas y uso de herramientas digitales.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT por módulo, separatas en PDF, normativa
              actualizada, plantillas de evaluación, estudios de caso y
              recursos digitales oficiales de Invierte.pe.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes parciales y finales, resolución de casos prácticos,
              talleres grupales y participación activa en simulaciones.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta (blended).
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas según el nivel de especialización.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por aprobación cumpliendo asistencia mínima
              y evaluaciones.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Inversión Pública</li>
          <li>Marco Normativo y Regulatorio</li>
          <li>Ciclo de Proyectos de Inversión Pública</li>
          <li>Gestión Financiera y Presupuestal</li>
          <li>Evaluación Económica, Social y Ambiental</li>
          <li>Herramientas Digitales y Tecnológicas</li>
          <li>Casos Prácticos y Experiencias Locales</li>
          <li>Tendencias y Gestión por Resultados</li>

        </ul>

      </section>

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

export default CgestInversionPublica;