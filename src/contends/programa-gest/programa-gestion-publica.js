import '../stylescss/programa-gestion-publica.css';
import { FaShieldAlt, FaChartBar, FaBalanceScale, FaUsers, FaBullseye } from "react-icons/fa";

function ProgramaGestionPublica() {
  return (
    <section className="programa-publica">

      {/* HERO */}
      <section className="programa-hero">
        <img
          src="/uploads/port.jpg"
          alt="Programa Gestión Pública"
          className="programa-hero__image"
        />

        <div className="programa-hero__overlay"></div>

        <div className="programa-hero__content">
          <p className="programa-hero__eyebrow">CURSO GESTIÓN PÚBLICA</p>
          <h1 className="programa-hero__title">Programa Gestión Pública</h1>
          <p className="programa-hero__text">
            Formación profesional enfocada en la gestión eficiente del sector público.
          </p>
          <button className="programa-hero__button">Descubre el programa</button>
        </div>
      </section>

      {/* QUE SON */}
      <section className="programa-bloque programa-bloque--dos">
        <article className="programa-card programa-card--texto">
          <h2>¿Qué son los cursos de Gestión Pública?</h2>
          <p>
            Los cursos de gestión pública están orientados a formar profesionales capaces de planificar,
            administrar y evaluar políticas, programas y servicios del sector público. Se enfocan en mejorar
            el funcionamiento del Estado y la calidad de los servicios que recibe la ciudadanía.
          </p>
          <p>
            Actividades de corta duración (12 a 24 horas) que tratan temas específicos y especializados,
            novedosos o de coyuntura, están dirigidas a profesionales en general, propiciando la discusión
            de temas de interés mutuo. A través de estos eventos, el IGC busca atender las necesidades de
            capacitación de grupos específicos de las entidades del Sector Público y la actividad Empresarial
            en temas relacionados a la Gestión Pública y gestión de competencias empresariales.
          </p>
        </article>

        <div className="programa-media">
          <img
            src="/uploads/curs_7.png"
            alt="Cursos de Gestión Pública"
            className="programa-media__image"
          />
        </div>
      </section>

      {/* PERFECCIONAMIENTO */}
      <section className="programa-bloque programa-bloque--dos programa-bloque--invertido">
        <div className="programa-media">
          <img
            src="/uploads/curs_3.png"
            alt="Programas de perfeccionamiento"
            className="programa-media__image"
          />
        </div>

        <article className="programa-card programa-card--texto">
          <h2>Programas de Perfeccionamiento - Cursos Regulares</h2>
          <p>
            Cursos y Talleres cuyo objetivo es desarrollar competencias específicas para mejorar la eficiencia
            de los procesos de la actividad profesional, capacitación y actualización en todas las áreas
            administrativas, contables, tributarios, financieros, recursos humanos, tecnológicos y habilidades blandas.
          </p>
          <p>
            Los cursos y talleres de estos programas tienen una duración entre 24 a 250 horas académicas,
            dependiendo si se realizan en nuestras instalaciones respectivamente.
          </p>
          <p>
            Se ofrecen en la modalidad presencial y a distancia.
          </p>
        </article>
      </section>

      {/* OBJETIVOS */}
      <section className="programa-objetivos">
        <div className="section-heading">
          <p className="section-heading__eyebrow">OBJETIVOS DEL PROGRAMA</p>
          <h2 className="section-heading__title">Objetivos principales</h2>
          <p className="section-heading__text">
            Entre los objetivos más comunes de estos cursos se encuentran:
          </p>
        </div>

        <div className="programa-objetivos__grid">
          <article className="programa-card objetivo-card">
            <div className="objetivo-card__icono">
              <FaShieldAlt />
            </div>
            <div className="objetivo-card__contenido">
              <h3>Administración pública eficiente, ética y transparente</h3>
              <p>
                Fortalecer capacidades para una administración pública eficiente, ética y transparente.
              </p>
            </div>
          </article>

          <article className="programa-card objetivo-card">
            <div className="objetivo-card__icono">
              <FaChartBar />
            </div>
            <div className="objetivo-card__contenido">
              <h3>Toma de decisiones</h3>
              <p>
                Desarrollar habilidades para la toma de decisiones en instituciones públicas.
              </p>
            </div>
          </article>

          <article className="programa-card objetivo-card">
            <div className="objetivo-card__icono">
              <FaBalanceScale />
            </div>
            <div className="objetivo-card__contenido">
              <h3>Marco legal y administrativo</h3>
              <p>
                Comprender el marco legal, político y administrativo del sector público.
              </p>
            </div>
          </article>

          <article className="programa-card objetivo-card">
            <div className="objetivo-card__icono">
              <FaUsers />
            </div>
            <div className="objetivo-card__contenido">
              <h3>Gestión de recursos públicos</h3>
              <p>
                Mejorar la gestión de recursos públicos, tanto humanos, financieros como materiales.
              </p>
            </div>
          </article>

          <article className="programa-card objetivo-card objetivo-card--full">
            <div className="objetivo-card__icono">
              <FaBullseye />
            </div>
            <div className="objetivo-card__contenido">
              <h3>Orientación al servicio ciudadano</h3>
              <p>
                Promover la rendición de cuentas y la orientación al servicio ciudadano.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="programa-bloque programa-bloque--dos">
        <div className="programa-media">
          <img
            src="/uploads/curs_8.png"
            alt="Metodología de enseñanza"
            className="programa-media__image"
          />
        </div>

        <article className="programa-card programa-card--texto">
          <h2>Metodología de enseñanza</h2>
          <p>
            La metodología suele ser teórico–práctica, combinando:
          </p>

          <ul className="programa-lista">
            <li>Clases magistrales.</li>
            <li>Análisis de casos reales del sector público.</li>
            <li>Talleres y trabajos grupales.</li>
            <li>Debates y simulaciones de toma de decisiones.</li>
            <li>Proyectos aplicados a instituciones públicas.</li>
          </ul>
        </article>
      </section>

    </section>
  );
}

export default ProgramaGestionPublica;