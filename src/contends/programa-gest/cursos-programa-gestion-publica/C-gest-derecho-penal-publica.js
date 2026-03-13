import '../curso-gest-publica.css'

function Cgestderechopenalfp(){

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>DERECHO PENAL EN LA FUNCIÓN PÚBLICA</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Programa especializado orientado al análisis del Derecho Penal aplicado
          a la función pública, enfocado en la prevención, identificación y
          análisis de delitos cometidos por funcionarios y servidores del Estado.
          El curso permite comprender las responsabilidades penales dentro de la
          administración pública y fortalecer la transparencia y legalidad en la
          gestión pública.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender los fundamentos del derecho penal aplicados a la administración pública.</li>
          <li>Analizar los delitos contra la administración pública en el marco legal peruano.</li>
          <li>Identificar responsabilidades penales de funcionarios y servidores públicos.</li>
          <li>Promover una gestión pública ética, transparente y conforme a la ley.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_derecho_penal_publica.jpg"
            alt="Metodología del curso de Derecho Penal en la Función Pública"
            loading="lazy"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Clases expositivas, análisis de jurisprudencia,
              estudio de casos reales y discusión de situaciones
              vinculadas a delitos en la administración pública.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, compendios normativos,
              jurisprudencia relevante y guías en formato PDF.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Análisis de casos prácticos, participación en clase
              y evaluación final.
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
          <li>Fundamentos del Derecho Penal en la Administración Pública</li>
          <li>Delitos contra la Administración Pública</li>
          <li>Corrupción de funcionarios y responsabilidad penal</li>
          <li>Peculado, colusión, cohecho y negociación incompatible</li>
          <li>Prevención de delitos y ética en la función pública</li>
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

export default Cgestderechopenalfp;