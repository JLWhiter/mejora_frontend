import '../curso-gest-publica.css'

function CgestHabilidadesBlandas(){

  const solicitarInformacion = () => {
    window.open(
     "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>HABILIDADES BLANDAS</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          El curso de Habilidades Blandas está orientado al fortalecimiento
          de competencias personales y profesionales como comunicación
          efectiva, liderazgo, trabajo en equipo y resolución de conflictos,
          integrando tendencias actuales como inteligencia emocional,
          pensamiento crítico, creatividad y bienestar organizacional.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Desarrollar competencias personales y sociales para entornos laborales.</li>
          <li>Mejorar la comunicación, liderazgo y trabajo en equipo.</li>
          <li>Fomentar inteligencia emocional, adaptabilidad y creatividad.</li>
          <li>Integrar pensamiento crítico e innovación en la toma de decisiones.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_habilidades_blandas.jpg"
            alt="Metodología del curso"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Enfoque andragógico con clases expositivas, talleres
              vivenciales, dinámicas grupales, estudios de caso,
              simulaciones laborales y sesiones de retroalimentación
              y coaching.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Presentaciones PPT, separatas en PDF con ejercicios
              prácticos, lecturas especializadas y recursos digitales.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Evaluaciones teóricas y prácticas, dinámicas grupales,
              simulaciones de liderazgo y participación activa en talleres.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o mixta según disponibilidad institucional.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 9 y 250 horas académicas organizadas en módulos
              de 3 a 6 horas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificación por participación o aprobación cumpliendo
              asistencia mínima y evaluación satisfactoria.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción a las Habilidades Blandas</li>
          <li>Comunicación Efectiva</li>
          <li>Inteligencia Emocional y Autoconocimiento</li>
          <li>Liderazgo y Motivación</li>
          <li>Trabajo en Equipo y Resolución de Conflictos</li>
          <li>Creatividad, Innovación y Pensamiento Crítico</li>
          <li>Ética y Responsabilidad Profesional</li>
          <li>Gestión del Tiempo y Productividad Personal</li>
          <li>Proyecto Integrador y Evaluación Final</li>

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

export default CgestHabilidadesBlandas;