import '../curso-gest-publica.css'

function CgestPaisajismo(){

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>PAISAJISMO, JARDINERÍA Y PODA DE ÁRBOLES</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso técnico–práctico orientado al manejo, mantenimiento y
          diseño de áreas verdes, jardines y espacios paisajísticos,
          aplicando técnicas modernas de jardinería, poda y cuidado
          de especies vegetales.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Aplicar técnicas básicas y avanzadas de jardinería.</li>
          <li>Realizar poda y mantenimiento de árboles y plantas.</li>
          <li>Conocer el manejo adecuado de especies ornamentales.</li>
          <li>Trabajar con seguridad en labores de mantenimiento de áreas verdes.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_jardineria_poda.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Prácticas de campo, demostraciones técnicas,
              talleres guiados y aprendizaje basado en
              experiencias reales de mantenimiento de áreas verdes.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas en PDF,
              manuales de jardinería y guías técnicas
              para manejo de especies vegetales.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Evaluación práctica mediante demostraciones,
              ejercicios de campo y participación activa.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta según
              disponibilidad del programa.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas según el
              nivel de capacitación.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por aprobación cumpliendo
              asistencia mínima y evaluación satisfactoria.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción al Paisajismo</li>
          <li>Técnicas de Jardinería</li>
          <li>Manejo de Especies Ornamentales</li>
          <li>Poda de Árboles y Plantas</li>
          <li>Seguridad y Trabajo en Altura</li>

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

export default CgestPaisajismo;