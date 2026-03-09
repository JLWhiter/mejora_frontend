import '../curso-gest-publica.css'

function CgestPublicaEstrategicaPlaneamiento(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20GESTIÓN%20PÚBLICA%20ESTRATÉGICA%20Y%20PLANEAMIENTO",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Gestión Pública Estratégica y Planeamiento</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Programa especializado orientado a fortalecer las capacidades de
          planificación estratégica y gestión pública en entidades del
          Estado, permitiendo una adecuada toma de decisiones orientada
          a resultados.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Fortalecer capacidades de planeamiento estratégico.</li>
          <li>Comprender instrumentos de gestión pública.</li>
          <li>Aplicar metodologías de planificación institucional.</li>
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
              Talleres prácticos, análisis de casos y desarrollo de
              ejercicios aplicados al sector público.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, guías en PDF y recursos complementarios.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Desarrollo de actividades prácticas y evaluación final.
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
              Certificado otorgado por la Escuela de Gerencia y Gestión.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Fundamentos de la Gestión Pública Estratégica</li>
          <li>Planeamiento Estratégico Institucional</li>
          <li>Gestión por Resultados en el Sector Público</li>
          <li>Instrumentos de Gestión y Presupuesto Público</li>
          <li>Proyecto Aplicado de Planeamiento Estratégico</li>

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

export default CgestPublicaEstrategicaPlaneamiento;