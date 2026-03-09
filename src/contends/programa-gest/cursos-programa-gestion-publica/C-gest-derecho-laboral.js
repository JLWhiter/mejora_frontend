function CgestDerechoLaboral() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20CURSO%20DE%20DERECHO%20LABORAL",
      "_blank"
    );
  };

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Derecho Laboral</h1>
      </header>


      {/* PRESENTACIÓN */}
      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          El Curso de Derecho Laboral está diseñado para capacitar a profesionales,
          funcionarios y responsables de la gestión de personal en el conocimiento
          y aplicación de la legislación laboral vigente. Se enfoca en los
          principales aspectos normativos, derechos y obligaciones de empleadores
          y trabajadores, contratos, seguridad social y resolución de conflictos
          laborales.
        </p>

        <p>
          Asimismo, incorpora tendencias actuales como teletrabajo, cumplimiento
          normativo, derechos digitales y gestión de riesgos laborales.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Conocer el marco legal laboral y normas aplicables.</li>
          <li>Aplicar principios del derecho laboral en la gestión de personal.</li>
          <li>Interpretar contratos y normativa de seguridad social.</li>
          <li>Integrar teletrabajo, digitalización y compliance laboral.</li>
        </ul>

      </section>


      {/* METODOLOGÍA */}
      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/gestion-pu.jpg"
            alt="Metodología del curso de derecho laboral"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque andragógico combinando clases expositivas,
              análisis de normativa, estudios de caso, talleres
              prácticos y simulaciones de conflictos laborales.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas PDF con normativa laboral,
              guías prácticas, jurisprudencia relevante y recursos
              digitales interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Evaluación progresiva mediante exámenes teóricos y
              prácticos, desarrollo de casos y simulaciones de
              negociación laboral.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              De 9 a 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por participación o aprobación.
            </li>

          </ul>

        </div>

      </section>


      {/* TEMARIO */}
      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción al Derecho Laboral</li>
          <li>Contratos de Trabajo y Tipologías</li>
          <li>Condiciones de Trabajo y Seguridad Social</li>
          <li>Relaciones Laborales y Negociación Colectiva</li>
          <li>Derechos Laborales Especiales y Teletrabajo</li>
          <li>Procedimientos Legales y Jurisprudencia</li>
          <li>Ética y Cumplimiento Laboral</li>
          <li>Tendencias y Buenas Prácticas en Derecho Laboral</li>

        </ul>

      </section>


      {/* CTA */}
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

export default CgestDerechoLaboral;