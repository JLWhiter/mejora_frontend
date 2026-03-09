import '../curso-gest-publica.css'

function CgestGestionMinera(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Gestión%20Minera",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Gestión Minera</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          El curso de Gestión Minera está orientado al fortalecimiento de
          capacidades técnicas, administrativas y normativas vinculadas
          al sector minero, integrando criterios de sostenibilidad,
          seguridad, responsabilidad social e innovación tecnológica
          para una gestión eficiente y alineada al desarrollo sostenible.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender el marco normativo y técnico de la actividad minera.</li>
          <li>Desarrollar competencias en planificación y gestión de proyectos mineros.</li>
          <li>Aplicar criterios de sostenibilidad, seguridad y responsabilidad social.</li>
          <li>Integrar tendencias como minería sostenible y gestión de riesgos.</li>
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
              Enfoque andragógico con clases expositivas, análisis de
              normativa, talleres prácticos, estudios de caso,
              simulaciones de gestión minera y uso de herramientas
              digitales para planificación y control.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas en PDF con guías técnicas
              y normativas, lecturas especializadas y recursos
              digitales interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Evaluaciones teóricas y prácticas, desarrollo de
              proyectos de gestión minera, análisis de casos reales
              y participación activa.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas organizadas
              en módulos de 3 a 6 horas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificación por participación o aprobación,
              cumpliendo asistencia mínima y evaluación satisfactoria.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Gestión Minera</li>
          <li>Marco Legal y Normativo Minero</li>
          <li>Planificación y Gestión de Proyectos Mineros</li>
          <li>Gestión Ambiental en Minería</li>
          <li>Seguridad y Salud Ocupacional en Minería</li>
          <li>Gestión Social y Responsabilidad Social Minera</li>
          <li>Gestión Económica y Financiera Minera</li>
          <li>Tecnología e Innovación en la Gestión Minera</li>
          <li>Evaluación, Control y Mejora Continua</li>

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

export default CgestGestionMinera;