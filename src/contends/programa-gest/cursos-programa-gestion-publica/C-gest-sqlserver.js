import '../curso-gest-publica.css'

function CgestSQLServer() {

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20SQL%20Server",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>SQL SERVER</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso orientado al manejo de bases de datos con SQL Server, considerando buenas prácticas,
          seguridad de la información y tendencias en análisis de datos.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Consultar y administrar bases de datos.</li>
          <li>Aplicar SQL para análisis y gestión de información.</li>
          <li>Diseñar consultas avanzadas y optimizar bases de datos.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_sql_server.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong> Andragogía, práctica guiada,
              ejercicios reales, laboratorios y mini-proyectos.
            </li>

            <li>
              <strong>Material Académico:</strong> Presentaciones PPT, separatas PDF,
              scripts SQL y bases de datos de práctica.
            </li>

            <li>
              <strong>Evaluación:</strong> Ejercicios prácticos, exámenes cortos y proyecto final.
            </li>

            <li>
              <strong>Modalidad:</strong> Presencial, virtual o mixta según disponibilidad tecnológica.
            </li>

            <li>
              <strong>Duración:</strong> Entre 9 y 250 horas académicas según nivel.
            </li>

            <li>
              <strong>Certificación:</strong> Certificado por aprobación cumpliendo asistencia mínima y evaluaciones.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">
          <li>Bases de Datos Relacionales</li>
          <li>SQL Básico y Consultas Simples</li>
          <li>Consultas Avanzadas y Procedimientos</li>
          <li>Seguridad, Respaldo y Recuperación</li>
          <li>Reportes, Optimización y Mejores Prácticas</li>
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

export default CgestSQLServer;