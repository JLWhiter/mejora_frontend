import '../curso-gest-publica.css'

function CgestJardineriaPoda(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Jardinería%20y%20Poda",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Jardinería y Poda</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso diseñado para capacitar en técnicas de jardinería, poda de árboles
          y trabajo seguro en altura, integrando normativa de seguridad laboral,
          manejo de herramientas, protección personal y legislación ambiental.
          Combina teoría, práctica y simulaciones vivenciales.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Conocer principios y normas de jardinería y arboricultura urbana.</li>
          <li>Aplicar técnicas correctas de poda y mantenimiento.</li>
          <li>Desarrollar habilidades para trabajo seguro en altura.</li>
          <li>Integrar seguridad laboral y sostenibilidad ambiental.</li>
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
              Enfoque andragógico con clases demostrativas, talleres
              vivenciales, simulaciones con arneses y cuerdas,
              análisis de casos y trabajo colaborativo.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, guías técnicas de poda, manuales
              de seguridad, documentos PDF y recursos digitales.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes teóricos, prácticas en campo, proyecto
              aplicado y participación en talleres.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por aprobación y cumplimiento
              de asistencia mínima.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Jardinería y Arboricultura</li>
          <li>Herramientas y Equipos de Jardinería y Poda</li>
          <li>Técnicas de Poda de Árboles y Plantas</li>
          <li>Trabajo Seguro en Altura</li>
          <li>Mantenimiento de Jardines y Áreas Verdes</li>
          <li>Arboricultura Urbana y Paisajismo</li>
          <li>Evaluación y Mejora Continua</li>
          <li>Tendencias en Jardinería y Sostenibilidad</li>

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

export default CgestJardineriaPoda;