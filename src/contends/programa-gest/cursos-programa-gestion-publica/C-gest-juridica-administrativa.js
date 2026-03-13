import '../curso-gest-publica.css'

function CgestGestionJuridicaAdministrativa(){

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>GESTIÓN JURÍDICA Y ADMINISTRATIVA</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          El curso de Gestión Jurídica y Administrativa está diseñado para
          formar profesionales capaces de integrar los aspectos legales y
          administrativos en la gestión organizacional. Se enfoca en normativa
          administrativa, procedimientos legales, transparencia y control
          interno, incorporando tendencias como digitalización de procesos,
          gobierno electrónico, gestión de riesgos legales y cumplimiento
          normativo.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender principios y normas de la gestión jurídica y administrativa.</li>
          <li>Desarrollar habilidades de organización y control administrativo.</li>
          <li>Aplicar herramientas jurídicas en la toma de decisiones.</li>
          <li>Integrar digitalización, gobierno electrónico y gestión de riesgos legales.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_juridica.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque andragógico combinando clases expositivas,
              análisis normativo, talleres prácticos, simulaciones
              de procedimientos administrativos y elaboración de
              documentos legales.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas PDF con normativas y
              formatos administrativos, lecturas especializadas
              y recursos digitales interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Evaluación progresiva mediante exámenes teóricos
              y prácticos, desarrollo de proyectos administrativos
              y participación activa en talleres.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o modalidad mixta.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas organizadas
              en módulos de 3 a 6 horas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado de participación o aprobación
              cumpliendo asistencia mínima y evaluación satisfactoria.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a la Gestión Jurídica y Administrativa</li>
          <li>Organización y Planeamiento Administrativo</li>
          <li>Procedimientos Administrativos y Trámites Legales</li>
          <li>Gestión Jurídica Aplicada a la Administración</li>
          <li>Transparencia, Control y Cumplimiento Normativo</li>
          <li>Gestión Documental y Digitalización de Procesos</li>
          <li>Evaluación y Mejora Continua</li>
          <li>Tendencias y Buenas Prácticas en Gestión Jurídica</li>

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

export default CgestGestionJuridicaAdministrativa;