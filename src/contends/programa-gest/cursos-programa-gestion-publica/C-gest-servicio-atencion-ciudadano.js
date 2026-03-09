import '../curso-gest-publica.css'

function CgestionServicioCiudadano() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Gestión%20de%20Servicio%20al%20Ciudadano",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Gestión de Servicio al Ciudadano</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso enfocado en la mejora de la calidad del servicio público
          y atención al ciudadano, promoviendo eficiencia, ética y uso de
          herramientas digitales para un servicio moderno y transparente.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Brindar atención eficiente, ética y centrada en el ciudadano.</li>
          <li>Mejorar la calidad del servicio público y la satisfacción ciudadana.</li>
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
              <strong>Metodología:</strong> Talleres vivenciales, casos prácticos,
              simulaciones y análisis de experiencias reales de atención al ciudadano.
            </li>

            <li>
              <strong>Material Académico:</strong> Presentaciones PPT, PDFs y guías de atención al ciudadano.
            </li>

            <li>
              <strong>Evaluación:</strong> Prácticas, evaluaciones teóricas y desempeño en simulaciones.
            </li>

            <li>
              <strong>Modalidad:</strong> Presencial, virtual o mixta según disponibilidad.
            </li>

            <li>
              <strong>Duración:</strong> Entre 9 y 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong> Certificado por aprobación cumpliendo asistencia y evaluación.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">
          <li>Servicios públicos y su rol en la comunidad</li>
          <li>Derechos y deberes del ciudadano</li>
          <li>Atención, comunicación y trato al ciudadano</li>
          <li>Calidad del servicio y mejora continua</li>
          <li>Herramientas digitales para atención y gestión</li>
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

export default CgestionServicioCiudadano;