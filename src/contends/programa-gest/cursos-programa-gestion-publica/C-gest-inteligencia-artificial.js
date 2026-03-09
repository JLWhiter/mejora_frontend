import '../curso-gest-publica.css'

function CgestInteligenciaArtificial(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Inteligencia%20Artificial%20y%20Ciencia%20de%20Datos",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Inteligencia Artificial y Ciencia de Datos</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          El curso de Inteligencia Artificial y Ciencia de Datos está orientado
          al desarrollo de competencias en gestión, análisis y aprovechamiento
          estratégico de datos, así como en la aplicación práctica de técnicas
          de inteligencia artificial y machine learning. Asimismo, incorpora
          aspectos éticos, normativos y tendencias actuales como la IA generativa
          y la analítica predictiva.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender los fundamentos de la ciencia de datos y la inteligencia artificial.</li>
          <li>Desarrollar habilidades de análisis, visualización e interpretación de datos.</li>
          <li>Aplicar técnicas básicas y avanzadas de inteligencia artificial y machine learning.</li>
          <li>Promover el uso ético, seguro y responsable de los datos y la inteligencia artificial.</li>
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
              Enfoque andragógico con clases expositivas, talleres prácticos,
              análisis de datos reales, aprendizaje basado en proyectos y
              estudios de caso.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas en PDF, datasets de práctica,
              notebooks interactivos y recursos digitales especializados.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Evaluaciones teóricas, prácticas calificadas, desarrollo
              de proyectos aplicados y participación activa.
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
              Certificación por participación o aprobación con
              presentación de proyecto final.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Inteligencia Artificial y Ciencia de Datos</li>
          <li>Marco Normativo y Ética en Inteligencia Artificial</li>
          <li>Fundamentos de Datos y Estadística</li>
          <li>Herramientas para Data Science</li>
          <li>Análisis y Visualización de Datos</li>
          <li>Machine Learning Básico</li>
          <li>Aplicaciones Prácticas de la Inteligencia Artificial</li>
          <li>Gestión de Proyectos de Inteligencia Artificial</li>
          <li>Proyecto Integrador Final</li>

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

export default CgestInteligenciaArtificial;