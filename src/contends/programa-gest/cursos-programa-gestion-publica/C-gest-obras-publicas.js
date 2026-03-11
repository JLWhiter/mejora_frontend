import '../curso-gest-publica.css'

function CgestObrasPublicas(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Gestión%20de%20Obras%20Públicas",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>GESTIÓN DE OBRAS PÚBLICAS</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a fortalecer competencias en planificación,
          supervisión, ejecución y control de proyectos de infraestructura
          pública, aplicando normativa vigente, buenas prácticas,
          sostenibilidad y tecnologías modernas.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender el marco normativo que rige las obras públicas.</li>
          <li>Aplicar herramientas de planificación, gestión y supervisión de proyectos.</li>
          <li>Mejorar la eficiencia, calidad y sostenibilidad en la ejecución de obras.</li>
          <li>Desarrollar habilidades para la toma de decisiones técnicas, financieras y sociales.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_gestion_obras_publicas.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque andragógico con aprendizaje activo: clases
              interactivas, talleres prácticos, simulación de proyectos,
              análisis de casos reales y uso de software de gestión
              de obras.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT por módulo, separatas en PDF con
              normas y guías técnicas, estudios de caso, formatos
              de supervisión y recursos digitales.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes parciales y finales, talleres prácticos,
              simulaciones de gestión y participación activa.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas según el nivel
              de especialización.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por aprobación cumpliendo asistencia
              mínima y evaluaciones.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Gestión de Obras Públicas</li>
          <li>Marco Normativo y Regulatorio</li>
          <li>Planificación y Programación de Obras</li>
          <li>Gestión Financiera y Control de Costos</li>
          <li>Supervisión y Control de Ejecución</li>
          <li>Evaluación de Proyectos y Sostenibilidad</li>
          <li>Uso de Tecnologías en la Gestión de Obras</li>
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

export default CgestObrasPublicas;