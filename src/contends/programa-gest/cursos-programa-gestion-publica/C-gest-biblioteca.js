function CgestBiblioteca() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20GESTIÓN%20DE%20BIBLIOTECAS",
      "_blank"
    );
  };

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>GESTIÓN DE BIBLIOTECA</h1>
      </header>


      {/* PRESENTACIÓN */}
      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a la organización, administración y optimización de
          bibliotecas y centros de información, abordando normativa,
          propiedad intelectual, digitalización, acceso abierto y gestión
          de colecciones físicas y digitales.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender normas y principios de gestión bibliotecaria.</li>
          <li>Planificar y evaluar servicios bibliotecarios.</li>
          <li>Aplicar estrategias de digitalización y modernización.</li>
          <li>Promover atención al usuario y servicios innovadores.</li>
        </ul>

      </section>


      {/* METODOLOGÍA */}
      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_gestion_biblioteca.webp"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque andragógico con clases expositivas, talleres prácticos,
              estudios de caso, simulaciones de gestión bibliotecaria y uso
              de herramientas digitales especializadas.
            </li>

            <li>
              <strong>Material Académico:</strong>
              PPT, PDF con normas y procedimientos, manuales de
              bibliotecología y recursos digitales.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes teóricos, proyectos de organización y
              digitalización, y prácticas aplicadas.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual y mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              De 9 a 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por aprobación y asistencia mínima requerida.
            </li>

          </ul>

        </div>

      </section>


      {/* TEMARIO */}
      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">
          <li>Introducción a la Gestión de Bibliotecas</li>
          <li>Planificación y Organización</li>
          <li>Gestión de Recursos Humanos</li>
          <li>Gestión de Colecciones</li>
          <li>Servicios al Usuario</li>
          <li>Gestión Financiera y Presupuestal</li>
          <li>Tecnologías y Automatización</li>
          <li>Evaluación y Mejora de Servicios</li>
          <li>Tendencias en Bibliotecas Modernas</li>
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

export default CgestBiblioteca;