import '../curso-gest-publica.css'

function CgestPrevencionSeguridadVial(){

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>PREVENCIÓN Y SEGURIDAD VIAL</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a la prevención de accidentes de tránsito y
          promoción de una adecuada cultura vial, fortaleciendo
          conocimientos sobre normas de tránsito, identificación de
          riesgos y aplicación de medidas de seguridad en la vía pública.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Identificar riesgos y factores que generan accidentes viales.</li>
          <li>Aplicar medidas preventivas para mejorar la seguridad vial.</li>
          <li>Promover una cultura de respeto a las normas de tránsito.</li>
          <li>Fomentar conductas responsables en conductores y peatones.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_seguridad_vial.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Talleres participativos, análisis de casos reales,
              dinámicas educativas y prácticas vivenciales sobre
              seguridad vial.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas en PDF,
              guías prácticas y material educativo
              sobre normas de tránsito.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes cortos, desarrollo de actividades
              prácticas y participación en talleres.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas según
              el nivel del programa.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por participación o aprobación
              cumpliendo asistencia mínima.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Seguridad Vial</li>
          <li>Factores de Riesgo en la Vía Pública</li>
          <li>Normas y Señalización de Tránsito</li>
          <li>Prevención de Accidentes</li>
          <li>Educación y Cultura Vial</li>
          <li>Seguridad Vial Urbana</li>

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

export default CgestPrevencionSeguridadVial;