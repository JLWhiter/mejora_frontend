function CgestPublicaEstrategica(){

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return(

    <article className="curso-container">

      <header className="curso-header">
        <h1>Gestión Pública Estratégica y Planeamiento</h1>
      </header>


      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado al diseño, implementación y evaluación de políticas públicas 
          y planes estratégicos, enfocado en gestión por resultados, innovación pública 
          y creación de valor público.
        </p>


        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Desarrollar capacidades estratégicas en el sector público.</li>
          <li>Fortalecer la toma de decisiones basada en evidencia.</li>
          <li>Aplicar herramientas modernas de planeamiento estratégico.</li>
          <li>Promover una gestión pública eficiente e innovadora.</li>
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
              <strong>Metodología:</strong> Clases teórico-prácticas,
              análisis de casos reales, talleres aplicados y trabajo colaborativo.
            </li>

            <li>
              <strong>Material Académico:</strong> Presentaciones PPT,
              separatas PDF, guías estratégicas y casos nacionales e internacionales.
            </li>

            <li>
              <strong>Evaluación:</strong> Evaluaciones modulares,
              trabajos prácticos y proyecto final integrador.
            </li>

            <li>
              <strong>Modalidad:</strong> Presencial, Virtual y Mixta.
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

          <li>Gestión Pública Moderna</li>
          <li>Planeamiento Estratégico</li>
          <li>Gestión por Resultados</li>
          <li>Políticas Públicas</li>
          <li>Indicadores y Evaluación</li>
          <li>Innovación y Transformación Digital</li>

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

export default CgestPublicaEstrategica;