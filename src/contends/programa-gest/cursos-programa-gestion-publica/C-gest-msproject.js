import '../curso-gest-publica.css'

function CgestMSProject(){

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Gestión de Proyectos con MS Project</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a la planificación, control y seguimiento
          de proyectos utilizando Microsoft Project como herramienta
          de gestión. Permite organizar cronogramas, administrar
          recursos y realizar seguimiento eficiente del avance
          de proyectos.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Planificar proyectos utilizando herramientas digitales.</li>
          <li>Controlar tiempos, recursos y costos mediante MS Project.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/gestion-pu.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque práctico con ejercicios guiados,
              desarrollo de proyectos y análisis de casos reales.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas en PDF
              y archivos de proyectos para práctica.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Ejercicios prácticos, desarrollo de
              actividades guiadas y proyecto final.
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
              Certificado por cumplimiento y aprobación
              de actividades del curso.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Gestión de Proyectos</li>
          <li>Creación y Gestión de Cronogramas</li>
          <li>Administración de Recursos y Costos</li>
          <li>Seguimiento y Control del Proyecto</li>
          <li>Generación de Reportes y Análisis</li>

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

export default CgestMSProject;