import '../curso-gest-publica.css'

function Cgestadobeotros(){

  const solicitarInformacion = () => {
    window.open(
      "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información%20sobre%20el%20curso%20de%20ADOBE%20PHOTOSHOP%20ILLUSTRATOR%20E%20INDESIGN",
      "_blank"
    );
  }

  return (
    <article className="curso-container">

      <header className="curso-header">
        <h1>ADOBE PHOTOSHOP, ILLUSTRATOR E INDESIGN</h1>
      </header>

      <section className="curso-presentacion">

        <h2>Presentación</h2>

        <p>
          Programa especializado orientado al aprendizaje de herramientas
          profesionales de diseño gráfico y diseño editorial mediante el uso
          de Adobe Photoshop, Illustrator e InDesign. El curso permite desarrollar
          habilidades para la creación, edición y producción de piezas gráficas
          digitales e impresas utilizadas en marketing, publicidad y comunicación visual.
        </p>

        <h2>Objetivos</h2>

        <ul className="lista-objetivos">
          <li>Dominar las herramientas fundamentales de Adobe Photoshop para edición y retoque de imágenes.</li>
          <li>Crear ilustraciones vectoriales profesionales utilizando Adobe Illustrator.</li>
          <li>Diseñar piezas editoriales y material publicitario con Adobe InDesign.</li>
          <li>Integrar las tres herramientas para desarrollar proyectos completos de diseño gráfico.</li>
        </ul>

      </section>

      <section className="curso-metodologia">

        <div className="metodologia-img">
          <img
            src="/uploads/curs_adobe.png"
            alt="Curso Adobe Photoshop Illustrator InDesign"
          />
        </div>

        <div className="metodologia-info">

          <h2>Metodología</h2>

          <ul className="metodologia-lista">

            <li>
              <strong>Metodología:</strong>
              Clases prácticas guiadas, desarrollo de proyectos de diseño,
              ejercicios de edición gráfica y elaboración de piezas
              publicitarias reales.
            </li>

            <li>
              <strong>Material Académico:</strong>
              Archivos de práctica, guías en PDF, recursos gráficos,
              plantillas de diseño y ejemplos profesionales.
            </li>

            <li>
              <strong>Evaluación:</strong>
              Desarrollo de piezas gráficas, prácticas calificadas
              y proyecto final de diseño.
            </li>

            <li>
              <strong>Modalidad:</strong>
              Presencial, virtual o semipresencial.
            </li>

            <li>
              <strong>Duración:</strong>
              Entre 90 y 250 horas académicas.
            </li>

            <li>
              <strong>Certificación:</strong>
              Certificado otorgado por la Escuela de Gerencia y Gestión.
            </li>

          </ul>

        </div>

      </section>

      <section className="curso-temario">

        <h2>Temario Principal</h2>

        <ul className="temario-lista">

          <li>Introducción al Diseño Gráfico y Adobe Creative Cloud</li>
          <li>Adobe Photoshop: edición, retoque fotográfico y composición</li>
          <li>Adobe Illustrator: ilustración vectorial y diseño de logotipos</li>
          <li>Adobe InDesign: diseño editorial y maquetación profesional</li>
          <li>Integración de Photoshop, Illustrator e InDesign en proyectos de diseño</li>
          <li>Desarrollo de piezas gráficas publicitarias</li>
          <li>Proyecto final de diseño gráfico</li>

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

export default Cgestadobeotros;