function CgestDerechoPenalFP() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20DERECHO%20PENAL%20EN%20LA%20FUNCIÓN%20PÚBLICA",
      "_blank"
    );
  };

  return (

    <article className="curso-container">

      <header className="curso-header">
        <h1>Derecho Penal en la Función Pública</h1>
      </header>


      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso dirigido a servidores públicos, abogados y profesionales del sector
          público para comprender la responsabilidad penal en el ejercicio de sus
          funciones, con enfoque en prevención de delitos, normas vigentes y
          tendencias de control y transparencia.
        </p>


        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender los delitos más relevantes en la función pública y sus consecuencias legales.</li>
          <li>Identificar responsabilidades penales y administrativas de los funcionarios.</li>
          <li>Aplicar herramientas para prevenir riesgos penales en la gestión pública.</li>
          <li>Fomentar la ética, la transparencia y el cumplimiento normativo.</li>
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
              <strong>Metodología:</strong> Andragogía con enfoque práctico y participativo,
              clases interactivas, análisis de casos reales, talleres de riesgos penales
              y simulaciones de gestión preventiva.
            </li>

            <li>
              <strong>Material Académico:</strong> Presentaciones PPT, PDFs con legislación
              y jurisprudencia vigente, manuales de prevención y recursos digitales
              para actualización normativa.
            </li>

            <li>
              <strong>Evaluación:</strong> Exámenes teóricos, talleres prácticos,
              análisis de casos reales y participación en debates.
            </li>

            <li>
              <strong>Modalidad:</strong> Presencial, Virtual o Mixta.
            </li>

            <li>
              <strong>Duración:</strong> De 9 a 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong> Certificado oficial por aprobación.
            </li>

          </ul>

        </div>

      </section>


      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción al Derecho Penal en la Función Pública</li>
          <li>Marco normativo y legislación aplicable</li>
          <li>Delitos contra la administración pública</li>
          <li>Responsabilidad penal y administrativa de funcionarios</li>
          <li>Prevención de riesgos penales</li>
          <li>Investigación y control de delitos</li>
          <li>Análisis de casos judiciales</li>
          <li>Ética, transparencia y buenas prácticas en la gestión pública</li>

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

export default CgestDerechoPenalFP;