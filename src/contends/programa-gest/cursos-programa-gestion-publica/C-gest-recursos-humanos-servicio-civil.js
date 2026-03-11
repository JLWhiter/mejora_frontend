import '../curso-gest-publica.css'

function CgestRecursosHumanosServicioCivil(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20Gestión%20de%20Recursos%20Humanos%20y%20Servicio%20Civil",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Curso diseñado para capacitar a profesionales y funcionarios en la administración
          del talento humano en el sector público y privado, conforme a la normativa laboral
          y del servicio civil vigente. Incluye tendencias modernas como digitalización de
          procesos, gestión por competencias, liderazgo organizacional y bienestar laboral.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Comprender principios y normas del servicio civil y RR.HH.</li>
          <li>Desarrollar habilidades en reclutamiento, selección y evaluación del personal.</li>
          <li>Aplicar estrategias de liderazgo y desarrollo del talento humano.</li>
          <li>Integrar digitalización, gestión por competencias y bienestar organizacional.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_recursos_humanos.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Clases expositivas, análisis de casos reales, talleres prácticos,
              simulaciones de procesos de RR.HH. y ejercicios de evaluación y planificación.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas PDF con manuales y normativas,
              lecturas especializadas y recursos digitales interactivos.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Exámenes teóricos y prácticos, desarrollo de proyectos de RR.HH.
              y participación activa en talleres.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o mixta según disponibilidad institucional.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas organizadas en módulos de 3 a 6 horas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado de participación o aprobación cumpliendo asistencia mínima
              y evaluación satisfactoria.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">
          <li>Introducción a la Gestión de Recursos Humanos y Servicio Civil</li>
          <li>Planificación y Gestión del Talento Humano</li>
          <li>Capacitación y Desarrollo de Competencias</li>
          <li>Evaluación del Desempeño y Retención del Personal</li>
          <li>Relaciones Laborales y Normativa del Servicio Civil</li>
          <li>Compensaciones y Beneficios</li>
          <li>Gestión Digital y Tendencias en RR.HH.</li>
          <li>Evaluación y Mejora Continua en Gestión de RR.HH.</li>
          <li>Tendencias y Buenas Prácticas en Servicio Civil</li>
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

export default CgestRecursosHumanosServicioCivil;