import '../curso-gest-publica.css'

function CgestAbastecimiento() {

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>SISTEMA NACIONAL DE ABASTECIMIENTO</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado al fortalecimiento del Sistema Nacional de Abastecimiento,
          enfocándose en eficiencia logística, transparencia y optimización del gasto público.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender el marco normativo del abastecimiento público.</li>
          <li>Aplicar procesos de programación, adquisición y contratación.</li>
          <li>Promover control, eficiencia y mejora continua en la gestión de recursos.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_sistema_nacional_abastecimiento.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong> Análisis de casos reales,
              talleres aplicados y prácticas vivenciales.
            </li>

            <li>
              <strong>Material Académico:</strong> Presentaciones PPT, manuales PDF,
              compendios normativos y formatos oficiales.
            </li>

            <li>
              <strong>Evaluación:</strong> Exámenes teóricos, trabajos prácticos y participación activa.
            </li>

            <li>
              <strong>Modalidad:</strong> Presencial, virtual o mixta.
            </li>

            <li>
              <strong>Duración:</strong> Entre 9 y 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong> Certificado por aprobación cumpliendo asistencia mínima y evaluación.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">
          <li>Marco Normativo del Abastecimiento Público</li>
          <li>Planeamiento y Programación de Compras</li>
          <li>Procesos de Adquisición y Contratación</li>
          <li>Gestión de Almacén e Inventarios</li>
          <li>Control, Transparencia y Mejora Continua</li>
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

export default CgestAbastecimiento;