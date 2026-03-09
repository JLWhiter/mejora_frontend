import './cursomedida.css'
import '../stylescss/diplomas.css';
function CursoMedida (){

    return(
    <section className="curso-medida">

      <header className="curso-hero">
        <img
          src="/uploads/banner2.jpg"
          alt="Cursos Inhouse"
          className="hero-img"
        />

        <div className="hero-overlay">
          <h1 className="hero-title typewriter-animation">
            CURSOS INHOUSE
          </h1>
        </div>
      </header>


      <article className="curso-container">

        {/* INTRODUCCIÓN */}
        <section className="curso-intro">
          <p>
            En la <strong>Escuela de Gerencia y Gestión SAC</strong> desarrollamos 
            <strong> Cursos a la Medida Institucional</strong> diseñados según las 
            necesidades específicas de cada entidad pública, alineados al 
            <strong> Plan de Desarrollo de Personas (PDP) 2026–2027</strong> y 
            enfocados en maximizar el impacto de la inversión en capacitación.
          </p>
        </section>


        {/* EXPERIENCIA */}
        <section className="curso-experiencia">

          <div className="experiencia-texto">

            <h2>Nuestra Experiencia</h2>

            <p>
              A lo largo de nuestra trayectoria, hemos capacitado a entidades del
              Gobierno Nacional, Regional y Local, así como a organismos
              constitucionalmente autónomos, consolidando una sólida experiencia
              en el sector público.
            </p>

            <p>
              Nuestra experiencia se encuentra acreditada en el SEACE y es
              verificable en el Buscador de Proveedores del Estado del OSCE,
              garantizando transparencia, confiabilidad y cumplimiento normativo.
            </p>

            <div className="cta-box">
              <h3>Solicita ahora tus programas a la medida</h3>
              <p>
                Diseñamos Programas Corporativos a la Medida, colocando a tu
                institución en el centro de la solución formativa con un enfoque
                por competencias orientado a resultados institucionales.
              </p>

              <button className="btn-cta">
                Solicitar Información
              </button>
            </div>

          </div>


          {/* IMAGEN */}
          <div className="experiencia-img">
            <img
              src="/uploads/curs_10.webp"
              alt="Cursos institucionales"
            />
          </div>

        </section>

      </article>

    </section>
  );

}

export default CursoMedida;