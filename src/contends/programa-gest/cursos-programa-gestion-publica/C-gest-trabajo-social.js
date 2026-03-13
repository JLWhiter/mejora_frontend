import '../curso-gest-publica.css'

function CgestTrabajoSocial() {

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>TRABAJO SOCIAL</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          El Curso de Trabajo Social está orientado al fortalecimiento de competencias en 
          intervención social, gestión de programas sociales y atención a poblaciones en 
          situación de vulnerabilidad, integrando enfoques de derechos humanos, inclusión, 
          igualdad de género e innovación social.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender fundamentos teóricos, normativos y éticos del trabajo social.</li>
          <li>Desarrollar habilidades de intervención individual, familiar y comunitaria.</li>
          <li>Aplicar herramientas para gestión y evaluación de proyectos sociales.</li>
          <li>Integrar enfoques de derechos humanos y desarrollo social sostenible.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_trabajo_social.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong> Clases expositivas, talleres prácticos,
              estudios de caso, simulaciones de intervención social y uso de herramientas digitales.
            </li>

            <li>
              <strong>Material Académico:</strong> Presentaciones PPT, separatas PDF con guías de intervención,
              normativas, estudios de caso y recursos digitales interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong> Exámenes teóricos y prácticos, elaboración de proyectos sociales,
              prácticas vivenciales y participación activa.
            </li>

            <li>
              <strong>Modalidad:</strong> Presencial, virtual o mixta según necesidades institucionales.
            </li>

            <li>
              <strong>Duración:</strong> Entre 9 y 250 horas, organizadas en módulos de 3 a 6 horas.
            </li>

            <li>
              <strong>Certificación:</strong> Certificado por participación o aprobación cumpliendo asistencia
              y evaluación satisfactoria.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">
          <li>Introducción al Trabajo Social</li>
          <li>Políticas Sociales y Derechos Humanos</li>
          <li>Metodología del Trabajo Social</li>
          <li>Intervención Comunitaria y Desarrollo Social</li>
          <li>Gestión de Programas y Proyectos Sociales</li>
          <li>Trabajo Social en Ámbitos Específicos</li>
          <li>Ética Profesional y Responsabilidad Social</li>
          <li>Innovación y Tendencias en Trabajo Social</li>
          <li>Evaluación y Mejora Continua</li>
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

export default CgestTrabajoSocial;