function CgestFinanzasPublicas(){

  const solicitarInformacion = () =>{
      window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
      );
  }

  return (

    <article className="curso-container">

      <header className="curso-header">
        <h1>FINANZAS PÚBLICAS</h1>
      </header>


      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado a la gestión estratégica de ingresos, gastos
          y endeudamiento público, bajo principios de eficiencia,
          transparencia y sostenibilidad fiscal dentro del sector público.
        </p>


        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender los fundamentos de las finanzas públicas.</li>
          <li>Fortalecer la gestión presupuestal en el sector público.</li>
          <li>Aplicar criterios de eficiencia, transparencia y control.</li>
        </ul>

      </section>


      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_finanzas_publicas.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Aprendizaje práctico, análisis de casos reales
              y desarrollo de talleres aplicados al sector público.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas en PDF,
              compendios normativos y casos prácticos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes teóricos, trabajos aplicados
              y participación activa en clase.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, Virtual o Mixta.
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

          <li>Introducción a las Finanzas Públicas</li>
          <li>Sistema Nacional de Presupuesto Público</li>
          <li>Ingresos y Gasto Público</li>
          <li>Endeudamiento y Sostenibilidad Fiscal</li>
          <li>Control y Transparencia en las Finanzas Públicas</li>

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

export default CgestFinanzasPublicas;