import '../curso-gest-publica.css'

function CgestMunicipal(){

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>GESTIÓN MUNICIPAL</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a capacitar en administración y gobernanza
          de gobiernos locales, abordando normativa municipal,
          planificación estratégica, gestión de recursos,
          transparencia, participación ciudadana y digitalización
          de servicios públicos.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender principios y normas de la gestión municipal.</li>
          <li>Planificar y evaluar proyectos y servicios públicos locales.</li>
          <li>Aplicar estrategias de eficiencia y participación ciudadana.</li>
          <li>Fomentar innovación y uso de tecnologías en gobiernos locales.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_gestion_municipal.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque andragógico con clases expositivas,
              talleres prácticos, aprendizaje basado en problemas,
              simulaciones de toma de decisiones y uso de
              herramientas digitales municipales.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas en PDF con normativa
              municipal, guías prácticas y recursos digitales
              interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes teóricos, desarrollo de proyectos
              municipales y prácticas de planificación y gestión.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por aprobación y cumplimiento
              de asistencia mínima.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Gestión Municipal</li>
          <li>Planificación Estratégica y Proyectos Municipales</li>
          <li>Gestión Financiera y Presupuestal</li>
          <li>Gestión de Recursos Humanos Municipales</li>
          <li>Servicios Públicos y Participación Ciudadana</li>
          <li>Tecnologías y Gobierno Digital</li>
          <li>Gestión Ambiental y Sostenibilidad Local</li>
          <li>Evaluación y Mejora Municipal</li>
          <li>Tendencias en Gestión Municipal</li>

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

export default CgestMunicipal;