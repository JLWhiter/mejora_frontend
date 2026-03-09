import '../curso-gest-publica.css'

function CgestSaludPublica(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Gestión%20Pública%20en%20Salud",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Gestión Pública en Salud</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso diseñado para proporcionar conocimientos teóricos y prácticos sobre la organización,
          planificación y administración de los servicios de salud públicos, integrando normativa vigente,
          políticas sanitarias, innovación, eficiencia administrativa y atención centrada en la persona.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender los principios y normas que rigen la gestión pública en salud.</li>
          <li>Planificar, organizar y evaluar servicios de salud públicos.</li>
          <li>Aplicar herramientas modernas de gestión para mejorar calidad y eficiencia.</li>
          <li>Tomar decisiones estratégicas basadas en evidencia.</li>
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
              Aprendizaje andragógico con casos prácticos, talleres, simulaciones y uso de herramientas digitales.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, PDF, artículos actualizados y guías normativas.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes teóricos y prácticos, desarrollo de proyectos y participación en talleres.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas según profundidad del curso.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por aprobación y cumplimiento de requisitos académicos.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">
          <li>Introducción a la Gestión Pública en Salud</li>
          <li>Políticas y Planificación en Salud</li>
          <li>Gestión de Recursos Humanos en Salud</li>
          <li>Gestión Financiera y Presupuestal</li>
          <li>Gestión de la Calidad en Servicios de Salud</li>
          <li>Sistemas de Información en Salud</li>
          <li>Evaluación de Programas y Proyectos</li>
          <li>Ética y Gobernanza en Salud</li>
          <li>Tendencias Actuales en Gestión Pública en Salud</li>
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

export default CgestSaludPublica;