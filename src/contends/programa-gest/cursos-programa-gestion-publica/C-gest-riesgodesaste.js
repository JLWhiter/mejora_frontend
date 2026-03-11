import '../curso-gest-publica.css'

function CgesRiesgoDesastre() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Gestión%20de%20Riesgo%20de%20Desastres",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>GESTIÓN DE RIESGOS DE DESASTRES</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a la prevención, reducción y respuesta ante desastres,
          fomentando la preparación, coordinación y resiliencia en comunidades
          y organizaciones frente a emergencias.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Identificar y gestionar riesgos ante desastres naturales y tecnológicos.</li>
          <li>Aplicar planes de prevención, mitigación y respuesta eficiente.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_riesgo_desastre.webp"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">
            <li>
              <strong>Metodología:</strong>
              Casos prácticos, simulaciones, talleres participativos
              y análisis de escenarios de riesgo real.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, PDFs y planes modelo para gestión
              de riesgos y desastres.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Prácticas, evaluaciones de desempeño y participación
              en simulaciones.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas según profundidad del curso.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por cumplimiento de asistencia y evaluaciones.
            </li>
          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">
          <li>Marco normativo en gestión de riesgos</li>
          <li>Identificación y análisis de riesgos</li>
          <li>Prevención y mitigación de desastres</li>
          <li>Planes de respuesta ante emergencias</li>
          <li>Recuperación y continuidad</li>
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

export default CgesRiesgoDesastre;