import '../curso-gest-publica.css'

function CgesProyectoBIM(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Proyecto%20BIM",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Gestión de Proyectos BIM</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso enfocado en la gestión de proyectos bajo metodología BIM,
          fomentando trabajo colaborativo digital, coordinación de información
          y aplicación de estándares internacionales para el sector de la construcción.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender y aplicar la metodología BIM en proyectos de construcción.</li>
          <li>Gestionar información, documentación y coordinación entre equipos.</li>
          <li>Optimizar procesos mediante trabajo colaborativo digital.</li>
          <li>Integrar normas y buenas prácticas en la gestión de proyectos BIM.</li>
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
              Enfoque andragógico, con casos prácticos, simulaciones y trabajo colaborativo digital.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, PDFs, ejemplos de proyectos BIM y recursos digitales.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Prácticas, resolución de casos y proyecto aplicado.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas según el nivel y profundidad del curso.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por participación o aprobación cumpliendo los requisitos del curso.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">
          <li>Introducción a BIM</li>
          <li>Normativa y estándares BIM</li>
          <li>Planificación de proyectos BIM</li>
          <li>Coordinación y gestión de información</li>
          <li>Trabajo colaborativo y optimización de procesos</li>
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

export default CgesProyectoBIM;