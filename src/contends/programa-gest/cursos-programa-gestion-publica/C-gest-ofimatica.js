import '../curso-gest-publica.css'

function CgestOfimatica(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Ofimática",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>Curso de Ofimática</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          El curso de Ofimática está orientado al desarrollo de competencias
          digitales esenciales para el manejo eficiente de herramientas
          informáticas en entornos laborales, académicos y administrativos,
          integrando buenas prácticas de seguridad digital, trabajo colaborativo
          en la nube y automatización básica.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Desarrollar habilidades en el uso de herramientas ofimáticas.</li>
          <li>Aplicar buenas prácticas en seguridad y manejo de información digital.</li>
          <li>Incrementar la productividad mediante aplicaciones ofimáticas.</li>
          <li>Integrar trabajo colaborativo y automatización básica.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/ofimatica.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque práctico con clases demostrativas, talleres guiados
              paso a paso, aprendizaje basado en proyectos y uso de
              plataformas colaborativas.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas PDF, archivos de práctica,
              videos tutoriales y recursos digitales interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Evaluaciones prácticas por módulo, exámenes teóricos básicos,
              proyectos integradores y participación activa.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas según el nivel
              (básico, intermedio o avanzado).
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado por participación o aprobación cumpliendo
              asistencia mínima y evaluación satisfactoria.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Ofimática</li>
          <li>Procesador de Textos</li>
          <li>Hojas de Cálculo</li>
          <li>Presentaciones Digitales</li>
          <li>Internet y Correo Electrónico</li>
          <li>Trabajo Colaborativo y Nube</li>
          <li>Automatización Básica y Productividad</li>
          <li>Proyecto Final Integrador</li>

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

export default CgestOfimatica;